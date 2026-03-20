import ContactForm from "@/components/forms/ContactForm";

export default function ContactoPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#dff4ff", color: "#0b6db4", fontWeight: 800 }}>Contáctenos</span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, margin: 0 }}>Contanos qué querés resolver y en qué etapa estás</h1>
        <div className="reading-block" style={{ display: "grid", gap: 14, maxWidth: 900, color: "#374151", fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto" }}>
          <p style={{ margin: 0 }}>
            Esta sección está pensada para quienes están evaluando productos, importación, márgenes, campañas o una reorganización más seria de su operación comercial. Si tenés una duda concreta o querés ordenar una decisión antes de invertir, podés escribirnos desde acá.
          </p>
          <p style={{ margin: 0 }}>
            CEA está pensado como un espacio práctico para quienes quieren vender mejor en Argentina, tomar decisiones con más criterio y evitar errores costosos al momento de elegir productos, calcular márgenes o planificar campañas.</p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 22 }}>
        <div style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 20, padding: 24, boxShadow: "0 8px 24px rgba(16,17,20,0.04)" }}>
          <ContactForm />
        </div>
        <aside style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 20, padding: 24, boxShadow: "0 8px 24px rgba(16,17,20,0.04)", display: "grid", gap: 16, alignContent: "start" }}>
          <h2 style={{ margin: 0, fontSize: 24 }}>Qué conviene incluir</h2>
          <ul className="reading-block" style={{ margin: 0, paddingLeft: 20, color: "#374151", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
            <li>Qué producto o categoría estás evaluando.</li>
            <li>Si ya vendés en Mercado Libre, tienda propia o redes.</li>
            <li>Si el foco está en importación, rentabilidad o campañas.</li>
            <li>En qué plazo querés tomar la decisión.</li>
            <li>Qué limitación hoy te está frenando más.</li>
          </ul>
          <p className="reading-block" style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
            Si tenés consultas sobre las guías, las herramientas publicadas o la lógica comercial del sitio, podés escribirnos desde este formulario. También podés contactarte si querés sugerir nuevas herramientas, proponer temas para las próximas guías o enviarnos comentarios para mejorar la experiencia de uso.
            </p>
          <p className="reading-block" style={{ margin: 0, color: "#4b5563", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
            Si tenés consultas sobre las guías, las herramientas publicadas o la lógica comercial del sitio, podés escribirnos desde este formulario. También podés contactarte si querés sugerir nuevas herramientas, proponer temas para las próximas guías o enviarnos comentarios para mejorar la experiencia de uso.
            </p>
        </aside>
      </section>
    </main>
  );
}
