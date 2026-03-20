import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Comercio Electrónico en Argentina",
  description: "CEA · Comercio Electrónico en Argentina",
  metadataBase: new URL("https://daslatamcea.vercel.app"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Comercio Electrónico en Argentina",
    description: "CEA · Comercio Electrónico en Argentina",
    url: "https://daslatamcea.vercel.app",
    siteName: "CEA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Comercio Electrónico en Argentina",
    description: "CEA · Comercio Electrónico en Argentina",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
