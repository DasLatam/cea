import { NewsletterForm } from "@/components/forms/NewsletterForm";

export default function SuscribirsePage() {
  return (
    <main className="editorial-main">
      <div className="shell editorial-shell form-page-shell">
        <section className="hero-card hero-card--compact">
          <p className="eyebrow">Novedades</p>
          <h1>Recibí oportunidades y contenidos nuevos en tu email.</h1>
          <p className="hero-lead">
            La suscripción está pensada para quienes quieren seguir oportunidades semanales, guías nuevas,
            alertas estacionales y señales útiles del comercio electrónico en Argentina sin revisar el sitio
            todos los días.
          </p>
          <p className="hero-paragraph">
            El objetivo no es llenar la bandeja de entrada, sino enviar una selección breve y curada de
            aquello que realmente valga la pena mirar. En esta etapa, la interfaz del formulario ya queda
            visible y lista para conectarse al sistema de envíos en la próxima fase del proyecto.
          </p>
        </section>

        <div className="content-grid content-grid--form">
          <article className="article-card">
            <section className="article-section">
              <h2>Qué clase de novedades podés esperar</h2>
              <p>
                El contenido previsto para esta suscripción incluye oportunidades a seguir, guías recién
                publicadas, recordatorios sobre fechas comerciales y notas breves sobre riesgos o variables
                que conviene revisar antes de comprar, publicar o importar. La propuesta busca ser útil para
                vendedores, emprendedores e importadores pequeños.
              </p>
            </section>
            <section className="article-section">
              <h2>Por qué conviene dejar el formulario listo</h2>
              <p>
                La próxima capa del sitio va a incorporar el sistema de envío. Tener esta sección visible
                desde ahora ayuda a ordenar la experiencia y a mostrar que la relación con los lectores forma
                parte del producto, no un agregado de último momento.
              </p>
            </section>
          </article>

          <aside className="aside-card form-card">
            <p className="aside-kicker">Formulario de novedades</p>
            <h3>Dejá preparado tu alta</h3>
            <NewsletterForm />
          </aside>
        </div>
      </div>
    </main>
  );
}
