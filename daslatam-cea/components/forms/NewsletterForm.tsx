"use client";

import { FormEvent, useState } from "react";

type Status = { type: "idle" | "success" | "error"; message: string };

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid #d5d9e2",
  fontSize: 16,
  fontFamily: "inherit",
  background: "#fff",
};

const interests = [
  "Ideas para vender",
  "Campañas estacionales",
  "Importación desde China",
  "Costos y márgenes",
  "Mercado Libre",
  "Nuevas herramientas",
];

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      interests: formData.getAll("interests").map(String),
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json?.error || "No se pudo completar la suscripción.");
      }

      setStatus({
        type: "success",
        message: "Ya quedaste suscripto. Pronto vas a empezar a recibir novedades y herramientas nuevas.",
      });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "No se pudo completar la suscripción.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        <input name="name" placeholder="Nombre" style={inputStyle} />
        <input name="email" type="email" placeholder="Email" style={inputStyle} />
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        <strong style={{ fontSize: 15 }}>Qué te interesa recibir</strong>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          {interests.map((interest) => (
            <label
              key={interest}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid #d5d9e2",
                background: "#fff",
              }}
            >
              <input type="checkbox" name="interests" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <button
          type="submit"
          disabled={loading}
          style={{
            border: 0,
            borderRadius: 999,
            background: "#009ee3",
            color: "#fff",
            fontWeight: 800,
            padding: "14px 22px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Enviando..." : "Suscribirme"}
        </button>
        {status.message ? (
          <p
            style={{
              margin: 0,
              color: status.type === "success" ? "#0f8a4b" : "#b42318",
              fontWeight: 600,
            }}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
