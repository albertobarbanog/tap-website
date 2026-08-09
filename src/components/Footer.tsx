"use client";

import Link from "next/link";
import { platformIconMap } from "@/components/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";
import {
  socialLinks,
  streamingLinks,
  merchUrl,
  bookingEmail,
} from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.shows"), href: "/conciertos" },
    { label: t("nav.discography"), href: "/discografia" },
    { label: t("nav.history"), href: "/banda/historia" },
    { label: t("nav.members"), href: "/banda/miembros" },
    { label: t("nav.contact"), href: "/contacto" },
  ];

  return (
    <footer className="relative z-10 border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="font-display text-sm tracking-wider-label text-text">
              THE ANTARCTICA PROJECT
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              {t("footer.tagline")}
            </p>

            <span className="mt-7 block text-xs tracking-wide-label text-text-faint">
              {t("footer.listen")}
            </span>
            <div className="mt-3 flex gap-5">
              {streamingLinks.map((s) => {
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
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <span className="mt-6 block text-xs tracking-wide-label text-text-faint">
              {t("footer.follow")}
            </span>
            <div className="mt-3 flex gap-5">
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
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-xs tracking-wide-label text-text-faint">
              {t("footer.links")}
            </span>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-text-muted">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={merchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {t("nav.merch")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs tracking-wide-label text-text-faint">
              {t("footer.booking")}
            </span>
            <p className="mt-4 text-sm text-text-muted">
              <a
                href={`mailto:${bookingEmail}`}
                className="font-mono transition-colors hover:text-accent"
              >
                {bookingEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-text-faint md:flex-row">
          <span>
            © {new Date().getFullYear()} The Antarctica Project.{" "}
            {t("footer.rights")}
          </span>
          <span className="font-mono tracking-wide-label">
            LAT 62°S — LONG 58°W
          </span>
        </div>
      </div>
    </footer>
  );
}
