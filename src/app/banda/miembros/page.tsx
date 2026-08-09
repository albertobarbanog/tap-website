import type { Metadata } from "next";
import MiembrosContent from "@/components/MiembrosContent";
import { members } from "@/lib/data";

export const metadata: Metadata = {
  title: "Miembros — The Antarctica Project",
  description: "Integrantes de The Antarctica Project.",
};

export default function MiembrosPage() {
  return <MiembrosContent members={members} />;
}
