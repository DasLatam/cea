import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contáctenos",
  description:
    "Formulario de contacto para consultas sobre validación de productos, márgenes, importación, campañas y nuevas herramientas de CEA.",
  keywords: [
    "contacto CEA",
    "consultoría comercio electrónico argentina",
    "consultas mercado libre argentina",
    "validación de productos contacto",
  ],
};

const cardStyle = {
  background: "#fff",
  border: "1px solid #e4e8ef",
  borderRadius: 20,
  padding: 24,
  boxShadow: "0 8px 24px rgba(16,17,20,0.04)",
};

export default function ContactoPage() {
  return (
    <main className="page-shell" style={{ padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "8px 12px",
            borderRadius: 999,
            background: "#dff4ff",
            color: "#0b6db4",
            fontWeight: 800,
          }}
        >
          Contáctenos
        </span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, margin: 0 }}>
          Contanos qué querés resolver y en qué etapa estás
        </h1>
        <div
          className="reading-block page-intro-reading"
          style={{
            display: "grid",
            gap: 14,
            color: "#374151",
            fontSize: 18,
            lineHeight: 1.8,
            textAlign: "justify",
            hyphens: "auto",
          }}
        >
          <p style={{ margin: 0 }}>
            Esta sección está pensada para quienes están evaluando productos, importación, márgenes,
            campañas o una reorganización más seria de su operación comercial. Si tenés una duda concreta
            o querés ordenar una decisión antes de invertir, podés escribirnos desde acá.
          </p>
          <p style={{ margin: 0 }}>
            CEA está pensado como un espacio práctico para quienes quieren vender mejor en Argentina,
            tomar decisiones con más criterio y evitar errores costosos al momento de elegir productos,
            calcular márgenes o planificar campañas.
          </p>
        </div>
      </section>

      <section className="two-card-form-grid">
        <div style={cardStyle}>
          <ContactForm />
        </div>

        <aside style={{ ...cardStyle, display: "grid", gap: 16, alignContent: "start" }}>
          <h2 style={{ margin: 0, fontSize: 24 }}>Qué conviene incluir</h2>
          <ul
            className="reading-block"
            style={{
              margin: 0,
              paddingLeft: 20,
              color: "#374151",
              lineHeight: 1.75,
              textAlign: "justify",
              hyphens: "auto",
            }}
          >
            <li>Qué producto, categoría o canal estás evaluando.</li>
            <li>Si ya vendés en Mercado Libre, tienda propia o redes.</li>
            <li>Si el foco está en importación, rentabilidad, validación o campañas.</li>
            <li>En qué plazo necesitás tomar la decisión.</li>
            <li>Qué limitación hoy te está frenando más.</li>
          </ul>
          <p
            className="reading-block"
            style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}
          >
            También podés escribir si querés sugerir nuevas herramientas, proponer temas para las próximas
            guías o enviarnos observaciones para mejorar la experiencia del sitio.
          </p>
          <div
            style={{
              borderRadius: 16,
              padding: 16,
              background: "#f8fafc",
              border: "1px solid #e5e7eb",
              color: "#475569",
              lineHeight: 1.7,
            }}
          >
            Respondemos por correo electrónico. Cuanto más concreta sea la consulta, más fácil será darte
            una respuesta útil.
          </div>
        </aside>
      </section>
    </main>
  );
}
