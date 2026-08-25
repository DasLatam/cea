<?php
/**
 * Alta al newsletter de CEA.
 *
 * Reemplaza a `app/api/subscribe/route.ts`. Igual que el de contacto, avisa por
 * mail — pero además **deja el alta en un archivo**, que la ruta de Next no
 * hacía: si el mail se pierde o el buzón se limpia, el suscriptor se perdía con
 * él. Un CSV en el hosting no es una base de datos, y para juntar direcciones
 * hasta que exista el registro único de hiox alcanza y sobra.
 */

declare(strict_types=1);
require_once __DIR__ . '/_correo.php';

$d = hiox_cuerpo();

$nombre = hiox_texto($d, 'name', 'nombre');
$email  = hiox_texto($d, 'email');
$temas  = [];
if (isset($d['interests']) && is_array($d['interests'])) {
    foreach (array_slice($d['interests'], 0, 6) as $t) {
        if (is_string($t) && trim($t) !== '') {
            $temas[] = trim($t);
        }
    }
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    hiox_json(['ok' => false, 'error' => 'Ingresá un email válido.'], 400);
}
if (!hiox_permitido('cea-alta')) {
    hiox_json(['ok' => false, 'error' => 'Probá de nuevo en un rato.'], 429);
}

// El padrón vive fuera del árbol público: /public_html lo comparten todos los
// dominios del hosting y todo lo que cae ahí es descargable por cualquiera.
// Un CSV de direcciones de mail expuesto es exactamente lo que no puede pasar.
$padron = dirname(__DIR__, 4) . '/datos-hiox/cea-suscriptores.csv';
@mkdir(dirname($padron), 0700, true);
$fila = [date('c'), $email, $nombre, implode('|', $temas), $_SERVER['REMOTE_ADDR'] ?? ''];
$fh = @fopen($padron, 'a');
if ($fh) {
    if (flock($fh, LOCK_EX)) {
        fputcsv($fh, $fila);
        flock($fh, LOCK_UN);
    }
    fclose($fh);
}

$cfg     = hiox_config_correo();
$destino = $cfg['destinatario'] ?? ($cfg['usuario'] ?? '');
if ($destino !== '') {
    $html = '<h2>Alta en el newsletter de CEA</h2><table cellpadding="6">'
          . '<tr><td><b>Email</b></td><td>' . hiox_esc($email) . '</td></tr>'
          . '<tr><td><b>Nombre</b></td><td>' . hiox_esc($nombre !== '' ? $nombre : 'No informado') . '</td></tr>'
          . '<tr><td><b>Intereses</b></td><td>'
          . hiox_esc($temas ? implode(', ', $temas) : 'No especificados') . '</td></tr>'
          . '</table>';
    // El alta ya quedó guardada: que el aviso falle no invalida la suscripción,
    // así que no se le devuelve error a quien se suscribió.
    hiox_enviar_mail($destino, 'CEA · nueva suscripción', $html, $email);
}

hiox_json(['ok' => true]);
