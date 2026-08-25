/** @type {import('next').NextConfig} */

// CEA se sirve desde hiox.com.ar/cea/, en Ferozo (Apache + PHP). Eso obliga a
// tres cosas, y las tres son por lo mismo: no hay Node del otro lado.
//
//   output: "export"   → el build escribe HTML plano en out/. Sin esto Next
//                        espera un servidor que renderice, que en Ferozo no hay.
//   basePath: "/cea"   → todos los enlaces y assets salen con el prefijo. El
//                        sitio ya no está en la raíz de un dominio.
//   images unoptimized → el optimizador de imágenes de Next es un endpoint del
//                        servidor. Sin él, cada <Image> quedaría roto.
//
// trailingSlash queda en true a propósito: así el export escribe
// `about/index.html` y Apache lo sirve tal cual, sin depender de reescrituras.
// El .htaccess de la app igual resuelve la forma sin barra.
//
// Los dos formularios (contacto y suscripción) ya no pasan por rutas de API de
// Next: los atienden dos archivos PHP en public/api/, que mandan el mail por el
// SMTP de Ferozo. Ver public/api/contact.php.
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/cea",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    // Lo leen los formularios para pegarle al PHP en la ruta correcta. No se
    // puede usar `basePath` desde el cliente: existe sólo en tiempo de build.
    NEXT_PUBLIC_BASE_PATH: "/cea",
  },
};

export default nextConfig;
