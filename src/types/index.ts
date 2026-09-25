// Shared content types for the Home page.
// Keeping these centralized means every section component gets
// typed props instead of inline shapes scattered across files.

export interface NavLink {
  label: string;
  href: string;
}

export interface TechLogo {
  name: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "build" | "design" | "insight" | "reliability" | "integrate" | "pricing";
}

export interface ProductHighlight {
  label: string;
  value: string;
}

export interface TestimonialItem {
  id: string;
  videoSrc: string; // place real files in /public/videos
  posterSrc?: string; // optional poster frame in /public/videos
  name: string;
  role: string;
  company: string;
  quote: string;
}
