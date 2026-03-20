import { EditorialPage } from "@/components/content/EditorialPage";

const page = {
  kicker: "Oportunidades",
  title: "Cómo detectar oportunidades comerciales sin perseguir humo ni modas vacías.",
  subtitle:
    "Esta sección está pensada para el público general del sitio: personas que quieren entender qué mirar antes de comprar, importar o publicar un producto en Argentina.",
  ctaLabel: "Ver herramientas",
  ctaHref: "/herramientas",
  sections: [
    {
      heading: "Una oportunidad no es un producto de moda: es una combinación de variables que cierran.",
      body: `En comercio electrónico, hablar de oportunidades de venta puede sonar atractivo pero también demasiado vago si no se explica bien qué significa. En CEA usamos esa palabra para describir una combinación concreta de factores favorables: una necesidad que ya existe o que aparece de forma repetible, una categoría donde todavía hay espacio razonable para competir, un margen que soporta comisiones y logística, una reposición posible y una propuesta de publicación que no llega tarde. En otras palabras, una oportunidad no es un video viral, una captura de pantalla o una lista de “productos ganadores”; es un escenario donde el producto, el momento y la operación tienen sentido juntos. Esta mirada obliga a bajar el entusiasmo a tierra y a revisar si la idea realmente se sostiene cuando aparecen los costos, los tiempos y las restricciones reales del mercado argentino.`,
    },
    {
      heading: "Las mejores oportunidades suelen nacer de necesidades repetidas, no de golpes de suerte.",
      body: `La intuición comercial mejora mucho cuando se deja de perseguir la novedad por sí misma y se empieza a mirar la repetición. Hay campañas que vuelven todos los años, momentos de regalo que el mercado ya reconoce y categorías que se activan por clima, rutina, calendario escolar o cambios de estación. Ese tipo de recurrencia ofrece una ventaja importante: permite planificar con anticipación, comprar con más criterio y vender sin depender únicamente de la improvisación. Por eso en CEA damos tanta importancia a la agenda comercial y a las ventanas de compra. Una oportunidad sólida no tiene por qué ser sorprendente; muchas veces es más conveniente un nicho que vuelve todos los años y se deja trabajar con orden que un producto supuestamente explosivo que pierde fuerza antes de llegar al depósito o a Mercado Libre.`,
    },
    {
      heading: "Para evaluar una oportunidad conviene mirar demanda, competencia, costo y riesgo al mismo tiempo.",
      body: `Uno de los errores más comunes al analizar una idea de producto es obsesionarse con una sola señal. Algunos miran sólo precio; otros sólo búsquedas; otros sólo lo que parece venderse mucho. Ese enfoque parcial suele ser caro. Una categoría puede mostrar movimiento y, al mismo tiempo, estar tan saturada que no deje margen. Un producto puede tener buen ticket medio y aun así resultar inviable por fragilidad, devoluciones o costo logístico. También puede ocurrir lo contrario: un artículo aparentemente simple puede funcionar muy bien si rota, se repone fácil y entra bien en campañas estacionales. Por eso esta sección está pensada para enseñar a leer oportunidades con una lógica más completa: qué problema resuelve el producto, cuándo se activa, qué nivel de competencia soporta, cuánto cuesta llevarlo hasta la publicación y cuánta tolerancia tiene el negocio frente a errores de timing o stock.`,
    },
    {
      heading: "Las oportunidades más nobles suelen ser las que permiten llegar temprano y vender con claridad.",
      body: `Llegar temprano no significa llegar primero a una moda; significa llegar a tiempo a una campaña, a una temporada o a una necesidad concreta. Cuando una categoría puede trabajarse con noventa días de anticipación, embarque marítimo razonable y publicación ordenada, la ecuación mejora mucho. Se comprime menos el margen, se paga menos por logística apurada y se construye una presencia comercial más estable. En cambio, cuando todo depende de correr detrás del último impulso del mercado, el negocio se vuelve más frágil y costoso. Esta página propone justamente ese cambio de enfoque: mirar oportunidades que se puedan preparar, no sólo oportunidades que parezcan interesantes en la pantalla. Ese criterio beneficia tanto al pequeño vendedor como al importador que quiere profesionalizar su operación y dejar de decidir a último momento.`,
    },
    {
      heading: "CEA organiza las oportunidades para que cualquier lector entienda qué mirar y por qué.",
      body: `La finalidad de esta sección no es bombardear con listas interminables sino dar un marco ordenado para pensar mejor. Acá vas a encontrar contenido relacionado con campañas estacionales, categorías repetibles, momentos de compra y señales que conviene leer antes de comprometer capital. También vas a ver cómo estas ideas se conectan con las herramientas ya publicadas del sitio, especialmente la agenda anual para vender durante todo el año y la calculadora de costos. De ese modo, la lectura no queda aislada: podés pasar del criterio a la acción concreta. Esa continuidad es una parte central de la propuesta pública de CEA. El lector no debería sentir que el sitio habla para adentro; debería sentir que cada sección lo ayuda a entender mejor dónde está parado, qué oportunidades valen la pena y cuáles conviene dejar pasar.`,
    },
  ],
  asideTitle: "Qué conviene revisar primero",
  asideItems: [
    "Si la necesidad se repite o depende de una moda pasajera",
    "Si el margen sobrevive a comisión, logística e impuestos",
    "Si la categoría permite llegar antes del pico de demanda",
    "Si el riesgo operativo es razonable para tu escala",
    "Si el producto puede venderse con fotos claras y una propuesta simple",
  ],
};

export default function OportunidadesPage() {
  return <EditorialPage page={page} />;
}
