<?php
/**
 * Envío de mail por SMTP crudo, sin librerías ni composer.
 *
 * Es el mismo patrón que ya usa PosMed en este hosting
 * (/public_html/posmed/lib/mailer.php): Ferozo no deja instalar dependencias y
 * `mail()` de PHP sale sin autenticar, así que termina en spam o rebota. Hablar
 * SMTP a mano son sesenta líneas y anda.
 *
 * La cuenta es la misma que usa el Radar ForUno para sus informes:
 * no-reply@daslatam.org. Dos cosas que ya costaron y no hay que volver a
 * descubrir:
 *
 *   - el SMTP de Ferozo **rechaza con 550 "Contenido Calificado como SPAM"**
 *     todo mail que mencione un host `*.vercel.app`, enlazado o en texto plano.
 *   - el puerto es el 465 con SSL directo, no STARTTLS en el 587.
 *
 * La clave no vive acá: se lee de `correo.config.php`, que queda fuera del repo
 * y se sube a mano una sola vez (ver README de despliegue).
 */

declare(strict_types=1);

function hiox_config_correo(): array
{
    $archivo = __DIR__ . '/correo.config.php';
    if (!is_file($archivo)) {
        return [];
    }
    $c = require $archivo;
    return is_array($c) ? $c : [];
}

/**
 * Devuelve true si el mail salió. No lanza: del otro lado hay un formulario, y
 * un stack trace en la respuesta sería peor que un "no pudimos enviarlo".
 */
function hiox_enviar_mail(string $para, string $asunto, string $html, string $responder_a = ''): bool
{
    $cfg = hiox_config_correo();
    foreach (['host', 'puerto', 'usuario', 'clave'] as $k) {
        if (empty($cfg[$k])) {
            return false;
        }
    }
    $desde_nombre = $cfg['nombre'] ?? 'hiox.com.ar';

    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $sock = @stream_socket_client(
        'ssl://' . $cfg['host'] . ':' . $cfg['puerto'],
        $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx
    );
    if (!$sock) {
        return false;
    }
    stream_set_timeout($sock, 15);

    // Una respuesta SMTP puede venir en varias líneas; la última tiene un
    // espacio en la cuarta posición ("250 ok") en vez de un guion ("250-...").
    $leer = static function ($s): string {
        $d = '';
        while (!feof($s)) {
            $l = fgets($s, 1024);
            if ($l === false) {
                break;
            }
            $d .= $l;
            if (isset($l[3]) && $l[3] === ' ') {
                break;
            }
        }
        return $d;
    };

    try {
        $leer($sock);
        fputs($sock, "EHLO hiox.com.ar\r\n");            $leer($sock);
        fputs($sock, "AUTH LOGIN\r\n");                   $leer($sock);
        fputs($sock, base64_encode($cfg['usuario']) . "\r\n"); $leer($sock);
        fputs($sock, base64_encode($cfg['clave']) . "\r\n");   $leer($sock);
        fputs($sock, 'MAIL FROM:<' . $cfg['usuario'] . ">\r\n"); $leer($sock);
        fputs($sock, "RCPT TO:<{$para}>\r\n");            $leer($sock);
        fputs($sock, "DATA\r\n");                         $leer($sock);

        $cab = 'From: =?UTF-8?B?' . base64_encode($desde_nombre) . '?= <' . $cfg['usuario'] . ">\r\n"
             . "To: {$para}\r\n"
             . 'Subject: =?UTF-8?B?' . base64_encode($asunto) . "?=\r\n";
        if ($responder_a !== '') {
            // Para poder contestarle a quien escribió apretando "responder".
            $cab .= "Reply-To: {$responder_a}\r\n";
        }
        $cab .= "MIME-Version: 1.0\r\n"
              . "Content-Type: text/html; charset=UTF-8\r\n"
              . "Content-Transfer-Encoding: base64\r\n\r\n"
              . chunk_split(base64_encode($html), 76, "\r\n");

        fputs($sock, $cab . ".\r\n");
        $r = $leer($sock);
        fputs($sock, "QUIT\r\n");
        fclose($sock);
        return str_starts_with(trim($r), '250');
    } catch (Throwable) {
        return false;
    }
}

/** Responde JSON y corta. */
function hiox_json(array $cuerpo, int $codigo = 200): never
{
    http_response_code($codigo);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($cuerpo, JSON_UNESCAPED_UNICODE);
    exit;
}

/** El cuerpo del pedido, que llega como JSON desde el formulario. */
function hiox_cuerpo(): array
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        hiox_json(['ok' => false, 'error' => 'Método no permitido.'], 405);
    }
    $crudo = file_get_contents('php://input') ?: '';
    // 64 KB es holgado para un formulario y corta de raíz el pedido gigante.
    if (strlen($crudo) > 65536) {
        hiox_json(['ok' => false, 'error' => 'El mensaje es demasiado largo.'], 413);
    }
    $d = json_decode($crudo, true);
    return is_array($d) ? $d : [];
}

function hiox_texto(array $d, string ...$claves): string
{
    foreach ($claves as $k) {
        if (isset($d[$k]) && is_string($d[$k]) && trim($d[$k]) !== '') {
            return trim($d[$k]);
        }
    }
    return '';
}

function hiox_esc(string $v): string
{
    return htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/**
 * Freno simple por IP, en archivos. Sin esto el formulario es un relay abierto
 * para cualquiera que le pegue en un bucle, y el que queda en la lista negra es
 * nuestro dominio. No hace falta Redis: son cuatro envíos por hora.
 */
function hiox_permitido(string $llave, int $maximo = 4, int $ventana = 3600): bool
{
    $dir = sys_get_temp_dir() . '/hiox-freno';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'sin-ip';
    $archivo = $dir . '/' . $llave . '-' . md5($ip);
    $ahora = time();

    $marcas = [];
    if (is_file($archivo)) {
        $marcas = array_filter(
            array_map('intval', explode("\n", (string) file_get_contents($archivo))),
            static fn(int $t): bool => $t > $ahora - $ventana
        );
    }
    if (count($marcas) >= $maximo) {
        return false;
    }
    $marcas[] = $ahora;
    @file_put_contents($archivo, implode("\n", $marcas), LOCK_EX);
    return true;
}
