export type GuideSection = {
  title: string;
  paragraphs: string[];
};

export type GuideContent = {
  slug: string;
  title: string;
  kicker: string;
  intro: string[];
  sections: GuideSection[];
  closing: string;
};

export const guideCards = [
  {
    href: "/guias/validar-producto",
    title: "Cómo validar un producto antes de comprar stock",
    summary:
      "Criterios de prueba, lectura de demanda, riesgo de saturación y señales de descarte temprano.",
  },
  {
    href: "/guias/margen-real",
    title: "Cómo calcular margen real y no margen de fantasía",
    summary:
      "Comisiones, reprocesos, mermas, descuentos, devoluciones y costo financiero real.",
  },
  {
    href: "/guias/importar-desde-china",
    title: "Importar desde China con criterio comercial",
    summary:
      "MOQ, muestras, tiempos, riesgo de calidad y necesidad de especificaciones claras.",
  },
  {
    href: "/guias/importacion-courier",
    title: "Importación por courier: cuándo sirve y cuándo no",
    summary:
      "Ventajas, límites, conveniencia para testeo y errores comunes en la evaluación.",
  },
  {
    href: "/guias/peso-y-fragilidad",
    title: "Peso, fragilidad y devoluciones",
    summary:
      "Por qué la logística destruye más márgenes que una mala publicación si se la subestima.",
  },
  {
    href: "/guias/monotributo-mercado-libre",
    title: "Monotributo y Mercado Libre",
    summary:
      "Orden comercial, límites operativos y señales para no improvisar la parte fiscal.",
  },
];

export const guides: Record<string, GuideContent> = {
  validarProducto: {
    slug: "validar-producto",
    kicker: "Guía práctica",
    title: "Cómo validar un producto antes de comprar stock",
    intro: [
      "Elegir un producto no debería ser una apuesta a ciegas. Antes de comprometer capital, tiempo de importación y espacio de almacenamiento, conviene construir una lectura lo más completa posible del negocio: demanda, competencia, novedad, logística, proveedor y margen.",
      "La validación previa no elimina el riesgo, pero reduce errores muy caros. Lo importante es mirar varias señales a la vez y no enamorarse del producto sólo porque parece original o porque un proveedor lo ofrece a buen precio.",
    ],
    sections: [
      {
        title: "Empezar por las preguntas correctas",
        paragraphs: [
          "La primera pregunta no es si el producto te gusta, sino si hay un motivo razonable para pensar que alguien lo va a comprar de manera sostenida. Una validación seria suele empezar mirando Mercado Libre: cuántos vendedores ya lo ofrecen, qué volumen visible de ventas tienen, cuántas reseñas acumulan y qué tan homogéneo o disperso es el precio. No alcanza con ver que existe demanda; también hay que entender quién se la está llevando y con qué propuesta.",
          "Después conviene salir de Mercado Libre y observar si la curiosidad por el producto existe en otros lugares. Mirar tendencias en Google sirve para detectar estacionalidad, crecimiento o simple ruido pasajero. Revisar actividad publicitaria en Meta ayuda a entender si hay jugadores intentando empujar la categoría o si el producto todavía no tiene presión comercial visible. Ninguna de estas señales decide sola, pero juntas muestran si hay mercado o apenas entusiasmo aislado.",
        ],
      },
      {
        title: "Variables que suelen pesar más",
        paragraphs: [
          "Un producto interesante suele tener algún efecto de novedad. No necesariamente debe ser revolucionario, pero sí debería provocar una sensación de oportunidad: algo que el comprador no ve tan fácil en comercios comunes, que no tiene resuelto en la esquina o que le genera una percepción de descubrimiento. Ese diferencial puede venir por función, diseño, combinación de beneficios, packaging o incluso por una forma de presentarlo mejor que la competencia.",
          "La otra variable que pesa mucho es la logística. Conviene evitar productos grandes, muy pesados o frágiles si la rentabilidad no compensa el riesgo. Todo lo que complica importación, depósito, preparación y última milla castiga margen. Lo mismo pasa si no encontrás un proveedor certificado, con antecedentes y un precio compatible con la inversión total. Una validación comercial sana siempre termina comparando inversión real contra ganancia esperada, no sólo contra precio de venta ideal.",
        ],
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "Uno de los errores más comunes es comprar por intuición sin contrastar con datos. Otro es mirar solamente el precio del proveedor y olvidarse del resto: comisiones, logística, embalaje, etiquetado, tiempos de llegada y posibles devoluciones. También es frecuente asumir que, porque hay ventas en Mercado Libre, todavía hay espacio suficiente para entrar sin diferenciación. A veces llegás tarde a una categoría saturada y lo descubrís cuando ya tenés stock inmovilizado.",
          "Otro problema típico es minimizar la calidad del proveedor. No alcanza con que la ficha del producto se vea bien. Hace falta revisar certificaciones, antigüedad, volumen de operaciones, calificaciones y disposición a responder preguntas concretas. Pedir fotos reales, medidas exactas y detalles del empaque ayuda a evitar sorpresas costosas. Una compra mal especificada puede arruinar un producto que, en teoría, parecía impecable.",
        ],
      },
      {
        title: "Cómo aplicar la guía a un caso real",
        paragraphs: [
          "Supongamos que querés evaluar un accesorio de cocina que no aparece tanto en comercios tradicionales, pero sí empieza a verse en publicaciones de creadores y cuentas de recetas. El proceso razonable sería revisar Mercado Libre, mirar precios, reputación de vendedores, volumen visible de reseñas y variedad de publicaciones. Después observar si en Google la categoría muestra tracción o si es apenas una moda breve. Más tarde, revisar Meta para ver si hay campañas activas o señales de interés comercial.",
          "Con esa base, el siguiente paso sería hablar con por lo menos tres proveedores certificados, pedir cotizaciones comparables, solicitar fotos reales del producto y de las cajas, confirmar medidas, peso, material y embalaje individual, y finalmente estimar el margen neto. Si el producto tiene novedad, un proveedor confiable, una logística razonable y una rentabilidad sana frente a la inversión, recién ahí empieza a parecer una oportunidad seria.",
        ],
      },
      {
        title: "La decisión final sigue siendo propia",
        paragraphs: [
          "Una guía puede ayudarte a ordenar criterios, pero la decisión final sigue siendo una responsabilidad del vendedor. Hay productos que en papel parecen excelentes y después no conectan con el público; también ocurre lo contrario: oportunidades que parecen pequeñas y terminan funcionando muy bien por timing, presentación o precio.",
          "Lo importante es que la compra no sea una reacción impulsiva. Cuando la validación se hace con método, el error puede seguir existiendo, pero deja de ser un salto al vacío y pasa a ser una apuesta informada.",
        ],
      },
    ],
    closing: "La mejor validación no promete certeza absoluta: promete reducir errores evitables antes de comprometer stock, capital y tiempo de trabajo.",
  },
  margenReal: {
    slug: "margen-real",
    kicker: "Guía práctica",
    title: "Cómo calcular margen real y no margen de fantasía",
    intro: [
      "Muchos productos parecen rentables hasta que se suman todos los costos que de verdad intervienen en la operación. El margen de fantasía nace cuando sólo se resta el precio de compra al precio de venta y se ignoran comisiones, retenciones, logística y gastos directos del producto.",
      "Trabajar con margen real no significa complicarse de más. Significa separar los costos por unidad de los costos generales del negocio y entender cuánto dinero deja efectivamente cada venta después de pasar por toda la cadena operativa.",
    ],
    sections: [
      {
        title: "Empezar por las preguntas correctas",
        paragraphs: [
          "La pregunta correcta no es cuánto se vende, sino cuánto queda limpio en cada unidad. Para responderla, hace falta partir del costo del producto en China incluyendo el embalaje individual correcto, porque ese packaging muchas veces define parte del peso, de la presentación y hasta de las roturas. Después hay que sumar el costo de traerlo a Argentina y no suponer que el método de importación da igual, porque el courier puede ser útil en algunas escalas y ruinoso en otras.",
          "Una vez que el producto está acá, aparecen otros costos directos que sí deberían entrar en el cálculo por unidad: almacenamiento, preparación, envío al correo o centro logístico, comisiones de Mercado Libre, retenciones de Ingresos Brutos y eventuales costos por financiación. Todo eso pertenece a la venta. En cambio, gastos corrientes como internet, alquiler parcial de la casa o el abono del teléfono son costos de funcionamiento y conviene tratarlos por otro carril para no deformar el análisis unitario.",
        ],
      },
      {
        title: "Variables que suelen pesar más",
        paragraphs: [
          "Las variables que más suelen mover el resultado son menos glamorosas de lo que parece. El costo del producto, el flete total, la comisión por vender, la logística de última milla y las retenciones suelen explicar una parte enorme del margen real. Un pequeño error en cualquiera de esos puntos puede convertir un negocio aceptable en uno mediocre. Por eso una calculadora seria tiene que mostrar el costo individual total y compararlo con la ganancia neta por venta.",
          "También pesa mucho la diferencia entre precio de venta deseado y precio de venta posible. A veces el cálculo inicial supone un precio que el mercado no tolera o que la competencia ya dejó corto. Cuando eso pasa, el margen teórico es irrelevante. El número que importa es el que sobrevive a una publicación real en una categoría competitiva, con todas las fricciones que aparecen cuando el producto llega al mercado.",
        ],
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "Uno de los errores más extendidos es distribuir mal los costos. Meter gastos generales del negocio dentro del margen unitario puede inflar o hundir artificialmente la cuenta. Otro error típico es olvidar conceptos como embalaje, etiquetado, reposiciones, descuentos o productos dañados. Esas cosas no siempre pasan en todas las ventas, pero pasan lo suficiente como para merecer una hipótesis prudente dentro del cálculo.",
          "También es frecuente mirar solamente el porcentaje de margen y no el dinero concreto que queda. Dos productos pueden mostrar porcentajes parecidos y, sin embargo, exigir inversiones muy distintas. Por eso siempre conviene mirar la relación entre inversión por unidad y ganancia neta por unidad. Esa comparación ayuda a priorizar mejor el capital, especialmente cuando todavía no sobra caja para probar muchas cosas al mismo tiempo.",
        ],
      },
      {
        title: "Cómo aplicar la guía a un caso real",
        paragraphs: [
          "Imaginemos un producto que cuesta US$2,50 en origen y llega a una estructura final de costos que incluye importación, embalaje, etiquetado, comisión, retención y logística. El ejercicio útil es construir el costo por unidad completo y recién después compararlo con el precio de venta posible. Si el producto se vende a un precio atractivo pero deja una ganancia neta muy baja, probablemente esté inmovilizando capital sin aportar demasiado al negocio.",
          "En cambio, si el costo individual está bien medido y la ganancia neta deja espacio para descuentos, devoluciones o pequeñas ineficiencias, la operación se vuelve más sana. Esa es la diferencia entre un margen de fantasía y un margen operativo: uno sirve para entusiasmarse, el otro sirve para decidir.",
        ],
      },
      {
        title: "La decisión final sigue siendo propia",
        paragraphs: [
          "No existe una cuenta universal que valga para todos los productos. Cada categoría tiene sus particularidades y cada vendedor tiene una estructura distinta. Lo que sí puede hacerse es adoptar un método consistente para no mentirse con los números.",
          "Cuando el margen se calcula con honestidad, la venta deja de ser una ilusión optimista y pasa a ser una operación controlada. Esa es la base para crecer sin descubrir demasiado tarde que se estaba vendiendo mucho y ganando poco.",
        ],
      },
    ],
    closing: "El margen real no siempre es el más lindo de mirar, pero es el único que sirve para tomar decisiones con criterio comercial.",
  },
  importarChina: {
    slug: "importar-desde-china",
    kicker: "Guía práctica",
    title: "Importar desde China con criterio comercial",
    intro: [
      "Importar no empieza con un producto: empieza con un método. La diferencia entre una compra profesional y una compra improvisada suele aparecer en cómo se elige al proveedor, cómo se compara precio contra calidad y cómo se deja todo especificado antes de pagar.",
      "Alibaba puede ser un buen punto de partida, pero no por sí solo. La plataforma ayuda a encontrar oferta, antecedentes y canales de comunicación formales; aun así, el criterio comercial sigue estando del lado del comprador.",
    ],
    sections: [
      {
        title: "Empezar por las preguntas correctas",
        paragraphs: [
          "La primera pregunta no es cuál proveedor ofrece el menor precio, sino cuál ofrece la mejor relación entre confiabilidad, claridad y costo total. Conviene priorizar proveedores certificados, con historial de ventas, calificaciones suficientes y antigüedad razonable. Esa base no garantiza una compra perfecta, pero filtra buena parte del riesgo obvio antes de empezar a negociar.",
          "También es fundamental mantener la conversación dentro de la plataforma siempre que sea posible. Cuando la negociación queda registrada, el comprador conserva mejores herramientas para reclamar si aparece un incumplimiento. Eso vale especialmente al principio, cuando todavía no existe una relación comercial consolidada y cada detalle puede terminar siendo importante.",
        ],
      },
      {
        title: "Variables que suelen pesar más",
        paragraphs: [
          "Un criterio simple y muy útil es trabajar como mínimo con tres presupuestos comparables. Eso obliga a ordenar especificaciones, evita enamorarse del primer precio y permite incluso hacer competir a los proveedores entre sí. El presupuesto correcto no debería limitarse al valor unitario; debería incluir MOQ, tiempo de producción, alternativas de embalaje, peso estimado, costo de muestra y condiciones de envío.",
          "Antes de cerrar una orden, conviene pedir fotos reales del producto, de la caja individual y de las cajas master. También hace falta verificar medidas, materiales, colores, terminación y cualquier requisito relevante para la logística o la publicación posterior. Cuando eso no se define con claridad, el riesgo de recibir algo distinto crece mucho, incluso si el proveedor parecía confiable.",
        ],
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "Uno de los errores más comunes es negociar sólo precio y descuidar especificaciones. El proveedor puede pensar que cumplió y el comprador puede sentir que recibió otra cosa. En comercio exterior, lo ambiguo suele salir caro. Otro error típico es no revisar el packaging. Un producto puede llegar correctamente fabricado y, sin embargo, volverse inviable por una caja individual mala, inestable o poco apta para la cadena logística local.",
          "También se subestima mucho el efecto del tiempo. El envío marítimo suele ser más económico y por eso debería ser el camino preferido cuando el calendario lo permite, pero exige planificación. Quien compra tarde termina empujado al aéreo o al courier, y ahí muchos márgenes se deterioran sin necesidad. Comprar con anticipación no es una fineza: muchas veces es la condición para que el negocio cierre.",
        ],
      },
      {
        title: "Cómo aplicar la guía a un caso real",
        paragraphs: [
          "Supongamos que querés importar un artículo estacional para una campaña de regalo. El proceso profesional sería seleccionar varios proveedores certificados en Alibaba, pedir tres cotizaciones, comparar materiales, revisar fotos reales, solicitar video o muestra cuando haga falta y confirmar cómo viene empaquetado el producto. Después, recién con todo eso, elegir si conviene un embarque marítimo para optimizar costo o si la oportunidad exige otra velocidad.",
          "En esa misma instancia conviene revisar si la caja master cumple con las restricciones de peso y tamaño que te van a convenir después. Un producto con buen precio unitario puede transformarse en un problema si la logística posterior se vuelve torpe o cara. Importar con criterio comercial significa mirar el negocio completo y no sólo la primera factura.",
        ],
      },
      {
        title: "La decisión final sigue siendo propia",
        paragraphs: [
          "Ninguna plataforma reemplaza el juicio del comprador. Alibaba puede facilitar la búsqueda, pero la responsabilidad de pedir bien, comparar bien y cerrar bien sigue estando del lado de quien importa.",
          "Cuando la compra se hace con método, la relación con el proveedor deja de basarse en intuición y pasa a apoyarse en especificaciones, plazos y evidencias. Esa diferencia es la que suele separar una importación defendible de una mala sorpresa cara.",
        ],
      },
    ],
    closing: "Importar bien no es sólo conseguir precio: es conseguir un producto correcto, en condiciones claras y con una logística compatible con el negocio que querés construir.",
  },
  importacionCourier: {
    slug: "importacion-courier",
    kicker: "Guía práctica",
    title: "Importación por courier: cuándo sirve y cuándo no",
    intro: [
      "El courier puede ser una herramienta muy valiosa cuando se usa para lo que realmente sirve. Bien elegido, acelera pruebas y simplifica procesos. Mal elegido, encarece innecesariamente una operación que podría resolverse mejor por otra vía.",
      "La clave es no tratarlo como una solución universal. Su conveniencia depende del tipo de producto, del valor de la compra, del peso por bulto y del objetivo comercial de la importación.",
    ],
    sections: [
      {
        title: "Empezar por las preguntas correctas",
        paragraphs: [
          "La pregunta principal es si el courier ayuda a aprender rápido o si está siendo usado para compensar una mala planificación. En general, conviene intentar primero el método más económico que todavía sea compatible con el proyecto. El courier puede ser ideal para muestras, testeo, lotes chicos o validaciones iniciales. Cuando el negocio ya exige escala, suele empezar a mostrar sus límites.",
          "También hay que revisar la normativa vigente y confirmar que la operación respete las condiciones aplicables, incluyendo peso por bulto y tope por compra. Si el producto queda fuera de ese marco, el problema ya no es sólo de costos: la operación exige otro encuadre, otra documentación y otra complejidad administrativa.",
        ],
      },
      {
        title: "Variables que suelen pesar más",
        paragraphs: [
          "Para evaluar si el courier conviene, pesa mucho la relación entre costo logístico y velocidad. Si el producto tiene alto margen, poca cantidad y necesidad de llegar rápido, el courier puede justificarse. Si el margen es más ajustado o si el lote ya empieza a ser grande, la ecuación cambia. Lo barato no siempre es lo más rápido, y lo rápido no siempre es lo más rentable.",
          "Otra variable importante es la disciplina del proveedor al preparar la carga. Hace falta asegurarse de que cumpla con peso de bultos, documentación y empaque adecuados. Si el proveedor no controla bien ese punto, la compra puede chocar con restricciones o encarecerse por errores evitables antes de salir de origen.",
        ],
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "El error más habitual es usar courier para operaciones que ya deberían estar pensadas con otra estructura. En ese caso, el importador paga rapidez que en realidad sólo compensa falta de agenda comercial. Otro error común es olvidar que, si no se usa este método, entran en juego otros requisitos como licencia de importación, despachante, declaraciones y restricciones específicas que no pueden improvisarse sobre la marcha.",
          "También es frecuente calcular mal el impacto del peso. A veces la mercadería parece liviana en la ficha del proveedor, pero el bulto armado termina siendo más problemático. Si eso no se verifica antes, la operación puede volverse cara, incómoda o directamente improcedente para courier.",
        ],
      },
      {
        title: "Cómo aplicar la guía a un caso real",
        paragraphs: [
          "Si querés probar un producto nuevo con baja cantidad para evaluar respuesta, el courier puede ser un excelente camino. Permite testear calidad, packaging, publicación y aceptación del mercado sin comprometer una importación más grande. En ese escenario, la velocidad tiene un valor claro: reduce tiempo de aprendizaje.",
          "En cambio, si ya estás pensando en una campaña fuerte con volumen, el análisis cambia. Ahí conviene preguntarse si el apuro está justificado o si se podría haber comprado antes para usar una vía más económica. La mejor importación no siempre es la más rápida, sino la que llega alineada con la rentabilidad del proyecto.",
        ],
      },
      {
        title: "La decisión final sigue siendo propia",
        paragraphs: [
          "El courier no es ni bueno ni malo por sí mismo. Es una herramienta. Su valor depende del contexto, de la etapa del negocio y de la calidad del cálculo previo.",
          "Cuando se usa con criterio, acelera el aprendizaje. Cuando se usa para tapar desorden, suele encarecer la operación sin resolver el problema de fondo.",
        ],
      },
    ],
    closing: "El courier sirve mucho mejor como herramienta de validación o velocidad táctica que como sustituto permanente de una logística bien planificada.",
  },
  pesoFragilidad: {
    slug: "peso-y-fragilidad",
    kicker: "Guía práctica",
    title: "Peso, fragilidad y devoluciones",
    intro: [
      "Hay productos que parecen muy atractivos hasta que la logística entra en escena. Peso, volumen, fragilidad y tasa de devoluciones pueden destruir más margen que una mala publicación. Por eso conviene mirar estas variables desde el principio y no cuando la mercadería ya está comprada.",
      "No se trata de descartar todo lo complejo, sino de entender cuándo el margen compensa y cuándo el producto queda demasiado expuesto a roturas, reclamos o costos operativos innecesarios.",
    ],
    sections: [
      {
        title: "Empezar por las preguntas correctas",
        paragraphs: [
          "La primera pregunta debería ser si el producto tolera bien toda la cadena logística. Un artículo puede salir perfecto de fábrica y aun así sufrir en el envío desde China, en el depósito, en la preparación local o en la entrega final al comprador. Cuando un producto es sensible, cada tramo agrega una oportunidad más de daño, reclamo o costo adicional.",
          "También hay que preguntarse cómo impacta el peso. El peso suma costos al importar y suele castigar todavía más cuando la vía es aérea. Incluso si el producto llega bien, el costo acumulado por moverlo puede dejar una rentabilidad pobre. Por eso no basta con que la unidad sea linda o vendible; hace falta que sobreviva económicamente a su propia logística.",
        ],
      },
      {
        title: "Variables que suelen pesar más",
        paragraphs: [
          "Si el margen de ganancia es alto, parte de estas complejidades puede administrarse mejor. Hay categorías donde el negocio soporta alguna rotura, un packaging más robusto o una logística más cara. Pero cuando el margen es ajustado, peso y fragilidad pasan a ser enemigos directos del modelo. El problema no es sólo cuánto cuesta traer el producto, sino cuánto cuesta sostenerlo sin incidentes.",
          "Las devoluciones también deben entrar en la evaluación. En algunos productos, el motivo no es una rotura sino la diferencia entre expectativa e imagen. Si el artículo no coincide con lo que sugieren las fotos o si la percepción de calidad cae al recibirlo, aparecen devoluciones o reclamos. En ropa, además, talles y colores suman otra capa de fricción muy conocida.",
        ],
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "Uno de los errores más frecuentes es subestimar el empaque. Un producto razonable con una caja débil puede convertirse en un problema masivo. También se comete el error de mirar sólo la ficha de origen y no pedir evidencia real del producto terminado. Cuando la calidad percibida no coincide con las imágenes, el vendedor queda expuesto a una devolución que muchas veces no estaba contemplada en el margen inicial.",
          "Otro error es pensar que la fragilidad sólo se juega en el envío final al cliente. En realidad, el producto puede dañarse en fábrica, en consolidación, en tránsito internacional, en depósito o en la preparación previa a despacho. Cada instancia importa. Si el producto no soporta bien esa secuencia, el negocio necesita mucho más margen para seguir siendo saludable.",
        ],
      },
      {
        title: "Cómo aplicar la guía a un caso real",
        paragraphs: [
          "Si evaluaras, por ejemplo, un set decorativo de vidrio, deberías revisar fotos reales del embalaje, grosor de la caja individual, separadores internos, peso final y posibilidad de refuerzo local. Después habría que estimar cuánto sube la logística por ese peso y cuánto margen queda si aparece una tasa razonable de roturas o devoluciones. Esa cuenta puede cambiar completamente la lectura del producto.",
          "Con prendas o accesorios de talle, el análisis es distinto pero igual de sensible. Allí el problema pasa más por devoluciones ligadas a ajuste, expectativa de color o percepción de material. No son fallas idénticas, pero sí tienen el mismo efecto económico: una parte de la venta se vuelve más costosa de lo que parecía en la primera publicación.",
        ],
      },
      {
        title: "La decisión final sigue siendo propia",
        paragraphs: [
          "Hay productos complejos que pueden valer la pena si el margen acompaña y si el modelo operativo está preparado para sostenerlos. El punto no es eliminar todo riesgo, sino saber qué riesgo se está comprando.",
          "Cuando peso, fragilidad o devoluciones se miran de frente, dejan de ser sorpresas. Y en comercio electrónico, evitar sorpresas vale casi tanto como encontrar una buena oportunidad.",
        ],
      },
    ],
    closing: "Un buen producto no sólo debe venderse: también debe poder importarse, almacenarse, despacharse y devolverse sin destruir la rentabilidad en el camino.",
  },
  monotributo: {
    slug: "monotributo-mercado-libre",
    kicker: "Guía práctica",
    title: "Monotributo y Mercado Libre",
    intro: [
      "El contenido es informativo y no reemplaza asesoramiento profesional específico. Aun así, conviene tener una base ordenada para no improvisar una parte del negocio que impacta directamente en facturación, costos y proyección de crecimiento.",
      "La parte fiscal no suele ser la más atractiva al empezar, pero ignorarla trae consecuencias. Facturar bien, entender límites y anticipar cambios de encuadre ayuda a construir un negocio más prolijo y menos vulnerable a sobresaltos.",
    ],
    sections: [
      {
        title: "Empezar por las preguntas correctas",
        paragraphs: [
          "La primera regla es simple: toda venta debe ser facturada. A partir de ahí, la pregunta correcta pasa por entender bajo qué encuadre conviene operar y hasta dónde alcanza. Para muchos proyectos que recién empiezan, el Monotributo suele ser la opción más económica y ordenada para arrancar, siempre dentro de los límites vigentes y con seguimiento serio de la facturación acumulada.",
          "Como referencia operativa, hoy una de las preguntas habituales pasa por cuánto margen de crecimiento deja la categoría más alta del régimen simplificado y qué ocurre cuando se supera. En términos prácticos, cuando el negocio excede el encuadre del Monotributo, la conversación cambia y aparecen obligaciones más pesadas ligadas al IVA y a una estructura contable más exigente.",
        ],
      },
      {
        title: "Variables que suelen pesar más",
        paragraphs: [
          "Lo que más pesa no es sólo el tope de facturación, sino la transición de una etapa a otra. Mientras el proyecto está dentro del régimen simplificado, el costo administrativo suele ser más amable. Cuando se pasa a Responsable Inscripto en IVA, el esquema se vuelve más exigente y los costos por venta pueden aumentar. Ese salto no debería tomarse como un castigo, sino como una señal de escala, pero hace falta anticiparlo.",
          "También existe una alternativa empresarial para ordenar mejor el crecimiento: pasar a una sociedad. Para algunos proyectos, una persona jurídica puede dar un marco más claro al emprendimiento, especialmente cuando el volumen, la formalidad o la estructura comercial empiezan a pedir algo más que una operatoria personal. Dentro de ese universo, la SAS suele aparecer como una opción valorada porque puede constituirse de manera ágil y 100% online.",
        ],
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "Uno de los errores más comunes es tratar el tema fiscal como algo que se resolverá más adelante. Otro es asumir que mientras entren ventas no hace falta revisar límites, facturación o conveniencia del encuadre. Ese enfoque suele funcionar hasta que deja de funcionar, y cuando llega el ajuste el impacto puede ser más incómodo y más caro de lo necesario.",
          "También se ve mucho la idea de mezclar crecimiento comercial con desorden administrativo. Vender más no reemplaza una estructura prolija. A veces el negocio pide seguir como Monotributo un tiempo más; otras veces pide evaluar un paso a Autónomo o una sociedad. Lo importante es que el criterio no sea improvisado, sino acompañado por números y por asesoramiento profesional cuando corresponda.",
        ],
      },
      {
        title: "Cómo aplicar la guía a un caso real",
        paragraphs: [
          "Si un vendedor está empezando, tiene pocas líneas de producto y quiere moverse con estructura liviana, el Monotributo suele ser el encuadre más razonable para ordenar la primera etapa. La prioridad en ese caso es facturar todo, controlar la evolución anual y no perder de vista el techo operativo del régimen. Eso permite crecer con costos fiscales y administrativos relativamente contenidos.",
          "Cuando el negocio empieza a acercarse al límite o cuando el volumen obliga a otra estructura, conviene proyectar el paso siguiente con anticipación. A veces será como Responsable Inscripto; en otros casos, una sociedad puede dar un marco mejor. El punto central es que el cambio no llegue como reacción desesperada después de haber crecido desordenadamente.",
        ],
      },
      {
        title: "La decisión final sigue siendo propia",
        paragraphs: [
          "No existe una única respuesta correcta para todos los emprendimientos. La opción más económica para iniciar no siempre será la mejor para escalar, y la estructura más formal no siempre es necesaria desde el primer día.",
          "Lo importante es que la parte fiscal no se trate como un detalle secundario. Un negocio sano no sólo vende: también se encuadra bien, factura bien y crece con una estructura que no lo ahogue cuando empieza a expandirse.",
        ],
      },
    ],
    closing: "La parte fiscal no debería frenarte, pero tampoco conviene improvisarla. Ordenarla desde el principio ayuda a crecer con menos fricción y con mejores decisiones.",
  },
};
