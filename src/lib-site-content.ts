import siteContent from "@/content/site-content.json";

export type SitePage = (typeof siteContent)[number];

export function getPageByPath(path: string): SitePage | undefined {
  return siteContent.find((page) => page.path === path);
}

export function getPageBySlug(slug: string): SitePage | undefined {
  return siteContent.find((page) => page.slug === slug);
}

export function getAllPages(): SitePage[] {
  return siteContent;
}
