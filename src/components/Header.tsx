"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { platformIconMap } from "@/components/BrandIcons";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { merchUrl, platformLinks } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const bandaLinks = [
    { label: t("nav.history"), href: "/banda/historia" },
    { label: t("nav.members"), href: "/banda/miembros" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBandaOpen, setMobileBandaOpen] = useState(false);
  const [desktopBandaOpen, setDesktopBandaOpen] = useState(false);
  const bandaRef = useRef<HTMLDivElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setDesktopBandaOpen(false);
  }

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (bandaRef.current && !bandaRef.current.contains(e.target as Node)) {
        setDesktopBandaOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const isBandaActive = pathname?.startsWith("/banda");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6">
        <div className="relative flex w-full items-center justify-between py-4 md:justify-center">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={t("nav.homeAria")}
          >
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={30}
              height={37}
              className="h-7 w-auto shrink-0 opacity-90 sm:h-8"
              priority
            />
            <span className="font-display whitespace-nowrap text-[10px] tracking-wide-label text-text sm:text-lg sm:tracking-wider-label">
              THE ANTARCTICA PROJECT
            </span>
          </Link>

          <div className="flex items-center gap-4 md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="text-text md:hidden"
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className="relative hidden w-full items-center justify-center gap-8 border-t border-line py-3.5 text-xs tracking-wide-label text-text-muted md:flex">
          <NavLink href="/" current={pathname === "/"}>
            {t("nav.home")}
          </NavLink>
          <NavLink href="/conciertos" current={pathname === "/conciertos"}>
            {t("nav.shows")}
          </NavLink>
          <a
            href={merchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {t("nav.merch")}
          </a>
          <NavLink href="/discografia" current={pathname === "/discografia"}>
            {t("nav.discography")}
          </NavLink>

          <div
            className="relative"
            ref={bandaRef}
            onMouseLeave={() => setDesktopBandaOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDesktopBandaOpen(true)}
              onMouseEnter={() => setDesktopBandaOpen(true)}
              className={`flex items-center gap-1 transition-colors hover:text-accent ${
                isBandaActive ? "text-accent" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={desktopBandaOpen}
            >
              {t("nav.band")}
              <ChevronDown
                size={13}
                className={`transition-transform ${desktopBandaOpen ? "rotate-180" : ""}`}
              />
            </button>
            {desktopBandaOpen && (
              <div className="absolute left-1/2 top-full w-44 -translate-x-1/2 border border-line bg-bg-elevated pt-3 pb-2">
                <div className="flex flex-col">
                  {bandaLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`px-5 py-2 text-center tracking-wide-label transition-colors hover:text-accent ${
                        pathname === l.href ? "text-accent" : "text-text-muted"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink href="/contacto" current={pathname === "/contacto"}>
            {t("nav.contact")}
          </NavLink>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-2.5 xl:flex">
            {platformLinks.map((p) => {
              const Icon = platformIconMap[p.icon];
              return (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.label}
                  className="text-text-faint transition-colors hover:text-accent"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="flex flex-col px-6 py-4 text-sm tracking-wide-label text-text-muted">
            <MobileLink href="/" current={pathname === "/"}>
              {t("nav.home")}
            </MobileLink>
            <MobileLink
              href="/conciertos"
              current={pathname === "/conciertos"}
            >
              {t("nav.shows")}
            </MobileLink>
            <a
              href={merchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line/60 py-3.5"
            >
              {t("nav.merch")}
            </a>
            <MobileLink
              href="/discografia"
              current={pathname === "/discografia"}
            >
              {t("nav.discography")}
            </MobileLink>

            <button
              type="button"
              onClick={() => setMobileBandaOpen((v) => !v)}
              className={`flex items-center justify-between border-b border-line/60 py-3.5 text-left ${
                isBandaActive ? "text-accent" : ""
              }`}
              aria-expanded={mobileBandaOpen}
            >
              {t("nav.band")}
              <ChevronDown
                size={14}
                className={`transition-transform ${mobileBandaOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileBandaOpen && (
              <div className="flex flex-col border-b border-line/60 pl-4">
                {bandaLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`py-3 ${pathname === l.href ? "text-accent" : ""}`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <MobileLink href="/contacto" current={pathname === "/contacto"}>
              {t("nav.contact")}
            </MobileLink>

            <div className="mt-5 flex flex-wrap gap-4">
              {platformLinks.map((p) => {
                const Icon = platformIconMap[p.icon];
                return (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.label}
                    className="text-text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-accent ${current ? "text-accent" : ""}`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`border-b border-line/60 py-3.5 ${current ? "text-accent" : ""}`}
    >
      {children}
    </Link>
  );
}
