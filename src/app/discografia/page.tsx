import type { Metadata } from "next";
import DiscografiaContent from "@/components/DiscografiaContent";
import { releases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Discografía — The Antarctica Project",
  description: "Álbumes, EPs y singles de The Antarctica Project.",
};

export default function DiscografiaPage() {
  return <DiscografiaContent releases={releases} />;
}
