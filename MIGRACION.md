# CEA se mudó a hiox.com.ar/cea/

Desde el 2026-08-25 el sitio vive en **https://hiox.com.ar/cea/**, servido por
Ferozo. **No quedó nada en Vercel**: este repo sólo redirige.

El sitio es HTML exportado (`output: "export"`, `basePath: "/cea"`) y los dos
formularios —contacto y suscripción— los atienden `public/api/*.php` contra el
SMTP de Ferozo. Se fue la dependencia de Resend.

## Por qué el redirect importa

Mientras `daslatamcea.vercel.app` siga sirviendo el sitio completo, hay **dos
copias del mismo contenido en dos dominios**. Google elige una y descarta la
otra, y no necesariamente elige la que queremos: la mudanza a hiox se hizo justo
para que la autoridad se sume en un dominio en vez de repartirse. Con el 301, lo
que el dominio viejo haya juntado se lo lleva el nuevo.

## Publicar

    cd /home/hpp/cea && ./deploy.sh

Necesita `public/api/correo.config.php` ya subido al hosting (tiene la clave del
SMTP, no está en el repo, y `deploy.sh` lo excluye del `mirror --delete`).
