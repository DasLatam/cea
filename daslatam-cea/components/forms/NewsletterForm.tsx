"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          nombre: String(formData.get("nombre") || ""),
          email: String(formData.get("email") || ""),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "No pudimos registrar tu suscripción."
        );
      }

      form.reset();
      setState("success");
      setMessage(
        "Te suscribiste correctamente. Vas a recibir novedades y oportunidades en tu correo."
      );
    } catch (error: any) {
      setState("error");
      setMessage(
        error?.message || "Ocurrió un error al procesar la suscripción."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: 16,
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 20,
        padding: 24,
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "grid", gap: 8 }}>
        <label htmlFor="nombre" style={{ fontWeight: 600 }}>
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          style={inputStyle}
        />
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        <label htmlFor="email" style={{ fontWeight: 600 }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        style={{
          background: "#009ee3",
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "14px 18px",
          fontWeight: 700,
          cursor: state === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {state === "loading" ? "Enviando..." : "Suscribirme"}
      </button>

      {message ? (
        <p
          style={{
            margin: 0,
            color: state === "success" ? "#15803d" : "#b91c1c",
            fontWeight: 500,
          }}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #d1d5db",
  borderRadius: 12,
  padding: "12px 14px",
  fontSize: 16,
  background: "#fff",
  color: "#111827",
};