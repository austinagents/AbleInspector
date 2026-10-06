import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const serviceNav = [
  ["01", "Home Inspection", "/home-inspection-naples-fl"],
  ["02", "Commercial Inspection", "/commercial-inspection-naples-fl"],
  ["03", "New Home Inspection", "/new-home-inspection-naples-fl"],
  ["04", "Construction Draw", "/construction-draw-inspection-naples-fl"],
  ["05", "Commercial Roof", "/commercial-roof-inspection-naples-fl"],
  ["06", "Infrared", "/infrared-naples-fl"],
  ["07", "Mold", "/mold-naples-fl"],
  ["08", "Radon", "/radon-naples-fl"],
  ["09", "Home Watch", "/home-watch"],
  ["10", "Pool", "/pool-naples-fl"],
  ["11", "Chinese Drywall", "/chinese-drywall-naples-fl"],
];

const scope = [
  "Foundation / Structure",
  "Roof",
  "Plumbing",
  "Heating / A/C",
  "Electrical",
  "Windows",
  "Doors",
  "Floors",
  "Attic",
  "Built-In Appliances",
  "Visual for Mold",
  "Infrared Thermography",
];

export default function ServicePage() {
  return (
    <main className="service-page">
      <section className="service-page-intro">
        <SiteHeader variant="overlay" />

        <div className="service-page-intro-grid">
          <div className="service-page-identity">
            <div className="service-page-meta">
              <span>01</span>
              <span>Residential</span>
            </div>

            <h1>Home Inspection</h1>

            <p>
              Exterior including foundation/structure, roof, plumbing, heating,
              a/c, electrical, windows, doors, floors, attic, built in
              appliances, visual for mold, infrared thermography
            </p>

            <div className="service-page-actions">
              <a href="tel:+12393543540">
                (239) 354-3540 <span>↗</span>
              </a>
              <Link href="/contact-us">
                Schedule inspection <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="service-page-image">
            <Image
              src="/original-images/residential_c43ec8fad4.jpeg"
              alt="Southwest Florida residential property"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className="service-page-image-shade" />

            <div className="service-page-image-caption">
              <span>Able Home Inspections</span>
              <span>Southwest Florida</span>
            </div>
          </div>
        </div>
      </section>

      <div className="service-detail-system">
        <aside className="service-detail-rail">
          <div className="service-detail-rail-head">
            <span>Inspection Services</span>
            <strong>Explore</strong>
          </div>

          <nav aria-label="Inspection services">
            {serviceNav.map(([number, name, href]) => (
              <Link
                href={href}
                key={href}
                className={number === "01" ? "is-active" : ""}
              >
                <span>{number}</span>
                <strong>{name}</strong>
                <span className="service-detail-arrow">↗</span>
              </Link>
            ))}
          </nav>

          <Link href="/" className="service-detail-back">
            <span>←</span>
            Back to overview
          </Link>
        </aside>

        <section className="service-page-body">
        <div className="service-page-section-label">
          <span>01</span>
          <span>Inspection Scope</span>
        </div>

        <div className="service-page-scope">
          <div className="service-page-scope-heading">
            <h2>Home Inspection</h2>

            <p>
              Able Home Inspections provides quality existing Home Inspections
              and New Construction Monitoring Inspections and new construction
              inspections in Naples, Fort Myers, Cape Coral, Marco Island,
              Punta Gorda and more.
            </p>
          </div>

          <div className="service-page-scope-list">
            {scope.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="service-page-rule" />

        <section className="service-page-editorial">
          <div>
            <span className="service-page-small-label">Why Able</span>

            <h2>
              Finding a home inspector is easy.
              <span>
                Finding a qualified, experienced home inspector is difficult,
                and very critical.
              </span>
            </h2>
          </div>

          <div className="service-page-copy">
            <p>
              Florida Home Inspector licensing is regarded as one of the
              nations weakest license laws.. Most inspectors have little to no
              training and no real credentials. Please review my credentials
              closely. If you ever have any questions please feel free to email
              or call me. No matter who you hire, make sure they are
              experienced, and LICENSED IN MOLD ASSESSMENT.
            </p>

            <p>
              Able Home Inspection is redefining home inspection standards in
              the Naples, Fort Myers area with thorough inspections that
              include infrared technology.
            </p>

            <p>
              All inspections are personally performed by the owner, Daniel
              Lunsford. Daniel is a licensed home AND mold inspector that has
              performed thousands of inspections and has years of experience
              since 2008.
            </p>

            <Link href="/qualifications-naples-fl">
              Review qualifications <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="service-page-cta">
          <div>
            <span>Residential Home Inspection</span>
            <h2>Ready to schedule?</h2>
          </div>

          <div>
            <p>
              If you need a residential home inspection, please give us a call
              at (239) 354-3540 and we’ll be glad to perform a quality
              inspection for you.
            </p>

            <a href="tel:+12393543540">
              Call (239) 354-3540 <span>↗</span>
            </a>

            <a href="mailto:Schedule@ableinspector.com">
              Schedule@ableinspector.com <span>↗</span>
            </a>
          </div>
        </section>
        </section>
      </div>
    </main>
  );
}
