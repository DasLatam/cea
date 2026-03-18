import { buildOpportunityCalendar, enrichOpportunityCalendar } from "@/lib/calendar/opportunities";

function formatDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function buyStatusLabel(status: "future" | "open" | "past", daysToBuy: number, daysToEvent: number) {
  if (status === "future") return `Comprar en ${daysToBuy} días`;
  if (status === "open") return daysToEvent >= 0 ? `Ventana abierta · faltan ${daysToEvent} días` : "Ventana abierta";
  return "Ventana pasada";
}

export default function OpportunityCalendar() {
  const items = enrichOpportunityCalendar(buildOpportunityCalendar())
    .filter((item) => item.daysToEvent >= -30)
    .slice(0, 10);

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-label">Calendario comercial</p>
          <h3>Ventanas de compra con aviso 60 días antes</h3>
        </div>
      </div>

      <div className="calendar-grid">
        {items.map((item) => (
          <article key={item.slug} className={`calendar-card calendar-${item.status}`}>
            <div className="calendar-head">
              <div>
                <strong>{item.title}</strong>
                <p className="muted small-text">{item.category}</p>
              </div>
              <span className="calendar-badge">{buyStatusLabel(item.status, item.daysToBuy, item.daysToEvent)}</span>
            </div>

            <div className="calendar-dates">
              <div>
                <span className="muted small-text">Comprar desde</span>
                <strong>{formatDate(item.buyDate)}</strong>
              </div>
              <div>
                <span className="muted small-text">Evento</span>
                <strong>{formatDate(item.eventDate)}</strong>
              </div>
            </div>

            <p>{item.rationale}</p>
            <div className="pill-wrap">
              {item.examples.map((example) => (
                <span key={example} className="pill">
                  {example}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
