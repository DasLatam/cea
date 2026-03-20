import { EditorialPage } from "@/components/content/EditorialPage";

const page = {
  kicker: "Temporadas y tendencias",
  title: "Cómo leer campañas, estacionalidad y ventanas de venta sin improvisar.",
  subtitle:
    "Esta sección reúne criterios públicos para trabajar el calendario comercial del año y entender cuándo conviene comprar, publicar y vender según la temporada.",
  ctaLabel: "Abrir Vender todo el Año",
  ctaHref: "/herramientas/vender-todo-el-ano",
  sections: [
    {
      heading: "El calendario comercial es una de las formas más estables de vender mejor durante el año.",
      body: `Muchas personas intentan crecer en comercio electrónico buscando un gran hallazgo aislado, cuando en realidad una parte muy importante del resultado anual puede construirse con campañas previsibles. Reyes, Día de los Enamorados, Vuelta al cole, Día del Padre, Invierno, Día del Niño, Día de la Madre, Halloween, Navidad y Verano son ejemplos de ventanas comerciales que el mercado ya reconoce. Trabajarlas con orden permite dejar de depender sólo del azar o de la intuición. Esta sección existe para traducir ese calendario a criterios utilizables por cualquier lector: qué fechas tienen lógica comercial, con cuánto tiempo conviene pensar la compra, cuándo empieza a apurarse la logística y en qué momento la publicación ya debería estar activa en Mercado Libre u otros canales.`,
    },
    {
      heading: "La estacionalidad no es un detalle: cambia costos, tiempos y tipo de producto.",
      body: `Entender la estacionalidad sirve para mucho más que decidir si vender gorros en invierno o productos de pileta en verano. También ayuda a estimar si la reposición será relajada o urgente, si el mercado se va a llenar de competidores al mismo tiempo y si un embarque marítimo todavía tiene sentido o ya te deja fuera de la ventana. Una campaña que parece perfecta puede perder todo su atractivo si llegás tarde y terminás publicando cuando la mayor parte de la demanda ya compró. Por eso CEA insiste con una lectura temporal del negocio: no alcanza con que el producto sea atractivo; también tiene que estar disponible cuando la intención de compra está viva. Esa es una de las razones por las que la agenda anual del sitio se volvió una herramienta central dentro de la propuesta pública de CEA.`,
    },
    {
      heading: "Conviene distinguir entre campañas repetibles y bonus tracks tácticos.",
      body: `No todas las oportunidades del calendario tienen el mismo nivel de estabilidad. Algunas son estructurales y vuelven todos los años con una lógica bastante previsible. Otras dependen de un evento puntual, un fenómeno cultural o una conversación pública que puede crecer y apagarse rápido. En CEA usamos esa diferencia para ordenar mejor las decisiones. Las campañas repetibles son la base para planificar compras, embarques y publicaciones con antelación. Los bonus tracks tácticos, en cambio, deben leerse con más cuidado porque ofrecen picos más inciertos y exigen velocidad de reacción. Este enfoque evita mezclar oportunidades nobles con impulsos ocasionales y le da al lector un lenguaje claro para saber cuándo conviene operar con calma y cuándo sólo mirar el escenario como un complemento de corto plazo.`,
    },
    {
      heading: "Las tendencias son útiles cuando ayudan a priorizar, no cuando reemplazan el criterio.",
      body: `Hablar de tendencias sin contexto suele llevar a conclusiones pobres. Que un tema gane conversación o que una categoría muestre interés creciente no significa automáticamente que deje margen, soporte logística o justifique traer stock. Sin embargo, ignorar por completo esas señales también puede ser un error. La forma sana de usar tendencias es como un filtro complementario: sirven para priorizar, para mirar mejor una subcategoría, para ajustar una campaña o para detectar un ángulo comercial distinto dentro de una fecha ya conocida. Esa es la lógica que queremos sostener en esta sección: las tendencias tienen valor cuando ayudan a ordenar la agenda y a elegir mejor, no cuando se convierten en excusa para comprar a ciegas. En definitiva, el sitio busca que el lector lea mejor el contexto, no que persiga cualquier tema que esté en conversación.`,
    },
    {
      heading: "Esta sección está pensada para dialogar con las herramientas y volver más accionable el contenido.",
      body: `Temporadas y tendencias no es un rincón aislado del sitio. Está conectada con las guías, con la metodología y con las herramientas ya publicadas. La idea es que un lector pueda entender por qué una campaña tiene sentido, pasar luego a la agenda anual para ver las fechas operativas y terminar usando la calculadora de costos para validar si el producto deja margen real. Esa continuidad es importante porque transforma contenido editorial en criterio aplicable. Desde el punto de vista público, esta sección cumple una función muy concreta: ayudar a que cualquier visitante entienda mejor cómo se ordena el año comercial y cómo se relacionan las temporadas con las decisiones de compra, importación y publicación. Si logra eso, deja de ser una sección “apuntada al dueño del proyecto” y pasa a ser una pieza realmente útil para quien visita el sitio por primera vez.`,
    },
  ],
  asideTitle: "Ideas clave de esta sección",
  asideItems: [
    "Distinguir campañas estructurales de oportunidades tácticas",
    "Pensar siempre la ventana de compra, embarque y publicación",
    "Usar tendencias como complemento, no como atajo",
    "Leer la temporada junto con margen, logística y stock",
    "Pasar del contenido a la agenda anual y la calculadora",
  ],
};

export default function TemporadasYTendenciasPage() {
  return <EditorialPage page={page} />;
}
