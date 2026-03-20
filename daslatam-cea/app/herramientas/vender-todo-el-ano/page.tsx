import Link from "next/link";
import YearRoundSalesPlanner from "@/components/tools/YearRoundSalesPlanner";

export default function VenderTodoElAnoPage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 64px" }}>
      <div style={{ marginBottom: 18, fontSize: 14, color: "#64748b" }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          Inicio
        </Link>{" "}
        /{" "}
        <Link href="/herramientas" style={{ color: "inherit", textDecoration: "none" }}>
          Herramientas
        </Link>{" "}
        / Vender todo el año
      </div>

      <YearRoundSalesPlanner />
    </main>
  );
}
