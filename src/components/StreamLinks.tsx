import { platformIconMap } from "@/components/BrandIcons";
import type { ReleaseLinks } from "@/lib/data";

const ORDER: { key: keyof ReleaseLinks; label: string }[] = [
  { key: "spotify", label: "Spotify" },
  { key: "appleMusic", label: "Apple Music" },
  { key: "tidal", label: "Tidal" },
];

export default function StreamLinksRow({
  links,
  size = 17,
}: {
  links: ReleaseLinks;
  size?: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-text-muted">
      {ORDER.filter((o) => links[o.key]).map((o) => {
        const Icon = platformIconMap[o.key as keyof typeof platformIconMap];
        return (
          <a
            key={o.key}
            href={links[o.key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={o.label}
            className="transition-colors hover:text-accent"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
