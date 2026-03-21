"use client";

import {
  buildAnnualCalendarIcs,
  buildBonusTracks,
  buildCampaignCalendarIcs,
  buildCoreCampaigns,
  buildMilestones,
  formatDateEs,
  formatShort,
  getNextPurchaseDate,
  sortCampaignsByUpcomingPurchase,
} from "@/lib/calendar/yearRoundSales";

function downloadTextFile(filename: string, text: string, mimeType = "text/calendar;charset=utf-8") {
  const blob = new Blob([text], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function metricCard(value: string, label: string, tone: "dark" | "yellow" | "blue" = "dark") {
  const palette =
    tone === "yellow"
      ? { bg: "#fff7cc", color: "#7a5d00" }
      : tone === "blue"
      ? { bg: "#eaf7ff", color: "#0c4a6e" }
      : { bg: "#111827", color: "#ffffff" };

  return (
    <div
      style={{
        background: palette.bg,
        color: palette.color,
        borderRadius: 18,
        padding: "18px 20px",
        border: tone === "dark" ? "1px solid #111827" : "1px solid rgba(17,24,39,0.08)",
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>{value}</div>
      <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5 }}>{label}</div>
    </div>
  );
}

export default function YearRoundSalesPlanner() {
  const today = new Date();
  const year = today.getFullYear();
  const campaigns = sortCampaignsByUpcomingPurchase(buildCoreCampaigns(year), today);
  const bonusTracks = buildBonusTracks(year, today);

  return (
    <main className="page-shell year-round-shell" style={{ padding: "34px 20px 80px" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #fff8cc 0%, #ffffff 58%, #e9f6ff 100%)",
          border: "1px solid #ececec",
          borderRadius: 28,
          padding: 32,
          boxShadow: "0 22px 48px rgba(17, 24, 39, 0.08)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            borderRadius: 999,
            background: "#111827",
            color: "#ffffff",
            padding: "9px 14px",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 0.2,
            marginBottom: 16,
          }}
        >
          Agenda del Éxito · Un regalo de CEA
        </div>

        <h1 style={{ margin: "0 0 14px", fontSize: "clamp(2.2rem,4.3vw,3.25rem)", lineHeight: 1.04 }}>Vender todo el Año</h1>

        <p style={{ margin: "0 0 14px", fontSize: 19, lineHeight: 1.75, color: "#374151" }}>
          Esta herramienta organiza campañas repetibles alrededor de fechas en las que las personas
          buscan ideas para regalar, renovar o comprar por temporada. La lógica es simple: anticiparse,
          importar con tiempo, publicar antes del pico de demanda y repetir una agenda comercial ordenada
          durante todo el año.
        </p>

        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: "#4b5563" }}>
          La propuesta promocional del sitio es clara: si trabajás 12 campañas al año, con 1.000 unidades
          por campaña, hablás de 12.000 unidades anuales. Con una ganancia de $1.000 por unidad, el resultado
          teórico es de $12.000.000. Con una ganancia de $10.000 por unidad, el resultado teórico escala a
          $120.000.000. No es una promesa automática: es una forma visual de entender el poder de una agenda
          anual bien ejecutada.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 24,
          }}
        >
          {metricCard("12+", "Campañas principales para sostener oportunidades recurrentes durante el año.", "dark")}
          {metricCard("90 días", "Compra sugerida en China antes de la fecha comercial para bajar costos.", "yellow")}
          {metricCard("30 días", "Publicación sugerida en Mercado Libre antes del pico de búsqueda.", "blue")}
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 24,
          }}
        >
          <button
            type="button"
            onClick={() =>
              downloadTextFile(`agenda-del-exito-${year}.ics`, buildAnnualCalendarIcs(year))
            }
            style={{
              appearance: "none",
              border: "none",
              background: "#111827",
              color: "#fff",
              fontWeight: 800,
              borderRadius: 14,
              padding: "14px 18px",
              cursor: "pointer",
            }}
          >
            Agregar agenda anual al calendario
          </button>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 14,
              padding: "14px 16px",
              background: "#ffffff",
              border: "1px solid #d1d5db",
              color: "#4b5563",
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            Ordenado por la próxima compra sugerida según la fecha actual.
          </span>
        </div>
      </section>

      <section
        style={{
          marginTop: 28,
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: 24,
          padding: 24,
          boxShadow: "0 12px 28px rgba(17, 24, 39, 0.05)",
        }}
      >
        <h2 style={{ margin: "0 0 8px", fontSize: 32 }}>Regla operativa sugerida</h2>
        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
          La agenda se ordena según la fecha en la que conviene comprar. Si hoy estás mirando el plan,
          arriba de todo deberían aparecer primero las campañas cuya compra está más cerca. Así se vuelve
          una herramienta de ejecución y no solo un calendario bonito para leer.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ margin: "0 0 8px", fontSize: 32 }}>Calendario operativo</h2>
        <p style={{ margin: "0 0 20px", color: "#4b5563", lineHeight: 1.8 }}>
          Se muestra todo el listado, pero en el orden en el que conviene actuar. Cada campaña incluye
          la próxima fecha de compra sugerida y un botón para descargar sus hitos al calendario.
        </p>

        <div style={{ display: "grid", gap: 18 }}>
          {campaigns.map((campaign) => {
            const milestones = buildMilestones(campaign);
            const nextPurchase = getNextPurchaseDate(campaign, today);

            return (
              <article
                key={campaign.key}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: "0 12px 28px rgba(17, 24, 39, 0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 18,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: "1 1 620px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          borderRadius: 999,
                          padding: "7px 12px",
                          background:
                            campaign.risk === "Bajo"
                              ? "#dcfce7"
                              : campaign.risk === "Medio"
                              ? "#fef3c7"
                              : "#fee2e2",
                          color:
                            campaign.risk === "Bajo"
                              ? "#166534"
                              : campaign.risk === "Medio"
                              ? "#92400e"
                              : "#991b1b",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        Riesgo operativo {campaign.risk}
                      </span>

                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          borderRadius: 999,
                          padding: "7px 12px",
                          background: "#eaf7ff",
                          color: "#0c4a6e",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        Próxima compra sugerida · {formatDateEs(nextPurchase)}
                      </span>
                    </div>

                    <h3 style={{ margin: "0 0 8px", fontSize: 28 }}>{campaign.name}</h3>
                    <p style={{ margin: "0 0 10px", color: "#374151", lineHeight: 1.75 }}>
                      Fecha comercial objetivo: <strong>{campaign.anchorLabel}</strong> · {formatDateEs(campaign.saleDate)}
                    </p>
                    <p style={{ margin: "0 0 14px", color: "#4b5563", lineHeight: 1.75 }}>{campaign.note}</p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {campaign.niches.map((niche) => (
                        <span
                          key={niche}
                          style={{
                            borderRadius: 999,
                            background: "#f3f4f6",
                            color: "#374151",
                            padding: "8px 12px",
                            fontSize: 13,
                            fontWeight: 700,
                          }}
                        >
                          {niche}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      downloadTextFile(`${campaign.key}-${year}.ics`, buildCampaignCalendarIcs(campaign))
                    }
                    style={{
                      appearance: "none",
                      border: "none",
                      background: "#111827",
                      color: "#fff",
                      fontWeight: 800,
                      borderRadius: 14,
                      padding: "14px 18px",
                      cursor: "pointer",
                      minWidth: 220,
                    }}
                  >
                    Agregar al calendario
                  </button>
                </div>

                <div
                  style={{
                    marginTop: 20,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                    gap: 12,
                  }}
                >
                  {milestones.map((step) => (
                    <div
                      key={step.label}
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e5e7eb",
                        borderRadius: 18,
                        padding: 16,
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>
                        {step.label}
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>
                        {formatShort(step.date)}
                      </div>
                      <div style={{ color: "#475569", lineHeight: 1.6, fontSize: 14 }}>{step.description}</div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: 34 }}>
        <h2 style={{ margin: "0 0 10px", fontSize: 32 }}>Bonus track</h2>
        <p style={{ margin: "0 0 20px", color: "#4b5563", lineHeight: 1.8, maxWidth: 900 }}>
          Son ventanas temáticas que pueden acelerar oportunidades puntuales. No reemplazan la agenda base:
          sirven para sumar campañas con criterio y aprovechar conversación, tendencia o atención masiva.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18 }}>
          {bonusTracks.map((item) => (
            <article
              key={item.key}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 24,
                padding: 22,
                boxShadow: "0 12px 28px rgba(17, 24, 39, 0.05)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 999,
                  background: "#eaf7ff",
                  color: "#0c4a6e",
                  padding: "7px 12px",
                  fontSize: 12,
                  fontWeight: 800,
                  marginBottom: 14,
                }}
              >
                Oportunidad táctica
              </div>

              <h3 style={{ margin: "0 0 8px", fontSize: 24 }}>{item.name}</h3>
              <p style={{ margin: "0 0 8px", color: "#0f172a", fontWeight: 700 }}>{item.timingLabel}</p>
              <p style={{ margin: "0 0 14px", color: "#4b5563", lineHeight: 1.75 }}>{item.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                {item.niches.map((niche) => (
                  <span
                    key={niche}
                    style={{
                      borderRadius: 999,
                      background: "#f3f4f6",
                      color: "#374151",
                      padding: "8px 12px",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {niche}
                  </span>
                ))}
              </div>

              <p style={{ margin: "0 0 16px", color: "#475569", lineHeight: 1.7 }}>{item.note}</p>

              <div style={{ display: "grid", gap: 10, marginBottom: 16 }}>
                {item.milestones.map((step) => (
                  <div
                    key={`${item.key}-${step.label}`}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e5e7eb",
                      borderRadius: 16,
                      padding: 14,
                    }}
                  >
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>
                      {step.label}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 6 }}>{formatDateEs(step.date)}</div>
                    <div style={{ color: "#475569", lineHeight: 1.6, fontSize: 14 }}>{step.description}</div>
                  </div>
                ))}
              </div>

              {item.fixture && item.fixture.length > 0 ? (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>
                    Fixture / hitos clave
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", lineHeight: 1.7 }}>
                    {item.fixture.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => downloadTextFile(item.calendarFilename, item.calendarIcs)}
                style={{
                  appearance: "none",
                  border: "none",
                  background: "#111827",
                  color: "#fff",
                  fontWeight: 800,
                  borderRadius: 14,
                  padding: "14px 18px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Agregar al calendario
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
