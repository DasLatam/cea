"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "Formulario listo. La suscripción automática todavía no está conectada, pero esta interfaz ya quedó preparada para la próxima etapa."
    );
  }

  return (
    <form className={compact ? "newsletter-form newsletter-form--compact" : "newsletter-form"} onSubmit={onSubmit}>
      <div className="field-grid">
        <label className="field">
          <span>Nombre</span>
          <input type="text" name="name" placeholder="Tu nombre" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="tu@email.com" required />
        </label>
      </div>

      {!compact ? (
        <label className="field">
          <span>Qué te interesa recibir</span>
          <select name="interest" defaultValue="">
            <option value="" disabled>
              Seleccioná una opción
            </option>
            <option value="oportunidades">Oportunidades semanales</option>
            <option value="guias">Guías y contenidos nuevos</option>
            <option value="ambos">Ambos</option>
          </select>
        </label>
      ) : null}

      <button type="submit" className="button-primary form-button">
        Quiero recibir novedades
      </button>

      {status ? <p className="form-note">{status}</p> : null}
    </form>
  );
}
