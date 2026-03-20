"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { calculateMlCosts, type CostInputs } from "@/lib/calc/mlCostCalculator";

const defaultInputs: CostInputs = {
  mode: "full",
  salePrice: 45000,
  sellingFeePct: 14.5,
  installmentsPct: 0,
  iibbPct: 3,
  fixedCharge: 0,
  chinaCost: 9000,
  freightToArgentina: 5000,
  packagingCost: 600,
  labelingCost: 250,
  lengthCm: 28,
  widthCm: 20,
  heightCm: 12,
  weightKg: 0.8,
  manualLogisticsCost: 0,
  useManualLogisticsCost: false,
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);

function NumberField({ label, value, onChange, step = "0.01", hint }: { label: string; value: number; onChange: (value: number) => void; step?: string; hint?: string }) {
  return (
    <label style={{ display: "grid", gap: 8 }}>
      <span style={{ fontWeight: 700 }}>{label}</span>
      <input
        type="number"
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid #d1d5db", fontSize: 16 }}
      />
      {hint ? <small style={{ color: "#6b7280", lineHeight: 1.4 }}>{hint}</small> : null}
    </label>
  );
}

export default function CostCalculator() {
  const [inputs, setInputs] = useState<CostInputs>(defaultInputs);

  const result = useMemo(() => calculateMlCosts(inputs), [inputs]);

  const setField = <K extends keyof CostInputs>(field: K, value: CostInputs[K]) => {
    setInputs((current) => ({ ...current, [field]: value }));
  };

  return (
    <main style={{ maxWidth: 1240, margin: "0 auto", padding: "32px 20px 64px" }}>
      <section style={{ display: "grid", gap: 16, marginBottom: 28 }}>
        <span style={{ display: "inline-flex", width: "fit-content", padding: "8px 12px", borderRadius: 999, background: "#fff7cc", color: "#6b5d00", fontWeight: 700 }}>
          Herramienta CEA
        </span>
        <div>
          <h1 style={{ margin: "0 0 10px", fontSize: 38, lineHeight: 1.08 }}>Calculadora de costos real para Mercado Libre</h1>
          <p style={{ margin: 0, maxWidth: 900, color: "#4b5563", fontSize: 18, lineHeight: 1.7 }}>
            Cargá precio de venta, modalidad logística, medidas, peso y costos reales del producto para estimar gastos, retenciones y ganancia final. La calculadora está pensada para tomar decisiones rápidas antes de comprar, importar o publicar.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/herramientas" style={{ textDecoration: "none", fontWeight: 700, color: "#0f62fe" }}>← Volver a Herramientas</Link>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) minmax(320px, 0.75fr)", gap: 24, alignItems: "start" }}>
        <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e5e7eb", boxShadow: "0 14px 40px rgba(15,23,42,0.06)", padding: 24, display: "grid", gap: 28 }}>
          <div style={{ display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>1. Modalidad y precio de venta</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              <label style={{ display: "grid", gap: 8 }}>
                <span style={{ fontWeight: 700 }}>Modalidad logística</span>
                <select
                  value={inputs.mode}
                  onChange={(e) => setField("mode", e.target.value as CostInputs["mode"])}
                  style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid #d1d5db", fontSize: 16 }}
                >
                  <option value="full">Mercado Envíos Full</option>
                  <option value="standard">Vendedor Estándar / Logística propia</option>
                </select>
                <small style={{ color: "#6b7280", lineHeight: 1.4 }}>
                  Full puede reducir el costo del envío gratis en productos desde $ 30.000.
                </small>
              </label>

              <NumberField label="Precio de venta" value={inputs.salePrice} onChange={(value) => setField("salePrice", value)} step="1" hint="Base sobre la que se calculan comisión, cuotas e IIBB." />
            </div>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>2. Cargos y retenciones de Mercado Libre</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              <NumberField label="Cargo por vender (%)" value={inputs.sellingFeePct} onChange={(value) => setField("sellingFeePct", value)} hint="Varía por categoría y provincia. Usá la alícuota que te corresponda o el simulador oficial de ML." />
              <NumberField label="Costo fijo por unidad" value={inputs.fixedCharge} onChange={(value) => setField("fixedCharge", value)} step="1" hint="Aplicalo sólo si tu publicación queda alcanzada por el costo fijo adicional." />
              <NumberField label="Costo por cuotas (%)" value={inputs.installmentsPct} onChange={(value) => setField("installmentsPct", value)} hint="Si ofrecés 3 a 12 cuotas, ML informa un 5% adicional." />
              <NumberField label="Retención IIBB (%)" value={inputs.iibbPct} onChange={(value) => setField("iibbPct", value)} hint="SIRTAC/COMARB puede variar hasta 5%. Si querés, dejalo en 0 y cargalo luego con tu padrón real." />
            </div>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>3. Costos del producto</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              <NumberField label="Precio en China" value={inputs.chinaCost} onChange={(value) => setField("chinaCost", value)} step="1" />
              <NumberField label="Envío a Argentina" value={inputs.freightToArgentina} onChange={(value) => setField("freightToArgentina", value)} step="1" hint="Costo total prorrateado por unidad hasta tu stock en Argentina." />
              <NumberField label="Costo de embalaje" value={inputs.packagingCost} onChange={(value) => setField("packagingCost", value)} step="1" />
              <NumberField label="Costo de etiquetado" value={inputs.labelingCost} onChange={(value) => setField("labelingCost", value)} step="1" />
            </div>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 24 }}>4. Medidas y peso</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
              <NumberField label="Largo (cm)" value={inputs.lengthCm} onChange={(value) => setField("lengthCm", value)} step="0.1" />
              <NumberField label="Ancho (cm)" value={inputs.widthCm} onChange={(value) => setField("widthCm", value)} step="0.1" />
              <NumberField label="Alto (cm)" value={inputs.heightCm} onChange={(value) => setField("heightCm", value)} step="0.1" />
              <NumberField label="Peso (kg)" value={inputs.weightKg} onChange={(value) => setField("weightKg", value)} step="0.01" />
            </div>

            <div style={{ display: "grid", gap: 12, padding: 18, borderRadius: 16, background: "#f8fafc", border: "1px solid #e5e7eb" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                <input
                  type="checkbox"
                  checked={inputs.useManualLogisticsCost}
                  onChange={(e) => setField("useManualLogisticsCost", e.target.checked)}
                />
                Usar costo logístico manual
              </label>
              <NumberField
                label="Costo logístico manual"
                value={inputs.manualLogisticsCost}
                onChange={(value) => setField("manualLogisticsCost", value)}
                step="1"
                hint="Si ya conocés el valor que te cobrará ML o tu operador, cargalo acá y prevalece sobre la estimación automática."
              />
            </div>
          </div>
        </div>

        <aside style={{ display: "grid", gap: 18, position: "sticky", top: 24 }}>
          <div style={{ background: result.isPositive ? "#effcf4" : "#fff1f2", border: `1px solid ${result.isPositive ? "#b7ebc6" : "#fecdd3"}`, borderRadius: 20, padding: 24, boxShadow: "0 14px 40px rgba(15,23,42,0.06)" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase", color: result.isPositive ? "#18794e" : "#b42318" }}>
              Resultado final
            </p>
            <div style={{ marginTop: 10, fontSize: 42, lineHeight: 1, fontWeight: 800, color: result.isPositive ? "#18794e" : "#b42318" }}>
              {formatMoney(result.profit)}
            </div>
            <p style={{ margin: "10px 0 0", color: "#475467", lineHeight: 1.6 }}>
              {result.isPositive ? "Ganancia estimada por unidad" : "Pérdida estimada por unidad"}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
              <div style={{ padding: 14, borderRadius: 14, background: "rgba(255,255,255,0.7)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#667085", textTransform: "uppercase" }}>Margen</div>
                <div style={{ marginTop: 6, fontSize: 24, fontWeight: 800 }}>{result.marginPct}%</div>
              </div>
              <div style={{ padding: 14, borderRadius: 14, background: "rgba(255,255,255,0.7)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#667085", textTransform: "uppercase" }}>Contribución</div>
                <div style={{ marginTop: 6, fontSize: 24, fontWeight: 800 }}>{result.contributionPct}%</div>
              </div>
            </div>
          </div>

          <div style={{ background: "#111827", color: "#fff", borderRadius: 20, padding: 24 }}>
            <h3 style={{ margin: "0 0 14px", fontSize: 22 }}>Desglose</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                ["Cargo por vender", result.sellingFee],
                ["Costo por cuotas", result.installmentsFee],
                ["Retención IIBB", result.iibbRetention],
                ["Costo fijo ML", inputs.fixedCharge],
                ["Logística", result.logisticsCostCharged],
                ["Costo producto", result.totalProductCost],
                ["Costo total", result.totalCosts],
              ].map(([label, value]) => (
                <div key={String(label)} style={{ display: "flex", justifyContent: "space-between", gap: 12, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ color: "#d1d5db" }}>{label}</span>
                  <strong>{formatMoney(Number(value))}</strong>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: 22 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 22 }}>Lectura operativa</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#4b5563", lineHeight: 1.7 }}>
              <li>Si la ganancia queda en rojo, primero revisá precio, costo en China y logística.</li>
              <li>Usá Full sólo si la velocidad y el costo del envío justifican la operación.</li>
              <li>El costo logístico automático es una referencia rápida: si ya tenés tu tarifa real, activá el valor manual.</li>
              <li>Revisá la alícuota de IIBB según tu padrón porque puede mover el margen de forma sensible.</li>
            </ul>
          </div>

          <div style={{ background: "#fff9db", border: "1px solid #fde68a", borderRadius: 20, padding: 22 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 22 }}>Dato CEA</h3>
            <p style={{ margin: 0, color: "#5b4a00", lineHeight: 1.7 }}>
              Si el producto no resiste una comisión de Mercado Libre, logística y una retención moderada de IIBB, probablemente no sea un buen candidato para vender masivamente. Esta calculadora sirve para filtrar antes de comprar stock.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
