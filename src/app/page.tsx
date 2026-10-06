import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceExplorer from "@/components/ServiceExplorer";
import SiteFooter from "@/components/SiteFooter";
import HomeCredibility from "@/components/HomeCredibility";
import { getPageByPath } from "@/lib-site-content";

const page = getPageByPath("/");

export const metadata: Metadata = {
  title:
    page?.seo.title ||
    "Able Home Inspections | Naples, Ft. Myers, Cape Coral, Marco Island",
  description: page?.seo.meta_description,
  alternates: {
    canonical: "https://www.ableinspector.com/",
  },
};

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <ServiceExplorer />
      <HomeCredibility />
      <SiteFooter />
    </main>
  );
}
