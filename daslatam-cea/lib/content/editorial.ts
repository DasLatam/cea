import type { EditorialPageData } from "@/components/content/EditorialPage";

export const editorialPages: Record<string, EditorialPageData> = {
  about: {
    kicker: "About",
    title: "Qué es DAS LATAM CEA y por qué el proyecto empieza por el contenido.",
    subtitle:
      "DAS LATAM CEA nació con una idea simple: en comercio electrónico, la mayoría de los errores caros no aparecen por falta de herramientas, sino por falta de criterio ordenado.",
    ctaLabel: "Ir a metodología",
    ctaHref: "/metodologia",
    sections: [
      {
        heading: "Un proyecto pensado para el contexto argentino",
        body: `La promesa del sitio es ayudar a tomar mejores decisiones en comercio electrónico dentro de Argentina, y eso obliga a asumir algo desde el principio: el contexto importa. No alcanza con copiar marcos de trabajo de otros países ni con repetir slogans sobre “productos ganadores”. Acá pesan la sensibilidad al precio, la velocidad de reposición, la logística de última milla, la disponibilidad de capital de trabajo, el efecto de los cambios macroeconómicos y el costo de cometer errores operativos. Por eso el proyecto no se define como un comparador ni como un simple tablero de datos. Se define como una plataforma editorial y, más adelante, analítica, diseñada para traducir señales dispersas en criterios utilizables. El objetivo no es marear al usuario con indicadores; es ayudarlo a decidir dónde poner atención, qué riesgo aceptar y qué hipótesis conviene validar antes de comprar, importar o publicar.`
      },
      {
        heading: "Por qué el contenido va primero",
        body: `Empezar por la capa editorial no es una concesión ni un “mientras tanto”; es una decisión de arquitectura de producto. Si una plataforma pretende recomendar productos, alertar sobre oportunidades o sugerir ventanas de compra, primero tiene que explicar cómo piensa, qué fuentes mira, qué limitaciones reconoce y qué sesgos evita. El contenido largo permite fijar ese contrato con el usuario. Permite aclarar, por ejemplo, que una categoría con mucho movimiento no siempre es una buena oportunidad, que una publicación barata no siempre deja margen y que una estacionalidad intensa puede ser tan atractiva como peligrosa si llega tarde la reposición. También sirve para ordenar el lenguaje común del proyecto: cuando más adelante hablemos de saturación, presión competitiva, margen defendible o riesgo logístico, esas expresiones ya tendrán una base pública y trazable.`
      },
      {
        heading: "Qué rol cumple DAS LATAM dentro del proceso comercial",
        body: `El proyecto no pretende reemplazar al comerciante ni a su criterio; pretende mejorar su marco de decisión. La función de DAS LATAM CEA es actuar como una capa intermedia entre la intuición y la ejecución: tomar señales del mercado, transformarlas en preguntas útiles y ofrecer una estructura para evaluar productos, categorías, márgenes y restricciones. En esa lógica, el sitio no empuja a “avanzar” por entusiasmo; muchas veces su mayor valor será señalar por qué no conviene avanzar todavía. Esa negativa, cuando está bien argumentada, ahorra más dinero que cualquier hallazgo positivo. En la práctica, queremos que el usuario pueda entrar al sitio para entender mejor su escenario, contrastar sus ideas con criterios escritos y después volver, ya en la etapa de herramientas, para profundizar con datos, snapshots y modelos más estructurados.`
      },
      {
        heading: "A quién le habla este sitio",
        body: `La audiencia principal no es el gran retailer con un equipo de analítica, sino el operador independiente, el pequeño importador, el vendedor que quiere profesionalizarse y el emprendedor que ya entendió que improvisar sale caro. También le puede servir a equipos comerciales que necesitan ordenar lenguaje y proceso antes de desarrollar software propio. El punto en común de todos ellos es el mismo: necesitan información que baje a tierra, no humo aspiracional. Necesitan entender qué revisar antes de traer stock, qué preguntas hacer a un proveedor, cómo pensar una categoría más allá del precio y qué tipo de riesgo operativo aparece detrás de productos que a primera vista parecen simples. Todo el diseño editorial del sitio, desde las guías hasta los textos legales, apunta a dar claridad, reducir ambigüedad y evitar falsas expectativas.`
      },
      {
        heading: "Cómo se va a expandir el proyecto",
        body: `La hoja de ruta es deliberada. Primero se consolida un corpus de contenido realmente útil: guías, metodología, fuentes, contacto, criterios de suscripción y documentos legales completos. Luego se libera una sección de herramientas con alcance claro y mensajes honestos sobre lo que cada módulo puede y no puede hacer. Esa progresión importa porque protege la credibilidad del producto. No queremos una plataforma que se vea sofisticada pero tome atajos frágiles en la captura o interpretación de datos. Queremos una plataforma que crezca sobre una base editorial sólida, con claims moderados y lógica verificable. En síntesis, DAS LATAM CEA no busca impresionar rápido; busca convertirse en una referencia confiable y progresivamente más útil para vender mejor en Argentina.`
      }
    ],
  },
  "como-funciona": {
    kicker: "Cómo funciona",
    title: "Cómo se organiza la experiencia del sitio y por qué la secuencia importa.",
    subtitle:
      "La plataforma se está construyendo por capas. Primero el criterio, después la automatización, y finalmente la lectura comparativa de oportunidades.",
    ctaLabel: "Ver guías",
    ctaHref: "/guias",
    sections: [
      {
        heading: "Primera capa: lectura y contexto",
        body: `La puerta de entrada del proyecto es el contenido. En esta fase, el sitio reúne páginas largas y desarrolladas que explican cómo pensar una oportunidad comercial en Argentina sin caer en simplificaciones. Eso incluye guías sobre validación de producto, margen real, importación, riesgo logístico y cuestiones operativas que suelen omitirse cuando se habla de e-commerce de forma superficial. Esta capa cumple dos funciones. La primera es ayudar a usuarios nuevos a ordenar criterios antes de usar una herramienta. La segunda es fijar una base conceptual común para todo lo que vendrá después. Si alguien no entiende todavía por qué un producto liviano y repetitivo suele ser más noble que uno frágil y ocasional, ninguna tabla llena de números le va a resolver el problema de fondo.`
      },
      {
        heading: "Segunda capa: sistema editorial y suscripción",
        body: `El segundo componente del sitio es la curaduría. No se trata sólo de publicar textos; se trata de sostener una conversación periódica con usuarios que quieren estar atentos a señales comerciales sin quedar atrapados por el ruido. Por eso la página de suscripción no se plantea como una simple caja para dejar un mail. Se plantea como un compromiso editorial: una frecuencia definida, un tono sobrio, foco en oportunidades semanales seleccionadas y contexto suficiente para entender por qué una alerta merece atención. Antes de activar esa distribución a escala, el sitio necesita cerrar bien sus reglas internas: qué entendemos por oportunidad, qué filtro editorial aplicamos, qué categorías evitamos y cómo comunicamos incertidumbre o baja confianza. Esa claridad es parte central de cómo funciona la propuesta.`
      },
      {
        heading: "Tercera capa: herramientas con alcance explícito",
        body: `La sección Herramientas va a llegar, pero no va a aparecer como una caja negra. Cada módulo deberá indicar qué insumo usa, qué tipo de conclusión entrega y qué grado de confianza admite. El sitio no pretende vender exactitud donde sólo hay estimación. Cuando una herramienta lea una categoría, un listado o una ventana comercial, deberá quedar claro si el dato es observado, derivado o estimado. Esa disciplina empieza ahora, en la etapa editorial. La razón es simple: un sistema útil no necesita exagerar. Necesita distinguir entre hechos disponibles, inferencias razonables y zonas donde todavía conviene que el usuario valide por cuenta propia. En otras palabras, la experiencia completa se diseña para reducir errores de interpretación, no sólo para acelerar clics.`
      },
      {
        heading: "Cuarta capa: recorrido de usuario coherente",
        body: `El recorrido ideal del usuario es bastante claro. Llega por una necesidad concreta —por ejemplo, evaluar una categoría, comparar una idea de producto o entender si una importación de courier tiene sentido— y encuentra primero una respuesta argumentada. A partir de ahí puede navegar a metodología para ver cómo se construye el criterio, a fuentes para entender de dónde surge la información, a contacto para plantear necesidades específicas y a suscripción si quiere mantenerse al tanto de nuevos análisis. Cuando las herramientas estén activas, ese mismo usuario ya llegará con un marco de referencia que le permitirá interpretar mejor los resultados. Esta secuencia es intencional: evita que la herramienta quede desacoplada de la explicación y mejora la calidad general del uso.`
      },
      {
        heading: "Quinta capa: mejora continua sin humo",
        body: `Cómo funciona el sitio también tiene que ver con cómo evoluciona. La plataforma está pensada para crecer de forma incremental, con cambios legibles y sin prometer más de lo que puede sostener. Cada página nueva debe sumar valor real; cada módulo futuro debe nacer con límites claros; cada mejora de diseño debe reforzar la comprensión, no sólo la apariencia. Esa filosofía puede parecer más lenta que una salida apurada al mercado, pero en realidad construye algo más robusto. Si el usuario aprende a confiar en el criterio editorial y en la honestidad del producto, la posterior incorporación de herramientas tendrá una base de legitimidad mucho mayor. Esa es la lógica operativa detrás de toda la experiencia.`
      }
    ],
  },
  metodologia: {
    kicker: "Metodología",
    title: "Cómo se piensa una oportunidad comercial sin fingir precisión donde no la hay.",
    subtitle:
      "La metodología del sitio busca separar dato observado, inferencia derivada y juicio editorial. Esa distinción es una obligación, no un detalle técnico.",
    ctaLabel: "Ver fuentes",
    ctaHref: "/fuentes",
    sections: [
      {
        heading: "Datos observados, inferencias y criterio",
        body: `Toda metodología seria empieza por distinguir planos. En DAS LATAM CEA trabajamos con tres niveles: datos observados, inferencias derivadas y juicio editorial. Los datos observados son aquellos que pueden verificarse directamente en una fuente, como un precio visible, una condición de venta, una categoría o una característica logística. Las inferencias derivadas surgen cuando combinamos varias señales para construir una lectura, por ejemplo sobre saturación, presión competitiva o complejidad operativa. El juicio editorial aparece cuando esas señales se traducen en una recomendación prudente, una alerta o una invitación a profundizar. Esta separación importa porque evita la trampa más común de las plataformas prematuras: presentar como hecho algo que en realidad es una interpretación. Nuestro método parte de esa honestidad para preservar credibilidad y utilidad práctica.`
      },
      {
        heading: "Variables que priorizamos en la etapa inicial",
        body: `No todas las variables pesan lo mismo. En la etapa editorial priorizamos aquellas que más inciden en la calidad de una decisión comercial temprana: tipo de producto, complejidad logística, exposición a devoluciones, necesidad de postventa, sensibilidad al precio, reposición posible, estacionalidad y compatibilidad con el flujo de caja de un operador chico o mediano. Este recorte es intencional. Podríamos listar decenas de factores, pero eso no necesariamente mejora el criterio. Lo que mejora el criterio es entender qué variables tienen poder para destruir margen o inmovilizar capital. En Argentina, muchas malas decisiones nacen de subestimar el costo operativo total o de sobrevalorar una tendencia coyuntural. La metodología se diseñó precisamente para contrapesar esos sesgos frecuentes.`
      },
      {
        heading: "Cómo evaluamos calidad de una hipótesis",
        body: `Una buena idea de producto no es aquella que suena atractiva en abstracto, sino aquella que soporta preguntas incómodas. ¿Se entiende rápido? ¿Tiene un uso frecuente o queda supeditada a un impulso puntual? ¿Es fácil de empacar y enviar? ¿Tiene variantes que multiplican el riesgo de error? ¿Exige instalación, asesoramiento o garantías difíciles de sostener? ¿Tolera competencia por precio o necesita posicionamiento fino? Nuestra metodología recomienda someter cualquier hipótesis a esta clase de preguntas antes de pasar al análisis cuantitativo. De ese modo, la lectura posterior de datos no parte desde cero, sino desde una hipótesis ya tensionada. El objetivo es que los números sirvan para afinar una evaluación y no para maquillar una idea débil con una estética de aparente rigor.`
      },
      {
        heading: "Límites asumidos y comunicación de incertidumbre",
        body: `No existe un método serio sin reconocimiento de límites. Algunas métricas futuras del producto serán necesariamente estimativas, y cuando eso ocurra deberá indicarse con claridad. También habrá zonas donde la mejor recomendación sea “todavía no hay suficiente información” o “conviene validar por otros medios”. Ese tipo de respuesta no debilita la plataforma; la fortalece. La tentación de responder siempre con contundencia es grande, sobre todo en productos digitales que buscan impresionar. Nosotros preferimos un sistema que explicite incertidumbre antes que uno que la esconda bajo scores opacos. Esa decisión metodológica atraviesa tanto el contenido editorial como el diseño futuro de herramientas.`
      },
      {
        heading: "Qué significa usar bien esta metodología",
        body: `Usar bien la metodología no implica memorizar un checklist. Implica incorporar una forma de mirar. El usuario debería salir de estas páginas con más capacidad para distinguir oportunidad de ruido, complejidad real de complejidad escondida y margen visual de margen defendible. Si logramos eso, el sitio ya estará cumpliendo una función valiosa incluso antes de desplegar sus módulos automatizados. En etapas posteriores, la metodología seguirá operando como contrato de uso: cualquier herramienta o recomendación que aparezca en el producto deberá poder explicarse a la luz de estos principios. Ese puente entre teoría editorial y ejecución tecnológica es una de las piezas centrales del proyecto.`
      }
    ],
  },
  fuentes: {
    kicker: "Fuentes",
    title: "De dónde sale la información y cómo conviene leerla.",
    subtitle:
      "Una fuente útil no es sólo la que existe, sino la que se interpreta bien. Esta página explica el criterio general para usar datos, referencias y señales comerciales dentro del proyecto.",
    ctaLabel: "Ir a roadmap",
    ctaHref: "/roadmap",
    sections: [
      {
        heading: "Fuentes primarias, secundarias y contexto",
        body: `El sitio distingue entre fuentes primarias, fuentes secundarias y contexto editorial. Las fuentes primarias son aquellas que proveen información de origen o lo más cercana posible al origen. Las secundarias sirven para contrastar, resumir o agregar perspectiva. El contexto editorial, por su parte, es la capa donde se ordena esa información para convertirla en una lectura útil. En comercio electrónico, el problema no suele ser la ausencia total de señales, sino la mala combinación de señales heterogéneas. Una captura aislada, una tendencia descontextualizada o una percepción anecdótica pueden conducir a conclusiones muy pobres si no se insertan en una estructura de análisis. Por eso el proyecto no enumera fuentes para presumir volumen, sino para establecer qué tipo de lectura puede sostenerse con cada una.`
      },
      {
        heading: "Qué hacemos con la información pública",
        body: `Una parte importante del trabajo se apoya en información públicamente observable o en datos accesibles mediante integraciones permitidas. Sin embargo, el hecho de que un dato sea visible no significa que sea autosuficiente. Un precio listado no refleja por sí solo margen. Una categoría activa no refleja por sí sola oportunidad. Una publicación destacada no prueba rentabilidad. El proyecto asume que los datos públicos sirven como entrada, no como verdad total. La tarea editorial consiste en ubicar esos datos dentro de preguntas más amplias y, cuando corresponda, advertir sus límites. Esa es una diferencia clave respecto de productos que presentan información visible como si fuera una respuesta completa.`
      },
      {
        heading: "Por qué también importan las fuentes no automatizables",
        body: `No todo lo valioso entra en una API. Hay conocimiento relevante que surge de experiencia operativa, conversaciones con operadores, revisión de procesos de postventa, observación logística y aprendizaje acumulado sobre categorías específicas. Ese tipo de fuente no tiene siempre formato estructurado, pero sí puede enriquecer mucho la calidad del criterio. La plataforma busca integrar esa clase de entendimiento sin convertirlo en afirmación absoluta. Cuando una guía habla, por ejemplo, de fragilidad, devoluciones o complejidad de variantes, lo hace porque esas variables suelen aparecer una y otra vez en la práctica cotidiana de vendedores y operadores. Incorporar esa experiencia al contenido es parte del valor del sitio, siempre que se comunique con prudencia y sin sobreactuar precisión.`
      },
      {
        heading: "Trazabilidad y actualización",
        body: `La trazabilidad no es un gesto académico; es una condición para construir confianza. Toda vez que el sitio avance sobre módulos más analíticos, deberá poder explicarse qué tipo de fuente alimenta cada lectura y con qué vigencia se la considera. En la etapa editorial, esta misma regla opera como disciplina de redacción: no escribimos para llenar espacio, sino para fijar criterios que luego puedan sostenerse y revisarse. También asumimos que algunas páginas necesitarán actualización periódica porque cambian los marcos regulatorios, las dinámicas de plataforma o ciertas condiciones logísticas. La existencia de esta página de fuentes busca precisamente dejar en claro que el contenido no es estático ni “mágico”; es una construcción situada que exige revisión.`
      },
      {
        heading: "Cómo debería usar el lector esta información",
        body: `La recomendación general es leer estas fuentes como una base para decidir mejor, no como una invitación a delegar completamente el criterio. El sitio puede ordenar variables, señalar riesgos y ofrecer una estructura de análisis; aun así, el lector sigue siendo responsable de validar su operación, su encuadre fiscal, su logística y sus condiciones comerciales concretas. Esta aclaración no disminuye el valor del proyecto. Al contrario: pone el foco en una relación adulta con la información. Una plataforma seria no promete reemplazar toda verificación; promete mejorar la calidad de las preguntas y reducir errores evitables. Eso es exactamente lo que buscamos construir aquí.`
      }
    ],
  },
  contacto: {
    kicker: "Contáctenos",
    title: "Cómo vincularse con el proyecto mientras terminamos la base operativa.",
    subtitle:
      "La página de contacto se concibe como una puerta de entrada para consultas, colaboraciones y pedidos de enfoque, aunque la automatización del formulario quedará para la siguiente fase técnica.",
    ctaLabel: "Ver suscripción",
    ctaHref: "/suscribirse",
    sections: [
      {
        heading: "Qué tipo de consultas tiene sentido enviar",
        body: `La página de contacto no se pensó como un buzón genérico. Su función es canalizar conversaciones que realmente ayuden a mejorar el sitio o a orientar futuras herramientas. Tiene sentido escribir cuando una guía necesita ampliación, cuando una categoría requiere tratamiento editorial específico, cuando un usuario detecta una omisión importante en el enfoque o cuando una empresa quiere evaluar si el futuro producto puede servirle como capa de inteligencia comercial. También puede ser útil para proponer temas de análisis, sugerir casos que merezcan estudio o compartir obstáculos reales que hoy no encuentran buena respuesta en otras plataformas. En todos los casos, el contacto más valioso es el que describe un problema concreto y no sólo una expectativa vaga.`
      },
      {
        heading: "Qué estamos priorizando en esta etapa",
        body: `Durante esta fase estamos priorizando la consolidación del contenido, la claridad metodológica y la consistencia general del sitio. Eso significa que no todas las consultas se traducirán en funcionalidades inmediatas y que no vamos a prometer respuestas automáticas donde todavía no existe un flujo operativo estable. Esta limitación no busca poner distancia, sino manejar expectativas con honestidad. Preferimos explicar en qué etapa estamos antes que abrir un canal que parezca activo y luego no responda a la altura de lo prometido. Si el usuario entiende esta prioridad, el contacto se vuelve más eficaz, porque permite concentrar energía en aportes que realmente ordenen la siguiente fase del proyecto.`
      },
      {
        heading: "Cómo formular un mensaje útil",
        body: `Un buen mensaje de contacto debería incluir contexto y precisión. Si la consulta es sobre una categoría, conviene explicar qué se está evaluando, cuál es el canal principal de venta, qué duda concreta existe y qué tipo de restricción aparece: logística, precio, proveedor, fiscalidad o saturación. Si la consulta es sobre contenido, conviene señalar qué parte falta o qué idea quedó corta. Si el interés pasa por colaborar, lo importante es describir claramente el aporte posible y el objetivo. La utilidad del canal aumenta mucho cuando el emisor evita el lenguaje demasiado amplio y baja el problema a una situación operativa real. Esa práctica también está alineada con el espíritu general del sitio: trabajar con preguntas más nítidas para obtener respuestas más útiles.`
      },
      {
        heading: "Estado actual del formulario y del correo",
        body: `La recepción automatizada del formulario de contacto se integrará en una fase posterior, junto con la suscripción por correo y otras piezas de infraestructura editorial. En esta entrega dejamos la página lista, el lenguaje institucional definido y la relación con el usuario bien explicada. Esto evita montar formularios “de cartón” que aparenten una operatividad inexistente. Cuando el flujo técnico se cierre, esta misma página quedará conectada a los servicios de envío y seguimiento correspondientes. Hasta entonces, su valor principal es explicar con claridad qué conversaciones buscamos abrir y bajo qué criterio se organizarán.`
      },
      {
        heading: "Qué aporta una buena conversación al producto",
        body: `En proyectos como este, las conversaciones correctas pueden valer tanto como una nueva feature. Una consulta bien formulada puede revelar un vacío de contenido, una necesidad transversal en determinada categoría, una mala interpretación frecuente o incluso una línea completa de herramienta futura. Por eso la sección de contacto no es un agregado menor dentro del sitio; es parte del mecanismo de aprendizaje del producto. Si se usa bien, permite detectar qué duele de verdad en la operación diaria y dónde el sitio puede ayudar mejor. Ese aprendizaje, combinado con la metodología y las fuentes, es lo que va a orientar el crecimiento más útil de DAS LATAM CEA.`
      }
    ],
  },
  suscribirse: {
    kicker: "Suscribirse",
    title: "Cómo se está diseñando la suscripción para recibir oportunidades semanales.",
    subtitle:
      "Antes de activar el alta automática, queremos dejar bien definido qué tipo de envío va a recibir el usuario, con qué frecuencia y con qué estándar de calidad editorial.",
    ctaLabel: "Ver herramientas",
    ctaHref: "/herramientas",
    sections: [
      {
        heading: "La suscripción no será una lista de correos genérica",
        body: `El objetivo de esta suscripción no es aumentar un número de mails, sino construir un canal editorial útil. La diferencia es grande. Una lista genérica tiende a llenarse de mensajes repetitivos, titulares inflados o recomendaciones mal contextualizadas. En cambio, una suscripción bien diseñada parte de una pregunta más seria: qué merece realmente ocupar espacio en la atención semanal del lector. En DAS LATAM CEA, el envío futuro buscará reunir oportunidades observables, señales comerciales con interpretación y recordatorios de timing que ayuden a ordenar decisiones. Eso supone menos volumen y más criterio. También supone renunciar a la lógica de “mandar algo porque toca” cuando no hay suficiente contenido valioso que comunicar.`
      },
      {
        heading: "Qué tipo de contenido debería incluir cada envío",
        body: `La estructura proyectada para el envío semanal incluye cuatro tipos de piezas. Primero, una oportunidad o familia de oportunidades con explicación breve de por qué merece seguimiento. Segundo, una alerta operativa o de riesgo que funcione como contrapeso para no leer la oportunidad con entusiasmo ciego. Tercero, una referencia a contenido largo del sitio, de modo que el usuario pueda profundizar criterio y no quedarse en el titular. Cuarto, una nota de contexto comercial vinculada a calendario, logística, fiscalidad o cambios de entorno. Este equilibrio busca evitar que la suscripción se vuelva una promesa vacía de “productos ganadores” y convertirla, en cambio, en una herramienta de lectura comercial periódica.`
      },
      {
        heading: "Frecuencia, tono y expectativas",
        body: `La periodicidad prevista es semanal porque permite madurar criterio sin saturar. Una frecuencia diaria sería ruidosa para la mayoría de los usuarios y fomentaría una ansiedad poco saludable. Una frecuencia demasiado espaciada perdería utilidad práctica. El tono, por su parte, se definirá por tres reglas: sobriedad, trazabilidad y utilidad. Sobriedad para no convertir cada alerta en épica comercial. Trazabilidad para explicar siempre por qué una señal merece atención. Utilidad para que el lector pueda salir del mail con algo accionable, aunque sea simplemente descartar una idea que no cierra. Estas expectativas se fijan desde ahora para que la suscripción no nazca como una promesa abstracta, sino como una pieza coherente del producto.`
      },
      {
        heading: "Qué falta para volverla operativa",
        body: `En términos técnicos, todavía falta cerrar la infraestructura de alta, confirmación, baja, almacenamiento seguro y segmentación mínima de interés. También falta decidir cómo se presentará el histórico de envíos y qué tipo de categorías o perfiles se priorizarán en la curaduría inicial. En lugar de esconder estas tareas detrás de un formulario improvisado, preferimos explicarlas. Esa transparencia sirve para dos cosas: protege la confianza del usuario y evita capturar datos personales antes de tener listo un proceso consistente. El sitio sí deja preparada la intención, el lenguaje y el estándar editorial; la activación operativa vendrá cuando la base esté correctamente resuelta.`
      },
      {
        heading: "Qué valor puede tener esta suscripción bien hecha",
        body: `Si se ejecuta bien, la suscripción puede convertirse en una de las piezas más valiosas del ecosistema DAS LATAM CEA. No porque reemplace al análisis profundo, sino porque puede ordenar la atención del usuario y acercarlo cada semana a preguntas relevantes. Una suscripción de este tipo no necesita adivinar el futuro ni prometer hallazgos milagrosos. Le alcanza con seleccionar bien, contextualizar con criterio y sostener una relación editorial madura. Ese es el estándar que queremos fijar antes de habilitar el formulario. Preferimos tardar un poco más y construir algo útil que abrir una lista prematura con escaso valor real.`
      }
    ],
  },
  privacidad: {
    kicker: "Privacidad",
    title: "Cómo entendemos el tratamiento responsable de la información dentro del sitio.",
    subtitle:
      "Esta política describe criterios generales para la etapa actual del proyecto y anticipa el marco con el que se manejarán los datos cuando se habiliten formularios y suscripciones operativas.",
    sections: [
      {
        heading: "Principio general de minimización",
        body: `La lógica de privacidad del proyecto parte de un criterio simple: recolectar lo mínimo necesario y sólo cuando exista una finalidad clara y explícita. En esta etapa editorial, el sitio privilegia el acceso a contenido público y evita diseñar experiencias que requieran capturar datos personales sin una necesidad operativa real. Esta decisión no es sólo técnica; también es una postura de producto. Pedir información antes de tiempo suele ser una mala práctica cuando todavía no está maduro el flujo que va a gestionarla. Por eso la página de suscripción y la de contacto explican primero el estándar de uso, la intención del canal y el estado del desarrollo antes de solicitar datos. Esa secuencia reduce fricción, baja riesgo y mejora la relación de confianza con el usuario.`
      },
      {
        heading: "Uso de información que el usuario decida compartir",
        body: `Cuando se habiliten formularios, la información proporcionada por el usuario se utilizará exclusivamente para la finalidad comunicada en el momento de la captura. Si el usuario deja un correo para recibir oportunidades semanales, esa información deberá usarse para ese circuito y para comunicaciones vinculadas al mismo marco editorial, con mecanismos de baja claros. Si la información se comparte en el contexto de una consulta o contacto, deberá aplicarse a responder o gestionar ese intercambio. El proyecto no se plantea recolectar datos para fines difusos ni construir una base indiscriminada sin justificación. Este criterio será sostenido tanto en el diseño de formularios como en las herramientas de administración posteriores.`
      },
      {
        heading: "Servicios de terceros y seguridad razonable",
        body: `A medida que el sitio incorpore servicios de correo, analítica, publicidad o automatización, la política de privacidad deberá reflejar con claridad qué proveedores intervienen y con qué rol. La intención es trabajar con proveedores reconocibles y con configuraciones acordes a la finalidad del sitio, evitando integraciones innecesarias o excesivamente invasivas. Ningún sistema es invulnerable, pero eso no exonera de aplicar medidas razonables de seguridad, control de accesos y segmentación de credenciales. Esta política no promete invulnerabilidad absoluta; promete, en cambio, una actitud prudente frente a la información, con revisión de flujos y limitación del acceso a datos cuando sea necesario.`
      },
      {
        heading: "Derechos del usuario y control sobre sus datos",
        body: `El enfoque del proyecto reconoce que el usuario debe poder comprender qué datos se solicitan, para qué se solicitan y cómo dejar de participar en un circuito si así lo desea. Cuando la suscripción esté activa, el alta y la baja deberán ser claras y no escondidas. Cuando exista un formulario operativo de contacto, deberá resultar evidente qué uso tendrá esa información y por cuánto tiempo razonable se conservará. El objetivo es que la relación con el usuario no dependa de ambigüedades ni de prácticas oscuras. Una política de privacidad útil no es un texto decorativo; es una traducción visible de decisiones de diseño y de gobernanza del dato.`
      },
      {
        heading: "Actualización de esta política",
        body: `Dado que el proyecto está en construcción por fases, esta política puede actualizarse a medida que se habiliten nuevas funciones, integraciones o circuitos de comunicación. Cada cambio relevante debería acompañarse con una revisión del texto para que la descripción siga siendo fiel a la práctica. La intención es que esta página evolucione de manera paralela al producto y no quede congelada como una pieza genérica tomada de otro sitio. Ese compromiso con la actualización es especialmente importante en un proyecto que busca construir confianza a largo plazo y que, por lo tanto, necesita que sus documentos legales acompañen el crecimiento real de la plataforma.`
      }
    ],
  },
  terminos: {
    kicker: "Términos y condiciones",
    title: "Marco general de uso del sitio y alcance del contenido publicado.",
    subtitle:
      "Estos términos buscan aclarar qué puede esperar el usuario del sitio, qué límites tiene la información publicada y bajo qué criterio se organiza la relación con el proyecto.",
    sections: [
      {
        heading: "Objeto del sitio",
        body: `DAS LATAM CEA se presenta como un sitio de información, metodología y, en etapas posteriores, herramientas de apoyo para la toma de decisiones en comercio electrónico en Argentina. El objetivo del sitio es ofrecer contenido original, criterios de análisis, guías prácticas y, más adelante, módulos que ayuden a ordenar señales comerciales. El uso del sitio implica aceptar que su función principal es informativa y orientativa. En ninguna circunstancia debe interpretarse el contenido como una garantía de resultados comerciales, una invitación automática a invertir ni una sustitución de la evaluación individual que corresponde a cada usuario. Este punto es central para mantener una relación clara entre el valor editorial del proyecto y la responsabilidad final de quien decide operar.`
      },
      {
        heading: "Alcance y límites del contenido",
        body: `El contenido publicado se elabora con criterio profesional y con intención de utilidad práctica, pero no reemplaza asesoramiento legal, contable, impositivo, aduanero ni financiero. Las guías, notas, metodologías y futuras herramientas del sitio deben leerse como material de apoyo para ordenar variables y mejorar preguntas, no como instrucciones definitivas aplicables sin contexto. Cada operación comercial tiene condiciones específicas de escala, proveedor, logística, fiscalidad y riesgo que exigen validación propia. El usuario acepta que cualquier decisión tomada a partir del contenido del sitio seguirá siendo de su exclusiva responsabilidad. Esta limitación no pretende quitar valor al proyecto; busca preservar un uso maduro y adecuado de la información ofrecida.`
      },
      {
        heading: "Conducta esperada del usuario",
        body: `El uso del sitio debe realizarse de buena fe y conforme a la finalidad para la que fue concebido. No está permitido utilizar el contenido, formularios o eventuales herramientas del sitio para fines ilegítimos, para interferir con el funcionamiento técnico, para intentar acceder a áreas restringidas sin autorización o para reutilizar material de forma engañosa atribuyéndolo a terceros. Asimismo, cuando el proyecto habilite funciones de suscripción, contacto o interacción, se espera que el usuario proporcione información veraz y actúe de manera respetuosa. La claridad de esta regla es importante porque un producto editorial y analítico necesita preservar un entorno de uso coherente con su propósito.`
      },
      {
        heading: "Propiedad intelectual y reutilización",
        body: `Salvo indicación en contrario, los textos, estructuras, compilaciones y elementos distintivos del sitio forman parte del proyecto DAS LATAM CEA y no deben reproducirse íntegramente con fines comerciales o engañosos sin autorización. La existencia de contenido abierto y accesible no convierte ese material en libre de restricciones. Sí puede haber referencias, citas breves o uso razonable con atribución adecuada cuando la finalidad lo justifique. El criterio general es proteger el trabajo editorial y la construcción metodológica del sitio sin impedir una circulación legítima que respete origen, integridad y contexto. Cualquier uso intensivo, automatizado o comercial del contenido debería contar con autorización previa.`
      },
      {
        heading: "Cambios, disponibilidad y evolución del servicio",
        body: `El sitio puede modificar, ampliar, reducir o reorganizar su contenido y sus funcionalidades a medida que el proyecto avance. Algunas secciones podrán encontrarse en desarrollo, en revisión o temporalmente limitadas. La presencia de una sección futura, como Herramientas, no debe interpretarse como garantía de disponibilidad inmediata. Asimismo, la disponibilidad técnica del sitio puede verse afectada por tareas de mantenimiento, despliegues o cambios de arquitectura. El usuario acepta esta naturaleza evolutiva del servicio, propia de un proyecto en crecimiento, y entiende que los términos pueden actualizarse para reflejar de forma fiel el estado real del producto y de su operación.`
      }
    ],
  },
  roadmap: {
    kicker: "Roadmap",
    title: "Qué estamos construyendo primero y qué queda para después.",
    subtitle:
      "El roadmap del proyecto no es una lista de deseos; es una secuencia pensada para sostener credibilidad y utilidad real.",
    ctaLabel: "Ir a herramientas",
    ctaHref: "/herramientas",
    sections: [
      {
        heading: "Fase 1: base editorial y legal",
        body: `La fase actual prioriza contenido sustantivo, navegación clara, páginas institucionales completas y documentos legales consistentes con el estado real del producto. Puede parecer una capa “accesoria”, pero en realidad define la confianza inicial del sitio. Un proyecto que habla de oportunidades comerciales tiene que empezar por explicar bien su enfoque, su metodología y sus límites. Por eso la prioridad incluye home desarrollada, about, cómo funciona, metodología, fuentes, contacto, suscripción, privacidad, términos y guías largas. Esta fase también permite construir autoridad temática y darle al sitio una forma profesional antes de exponer módulos más complejos.`
      },
      {
        heading: "Fase 2: activación controlada de herramientas",
        body: `Una vez consolidada la base editorial, el siguiente paso será reabrir la sección Herramientas con un primer alcance acotado y comprensible. Eso puede incluir una experiencia de análisis inicial, un escáner de oportunidades con criterios visibles y algunos módulos de apoyo para ordenar categorías, lecturas de competencia o señales estacionales. El principio rector seguirá siendo el mismo: cada herramienta deberá explicar qué puede y qué no puede afirmar. Esta fase no buscará impresionar por volumen de features, sino validar que el núcleo del producto ayuda de verdad a tomar mejores decisiones.`
      },
      {
        heading: "Fase 3: suscripción operativa y comunicación periódica",
        body: `Con la infraestructura mínima resuelta, la suscripción pasará de ser una página explicativa a convertirse en un circuito operativo. Eso incluirá alta, confirmación, baja y administración básica de destinatarios, además de una cadencia editorial coherente con el estándar definido en la página correspondiente. El roadmap contempla esta pieza como un puente clave entre contenido y herramientas, porque permite sostener una relación periódica con usuarios interesados en señales comerciales curadas. No será un “extra de marketing”; será parte del producto.`
      },
      {
        heading: "Fase 4: profundización analítica y tracking",
        body: `En una etapa posterior, el proyecto podrá incorporar seguimiento histórico, snapshots, comparativas de categorías, calendarios comerciales más ricos y modelos de evaluación progresivamente más útiles. Pero esa expansión sólo tiene sentido si se apoya en una base de datos sana, una arquitectura de integración consistente y una metodología que ya haya sido expuesta al público. La idea no es sumar complejidad por prestigio, sino desbloquear funciones cuando realmente puedan leerse y mantenerse con seriedad.`
      },
      {
        heading: "Fase 5: consolidación de identidad y producto",
        body: `El objetivo final es que DAS LATAM CEA combine tres cosas que rara vez aparecen juntas: contenido útil de verdad, lectura metodológica clara y herramientas que no exageren lo que saben. Esa convergencia no se logra apurando releases; se logra alineando narrativa, arquitectura y utilidad. Por eso el roadmap es una pieza pública. Sirve para mostrar que el proyecto tiene dirección, pero también para explicitar lo que todavía no está listo. Esa honestidad, lejos de ser una debilidad, es una ventaja competitiva en un espacio saturado de promesas exageradas.`
      }
    ],
  },
  analisis: {
    kicker: "Análisis",
    title: "La sección de análisis se está armando sobre base editorial, no sobre ruido.",
    subtitle:
      "Acá se publicarán lecturas recientes y desarrolladas de categorías, ventanas comerciales y señales de mercado. Por ahora dejamos claro el estándar con el que se trabajará.",
    sections: [
      {
        heading: "Qué entendemos por análisis útil",
        body: `Un análisis útil no repite lo que ya ve cualquier usuario en una plataforma; agrega estructura, contexto y criterio. En esta futura sección no nos interesa publicar listas rápidas de productos supuestamente ganadores sin explicación. Lo que buscamos es documentar lecturas que ayuden a entender por qué una categoría puede estar abriéndose, qué riesgos operativos pueden quedar escondidos detrás de una aparente oportunidad y qué señales conviene seguir antes de moverse. El objetivo es producir piezas que tengan valor incluso para alguien que todavía no vaya a comprar stock mañana mismo, pero que necesite ordenar mejor el mapa de decisiones.`
      },
      {
        heading: "Por qué no publicamos análisis apurados",
        body: `Una sección de análisis apurada suele terminar convertida en un feed de opiniones sueltas. Para evitar eso, preferimos sentar primero la base metodológica y editorial. De ese modo, cada análisis futuro podrá apoyarse en un lenguaje ya conocido por el lector: riesgo logístico, margen defendible, presión competitiva, oportunidad de ventana corta, complejidad de variantes, etcétera. Esa consistencia mejora muchísimo la utilidad de lo publicado. También ayuda a que la audiencia interprete mejor los matices y no lea cada señal como una recomendación binaria de compra o descarte.`
      },
      {
        heading: "Qué formato tendrán los futuros análisis",
        body: `La idea es trabajar con piezas de cierta profundidad, no con publicaciones puramente aspiracionales. Cada análisis debería explicar el punto de partida, las fuentes o señales utilizadas, la hipótesis principal, los factores de riesgo y una conclusión prudente. En algunos casos podrá vincularse a guías ya publicadas; en otros, a futuras herramientas del sitio. Lo importante es que el formato permita dejar trazabilidad y no se convierta en una caja cerrada. Esto es especialmente relevante en un proyecto que quiere ganar autoridad a partir de contenido serio y no de marketing ruidoso.`
      },
      {
        heading: "Qué no va a ser esta sección",
        body: `No queremos que este espacio se convierta en un catálogo de ocurrencias ni en una colección de pseudo-tendencias. Tampoco será una sección diseñada para inflar expectativas con promesas de resultados rápidos. El valor real del análisis aparece cuando ayuda a pensar mejor, no cuando empuja a actuar más rápido sin respaldo. Esa línea editorial estará presente desde el primer artículo que se publique y será uno de los filtros para decidir qué temas merecen una nota y cuáles todavía no tienen suficiente sustancia.`
      },
      {
        heading: "Cómo se conecta con el resto del sitio",
        body: `La sección de análisis va a dialogar con metodología, fuentes, guías y herramientas. No será un bloque aislado. Su papel dentro del producto será demostrar cómo se aplica el marco general del sitio a casos concretos y escenarios reales. De esa manera, el usuario podrá pasar de la teoría editorial a la observación aplicada sin perder continuidad. Esa coherencia entre secciones es una de las bases sobre las que se está ordenando la plataforma.`
      }
    ],
  },
  discovery: {
    kicker: "Discovery",
    title: "Discovery va a ser una sección de exploración asistida, no un generador de ideas sin filtro.",
    subtitle:
      "La noción de descubrir oportunidades tiene valor sólo si está acompañada por criterios de descarte, riesgo y timing.",
    sections: [
      {
        heading: "Qué significa descubrir con criterio",
        body: `En el contexto del proyecto, discovery no significa lanzar palabras al aire hasta que una suene atractiva. Significa explorar nichos, familias de producto o señales de mercado con un marco que ayude a separar curiosidad de oportunidad y novedad de conveniencia. El problema de muchas herramientas de descubrimiento es que tienden a generar entusiasmo antes de generar criterio. Nosotros queremos invertir ese orden. Primero debe quedar claro qué hace interesante una oportunidad y qué variables podrían destruirla. Sólo entonces tiene sentido explorar con amplitud.`
      },
      {
        heading: "La importancia del descarte temprano",
        body: `Una buena sección de discovery no sólo ayuda a encontrar; también ayuda a descartar rápido. Esa capacidad es crucial porque la mayoría de los costos evitables aparecen cuando se insiste demasiado tiempo con una hipótesis que no cierra. El proyecto quiere usar discovery como un mecanismo para abrir escenarios posibles, pero también para mostrar por qué algunas rutas conviene abandonarlas antes. En términos prácticos, eso implica trabajar con filtros cualitativos y operativos, no sólo con señales superficiales de interés.`
      },
      {
        heading: "Vínculo con las guías y la metodología",
        body: `La exploración que tenga sentido dentro del sitio deberá apoyarse en todo lo que ya está explicado en las guías: validación de producto, margen real, fragilidad, importación, fiscalidad y timing. De lo contrario, discovery correría el riesgo de transformarse en una colección de ocurrencias. El diseño futuro de esta sección tomará esos marcos como base obligatoria para que cada recomendación o pista pueda leerse dentro de un sistema más amplio y no de manera aislada.`
      },
      {
        heading: "Qué esperamos del usuario en esta sección",
        body: `El usuario no debería entrar a discovery esperando una respuesta definitiva a qué vender. Debería entrar esperando mejores preguntas, pistas priorizadas y una estructura para profundizar. Esa expectativa es mucho más sana y, además, más útil. Las mejores herramientas no reemplazan el trabajo del operador; le ordenan el campo y reducen errores tontos. Ese será el rol de discovery cuando la sección se active por completo.`
      },
      {
        heading: "Estado actual",
        body: `Por ahora la sección queda en modo editorial y explicativo. Esa decisión evita vender como ya resuelto algo que todavía está en diseño. Mientras tanto, la mejor forma de prepararse para usar discovery en serio es recorrer la metodología y las guías, porque ahí se define exactamente qué se considerará una buena señal y qué obligará a activar una alerta. Ese trabajo previo es el que después vuelve útil cualquier experiencia de exploración.`
      }
    ],
  },
  "categorias-fitness": {
    kicker: "Categorías · Fitness",
    title: "Fitness: una categoría atractiva, pero llena de matices operativos.",
    subtitle:
      "La categoría fitness parece simple desde afuera, aunque mezcla impulso, estacionalidad, sensibilidad al precio y mucha heterogeneidad de producto.",
    sections: [
      {
        heading: "Qué vuelve interesante a fitness",
        body: `Fitness atrae por varias razones válidas: tiene recurrencia aspiracional, convive con compras impulsivas y permite jugar en rangos de precio muy distintos. Además, incluye tanto accesorios de ticket bajo como productos de mayor valor percibido. Sin embargo, esa misma amplitud obliga a segmentar bien el análisis. No es lo mismo evaluar bandas elásticas, botellas, accesorios de yoga, guantes, soportes, organizadores o elementos más voluminosos. El error frecuente es tratar toda la categoría como si compartiera el mismo riesgo, la misma rotación y la misma sensibilidad logística. La página de fitness busca evitar esa simplificación y recordar que el atractivo comercial depende mucho del tipo exacto de producto y del momento en el que se lo intente mover.`
      },
      {
        heading: "Riesgos típicos dentro de la categoría",
        body: `Uno de los riesgos más comunes es dejarse seducir por productos que se ven bien en foto pero son mediocres en experiencia real. En fitness, la calidad percibida se relaciona mucho con resistencia, terminación, ergonomía y sensación de uso. Eso vuelve peligrosa cualquier compra sin muestra o sin validación previa. También aparecen problemas de saturación en ciertos accesorios muy estandarizados, donde competir sólo por precio rápidamente erosiona margen. Otro punto crítico es la variante: talles, resistencias, colores o formatos mal gestionados pueden complicar inventario y atención al cliente. La categoría puede funcionar muy bien, pero castiga la improvisación más de lo que parece.`
      },
      {
        heading: "Cómo leer demanda y timing",
        body: `La demanda en fitness no responde únicamente a enero o al clásico impulso de comienzo de año. Hay micro ventanas asociadas a hábitos, clima, calendario escolar, vacaciones y ciclos de entrenamiento. También existe una parte de la demanda que se sostiene por compras regalo o por decisiones de bienestar personal no estrictamente deportivas. Por eso conviene evitar la lectura lineal. Un producto puede tener mejor desempeño en momentos menos obvios si resuelve comodidad, portabilidad o uso en casa. En esta categoría, el timing se entiende mejor cuando se observa el contexto de uso y no sólo la palabra “fitness” como bloque uniforme.`
      },
      {
        heading: "Qué productos suelen ser más nobles",
        body: `En general, tienden a ser más nobles aquellos productos fáciles de explicar, de empaque sencillo, de baja tasa de falla y con una relación precio-utilidad que el usuario entienda rápido. También ayuda que tengan reposición razonable y una experiencia de uso consistente. En cambio, los productos que dependen de percepción técnica fina, alta durabilidad o tolerancia cero al defecto exigen un trabajo mucho más riguroso con proveedor y postventa. La categoría permite buenas oportunidades, pero premia el sentido práctico: vender lo que puede sostenerse bien suele ser más rentable que perseguir el producto más vistoso.`
      },
      {
        heading: "Cómo usar esta categoría dentro del sitio",
        body: `La recomendación es tomar fitness como una categoría paraguas y después bajar a subfamilias concretas usando las guías del sitio. Validación, margen, fragilidad y timing siguen siendo determinantes. Si el usuario cruza esta página con esos materiales, tendrá una forma bastante más sólida de evaluar ideas. Ese es el propósito de la sección: convertir una categoría atractiva, pero ambigua, en un campo de análisis más claro y operable.`
      }
    ],
  },
  "categorias-hogar": {
    kicker: "Categorías · Hogar",
    title: "Hogar: una categoría amplia donde la utilidad cotidiana pesa más que la moda.",
    subtitle:
      "Hogar suele ofrecer volumen y diversidad, pero también es una de las categorías donde el costo logístico y la fragilidad pueden cambiar toda la ecuación.",
    sections: [
      {
        heading: "Por qué hogar seduce a tantos vendedores",
        body: `La categoría hogar resulta atractiva porque toca necesidades frecuentes, compra reposición y momentos de mejora cotidiana. Además, admite productos funcionales, decorativos, organizacionales y estacionales. Esa amplitud abre muchas puertas, pero también obliga a no mirar la categoría como un bloque homogéneo. Un organizador de cajón, una lámpara decorativa, un accesorio de cocina, una manta y un objeto de guardado viven lógicas de venta completamente distintas. Por eso la evaluación tiene que segmentar con criterio y no quedarse sólo con la intuición de que “hogar siempre vende”.` 
      },
      {
        heading: "La logística manda más de lo que parece",
        body: `Dentro de hogar, la logística tiene un poder enorme sobre el margen. El volumen cúbico, la fragilidad, el empaquetado y el riesgo de devolución pueden convertir una buena idea visual en una operación mediocre. Muchos productos del hogar generan interés en pantalla, pero se vuelven problemáticos cuando hay que manipularlos, almacenarlos o enviarlos. El sitio insiste bastante sobre este punto porque es una fuente clásica de errores de cálculo. En esta categoría, el costo de mover el producto y de sostener su calidad hasta la entrega final puede ser tan importante como el precio de compra.`
      },
      {
        heading: "Qué tipos de producto suelen ser más razonables",
        body: `Tienden a ser más razonables los productos que resuelven una necesidad clara, se entienden rápido, tienen baja tasa de falla y una presentación consistente. En muchos casos, los artículos pequeños de organización, orden o utilidad diaria ofrecen un mejor equilibrio entre claridad de propuesta y complejidad operativa. En cambio, los productos frágiles, demasiado aspiracionales o que dependen mucho del gusto personal pueden exigir más inversión en contenido, atención y devoluciones. El punto no es descartar la inspiración o la decoración, sino reconocer que no todas las familias del hogar se operan con el mismo esfuerzo.`
      },
      {
        heading: "Lectura de demanda y comportamiento de compra",
        body: `La demanda de hogar puede ser relativamente estable, pero está muy atravesada por contextos de gasto, renovación de ambientes, mudanzas, fechas comerciales y estado general del consumo. Eso significa que incluso productos funcionales pueden tener variaciones relevantes en su velocidad de salida. Además, el comprador de hogar muchas veces compara bastante y puede ser sensible a terminaciones, fotos, materiales o medidas exactas. Esa combinación vuelve importante trabajar precisión descriptiva y evitar supuestos vagos. Una categoría amplia no perdona descripciones débiles.`
      },
      {
        heading: "Cómo aprovechar mejor esta categoría",
        body: `La mejor forma de trabajar hogar dentro del sitio es cruzar la intuición creativa con disciplina operativa. Si una idea parece buena, hay que pasarla por el filtro de validación, por el cálculo de margen real y por la guía de peso y fragilidad. Esa triangulación evita que el atractivo visual domine el análisis. La categoría hogar ofrece oportunidades valiosas, pero su mejor versión aparece cuando se entiende que vender “para el hogar” no es un concepto; es una suma de decisiones logísticas, de posicionamiento y de claridad de uso.`
      }
    ],
  },
  "categorias-mascotas": {
    kicker: "Categorías · Mascotas",
    title: "Mascotas: emocional, repetitiva y exigente al mismo tiempo.",
    subtitle:
      "La categoría mascotas combina compra afectiva, hábito, reposición y sensibilidad fuerte a la experiencia de uso o consumo.",
    sections: [
      {
        heading: "Una categoría donde la motivación de compra es especial",
        body: `Mascotas es una categoría interesante porque mezcla afecto, necesidad cotidiana y disposición relativamente alta a probar soluciones que mejoren la experiencia del animal o de su cuidador. Esa combinación le da profundidad comercial, pero también eleva la exigencia. Cuando la compra está mediada por una relación afectiva, la tolerancia al producto mediocre puede ser menor. Esto obliga a mirar con más detalle calidad, seguridad, claridad de uso y coherencia entre promesa y resultado. No basta con que un ítem “se vea lindo”; tiene que funcionar bien dentro de un universo donde la confianza del comprador es muy sensible.`
      },
      {
        heading: "Dónde suelen aparecer buenos puntos de entrada",
        body: `Los mejores puntos de entrada suelen encontrarse en productos de uso claro, baja complejidad técnica, buena frecuencia de consumo o resolución práctica para la rutina. Accesorios de paseo, descanso, organización o higiene pueden ofrecer oportunidades razonables si se eligen con criterio. También existe espacio para productos aspiracionales, pero ahí el margen puede convivir con más exigencia de contenido y más comparación. La clave está en no confundir interés emocional con facilidad operativa. Una categoría querida por el público puede ser muy noble o muy ingrata según el subsegmento elegido.`
      },
      {
        heading: "Riesgos específicos",
        body: `En mascotas aparecen riesgos particulares: problemas de seguridad, uso inadecuado, materiales de baja calidad, talles o medidas mal informadas y expectativas emocionales altas. Cualquier fallo en esos puntos puede generar reclamos difíciles de gestionar. Por eso esta categoría obliga a ser más conservador con proveedores dudosos y más preciso con descripciones y fotos. También invita a pensar mejor si el producto requiere instrucciones, advertencias o segmentación por tamaño, tipo de mascota o etapa de uso. El análisis de mascotas tiene que ser más cuidadoso de lo que aparenta una foto simpática.`
      },
      {
        heading: "Cómo leer recurrencia y valor",
        body: `No todos los productos de mascotas tienen la misma lógica de recurrencia. Algunos se compran una vez, otros se reponen, otros son complementos de productos principales y otros sirven como regalos. Entender esa diferencia es fundamental para construir una operación sana. La categoría puede sostener buen ticket y repetición, pero también puede dispersar mucho la atención si se mezcla sin criterio un catálogo demasiado amplio. Una curaduría más fina suele rendir mejor que intentar vender “de todo para mascotas”.`
      },
      {
        heading: "Qué hacer con esta categoría en el sitio",
        body: `La recomendación es usar esta página como mapa inicial y luego profundizar con las guías más operativas del sitio. Mascotas recompensa la observación cuidadosa: calidad, claridad, medidas, materiales y experiencia real de uso. Si el usuario internaliza esos puntos antes de pensar sólo en demanda aparente, ya habrá dado un paso importante. Esa es la función principal de esta categoría dentro del proyecto.`
      }
    ],
  },
  "categorias-belleza": {
    kicker: "Categorías · Belleza",
    title: "Belleza: alto atractivo comercial, pero también alto riesgo de interpretación simplista.",
    subtitle:
      "Belleza puede ofrecer rotación, ticket interesante y recompra, aunque exige especial cuidado en regulación, percepción y promesa.",
    sections: [
      {
        heading: "Por qué belleza atrae tanto",
        body: `Belleza es una categoría naturalmente seductora para el comercio electrónico porque reúne hábito, aspiración, identidad y disposición a probar. Además, muchos productos parecen fáciles de comunicar en foto y admiten fuerte trabajo de posicionamiento. Sin embargo, ese atractivo inicial también es una trampa. La categoría está muy atravesada por confianza, expectativas de resultado, sensibilidad del usuario y, en algunos casos, regulación específica. Eso obliga a no evaluarla con la misma liviandad que un accesorio simple. Una mala lectura en belleza puede generar más problemas reputacionales que en otras categorías menos sensibles.`
      },
      {
        heading: "Diferencia entre accesorio y producto sensible",
        body: `Dentro de belleza no todo pertenece al mismo nivel de complejidad. Hay accesorios, organizadores y herramientas de baja sensibilidad que pueden evaluarse con criterios operativos relativamente estándar. Pero también existen productos que tocan directamente cuerpo, piel, rutina personal o expectativas de transformación, y allí la exigencia sube mucho. Esa distinción es clave porque muchas veces la categoría se analiza en bloque y se pierde de vista qué familias son razonables para un operador que recién empieza y cuáles exigen estructura, respaldo o compliance adicional.`
      },
      {
        heading: "Lo que más se suele subestimar",
        body: `En belleza se subestiman mucho la confianza, la consistencia del proveedor, la claridad del mensaje y el riesgo de prometer más de lo que se puede sostener. Un producto atractivo en tendencia puede chocar rápido con reclamos si la experiencia real no coincide con la expectativa generada. También pesa bastante la calidad del contenido: fotos, instrucciones, ingredientes o materiales, y compatibilidad de uso. Esta categoría castiga especialmente el marketing vacío porque el usuario suele tener referencias, preferencias y sensibilidad propia.`
      },
      {
        heading: "Dónde puede haber buenos espacios",
        body: `Los espacios más nobles suelen aparecer en productos claros, de promesa limitada, buena presentación y bajo riesgo técnico. También pueden surgir oportunidades en accesorios complementarios, organización o elementos de rutina que no impliquen una promesa transformacional. La categoría no debe descartarse; debe segmentarse con inteligencia. Cuando se hace eso, belleza puede aportar valor comercial interesante. Cuando no se hace, el entusiasmo inicial puede esconder una carga operativa grande.`
      },
      {
        heading: "Cómo conviene usar esta sección",
        body: `La función de esta página es invitar a una lectura más prudente y más profesional de la categoría. Belleza no es sólo una oportunidad de venta; es un terreno donde la percepción, la confianza y la claridad pesan mucho. Si el usuario toma esta idea y la cruza con margen, validación y riesgo operativo, ya estará mejor posicionado para decidir. Ese es el aporte concreto de la categoría dentro del sitio.`
      }
    ],
  },
  "guias-validar-producto": {
    kicker: "Guía",
    title: "Cómo validar un producto antes de comprometer tiempo, capital y stock.",
    subtitle:
      "Validar no significa adivinar el éxito; significa reducir errores evitables antes de entrar en una operación más costosa.",
    sections: [
      {
        heading: "Empezar por la propuesta de valor real",
        body: `La validación de producto debería comenzar siempre por una pregunta elemental: qué problema resuelve y con qué claridad lo hace. Muchos errores nacen de enamorarse de la idea sin verificar si el valor se entiende rápido para un comprador común. Un producto puede ser ingenioso, estético o novedoso y aun así ser comercialmente débil si exige demasiada explicación, si su beneficio es ambiguo o si depende de una demostración compleja para generar interés. El primer filtro, entonces, no es tecnológico ni financiero: es conceptual. Si la propuesta de valor no se puede explicar con nitidez, la validación ya empieza cuesta arriba. Esta etapa obliga a bajar entusiasmo y observar si el producto se defiende por utilidad, conveniencia, repetición o atractivo suficientemente claro.`
      },
      {
        heading: "Evaluar operación antes de evaluar demanda",
        body: `Es habitual que el emprendedor mire primero si “se vende” y recién después piense en operación. Esa secuencia suele ser cara. Antes de entusiasmarse con la demanda aparente, conviene revisar peso, fragilidad, variantes, necesidad de instalación, tasa probable de consultas, complejidad de atención y riesgo de reclamos. Un producto con interés visible puede ser una mala apuesta si exige demasiada estructura para operarlo bien. La validación seria invierte parcialmente el foco: pregunta si el producto es defendible desde la operatoria básica antes de enamorarse de sus señales comerciales. Esto no elimina la importancia de la demanda, pero evita que el análisis se vuelva miope.`
      },
      {
        heading: "Validar con muestras, feedback y escenarios",
        body: `Siempre que sea posible, conviene validar con una muestra real o con al menos una revisión tangible del producto. Ver, tocar, probar y comparar cambia mucho la calidad del juicio. Además de la muestra, sirven conversaciones puntuales con usuarios potenciales o con personas que ya venden dentro de la categoría. Lo importante es no buscar únicamente confirmación, sino identificar objeciones, dudas, fricciones y percepciones de calidad. También ayuda imaginar escenarios concretos: qué pasa si llega golpeado, si la foto engaña un poco, si el empaque decepciona o si el producto exige más explicación de la prevista. La validación mejora cuando incorpora estos escenarios incómodos en vez de evitarlos.`
      },
      {
        heading: "No confundir interés con oportunidad sostenible",
        body: `Un producto puede llamar la atención y aun así ser una mala oportunidad. Esta diferencia es central. El interés puede surgir por novedad, por impulso o por una moda puntual, pero la oportunidad sostenible requiere algo más: una operación defendible, una propuesta clara, un margen razonable y un nivel de riesgo asumible. Validar bien implica preguntarse no sólo si alguien haría clic o compraría una unidad, sino si el negocio soporta repetición, reposición y una escala mínima sin degradarse. Muchas decisiones fallidas vienen de confundir tracción inicial con negocio viable. La validación de producto debe ser el antídoto contra ese sesgo.`
      },
      {
        heading: "Qué deja como resultado una buena validación",
        body: `Una buena validación no entrega una garantía de éxito. Entrega algo más útil: una hipótesis mejor formada y un mapa más claro de riesgos, fortalezas y dudas. Después de validar, el operador debería poder explicar por qué el producto podría funcionar, qué lo hace frágil, qué debería probar en pequeño y qué señales lo obligarían a frenar. Ese resultado ya es valioso porque reduce improvisación y mejora la calidad de las decisiones siguientes. En definitiva, validar bien es diseñar una entrada más inteligente al negocio, no fabricar una sensación artificial de certeza.`
      }
    ],
  },
  "guias-margen-real": {
    kicker: "Guía",
    title: "Cómo calcular margen real y dejar de engañarse con números superficiales.",
    subtitle:
      "El margen útil no es el que queda lindo en una celda; es el que sobrevive a comisiones, reprocesos, descuentos, costos ocultos y tiempo de operación.",
    sections: [
      {
        heading: "Precio de compra no es costo total",
        body: `El error más repetido al calcular margen es tratar el precio de compra como si fuera el costo completo del producto. En la práctica, el costo total incluye mucho más: traslado, empaquetado, comisiones de plataforma, medios de pago, mermas, piezas defectuosas, descuentos, devoluciones, reposición de stock y, en algunos casos, costo financiero. Ignorar cualquiera de estas capas puede inflar artificialmente el margen y empujar decisiones equivocadas. El primer principio de esta guía es simple: si un costo aparece con cierta regularidad en la operación, debe entrar en la cuenta. El margen real no se calcula para verse bonito; se calcula para saber si la operación resiste.`
      },
      {
        heading: "La importancia del costo operativo por unidad",
        body: `Además del costo directo de adquisición, existe un costo operativo por unidad que muchas veces queda diluido porque no se lo asigna correctamente. Preparar pedidos, resolver consultas, responder reclamos, rehacer publicaciones, reprocesar devoluciones o sostener un catálogo más complejo consume tiempo y recursos. Si el producto exige más de eso, su margen real es menor, aunque el diferencial entre compra y venta parezca atractivo. Esta guía propone que el operador deje de separar artificialmente “negocio” y “operación”. En e-commerce, ambas cosas están totalmente unidas. Un producto con margen bruto alto puede ser pésimo si su fricción operativa es excesiva.`
      },
      {
        heading: "Devoluciones, fallas y descuentos como parte del negocio",
        body: `Hay costos que duelen tanto que el vendedor prefiere no mirarlos. Las devoluciones, los cambios, las fallas de calidad y los descuentos de urgencia suelen entrar en esa categoría. Sin embargo, forman parte del negocio y deben estar presentes en el cálculo, al menos como una hipótesis conservadora. En algunos rubros, una mínima tasa de problemas ya alcanza para erosionar seriamente el resultado. Si el operador no incorpora esa posibilidad, queda expuesto a interpretar como rentable un producto que sólo funciona en el mejor escenario. El margen real se construye con escenarios razonables, no con fantasías de operación perfecta.`
      },
      {
        heading: "Margen defendible y flujo de caja",
        body: `No todo margen es defendible en el tiempo. Un producto puede dejar dinero en la primera venta y aun así ser débil si exige mucha inmovilización de stock, si rota lento o si obliga a financiar reposiciones complicadas. Por eso el margen debe leerse junto con el flujo de caja. Esta combinación es especialmente importante en Argentina, donde las condiciones macro pueden volver mucho más costoso equivocarse en inventario o en timing. La guía propone mirar el margen como una variable inseparable de la velocidad, la reposición y la facilidad de sostener la operación. Ganar por unidad no siempre significa tener un negocio sano.`
      },
      {
        heading: "Qué debería quedar después de hacer esta cuenta bien",
        body: `Al terminar un cálculo de margen serio, el vendedor debería poder responder preguntas bastante concretas: cuál es el piso por debajo del cual no conviene vender, cuánto tolera en descuentos, qué parte del negocio se come más rentabilidad y qué factores pueden destruir el resultado si se descontrolan. Esa claridad es mucho más útil que un porcentaje aislado. El margen real no es sólo una cifra; es una herramienta de disciplina comercial. Cuando se lo calcula con honestidad, ayuda a seleccionar mejor productos, proveedores y prioridades.`
      }
    ],
  },
  "guias-importar-desde-china": {
    kicker: "Guía",
    title: "Importar desde China con criterio comercial, no sólo con entusiasmo por el costo FOB.",
    subtitle:
      "Importar puede ser una ventaja, pero sólo si se trabaja con especificaciones, muestras, tiempos y costos completos bien entendidos.",
    sections: [
      {
        heading: "El precio FOB es apenas el inicio",
        body: `Uno de los errores más frecuentes al pensar una importación desde China es enamorarse del precio FOB como si resumiera toda la ecuación. El costo del producto en origen importa, por supuesto, pero está lejos de ser la única variable. Muestras, tiempos, inspección, calidad, embalaje, despacho, transporte, demoras y riesgo de desvío pueden modificar de forma muy importante la conveniencia real. Por eso esta guía propone leer el FOB como una entrada al análisis y no como la conclusión. Si el operador confunde precio de origen con costo final defendible, la importación puede parecer brillante en papel y mediocre en la práctica.`
      },
      {
        heading: "Especificaciones claras antes de negociar",
        body: `Negociar sin especificación clara suele salir mal. Muchos problemas de calidad, terminación o desempeño aparecen porque el comprador no aterrizó con suficiente precisión qué esperaba recibir. Medidas, materiales, colores, tolerancias, empaques, branding y criterios mínimos de calidad deben definirse antes o, como mínimo, al mismo tiempo que se explora la viabilidad comercial. Cuanto más ambiguo sea el requerimiento, mayor será la probabilidad de desalineación entre expectativa y realidad. Esta etapa exige paciencia, comparación y lenguaje concreto. Importar bien no es sólo encontrar proveedor; es aprender a pedir correctamente.`
      },
      {
        heading: "La muestra no es opcional cuando el riesgo es alto",
        body: `Siempre que la familia de producto lo justifique, trabajar con muestra real es una de las decisiones más inteligentes del proceso. La muestra permite evaluar calidad percibida, terminación, empaque, instrucciones, materiales y coherencia general con la promesa comercial. También ayuda a detectar fallas tempranas en categorías donde una ficha técnica incompleta puede esconder diferencias importantes. Hay operadores que intentan ahorrar la etapa de muestra por ansiedad o por querer acelerar el lanzamiento, pero muchas veces ese ahorro aparente se convierte en costo mucho mayor después. La muestra no garantiza éxito; reduce ceguera.`
      },
      {
        heading: "MOQ, rotación y capital inmovilizado",
        body: `El MOQ no debe leerse como una cifra aislada, sino en relación con la capacidad de prueba, la velocidad esperada de salida y el capital disponible. Una orden mínima razonable para un importador con espalda puede ser excesiva para un operador que recién está validando la categoría. Este punto es especialmente sensible cuando el producto tiene variantes, es frágil o depende de una moda. La importación desde China puede mejorar muchísimo el negocio, pero también puede inmovilizar recursos si se fuerza una escala prematura. El buen criterio comercial consiste en mirar cantidad mínima, riesgo y salida potencial como parte de una misma decisión.`
      },
      {
        heading: "Cómo decidir si vale la pena seguir avanzando",
        body: `Después de revisar FOB, especificaciones, muestra, MOQ, riesgo logístico y posible salida comercial, el operador debería quedar en condiciones de tomar una decisión más seria. Seguir avanzando tiene sentido cuando la oportunidad combina una propuesta clara, una mejora económica defendible, una operatoria manejable y un proveedor con el que se puede trabajar de forma suficientemente precisa. Si una de esas patas falla, conviene recalibrar o incluso frenar. Importar bien no es avanzar por inercia; es aceptar sólo los escenarios que sobreviven a una revisión completa y prudente.`
      }
    ],
  },
  "guias-importacion-courier": {
    kicker: "Guía",
    title: "Importación por courier: cuándo sirve como herramienta de testeo y cuándo deja de ser la vía correcta.",
    subtitle:
      "Courier puede ser útil para probar o resolver pequeños volúmenes, pero no debe idealizarse como solución universal.",
    sections: [
      {
        heading: "Lo que el courier sí resuelve bien",
        body: `La importación por courier puede ser muy útil cuando el objetivo es testear, traer muestras, validar calidad o resolver volúmenes reducidos con velocidad relativa y menor complejidad inicial. En ese tipo de escenario, la herramienta ayuda a bajar barreras de entrada y a obtener aprendizaje real sin comprometer una operación más grande desde el comienzo. Esa es su principal virtud: permite comprar información y experiencia en pequeño. Para muchos operadores, esa etapa vale más que perseguir desde el día uno una estructura más pesada. Sin embargo, entender bien este valor implica no pedirle al courier lo que no está pensado para resolver.`
      },
      {
        heading: "Dónde empiezan las malas interpretaciones",
        body: `El problema aparece cuando se intenta usar courier como si fuera la mejor vía para cualquier escala, cualquier familia de producto o cualquier necesidad comercial. Ahí surgen errores de cálculo, frustraciones con costos totales y una sensación de sorpresa que en realidad podría haberse anticipado. Productos voluminosos, pesados, frágiles o de rotación intensa pueden volver la ecuación menos conveniente de lo que parecía en la teoría. También puede ocurrir que el operador confunda rapidez aparente con sustentabilidad operativa. La guía insiste en esto porque courier suele verse como “simple”, y esa simplificación puede tapar preguntas relevantes.`
      },
      {
        heading: "Courier como etapa de validación",
        body: `Usado con inteligencia, courier funciona muy bien como etapa de validación. Permite evaluar si el producto llega en condiciones, cómo luce realmente, qué sensación transmite, qué tan vendible parece y qué ajustes hacen falta antes de pensar una escala mayor. Esa función experimental es valiosísima porque transforma hipótesis en observación concreta. También puede servir para comparar proveedores o para verificar consistencia de fabricación. En otras palabras, courier puede ayudar a comprar aprendizaje. Ese aprendizaje, si se usa bien, mejora decisiones posteriores y reduce errores de importación más costosos.`
      },
      {
        heading: "Cómo leer costos y conveniencia",
        body: `La conveniencia del courier no se decide mirando un único número. Hay que observar costo total, tiempo, volumen, fragilidad, urgencia, escalabilidad y objetivo de la operación. Si el fin principal es probar, la vara es una. Si el fin principal es sostener ventas recurrentes, la vara cambia. En este punto, la honestidad con uno mismo es fundamental. Muchos operadores fuerzan el courier porque les permite “empezar”, pero lo hacen sin aceptar que el modelo puede dejar de cerrar apenas aparece una demanda un poco más seria. Evaluar bien significa preguntarse para qué problema concreto se está usando esta vía.`
      },
      {
        heading: "Regla práctica para decidir",
        body: `Una regla útil es la siguiente: si courier mejora la calidad de tu decisión futura, probablemente esté cumpliendo bien su papel. Si lo estás usando para evitar pensar la estructura correcta de una operación más grande, probablemente te esté sirviendo mal. Esa distinción ayuda mucho. La importación por courier no es buena o mala en abstracto; es adecuada o inadecuada según la etapa, el producto y el objetivo. Entender eso ya evita una gran cantidad de errores comunes.`
      }
    ],
  },
  "guias-monotributo-mercado-libre": {
    kicker: "Guía",
    title: "Monotributo y Mercado Libre: orden fiscal mínimo para no improvisar la base del negocio.",
    subtitle:
      "Esta guía no reemplaza asesoramiento contable. Su objetivo es ayudar a ordenar preguntas y a reconocer por qué la parte fiscal no debe quedar para más adelante.",
    sections: [
      {
        heading: "Por qué este tema aparece tan temprano",
        body: `Muchos vendedores postergan el frente fiscal porque prefieren concentrarse primero en producto, publicación y ventas. El problema es que esa demora suele incubar decisiones débiles desde el origen. Pensar monotributo y operación en plataformas no es un formalismo molesto; es parte de la arquitectura básica del negocio. Condiciona facturación, proyección, orden administrativo y, sobre todo, la forma de crecer sin improvisar. Esta guía no ofrece consejo contable personalizado ni reemplaza una consulta profesional. Lo que sí hace es insistir en algo clave: cuanto antes se ordene esta dimensión, mejor calidad tendrá el resto de las decisiones comerciales.`
      },
      {
        heading: "La relación entre fiscalidad y estrategia comercial",
        body: `El encuadre fiscal no debería leerse sólo como una obligación externa. También afecta estrategia. Impacta en cómo se proyecta volumen, en qué ritmo conviene escalar, en cuánto margen hace falta conservar y en qué grado de formalización puede sostenerse una operación. Cuando se ignora esta relación, aparecen decisiones comerciales que parecen viables pero después chocan con la realidad administrativa o impositiva. Esta desconexión es bastante común en etapas tempranas. Por eso el sitio incorpora una guía específica: para ayudar a que la parte fiscal se piense como variable del negocio y no como apéndice desagradable.`
      },
      {
        heading: "Qué preguntas conviene llevar al contador",
        body: `Una buena guía también sirve para mejorar una conversación profesional. En lugar de llegar a una consulta con preguntas vagas, conviene llevar un cuadro de situación más preciso: volumen actual, volumen esperado, tipo de producto, canal de venta principal, estructura de costos, frecuencia de reposición y forma de cobro. Cuanto más concreta sea la conversación, más útil será la respuesta. El valor de esta página, entonces, está en ayudar a preparar ese marco y a evitar el clásico “después vemos”. El después, en estos temas, suele salir caro.`
      },
      {
        heading: "Mercado Libre y disciplina operativa",
        body: `Vender en una plataforma relevante agrega capas de orden y exposición que no se pueden mirar con ligereza. La disciplina documental, el seguimiento de facturación, la consistencia operativa y la lectura de los límites del esquema elegido no son cuestiones menores. Aunque esta guía no entra en detalles normativos específicos que deben revisarse con profesional matriculado, sí subraya una idea central: una operación comercial sana necesita que la base fiscal acompañe el crecimiento. No es un tema para arreglar “cuando ya venda más”; es parte del sistema desde el comienzo.`
      },
      {
        heading: "Qué resultado debería dejar esta lectura",
        body: `Después de leer esta guía, el objetivo es que el usuario salga con más claridad sobre la importancia del tema y con una lista mejor formulada de asuntos a revisar. Si logra entender que fiscalidad, plataforma y rentabilidad forman parte del mismo problema, la página ya habrá cumplido su función. Esa integración de dimensiones —producto, margen, logística y orden fiscal— es uno de los principios que atraviesa todo DAS LATAM CEA.`
      }
    ],
  },
  "guias-peso-y-fragilidad": {
    kicker: "Guía",
    title: "Peso, fragilidad y devoluciones: el lado del negocio que suele destruir margen en silencio.",
    subtitle:
      "Muchos productos fracasan no porque nadie los quiera, sino porque moverlos bien cuesta más de lo que el vendedor imaginó.",
    sections: [
      {
        heading: "Por qué este tema merece una guía propia",
        body: `Peso y fragilidad parecen variables logísticas de segundo orden hasta que aparecen los costos reales. Golpes, roturas, empaques reforzados, demoras, reclamos y devoluciones pueden alterar por completo el resultado económico de una operación. El problema es que estas variables se suelen mirar tarde, cuando el producto ya fue elegido por su estética, por su precio o por una percepción de demanda. El sitio las pone al frente porque, en la práctica, tienen poder para arruinar categorías enteras si se las subestima. Pensar peso y fragilidad es pensar margen, reputación y complejidad operativa al mismo tiempo.`
      },
      {
        heading: "Fragilidad visible y fragilidad escondida",
        body: `Hay productos obviamente frágiles, pero también hay fragilidad escondida. Un ítem puede no parecer delicado y aun así sufrir por terminaciones, cierres, accesorios, piezas móviles, embalaje deficiente o tolerancia baja a la manipulación. Esta distinción importa mucho porque la evaluación intuitiva suele mirar sólo el material principal. La guía propone ampliar esa mirada y revisar dónde puede fallar la experiencia completa del producto durante almacenamiento, preparación y entrega. Esa revisión preventiva suele marcar la diferencia entre una operación sana y una espiral de problemas repetidos.`
      },
      {
        heading: "Peso, volumen y percepción de conveniencia",
        body: `El peso por sí mismo importa, pero también importa junto con el volumen y con la percepción de conveniencia del cliente. Hay productos grandes o pesados que todavía justifican el esfuerzo porque entregan un valor evidente. Y hay productos relativamente modestos cuyo costo logístico luce desproporcionado frente al beneficio percibido. Esa relación entre esfuerzo de mover y valor que el cliente siente es decisiva. El vendedor debería preguntarse si la propuesta comercial del producto soporta honestamente el costo total de hacerlo llegar bien. Si la respuesta es dudosa, el riesgo de erosión de margen aumenta mucho.`
      },
      {
        heading: "Devoluciones como señal operativa",
        body: `Las devoluciones no deberían leerse sólo como una molestia; deberían leerse como un diagnóstico. Cuando una familia de productos concentra devoluciones, suele estar revelando una fricción más profunda: expectativa mal calibrada, embalaje insuficiente, mala descripción, calidad débil o complejidad intrínseca. Por eso peso y fragilidad tienen que discutirse junto con devolución. No son temas separados. Una operación que parece rentable antes de considerar devoluciones puede dejar de serlo cuando esas devoluciones empiezan a aparecer con cierta regularidad. Esta guía invita a meter ese factor en la ecuación antes de comprometerse con la categoría.`
      },
      {
        heading: "Cómo usar este criterio para elegir mejor",
        body: `Aplicado correctamente, este marco ayuda a elegir productos más nobles. No implica descartar todo lo frágil o pesado, sino reconocer cuándo el negocio tiene espalda, margen y proceso para sostenerlo. Si esa espalda no existe, probablemente convenga priorizar familias de producto más simples. El aprendizaje principal es bastante concreto: mover bien también forma parte del producto. Quien no lo incorpora al análisis termina evaluando una versión irreal de su propia operación.`
      }
    ],
  },
};
