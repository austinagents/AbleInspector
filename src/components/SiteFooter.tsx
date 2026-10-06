import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-brand"><strong>ABLE</strong><span>HOME INSPECTIONS</span></div>
      <div className="site-footer-copy">
        <span>Naples, Florida</span>
        <span>Serving Naples · Ft. Myers · Cape Coral · Marco Island</span>
      </div>
      <div className="site-footer-links">
        <a href="tel:+12393543540">(239) 354-3540</a>
        <a href="mailto:Schedule@ableinspector.com">Schedule@ableinspector.com</a>
        <Link href="/contact-us">Contact ↗</Link>
      </div>
    </footer>
  );
}
