import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";

export const metadata: Metadata = { title: "Importación courier" };

export default function ImportacionCourierPage() {
  return (
    <GuidePage
      content={{
        eyebrow: "Guía operativa",
        title: "Importación courier: cuándo sirve y cuándo no",
        summary:
          "El courier puede ser útil para testear productos, reponer lotes chicos o validar hipótesis con menos capital inmovilizado. No reemplaza una estructura de abastecimiento seria cuando el negocio escala.",
        sections: [
          {
            title: "1. Cuándo sirve",
            paragraphs: [
              "Funciona mejor para validaciones rápidas, ticket contenido y productos livianos con pocas restricciones.",
              "También ayuda cuando todavía no está claro si la demanda sostendrá una importación más estructurada.",
            ],
          },
          {
            title: "2. Qué puede salir mal",
            paragraphs: [
              "Un courier más caro o más lento de lo esperado puede destruir la ventaja. Además, no todos los productos soportan bien ese esquema por peso, regulación o volumen.",
            ],
          },
          {
            title: "3. Qué mirar antes de usarlo",
            paragraphs: [
              "Mirá peso, fragilidad, valor declarado, restricciones y tiempo real de reposición. El courier sirve para aprender rápido, no para esconder un modelo unitario débil.",
            ],
          },
        ],
        related: [
          { href: "/guias/importar-desde-china", label: "Errores al importar desde China" },
          { href: "/guias/peso-y-fragilidad", label: "Riesgo logístico" },
          { href: "/herramientas", label: "Volver al tablero" },
        ],
      }}
    />
  );
}
