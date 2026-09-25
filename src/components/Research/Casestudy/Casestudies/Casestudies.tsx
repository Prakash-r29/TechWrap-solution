import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Casestudies.css";

interface CaseStudy {
  id: any;
  category: string;
  title: string;
  description: string;
  research: string;
  image: string;
  stat: string;
  statLabel: string;
  technologies: string[];
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    category: "RESEARCH INITIATIVE / AI ENGINEERING",

    title: "AI-Native Software Engineering",

    description:
      "What happens when AI becomes part of the engineering architecture instead of another development tool? TechWrap explores AI-native workflows where intelligent systems assist with planning, coding, testing and continuous improvement.",

    research:
      "TechWrap is researching how LLMs, developer workflows and production engineering can work together to create software teams that move from idea to production faster without sacrificing engineering quality.",

    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=85",

    stat: "40%",
    statLabel: "POTENTIAL DELIVERY GAIN",

    technologies: [
      "React",
      "TypeScript",
      "Python",
      "LLMs",
      "AI Agents",
      "Spring Boot",
    ],

    slug: "ai-native-engineering",
    id: undefined,
  },

  {
    category: "RESEARCH INITIATIVE / DEVELOPER INTELLIGENCE",

    title: "Autonomous Developer Intelligence",

    description:
      "The next generation of software teams may not work with AI through simple chat interfaces. TechWrap investigates intelligent developer systems that understand repositories, APIs, architecture and deployment pipelines.",

    research:
      "Our research explores AI agents capable of analysing codebases, identifying bottlenecks, suggesting architecture improvements and assisting developers throughout the software delivery lifecycle.",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",

    stat: "24/7",
    statLabel: "INTELLIGENT ASSISTANCE",

    technologies: [
      "React",
      "Node.js",
      "Python",
      "REST APIs",
      "AI Agents",
      "Docker",
      "Cloud",
    ],

    slug: "autonomous-developer-intelligence",
    id: undefined,
  },

  {
    category: "RESEARCH INITIATIVE / DATA & AI",

    title: "Synthetic Data for Smarter AI",

    description:
      "AI systems need enormous amounts of useful data, but real-world datasets can be difficult to access, expensive to process and sensitive from a privacy perspective. TechWrap investigates synthetic data as an alternative engineering layer.",

    research:
      "The initiative explores how synthetic datasets can help teams prototype AI products, test edge cases and improve model development while reducing dependency on sensitive production data.",

    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=85",

    stat: "10X",
    statLabel: "FASTER EXPERIMENTATION",

    technologies: [
      "Python",
      "AI/ML",
      "LLMs",
      "PostgreSQL",
      "MongoDB",
      "APIs",
      "Cloud",
    ],

    slug: "synthetic-data-ai",
    id: undefined,
  },
];

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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

  return (
    <section
      ref={sectionRef}
      className={`tw-case-section ${
        visible ? "tw-visible" : ""
      }`}
    >
      {/* BACKGROUND */}

      <div className="tw-case-grid" />

      <div className="tw-case-glow tw-case-glow-one" />

      <div className="tw-case-glow tw-case-glow-two" />

      <div className="tw-case-container">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header
          className={`tw-case-heading ${
            visible ? "tw-show" : ""
          }`}
        >
          <div className="tw-case-kicker">
            <span className="tw-kicker-line" />

            TECHWRAP RESEARCH LAB

            <span>/ EMERGING TECHNOLOGY</span>
          </div>

          <div className="tw-heading-row">
            <h2>
              Exploring
              <span>What's Next.</span>
            </h2>

            <div className="tw-heading-side">
              <span className="tw-side-label">
                BEYOND THE OBVIOUS
              </span>

              <p>
                We don't only build with today's technology.
                TechWrap researches emerging engineering
                patterns to understand what the next generation
                of digital products could look like.
              </p>
            </div>
          </div>
        </header>

        {/* =====================================================
            CASE STUDIES
        ===================================================== */}

        <div className="tw-case-list">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className={`
                tw-case-item 
                ${
                  index % 2 !== 0
                    ? "tw-case-reverse"
                    : ""
                } 
                ${visible ? "tw-show" : ""}
              `}
              style={{
                transitionDelay: `${index * 180}ms`,
              }}
            >
              {/* IMAGE */}

              <div className="tw-case-visual">
                <div className="tw-image-frame">
                  <img
                    src={study.image}
                    alt={study.title}
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                  />

                  <div className="tw-image-dark" />

                  <div className="tw-image-top">
                    <span>
                      TECHWRAP / RESEARCH
                    </span>

                    <span className="tw-live">
                      <i />
                      EXPLORING
                    </span>
                  </div>

                  <div className="tw-image-bottom">
                    <div className="tw-stat">
                      <strong>
                        {study.stat}
                      </strong>

                      <span>
                        {study.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}

              <div className="tw-case-content">
                <div className="tw-content-top">
                  <span className="tw-case-category">
                    {study.category}
                  </span>
                </div>

                <h3>{study.title}</h3>

                <p className="tw-case-description">
                  {study.description}
                </p>

                {/* RESEARCH PREVIEW */}

                <div className="tw-research">
                  <div className="tw-research-heading">
                    <span className="tw-research-icon">
                      +
                    </span>

                    WHAT TECHWRAP IS EXPLORING
                  </div>

                  <p>{study.research}</p>
                </div>

                {/* TECHNOLOGY */}

                <div className="tw-tech-wrapper">
                  <span className="tw-tech-label">
                    TECHNOLOGY LAYER
                  </span>

                  <div className="tw-tech-list">
                    {study.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* =================================================
                    EXPLORE RESEARCH
                ================================================= */}

                <Link
                  to={`/Research/${study.slug}`}
                  className="tw-explore-button"
                >
                  <span className="tw-explore-text">
                    Explore Research
                  </span>

                  <span className="tw-explore-arrow">
                    <span>↗</span>
                  </span>

                  <span className="tw-explore-shine" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;