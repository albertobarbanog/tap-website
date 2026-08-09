import type { Metadata } from "next";
import HistoriaContent from "@/components/HistoriaContent";

export const metadata: Metadata = {
  title: "Historia — The Antarctica Project",
  description: "Biografía oficial de The Antarctica Project.",
};

export default function HistoriaPage() {
  return <HistoriaContent />;
}
