export const metadata = {
  title: "DAS LATAM CEA",
  description: "Comercio Electrónico en Argentina - Inteligencia comercial para detectar oportunidades de producto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f7f8fa", color: "#111" }}>
        {children}
      </body>
    </html>
  );
}