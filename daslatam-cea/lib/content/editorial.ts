import type { EditorialPageData } from "@/components/content/EditorialPage";

export const editorialPages: Record<string, EditorialPageData> = {  'about': {
    kicker: 'About',
    title: 'Qué es CEA y para qué sirve este sitio.',
    subtitle: 'CEA reúne información útil, criterios de evaluación y contenido práctico para ayudar a tomar mejores decisiones de comercio electrónico en Argentina.',
    ctaLabel: 'Ir a guías',
    ctaHref: '/guias',
    sections: [
      {
        heading: 'Una referencia orientada al público',
        body: `CEA fue pensado como un espacio de consulta para personas que venden, quieren vender o están evaluando ingresar al comercio electrónico en Argentina. El foco no está puesto en impresionar con promesas vacías sino en reunir contenido claro, aplicado y accesible. Quien llega al sitio debería poder entender rápidamente qué información hay, cómo usarla y qué decisiones puede ayudar a ordenar. Esa vocación pública cambia la forma de redactar, de seleccionar temas y de estructurar cada página. El objetivo es acompañar al lector con explicaciones entendibles y con una lógica de servicio, no con jerga innecesaria ni con textos redactados sólo para describir el proyecto desde adentro.`,
      },
      {
        heading: 'Un enfoque argentino y operativo',
        body: `Hablar de comercio electrónico en Argentina exige considerar variables concretas: costo logístico, presión sobre márgenes, sensibilidad al precio, restricciones fiscales, reposición de stock, tiempos de importación y cambios de contexto. Por eso el contenido del sitio toma ese escenario como punto de partida. No se trata de copiar recetas de otros mercados ni de repetir fórmulas generales. Se trata de traducir el contexto local en preguntas útiles: qué revisar antes de comprar, cuándo una categoría parece atractiva pero no conviene, cómo cambia el análisis según el canal de venta o el tamaño de la operación y qué errores frecuentes se pueden evitar con una lectura más ordenada.`,
      },
      {
        heading: 'Contenido antes que ruido',
        body: `Una gran parte de las malas decisiones comerciales nace de información confusa o incompleta. CEA intenta corregir eso con contenido escrito para ser leído de verdad. Las guías, las páginas metodológicas y las secciones de contexto están pensadas para ofrecer una base sólida antes de pasar a cualquier herramienta más automatizada. Esto no significa postergar valor; significa construirlo de manera más creíble. Un lector que entiende mejor cómo analizar una categoría o cómo calcular un margen tiene más probabilidades de tomar una buena decisión que alguien que recibe un número aislado sin contexto.`,
      },
      {
        heading: 'Para quién está hecho',
        body: `El sitio puede servirle a vendedores que operan en marketplaces, a emprendedores que validan un producto, a importadores pequeños, a comercios que están profesionalizando su canal digital y a cualquier persona interesada en entender mejor cómo se mueve el e-commerce local. No hace falta ser experto para usarlo. Sí conviene tener interés por trabajar con criterio y por evitar atajos que suelen salir caros. Esa es la audiencia principal: personas que prefieren información práctica, explicaciones claras y una lectura del mercado que ayude a decidir con más fundamento.`,
      },
      {
        heading: 'Cómo va a crecer',
        body: `CEA va a seguir ampliándose por etapas. Primero consolida su base editorial, sus documentos institucionales y sus guías principales. Después irá incorporando herramientas para ordenar búsquedas, oportunidades y análisis. Ese crecimiento por fases es deliberado. Permite que el contenido conserve una función real y que la capa de producto se apoye sobre una base comprensible para el público. El sitio no busca parecer terminado antes de tiempo. Busca volverse cada vez más útil, con una propuesta que combine información, criterio y herramientas cuando esas herramientas estén listas para aportar valor de verdad.`,
      },
    ],
  },
  'como-funciona': {
    kicker: 'Cómo funciona',
    title: 'Cómo se recorre el sitio y cómo conviene usar cada sección.',
    subtitle: 'La estructura de CEA está pensada para que cualquier visitante pueda pasar de una duda general a una lectura más útil y accionable.',
    ctaLabel: 'Ver herramientas',
    ctaHref: '/herramientas',
    sections: [
      {
        heading: 'Un recorrido simple',
        body: `La navegación principal fue organizada para que el usuario no tenga que adivinar por dónde empezar. La marca lleva al inicio, desde donde se presenta el enfoque general del sitio. Las guías ofrecen contenido práctico de lectura extensa. La metodología explica cómo se construyen los criterios de análisis. La suscripción resume la propuesta de valor del envío periódico y la sección de contacto abre el canal para consultas. Además, el pie de página concentra fuentes, documentos legales, roadmap y accesos complementarios. La idea es que el recorrido sea limpio y que la información importante esté visible sin saturar la cabecera con demasiadas opciones.`,
      },
      {
        heading: 'Guías para resolver preguntas concretas',
        body: `La puerta de entrada más útil para muchos lectores serán las guías. Están escritas para responder problemas reales de operación: cómo validar un producto, cómo pensar el margen real, qué mirar al importar, cuándo un courier puede servir, cómo influye la fragilidad o qué orden conviene tener en la parte fiscal. Son textos largos porque esos temas no se resuelven bien con slogans ni con listas mínimas. Cada guía está orientada a que el lector termine la lectura con mejores preguntas y con un marco más claro para decidir si avanzar, probar o descartar una idea.`,
      },
      {
        heading: 'Metodología y fuentes para dar contexto',
        body: `No toda persona quiere empezar por una guía práctica. Algunas prefieren entender primero de dónde sale el criterio. Para eso existen las páginas de metodología y fuentes. La metodología explica qué variables suelen pesar más en un análisis comercial y qué límites tiene cualquier lectura seria del mercado. La sección de fuentes, por su parte, ayuda a entender qué tipo de información se toma en cuenta y cómo debería interpretarse. Estas páginas cumplen una función importante: mostrar que el contenido no se apoya en afirmaciones genéricas sino en un enfoque visible y razonado.`,
      },
      {
        heading: 'Suscripción, contacto y relación con el usuario',
        body: `CEA no quiere ser un sitio que publica y desaparece. Por eso incluye una sección de suscripción y una página de contacto. La suscripción está pensada como un canal para recibir oportunidades, notas y señales comerciales con una frecuencia razonable. La página de contacto sirve para canalizar consultas, propuestas y comentarios de lectores que quieran profundizar algún tema. La idea es que la relación con el usuario sea clara, voluntaria y consistente con el tono del sitio: información útil, expectativas moderadas y comunicación concreta.`,
      },
      {
        heading: 'Herramientas como siguiente capa',
        body: `La sección Herramientas aparece en la navegación porque forma parte del rumbo del producto, pero por ahora está presentada de manera honesta como una etapa próxima. El sitio prefiere explicar primero el criterio y ordenar el contenido antes de cargar la experiencia con módulos a medio resolver. Cuando esa sección se habilite, tendrá un lugar natural dentro del recorrido general: complementar con análisis más estructurados aquello que hoy se explica desde las guías y desde la metodología. Mientras tanto, el núcleo del valor sigue estando en la calidad y utilidad del contenido publicado.`,
      },
    ],
  },
  'metodologia': {
    kicker: 'Metodología',
    title: 'Cómo se ordena el análisis comercial dentro del sitio.',
    subtitle: 'La metodología busca traducir preguntas de negocio en criterios claros para leer productos, categorías y riesgos.',
    ctaLabel: 'Ver fuentes',
    ctaHref: '/fuentes',
    sections: [
      {
        heading: 'Pensar en variables, no en intuiciones sueltas',
        body: `Una buena decisión comercial rara vez depende de un único dato. Por eso la metodología de CEA no intenta encontrar una señal mágica ni un indicador definitivo. Lo que propone es un orden de lectura. Ese orden empieza por identificar el problema real: validar un producto, comparar una categoría, dimensionar riesgos, revisar márgenes o estimar una ventana de oportunidad. A partir de ahí, cada lectura combina varias variables. El objetivo no es reemplazar el criterio del lector, sino ayudarlo a organizarlo mejor para evitar conclusiones apresuradas.`,
      },
      {
        heading: 'Producto, competencia, margen y operación',
        body: `En la práctica, la metodología suele cruzar cuatro planos. El primero es el producto: qué resuelve, para quién sirve, qué fricciones puede tener y qué tan simple o compleja es su operación. El segundo es la competencia: cuánta presión parece haber, qué tipo de vendedores intervienen y qué señales de saturación aparecen. El tercero es el margen: no sólo el precio de venta, sino también costos logísticos, devoluciones, comisiones, descuentos y tiempo de inmovilización. El cuarto es la operación: abastecimiento, fragilidad, reposición, cumplimiento y sostenibilidad del proceso. Ninguno de estos planos funciona bien aislado del resto.`,
      },
      {
        heading: 'Interpretar antes que absolutizar',
        body: `El sitio evita presentar conclusiones como si fueran verdades totales. La razón es simple: muchas señales del mercado son contextuales. Un mismo producto puede ser bueno para un operador y malo para otro. Una categoría puede parecer saturada desde afuera y aun así tener nichos interesantes. Un precio aparentemente atractivo puede dejar poco margen real si la logística o la tasa de devoluciones son altas. Por eso la metodología insiste en la interpretación. No se trata sólo de ver datos, sino de entender qué significa cada dato en un escenario concreto.`,
      },
      {
        heading: 'Diferencia entre señal y decisión',
        body: `Otra pieza central del enfoque es separar señal de decisión. La señal es un indicio útil: movimiento aparente, estacionalidad, presencia de vendedores fuertes, rango de precios, presión promocional o interés del público. La decisión, en cambio, requiere un paso más: validar si esa señal encaja con la capacidad operativa, financiera y comercial del caso concreto. CEA trabaja sobre señales y criterios para que cada lector tome decisiones mejor informadas, no para reemplazar la validación final que toda operación responsable necesita.`,
      },
      {
        heading: 'Una metodología que seguirá creciendo',
        body: `A medida que el sitio incorpore herramientas, esta metodología se va a volver todavía más visible. La intención es que cualquier módulo futuro conserve el mismo espíritu: explicar qué variable mira, qué puede sugerir y qué no puede asegurar. Eso importa tanto para la experiencia de usuario como para la credibilidad del producto. Una buena metodología no sólo ordena el contenido; también protege al lector frente a interpretaciones ingenuas. En ese sentido, esta página funciona como el marco común de todo el sitio.`,
      },
    ],
  },
  'fuentes': {
    kicker: 'Fuentes',
    title: 'Qué tipo de información se utiliza y cómo conviene leerla.',
    subtitle: 'Toda fuente aporta valor sólo cuando se entiende su alcance, su sesgo y su nivel real de confiabilidad.',
    ctaLabel: 'Leer metodología',
    ctaHref: '/metodologia',
    sections: [
      {
        heading: 'Fuentes públicas y lectura razonada',
        body: `CEA toma como referencia fuentes públicas, documentación disponible, observación de mercado, criterios operativos y experiencias repetidas dentro del comercio electrónico argentino. Esto incluye información visible de marketplaces, documentación de servicios, reglas generales de operación, lectura de categorías, señales logísticas y prácticas habituales de venta. El valor no está únicamente en acceder a una fuente sino en interpretarla con criterio. Una misma fuente puede ser útil para detectar una pista inicial y al mismo tiempo insuficiente para afirmar una conclusión cerrada. Por eso el sitio evita presentar cualquier origen de datos como una verdad absoluta.`,
      },
      {
        heading: 'La importancia de distinguir dato observado de inferencia',
        body: `Una parte de la información que circula en e-commerce es directamente observable: precios publicados, condiciones de envío, estructura de una categoría, presencia de ciertos vendedores, políticas visibles o requisitos documentados. Otra parte es inferida: intensidad competitiva, riesgo operativo, margen probable, conveniencia de una categoría o calidad de una oportunidad. Esta distinción es fundamental. CEA intenta dejar claro cuándo está describiendo algo visible y cuándo está interpretando una señal. Ese cuidado mejora la calidad de lectura y ayuda a que el usuario no confunda indicios con certezas.`,
      },
      {
        heading: 'Contexto argentino y criterio operativo',
        body: `En muchos casos la información más útil no proviene de una sola base de datos sino del cruce entre contexto local y experiencia operativa. Por ejemplo, una oportunidad puede parecer interesante desde precio y demanda, pero perder atractivo cuando se suma logística, reposición o fiscalidad. Esa capa contextual también es una fuente, aunque no siempre aparezca en formato de tabla. El sitio la incorpora porque vender en Argentina exige mirar más de una dimensión al mismo tiempo. Ignorar ese contexto suele llevar a decisiones superficiales.`,
      },
      {
        heading: 'Limitaciones reconocidas',
        body: `Toda fuente tiene límites. Puede estar incompleta, llegar con demora, reflejar sólo una parte del mercado o exigir interpretación adicional. Reconocer esos límites no debilita el contenido; lo vuelve más honesto. CEA asume que una lectura responsable del mercado debe explicar qué se sabe, qué se infiere y qué queda fuera del alcance de una afirmación prudente. Ese criterio se mantendrá también en las futuras herramientas, para que los usuarios entiendan qué nivel de confianza merece cada señal.`,
      },
      {
        heading: 'Cómo usar estas fuentes como lector',
        body: `La mejor forma de aprovechar las fuentes mencionadas en el sitio es tomarlas como apoyo para ordenar decisiones, no como un reemplazo automático del análisis propio. Quien lee una guía o una nota debería preguntarse qué parte le sirve como referencia directa y qué parte necesita adaptar a su caso. Esa actitud activa es la que CEA busca promover. Las fuentes son el punto de partida para construir criterio; el valor real aparece cuando ese material se integra con la realidad operativa de cada lector.`,
      },
    ],
  },
  'contacto': {
    kicker: 'Contáctenos',
    title: 'Un canal abierto para consultas, propuestas y comentarios.',
    subtitle: 'La página de contacto está pensada para facilitar una relación simple y útil entre el sitio y sus lectores.',
    sections: [
      {
        heading: 'Para qué sirve esta sección',
        body: `La página de contacto existe para que lectores, vendedores, emprendedores y equipos interesados puedan acercar consultas, comentarios o propuestas vinculadas al contenido del sitio. No todo intercambio necesita una estructura compleja. Muchas veces basta con un canal claro para plantear una duda, sugerir una guía nueva o señalar un tema que merezca mayor desarrollo. Esta sección busca cumplir justamente esa función: ordenar la conversación y hacer más fácil la relación con el proyecto sin generar expectativas exageradas.`,
      },
      {
        heading: 'Qué tipo de mensajes conviene enviar',
        body: `Este canal es especialmente útil para consultas sobre el contenido publicado, pedidos de desarrollo temático, sugerencias de categorías, observaciones sobre claridad de una guía o interés en futuras funcionalidades. También puede servir para acercar propuestas de colaboración editorial o institucional. En cambio, no está pensado para reemplazar asesoramiento profesional ni para resolver por esta vía cuestiones que requieren un análisis legal, contable o aduanero específico. Cuanto más clara sea la consulta, más fácil será entender si el sitio puede darle respuesta o si conviene derivarla a un especialista.`,
      },
      {
        heading: 'Expectativas razonables de respuesta',
        body: `La página de contacto busca ordenar el vínculo con el público, pero no promete respuesta inmediata ni atención continua. El criterio general será priorizar mensajes que estén alineados con el alcance del sitio y con su agenda editorial. Esto no implica desinterés; implica mantener una dinámica realista y compatible con un proyecto en crecimiento. La intención es responder de forma útil, breve y respetuosa, sin convertir el canal en una promesa de soporte que el producto todavía no ofrece como servicio formal.`,
      },
      {
        heading: 'Privacidad y uso de la información',
        body: `Cualquier dato compartido a través de un futuro formulario de contacto debería utilizarse exclusivamente para gestionar la consulta recibida y, cuando corresponda, para continuar esa conversación. La lógica del sitio no es recolectar información de manera indiscriminada, sino permitir una comunicación funcional y controlada. Por eso esta sección está alineada con la política de privacidad y con una idea simple: solicitar la mínima información necesaria para que el intercambio tenga sentido.`,
      },
      {
        heading: 'Una relación orientada a mejorar el sitio',
        body: `Cada consulta o comentario bien planteado puede ayudar a mejorar el sitio. Muchas de las mejores páginas institucionales y guías prácticas nacen de preguntas reales del público. Por eso la función del contacto no es meramente administrativa. También cumple un rol editorial: detectar dudas frecuentes, identificar temas mal explicados y reconocer qué necesita hoy una audiencia que busca vender mejor en Argentina. En ese sentido, el contacto es parte del aprendizaje del proyecto.`,
      },
    ],
  },
  'suscribirse': {
    kicker: 'Suscribirse',
    title: 'Qué va a ofrecer la suscripción y por qué puede resultar útil.',
    subtitle: 'La propuesta es enviar oportunidades, contexto y novedades en una frecuencia razonable, con foco en utilidad real para el lector.',
    sections: [
      {
        heading: 'Una suscripción con criterio editorial',
        body: `La suscripción que prepara CEA no se plantea como una lista genérica de correos ni como un simple recordatorio comercial. La idea es construir un envío periódico que seleccione oportunidades, contenidos nuevos, señales de mercado y recordatorios útiles para quienes trabajan con comercio electrónico en Argentina. Eso implica priorizar calidad sobre cantidad. En lugar de saturar la bandeja con envíos constantes, el objetivo es que cada entrega tenga un motivo claro para ser leída y aporte una síntesis que el usuario pueda aplicar o, al menos, usar como referencia.`,
      },
      {
        heading: 'Qué tipo de contenido podría incluir',
        body: `El formato pensado para la suscripción combina varios tipos de material. Por un lado, oportunidades o categorías que merezcan atención. Por otro, guías nuevas o actualizadas. También puede incluir recordatorios estacionales, cambios relevantes en la agenda comercial y notas breves sobre riesgos o tendencias. La clave será mantener un equilibrio entre señal y contexto. Un buen envío no debería limitarse a enumerar ideas; debería explicar por qué esas ideas importan y qué precauciones conviene tener en cuenta al leerlas.`,
      },
      {
        heading: 'Para quién tiene sentido suscribirse',
        body: `La suscripción puede resultar útil para vendedores que ya operan en marketplaces, emprendedores que están validando su primera línea de productos, pequeños importadores y personas que siguen el mercado para detectar oportunidades. También puede servir a lectores que simplemente prefieren recibir una síntesis periódica en lugar de revisar el sitio por su cuenta. Lo importante es que la propuesta mantenga una orientación práctica. No se trata de enviar novedades por enviar, sino de concentrar información que pueda ayudar a pensar mejor la operatoria.`,
      },
      {
        heading: 'Expectativas y límites',
        body: `Al igual que el resto del sitio, la suscripción va a sostener una promesa moderada. No ofrecerá certezas absolutas ni recomendaciones mágicas. Su rol será ordenar señales, sugerir líneas de lectura y acercar contenido útil con una frecuencia razonable. Ese límite es importante porque protege la relación con el lector. Una suscripción confiable debe ser clara respecto de lo que entrega y de lo que no promete. En CEA, esa claridad forma parte del producto.`,
      },
      {
        heading: 'Cómo encaja dentro del sitio',
        body: `La suscripción funciona como un puente entre el contenido editorial y la futura capa de herramientas. Permite mantener una relación periódica con la audiencia, resumir lo más importante de la semana y ayudar a que el usuario vuelva al sitio con un objetivo más claro. En ese sentido, no es un accesorio de marketing sino una pieza natural del ecosistema editorial. Su valor estará dado por la curaduría, la claridad y la consistencia del envío.`,
      },
    ],
  },
  'privacidad': {
    kicker: 'Privacidad',
    title: 'Cómo se busca tratar la información de los usuarios con criterio y proporcionalidad.',
    subtitle: 'La política de privacidad acompaña el crecimiento del sitio y describe el enfoque con el que se deberían manejar datos de navegación, suscripción o contacto.',
    sections: [
      {
        heading: 'Principio general',
        body: `CEA parte de una idea simple: pedir la menor cantidad posible de información y usarla sólo para una finalidad comprensible. Un sitio de contenido y herramientas en crecimiento no necesita recolectar datos de manera excesiva para resultar útil. Por eso la lógica general es de proporcionalidad. Si un usuario consulta el sitio sin completar formularios, la expectativa razonable es una navegación con un tratamiento limitado de datos técnicos habituales. Si más adelante se habilitan formularios de suscripción o contacto, el uso de la información debería quedar claramente explicado desde el primer momento.`,
      },
      {
        heading: 'Datos de contacto y suscripción',
        body: `Cuando existan formularios operativos de contacto o suscripción, los datos ingresados deberían utilizarse para gestionar esa relación puntual: responder una consulta, enviar una comunicación solicitada o administrar un alta y una baja. La intención no es construir una base opaca ni reenviar mensajes fuera del alcance esperado por el usuario. Una política útil no se mide por su extensión sino por la coherencia entre lo que dice y lo que el sitio hace. En este caso, esa coherencia pasa por limitar finalidades y mantener un lenguaje transparente.`,
      },
      {
        heading: 'Servicios de terceros',
        body: `A medida que el proyecto incorpore herramientas de correo, analítica, automatización o publicidad, la política deberá reflejar qué servicios intervienen y con qué propósito. El criterio será priorizar proveedores reconocibles y configuraciones acordes a la necesidad real del sitio. Ninguna integración debería sumarse por simple acumulación. Cada una debería responder a una función concreta: medir, enviar, procesar o mejorar la experiencia. Esa mirada también forma parte del cuidado de datos, porque una arquitectura más sobria suele reducir exposición innecesaria.`,
      },
      {
        heading: 'Seguridad razonable',
        body: `No existe sistema invulnerable, pero sí existen prácticas prudentes. El proyecto asume que el tratamiento de información requiere control de accesos, segmentación de credenciales y revisión de flujos. Esta política no promete una seguridad perfecta; promete una actitud responsable frente al manejo de datos. Esa diferencia es importante. En un sitio en evolución, la mejor promesa no es la grandilocuencia sino la disciplina: revisar qué se guarda, por qué se guarda y quién puede acceder a ello.`,
      },
      {
        heading: 'Actualización de la política',
        body: `Dado que el sitio va a incorporar nuevas funciones por etapas, la política de privacidad podrá actualizarse para reflejar esos cambios. Lo importante es que esa actualización acompañe la práctica real y no quede desfasada respecto del producto. Una política viva y alineada con el funcionamiento del sitio resulta mucho más útil que un documento genérico copiado sin relación con la experiencia concreta del usuario. Ese es el estándar que CEA busca sostener.`,
      },
    ],
  },
  'terminos': {
    kicker: 'Términos y condiciones',
    title: 'Alcance del sitio, límites del contenido y marco general de uso.',
    subtitle: 'Estos términos ayudan a aclarar qué ofrece CEA, cómo conviene leer su contenido y qué responsabilidad conserva cada usuario sobre sus decisiones.',
    sections: [
      {
        heading: 'Objeto del sitio',
        body: `CEA es un sitio de información, criterio editorial y futuras herramientas orientadas al comercio electrónico en Argentina. Su función principal es ofrecer contenido útil y ordenar variables relevantes para la toma de decisiones. El sitio no debe interpretarse como una promesa automática de rentabilidad ni como un servicio que sustituya el análisis particular de cada operación. Esta aclaración no reduce su valor. Lo ubica correctamente. Un contenido útil puede mejorar mucho una decisión, pero no elimina la responsabilidad final del usuario sobre aquello que compra, vende, importa o publica.`,
      },
      {
        heading: 'Naturaleza informativa del contenido',
        body: `Las guías, notas, páginas metodológicas y futuras herramientas de CEA tienen un fin informativo y orientativo. Están diseñadas para ayudar a pensar mejor, no para reemplazar asesoramiento legal, contable, impositivo, financiero o aduanero. Algunas decisiones exigen revisión profesional específica y esa necesidad debe mantenerse visible. Leer el sitio como si ofreciera garantías absolutas iría contra su propósito. Leerlo como una base seria para ordenar preguntas y criterios, en cambio, es la manera correcta de aprovecharlo.`,
      },
      {
        heading: 'Uso esperado del sitio',
        body: `Se espera que el usuario navegue y utilice el contenido de buena fe, sin intentar interferir con el funcionamiento técnico del sitio, sin buscar accesos no autorizados y sin reutilizar material de forma engañosa. Cuando existan formularios o suscripciones, también se espera que la información proporcionada sea veraz y que el canal se use con respeto. Estas reglas no son meramente formales. Ayudan a preservar una experiencia coherente con un producto que quiere ser ordenado, útil y confiable para su audiencia.`,
      },
      {
        heading: 'Propiedad intelectual',
        body: `Salvo indicación en contrario, los textos, estructuras y elementos distintivos del sitio forman parte del proyecto CEA y no deberían reproducirse íntegramente con fines comerciales o engañosos sin autorización. El hecho de que el contenido sea público no significa que carezca de autoría o contexto. Sí puede haber referencias razonables, citas breves y uso con atribución cuando la finalidad lo justifique. El principio general es proteger el trabajo editorial sin obstaculizar un uso legítimo y claro del material.`,
      },
      {
        heading: 'Evolución del servicio',
        body: `CEA es un proyecto en crecimiento y, por lo tanto, puede modificar sus secciones, reorganizar páginas, ampliar funcionalidades o mantener otras en estado próximo. La presencia de una sección como Herramientas no implica disponibilidad inmediata ni promesa de fecha cerrada. La disponibilidad del sitio también puede verse afectada por tareas de mantenimiento, despliegues o cambios técnicos. El usuario acepta esta naturaleza evolutiva del producto y entiende que los términos podrán actualizarse para acompañar su desarrollo real.`,
      },
    ],
  },
  'roadmap': {
    kicker: 'Roadmap',
    title: 'Qué está disponible hoy y cuál es la secuencia de crecimiento prevista.',
    subtitle: 'El roadmap del sitio está organizado para priorizar utilidad pública, claridad de alcance y una evolución gradual hacia herramientas más robustas.',
    ctaLabel: 'Ir a Herramientas',
    ctaHref: '/herramientas',
    sections: [
      {
        heading: 'Etapa actual: base editorial',
        body: `La etapa vigente prioriza contenido completo, navegación clara, documentos legales consistentes y páginas de servicio para el público. Esto incluye home, guías, metodología, fuentes, contacto, suscripción, privacidad, términos y otras secciones de apoyo. Puede parecer una fase menos vistosa que una pantalla llena de indicadores, pero es la que construye la credibilidad del sitio. Una herramienta sin marco suele generar más ruido que valor. En cambio, una base editorial sólida mejora de inmediato la utilidad para quien necesita orientación concreta.`,
      },
      {
        heading: 'Próxima etapa: apertura gradual de herramientas',
        body: `La siguiente fase consiste en reactivar la sección Herramientas con un alcance controlado. La idea es habilitar primero funciones comprensibles, con mensajes honestos sobre lo que pueden y no pueden sugerir. Esto puede incluir un espacio de exploración inicial, lecturas comparativas o módulos de apoyo para ordenar variables comerciales. El principio seguirá siendo el mismo: cada avance debe ayudar a decidir mejor, no sólo a decorar la experiencia.`,
      },
      {
        heading: 'Suscripción operativa y seguimiento',
        body: `A medida que el sitio gane estabilidad, la suscripción pasará de ser una explicación de servicio a un circuito operativo. Esto implica formularios, gestión de altas y bajas, envíos periódicos y una política clara sobre frecuencia y contenido. Esa capa será importante porque permitirá mantener una relación continua con lectores interesados en oportunidades, notas nuevas y recordatorios comerciales. La suscripción forma parte del producto, no de un agregado periférico.`,
      },
      {
        heading: 'Expansión temática',
        body: `El roadmap también contempla ampliar el catálogo de guías, categorías y análisis. No todo crecimiento vendrá por el lado tecnológico. Una parte relevante consistirá en profundizar contenido, actualizar temas sensibles y abrir nuevos frentes según las preguntas del público. Este enfoque permite que el sitio gane valor incluso antes de que la capa de herramientas esté completamente desplegada.`,
      },
      {
        heading: 'Crecimiento con moderación',
        body: `La lógica general del roadmap es evitar promesas que no puedan sostenerse. CEA prefiere crecer por bloques funcionales y editoriales bien resueltos. Esa moderación no es falta de ambición; es una forma de proteger la experiencia del usuario y de construir un producto más confiable a largo plazo. Cada fase debería dejar algo útil en producción, no sólo adelantar una promesa sobre la fase siguiente.`,
      },
    ],
  },
  'analisis': {
    kicker: 'Análisis',
    title: 'Una sección para leer categorías, señales y decisiones con más contexto.',
    subtitle: 'Los análisis buscan interpretar el mercado desde una lógica práctica: qué mirar, qué comparar y qué señales pueden importar más en cada caso.',
    sections: [
      {
        heading: 'Para qué sirve esta sección',
        body: `La sección Análisis está pensada para reunir lecturas temáticas que ayuden a ordenar decisiones comerciales. No se trata de noticias sueltas ni de opiniones aisladas. La intención es explicar por qué una categoría merece atención, cómo se puede leer un comportamiento de mercado o qué variable conviene volver a mirar en un momento determinado. Esta sección busca conectar información con criterio, para que el lector no tenga que hacer todo el trabajo de interpretación por su cuenta.`,
      },
      {
        heading: 'Lectura comparativa',
        body: `Uno de los aportes más útiles de una nota de análisis es la comparación. Muchas veces el valor no está en observar un producto aislado, sino en contrastarlo con alternativas, con señales de temporada o con comportamientos de categorías vecinas. Esa lectura comparativa permite salir de la mirada lineal y detectar mejor tanto oportunidades como límites. CEA aspira a que esta sección funcione como un espacio donde ese tipo de comparación resulte más accesible para el público.`,
      },
      {
        heading: 'Señales, no certezas',
        body: `Un análisis bien redactado no promete certeza total. Describe indicios, pone límites y propone un marco de interpretación. Ese enfoque es especialmente importante en comercio electrónico, donde muchas variables cambian rápido. La sección mantendrá esa regla: ofrecer una lectura útil sin exagerar el nivel de precisión de las conclusiones. Esta prudencia es parte de la identidad del sitio y también una forma de cuidar al lector.`,
      },
      {
        heading: 'Puente entre contenido y herramientas',
        body: `Los análisis cumplen además un rol de transición. Toman temas que luego pueden convertirse en funcionalidades, alertas o módulos más estructurados dentro de la plataforma. En ese sentido, esta sección no sólo informa; también ayuda a mostrar cómo piensa el sitio y qué tipo de preguntas podrán sistematizarse más adelante. Es un puente natural entre la capa editorial y la futura capa de producto.`,
      },
      {
        heading: 'Lecturas que sigan siendo útiles con el tiempo',
        body: `Otra prioridad es evitar contenido demasiado efímero. Siempre que sea posible, los análisis deberían conservar valor incluso después de la coyuntura que los motivó. Eso se logra enfocándose en criterios, patrones y preguntas repetibles, más que en comentarios pasajeros. Así, el lector no sólo consume una nota, sino que incorpora un marco que puede volver a usar en otros contextos.`,
      },
    ],
  },
  'discovery': {
    kicker: 'Discovery',
    title: 'Un espacio para explorar ideas de producto y señales de mercado.',
    subtitle: 'La lógica de discovery no consiste en prometer “productos ganadores”, sino en ayudar a descubrir mejores preguntas y líneas de investigación.',
    sections: [
      {
        heading: 'Discovery como exploración, no como receta',
        body: `En comercio electrónico suele buscarse una respuesta demasiado rápida a una pregunta compleja: qué vender. La sección Discovery intenta escapar de ese enfoque simplista. Su propósito es abrir líneas de exploración, mostrar cómo mirar una categoría y sugerir variables que pueden volver una idea más o menos interesante. Eso no equivale a una recomendación cerrada. Equivale a un método de exploración más inteligente para no depender sólo de intuiciones o imitaciones.`,
      },
      {
        heading: 'Qué puede descubrir un lector',
        body: `Un lector que use bien esta sección puede encontrar familias de producto para investigar, ventanas estacionales que merecen seguimiento, combinaciones entre necesidad del público y complejidad operativa, o nichos que exigen una mirada más cuidadosa. El valor del discovery está en ampliar el mapa y no en imponer una única dirección. Esa amplitud ayuda especialmente a quienes están comenzando o a quienes sienten que siempre terminan revisando las mismas categorías.`,
      },
      {
        heading: 'La importancia del descarte temprano',
        body: `Explorar no siempre significa avanzar. Muchas veces la mejor función del discovery es facilitar un descarte temprano. Si una idea muestra señales de fragilidad excesiva, saturación, complejidad logística o dependencia de reposición incierta, conviene reconocerlo cuanto antes. En este sentido, el discovery no sólo sirve para encontrar opciones; también sirve para ahorrar tiempo y capital evitando caminos que lucen atractivos pero no cierran bien cuando se los examina con más detalle.`,
      },
      {
        heading: 'Discovery guiado por contexto argentino',
        body: `El valor de esta sección aumenta cuando la exploración se hace con lógica local. No alcanza con mirar tendencias internacionales o productos llamativos. También hay que preguntarse si encajan con la realidad argentina en términos de precio, abastecimiento, fiscalidad, logística y expectativa del cliente. Ese filtro local es parte central del criterio de CEA y será una de las diferencias más importantes de esta sección respecto de listados genéricos que circulan en internet.`,
      },
      {
        heading: 'Cómo se relaciona con el resto del sitio',
        body: `Discovery convive con guías, metodología y futuras herramientas. Las guías ayudan a evaluar. La metodología ordena criterios. Discovery amplía el radar. Y la futura capa de herramientas buscará sistematizar parte de esa exploración. Entendida así, esta sección tiene una función muy clara: abrir posibilidades sin perder seriedad ni convertir la curiosidad comercial en promesa vacía.`,
      },
    ],
  },
  'categorias-fitness': {
    kicker: 'Categoría · Fitness',
    title: 'Cómo leer la categoría fitness con criterio comercial.',
    subtitle: 'Esta sección ayuda a analizar productos vinculados al entrenamiento, la actividad física y el bienestar corporal desde una lógica de oportunidad, operación y sostenibilidad comercial.',
    sections: [
      {
        heading: 'Una categoría con señales mixtas',
        body: `La categoría de fitness y entrenamiento suele combinar atractivo visible con desafíos menos obvios. A primera vista puede mostrar productos de buena rotación, audiencias interesadas y un repertorio amplio de artículos. Sin embargo, no todo lo que se mueve dentro de esta familia es igual de noble para vender. Hay diferencias importantes entre productos aspiracionales, artículos de compra impulsiva, accesorios de reposición y líneas que exigen más explicación o respaldo. Por eso conviene leer la categoría con calma y distinguir subsegmentos antes de sacar conclusiones rápidas.`,
      },
      {
        heading: 'Producto y propuesta de valor',
        body: `Dentro de fitness y entrenamiento, la propuesta de valor pesa mucho. Algunos productos compiten casi exclusivamente por precio, mientras que otros permiten diferenciarse por calidad, diseño, experiencia de uso o presentación. Esta diferencia cambia la lógica comercial. Una categoría sólo parece “buena” cuando se mira desde afuera; cuando se entra en detalle aparecen preguntas más finas sobre percepción del cliente, facilidad de reposición, tolerancia a devoluciones y nivel de educación que exige la venta. El sitio busca justamente ayudar a ver esas capas antes de invertir.`,
      },
      {
        heading: 'Riesgos operativos frecuentes',
        body: `Toda categoría trae consigo riesgos específicos. En fitness y entrenamiento, esos riesgos pueden incluir talles o medidas, desgaste prematuro, sensibilidad del cliente a la calidad percibida, complejidad de embalaje, presión promocional o necesidad de surtido. Ninguno de estos factores invalida la categoría por sí mismo, pero sí obliga a evaluar mejor la operación. Una oportunidad aparente puede deteriorarse rápido si el producto elegido no encaja con la estructura del vendedor o con la expectativa del público al que se apunta.`,
      },
      {
        heading: 'Cómo usar esta sección',
        body: `La mejor forma de aprovechar esta página es tomarla como una puerta de entrada para ordenar preguntas. No busca cerrar el análisis de fitness y entrenamiento en una sola lectura. Busca ayudar a separar subrubros, reconocer fricciones, pensar mejor el margen y decidir qué temas profundizar con guías, fuentes o futuras herramientas. Esa función introductoria es valiosa porque evita que la exploración comercial empiece por comparaciones superficiales.`,
      },
      {
        heading: 'Qué mirar a continuación',
        body: `Después de revisar esta categoría, conviene avanzar hacia guías vinculadas con margen, validación de producto, logística o importación según el tipo de artículo que interese. También puede resultar útil seguir futuras notas de análisis o la suscripción para detectar señales nuevas. La categoría funciona entonces como un mapa inicial: no reemplaza la evaluación completa, pero sí ayuda a empezar con más criterio y con menos improvisación.`,
      },
    ],
  },
  'categorias-hogar': {
    kicker: 'Categoría · Hogar',
    title: 'Cómo leer la categoría hogar con criterio comercial.',
    subtitle: 'Esta sección ayuda a analizar artículos para orden, confort, cocina, limpieza y mejora de la vida diaria en casa desde una lógica de oportunidad, operación y sostenibilidad comercial.',
    sections: [
      {
        heading: 'Una categoría con señales mixtas',
        body: `La categoría de hogar y organización doméstica suele combinar atractivo visible con desafíos menos obvios. A primera vista puede mostrar productos de buena rotación, audiencias interesadas y un repertorio amplio de artículos. Sin embargo, no todo lo que se mueve dentro de esta familia es igual de noble para vender. Hay diferencias importantes entre productos aspiracionales, artículos de compra impulsiva, accesorios de reposición y líneas que exigen más explicación o respaldo. Por eso conviene leer la categoría con calma y distinguir subsegmentos antes de sacar conclusiones rápidas.`,
      },
      {
        heading: 'Producto y propuesta de valor',
        body: `Dentro de hogar y organización doméstica, la propuesta de valor pesa mucho. Algunos productos compiten casi exclusivamente por precio, mientras que otros permiten diferenciarse por calidad, diseño, experiencia de uso o presentación. Esta diferencia cambia la lógica comercial. Una categoría sólo parece “buena” cuando se mira desde afuera; cuando se entra en detalle aparecen preguntas más finas sobre percepción del cliente, facilidad de reposición, tolerancia a devoluciones y nivel de educación que exige la venta. El sitio busca justamente ayudar a ver esas capas antes de invertir.`,
      },
      {
        heading: 'Riesgos operativos frecuentes',
        body: `Toda categoría trae consigo riesgos específicos. En hogar y organización doméstica, esos riesgos pueden incluir talles o medidas, desgaste prematuro, sensibilidad del cliente a la calidad percibida, complejidad de embalaje, presión promocional o necesidad de surtido. Ninguno de estos factores invalida la categoría por sí mismo, pero sí obliga a evaluar mejor la operación. Una oportunidad aparente puede deteriorarse rápido si el producto elegido no encaja con la estructura del vendedor o con la expectativa del público al que se apunta.`,
      },
      {
        heading: 'Cómo usar esta sección',
        body: `La mejor forma de aprovechar esta página es tomarla como una puerta de entrada para ordenar preguntas. No busca cerrar el análisis de hogar y organización doméstica en una sola lectura. Busca ayudar a separar subrubros, reconocer fricciones, pensar mejor el margen y decidir qué temas profundizar con guías, fuentes o futuras herramientas. Esa función introductoria es valiosa porque evita que la exploración comercial empiece por comparaciones superficiales.`,
      },
      {
        heading: 'Qué mirar a continuación',
        body: `Después de revisar esta categoría, conviene avanzar hacia guías vinculadas con margen, validación de producto, logística o importación según el tipo de artículo que interese. También puede resultar útil seguir futuras notas de análisis o la suscripción para detectar señales nuevas. La categoría funciona entonces como un mapa inicial: no reemplaza la evaluación completa, pero sí ayuda a empezar con más criterio y con menos improvisación.`,
      },
    ],
  },
  'categorias-mascotas': {
    kicker: 'Categoría · Mascotas',
    title: 'Cómo leer la categoría mascotas con criterio comercial.',
    subtitle: 'Esta sección ayuda a analizar productos destinados al cuidado, entretenimiento, alimentación y bienestar de perros, gatos y otros animales de compañía desde una lógica de oportunidad, operación y sostenibilidad comercial.',
    sections: [
      {
        heading: 'Una categoría con señales mixtas',
        body: `La categoría de mascotas suele combinar atractivo visible con desafíos menos obvios. A primera vista puede mostrar productos de buena rotación, audiencias interesadas y un repertorio amplio de artículos. Sin embargo, no todo lo que se mueve dentro de esta familia es igual de noble para vender. Hay diferencias importantes entre productos aspiracionales, artículos de compra impulsiva, accesorios de reposición y líneas que exigen más explicación o respaldo. Por eso conviene leer la categoría con calma y distinguir subsegmentos antes de sacar conclusiones rápidas.`,
      },
      {
        heading: 'Producto y propuesta de valor',
        body: `Dentro de mascotas, la propuesta de valor pesa mucho. Algunos productos compiten casi exclusivamente por precio, mientras que otros permiten diferenciarse por calidad, diseño, experiencia de uso o presentación. Esta diferencia cambia la lógica comercial. Una categoría sólo parece “buena” cuando se mira desde afuera; cuando se entra en detalle aparecen preguntas más finas sobre percepción del cliente, facilidad de reposición, tolerancia a devoluciones y nivel de educación que exige la venta. El sitio busca justamente ayudar a ver esas capas antes de invertir.`,
      },
      {
        heading: 'Riesgos operativos frecuentes',
        body: `Toda categoría trae consigo riesgos específicos. En mascotas, esos riesgos pueden incluir talles o medidas, desgaste prematuro, sensibilidad del cliente a la calidad percibida, complejidad de embalaje, presión promocional o necesidad de surtido. Ninguno de estos factores invalida la categoría por sí mismo, pero sí obliga a evaluar mejor la operación. Una oportunidad aparente puede deteriorarse rápido si el producto elegido no encaja con la estructura del vendedor o con la expectativa del público al que se apunta.`,
      },
      {
        heading: 'Cómo usar esta sección',
        body: `La mejor forma de aprovechar esta página es tomarla como una puerta de entrada para ordenar preguntas. No busca cerrar el análisis de mascotas en una sola lectura. Busca ayudar a separar subrubros, reconocer fricciones, pensar mejor el margen y decidir qué temas profundizar con guías, fuentes o futuras herramientas. Esa función introductoria es valiosa porque evita que la exploración comercial empiece por comparaciones superficiales.`,
      },
      {
        heading: 'Qué mirar a continuación',
        body: `Después de revisar esta categoría, conviene avanzar hacia guías vinculadas con margen, validación de producto, logística o importación según el tipo de artículo que interese. También puede resultar útil seguir futuras notas de análisis o la suscripción para detectar señales nuevas. La categoría funciona entonces como un mapa inicial: no reemplaza la evaluación completa, pero sí ayuda a empezar con más criterio y con menos improvisación.`,
      },
    ],
  },
  'categorias-belleza': {
    kicker: 'Categoría · Belleza',
    title: 'Cómo leer la categoría belleza con criterio comercial.',
    subtitle: 'Esta sección ayuda a analizar artículos de cuidado personal, cosmética, accesorios y rutinas de bienestar desde una lógica de oportunidad, operación y sostenibilidad comercial.',
    sections: [
      {
        heading: 'Una categoría con señales mixtas',
        body: `La categoría de belleza y cuidado personal suele combinar atractivo visible con desafíos menos obvios. A primera vista puede mostrar productos de buena rotación, audiencias interesadas y un repertorio amplio de artículos. Sin embargo, no todo lo que se mueve dentro de esta familia es igual de noble para vender. Hay diferencias importantes entre productos aspiracionales, artículos de compra impulsiva, accesorios de reposición y líneas que exigen más explicación o respaldo. Por eso conviene leer la categoría con calma y distinguir subsegmentos antes de sacar conclusiones rápidas.`,
      },
      {
        heading: 'Producto y propuesta de valor',
        body: `Dentro de belleza y cuidado personal, la propuesta de valor pesa mucho. Algunos productos compiten casi exclusivamente por precio, mientras que otros permiten diferenciarse por calidad, diseño, experiencia de uso o presentación. Esta diferencia cambia la lógica comercial. Una categoría sólo parece “buena” cuando se mira desde afuera; cuando se entra en detalle aparecen preguntas más finas sobre percepción del cliente, facilidad de reposición, tolerancia a devoluciones y nivel de educación que exige la venta. El sitio busca justamente ayudar a ver esas capas antes de invertir.`,
      },
      {
        heading: 'Riesgos operativos frecuentes',
        body: `Toda categoría trae consigo riesgos específicos. En belleza y cuidado personal, esos riesgos pueden incluir talles o medidas, desgaste prematuro, sensibilidad del cliente a la calidad percibida, complejidad de embalaje, presión promocional o necesidad de surtido. Ninguno de estos factores invalida la categoría por sí mismo, pero sí obliga a evaluar mejor la operación. Una oportunidad aparente puede deteriorarse rápido si el producto elegido no encaja con la estructura del vendedor o con la expectativa del público al que se apunta.`,
      },
      {
        heading: 'Cómo usar esta sección',
        body: `La mejor forma de aprovechar esta página es tomarla como una puerta de entrada para ordenar preguntas. No busca cerrar el análisis de belleza y cuidado personal en una sola lectura. Busca ayudar a separar subrubros, reconocer fricciones, pensar mejor el margen y decidir qué temas profundizar con guías, fuentes o futuras herramientas. Esa función introductoria es valiosa porque evita que la exploración comercial empiece por comparaciones superficiales.`,
      },
      {
        heading: 'Qué mirar a continuación',
        body: `Después de revisar esta categoría, conviene avanzar hacia guías vinculadas con margen, validación de producto, logística o importación según el tipo de artículo que interese. También puede resultar útil seguir futuras notas de análisis o la suscripción para detectar señales nuevas. La categoría funciona entonces como un mapa inicial: no reemplaza la evaluación completa, pero sí ayuda a empezar con más criterio y con menos improvisación.`,
      },
    ],
  },
  'guias-validar-producto': {
    kicker: 'Guía práctica',
    title: 'Cómo validar un producto antes de invertir stock.',
    subtitle: 'Una guía práctica para evaluar ideas de producto sin caer en entusiasmo prematuro.',
    sections: [
      {
        heading: 'Empezar por las preguntas correctas',
        body: `La validación de producto mejora mucho cuando se abandona la lógica de las respuestas rápidas y se empieza por las preguntas correctas. Antes de avanzar conviene entender qué problema resuelve el producto o la operación, qué público lo compra, qué nivel de dificultad agrega al negocio y qué señales pueden advertir un riesgo temprano. Ese cambio de enfoque parece simple, pero evita una gran cantidad de errores. En vez de entusiasmarse sólo con una señal favorable, la guía propone mirar el cuadro completo y ordenar el análisis de manera más realista.`,
      },
      {
        heading: 'Variables que suelen pesar más',
        body: `En este tema hay varias variables que conviene revisar juntas. Algunas son visibles desde el primer momento y otras aparecen recién cuando se desarma la operación paso por paso. El propósito de la guía es mostrar ambas capas. Cuando una persona logra ver no sólo el beneficio aparente sino también los costos, tiempos, restricciones y dependencias del caso, el diagnóstico cambia de calidad. Eso vale tanto para una prueba pequeña como para una escala mayor.`,
      },
      {
        heading: 'Errores frecuentes',
        body: `Uno de los mayores aportes de una guía práctica es ayudar a reconocer errores comunes antes de cometerlos. En validación de producto, esos errores suelen venir de supuestos demasiado optimistas, de lectura incompleta del contexto o de decisiones tomadas con apuro. Identificarlos a tiempo no vuelve infalible a la operación, pero sí la vuelve más consciente. En comercio electrónico, esa mejora de criterio suele traducirse en menos retrabajo, menos stock inmovilizado y menos frustración operativa.`,
      },
      {
        heading: 'Cómo aplicar la guía a un caso real',
        body: `La utilidad de este contenido aparece cuando se lo baja a una situación concreta. La recomendación no es leer la guía como una teoría cerrada, sino usarla como checklist mental para revisar una idea, una compra o una hipótesis comercial. Cada lector tendrá su propio contexto, pero las preguntas base suelen repetirse. Por eso esta guía está pensada para servir tanto a quien recién empieza como a quien ya opera y quiere ordenar mejor su proceso.`,
      },
      {
        heading: 'La decisión final sigue siendo propia',
        body: `Como todo el contenido del sitio, esta guía no reemplaza la validación específica que cada operación necesita. Su función es mejorar la calidad de la decisión, no tomarla por el lector. Esa aclaración es importante porque evita un mal uso del contenido. Cuando una guía se entiende como marco de análisis, aporta mucho más valor que cuando se la interpreta como una receta universal. Ese es el espíritu con el que fue redactada.`,
      },
    ],
  },
  'guias-margen-real': {
    kicker: 'Guía práctica',
    title: 'Cómo calcular margen real y no un margen imaginario.',
    subtitle: 'Una lectura completa sobre costos visibles y costos escondidos que afectan la rentabilidad.',
    sections: [
      {
        heading: 'Empezar por las preguntas correctas',
        body: `La margen real mejora mucho cuando se abandona la lógica de las respuestas rápidas y se empieza por las preguntas correctas. Antes de avanzar conviene entender qué problema resuelve el producto o la operación, qué público lo compra, qué nivel de dificultad agrega al negocio y qué señales pueden advertir un riesgo temprano. Ese cambio de enfoque parece simple, pero evita una gran cantidad de errores. En vez de entusiasmarse sólo con una señal favorable, la guía propone mirar el cuadro completo y ordenar el análisis de manera más realista.`,
      },
      {
        heading: 'Variables que suelen pesar más',
        body: `En este tema hay varias variables que conviene revisar juntas. Algunas son visibles desde el primer momento y otras aparecen recién cuando se desarma la operación paso por paso. El propósito de la guía es mostrar ambas capas. Cuando una persona logra ver no sólo el beneficio aparente sino también los costos, tiempos, restricciones y dependencias del caso, el diagnóstico cambia de calidad. Eso vale tanto para una prueba pequeña como para una escala mayor.`,
      },
      {
        heading: 'Errores frecuentes',
        body: `Uno de los mayores aportes de una guía práctica es ayudar a reconocer errores comunes antes de cometerlos. En margen real, esos errores suelen venir de supuestos demasiado optimistas, de lectura incompleta del contexto o de decisiones tomadas con apuro. Identificarlos a tiempo no vuelve infalible a la operación, pero sí la vuelve más consciente. En comercio electrónico, esa mejora de criterio suele traducirse en menos retrabajo, menos stock inmovilizado y menos frustración operativa.`,
      },
      {
        heading: 'Cómo aplicar la guía a un caso real',
        body: `La utilidad de este contenido aparece cuando se lo baja a una situación concreta. La recomendación no es leer la guía como una teoría cerrada, sino usarla como checklist mental para revisar una idea, una compra o una hipótesis comercial. Cada lector tendrá su propio contexto, pero las preguntas base suelen repetirse. Por eso esta guía está pensada para servir tanto a quien recién empieza como a quien ya opera y quiere ordenar mejor su proceso.`,
      },
      {
        heading: 'La decisión final sigue siendo propia',
        body: `Como todo el contenido del sitio, esta guía no reemplaza la validación específica que cada operación necesita. Su función es mejorar la calidad de la decisión, no tomarla por el lector. Esa aclaración es importante porque evita un mal uso del contenido. Cuando una guía se entiende como marco de análisis, aporta mucho más valor que cuando se la interpreta como una receta universal. Ese es el espíritu con el que fue redactada.`,
      },
    ],
  },
  'guias-importar-desde-china': {
    kicker: 'Guía práctica',
    title: 'Importar desde China con criterio comercial.',
    subtitle: 'Aspectos básicos para evaluar una importación con más claridad y menos improvisación.',
    sections: [
      {
        heading: 'Empezar por las preguntas correctas',
        body: `La importación desde China mejora mucho cuando se abandona la lógica de las respuestas rápidas y se empieza por las preguntas correctas. Antes de avanzar conviene entender qué problema resuelve el producto o la operación, qué público lo compra, qué nivel de dificultad agrega al negocio y qué señales pueden advertir un riesgo temprano. Ese cambio de enfoque parece simple, pero evita una gran cantidad de errores. En vez de entusiasmarse sólo con una señal favorable, la guía propone mirar el cuadro completo y ordenar el análisis de manera más realista.`,
      },
      {
        heading: 'Variables que suelen pesar más',
        body: `En este tema hay varias variables que conviene revisar juntas. Algunas son visibles desde el primer momento y otras aparecen recién cuando se desarma la operación paso por paso. El propósito de la guía es mostrar ambas capas. Cuando una persona logra ver no sólo el beneficio aparente sino también los costos, tiempos, restricciones y dependencias del caso, el diagnóstico cambia de calidad. Eso vale tanto para una prueba pequeña como para una escala mayor.`,
      },
      {
        heading: 'Errores frecuentes',
        body: `Uno de los mayores aportes de una guía práctica es ayudar a reconocer errores comunes antes de cometerlos. En importación desde China, esos errores suelen venir de supuestos demasiado optimistas, de lectura incompleta del contexto o de decisiones tomadas con apuro. Identificarlos a tiempo no vuelve infalible a la operación, pero sí la vuelve más consciente. En comercio electrónico, esa mejora de criterio suele traducirse en menos retrabajo, menos stock inmovilizado y menos frustración operativa.`,
      },
      {
        heading: 'Cómo aplicar la guía a un caso real',
        body: `La utilidad de este contenido aparece cuando se lo baja a una situación concreta. La recomendación no es leer la guía como una teoría cerrada, sino usarla como checklist mental para revisar una idea, una compra o una hipótesis comercial. Cada lector tendrá su propio contexto, pero las preguntas base suelen repetirse. Por eso esta guía está pensada para servir tanto a quien recién empieza como a quien ya opera y quiere ordenar mejor su proceso.`,
      },
      {
        heading: 'La decisión final sigue siendo propia',
        body: `Como todo el contenido del sitio, esta guía no reemplaza la validación específica que cada operación necesita. Su función es mejorar la calidad de la decisión, no tomarla por el lector. Esa aclaración es importante porque evita un mal uso del contenido. Cuando una guía se entiende como marco de análisis, aporta mucho más valor que cuando se la interpreta como una receta universal. Ese es el espíritu con el que fue redactada.`,
      },
    ],
  },
  'guias-importacion-courier': {
    kicker: 'Guía práctica',
    title: 'Cuándo conviene usar courier y cuándo no.',
    subtitle: 'Una guía para entender el courier como herramienta de prueba y no como solución universal.',
    sections: [
      {
        heading: 'Empezar por las preguntas correctas',
        body: `La importación por courier mejora mucho cuando se abandona la lógica de las respuestas rápidas y se empieza por las preguntas correctas. Antes de avanzar conviene entender qué problema resuelve el producto o la operación, qué público lo compra, qué nivel de dificultad agrega al negocio y qué señales pueden advertir un riesgo temprano. Ese cambio de enfoque parece simple, pero evita una gran cantidad de errores. En vez de entusiasmarse sólo con una señal favorable, la guía propone mirar el cuadro completo y ordenar el análisis de manera más realista.`,
      },
      {
        heading: 'Variables que suelen pesar más',
        body: `En este tema hay varias variables que conviene revisar juntas. Algunas son visibles desde el primer momento y otras aparecen recién cuando se desarma la operación paso por paso. El propósito de la guía es mostrar ambas capas. Cuando una persona logra ver no sólo el beneficio aparente sino también los costos, tiempos, restricciones y dependencias del caso, el diagnóstico cambia de calidad. Eso vale tanto para una prueba pequeña como para una escala mayor.`,
      },
      {
        heading: 'Errores frecuentes',
        body: `Uno de los mayores aportes de una guía práctica es ayudar a reconocer errores comunes antes de cometerlos. En importación por courier, esos errores suelen venir de supuestos demasiado optimistas, de lectura incompleta del contexto o de decisiones tomadas con apuro. Identificarlos a tiempo no vuelve infalible a la operación, pero sí la vuelve más consciente. En comercio electrónico, esa mejora de criterio suele traducirse en menos retrabajo, menos stock inmovilizado y menos frustración operativa.`,
      },
      {
        heading: 'Cómo aplicar la guía a un caso real',
        body: `La utilidad de este contenido aparece cuando se lo baja a una situación concreta. La recomendación no es leer la guía como una teoría cerrada, sino usarla como checklist mental para revisar una idea, una compra o una hipótesis comercial. Cada lector tendrá su propio contexto, pero las preguntas base suelen repetirse. Por eso esta guía está pensada para servir tanto a quien recién empieza como a quien ya opera y quiere ordenar mejor su proceso.`,
      },
      {
        heading: 'La decisión final sigue siendo propia',
        body: `Como todo el contenido del sitio, esta guía no reemplaza la validación específica que cada operación necesita. Su función es mejorar la calidad de la decisión, no tomarla por el lector. Esa aclaración es importante porque evita un mal uso del contenido. Cuando una guía se entiende como marco de análisis, aporta mucho más valor que cuando se la interpreta como una receta universal. Ese es el espíritu con el que fue redactada.`,
      },
    ],
  },
  'guias-peso-y-fragilidad': {
    kicker: 'Guía práctica',
    title: 'Peso, fragilidad y devoluciones: el costo que suele subestimarse.',
    subtitle: 'Una guía sobre cómo la logística puede modificar por completo la conveniencia de un producto.',
    sections: [
      {
        heading: 'Empezar por las preguntas correctas',
        body: `La peso y fragilidad mejora mucho cuando se abandona la lógica de las respuestas rápidas y se empieza por las preguntas correctas. Antes de avanzar conviene entender qué problema resuelve el producto o la operación, qué público lo compra, qué nivel de dificultad agrega al negocio y qué señales pueden advertir un riesgo temprano. Ese cambio de enfoque parece simple, pero evita una gran cantidad de errores. En vez de entusiasmarse sólo con una señal favorable, la guía propone mirar el cuadro completo y ordenar el análisis de manera más realista.`,
      },
      {
        heading: 'Variables que suelen pesar más',
        body: `En este tema hay varias variables que conviene revisar juntas. Algunas son visibles desde el primer momento y otras aparecen recién cuando se desarma la operación paso por paso. El propósito de la guía es mostrar ambas capas. Cuando una persona logra ver no sólo el beneficio aparente sino también los costos, tiempos, restricciones y dependencias del caso, el diagnóstico cambia de calidad. Eso vale tanto para una prueba pequeña como para una escala mayor.`,
      },
      {
        heading: 'Errores frecuentes',
        body: `Uno de los mayores aportes de una guía práctica es ayudar a reconocer errores comunes antes de cometerlos. En peso y fragilidad, esos errores suelen venir de supuestos demasiado optimistas, de lectura incompleta del contexto o de decisiones tomadas con apuro. Identificarlos a tiempo no vuelve infalible a la operación, pero sí la vuelve más consciente. En comercio electrónico, esa mejora de criterio suele traducirse en menos retrabajo, menos stock inmovilizado y menos frustración operativa.`,
      },
      {
        heading: 'Cómo aplicar la guía a un caso real',
        body: `La utilidad de este contenido aparece cuando se lo baja a una situación concreta. La recomendación no es leer la guía como una teoría cerrada, sino usarla como checklist mental para revisar una idea, una compra o una hipótesis comercial. Cada lector tendrá su propio contexto, pero las preguntas base suelen repetirse. Por eso esta guía está pensada para servir tanto a quien recién empieza como a quien ya opera y quiere ordenar mejor su proceso.`,
      },
      {
        heading: 'La decisión final sigue siendo propia',
        body: `Como todo el contenido del sitio, esta guía no reemplaza la validación específica que cada operación necesita. Su función es mejorar la calidad de la decisión, no tomarla por el lector. Esa aclaración es importante porque evita un mal uso del contenido. Cuando una guía se entiende como marco de análisis, aporta mucho más valor que cuando se la interpreta como una receta universal. Ese es el espíritu con el que fue redactada.`,
      },
    ],
  },
  'guias-monotributo-mercado-libre': {
    kicker: 'Guía práctica',
    title: 'Monotributo y venta online: orden básico para operar mejor.',
    subtitle: 'Una introducción práctica para pensar formalidad, límites y organización comercial.',
    sections: [
      {
        heading: 'Empezar por las preguntas correctas',
        body: `La monotributo y venta online mejora mucho cuando se abandona la lógica de las respuestas rápidas y se empieza por las preguntas correctas. Antes de avanzar conviene entender qué problema resuelve el producto o la operación, qué público lo compra, qué nivel de dificultad agrega al negocio y qué señales pueden advertir un riesgo temprano. Ese cambio de enfoque parece simple, pero evita una gran cantidad de errores. En vez de entusiasmarse sólo con una señal favorable, la guía propone mirar el cuadro completo y ordenar el análisis de manera más realista.`,
      },
      {
        heading: 'Variables que suelen pesar más',
        body: `En este tema hay varias variables que conviene revisar juntas. Algunas son visibles desde el primer momento y otras aparecen recién cuando se desarma la operación paso por paso. El propósito de la guía es mostrar ambas capas. Cuando una persona logra ver no sólo el beneficio aparente sino también los costos, tiempos, restricciones y dependencias del caso, el diagnóstico cambia de calidad. Eso vale tanto para una prueba pequeña como para una escala mayor.`,
      },
      {
        heading: 'Errores frecuentes',
        body: `Uno de los mayores aportes de una guía práctica es ayudar a reconocer errores comunes antes de cometerlos. En monotributo y venta online, esos errores suelen venir de supuestos demasiado optimistas, de lectura incompleta del contexto o de decisiones tomadas con apuro. Identificarlos a tiempo no vuelve infalible a la operación, pero sí la vuelve más consciente. En comercio electrónico, esa mejora de criterio suele traducirse en menos retrabajo, menos stock inmovilizado y menos frustración operativa.`,
      },
      {
        heading: 'Cómo aplicar la guía a un caso real',
        body: `La utilidad de este contenido aparece cuando se lo baja a una situación concreta. La recomendación no es leer la guía como una teoría cerrada, sino usarla como checklist mental para revisar una idea, una compra o una hipótesis comercial. Cada lector tendrá su propio contexto, pero las preguntas base suelen repetirse. Por eso esta guía está pensada para servir tanto a quien recién empieza como a quien ya opera y quiere ordenar mejor su proceso.`,
      },
      {
        heading: 'La decisión final sigue siendo propia',
        body: `Como todo el contenido del sitio, esta guía no reemplaza la validación específica que cada operación necesita. Su función es mejorar la calidad de la decisión, no tomarla por el lector. Esa aclaración es importante porque evita un mal uso del contenido. Cuando una guía se entiende como marco de análisis, aporta mucho más valor que cuando se la interpreta como una receta universal. Ese es el espíritu con el que fue redactada.`,
      },
    ],
  },
};
