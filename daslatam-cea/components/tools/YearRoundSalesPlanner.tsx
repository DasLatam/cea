"use client";

import { useMemo, useState, type CSSProperties } from "react";
import {
  formatDateEs,
  formatMoneyAr,
  getYearRoundAgenda,
  type CampaignOccurrence,
} from "@/lib/calendar/yearRoundSales";

const statusStyles: Record<CampaignOccurrence["status"], { label: string; bg: string; color: string }> = {
  "buy-now": { label: "Comprar ahora", bg: "#fff3cd", color: "#7a5d00" },
  "embark-soon": { label: "Coordinar embarque", bg: "#e0f2fe", color: "#075985" },
  "publish-soon": { label: "Preparar publicación", bg: "#ede9fe", color: "#5b21b6" },
  "on-sale": { label: "Ya en venta", bg: "#dcfce7", color: "#166534" },
  planned: { label: "Planificado", bg: "#f3f4f6", color: "#374151" },
};

export default function YearRoundSalesPlanner() {
  const [unitsPerCampaign, setUnitsPerCampaign] = useState(1000);
  const [profitPerUnit, setProfitPerUnit] = useState(1000);
  const [showOnlyUpcomingActions, setShowOnlyUpcomingActions] = useState(false);

  const campaigns = useMemo(() => getYearRoundAgenda(new Date()), []);

  const visibleCampaigns = useMemo(() => {
    if (!showOnlyUpcomingActions) return campaigns;
    return campaigns.filter((campaign) => campaign.status !== "planned");
  }, [campaigns, showOnlyUpcomingActions]);

  const campaignCount = campaigns.length;
  const annualUnits = campaignCount * unitsPerCampaign;
  const annualPocket = annualUnits * profitPerUnit;
  const annualPocketOptimistic = annualUnits * 10000;

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <section
        style={{
          background: "linear-gradient(135deg, #fffbe6 0%, #ffffff 55%, #e6f7ff 100%)",
          border: "1px solid #e5e7eb",
          borderRadius: 20,
          padding: 28,
          boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 14 }}>
          <span
            style={{
              display: "inline-flex",
              padding: "8px 12px",
              borderRadius: 999,
              background: "#111827",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Herramienta CEA
          </span>
          <span
            style={{
              display: "inline-flex",
              padding: "8px 12px",
              borderRadius: 999,
              background: "#ffe600",
              color: "#111827",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Agenda del éxito
          </span>
        </div>

        <h1 style={{ fontSize: 38, lineHeight: 1.08, margin: "0 0 12px", color: "#111827" }}>
          Vender todo el año
        </h1>

        <p style={{ margin: 0, maxWidth: 900, color: "#374151", fontSize: 18, lineHeight: 1.7 }}>
          Esta herramienta ordena una agenda anual de campañas recurrentes para regalo y consumo estacional. La lógica es simple:
          comprar con anticipación, usar tránsito marítimo para bajar costo, publicar con 30 días de margen y sostener un flujo de
          nichos repetibles a lo largo del año. No garantiza ventas; sirve para planificar mejor, reducir improvisación y entrar antes
          que la mayoría.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {[
          { label: "Campañas activas", value: String(campaignCount), note: "ventanas comerciales recurrentes" },
          { label: "Unidades objetivo", value: annualUnits.toLocaleString("es-AR"), note: `${unitsPerCampaign.toLocaleString("es-AR")} por campaña` },
          { label: "Ganancia bolsillo", value: formatMoneyAr(annualPocket), note: `${formatMoneyAr(profitPerUnit)} por unidad` },
          { label: "Escenario alto", value: formatMoneyAr(annualPocketOptimistic), note: "si la utilidad llega a $10.000 por unidad" },
        ].map((item) => (
          <article
            key={item.label}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 18,
              padding: 20,
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
            }}
          >
            <div style={{ color: "#6b7280", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
              {item.label}
            </div>
            <div style={{ marginTop: 10, fontSize: 30, fontWeight: 800, color: "#111827" }}>{item.value}</div>
            <div style={{ marginTop: 8, color: "#4b5563", fontSize: 14 }}>{item.note}</div>
          </article>
        ))}
      </section>

      <section
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 18,
          padding: 24,
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
        }}
      >
        <h2 style={{ margin: "0 0 18px", fontSize: 24, color: "#111827" }}>Supuestos del modelo</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          <label style={{ display: "grid", gap: 8 }}>
            <span style={{ fontWeight: 700, color: "#374151" }}>Unidades por campaña</span>
            <input
              type="number"
              min={100}
              step={100}
              value={unitsPerCampaign}
              onChange={(e) => setUnitsPerCampaign(Number(e.target.value || 0))}
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: 8 }}>
            <span style={{ fontWeight: 700, color: "#374151" }}>Ganancia por unidad</span>
            <input
              type="number"
              min={100}
              step={100}
              value={profitPerUnit}
              onChange={(e) => setProfitPerUnit(Number(e.target.value || 0))}
              style={inputStyle}
            />
          </label>

          <label style={{ display: "flex", alignItems: "end", gap: 10, color: "#374151", fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={showOnlyUpcomingActions}
              onChange={(e) => setShowOnlyUpcomingActions(e.target.checked)}
            />
            Mostrar sólo campañas con acción próxima
          </label>
        </div>

        <div
          style={{
            marginTop: 18,
            padding: 16,
            borderRadius: 14,
            background: "#f8fafc",
            color: "#475569",
            lineHeight: 1.6,
          }}
        >
          Regla operativa sugerida: comprar en China 90 días antes, embarcar aproximadamente entre 75 y 60 días antes, recibir y preparar
          stock con margen, y publicar 30 días antes de la fecha fuerte. Esa secuencia baja costo unitario, mejora timing y evita subir el
          listing tarde cuando el mercado ya está saturado.
        </div>
      </section>

      <section style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 26, color: "#111827" }}>Calendario operativo</h2>
            <p style={{ margin: "6px 0 0", color: "#4b5563" }}>
              Cada tarjeta te dice cuándo comprar, cuándo embarcar y cuándo deberías estar publicado en Mercado Libre.
            </p>
          </div>
        </div>

        {visibleCampaigns.map((campaign) => {
          const status = statusStyles[campaign.status];

          return (
            <article
              key={campaign.id}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 20,
                padding: 22,
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "start" }}>
                <div style={{ maxWidth: 720 }}>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                    <h3 style={{ margin: 0, fontSize: 24, color: "#111827" }}>{campaign.title}</h3>
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: status.bg,
                        color: status.color,
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p style={{ margin: "12px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{campaign.description}</p>
                </div>

                <div
                  style={{
                    minWidth: 210,
                    background: "#f8fafc",
                    borderRadius: 16,
                    padding: 16,
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div style={{ fontSize: 13, color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Fecha ancla</div>
                  <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, color: "#111827" }}>{formatDateEs(campaign.eventDate)}</div>
                  <div style={{ marginTop: 8, color: "#475569" }}>Faltan {campaign.daysUntilEvent} días</div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 14,
                }}
              >
                <MilestoneCard title="Comprar" date={formatDateEs(campaign.buyDate)} note="Orden al proveedor y cierre de costos." />
                <MilestoneCard
                  title="Embarcar"
                  date={`${formatDateEs(campaign.sailWindowStart)} → ${formatDateEs(campaign.sailWindowEnd)}`}
                  note="Ventana sugerida para tránsito marítimo económico."
                />
                <MilestoneCard title="Publicar" date={formatDateEs(campaign.publishDate)} note="Listing en ML con 30 días de ventaja." />
                <MilestoneCard title="Stock sugerido" date={`${unitsPerCampaign.toLocaleString("es-AR")} unidades`} note={campaign.inventoryHint} />
              </div>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                }}
              >
                <InfoCard title="Nichos sugeridos" body={campaign.niches.join(" · ")} />
                <InfoCard title="Audiencia" body={campaign.audience} />
                <InfoCard title="Riesgo operativo" body={campaign.caution} />
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function MilestoneCard({ title, date, note }: { title: string; date: string; note: string }) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: "1px solid #e5e7eb",
        padding: 16,
        background: "#ffffff",
      }}
    >
      <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>{title}</div>
      <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800, color: "#111827", lineHeight: 1.35 }}>{date}</div>
      <div style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.5 }}>{note}</div>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: "1px solid #e5e7eb",
        padding: 16,
        background: "#f8fafc",
      }}
    >
      <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>{title}</div>
      <div style={{ marginTop: 8, color: "#334155", lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

const inputStyle: CSSProperties = {
  border: "1px solid #d1d5db",
  borderRadius: 12,
  padding: "12px 14px",
  fontSize: 16,
  color: "#111827",
  background: "#fff",
};
