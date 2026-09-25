import { useEffect, useState } from "react";
import "./Techsucessstory.css";

interface CaseStudy {
  image: string;
  title: string;
  subtitle: string;
}

const caseStudies: CaseStudy[] = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=90",
    title: "Building Intelligent SaaS Products",
    subtitle: "AI SaaS Platform",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2200&q=90",
    title: "Creating Scalable Digital Commerce",
    subtitle: "E-Commerce Platform",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=90",
    title: "Turning Complex Data Into Decisions",
    subtitle: "Enterprise Dashboard",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=90",
    title: "Creating Modern Digital Experiences",
    subtitle: "React Web Application",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90",
    title: "Automating Business Workflows",
    subtitle: "Business Automation",
  },
];

function CaseStudyHero() {
  const [active, setActive] = useState(0);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChanging(true);

      setTimeout(() => {
        setActive((current) => (current + 1) % caseStudies.length);
        setChanging(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = caseStudies[active];

  return (
    <section className="case-study-hero">

      {/* IMAGE */}
      <div
        className={`case-study-image ${
          changing ? "case-image-changing" : ""
        }`}
        style={{
          backgroundImage: `url("${current.image}")`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="case-study-overlay" />

      {/* CONTENT */}
      <div
        className={`case-study-content ${
          changing
            ? "case-content-changing"
            : "case-content-visible"
        }`}
      >
        <h1>{current.title}</h1>

        <p>{current.subtitle}</p>
      </div>

    </section>
  );
}

export default CaseStudyHero;