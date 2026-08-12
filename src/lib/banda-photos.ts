import fs from "fs";
import path from "path";

const IMAGE_RE = /\.(jpe?g|png|webp)$/i;

// Reads whatever images live in /public/images/banda/ (shared) plus
// /public/images/banda/desktop/ or /public/images/banda/mobile/ (variant-only)
// at build time, so dropping new files in those folders is enough to
// update the carousel.
function readImages(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((f) => IMAGE_RE.test(f)).sort();
  } catch {
    return [];
  }
}

export function getBandaPhotos(variant: "desktop" | "mobile"): string[] {
  const baseDir = path.join(process.cwd(), "public", "images", "banda");
  const variantDir = path.join(baseDir, variant);

  const shared = readImages(baseDir).map((f) => `/images/banda/${f}`);
  const only = readImages(variantDir).map(
    (f) => `/images/banda/${variant}/${f}`,
  );

  return [...shared, ...only];
}
