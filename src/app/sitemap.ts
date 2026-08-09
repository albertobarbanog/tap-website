import type { MetadataRoute } from "next";

const siteUrl = "https://www.theantarcticaproject.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/conciertos",
    "/discografia",
    "/banda/historia",
    "/banda/miembros",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
