import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/lib/content";
export const metadata: Metadata = { title: "Peso, volumen y fragilidad" };
export default function Page() { return <div className="content-theme page-stack"><GuidePage content={guides.pesoFragilidad} /></div>; }
