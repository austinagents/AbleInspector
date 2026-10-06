import Link from "next/link";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export default function SiteHeader({
  variant = "overlay",
}: SiteHeaderProps) {
  return (
    <header className={`hero-header site-header site-header-${variant}`}>
      <Link href="/" className="hero-brand" aria-label="Able Home Inspections">
        <strong>ABLE</strong>
        <span>HOME INSPECTIONS</span>
      </Link>

      <nav className="hero-nav" aria-label="Primary navigation">
        <Link href="/home-inspection-naples-fl">Inspections</Link>
        <Link href="/wind-mitigation-inspection-naples-fl">Insurance</Link>
        <Link href="/commercial-inspection-naples-fl">Commercial</Link>
        <Link href="/qualifications-naples-fl">About</Link>
      </nav>

      <Link href="/contact-us" className="hero-contact">
        Schedule
        <span>↗</span>
      </Link>
    </header>
  );
}
