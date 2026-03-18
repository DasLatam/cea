import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DAS LATAM CEA",
  description: "Comercio Electrónico en Argentina - análisis de oportunidades en Mercado Libre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="es">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <div>
              <p className="eyebrow">Powered by DAS LATAM</p>
              <h1>DAS LATAM CEA</h1>
              <p className="subtitle">
                Comercio Electrónico en Argentina · análisis de oportunidades para Mercado Libre
              </p>
            </div>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <span>© DAS LATAM</span>
            <span>comercioelectronico@daslatam.org</span>
          </footer>
        </div>

        {adsenseClient ? (
          <Script
            id="adsense-script"
            strategy="afterInteractive"
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          />
        ) : null}
      </body>
    </html>
  );
}
