"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ExplorerItem = {
  number: string;
  name: string;
  eyebrow: string;
  image: string;
  href: string;
  description: string;
};

const intro: ExplorerItem = {
  number: "",
  name: "Able Home Inspections",
  eyebrow: "The Lunsford Family",
  image: "/original-images/Family_Pic_28e904448e.jpg",
  href: "/qualifications-naples-fl",
  description:
    "Daniel Lunsford, owner of Able Home Inspections, personally performs all full home inspections. Able is a local, family owned inspection business — not a franchise.",
};

const services: ExplorerItem[] = [
  {
    number: "01",
    name: "Home Inspection",
    eyebrow: "Residential",
    image: "/original-images/residential_c43ec8fad4.jpeg",
    href: "/home-inspection-naples-fl",
    description:
      "Licensed home inspection backed by decades of family experience in Southwest Florida.",
  },
  {
    number: "02",
    name: "Commercial Inspection",
    eyebrow: "Commercial",
    image: "/original-images/commercial_18320c8fad.jpeg",
    href: "/commercial-inspection-naples-fl",
    description:
      "Commercial property inspections for condominiums, offices, professional buildings and more.",
  },
  {
    number: "03",
    name: "New Home Inspection",
    eyebrow: "New Construction",
    image: "/original-images/newhome_8d07184247.jpg",
    href: "/new-home-inspection-naples-fl",
    description:
      "Independent inspection for newly constructed homes before one of your most important purchases is complete.",
  },
  {
    number: "04",
    name: "Construction Draw",
    eyebrow: "Construction",
    image: "/original-images/Kaleigha_bay_fc771b4c78.JPG",
    href: "/construction-draw-inspection-naples-fl",
    description:
      "Construction draw inspections and progress monitoring throughout the building process.",
  },
  {
    number: "05",
    name: "Commercial Roof",
    eyebrow: "Commercial Roofing",
    image: "/original-images/Area_7_64c9eef9e1.JPG",
    href: "/commercial-roof-inspection-naples-fl",
    description:
      "Commercial roof inspection services for Southwest Florida properties.",
  },
  {
    number: "06",
    name: "Infrared",
    eyebrow: "Thermography",
    image: "/original-images/IRhome_3dc8389b9e.jpeg",
    href: "/infrared-naples-fl",
    description:
      "Infrared thermography helps reveal conditions that may not be visible during a conventional inspection.",
  },
  {
    number: "07",
    name: "Mold",
    eyebrow: "Inspection + Testing",
    image: "/original-images/mold2_52087e1279.jpg",
    href: "/mold-naples-fl",
    description:
      "Mold inspection and testing performed in-house by a Florida licensed mold inspector and assessor.",
  },
  {
    number: "08",
    name: "Radon",
    eyebrow: "Testing",
    image: "/original-images/AdobeStock_91095862_bbf1f238f0.jpeg",
    href: "/radon-naples-fl",
    description:
      "Radon gas testing performed by a licensed radon tester.",
  },
  {
    number: "09",
    name: "Home Watch",
    eyebrow: "Property Monitoring",
    image: "/original-images/Homefrontpage_3e09e4eb80.jpeg",
    href: "/home-watch",
    description:
      "Home Watch helps identify property issues early while a Southwest Florida home remains unoccupied.",
  },
  {
    number: "10",
    name: "Pool",
    eyebrow: "Pool Inspection",
    image: "/original-images/poolsback_eabdb3946b.jpeg",
    href: "/pool-naples-fl",
    description:
      "Pool inspection as part of understanding the condition of your Southwest Florida property.",
  },
  {
    number: "11",
    name: "Chinese Drywall",
    eyebrow: "Specialty Inspection",
    image: "/original-images/Chinese_drywall_f7c1b26ed3.JPG",
    href: "/chinese-drywall-naples-fl",
    description:
      "Specialty inspection for concerns involving Chinese drywall.",
  },
];

export default function ServiceExplorer() {
  const [active, setActive] = useState<number | null>(null);

  const current = active === null ? intro : services[active];

  const selectService = (index: number) => {
    setActive(index);
  };

  const showIntro = () => {
    setActive(null);
  };

  return (
    <section className="service-explorer">
      <button
        type="button"
        className={`service-explorer-topline ${
          active === null ? "is-intro" : ""
        }`}
        onClick={showIntro}
      >
        <span>A Generational Family Business Established in 1989</span>

        <span>
          {active === null
            ? "Southwest Florida"
            : `${current.number} / 11`}
        </span>
      </button>

      <div className="service-explorer-layout">
        <div className="service-index">
          <button
            type="button"
            className="service-index-intro"
            onClick={showIntro}
          >
            <p>{active === null ? "Our family" : "Inspection services"}</p>

            <h2>
              {active === null ? (
                <>
                  Able Home
                  <br />
                  Inspections.
                </>
              ) : (
                <>
                  Find what
                  <br />
                  you need.
                </>
              )}
            </h2>
          </button>

          <div className="service-list">
            {services.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`service-row ${
                  active === index ? "is-active" : ""
                }`}
                onMouseEnter={() => selectService(index)}
                onFocus={() => selectService(index)}
              >
                <span className="service-number">{item.number}</span>
                <span className="service-name">{item.name}</span>
                <span className="service-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="service-visual"
          onMouseLeave={() => {
            if (active !== null) showIntro();
          }}
        >
          <div className="service-images">
            <Image
              src={intro.image}
              alt="The Lunsford family of Able Home Inspections"
              fill
              priority={false}
              sizes="(max-width: 900px) 100vw, 55vw"
              className={active === null ? "is-active" : ""}
            />

            {services.map((item, index) => (
              <Image
                key={`${item.number}-${item.image}`}
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={active === index ? "is-active" : ""}
              />
            ))}
          </div>

          <div className="service-image-shade" />

          <div className="service-detail">
            <div className="service-detail-meta">
              <span>
                {active === null ? "Est. 1989" : current.number}
              </span>
              <span>{current.eyebrow}</span>
            </div>

            <div className="service-detail-bottom">
              <div className="service-detail-copy">
                <span className="service-detail-title">
                  {current.name}
                </span>

                <p>{current.description}</p>
              </div>

              <Link href={current.href}>
                {active === null ? "Our story" : "Explore service"}
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
