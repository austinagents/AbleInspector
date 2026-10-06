import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { pageConfig } from "@/content/page-config";
import { getAllPages, getPageBySlug } from "@/lib-site-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPages().filter((page) => page.path !== "/").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.seo.title,
    description: page.seo.meta_description,
    alternates: { canonical: `https://www.ableinspector.com${page.path}` },
    openGraph: {
      title: page.seo.title,
      description: page.seo.meta_description,
      url: `https://www.ableinspector.com${page.path}`,
      siteName: "Able Home Inspections",
      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page || page.path === "/" || !pageConfig[page.path]) notFound();
  return <DetailPage path={page.path} />;
}
