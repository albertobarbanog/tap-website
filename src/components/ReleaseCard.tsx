"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import AlbumCover from "@/components/AlbumCover";
import StreamLinksRow from "@/components/StreamLinks";
import { useLanguage } from "@/context/LanguageContext";
import type { DictKey } from "@/lib/i18n";
import type { Release } from "@/lib/data";

export default function ReleaseCard({ release }: { release: Release }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const expandable = release.tracklist.length > 1;

  return (
    <article className="flex flex-col">
      <a
        href={release.bandcampUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${release.title} — Bandcamp`}
        className="group relative block aspect-square w-full overflow-hidden bg-bg-elevated"
      >
        {release.coverUrl ? (
          <Image
            src={release.coverUrl}
            alt={`${release.title}${release.edition === "instrumental" ? ` — ${t("discografia.instrumentalEdition")}` : ""}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <AlbumCover
            seed={release.cover.seed}
            label={release.cover.label}
            type={release.type}
            year={release.year}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
          <span className="flex items-center gap-2 text-xs tracking-wide-label text-text">
            {t("discografia.viewOnBandcamp")} <ExternalLink size={13} />
          </span>
        </div>
      </a>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
            {release.title}
            {release.feat && (
              <span className="text-text-muted">
                {" "}
                ({t("discografia.feat")} {release.feat})
              </span>
            )}
          </h3>
          <span className="font-mono text-xs text-text-faint">
            {t(`type.${release.type}` as DictKey)}
            {release.edition === "instrumental"
              ? ` · ${t("discografia.instrumentalEdition")}`
              : ""}{" "}
            · {release.year}
          </span>
          <a
            href={release.bandcampUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-fit items-center gap-1.5 text-xs tracking-wide-label text-accent transition-opacity hover:opacity-75"
          >
            {t("discografia.viewOnBandcamp")} <ExternalLink size={12} />
          </a>
        </div>
        <StreamLinksRow links={release.links} />
      </div>

      {expandable && (
        <div className="mt-6 border-t border-line pt-5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between text-left text-xs tracking-wide-label text-text-muted transition-colors hover:text-accent"
            aria-expanded={open}
          >
            {open
              ? t("discografia.hideTracklist")
              : `${t("discografia.showTracklist")} (${release.tracklist.length})`}
            <ChevronDown
              size={14}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
          {open && (
            <ol className="mt-4 flex flex-col gap-1.5 text-sm text-text-muted">
              {release.tracklist.map((track, i) => (
                <li key={track} className="flex gap-3">
                  <span className="font-mono w-5 shrink-0 text-text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {track}
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {release.tracklist.length === 0 && (
        <div className="mt-6 border-t border-line pt-5 text-sm text-text-faint">
          {t("discografia.tracklistOnPlatforms")}
        </div>
      )}
    </article>
  );
}
