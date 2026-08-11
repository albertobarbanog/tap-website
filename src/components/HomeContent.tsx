"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Disc3,
  Download,
  Play,
  ShoppingBag,
  Users,
} from "lucide-react";
import AlbumCover from "@/components/AlbumCover";
import NextShow from "@/components/NextShow";
import FotoCarousel from "@/components/FotoCarousel";
import SurveyForm from "@/components/SurveyForm";
import { YoutubeIcon, PayPalIcon } from "@/components/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";
import type { DictKey } from "@/lib/i18n";
import { formatReleaseDate } from "@/lib/formatDate";
import type { Release, Concert } from "@/lib/data";
import {
  merchUrl,
  latestVideoUrl,
  youtubeUrl,
  spotifyPlaylistId,
  youtubePlaylistId,
  epkUrl,
  paypalUrl,
} from "@/lib/data";

export default function HomeContent({
  latest,
  nextShow,
  bandaPhotos,
}: {
  latest: Release;
  nextShow: Concert | undefined;
  bandaPhotos: string[];
}) {
  const { t, lang } = useLanguage();

  return (
    <div>
      <section className="relative -mt-px flex h-[calc(100vh-61px)] min-h-[560px] w-full items-end overflow-hidden bg-black md:h-[calc(100vh-110px)]">
        <Image
          src="/images/hero-band-mobile.jpg"
          alt="The Antarctica Project"
          fill
          priority
          sizes="100vw"
          className="block object-cover opacity-70 grayscale md:hidden"
        />
        <Image
          src="/images/hero-band.jpg"
          alt="The Antarctica Project"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center opacity-70 grayscale md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 text-center sm:pb-24">
          <span className="font-mono text-[11px] tracking-wider-label text-accent">
            {t("home.eyebrow")}
          </span>
          <h1 className="font-display mt-5 text-balance text-4xl leading-[1.05] tracking-wide-label text-text sm:text-6xl md:text-7xl">
            THE ANTARCTICA
            <br />
            PROJECT
          </h1>
          <div className="mt-6 h-px w-16 bg-accent-dim" />
          <p className="mt-6 max-w-md text-balance text-sm leading-relaxed text-text-muted sm:text-base">
            {t("home.tagline")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={latestVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-text px-7 py-3 text-xs tracking-wide-label text-text transition-colors hover:border-accent hover:text-accent"
            >
              <Play size={13} className="fill-current" />
              {t("home.watchVideo")}
            </a>
            <Link
              href="/conciertos"
              className="px-7 py-3 text-xs tracking-wide-label text-text-muted transition-colors hover:text-accent"
            >
              {t("home.upcomingShows")}
            </Link>
          </div>
        </div>

        <a
          href="#proximos-shows"
          aria-label={t("home.nextSectionAria")}
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-text-faint transition-colors hover:text-accent sm:block"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </section>

      {nextShow && (
        <section
          id="proximos-shows"
          className="scroll-mt-[61px] border-t border-line bg-bg-elevated md:scroll-mt-[110px]"
        >
          <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm tracking-wider-label text-text-muted">
                {t("home.nextShow")}
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>

            <NextShow concert={nextShow} />

            <Link
              href="/conciertos"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-accent-dim pb-1 text-xs tracking-wide-label text-accent transition-opacity hover:opacity-75"
            >
              {t("home.seeAllDates")} <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.latestRelease")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[340px_1fr] md:gap-16">
            {latest.coverUrl ? (
              <div className="relative aspect-square w-full max-w-sm overflow-hidden bg-bg-elevated">
                <Image
                  src={latest.coverUrl}
                  alt={latest.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover"
                />
              </div>
            ) : (
              <AlbumCover
                seed={latest.cover.seed}
                label={latest.cover.label}
                type={latest.type}
                year={latest.year}
                className="max-w-sm"
              />
            )}

            <div className="flex flex-col justify-center">
              <span className="font-mono text-xs tracking-wide-label text-text-muted">
                {t(`type.${latest.type}` as DictKey).toUpperCase()} ·{" "}
                {formatReleaseDate(latest.releaseDate, lang)}
              </span>
              <h2 className="font-display mt-3 text-3xl tracking-wide-label text-text sm:text-4xl">
                {latest.title}
              </h2>
              <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-text-muted sm:grid-cols-2">
                {latest.tracklist.map((track, i) => (
                  <li key={track} className="flex gap-3">
                    <span className="font-mono text-text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {track}
                  </li>
                ))}
              </ol>
              <Link
                href="/discografia"
                className="mt-10 inline-flex w-fit items-center gap-2 border-b border-accent-dim pb-1 text-xs tracking-wide-label text-accent transition-opacity hover:opacity-75"
              >
                {t("home.seeFullDiscography")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {bandaPhotos.length > 0 && (
        <section className="border-t border-line bg-bg-elevated">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm tracking-wider-label text-text-muted">
                {t("home.gallery")}
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>

            <FotoCarousel photos={bandaPhotos} />
          </div>
        </section>
      )}

      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.videos")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-8 border border-line bg-bg-elevated p-10 transition-colors hover:border-accent sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-5">
              <YoutubeIcon
                size={34}
                className="text-text-muted transition-colors group-hover:text-accent"
              />
              <div>
                <span className="font-display block text-xl font-semibold tracking-wide-label text-text">
                  YouTube
                </span>
                <span className="mt-1 block max-w-md text-sm text-text-muted">
                  {t("home.videosDesc")}
                </span>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-2 text-xs tracking-wide-label text-accent">
              {t("home.videosCta")} <ArrowRight size={14} />
            </span>
          </a>

          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              title="YouTube Playlist"
              src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylistId}`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.playlist")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <p className="mb-6 text-sm text-text-muted">
            {t("home.playlistDesc")}
          </p>

          <div className="overflow-hidden rounded-xl bg-black">
            <iframe
              title="Spotify Playlist"
              src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
              width="100%"
              height="450"
              style={{ border: "none", backgroundColor: "#000000" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.press")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <a
            href={epkUrl}
            download
            className="group flex flex-col items-start justify-between gap-8 border border-line bg-bg-elevated p-10 transition-colors hover:border-accent sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-5">
              <Download
                size={30}
                className="text-text-muted transition-colors group-hover:text-accent"
              />
              <div>
                <span className="font-display block text-xl font-semibold tracking-wide-label text-text">
                  EPK
                </span>
                <span className="mt-1 block max-w-md text-sm text-text-muted">
                  {t("home.pressDesc")}
                </span>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-2 text-xs tracking-wide-label text-accent">
              {t("home.pressCta")} <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </section>

      <section className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.survey")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <p className="mb-10 max-w-lg text-sm text-text-muted">
            {t("home.surveyDesc")}
          </p>

          <SurveyForm />
        </div>
      </section>

      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.support")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <p className="mb-10 max-w-lg text-sm text-text-muted">
            {t("home.supportDesc")}
          </p>

          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 border border-text px-7 py-3 text-xs tracking-wide-label text-text transition-colors hover:border-accent hover:text-accent"
          >
            <PayPalIcon size={16} />
            {t("home.supportCta")}
          </a>
        </div>
      </section>

      <section className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm tracking-wider-label text-text-muted">
              {t("home.quickLinks")}
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            <QuickLink
              href="/conciertos"
              icon={<CalendarDays size={22} />}
              label={t("home.qlShows")}
              desc={t("home.qlShowsDesc")}
            />
            <QuickLink
              href="/discografia"
              icon={<Disc3 size={22} />}
              label={t("home.qlDiscography")}
              desc={t("home.qlDiscographyDesc")}
            />
            <QuickLink
              href={merchUrl}
              external
              icon={<ShoppingBag size={22} />}
              label={t("home.qlMerch")}
              desc={t("home.qlMerchDesc")}
            />
            <QuickLink
              href="/banda/historia"
              icon={<Users size={22} />}
              label={t("home.qlBand")}
              desc={t("home.qlBandDesc")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickLink({
  href,
  icon,
  label,
  desc,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  desc: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex h-full flex-col justify-between bg-bg-elevated p-8 transition-colors hover:bg-bg-card">
      <div className="text-text-muted transition-colors group-hover:text-accent">
        {icon}
      </div>
      <div className="mt-10">
        <span className="font-display block text-lg font-semibold tracking-wide-label text-text">
          {label}
        </span>
        <span className="mt-1 block text-xs text-text-faint">{desc}</span>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
