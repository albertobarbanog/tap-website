import fs from "fs";
import path from "path";

// Reads whatever images live in /public/images/banda/ at build time,
// so dropping new files in that folder is enough to update the carousel.
export function getBandaPhotos(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "banda");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/images/banda/${f}`);
  } catch {
    return [];
  }
}
