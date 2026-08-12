"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDE_MS = 5000;

function Slides({
  photos,
  index,
  visibilityClass,
}: {
  photos: string[];
  index: number;
  visibilityClass: string;
}) {
  return (
    <div className={`absolute inset-0 ${visibilityClass}`}>
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="The Antarctica Project"
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover object-center grayscale transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-70" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function HeroCarousel({
  desktopPhotos,
  mobilePhotos,
}: {
  desktopPhotos: string[];
  mobilePhotos: string[];
}) {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    if (desktopPhotos.length < 2) return;
    const id = setInterval(() => {
      setDesktopIndex((i) => (i + 1) % desktopPhotos.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [desktopPhotos.length]);

  useEffect(() => {
    if (mobilePhotos.length < 2) return;
    const id = setInterval(() => {
      setMobileIndex((i) => (i + 1) % mobilePhotos.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [mobilePhotos.length]);

  return (
    <>
      <Slides
        photos={mobilePhotos}
        index={mobileIndex}
        visibilityClass="block md:hidden"
      />
      <Slides
        photos={desktopPhotos}
        index={desktopIndex}
        visibilityClass="hidden md:block"
      />
    </>
  );
}
