import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPages,
  getPageBySlug,
} from "@/lib-site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPages()
    .filter((page) => page.path !== "/")
    .map((page) => ({
      slug: page.slug,
    }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.seo.title,
    description: page.seo.meta_description,
    alternates: {
      canonical: `https://www.ableinspector.com${page.path}`,
    },
  };
}

export default async function ArchivedPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page || page.path === "/") {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          opacity: 0.6,
        }}
      >
        Able Home Inspections
      </p>

      <h1 style={{ fontSize: "42px", lineHeight: 1.1 }}>
        {page.headings.h1?.[0] || page.seo.title}
      </h1>

      <div
        style={{
          whiteSpace: "pre-wrap",
          fontSize: "17px",
          lineHeight: 1.7,
          marginTop: "32px",
        }}
      >
        {page.visible_text}
      </div>
    </main>
  );
}
