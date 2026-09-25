import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DocumentHero.css";

const DocumentationHero: React.FC = () => {
  const gettingStartedRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  /* =====================================================
     GETTING STARTED NAVIGATION
  ===================================================== */

  const handleGettingStarted = () => {
    navigate("/Company/Contact/Maincontact");
  };

  function handleExploreDocumentation() {
    document
      .getElementById("documentation-categories")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <main className="tw-documentation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tw-documentation-hero">

        {/* Background Grid */}
        <div className="tw-doc-grid" />

        {/* Background Glows */}
        <div className="tw-doc-glow tw-doc-glow-one" />
        <div className="tw-doc-glow tw-doc-glow-two" />

        {/* Animated Particles */}
        <span className="tw-doc-particle tw-doc-particle-one" />
        <span className="tw-doc-particle tw-doc-particle-two" />
        <span className="tw-doc-particle tw-doc-particle-three" />
        <span className="tw-doc-particle tw-doc-particle-four" />

        <div className="tw-documentation-hero-content">

          {/* Eyebrow */}
          <div className="tw-doc-eyebrow">
            <span className="tw-doc-eyebrow-dot" />
            TechWrap Documentation
          </div>

          {/* Heading */}
          <h1>
            Everything You Need
            <span>to Get Started.</span>
          </h1>

          {/* Subtitle */}
          <p className="tw-doc-subtitle">
            Explore TechWrap documentation, guides, and technical resources
            to understand our platform, integrations, and development
            workflows.
          </p>

          {/* CTA Buttons */}
          <div className="tw-doc-actions">

            {/* GETTING STARTED → NEW PAGE */}
            <button
              type="button"
              className="tw-doc-primary-btn"
              onClick={handleGettingStarted}
            >
              <span>Getting Started</span>

              <span className="tw-doc-btn-arrow">
                →
              </span>
            </button>

            {/* EXPLORE → SCROLL */}
            <button
              type="button"
              className="tw-doc-secondary-btn"
              onClick={handleExploreDocumentation}
            >
              Explore Documentation
              <span>↓</span>
            </button>

          </div>

          

        </div>
      </section>


      {/* =====================================================
          DOCUMENTATION CATEGORIES
      ===================================================== */}

      <section
        className="tw-documentation-categories"
        id="documentation-categories"
      >

        <div className="tw-doc-section-heading">

          <span className="tw-doc-section-eyebrow">
            EXPLORE
          </span>

          <h2>
            Documentation built around
            <span> your workflow.</span>
          </h2>

          <p>
            Start with the fundamentals and explore the areas that matter
            most for your project.
          </p>

        </div>


        <div className="tw-documentation-category-grid">

          <DocumentationCard
            number="01"
            title="Getting Started"
            description="Understand TechWrap and quickly begin exploring the platform."
            topics={[
              "Introduction",
              "Quick Start",
              "Platform Overview",
            ]}
            icon="→"
            onExplore={() =>
              navigate("/Documentation/GettingStarted")
            }
          />

          <DocumentationCard
            number="02"
            title="Development"
            description="Explore the technologies and development approaches used with TechWrap."
            topics={[
              "React",
              "TypeScript",
              "Development Workflow",
            ]}
            icon="</>"
            onExplore={() =>
              navigate("/Documentation/Development")
            }
          />

          <DocumentationCard
            number="03"
            title="Integrations"
            description="Understand how TechWrap connects applications and external services."
            topics={[
              "API",
              "Authentication",
              "Webhooks",
            ]}
            icon="↗"
            onExplore={() =>
              navigate("/Documentation/Integrations")
            }
          />

          <DocumentationCard
            number="04"
            title="AI & Automation"
            description="Discover the high-level capabilities of AI-powered workflows."
            topics={[
              "AI APIs",
              "LLMs",
              "Automation",
            ]}
            icon="✦"
            onExplore={() =>
              navigate("/Documentation/AI")
            }
          />

        </div>

      </section>


      {/* =====================================================
          GETTING STARTED
      ===================================================== */}

      <section
        ref={gettingStartedRef}
        className="tw-getting-started-section"
        id="getting-started"
      >

        <div className="tw-getting-started-container">

          {/* Intro */}
          <div className="tw-getting-started-intro">

            <span className="tw-doc-section-eyebrow">
              GETTING STARTED
            </span>

            <h2>
              Your journey with
              <span> TechWrap starts here.</span>
            </h2>

            <p>
              Follow a simple path to understand the platform, choose your
              technology stack, and start building.
            </p>

            <div className="tw-intro-status">
              <span className="tw-status-dot" />
              Beginner friendly
            </div>

          </div>


          {/* Steps */}
          <div className="tw-getting-started-steps">

            <GettingStartedStep
              number="01"
              title="Understand TechWrap"
              description="Start with the platform overview and understand what TechWrap can help you build."
              label="5 min read"
              onRead={() =>
                navigate("/Documentation/GettingStarted")
              }
            />

            <GettingStartedStep
              number="02"
              title="Choose Your Stack"
              description="Explore modern frontend, backend, database, and AI technologies supported by TechWrap."
              label="8 min read"
              onRead={() =>
                navigate("/Documentation/Development")
              }
            />

            <GettingStartedStep
              number="03"
              title="Build Your Project"
              description="Learn the recommended development workflow and move from idea to implementation."
              label="10 min read"
              onRead={() =>
                navigate("/Documentation/Development")
              }
            />

            <GettingStartedStep
              number="04"
              title="Integrate & Deploy"
              description="Understand the general process of connecting services and moving your application toward production."
              label="7 min read"
              onRead={() =>
                navigate("/Documentation/Integrations")
              }
            />

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   DOCUMENTATION CARD
========================================================= */

interface DocumentationCardProps {
  number: string;
  title: string;
  description: string;
  topics: string[];
  icon: string;
  onExplore: () => void;
}

const DocumentationCard: React.FC<DocumentationCardProps> = ({
  number,
  title,
  description,
  topics,
  icon,
  onExplore,
}) => {
  return (
    <article className="tw-documentation-card">

      <div className="tw-card-top">

        <span className="tw-card-number">
          {number}
        </span>

        <span className="tw-card-icon">
          {icon}
        </span>

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tw-card-topics">
        {topics.map((topic) => (
          <span key={topic}>
            {topic}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="tw-card-link"
        onClick={onExplore}
      >
        Explore
        <span>→</span>
      </button>

    </article>
  );
};


/* =========================================================
   GETTING STARTED STEP
========================================================= */

interface GettingStartedStepProps {
  number: string;
  title: string;
  description: string;
  label: string;
  onRead: () => void;
}

const GettingStartedStep: React.FC<GettingStartedStepProps> = ({
  number,
  title,
  description,
  label,
  onRead,
}) => {
  return (
    <article className="tw-getting-step">

      <div className="tw-step-number">
        {number}
      </div>

      <div className="tw-step-content">

        <div className="tw-step-heading">

          <h3>{title}</h3>

          <span>{label}</span>

        </div>

        <p>{description}</p>

        <button
          type="button"
          className="tw-step-read-btn"
          onClick={onRead}
        >
          Read Guide
          <span>→</span>
        </button>

      </div>

    </article>
  );
};

export default DocumentationHero;