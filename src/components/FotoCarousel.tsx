"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { useLanguage } from "@/context/LanguageContext";

export default function FotoCarousel({ photos }: { photos: string[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  function scrollByAmount(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  }

  if (photos.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((src, i) => (
          <button
            type="button"
            key={src}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/5] w-[72%] shrink-0 snap-start overflow-hidden bg-bg-elevated text-left sm:w-[42%] lg:w-[28%]"
          >
            <Image
              src={src}
              alt="The Antarctica Project"
              fill
              sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 28vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <Expand size={22} className="text-text" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label={t("lightbox.prev")}
          className="flex h-10 w-10 items-center justify-center border border-line text-text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label={t("lightbox.next")}
          className="flex h-10 w-10 items-center justify-center border border-line text-text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
