"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wide-label">
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={
          lang === "es"
            ? "text-accent"
            : "text-text-faint transition-colors hover:text-text"
        }
      >
        ES
      </button>
      <span className="text-text-faint">/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          lang === "en"
            ? "text-accent"
            : "text-text-faint transition-colors hover:text-text"
        }
      >
        EN
      </button>
    </div>
  );
}
