import type { MetadataRoute } from "next";

const BASE = "https://kaycfarias.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/en`,
      alternates: {
        languages: {
          en: `${BASE}/en`,
          pt: `${BASE}/pt`,
        },
      },
    },
  ];
}
