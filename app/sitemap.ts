import type { MetadataRoute } from "next";

const SITE = "https://dimli.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/ozellikler", priority: 0.9, freq: "monthly" },
    { path: "/is-ortagi", priority: 0.9, freq: "monthly" },
    { path: "/indir", priority: 0.8, freq: "monthly" },
    { path: "/sss", priority: 0.8, freq: "monthly" },
    { path: "/hakkimizda", priority: 0.7, freq: "yearly" },
    { path: "/iletisim", priority: 0.6, freq: "yearly" },
    { path: "/kvkk", priority: 0.4, freq: "yearly" },
    { path: "/kullanim-sartlari", priority: 0.4, freq: "yearly" },
    { path: "/cerez-politikasi", priority: 0.3, freq: "yearly" },
    { path: "/mesafeli-satis", priority: 0.3, freq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
