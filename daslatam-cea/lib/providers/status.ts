import type { ProviderStatus } from "@/types/app";

function hasValue(value?: string) {
  return Boolean(value && value.trim());
}

export function getProviderStatuses(input: {
  mlApiOk: boolean;
  mlHtmlOk: boolean;
  mlBlocked?: boolean;
  mlAuthConfigured?: boolean;
}) {
  const mlTokenConfigured = input.mlAuthConfigured ?? hasValue(process.env.MERCADOLIBRE_ACCESS_TOKEN);
  const googleConfigured =
    hasValue(process.env.GOOGLE_ADS_DEVELOPER_TOKEN) &&
    hasValue(process.env.GOOGLE_ADS_REFRESH_TOKEN) &&
    hasValue(process.env.GOOGLE_ADS_CUSTOMER_ID) &&
    hasValue(process.env.GOOGLE_ADS_CLIENT_ID) &&
    hasValue(process.env.GOOGLE_ADS_CLIENT_SECRET);

  const metaConfigured =
    hasValue(process.env.META_ACCESS_TOKEN) && hasValue(process.env.META_AD_ACCOUNT_ID);

  const alibabaConfigured =
    hasValue(process.env.ALIBABA_APP_KEY) && hasValue(process.env.ALIBABA_APP_SECRET);

  const statuses: ProviderStatus[] = [
    {
      key: "ml-api",
      label: "Mercado Libre · API pública",
      status: input.mlApiOk ? "ok" : input.mlBlocked ? "action" : "warning",
      detail: input.mlApiOk
        ? "Consulta resuelta con la fuente principal de Mercado Libre."
        : input.mlBlocked
          ? "La API pública está siendo rechazada por el upstream. La salida robusta es configurar un token OAuth propio de Mercado Libre para el backend."
          : "La fuente principal respondió con error o sin datos útiles.",
      actionLabel: !input.mlApiOk && !mlTokenConfigured ? "Configurar OAuth de Mercado Libre" : undefined,
      actionHref: !input.mlApiOk && !mlTokenConfigured ? "/fuentes" : undefined,
    },
    {
      key: "ml-auth",
      label: "Mercado Libre · token OAuth propio",
      status: mlTokenConfigured ? "warning" : "action",
      detail: mlTokenConfigured
        ? "La app ya admite token server-side. Si el token es válido, el backend intentará usarlo cuando la vía pública falle."
        : "Todavía no hay token server-side configurado. Sin eso, el bloqueo 403 de Mercado Libre no tiene una salida fiable en Vercel.",
      actionLabel: mlTokenConfigured ? undefined : "Ver variables requeridas",
      actionHref: mlTokenConfigured ? undefined : "/fuentes",
    },
    {
      key: "ml-html",
      label: "Mercado Libre · respaldo HTML",
      status: input.mlHtmlOk ? "ok" : "warning",
      detail: input.mlHtmlOk
        ? "Se pudo reconstruir la búsqueda desde HTML público."
        : "No se obtuvieron resultados suficientes desde HTML público.",
    },
    {
      key: "google-signals",
      label: "Google · demanda externa",
      status: googleConfigured ? "warning" : "action",
      detail: googleConfigured
        ? "La capa de credenciales está lista. Falta validar la cuenta y terminar el consumo de métricas históricas para Argentina."
        : "Requiere credenciales de Google Ads para métricas históricas o acceso aprobado al Trends API. Sin eso, no hay fuente oficial en producción.",
      actionLabel: googleConfigured ? undefined : "Configurar Google Ads",
      actionHref: googleConfigured ? undefined : "/fuentes",
    },
    {
      key: "meta-signals",
      label: "Meta · audiencia",
      status: metaConfigured ? "warning" : "action",
      detail: metaConfigured
        ? "La base de acceso está preparada. Falta cerrar la consulta de reach estimate y criterios de segmentación por nicho."
        : "Requiere token y ad account de Meta Marketing API para reach estimates. Sin credenciales, no hay audiencia confiable.",
      actionLabel: metaConfigured ? undefined : "Configurar Meta",
      actionHref: metaConfigured ? undefined : "/fuentes",
    },
    {
      key: "alibaba-signals",
      label: "Alibaba · sourcing",
      status: alibabaConfigured ? "warning" : "action",
      detail: alibabaConfigured
        ? "La app ya prevé credenciales para un módulo de sourcing. Falta cerrar el adaptador y la normalización FOB/MOQ."
        : "Hace falta conector propio o proveedor de sourcing. Sin integración autenticada, Alibaba no debe marcarse como fuente operativa.",
      actionLabel: alibabaConfigured ? undefined : "Ver conectores",
      actionHref: alibabaConfigured ? undefined : "/fuentes",
    },
  ];

  return statuses;
}
