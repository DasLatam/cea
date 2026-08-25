<?php
/**
 * Formulario de contacto de CEA.
 *
 * Reemplaza a `app/api/contact/route.ts`, que corría en Vercel y mandaba por
 * Resend. Acá el sitio es HTML exportado sobre Apache: la única parte que
 * necesita servidor es ésta, y son treinta líneas de PHP.
 *
 * Las validaciones son las mismas que tenía la ruta de Next, a propósito: el
 * formulario del cliente no cambió y espera los mismos mensajes de error.
 */

declare(strict_types=1);
require_once __DIR__ . '/_correo.php';

$d = hiox_cuerpo();

$nombre  = hiox_texto($d, 'name', 'nombre');
$email   = hiox_texto($d, 'email');
$empresa = hiox_texto($d, 'company', 'empresa');
$asunto  = hiox_texto($d, 'topic', 'asunto') ?: 'Consulta general';
$mensaje = hiox_texto($d, 'message', 'mensaje');

if (mb_strlen($nombre) < 2) {
    hiox_json(['ok' => false, 'error' => 'Ingresá tu nombre.'], 400);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    hiox_json(['ok' => false, 'error' => 'Ingresá un email válido.'], 400);
}
if (mb_strlen($mensaje) < 20) {
    hiox_json(['ok' => false, 'error' => 'Contanos un poco más: al menos 20 caracteres.'], 400);
}
if (!hiox_permitido('cea-contacto')) {
    hiox_json(['ok' => false, 'error' => 'Ya nos mandaste varias consultas seguidas. Probá en un rato.'], 429);
}

$cfg     = hiox_config_correo();
$destino = $cfg['destinatario'] ?? ($cfg['usuario'] ?? '');
if ($destino === '') {
    hiox_json(['ok' => false, 'error' => 'No pudimos enviar tu consulta en este momento.'], 500);
}

$html = '<h2>Consulta desde CEA</h2><table cellpadding="6">'
      . '<tr><td><b>Nombre</b></td><td>' . hiox_esc($nombre) . '</td></tr>'
      . '<tr><td><b>Email</b></td><td>' . hiox_esc($email) . '</td></tr>'
      . ($empresa !== '' ? '<tr><td><b>Empresa</b></td><td>' . hiox_esc($empresa) . '</td></tr>' : '')
      . '<tr><td><b>Asunto</b></td><td>' . hiox_esc($asunto) . '</td></tr>'
      . '</table><p style="white-space:pre-wrap">' . hiox_esc($mensaje) . '</p>'
      . '<hr><p style="color:#666;font-size:12px">Enviado desde hiox.com.ar/cea/contacto/</p>';

// El Reply-To es el del visitante: así se le contesta apretando "responder" y
// no hay que copiar la dirección a mano.
if (!hiox_enviar_mail($destino, "CEA · {$asunto} — {$nombre}", $html, $email)) {
    hiox_json(['ok' => false, 'error' => 'No pudimos enviar tu consulta en este momento.'], 502);
}

hiox_json(['ok' => true]);
