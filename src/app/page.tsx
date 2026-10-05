import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
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

      <section className="hero-exit">
        <p>Southwest Florida property inspections</p>

        <h2>
          Experience where it matters.
          <br />
          Detail where it counts.
        </h2>
      </section>
    </main>
  );
}
