import React, { useEffect, useRef, useState } from "react";
import "./GuideCatorgy.css";

/* =========================================================
   GUIDE DATA
   ONLY 10 UNIQUE GUIDES
========================================================= */

interface GuideItem {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  readTime: string;
}

const guides: GuideItem[] = [
  {
    number: "01",
    category: "DEVELOPMENT",
    title: "Building a scalable React application",
    description:
      "Explore practical patterns for structuring modern React applications with TypeScript.",
    technologies: ["React", "TypeScript"],
    readTime: "8 min",
  },

  {
    number: "02",
    category: "DEVELOPMENT",
    title: "Structuring a modern frontend project",
    description:
      "Understand a clean approach to organizing components, pages, services, and reusable UI.",
    technologies: ["React", "TypeScript", "Bootstrap"],
    readTime: "6 min",
  },

  {
    number: "03",
    category: "DEVELOPMENT",
    title: "Connecting React with REST APIs",
    description:
      "Learn the practical flow between frontend applications and backend APIs.",
    technologies: ["React", "REST API", "TypeScript"],
    readTime: "7 min",
  },

  {
    number: "04",
    category: "AI & AUTOMATION",
    title: "Adding AI capabilities to applications",
    description:
      "Understand how AI services can be introduced into modern application workflows.",
    technologies: ["React", "AI APIs", "Python"],
    readTime: "9 min",
  },

  {
    number: "05",
    category: "AI & AUTOMATION",
    title: "Designing practical AI workflows",
    description:
      "Explore a high-level approach to connecting AI models with application processes.",
    technologies: ["Python", "AI", "REST API"],
    readTime: "8 min",
  },

  {
    number: "06",
    category: "FULL STACK",
    title: "Building with the Java full stack",
    description:
      "Understand how modern frontend applications connect with Java and Spring Boot services.",
    technologies: ["React", "Java", "Spring Boot"],
    readTime: "10 min",
  },

  {
    number: "07",
    category: "FULL STACK",
    title: "Building with the Python full stack",
    description:
      "Explore practical patterns for combining modern frontend applications with Python services.",
    technologies: ["React", "Python", "REST API"],
    readTime: "10 min",
  },

  {
    number: "08",
    category: "INTEGRATIONS",
    title: "Designing REST API integrations",
    description:
      "Understand the basic flow of communication between applications and external services.",
    technologies: ["REST API", "TypeScript"],
    readTime: "7 min",
  },

  {
    number: "09",
    category: "INTEGRATIONS",
    title: "Understanding application authentication",
    description:
      "Explore authentication concepts used when applications communicate with services.",
    technologies: ["API", "Security"],
    readTime: "8 min",
  },

  {
    number: "10",
    category: "DEPLOYMENT",
    title: "Moving applications from development to production",
    description:
      "Understand the production journey from application development to deployment and monitoring.",
    technologies: ["Docker", "CI/CD", "Cloud"],
    readTime: "9 min",
  },
];

/* =========================================================
   GUIDE PAGE
========================================================= */

const Guidecatorgy: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     SEAMLESS INFINITE LOOP

     Only 10 unique guides exist.

     The second copy is used only for the CSS infinite
     scrolling animation.
  ======================================================= */

  const scrollingGuides = [...guides, ...guides];

  return (
    <main className="tw-guides-page">
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="tw-guides-grid" />

      <div className="tw-guides-glow tw-guides-glow-one" />

      <div className="tw-guides-glow tw-guides-glow-two" />

      {/* ===================================================
          HERO
      =================================================== */}

      <section
        ref={sectionRef}
        className={`tw-guides-hero ${
          isVisible ? "tw-guides-visible" : ""
        }`}
      >
        <div className="tw-guides-eyebrow">
          <span />
          TECHWRAP GUIDES
          <span />
        </div>

        <h1>
          Practical knowledge.
          <br />
          <strong>Built to move you forward.</strong>
        </h1>

        <p>
          Explore practical guides for building, integrating,
          deploying, and scaling modern digital products with
          TechWrap.
        </p>

        {/* =================================================
            SMALL GUIDE NAVIGATION
        ================================================= */}

        <nav className="tw-guides-category-nav">
          <span className="tw-guide-nav-active">
            All Guides
          </span>

          <span>Development</span>

          <span>AI</span>

          <span>Integrations</span>

          <span>Deployment</span>
        </nav>
      </section>

      {/* ===================================================
          GUIDES SECTION
      =================================================== */}

      <section className="tw-guides-content">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="tw-guides-section-heading">
          <div>
            <span className="tw-guides-section-label">
              PRACTICAL KNOWLEDGE
            </span>

            <h2>
              Learn by
              <span> building.</span>
            </h2>
          </div>

          <p>
            Practical ideas and technical patterns across
            the TechWrap technology ecosystem.
          </p>
        </div>

        {/* =================================================
            SINGLE SCROLLING CARD
        ================================================= */}

        <div className="tw-guides-scroll-card">
          {/* Card glow */}

          <div className="tw-guides-card-glow" />

          {/* Top fade */}

          <div className="tw-guides-scroll-fade tw-guides-scroll-fade-top" />

          {/* =================================================
              AUTO SCROLL AREA
          ================================================= */}

          <div className="tw-guides-scroll-window">
            <div className="tw-guides-scroll-track">
              {scrollingGuides.map((guide, index) => (
                <article
                  key={`${guide.number}-${index}`}
                  className="tw-guide-editorial-row"
                >
                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div className="tw-guide-number">
                    {guide.number}
                  </div>

                  {/* =================================================
                      MAIN CONTENT
                  ================================================= */}

                  <div className="tw-guide-main">
                    <div className="tw-guide-category">
                      {guide.category}
                    </div>

                    <h3>{guide.title}</h3>

                    <p>{guide.description}</p>

                    <div className="tw-guide-tech-list">
                      {guide.technologies.map((technology) => (
                        <span
                          key={`${guide.number}-${technology}`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      READ TIME
                  ================================================= */}

                  <div className="tw-guide-meta">
                    {guide.readTime}
                  </div>

                  {/* Decorative bottom line */}

                  <div className="tw-guide-row-line" />
                </article>
              ))}
            </div>
          </div>

          {/* Bottom fade */}

          <div className="tw-guides-scroll-fade tw-guides-scroll-fade-bottom" />

          {/* =================================================
              CARD FOOTER
          ================================================= */}

          <div className="tw-guides-card-footer">
            {/* <span className="tw-guides-live-dot" />

            <span>
             
            </span> */}

            <span className="tw-guides-scroll-indicator">
              
              <i />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Guidecatorgy;