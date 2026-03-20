import NewsletterForm from "@/components/forms/NewsletterForm";

export default function SuscribirsePage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#fff7c8", color: "#6d5600", fontWeight: 800 }}>Novedades</span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, margin: 0 }}>Recibí ideas para vender, campañas y herramientas nuevas</h1>
        <div className="reading-block" style={{ display: "grid", gap: 14, maxWidth: 900, color: "#374151", fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            Esta suscripción está pensada para quienes quieren mantenerse cerca de oportunidades estacionales, criterios de validación de productos, nuevas herramientas del sitio y recordatorios útiles para planificar compras e importaciones con más anticipación.
          </p>
          <p style={{ margin: 0 }}>
            La idea no es llenar tu correo de ruido, sino enviarte información concreta cuando haya algo que realmente pueda ayudarte a vender mejor, ordenar campañas o detectar una oportunidad con más tiempo de preparación.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 0.92fr", gap: 22 }}>
        <div style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 20, padding: 24, boxShadow: "0 8px 24px rgba(16,17,20,0.04)" }}>
          <NewsletterForm />
        </div>
        <aside style={{ background: "#0f1720", color: "#f4f7fb", borderRadius: 20, padding: 24, display: "grid", gap: 16 }}>
          <h2 style={{ margin: 0, fontSize: 24 }}>Qué tipo de novedades vas a recibir</h2>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#d4dbe4" }}>
            <li>Ideas para campañas de regalo y venta estacional.</li>
            <li>Criterios para validar productos antes de comprar stock.</li>
            <li>Herramientas nuevas publicadas dentro de CEA.</li>
            <li>Recordatorios útiles para planificar compra, importación y publicación.</li>
            <li>Notas breves con foco comercial, no relleno.</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
