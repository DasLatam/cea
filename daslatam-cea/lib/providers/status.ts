type ProviderStatus = {
  key: string;
  label: string;
  status: "ok" | "warning" | "disabled" | "action" | "planned";
  detail: string;
  actionLabel?: string;
  actionHref?: string;
};

type ProviderStatusInput = {
  mlApiOk: boolean;
  mlHtmlOk?: boolean;
  mlBlocked?: boolean;
  mlAuthConfigured?: boolean;
  googleConfigured?: boolean;
  metaConfigured?: boolean;
  alibabaConfigured?: boolean;
};

function hasValue(v: string | undefined): boolean {
  return typeof v === "string" && v.trim().length > 0;
}

export function getProviderStatuses(input: ProviderStatusInput): ProviderStatus[] {
  const mlTokenConfigured = input.mlAuthConfigured ?? hasValue(process.env.MERCADOLIBRE_ACCESS_TOKEN);
  const googleConfigured =
    input.googleConfigured ??
    (hasValue(process.env.GOOGLE_ADS_REFRESH_TOKEN) && hasValue(process.env.GOOGLE_ADS_CUSTOMER_ID));
  const metaConfigured =
    input.metaConfigured ??
    (hasValue(process.env.META_ACCESS_TOKEN) && hasValue(process.env.META_AD_ACCOUNT_ID));
  const alibabaConfigured = input.alibabaConfigured ?? false;

  return [
    {
      key: "ml-api",
      label: "Mercado Libre · API pública",
      status: input.mlApiOk ? "ok" : input.mlBlocked ? "warning" : "action",
      detail: input.mlApiOk
        ? "Consulta resuelta con la fuente principal de Mercado Libre."
        : input.mlBlocked
          ? "La API pública está siendo rechazada por el upstream. La salida robusta es configurar un token OAuth propio de Mercado Libre para el backend."
          : "La fuente pública todavía no está validada en este entorno.",
      actionLabel: !input.mlApiOk && !mlTokenConfigured ? "Configurar OAuth de Mercado Libre" : undefined,
      actionHref: !input.mlApiOk && !mlTokenConfigured ? "/fuentes" : undefined,
    },
    {
      key: "ml-auth",
      label: "Mercado Libre · token OAuth propio",
      status: mlTokenConfigured ? "ok" : "action",
      detail: mlTokenConfigured
        ? "El backend tiene credenciales OAuth para reintentar contra Mercado Libre cuando la vía pública falla."
        : "Todavía no hay token server-side configurado. Sin eso, el bloqueo 403 de Mercado Libre no tiene una salida fiable en Vercel.",
      actionLabel: mlTokenConfigured ? undefined : "Ver conectores",
      actionHref: mlTokenConfigured ? undefined : "/fuentes",
    },
    {
      key: "ml-html",
      label: "Mercado Libre · respaldo HTML",
      status: input.mlHtmlOk ? "warning" : "disabled",
      detail: input.mlHtmlOk
        ? "Se usó una reconstrucción desde HTML público. Útil como respaldo, no como fuente ideal."
        : "Disponible como último recurso cuando la API principal falla.",
    },
    {
      key: "google-signals",
      label: "Google · demanda externa",
      status: googleConfigured ? "planned" : "action",
      detail: googleConfigured
        ? "Credenciales detectadas. El módulo todavía requiere implementación productiva antes de usarlo en scoring."
        : "Requiere credenciales de Google Ads o acceso aprobado a señales externas.",
      actionLabel: googleConfigured ? undefined : "Ver conectores",
      actionHref: googleConfigured ? undefined : "/fuentes",
    },
    {
      key: "meta-signals",
      label: "Meta · audiencia",
      status: metaConfigured ? "planned" : "action",
      detail: metaConfigured
        ? "Credenciales detectadas. El módulo aún no debería venderse como fuente operativa.": "Requiere Meta Marketing API y un ad account real.",
      actionLabel: metaConfigured ? undefined : "Ver conectores",
      actionHref: metaConfigured ? undefined : "/fuentes",
    },
    {
      key: "alibaba-signals",
      label: "Alibaba · sourcing",
      status: alibabaConfigured ? "planned" : "action",
      detail: alibabaConfigured
        ? "Fuente preparada a nivel de producto, pendiente de integración seria."
        : "Requiere conector propio o proveedor de sourcing confiable.",
      actionLabel: alibabaConfigured ? undefined : "Ver conectores",
      actionHref: alibabaConfigured ? undefined : "/fuentes",
    },
  ];
}
