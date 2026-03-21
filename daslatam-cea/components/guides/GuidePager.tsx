"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const guides = [
  { href: "/guias/validar-producto", label: "Cómo validar un producto antes de comprar stock" },
  { href: "/guias/margen-real", label: "Cómo calcular margen real y no margen de fantasía" },
  { href: "/guias/importar-desde-china", label: "Importar desde China con criterio comercial" },
  { href: "/guias/importacion-courier", label: "Importación por courier: cuándo sirve y cuándo no" },
  { href: "/guias/peso-y-fragilidad", label: "Peso, fragilidad y devoluciones" },
  { href: "/guias/monotributo-mercado-libre", label: "Monotributo y Mercado Libre" },
];

export default function GuidePager() {
  const pathname = usePathname();
  const currentIndex = guides.findIndex((guide) => guide.href === pathname);

  if (currentIndex === -1) {
    return null;
  }

  const previousGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
  const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

  return (
    <section className="guide-pager-shell" aria-label="Navegación entre guías">
      <div className="guide-pager-card">
        <div className="guide-pager-header">
          <span className="guide-pager-eyebrow">Recorrido entre guías</span>
          <h2 className="guide-pager-title">Seguí leyendo sin salir del tema</h2>
        </div>

        <div className="guide-pager-grid">
          {previousGuide ? (
            <Link href={previousGuide.href} className="guide-pager-link guide-pager-link--previous">
              <span className="guide-pager-link-kicker">Guía anterior</span>
              <span className="guide-pager-link-title">{previousGuide.label}</span>
            </Link>
          ) : (
            <div className="guide-pager-link guide-pager-link--placeholder" aria-hidden="true" />
          )}

          {nextGuide ? (
            <Link href={nextGuide.href} className="guide-pager-link guide-pager-link--next">
              <span className="guide-pager-link-kicker">Siguiente guía</span>
              <span className="guide-pager-link-title">{nextGuide.label}</span>
            </Link>
          ) : (
            <div className="guide-pager-link guide-pager-link--placeholder" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
