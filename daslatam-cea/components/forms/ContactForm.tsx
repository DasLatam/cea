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

export default function ContactForm() {
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
      company: String(formData.get("company") || ""),
      topic: String(formData.get("topic") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json?.error || "No se pudo enviar el mensaje.");
      }

      setStatus({
        type: "success",
        message: "Tu mensaje se envió correctamente. Revisá tu correo por si te mandamos una confirmación.",
      });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "No se pudo enviar el mensaje.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        <input name="name" placeholder="Nombre y apellido" style={inputStyle} />
        <input name="email" type="email" placeholder="Email" style={inputStyle} />
      </div>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        <input name="company" placeholder="Proyecto, marca o empresa" style={inputStyle} />
        <select name="topic" style={inputStyle} defaultValue="">
          <option value="" disabled>
            Tema de la consulta
          </option>
          <option>Elegir producto</option>
          <option>Importación</option>
          <option>Costos y márgenes</option>
          <option>Campañas de venta</option>
          <option>Publicidad y demanda</option>
          <option>Otro</option>
        </select>
      </div>
      <textarea
        name="message"
        rows={7}
        placeholder="Contanos qué estás evaluando, en qué etapa estás y qué necesitás resolver."
        style={{ ...inputStyle, resize: "vertical" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <button
          type="submit"
          disabled={loading}
          style={{
            border: 0,
            borderRadius: 999,
            background: "#ffe600",
            color: "#101114",
            fontWeight: 800,
            padding: "14px 22px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Enviando..." : "Enviar consulta"}
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
