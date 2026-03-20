import type { Metadata } from "next";
import "../styles/globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: {
    default: "DAS LATAM CEA",
    template: "%s | DAS LATAM CEA",
  },
  description:
    "Contenido práctico, metodología y contexto útil para analizar comercio electrónico en Argentina.",
  metadataBase: new URL("https://daslatamcea.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
