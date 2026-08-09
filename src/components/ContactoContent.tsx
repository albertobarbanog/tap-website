"use client";

import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { platformIconMap } from "@/components/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks, bookingEmail } from "@/lib/data";

export default function ContactoContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <header className="mb-16 text-center">
        <span className="text-xs tracking-wider-label text-text-muted">
          {t("contacto.eyebrow")}
        </span>
        <h1 className="font-display mt-4 text-4xl tracking-wide-label text-text sm:text-5xl">
          {t("contacto.title")}
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_320px]">
        <ContactForm />

        <aside className="flex flex-col gap-10 border-t border-line pt-10 md:border-t-0 md:border-l md:pl-12 md:pt-0">
          <div>
            <span className="text-xs tracking-wide-label text-text-faint">
              {t("contacto.bookingContact")}
            </span>
            <a
              href={`mailto:${bookingEmail}`}
              className="mt-3 flex items-center gap-2 font-mono text-sm text-text transition-colors hover:text-accent"
            >
              <Mail size={14} /> {bookingEmail}
            </a>
          </div>

          <div>
            <span className="text-xs tracking-wide-label text-text-faint">
              {t("contacto.social")}
            </span>
            <div className="mt-4 flex gap-5">
              {socialLinks.map((s) => {
                const Icon = platformIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-xs tracking-wide-label text-text-faint">
              {t("contacto.base")}
            </span>
            <p className="mt-3 text-sm text-text-muted">Santiago, Chile</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
