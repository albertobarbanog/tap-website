export type TicketStatus = "disponible" | "pocas" | "agotado";

export type Concert = {
  id: string;
  date: string; // ISO
  city: string;
  country: string;
  venue: string;
  lineup?: string[];
  status: TicketStatus;
  ticketUrl?: string;
};

export const concerts: Concert[] = [
  {
    id: "club-ambar-2026-08-28",
    date: "2026-08-28",
    city: "Santiago",
    country: "Chile",
    venue: "Club Ámbar",
    lineup: ["Without the Sun", "The Antarctica Project", "Minerva"],
    status: "disponible",
    ticketUrl:
      "https://www.ecopass.cl/events/without-the-sun,-the-antarctica-project-y-minerva----28-agosto---club-ambar/18585",
  },
];

export type PlatformIcon =
  | "spotify"
  | "appleMusic"
  | "tidal"
  | "bandcamp"
  | "facebook"
  | "instagram"
  | "x"
  | "tiktok"
  | "youtube";

export type PlatformLink = {
  label: string;
  href: string;
  icon: PlatformIcon;
};

export const bandcampUrl = "https://theantarcticaproject.bandcamp.com/";
export const youtubeUrl = "https://www.youtube.com/@TheAntarcticaProject";
export const spotifyPlaylistId = "2p0tg4Xiq6Orf53Hs1EAvy";
export const epkUrl = "/press/the-antarctica-project-epk.pdf";

export const streamingLinks: PlatformLink[] = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/intl-es/artist/4DDrHTmwLmDFgv8CoobPjr",
    icon: "spotify",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/cl/artist/the-antarctica-project/1250667517",
    icon: "appleMusic",
  },
  {
    label: "Tidal",
    href: "https://tidal.com/artist/8860486",
    icon: "tidal",
  },
  {
    label: "Bandcamp",
    href: bandcampUrl,
    icon: "bandcamp",
  },
];

export const socialLinks: PlatformLink[] = [
  {
    label: "YouTube",
    href: youtubeUrl,
    icon: "youtube",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theantarcticaproject",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/theantarcticaproject/",
    icon: "instagram",
  },
  {
    label: "X",
    href: "https://x.com/antarcticaproj",
    icon: "x",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@theantarcticaproject",
    icon: "tiktok",
  },
];

export const platformLinks: PlatformLink[] = [...streamingLinks, ...socialLinks];

// Spotify / Apple Music / Tidal don't have confirmed per-release URLs,
// so every release points to the same artist page on those platforms.
// Bandcamp does have a dedicated URL per release (see bandcampUrl on
// each entry below).
const artistLinks = {
  spotify: streamingLinks[0].href,
  appleMusic: streamingLinks[1].href,
  tidal: streamingLinks[2].href,
};

export type ReleaseLinks = {
  spotify?: string;
  appleMusic?: string;
  tidal?: string;
};

export type Release = {
  id: string;
  title: string;
  year: number;
  type: "Álbum" | "EP" | "Single";
  edition?: "instrumental";
  feat?: string;
  tracklist: string[];
  cover: {
    seed: number;
    label: string;
  };
  coverUrl?: string;
  bandcampUrl: string;
  links: ReleaseLinks;
};

export const releases: Release[] = [
  {
    id: "transmute",
    title: "Transmute",
    year: 2018,
    type: "Álbum",
    tracklist: [
      "Arche (02:15)",
      "Illuminate (04:12)",
      "Hohenheim (04:45)",
      "Timebreaker (04:02)",
      "Transmute (05:10)",
      "Okabe (04:38)",
      "Asymmetric Equilibrium (04:20)",
      "Adamant (03:55)",
      "Kiseijū (04:18)",
    ],
    cover: { seed: 1, label: "TRANSMUTE" },
    coverUrl: "https://f4.bcbits.com/img/a1734802841_10.jpg",
    bandcampUrl: "https://theantarcticaproject.bandcamp.com/album/transmute",
    links: artistLinks,
  },
  {
    id: "transmute-instrumental",
    title: "Transmute",
    edition: "instrumental",
    year: 2019,
    type: "Álbum",
    tracklist: [
      "Arche (Instrumental) (02:15)",
      "Illuminate (Instrumental) (04:12)",
      "Hohenheim (Instrumental) (04:45)",
      "Timebreaker (Instrumental) (04:02)",
      "Transmute (Instrumental) (05:10)",
      "Okabe (Instrumental) (04:38)",
      "Asymmetric Equilibrium (Instrumental) (04:20)",
      "Adamant (Instrumental) (03:55)",
      "Kiseijū (Instrumental) (04:18)",
    ],
    cover: { seed: 2, label: "TRANSMUTE" },
    coverUrl: "https://f4.bcbits.com/img/a2976198030_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/album/transmute-instrumental",
    links: artistLinks,
  },
  {
    id: "chromatic-skies",
    title: "Chromatic Skies",
    year: 2024,
    type: "EP",
    tracklist: [
      "An Endless Journey (05:48)",
      "Gemhunter (05:14)",
      "Heavenly Delusion (05:47)",
      "Memories in Monochrome (05:37)",
    ],
    cover: { seed: 3, label: "CHROMATIC SKIES" },
    coverUrl: "https://f4.bcbits.com/img/a0393496470_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/album/chromatic-skies",
    links: artistLinks,
  },
  {
    id: "aim",
    title: "AIM",
    year: 2020,
    type: "EP",
    tracklist: [
      "La Flamme (04:30)",
      "Gemini (05:34)",
      "Animism (03:39)",
      "Silvercord (05:34)",
      "Library of Babel (feat. Joel Holmqvist of Aviana) (05:24)",
    ],
    cover: { seed: 4, label: "AIM" },
    coverUrl: "https://f4.bcbits.com/img/a2062986318_10.jpg",
    bandcampUrl: "https://theantarcticaproject.bandcamp.com/album/aim",
    links: artistLinks,
  },
  {
    id: "aim-instrumental",
    title: "AIM",
    edition: "instrumental",
    year: 2021,
    type: "EP",
    tracklist: [
      "La Flamme (Instrumental) (04:30)",
      "Gemini (Instrumental) (05:34)",
      "Animism (Instrumental) (03:39)",
      "Silvercord (Instrumental) (05:34)",
      "Library of Babel (Instrumental) (05:24)",
    ],
    cover: { seed: 5, label: "AIM" },
    coverUrl: "https://f4.bcbits.com/img/a1263728418_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/album/aim-instrumental-edition",
    links: artistLinks,
  },
  {
    id: "chrono-reverie",
    title: "Chrono Reverie",
    year: 2026,
    type: "Single",
    tracklist: ["Sync01 (01:35)", "Chrono Reverie (04:31)"],
    cover: { seed: 6, label: "CHRONO REVERIE" },
    coverUrl: "https://f4.bcbits.com/img/a3567732241_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/track/chrono-reverie",
    links: artistLinks,
  },
  {
    id: "my-endless-journey",
    title: "My Endless Journey",
    year: 2025,
    type: "Single",
    tracklist: ["My Endless Journey (05:48)"],
    cover: { seed: 7, label: "MY ENDLESS JOURNEY" },
    coverUrl: "https://f4.bcbits.com/img/a1601793616_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/track/my-endless-journey",
    links: artistLinks,
  },
  {
    id: "owari",
    title: "Owari",
    feat: "Destinos & José Ramírez",
    year: 2023,
    type: "Single",
    tracklist: [
      "Owari (feat. Destinos & José Ramírez) (05:19)",
      "Owari (Instrumental) [feat. Destinos] (05:19)",
    ],
    cover: { seed: 8, label: "OWARI" },
    coverUrl: "https://f4.bcbits.com/img/a3260950672_10.jpg",
    bandcampUrl: "https://theantarcticaproject.bandcamp.com/album/owari",
    links: artistLinks,
  },
  {
    id: "faceshifters",
    title: "Faceshifters",
    year: 2021,
    type: "Single",
    tracklist: ["Faceshifters (04:40)", "Faceshifters (Instrumental) (04:40)"],
    cover: { seed: 9, label: "FACESHIFTERS" },
    coverUrl: "https://f4.bcbits.com/img/a4045472061_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/track/faceshifters",
    links: artistLinks,
  },
  {
    id: "ominous-valley-instrumental-single",
    title: "Ominous Valley",
    edition: "instrumental",
    year: 2020,
    type: "Single",
    tracklist: ["Ominous Valley (Instrumental) (04:15)"],
    cover: { seed: 12, label: "OMINOUS VALLEY" },
    coverUrl: "https://f4.bcbits.com/img/a2982072274_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/track/ominous-valley-instrumental",
    links: artistLinks,
  },
  {
    id: "ominous-valley-single",
    title: "Ominous Valley",
    year: 2020,
    type: "Single",
    tracklist: ["Ominous Valley (04:15)"],
    cover: { seed: 11, label: "OMINOUS VALLEY" },
    coverUrl: "https://f4.bcbits.com/img/a2136816651_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/track/ominous-valley",
    links: artistLinks,
  },
  {
    id: "timebreaker",
    title: "Timebreaker",
    year: 2018,
    type: "Single",
    tracklist: ["Timebreaker (04:02)"],
    cover: { seed: 10, label: "TIMEBREAKER" },
    coverUrl: "https://f4.bcbits.com/img/a3990258527_10.jpg",
    bandcampUrl:
      "https://theantarcticaproject.bandcamp.com/track/timebreaker",
    links: artistLinks,
  },
];

export type Member = {
  id: string;
  name: string;
  role: string;
  photo: string;
  instagram: string;
};

export const members: Member[] = [
  {
    id: "joao-riveros",
    name: "João Riveros",
    role: "Voz",
    photo: "/images/members/member-3.jpg",
    instagram: "https://www.instagram.com/joaoriverosr/",
  },
  {
    id: "alberto-barbano",
    name: "Alberto Barbano",
    role: "Guitarra",
    photo: "/images/members/member-1.jpg",
    instagram: "https://www.instagram.com/albertobarbano/",
  },
  {
    id: "felipe-cuevas",
    name: "Felipe Cuevas",
    role: "Guitarra",
    photo: "/images/members/member-2.jpg",
    instagram: "https://www.instagram.com/destinos1990/",
  },
  {
    id: "gustavo-plaza",
    name: "Gustavo Plaza",
    role: "Bajo",
    photo: "/images/members/member-5.jpg",
    instagram: "https://www.instagram.com/gustavoplazam/",
  },
  {
    id: "andres-olivares",
    name: "Andrés Olivares",
    role: "Batería",
    photo: "/images/members/member-4.jpg",
    instagram: "https://www.instagram.com/ndrms_/",
  },
];

export const bookingEmail = "theantarcticaprojectinfo@gmail.com";

export const merchUrl =
  "https://www.merchprojectcl.cl/catalogo/the-antarctica-project";

export const latestVideoUrl = "https://www.youtube.com/watch?v=Dz6wGePMQKM";
