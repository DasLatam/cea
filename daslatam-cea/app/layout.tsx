import "../styles/globals.css";

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
      </head>
      <body>{children}</body>
    </html>
  );
}
