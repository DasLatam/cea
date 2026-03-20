import Link from "next/link";
import { guideCards } from "@/lib/content";

export default function GuiasPage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 20px 56px" }}>
      <section style={{ display: "grid", gap: 14, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#fff7c8", color: "#6d5600", fontWeight: 800 }}>Guías</span>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.05, margin: 0 }}>Criterios prácticos para vender con más orden y menos improvisación</h1>
        <div className="reading-block" style={{ display: "grid", gap: 14, color: "#374151", fontSize: 18, lineHeight: 1.8, textAlign: "justify", hyphens: "auto", maxWidth: 920 }}>
          <p style={{ margin: 0 }}>
            Esta sección reúne contenido pensado para quienes quieren elegir mejor un producto, medir margen con criterio, importar con menos errores y entender por qué ciertas decisiones operativas terminan impactando más de lo que parece.
          </p>
          <p style={{ margin: 0 }}>
            Cada guía propone un recorrido concreto: qué preguntas conviene hacer, qué variables suelen pesar más, qué errores aparecen con frecuencia y cómo llevar ese criterio a un caso real antes de comprometer stock, capital y tiempo.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
        {guideCards.map((guide) => (
          <article key={guide.href} style={{ background: "#fff", border: "1px solid #e4e8ef", borderRadius: 18, padding: 22, boxShadow: "0 8px 24px rgba(16,17,20,0.04)", display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>{guide.title}</h2>
            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>{guide.summary}</p>
            <div>
              <Link href={guide.href} style={{ textDecoration: "none", color: "#0b6db4", fontWeight: 800 }}>
                Leer guía completa
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
