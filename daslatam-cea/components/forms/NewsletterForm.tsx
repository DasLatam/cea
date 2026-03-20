"use client";

import { useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("nombre") || "").trim(),
      email: String(formData.get("email") || "").trim(),
    };

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "No pudimos registrar tu suscripción.");
      }

      formRef.current?.reset();
      setState("success");
      setMessage("Te suscribiste correctamente. Vas a recibir novedades y oportunidades en tu correo.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error ? error.message : "Ocurrió un error al procesar la suscripción."
      );
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: 16,
      }}
    >
      <div style={{ display: "grid", gap: 8 }}>
        <label htmlFor="nombre" style={{ fontWeight: 700 }}>
          Nombre
        </label>
        <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" style={inputStyle} />
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        <label htmlFor="email" style={{ fontWeight: 700 }}>
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="tu@email.com" style={inputStyle} />
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
          fontWeight: 800,
          cursor: state === "loading" ? "not-allowed" : "pointer",
          opacity: state === "loading" ? 0.8 : 1,
        }}
      >
        {state === "loading" ? "Enviando..." : "Suscribirme"}
      </button>

      <p
        aria-live="polite"
        style={{
          margin: 0,
          minHeight: 24,
          color: state === "success" ? "#15803d" : state === "error" ? "#b91c1c" : "#475569",
          fontWeight: 600,
        }}
      >
        {message}
      </p>
    </form>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  border: "1px solid #d1d5db",
  borderRadius: 12,
  padding: "12px 14px",
  fontSize: 16,
  background: "#fff",
  color: "#111827",
};
