import type { ReactNode } from "react";
import Script from "next/script";
import "../styles/globals.css";
import GuidePager from "@/components/guides/GuidePager";
import SiteFooter from "@/components/site/SiteFooter";
import SiteNav from "@/components/site/SiteNav";
import { ADSENSE_ACCOUNT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "comercio electrónico argentina",
    "mercado libre argentina",
    "ecommerce argentina",
    "importar desde china",
    "validación de productos",
    "margen real",
    "herramientas para vender online",
  ],
  authors: [{ name: "DASLATAM" }],
  creator: "DASLATAM",
  publisher: "DASLATAM",
  category: "Negocios",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  other: {
    "google-adsense-account": ADSENSE_ACCOUNT,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: ["https://daslatam.org"],
  parentOrganization: {
    "@type": "Organization",
    name: "DASLATAM",
    url: "https://daslatam.org",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "es-AR",
  publisher: {
    "@type": "Organization",
    name: "DASLATAM",
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body>
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ACCOUNT}`}
          crossOrigin="anonymous"
        />
        <Script
          id="cea-organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="cea-website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteNav />
        {children}
        <GuidePager />
        <SiteFooter />
      </body>
    </html>
  );
}
