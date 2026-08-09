const PALETTE = ["#050a0c", "#081217", "#0b1a20", "#0e222a", "#123039"];

function mulberry32(seed: number) {
  let s = seed | 0;
  return function random() {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Facet = { points: string; fill: string; highlight: boolean };

function buildFacets(seed: number): Facet[] {
  const rand = mulberry32(seed * 9973 + 17);
  const cols = 4;
  const rows = 4;
  const cellW = 400 / cols;
  const cellH = 400 / rows;
  const facets: Facet[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = c * cellW;
      const y0 = r * cellH;
      const jitter = () => (rand() - 0.5) * cellW * 0.55;
      const p1: [number, number] = [x0 + jitter(), y0 + jitter()];
      const p2: [number, number] = [x0 + cellW + jitter(), y0 + jitter()];
      const p3: [number, number] = [x0 + jitter(), y0 + cellH + jitter()];
      const p4: [number, number] = [x0 + cellW + jitter(), y0 + cellH + jitter()];
      const splitFirst = rand() > 0.5;
      const triA = splitFirst ? [p1, p2, p3] : [p1, p2, p4];
      const triB = splitFirst ? [p2, p4, p3] : [p1, p4, p3];

      for (const tri of [triA, triB]) {
        const isHighlight = rand() > 0.86;
        facets.push({
          points: tri.map((p) => p.join(",")).join(" "),
          fill: isHighlight
            ? "#A9C4D4"
            : PALETTE[Math.floor(rand() * PALETTE.length)],
          highlight: isHighlight,
        });
      }
    }
  }
  return facets;
}

export default function AlbumCover({
  seed,
  label,
  type,
  year,
  className = "",
}: {
  seed: number;
  label: string;
  type: string;
  year: number;
  className?: string;
}) {
  const facets = buildFacets(seed);

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden bg-black ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {facets.map((f, i) => (
          <polygon
            key={i}
            points={f.points}
            fill={f.fill}
            fillOpacity={f.highlight ? 0.16 : 1}
            stroke="#A9C4D4"
            strokeOpacity={f.highlight ? 0.3 : 0.12}
            strokeWidth={0.75}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="font-mono text-[10px] tracking-wide-label text-text-muted">
          {type.toUpperCase()} · {year}
        </span>
        <span className="font-display text-xl font-semibold leading-tight tracking-wide-label text-text sm:text-2xl">
          {label}
        </span>
      </div>
    </div>
  );
}
