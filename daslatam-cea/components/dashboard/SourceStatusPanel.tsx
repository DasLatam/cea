import type { ProviderStatus } from "@/types/app";

type SourceStatusPanelProps = {
  items: ProviderStatus[];
};

function labelForStatus(status: ProviderStatus["status"]) {
  if (status === "ok") return "Operativo";
  if (status === "warning") return "Parcial";
  if (status === "disabled") return "No usado";
  return "Planificado";
}

export default function SourceStatusPanel({ items }: SourceStatusPanelProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-label">Fuentes y módulos</p>
          <h3>Estado operativo</h3>
        </div>
      </div>

      <div className="status-grid">
        {items.map((item) => (
          <article key={item.key} className={`status-card status-${item.status}`}>
            <div className="status-head">
              <strong>{item.label}</strong>
              <span className="status-badge">{labelForStatus(item.status)}</span>
            </div>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
