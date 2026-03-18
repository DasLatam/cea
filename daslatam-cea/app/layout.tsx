import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/globals.css";
import SiteNav from "@/components/site/SiteNav";
import AntiAdBlockGate from "@/components/site/AntiAdBlockGate";

export const metadata: Metadata = {
  title: {
    default: "DAS LATAM CEA",
    template: "%s | DAS LATAM CEA",
  },
  description:
    "Herramientas y contenido original para analizar oportunidades de productos en Mercado Libre Argentina.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AntiAdBlockGate />
        <div className="app-shell">
          <header className="site-header">
            <div className="brand-row">
              <Link href="/" className="brand-block">
                <span className="brand-badge">DAS LATAM</span>
                <div>
                  <h1>DAS LATAM CEA</h1>
                  <p className="subtitle">
                    Comercio Electrónico en Argentina · análisis, metodología y herramientas para Mercado Libre
                  </p>
                </div>
              </Link>
              <Link href="/herramientas" className="primary-button inline-button">
                Abrir herramienta
              </Link>
            </div>
            <SiteNav />
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <div>
              <strong>DAS LATAM CEA</strong>
              <p className="muted footer-copy">
                Contenido original, guías operativas y herramientas para evaluar oportunidades de venta en Mercado Libre Argentina.
              </p>
            </div>
            <div className="footer-links">
              <Link href="/about">Sobre DAS LATAM</Link>
              <Link href="/contacto">Contacto</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/terminos">Términos</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
