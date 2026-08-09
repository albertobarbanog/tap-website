"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const { t } = useLanguage();

  const goPrev = useCallback(
    () => onNavigate((index - 1 + photos.length) % photos.length),
    [index, photos.length, onNavigate],
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % photos.length),
    [index, photos.length, onNavigate],
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-10"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t("lightbox.close")}
        className="absolute right-4 top-4 z-10 text-text-muted transition-colors hover:text-accent sm:right-8 sm:top-8"
      >
        <X size={26} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label={t("lightbox.prev")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-2 text-text-muted transition-colors hover:text-accent sm:left-6"
      >
        <ChevronLeft size={30} />
      </button>

      <div
        className="relative h-[75vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photos[index]}
          alt="The Antarctica Project"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label={t("lightbox.next")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-2 text-text-muted transition-colors hover:text-accent sm:right-6"
      >
        <ChevronRight size={30} />
      </button>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-text-faint">
        {index + 1} / {photos.length}
      </span>
    </div>
  );
}
