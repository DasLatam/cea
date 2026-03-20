import "../styles/globals.css";
import SiteFooter from "@/components/site/SiteFooter";
import SiteNav from "@/components/site/SiteNav";
import { SiteBreadcrumbs } from "@/components/site/SiteBreadcrumbs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Comercio Electrónico en Argentina</title>
        <meta
          name="description"
          content="CEA · Comercio Electrónico en Argentina"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffe600" />
        <meta
          name="google-adsense-account"
          content="ca-pub-8899449255698853"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899449255698853"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <SiteNav />
        <SiteBreadcrumbs />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
