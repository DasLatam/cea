#!/bin/bash
# Publica CEA en hiox.com.ar/cea/ (Ferozo, por FTP).
#
# CEA vivía en daslatamcea.vercel.app. Se mudó el 2026-08-25: en subcarpeta de
# hiox la autoridad se le suma al dominio en vez de arrancar de cero en el
# suyo. **No quedó nada en Vercel** — el sitio es HTML exportado y los dos
# formularios los atienden dos archivos PHP.
#
#   ./deploy.sh            # build + subir
#   ./deploy.sh --sin-build  # subir lo que ya está en out/
set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP="$RAIZ/daslatam-cea"
CONF="${HOME}/.config/keto/ferozo.env"
REMOTO="/public_html/hiox-apps/cea"
HIOX=/home/hpp/hiox

[ -f "$CONF" ] || { echo "falta $CONF (credenciales FTP de Ferozo)"; exit 1; }

if [ "${1:-}" != "--sin-build" ]; then
  echo "==> build"
  # Enjaulado: `next build` se come varios GB con las páginas de este tamaño y
  # el server ya se congeló una vez por dejar suelto un proceso glotón.
  XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-/run/user/$(id -u)} \
  DBUS_SESSION_BUS_ADDRESS=${DBUS_SESSION_BUS_ADDRESS:-unix:path=/run/user/$(id -u)/bus} \
  MAX=4G /home/hpp/agente/scripts/pesado.sh bash -c "cd '$APP' && npm run build"
  # En una subcarpeta el robots.txt no lo lee nadie: manda el de la raíz del
  # dominio, que es el de hiox y ya anuncia este sitemap.
  rm -f "$APP/out/robots.txt"
fi

# El .htaccess de la app lo genera hiox y es el mismo para todas: reglas sutiles
# copiadas a mano en tres repos divergen al primer arreglo. Se trae el vigente.
PLANTILLA="$HIOX/despliegue/apps/cea.htaccess"
[ -f "$PLANTILLA" ] || { echo "falta $PLANTILLA — corré primero: cd $HIOX && python3 build.py"; exit 1; }
cp "$PLANTILLA" "$APP/out/.htaccess"

set -a; . "$CONF"; set +a
echo "==> subiendo a ftp://$FTP_HOST$REMOTO/"

# `mirror --delete` deja el remoto igual al local, pero sólo dentro de $REMOTO.
# `correo.config.php` se excluye del borrado: tiene la clave del SMTP, no está
# en el repo y se sube a mano una sola vez. Sin esta exclusión, el primer deploy
# después de configurarlo lo borraría y los formularios dejarían de mandar.
lftp <<EOF
set ssl:verify-certificate no
set ftp:ssl-force true
set ftp:ssl-protect-data true
set net:timeout 20
set net:max-retries 3
set mirror:parallel-transfer-count 3
open -u "$FTP_USER","$FTP_PASS" "ftp://$FTP_HOST"
mkdir -p $REMOTO
mirror --reverse --delete --exclude-glob api/correo.config.php --verbose=1 "$APP/out/" "$REMOTO/"
bye
EOF

echo
echo "==> listo — https://hiox.com.ar/cea/"
