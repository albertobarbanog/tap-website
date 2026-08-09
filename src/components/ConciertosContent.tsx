"use client";

import NextShow from "@/components/NextShow";
import { useLanguage } from "@/context/LanguageContext";
import type { Concert } from "@/lib/data";

export default function ConciertosContent({
  concerts,
}: {
  concerts: Concert[];
}) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <header className="mb-16 text-center">
        <span className="text-xs tracking-wider-label text-text-muted">
          {t("conciertos.eyebrow")}
        </span>
        <h1 className="font-display mt-4 text-4xl tracking-wide-label text-text sm:text-5xl">
          {t("conciertos.title")}
        </h1>
      </header>

      {concerts.length > 0 ? (
        <div className="flex flex-col gap-6">
          {concerts.map((c) => (
            <NextShow key={c.id} concert={c} />
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-text-muted">
          {t("conciertos.empty")}
        </p>
      )}

      <p className="mt-12 text-center text-sm text-text-faint">
        {t("conciertos.footerNote")}
      </p>
    </div>
  );
}
