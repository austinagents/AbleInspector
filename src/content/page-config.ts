export type PageConfig = {
  title: string;
  eyebrow: string;
  number?: string;
  heroImage?: string;
  gallery?: string[];
  group: "inspection" | "insurance" | "environmental" | "company";
};

export const pageConfig: Record<string, PageConfig> = {
  "/home-inspection-naples-fl": { title: "Home Inspection", eyebrow: "Residential", number: "01", heroImage: "/original-images/residential_c43ec8fad4.jpeg", gallery: ["/original-images/HVAC_3308d55bfa.jpeg", "/original-images/IRhome_3dc8389b9e.jpeg"], group: "inspection" },
  "/commercial-inspection-naples-fl": { title: "Commercial Inspection", eyebrow: "Commercial Property", number: "02", heroImage: "/original-images/commercial_18320c8fad.jpeg", gallery: ["/original-images/commercial_3c4493d6e2.jpeg"], group: "inspection" },
  "/new-home-inspection-naples-fl": { title: "New Home Inspection", eyebrow: "New Construction", number: "03", heroImage: "/original-images/newhome_8d07184247.jpg", gallery: ["/original-images/newhome_8e5c7044fb.jpeg"], group: "inspection" },
  "/construction-draw-inspection-naples-fl": { title: "Construction Draw Inspection", eyebrow: "Construction", number: "04", heroImage: "/original-images/Kaleigha_bay_fc771b4c78.JPG", group: "inspection" },
  "/commercial-roof-inspection-naples-fl": { title: "Commercial Roof Inspection", eyebrow: "Commercial Roofing", number: "05", heroImage: "/original-images/Area_7_64c9eef9e1.JPG", gallery: ["/original-images/FLIR0001_3be791c6d6.jpg"], group: "inspection" },
  "/infrared-naples-fl": { title: "Infrared", eyebrow: "Thermography", number: "06", heroImage: "/original-images/infrared_back_c9d6776994.jpeg", gallery: ["/original-images/Infrared_example_2_567df42b3c.jpg", "/original-images/IRex3_14d5ff907c.jpg", "/original-images/IRex4_15e55554af.jpg"], group: "inspection" },
  "/mold-naples-fl": { title: "Mold", eyebrow: "Inspection + Testing", number: "07", heroImage: "/original-images/mold2_52087e1279.jpg", group: "inspection" },
  "/radon-naples-fl": { title: "Radon", eyebrow: "Testing", number: "08", heroImage: "/original-images/AdobeStock_91095862_bbf1f238f0.jpeg", group: "inspection" },
  "/home-watch": { title: "Home Watch", eyebrow: "Property Monitoring", number: "09", heroImage: "/original-images/gordon_0036bbeef6.jpg", group: "inspection" },
  "/pool-naples-fl": { title: "Pool", eyebrow: "Pool Inspection", number: "10", heroImage: "/original-images/poolsback_eabdb3946b.jpeg", group: "inspection" },
  "/chinese-drywall-naples-fl": { title: "Chinese Drywall", eyebrow: "Specialty Inspection", number: "11", heroImage: "/original-images/Chinese_drywall_f7c1b26ed3.JPG", group: "inspection" },
  "/wind-mitigation-inspection-naples-fl": { title: "Wind Mitigation", eyebrow: "Insurance Inspection", heroImage: "/original-images/Wind_Mitigation_3885250561.jpeg", group: "insurance" },
  "/4-point-naples-fl": { title: "4-Point Inspection", eyebrow: "Insurance Inspection", heroImage: "/original-images/4pointcollage_copy_0799a723ab.jpg", group: "insurance" },
  "/phase-1-esa-naples-fl": { title: "Phase 1 ESA", eyebrow: "Environmental Site Assessment", heroImage: "/original-images/phase_1_336d54b387.jpg", group: "environmental" },
  "/qualifications-naples-fl": { title: "Qualifications", eyebrow: "Daniel Lunsford", heroImage: "/original-images/Family_Pic_28e904448e.jpg", group: "company" },
  "/testimonies-naples-fl": { title: "Testimonies", eyebrow: "Client Experiences", heroImage: "/original-images/heather_fb04267eab.jpg", gallery: ["/original-images/Kimberley_d4da691b51.jpg", "/original-images/Rocky_701a81e261.jpg", "/original-images/chambers-2_d45e327d81.jpg"], group: "company" },
  "/contact-us": { title: "Contact Us", eyebrow: "Schedule + Quotes", group: "company" },
};

export const inspectionNav = [
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
] as const;

export const secondaryNav = [
  ["Insurance", "Wind Mitigation", "/wind-mitigation-inspection-naples-fl"],
  ["Insurance", "4-Point", "/4-point-naples-fl"],
  ["Environmental", "Phase 1 ESA", "/phase-1-esa-naples-fl"],
] as const;
