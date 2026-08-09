"use client";

import Image from "next/image";
import { InstagramIcon } from "@/components/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";
import type { DictKey } from "@/lib/i18n";
import type { Member } from "@/lib/data";

export default function MiembrosContent({ members }: { members: Member[] }) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <header className="mb-16 text-center">
        <span className="text-xs tracking-wider-label text-text-faint">
          {t("miembros.eyebrow")}
        </span>
        <h1 className="font-display mt-4 text-4xl tracking-wide-label text-text sm:text-5xl">
          {t("miembros.title")}
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <article key={m.id} className="group">
            <a
              href={m.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} — Instagram`}
              className="relative block aspect-[4/5] w-full overflow-hidden bg-bg-elevated"
            >
              <Image
                src={m.photo}
                alt={m.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-accent mix-blend-color opacity-0 transition-opacity duration-700 group-hover:opacity-20" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <span className="flex items-center gap-2 text-xs tracking-wide-label text-text">
                  <InstagramIcon size={16} />
                  Instagram
                </span>
              </div>
            </a>
            <div className="mt-5">
              <h2 className="font-display text-xl tracking-wide-label text-text">
                {m.name}
              </h2>
              <span className="font-mono text-xs tracking-wide-label text-accent">
                {t(`role.${m.role}` as DictKey).toUpperCase()}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
