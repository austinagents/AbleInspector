"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    number: "01",
    label: "Home Inspections",
    title: "Home\nInspections",
    kicker: "Residential",
    description:
      "A clearer understanding of the home you're buying, selling, or protecting.",
    href: "/home-inspection-naples-fl",
    image: "/original-images/residential_c43ec8fad4.jpeg",
    alt: "Southwest Florida waterfront home with swimming pool",
  },
  {
    number: "02",
    label: "Commercial",
    title: "Commercial\nInspections",
    kicker: "Commercial",
    description:
      "Professional property insight for commercial buildings and investments.",
    href: "/commercial-inspection-naples-fl",
    image: "/original-images/commercial_18320c8fad.jpeg",
    alt: "Commercial property in Southwest Florida",
  },
  {
    number: "03",
    label: "New Construction",
    title: "New Home\nInspections",
    kicker: "New Construction",
    description:
      "Independent inspection throughout one of the most important purchases you'll make.",
    href: "/new-home-inspection-naples-fl",
    image: "/original-images/newhome_8d07184247.jpg",
    alt: "New home under construction in Southwest Florida",
  },
];

const DURATION = 6500;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectSlide = useCallback((index: number) => {
    setActive(index);
    setCycle((value) => value + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
    setCycle((value) => value + 1);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cycle, nextSlide]);

  const slide = slides[active];

  return (
    <section className="hero-carousel">
      <div className="hero-images" aria-hidden="true">
        {slides.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`hero-background ${
              index === active ? "is-active" : ""
            }`}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <header className="hero-header">
        <Link href="/" className="hero-brand" aria-label="Able Home Inspections">
          <strong>ABLE</strong>
          <span>HOME INSPECTIONS</span>
        </Link>

        <nav className="hero-nav" aria-label="Primary navigation">
          <Link href="/home-inspection-naples-fl">Inspections</Link>
          <Link href="/wind-mitigation-inspection-naples-fl">
            Insurance
          </Link>
          <Link href="/commercial-inspection-naples-fl">Commercial</Link>
          <Link href="/qualifications-naples-fl">About</Link>
        </nav>

        <Link href="/contact-us" className="hero-contact">
          Schedule
          <span>↗</span>
        </Link>
      </header>

      <div className="hero-content" key={`${active}-${cycle}`}>
        <div className="hero-kicker">
          <span>{slide.number}</span>
          <span className="kicker-rule" />
          <span>{slide.kicker}</span>
        </div>

        <h1>
          {slide.title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <div className="hero-copy-row">
          <p>{slide.description}</p>

          <Link href={slide.href} className="hero-explore">
            Explore service
            <span>↗</span>
          </Link>
        </div>
      </div>

      <div className="hero-side-note">
        <span>EST.</span>
        <strong>1989</strong>
      </div>

      <div className="hero-selector">
        {slides.map((item, index) => (
          <button
            key={item.number}
            type="button"
            className={`hero-selector-item ${
              index === active ? "is-active" : ""
            }`}
            onClick={() => selectSlide(index)}
            aria-label={`Show ${item.label}`}
            aria-current={index === active ? "true" : undefined}
          >
            <div className="selector-meta">
              <span>{item.number}</span>
              <strong>{item.label}</strong>
            </div>

            <span className="selector-track">
              {index === active && (
                <span
                  key={cycle}
                  className="selector-progress"
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className="hero-mobile-counter">
        {slide.number} <span>/ 03</span>
      </div>
    </section>
  );
}
