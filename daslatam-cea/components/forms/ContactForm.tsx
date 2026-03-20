"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "Formulario listo. El envío real del mensaje todavía no está conectado al backend, pero la interfaz de contacto ya quedó preparada."
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
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

      <label className="field">
        <span>Motivo</span>
        <select name="topic" defaultValue="">
          <option value="" disabled>
            Seleccioná un tema
          </option>
          <option value="consulta">Consulta general</option>
          <option value="alianza">Propuesta o alianza</option>
          <option value="contenido">Sugerencia de contenido</option>
        </select>
      </label>

      <label className="field">
        <span>Mensaje</span>
        <textarea name="message" rows={6} placeholder="Contanos en qué podemos ayudarte" required />
      </label>

      <button type="submit" className="button-primary form-button">
        Enviar mensaje
      </button>

      {status ? <p className="form-note">{status}</p> : null}
    </form>
  );
}
