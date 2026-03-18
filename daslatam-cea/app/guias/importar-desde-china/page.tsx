import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/lib/content";
export const metadata: Metadata = { title: "Errores al importar desde China" };
export default function Page() { return <div className="content-theme page-stack"><GuidePage content={guides.importarChina} /></div>; }
