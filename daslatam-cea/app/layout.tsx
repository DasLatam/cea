import type { Metadata } from "next";
import "../styles/globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: "Comercio Electrónico en Argentina",
  description: "CEA · Comercio Electrónico en Argentina",
  applicationName: "CEA · Comercio Electrónico en Argentina",
  metadataBase: new URL("https://daslatamcea.vercel.app"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
