type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.5 7.2a3 3 0 00-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.4.5A3 3 0 001.5 7.2 31 31 0 001 12a31 31 0 00.5 4.8 3 3 0 002.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 002.1-2.1A31 31 0 0023 12a31 31 0 00-.5-4.8zM9.8 15.3V8.7L15.6 12l-5.8 3.3z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6H16.8V3.5c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.44-3.96 4.07v2.27H7.7v3.3h2.76V22h3.04z" />
    </svg>
  );
}

export function SpotifyIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34a.75.75 0 01-1.032.24c-2.82-1.716-6.36-2.106-10.536-1.152a.75.75 0 01-.336-1.464c4.572-1.044 8.472-.6 11.628 1.332a.75.75 0 01.276 1.044zm1.464-3.264a.9.9 0 01-1.236.288c-3.228-1.98-8.148-2.556-11.964-1.392a.9.9 0 11-.528-1.716c4.356-1.332 9.792-.684 13.5 1.584a.9.9 0 01.228 1.236zm.132-3.396C15.24 8.28 8.82 8.064 5.16 9.192a1.08 1.08 0 11-.636-2.064c4.2-1.284 11.208-1.032 15.636 1.62a1.08 1.08 0 11-1.116 1.848z" />
    </svg>
  );
}

export function XIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.6 10.6 20.7 2h-2l-6.2 7.4L7.5 2H2l7.4 10.7L2 22h2l6.6-7.9 5.4 7.9H22l-8.4-11.4zm-2.3 2.8-.8-1.1L4.7 3.5h2.6l4.9 7 .8 1.1 6.5 9.2h-2.6l-5.2-7.4z" />
    </svg>
  );
}

export function TikTokIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 2h-3.3v13.9c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 01-2.9-2.9 2.9 2.9 0 012.9-2.9c.3 0 .6.04.9.13V9.8a6.2 6.2 0 00-.9-.07A6.23 6.23 0 004.2 16a6.23 6.23 0 006.2 6.2 6.23 6.23 0 006.2-6.2V8.6a8.3 8.3 0 004.9 1.6V6.9a5 5 0 01-4.9-4.9z" />
    </svg>
  );
}

export function AppleMusicIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 2h-9A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9A5.5 5.5 0 0016.5 2zm-1.06 5.24v6.74c0 .27-.02.56-.13.81-.2.47-.68.75-1.19.83-.44.07-.85-.02-1.19-.31a1.35 1.35 0 01-.46-1.13c.02-.5.34-.92.79-1.14.28-.14.6-.19.9-.25.24-.05.49-.09.66-.27.14-.15.16-.36.16-.55V9.2c0-.16-.09-.24-.25-.2-1.28.32-2.56.64-3.84.97-.17.04-.24.13-.24.31v6.06c0 .29-.02.58-.14.85-.21.46-.68.73-1.17.81-.43.07-.84-.01-1.18-.29a1.35 1.35 0 01-.48-1.15c.03-.5.35-.91.8-1.13.28-.14.6-.18.9-.25.25-.05.5-.1.67-.29.13-.15.15-.34.15-.53V8.66c0-.42.13-.63.55-.74 1.7-.43 3.4-.86 5.11-1.28.4-.1.55.05.55.6z" />
    </svg>
  );
}

export function TidalIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="9" width="6" height="6" transform="rotate(45 4 12)" />
      <rect x="9" y="3" width="6" height="6" transform="rotate(45 12 6)" />
      <rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)" />
      <rect x="17" y="9" width="6" height="6" transform="rotate(45 20 12)" />
    </svg>
  );
}

export function BandcampIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 18.75 7.437 5.25H24l-7.438 13.5H0z" />
    </svg>
  );
}

export function PayPalIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.153-.041.234-.585 3.006-2.31 5.72-6.988 5.72h-1.789c-.436 0-.813.318-.874.75l-.945 5.99-.267 1.69a.556.556 0 0 0 .55.643h3.966c.454 0 .84-.33.912-.777l.038-.194.72-4.573.046-.25c.07-.448.457-.778.911-.778h.573c3.703 0 6.6-1.505 7.45-5.856.352-1.813.17-3.328-.76-4.394a3.606 3.606 0 0 0-.895-.664z" />
    </svg>
  );
}

export const platformIconMap = {
  spotify: SpotifyIcon,
  appleMusic: AppleMusicIcon,
  tidal: TidalIcon,
  bandcamp: BandcampIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
};
