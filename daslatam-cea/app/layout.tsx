import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
