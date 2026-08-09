import type { Lang } from "@/lib/i18n";

export function formatReleaseDate(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString(lang === "en" ? "en-US" : "es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
