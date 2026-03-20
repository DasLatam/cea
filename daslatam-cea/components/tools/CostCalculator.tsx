"use client";

import { useMemo, useState } from "react";
import {
  calculateMlRealCost,
  getEstimatedMlFixedChargeArs,
  getSuggestedFinancingPercent,
  getSuggestedIibbPercent,
  getSuggestedMlShippingChargeArs,
  getSuggestedSellingFeePercent,
  type SalesMode,
} from "@/lib/calc/mlCostCalculator";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function NumberField({
  label,
  value,
  onChange,
  hint,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
  min?: number;
  step?: number;
}) {
  return (
    <label style={{ display: "grid", gap: 8 }}>
      <span style={{ fontWeight: 700, fontSize: 14, color: "#172033" }}>{label}</span>
      <input
        type="number"
        min={min}
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        style={{
          width: "100%",
          height: 48,
          borderRadius: 12,
          border: "1px solid #d7deea",
          background: "#fff",
          padding: "0 14px",
          fontSize: 15,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      {hint ? <span style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{hint}</span> : null}
    </label>
  );
}

function ResultRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        padding: "12px 0",
        borderBottom: "1px solid #edf2f7",
        fontSize: strong ? 16 : 14,
        fontWeight: strong ? 700 : 500,
      }}
    >
      <span style={{ color: "#334155" }}>{label}</span>
      <span style={{ color: "#0f172a", whiteSpace: "nowrap" }}>{value}</span>
    </div>
  );
}

export default function CostCalculator() {
  const [mode, setMode] = useState<SalesMode>("standard");
  const [salePriceArs, setSalePriceArs] = useState(30000);
  const [factoryCostArs, setFactoryCostArs] = useState(7000);
  const [freightToArgentinaArs, setFreightToArgentinaArs] = useState(2500);
  const [unitPackagingAndLabelArs, setUnitPackagingAndLabelArs] = useState(500);
  const [masterCartonCostArs, setMasterCartonCostArs] = useState(300);
  const [purchasedUnits, setPurchasedUnits] = useState(1000);
  const [iibbPercent, setIibbPercent] = useState(getSuggestedIibbPercent());
  const [sellingFeePercent, setSellingFeePercent] = useState(getSuggestedSellingFeePercent(mode));
  const [financingPercent, setFinancingPercent] = useState(getSuggestedFinancingPercent());
  const [mlShippingChargeArs, setMlShippingChargeArs] = useState(getSuggestedMlShippingChargeArs(mode, salePriceArs));
  const [fullStoragePerUnitArs, setFullStoragePerUnitArs] = useState(0);
  const [averageFullStorageDays, setAverageFullStorageDays] = useState(0);

  const results = useMemo(
    () =>
      calculateMlRealCost({
        mode,
        salePriceArs,
        factoryCostArs,
        freightToArgentinaArs,
        unitPackagingAndLabelArs,
        masterCartonCostArs,
        purchasedUnits,
        iibbPercent,
        sellingFeePercent,
        financingPercent,
        mlShippingChargeArs,
        fullStoragePerUnitArs,
        averageFullStorageDays,
      }),
    [
      mode,
      salePriceArs,
      factoryCostArs,
      freightToArgentinaArs,
      unitPackagingAndLabelArs,
      masterCartonCostArs,
      purchasedUnits,
      iibbPercent,
      sellingFeePercent,
      financingPercent,
      mlShippingChargeArs,
      fullStoragePerUnitArs,
      averageFullStorageDays,
    ],
  );

  const resetMlSuggested = () => {
    setSellingFeePercent(getSuggestedSellingFeePercent(mode));
    setFinancingPercent(getSuggestedFinancingPercent());
    setIibbPercent(getSuggestedIibbPercent());
    setMlShippingChargeArs(getSuggestedMlShippingChargeArs(mode, salePriceArs));
  };

  const autoFixedCharge = getEstimatedMlFixedChargeArs(salePriceArs);
  const profitPositive = results.unitProfitArs >= 0;

  return (
    <main style={{ padding: "40px 20px 72px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 24 }}>
        <section
          style={{
            background: "linear-gradient(135deg, #fffef2 0%, #ffffff 55%, #eef8ff 100%)",
            border: "1px solid #e7ecf3",
            borderRadius: 24,
            padding: 28,
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div style={{ display: "grid", gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#735c0f", textTransform: "uppercase", letterSpacing: 0.4 }}>
              Herramienta práctica
            </span>
            <h1 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, color: "#0f172a" }}>
              Calculadora de costos real para Mercado Libre
            </h1>
            <p style={{ margin: 0, fontSize: 16, color: "#475569", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
              Todos los montos se cargan en pesos argentinos (ARS). Esta calculadora te ayuda a ordenar el costo del producto,
              la llegada a Argentina, los gastos unitarios y los cargos más frecuentes de Mercado Libre para estimar ganancia neta por unidad
              y ganancia total cuando vendas todo el stock. Para validar el resultado final contra la tabla vigente del marketplace,
              incluimos el acceso al simulador oficial de Mercado Libre.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
              <a
                href="https://www.mercadolibre.com.ar/simulador-de-costos"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 44,
                  padding: "0 16px",
                  borderRadius: 12,
                  background: "#009ee3",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Abrir simulador oficial de Mercado Libre
              </a>
              <button
                type="button"
                onClick={resetMlSuggested}
                style={{
                  minHeight: 44,
                  padding: "0 16px",
                  borderRadius: 12,
                  border: "1px solid #d7deea",
                  background: "#fff",
                  color: "#172033",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Usar valores sugeridos de CEA
              </button>
            </div>
          </div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)", gap: 24, alignItems: "start" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e7ecf3",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
              display: "grid",
              gap: 24,
            }}
          >
            <div style={{ display: "grid", gap: 12 }}>
              <h2 style={{ margin: 0, fontSize: 24 }}>Datos de entrada</h2>
              <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7, textAlign: "justify", hyphens: "auto" }}>
                La idea es cargar primero el costo real de cada unidad en ARS y después completar los cargos del canal de venta. Los conceptos de Mercado Libre se dejan editables porque cambian según categoría, publicación, promociones y logística.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <span style={{ fontWeight: 800, color: "#172033" }}>Modalidad logística</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
                {[
                  { key: "full", title: "Mercado Envíos Full", text: "Incluye almacenamiento y puede tener descuento en el costo de envío gratis." },
                  { key: "standard", title: "Vendedor Estándar / Logística propia", text: "Usá esta opción si despachás vos o trabajás con esquema estándar." },
                ].map((option) => {
                  const active = mode === option.key;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        const nextMode = option.key as SalesMode;
                        setMode(nextMode);
                        setSellingFeePercent(getSuggestedSellingFeePercent(nextMode));
                        setMlShippingChargeArs(getSuggestedMlShippingChargeArs(nextMode, salePriceArs));
                      }}
                      style={{
                        textAlign: "left",
                        borderRadius: 16,
                        padding: 16,
                        border: active ? "2px solid #009ee3" : "1px solid #d7deea",
                        background: active ? "#f1fbff" : "#fff",
                        cursor: "pointer",
                        display: "grid",
                        gap: 6,
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#0f172a" }}>{option.title}</span>
                      <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{option.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18 }}>
              <NumberField
                label="Costo del producto en fábrica (ARS)"
                value={factoryCostArs}
                onChange={setFactoryCostArs}
                hint="Costo por unidad, ya expresado en pesos argentinos."
              />
              <NumberField
                label="Costo del envío hacia Argentina (ARS)"
                value={freightToArgentinaArs}
                onChange={setFreightToArgentinaArs}
                hint="Costo por unidad, prorrateado en ARS."
              />
              <NumberField
                label="Costo de embalaje y etiquetado individual (ARS)"
                value={unitPackagingAndLabelArs}
                onChange={setUnitPackagingAndLabelArs}
                hint="Caja, bolsa, etiqueta y preparación de cada unidad."
              />
              <NumberField
                label="Costo del embalaje grande de transporte (ARS)"
                value={masterCartonCostArs}
                onChange={setMasterCartonCostArs}
                hint="Prorrateado por unidad sobre la caja master o bulto final."
              />
              <NumberField
                label="Unidades compradas"
                value={purchasedUnits}
                onChange={setPurchasedUnits}
                hint="Se usa para calcular la ganancia total al vender todo el stock."
              />
              <NumberField
                label="Precio de venta en Mercado Libre (ARS)"
                value={salePriceArs}
                onChange={(value) => {
                  setSalePriceArs(value);
                  setMlShippingChargeArs(getSuggestedMlShippingChargeArs(mode, value));
                }}
                hint="Se usa para estimar cargos, retenciones y resultado final."
              />
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 18 }}>Conceptos de Mercado Libre</h3>
                <p style={{ margin: "8px 0 0", color: "#64748b", lineHeight: 1.7, textAlign: "justify", hyphens: "auto" }}>
                  Estos campos quedan visibles y editables porque Mercado Libre los modifica según categoría, publicación, logística, cuotas, promociones y reglas impositivas de cada cuenta.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18 }}>
                <NumberField
                  label="Cargo por vender (%)"
                  value={sellingFeePercent}
                  onChange={setSellingFeePercent}
                  step={0.1}
                  hint={mode === "full" ? "Sugerido CEA para Full." : "Sugerido CEA para estándar o logística propia."}
                />
                <NumberField
                  label="Costo por cuotas (%)"
                  value={financingPercent}
                  onChange={setFinancingPercent}
                  step={0.1}
                  hint="Usá 0% si no ofrecés financiación bonificada."
                />
                <NumberField
                  label="Costo logístico cobrado por ML (ARS)"
                  value={mlShippingChargeArs}
                  onChange={setMlShippingChargeArs}
                  hint="Podés ajustar este valor con tu dato real o con el simulador oficial."
                />
                <NumberField
                  label="Retenciones por Ingresos Brutos Provinciales (%)"
                  value={iibbPercent}
                  onChange={setIibbPercent}
                  step={0.1}
                  hint="Usualmente ronda 3%, pero puede variar según provincia y situación fiscal."
                />
                {mode === "full" ? (
                  <>
                    <NumberField
                      label="Costo diario de almacenamiento Full por unidad (ARS)"
                      value={fullStoragePerUnitArs}
                      onChange={setFullStoragePerUnitArs}
                      step={0.1}
                      hint="Completalo si querés reflejar almacenamiento Full en el costo unitario."
                    />
                    <NumberField
                      label="Días promedio de almacenamiento en Full"
                      value={averageFullStorageDays}
                      onChange={setAverageFullStorageDays}
                      hint="Se multiplica por el costo diario por unidad."
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>

          <aside style={{ display: "grid", gap: 20 }}>
            <section
              style={{
                background: "#fff",
                border: "1px solid #e7ecf3",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
                display: "grid",
                gap: 16,
              }}
            >
              <div style={{ display: "grid", gap: 8 }}>
                <span style={{ fontWeight: 800, color: "#735c0f", textTransform: "uppercase", fontSize: 12, letterSpacing: 0.5 }}>Resultado</span>
                <div
                  style={{
                    borderRadius: 18,
                    padding: 18,
                    background: profitPositive ? "#f0fdf4" : "#fff1f2",
                    border: profitPositive ? "1px solid #bbf7d0" : "1px solid #fecdd3",
                  }}
                >
                  <div style={{ fontSize: 14, color: profitPositive ? "#166534" : "#b42318", fontWeight: 700 }}>Ganancia neta por unidad</div>
                  <div style={{ fontSize: 34, fontWeight: 900, color: profitPositive ? "#166534" : "#b42318", lineHeight: 1.1, marginTop: 6 }}>
                    {formatCurrency(results.unitProfitArs)}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 14, color: "#475569" }}>
                    Margen estimado: {results.unitMarginPercent.toFixed(1)}%
                  </div>
                </div>
              </div>

              <ResultRow label="Costo unitario puesto en Argentina" value={formatCurrency(results.unitLandedCostArs)} />
              <ResultRow label="Cargo por vender ML" value={formatCurrency(results.mlSellingFeeArs)} />
              <ResultRow label="Cargo fijo estimado de ML" value={formatCurrency(results.mlFixedChargeArs)} />
              <ResultRow label="Costo por cuotas" value={formatCurrency(results.mlFinancingArs)} />
              <ResultRow label="Costo logístico ML" value={formatCurrency(results.mlShippingChargeArs)} />
              {mode === "full" ? <ResultRow label="Almacenamiento Full" value={formatCurrency(results.fullStorageArs)} /> : null}
              <ResultRow label="Retención IIBB" value={formatCurrency(results.iibbArs)} />
              <ResultRow label="Costo total por unidad" value={formatCurrency(results.totalUnitCostArs)} strong />
              <ResultRow label="Ganancia total al vender todo el stock" value={formatCurrency(results.totalExpectedProfitArs)} strong />
            </section>

            <section
              style={{
                background: "#fffef2",
                border: "1px solid #f1e2a4",
                borderRadius: 24,
                padding: 22,
                display: "grid",
                gap: 12,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 18 }}>Cómo usar esta calculadora con criterio</h3>
              <ul style={{ margin: 0, paddingLeft: 20, color: "#475569", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
                <li>Ingresá siempre todos los montos en pesos argentinos (ARS).</li>
                <li>No mezcles costos operativos generales, como internet o alquiler, dentro del costo unitario del producto.</li>
                <li>Usá el simulador oficial de Mercado Libre para confirmar cargos logísticos y variaciones específicas de tu publicación.</li>
                <li>Si el margen queda muy fino, normalmente el problema no es sólo la comisión: también suele estar mal calculado el costo puesto en Argentina.</li>
              </ul>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                Valor sugerido de cargo fijo automático según precio: <strong>{formatCurrency(autoFixedCharge)}</strong>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
