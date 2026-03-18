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
    "Plataforma de inteligencia comercial para Mercado Libre Argentina: scanner, scoring, contenido original y roadmap de producto.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AntiAdBlockGate />
        <div className="app-shell">
          <header className="site-header-shell">
            <div className="site-header">
              <div className="brand-row">
                <Link href="/" className="brand-block">
                  <span className="brand-badge">DAS LATAM</span>
                  <div>
                    <h1>DAS LATAM CEA</h1>
                    <p className="subtitle">
                      Comercio Electrónico en Argentina · inteligencia comercial aplicada a Mercado Libre
                    </p>
                  </div>
                </Link>
                <Link href="/herramientas" className="primary-button inline-button header-cta">
                  Abrir herramienta
                </Link>
              </div>
              <SiteNav />
            </div>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <div>
              <strong>DAS LATAM CEA</strong>
              <p className="muted footer-copy">
                Plataforma de inteligencia comercial, contenido original y herramientas para analizar oportunidades de venta en Argentina.
              </p>
            </div>
            <div className="footer-links">
              <Link href="/about">Sobre DAS LATAM</Link>
              <Link href="/fuentes">Fuentes</Link>
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
