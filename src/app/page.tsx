import HomeContent from "@/components/HomeContent";
import { getBandaPhotos } from "@/lib/banda-photos";
import { releases, concerts } from "@/lib/data";

export default function Home() {
  const latest = [...releases].sort((a, b) =>
    b.releaseDate.localeCompare(a.releaseDate),
  )[0];
  const nextShow = concerts[0];
  const bandaPhotos = getBandaPhotos();

  return (
    <HomeContent
      latest={latest}
      nextShow={nextShow}
      bandaPhotos={bandaPhotos}
    />
  );
}
