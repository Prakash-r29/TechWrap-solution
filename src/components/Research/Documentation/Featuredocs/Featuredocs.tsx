import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featuredocs.css";

interface FeaturedDoc {
  number: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  buttonText: string;
  icon: string;
  route: string;
}

const featuredDocs: FeaturedDoc[] = [
  {
    number: "01",
    category: "QUICK START",
    title: "Build your first TechWrap project",
    description:
      "Get familiar with TechWrap, understand the basic workflow, and start exploring the platform.",
    readTime: "5 min read",
    buttonText: "Read Guide",
    icon: "⌘",
    route: "/resources/documentation/getting-started",
  },

  {
    number: "02",
    category: "API",
    title: "Understand the TechWrap API",
    description:
      "Explore how TechWrap applications can communicate with external services through APIs.",
    readTime: "8 min read",
    buttonText: "Explore API",
    icon: "</>",
    route: "/resources/documentation/api",
  },

  {
    number: "03",
    category: "INTEGRATIONS",
    title: "Connect your applications",
    description:
      "Learn how TechWrap integrations work at a high level without exposing internal implementation details.",
    readTime: "6 min read",
    buttonText: "Explore Integrations",
    icon: "↗",
    route: "/resources/documentation/integrations",
  },

  {
    number: "04",
    category: "DEPLOYMENT",
    title: "From development to production",
    description:
      "Understand the production journey, environments, deployment workflow, and monitoring.",
    readTime: "7 min read",
    buttonText: "Read Guide",
    icon: "▲",
    route: "/resources/documentation/deployment",
  },
];

const FeaturedDocumentation: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

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

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <section
      ref={sectionRef}
      className={`tw-featured-docs ${
        isVisible ? "tw-featured-docs-visible" : ""
      }`}
    >
      {/* Background */}
      <div className="tw-featured-docs-grid" />

      <div className="tw-featured-docs-glow tw-featured-docs-glow-one" />

      <div className="tw-featured-docs-glow tw-featured-docs-glow-two" />

      {/* Header */}
      <div className="tw-featured-docs-header">
        <div className="tw-featured-docs-eyebrow">
          <span />
          FEATURED DOCUMENTATION
          <span />
        </div>

        <h2>
          Start with what
          <strong> matters most.</strong>
        </h2>

        <p>
          A curated collection of resources to help you understand
          TechWrap and move from idea to implementation faster.
        </p>
      </div>

      {/* Documentation List */}
      <div className="tw-featured-docs-list">
        {featuredDocs.map((doc, index) => (
          <article
            key={doc.number}
            className="tw-featured-doc-panel"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
            onClick={() => handleNavigate(doc.route)}
          >
            {/* Left number */}
            <div className="tw-featured-doc-number">
              {doc.number}
            </div>

            {/* Icon */}
            <div className="tw-featured-doc-icon">
              <span>{doc.icon}</span>
            </div>

            {/* Main content */}
            <div className="tw-featured-doc-content">
              <div className="tw-featured-doc-category">
                {doc.category}
              </div>

              <h3>{doc.title}</h3>

              <p>{doc.description}</p>
            </div>

            {/* Right side */}
            <div className="tw-featured-doc-action">
              <span className="tw-featured-doc-time">
                {doc.readTime}
              </span>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleNavigate(doc.route);
                }}
              >
                <span>{doc.buttonText}</span>

                <span className="tw-featured-doc-arrow">
                  →
                </span>
              </button>
            </div>

            {/* Hover shine */}
            <div className="tw-featured-doc-shine" />

            {/* Hover line */}
            <div className="tw-featured-doc-hover-line" />
          </article>
        ))}
      </div>

      {/* Bottom hint */}
      <div className="tw-featured-docs-footer">
        <span className="tw-featured-footer-dot" />

        <span>
          Curated resources · Technical depth without unnecessary complexity
        </span>
      </div>
    </section>
  );
};

export default FeaturedDocumentation;