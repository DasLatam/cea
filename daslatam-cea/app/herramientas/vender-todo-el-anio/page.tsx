import YearRoundSalesPlanner from "@/components/tools/YearRoundSalesPlanner";

export const metadata = {
  title: "Vender todo el Año",
  description:
    "Agenda comercial anual para anticipar compras, importación, publicación y campañas estacionales de comercio electrónico en Argentina.",
  keywords: [
    "agenda comercial anual argentina",
    "campañas estacionales mercado libre",
    "planificar compras importación argentina",
    "vender todo el año ecommerce",
  ],
  openGraph: {
    title: "Vender todo el Año · CEA",
    description:
      "Agenda anual para ordenar campañas, ventanas de compra e importación y fechas de publicación con más anticipación.",
    url: "/herramientas/vender-todo-el-anio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vender todo el Año · CEA",
    description:
      "Agenda anual para ordenar campañas, compras e importación con más tiempo.",
  },
};

export default function VenderTodoElAnioPage() {
  return <YearRoundSalesPlanner />;
}
