import { EditorialPage } from "@/components/content/EditorialPage";
import { editorialPages } from "@/lib/content/editorial";

export default function Page() {
  return <EditorialPage page={editorialPages["guias-peso-y-fragilidad"]} />;
}
