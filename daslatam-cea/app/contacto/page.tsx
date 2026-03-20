import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactoPage() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell form-page-shell">
        <section className="hero-card hero-card--compact">
          <p className="eyebrow">Contáctenos</p>
          <h1>Canal abierto para consultas, sugerencias y propuestas.</h1>
          <p className="hero-lead">
            Esta sección permite ordenar el contacto con lectores, empresas, aliados y personas que quieran
            acercar una consulta concreta sobre el contenido del sitio o sobre futuras herramientas.
          </p>
          <p className="hero-paragraph">
            El formulario ya está incorporado a la experiencia general para que la navegación resulte más
            completa. La conexión real del envío se puede activar en una siguiente fase sin rehacer la capa
            visual ni el recorrido del usuario.
          </p>
        </section>

        <div className="content-grid content-grid--form">
          <article className="article-card">
            <section className="article-section">
              <h2>Cuándo conviene escribir</h2>
              <p>
                Este canal puede usarse para sugerir guías, proponer alianzas, señalar temas poco claros,
                acercar necesidades de una categoría o consultar por futuras funcionalidades. La intención es
                que el sitio evolucione con preguntas reales del público y no sólo con decisiones tomadas de
                forma interna.
              </p>
            </section>
            <section className="article-section">
              <h2>Qué esperar de esta etapa</h2>
              <p>
                Por ahora, el formulario deja preparada la interfaz de contacto y muestra con claridad dónde
                se va a canalizar esa relación. La integración del backend puede sumarse después sin volver a
                rediseñar la experiencia completa.
              </p>
            </section>
          </article>

          <aside className="aside-card form-card">
            <p className="aside-kicker">Formulario de contacto</p>
            <h3>Escribinos desde esta misma página</h3>
            <ContactForm />
          </aside>
        </div>
      </div>
    </main>
  );
}
