import Link from "next/link";

const guides = [
  {
    href: "/guias/validar-producto",
    title: "Cómo validar un producto antes de comprar stock",
    text: "Criterios de prueba, lectura de demanda, riesgo de saturación y señales de descarte temprano.",
  },
  {
    href: "/guias/margen-real",
    title: "Cómo calcular margen real y no margen de fantasía",
    text: "Comisiones, reprocesos, mermas, descuentos, devoluciones y costo financiero real.",
  },
  {
    href: "/guias/importar-desde-china",
    title: "Importar desde China con criterio comercial",
    text: "MOQ, muestras, tiempos, riesgo de calidad y necesidad de especificaciones claras.",
  },
  {
    href: "/guias/importacion-courier",
    title: "Importación por courier: cuándo sirve y cuándo no",
    text: "Ventajas, límites, conveniencia para testeo y errores comunes en la evaluación.",
  },
  {
    href: "/guias/peso-y-fragilidad",
    title: "Peso, fragilidad y devoluciones",
    text: "Por qué la logística destruye más márgenes que una mala publicación si se la subestima.",
  },
  {
    href: "/guias/monotributo-mercado-libre",
    title: "Monotributo y Mercado Libre",
    text: "Orden comercial, límites operativos y señales para no improvisar la parte fiscal.",
  },
];

export default function GuiasPage() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell">
        <section className="hero-card hero-card--compact">
          <p className="eyebrow">Guías prácticas</p>
          <h1>Información útil antes de abrir otra planilla o comprar otro lote.</h1>
          <p className="hero-lead">
            Este bloque reúne contenido largo, escrito para resolver preguntas concretas de operación. La idea no es inflar categorías ni repetir obviedades, sino ordenar las variables que más inciden en una decisión comercial en Argentina.
          </p>
        </section>

        <div className="guide-grid">
          {guides.map((guide) => (
            <article key={guide.href} className="feature-card guide-card">
              <h2>{guide.title}</h2>
              <p>{guide.text}</p>
              <Link href={guide.href} className="text-link">
                Leer guía completa
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
