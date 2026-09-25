import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ResearchDetails.css";

interface ResearchData {
  category: string;
  title: string;
  intro: string;
  image: string;
  problem: string;
  direction: string;
  exploring: string[];
  technologies: string[];
}

const researchData: Record<string, ResearchData> = {
  "ai-native-engineering": {
    category: "AI ENGINEERING / RESEARCH",

    title: "AI-Native Software Engineering",

    intro:
      "A look into how intelligent systems could become part of the software engineering lifecycle — from planning and implementation to testing and delivery.",

    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=85",

    problem:
      "Modern software development involves a growing number of repetitive engineering activities. Developers spend significant time moving between requirements, code, tests, documentation and operational tools.",

    direction:
      "TechWrap is exploring an engineering model where AI becomes an integrated layer across the development lifecycle rather than remaining a standalone assistant.",

    exploring: [
      "AI-assisted development workflows",
      "LLM-powered code understanding",
      "Automated testing and documentation",
      "Human + AI engineering collaboration",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Python",
      "LLMs",
      "AI Agents",
      "Spring Boot",
    ],
  },

  "autonomous-developer-intelligence": {
    category: "DEVELOPER INTELLIGENCE / RESEARCH",

    title: "Autonomous Developer Intelligence",

    intro:
      "Exploring what happens when AI systems can understand an entire software environment rather than responding to isolated developer questions.",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",

    problem:
      "Software repositories contain architecture decisions, APIs, dependencies, business rules and deployment information. Traditional AI assistants often see only a small portion of this context.",

    direction:
      "TechWrap is investigating intelligent developer agents that can reason across repositories, development tools and deployment environments while keeping developers in control.",

    exploring: [
      "Repository-aware AI agents",
      "Architecture analysis",
      "Automated developer workflows",
      "AI-assisted DevOps operations",
    ],

    technologies: [
      "React",
      "Node.js",
      "Python",
      "REST APIs",
      "AI Agents",
      "Docker",
      "Cloud",
    ],
  },

  "synthetic-data-ai": {
    category: "DATA & AI / RESEARCH",

    title: "Synthetic Data for Smarter AI",

    intro:
      "Investigating how artificially generated datasets could help teams experiment with AI while reducing dependency on sensitive production data.",

    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=85",

    problem:
      "AI development often depends on large datasets. However, real-world data can contain sensitive information, have access restrictions or lack enough examples for uncommon scenarios.",

    direction:
      "TechWrap is exploring synthetic data generation as an engineering layer for AI experimentation, testing and product prototyping.",

    exploring: [
      "Synthetic dataset generation",
      "AI model experimentation",
      "Edge-case testing",
      "Privacy-aware AI development",
    ],

    technologies: [
      "Python",
      "AI/ML",
      "LLMs",
      "PostgreSQL",
      "MongoDB",
      "APIs",
      "Cloud",
    ],
  },
};

const ResearchDetail: React.FC = () => {
  const { slug } = useParams();

  const research = slug
    ? researchData[slug]
    : undefined;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!research) {
    return (
      <main className="research-not-found">

        <span>
          TECHWRAP RESEARCH
        </span>

        <h1>
          Research not found.
        </h1>

        <Link to="/">
          Return Home →
        </Link>

      </main>
    );
  }

  return (
    <main className="research-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="research-grid" />

      <div className="research-glow research-glow-one" />

      <div className="research-glow research-glow-two" />


      {/* =====================================================
          NAV
      ===================================================== */}

      <div className="research-nav">

        <Link
          to="/pages/Techsucessstorypage"
          className="research-back"
        >
          <span>←</span>
          Back to TechWrap
        </Link>

        <span className="research-nav-label">
          TECHWRAP / RESEARCH LAB
        </span>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="research-hero">

        <div className="research-hero-content">

          <span className="research-category">
            <i />
            {research.category}
          </span>

          <h1>
            {research.title}
          </h1>

          <p>
            {research.intro}
          </p>

          <div className="research-status">

            <span>
              RESEARCH STATUS
            </span>

            <strong>
              EXPLORING
            </strong>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="research-hero-image">

          <img
            src={research.image}
            alt={research.title}
          />

          <div className="research-image-overlay" />

          <div className="research-image-label">
            TECHWRAP RESEARCH LAB
          </div>

          <div className="research-image-scan" />

        </div>

      </section>


      {/* =====================================================
          PREVIEW NOTICE
      ===================================================== */}

      <section className="research-preview">

        <div className="preview-line" />

        <div>

          <span>
            PUBLIC RESEARCH PREVIEW
          </span>

          <p>
            This page intentionally provides only a
            high-level view of the initiative. Detailed
            experiments, architecture decisions, internal
            findings and implementation research remain
            part of TechWrap's private research process.
          </p>

        </div>

      </section>


      {/* =====================================================
          PROBLEM + DIRECTION
      ===================================================== */}

      <section className="research-content">

        <div className="research-block">

          <span className="research-label">
            01 / THE PROBLEM
          </span>

          <h2>
            Why we're
            <span>looking at this.</span>
          </h2>

          <p>
            {research.problem}
          </p>

        </div>


        <div className="research-block">

          <span className="research-label">
            02 / TECHWRAP DIRECTION
          </span>

          <h2>
            A different
            <span>engineering model.</span>
          </h2>

          <p>
            {research.direction}
          </p>

        </div>

      </section>


      {/* =====================================================
          WHAT WE ARE EXPLORING
      ===================================================== */}

      <section className="research-exploring">

        <div className="exploring-heading">

          <span className="research-label">
            03 / CURRENT EXPLORATION
          </span>

          <h2>
            What we're
            <span>exploring.</span>
          </h2>

        </div>


        <div className="exploring-list">

          {research.exploring.map(
            (item, index) => (

              <div
                className="exploring-item"
                key={item}
              >

                <span>
                  0{index + 1}
                </span>

                <p>
                  {item}
                </p>

                <strong>
                  ↗
                </strong>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="research-stack">

        <div>

          <span className="research-label">
            TECHNOLOGY LAYER
          </span>

          <h2>
            Built around
            <span>modern stacks.</span>
          </h2>

        </div>


        <div className="research-technologies">

          {research.technologies.map(
            (technology) => (

              <span key={technology}>
                <i />
                {technology}
              </span>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          PRIVATE RESEARCH
      ===================================================== */}

      <section className="research-private">

        <div className="private-orbit">

          <span />
          <span />
          <span />

        </div>

        <div className="private-content">

          <span className="research-label">
            BEYOND THIS PREVIEW
          </span>

          <h2>
            The deeper
            <span>research stays ahead.</span>
          </h2>

          <p>
            The public page is only a starting point.
            Detailed architecture experiments, benchmarks,
            prototypes and findings are developed internally
            and shared selectively through TechWrap projects
            and research collaborations.
          </p>

          <Link
            to="/Company/Contact/Maincontact"
            className="research-contact-button"
          >
            Discuss This Research

            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="research-footer">

        <span>
          TECHWRAP
        </span>

        <p>
          Researching what comes next.
        </p>

        <Link to="/pages/Techsucessstorypage">
          Back to main site →
        </Link>

      </footer>

    </main>
  );
};

export default ResearchDetail;