import type { Metadata } from "next";
import ConciertosContent from "@/components/ConciertosContent";
import { concerts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conciertos — The Antarctica Project",
  description: "Próximas fechas y shows de The Antarctica Project.",
};

export default function ConciertosPage() {
  return <ConciertosContent concerts={concerts} />;
}
