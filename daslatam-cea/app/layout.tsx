import "../styles/globals.css";

export const metadata = {
  title: "DAS LATAM CEA",
};

export default function RootLayout({ children }: any) {
  return (
    <html>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <header style={{ padding: 20 }}>
          <h1>DAS LATAM CEA</h1>
          <small>Powered by DAS LATAM</small>
        </header>

        <main style={{ padding: 20 }}>{children}</main>

        <footer style={{ padding: 20, marginTop: 40 }}>
          © DAS LATAM — comercioelectronico@daslatam.org
        </footer>
      </body>
    </html>
  );
}
