import Link from "next/link";
import { inspectionNav, secondaryNav } from "@/content/page-config";

export default function ServiceRail({ currentPath }: { currentPath: string }) {
  return (
    <section className="service-directory" aria-label="Services">
      <div className="service-directory-head">
        <span>Services</span>
        <Link href="/">View overview ↗</Link>
      </div>
      <nav className="service-directory-primary" aria-label="Inspection services">
        {inspectionNav.map(([number, name, href]) => (
          <Link key={href} href={href} className={currentPath === href ? "is-active" : ""}>
            <span>{number}</span><strong>{name}</strong>
          </Link>
        ))}
      </nav>
      <nav className="service-directory-secondary" aria-label="Additional services">
        {secondaryNav.map(([category, name, href]) => (
          <Link key={href} href={href} className={currentPath === href ? "is-active" : ""}>
            <small>{category}</small><strong>{name}</strong><i>↗</i>
          </Link>
        ))}
      </nav>
    </section>
  );
}
