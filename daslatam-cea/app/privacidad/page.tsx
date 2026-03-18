import type { Metadata } from "next";
import PageHero from "@/components/content/PageHero";

export const metadata: Metadata = { title: "Privacidad" };

export default function PrivacidadPage() {
  return (
    <div className="content-theme page-stack">
      <PageHero eyebrow="Legal" title="Política de privacidad" summary="DAS LATAM CEA utiliza información técnica mínima para operar la herramienta, mantener sesiones locales y, cuando la configuración está activa, guardar búsquedas y favoritos. No se vende información personal a terceros." />
      <section className="content-surface section-block">
        <p>El sitio puede usar almacenamiento local del navegador para sostener una sesión de trabajo. Si el usuario decide guardar búsquedas o favoritos, esos registros pueden persistirse en infraestructura de base de datos asociada al proyecto. La información se utiliza para funcionamiento del servicio, soporte y mejora de la experiencia.</p>
        <p>Los servicios de terceros, como analítica, infraestructura o publicidad, pueden tener sus propias políticas. El uso del sitio implica aceptación de estas condiciones operativas básicas.</p>
      </section>
    </div>
  );
}
