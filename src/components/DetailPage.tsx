import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceRail from "@/components/ServiceRail";
import ContentRenderer from "@/components/ContentRenderer";
import { pageConfig } from "@/content/page-config";

export default function DetailPage({ path }: { path: string }) {
  const config = pageConfig[path];
  if (!config) return null;
  const isCompany = config.group === "company";
  const schema = {"@context":"https://schema.org","@type":"HomeAndConstructionBusiness",name:"Able Home Inspections",url:`https://www.ableinspector.com${path}`,telephone:"+1-239-354-3540",email:"Schedule@ableinspector.com",areaServed:["Naples","Fort Myers","Cape Coral","Marco Island"]};

  return (
    <main className={`detail-page detail-page-${config.group}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={`detail-hero ${config.heroImage ? "has-image" : "no-image"}`}>
        {config.heroImage ? <div className="detail-hero-image" aria-hidden="true"><Image src={config.heroImage} alt="" fill priority sizes="100vw" /></div> : null}
        <div className="detail-hero-shade" />
        <SiteHeader variant="overlay" />
        <div className="detail-hero-content">
          <div className="detail-hero-meta"><span>{config.number || "ABLE"}</span><i /><span>{config.eyebrow}</span></div>
          <h1>{config.title}</h1>
          <div className="detail-hero-actions">
            <a href="tel:+12393543540">(239) 354-3540 <span>↗</span></a>
            <Link href="/contact-us">Schedule / Request Quote <span>↗</span></Link>
          </div>
        </div>
      </section>

      {!isCompany ? <ServiceRail currentPath={path} /> : null}

      <article className="detail-content">
        <div className="detail-breadcrumb"><Link href="/">Able Home Inspections</Link><span>/</span><strong>{config.title}</strong></div>
        <ContentRenderer path={path} config={config} />
        {path !== "/contact-us" ? (
          <section className="detail-cta">
            <div><span>Ready when you are</span><h2>Schedule an inspection.</h2></div>
            <div><p>Call or email Able Home Inspections to schedule service or request a quote.</p><a href="tel:+12393543540">(239) 354-3540 <span>↗</span></a><a href="mailto:Schedule@ableinspector.com">Schedule@ableinspector.com <span>↗</span></a></div>
          </section>
        ) : null}
      </article>
      <SiteFooter />
    </main>
  );
}
