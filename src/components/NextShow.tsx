"use client";

import { Clock, MapPin, Ticket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Concert } from "@/lib/data";

function formatDate(iso: string, locale: string) {
  const d = new Date(`${iso}T12:00:00`);
  const day = d.toLocaleDateString(locale, { day: "2-digit" });
  const month = d.toLocaleDateString(locale, { month: "long" }).toUpperCase();
  const year = d.toLocaleDateString(locale, { year: "numeric" });
  return { day, month, year };
}

export default function NextShow({ concert }: { concert: Concert }) {
  const { lang, t } = useLanguage();
  const { day, month, year } = formatDate(
    concert.date,
    lang === "en" ? "en-US" : "es-CL",
  );

  return (
    <div className="border border-line bg-bg-elevated">
      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr]">
        <div className="flex flex-row items-center justify-center gap-2 border-b border-line px-6 py-8 sm:flex-col sm:gap-1 sm:border-b-0 sm:border-r sm:py-10">
          <span className="font-display text-4xl font-semibold text-text sm:text-5xl">
            {day}
          </span>
          <div className="flex flex-col sm:items-center">
            <span className="font-mono text-xs tracking-wide-label text-accent">
              {month}
            </span>
            <span className="font-mono text-xs text-text-faint">{year}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 px-8 py-10">
          {concert.title && (
            <span className="font-display text-xl font-semibold tracking-wide-label text-text sm:text-2xl">
              {concert.title}
            </span>
          )}

          {concert.lineup && (
            <div className="flex flex-col gap-1.5">
              {concert.lineup.map((act) => {
                const isBand = act === "The Antarctica Project";
                return (
                  <span
                    key={act}
                    className={
                      isBand && !concert.title
                        ? "font-display text-xl font-semibold tracking-wide-label text-text sm:text-2xl"
                        : "text-sm text-text-muted"
                    }
                  >
                    {act}
                  </span>
                );
              })}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={14} className="text-text-faint" />
              {concert.venue}, {concert.city}
            </span>
            {concert.time && (
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-text-faint" />
                {concert.time} hrs
              </span>
            )}
          </div>

          {concert.ticketUrl && (
            <a
              href={concert.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 border border-text px-7 py-3 text-xs tracking-wide-label text-text transition-colors hover:border-accent hover:text-accent"
            >
              <Ticket size={14} /> {t("conciertos.buyTickets")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
