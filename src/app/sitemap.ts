import type { MetadataRoute } from "next";
import { getAllPages } from "@/lib-site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllPages().map((page) => ({
    url: `https://www.ableinspector.com${page.path === "/" ? "" : page.path}`,
    changeFrequency: page.path === "/" ? "monthly" : "yearly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
