"use client";

import ReleaseCard from "@/components/ReleaseCard";
import { useLanguage } from "@/context/LanguageContext";
import type { DictKey } from "@/lib/i18n";
import type { Release } from "@/lib/data";

const CATEGORIES: { type: Release["type"]; labelKey: DictKey }[] = [
  { type: "Álbum", labelKey: "discografia.albums" },
  { type: "EP", labelKey: "discografia.eps" },
  { type: "Single", labelKey: "discografia.singles" },
];

export default function DiscografiaContent({
  releases,
}: {
  releases: Release[];
}) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <header className="mb-16 text-center">
        <span className="text-xs tracking-wider-label text-text-muted">
          {t("discografia.eyebrow")}
        </span>
        <h1 className="font-display mt-4 text-4xl tracking-wide-label text-text sm:text-5xl">
          {t("discografia.title")}
        </h1>
      </header>

      <div className="flex flex-col gap-20">
        {CATEGORIES.map(({ type, labelKey }) => {
          const items = releases.filter((r) => r.type === type);
          if (items.length === 0) return null;
          return (
            <section key={type}>
              <div className="mb-10 flex items-center gap-4">
                <span className="text-xs tracking-wider-label text-text-muted">
                  {t(labelKey)}
                </span>
                <div className="h-px flex-1 bg-line" />
              </div>
              <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
                {items.map((release) => (
                  <ReleaseCard key={release.id} release={release} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
