import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/lib/content";

export default function Page() {
  return <GuidePage content={guides.importacionCourier} />;
}
