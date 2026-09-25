import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Documentationcategory.css";

/* =========================================================
   TYPES
========================================================= */

interface DocumentationCategory {
  number: string;
  icon: string;
  title: string;
  description: string;
  topics: string[];
  route: string;
  accent: string;
}


/* =========================================================
   DOCUMENTATION DATA
========================================================= */

const documentationCategories: DocumentationCategory[] = [
  {
    number: "01",
    icon: "→",
    title: "Getting Started",
    description:
      "Understand TechWrap and quickly explore the platform.",
    topics: [
      "Introduction",
      "Platform Overview",
      "Quick Start",
      "Account Setup",
    ],
    route: "/resources/documentation/getting-started",
    accent: "blue",
  },

  {
    number: "02",
    icon: "</>",
    title: "Development",
    description:
      "Resources for developers building with TechWrap.",
    topics: [
      "Development Overview",
      "Project Structure",
      "Technology Stack",
      "Development Workflow",
    ],
    route: "/resources/documentation/development",
    accent: "indigo",
  },

  {
    number: "03",
    icon: "↗",
    title: "Integrations",
    description:
      "Understand how TechWrap connects with external systems.",
    topics: [
      "API Overview",
      "Authentication",
      "Webhooks",
      "Third-party Integrations",
    ],
    route: "/resources/documentation/integrations",
    accent: "cyan",
  },

  {
    number: "04",
    icon: "✦",
    title: "AI & Automation",
    description:
      "High-level information about TechWrap's AI capabilities.",
    topics: [
      "AI Overview",
      "AI Workflows",
      "Automation",
      "AI Integrations",
    ],
    route: "/resources/documentation/ai-automation",
    accent: "purple",
  },

  {
    number: "05",
    icon: "▲",
    title: "Deployment",
    description:
      "Understand the production workflow from development to deployment.",
    topics: [
      "Deployment Overview",
      "Environments",
      "CI/CD",
      "Monitoring",
    ],
    route: "/resources/documentation/deployment",
    accent: "green",
  },

  {
    number: "06",
    icon: "◇",
    title: "Security",
    description:
      "High-level security information without exposing sensitive architecture.",
    topics: [
      "Security Overview",
      "Authentication",
      "Data Protection",
      "Best Practices",
    ],
    route: "/resources/documentation/security",
    accent: "orange",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

const DocumentationCategories: React.FC = () => {
  const navigate = useNavigate();

  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

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

    observer.observe(element);

    return () => observer.disconnect();
  }, []);


  /* =======================================================
     NAVIGATION
  ======================================================= */

  const handleNavigate = (route: string) => {
    navigate(route);
  };


  return (
    <section
      ref={sectionRef}
      className={`tw-doc-categories ${
        visible ? "tw-doc-categories-visible" : ""
      }`}
      id="documentation-categories"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="tw-doc-categories-grid" />

      <div className="tw-doc-category-glow tw-doc-category-glow-left" />

      <div className="tw-doc-category-glow tw-doc-category-glow-right" />


      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="tw-doc-category-header">

        <div className="tw-doc-category-eyebrow">
          <span className="tw-category-eyebrow-line" />
          DOCUMENTATION
          <span className="tw-category-eyebrow-line" />
        </div>


        <h2>
          Explore the
          <span> TechWrap documentation.</span>
        </h2>


        <p>
          Start with a high-level overview and explore only what you
          need — from development and integrations to AI, deployment,
          and security.
        </p>

      </div>


      {/* =====================================================
          CATEGORY GRID
      ===================================================== */}

      <div className="tw-doc-category-grid">

        {documentationCategories.map((category, index) => (
          <DocumentationCategoryCard
            key={category.title}
            category={category}
            index={index}
            onNavigate={handleNavigate}
          />
        ))}

      </div>


      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <div className="tw-doc-category-note">

        <span className="tw-doc-note-dot" />

        <p>
          Documentation provides the right level of information
          without exposing internal implementation details.
        </p>

      </div>

    </section>
  );
};


/* =========================================================
   CATEGORY CARD
========================================================= */

interface DocumentationCategoryCardProps {
  category: DocumentationCategory;
  index: number;
  onNavigate: (route: string) => void;
}


const DocumentationCategoryCard: React.FC<
  DocumentationCategoryCardProps
> = ({
  category,
  index,
  onNavigate,
}) => {

  const [activeTopic, setActiveTopic] = useState<string | null>(
    null
  );


  const handleTopicClick = (
    event: React.MouseEvent,
    topic: string
  ) => {
    event.stopPropagation();

    setActiveTopic(topic);

    /*
      Topic-level pages can later be added here.

      For now the category route receives the topic
      through the query string.
    */

    onNavigate(
      `${category.route}?topic=${encodeURIComponent(topic)}`
    );
  };


  return (
    <article
      className={`tw-doc-category-card tw-doc-category-${category.accent}`}
      style={{
        transitionDelay: `${index * 90}ms`,
      }}
      onClick={() => onNavigate(category.route)}
    >

      {/* =====================================================
          CARD TOP
      ===================================================== */}

      <div className="tw-doc-card-top">

        <span className="tw-doc-card-number">
          {category.number}
        </span>

        <div className="tw-doc-card-icon">
          <span>{category.icon}</span>
        </div>

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="tw-doc-card-content">

        <h3>
          {category.title}
        </h3>

        <p>
          {category.description}
        </p>


        {/* =================================================
            TOPICS
        ================================================= */}

        <div className="tw-doc-card-topics">

          {category.topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className={
                activeTopic === topic
                  ? "tw-doc-topic-active"
                  : ""
              }
              onClick={(event) =>
                handleTopicClick(event, topic)
              }
            >
              <span className="tw-topic-check">
                +
              </span>

              {topic}
            </button>
          ))}

        </div>

      </div>


      {/* =====================================================
          CARD FOOTER
      ===================================================== */}

      <div className="tw-doc-card-footer">

        <button
          type="button"
          className="tw-doc-explore-btn"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate(category.route);
          }}
        >
          <span>
            Explore documentation
          </span>

          <span className="tw-doc-explore-arrow">
            →
          </span>
        </button>


        <span className="tw-doc-card-arrow">
          ↗
        </span>

      </div>


      {/* =====================================================
          CARD SHINE
      ===================================================== */}

      <div className="tw-doc-card-shine" />

    </article>
  );
};


export default DocumentationCategories;