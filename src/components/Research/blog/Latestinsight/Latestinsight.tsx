import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Latestinsight.css";
import { insights } from "./blogData";

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "DevOps",
  "Architecture",
];

const LatestInsights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filteredInsights = useMemo(() => {
    if (activeFilter === "All") {
      return insights;
    }

    return insights.filter(
      (article: {
        category: string;
        technologies: any[];
      }) =>
        article.category === activeFilter ||
        article.technologies.some(
          (technology) =>
            technology.toLowerCase() === activeFilter.toLowerCase()
        )
    );
  }, [activeFilter]);

  const openArticle = (id: number) => {
    navigate(`/Blog/Article/${id}`);
  };

  return (
    <section className="tw-latest-section">
      <div className="tw-latest-grid" />
      <div className="tw-latest-grid-glow" />

      <div className="tw-latest-blue-orb tw-orb-one" />
      <div className="tw-latest-blue-orb tw-orb-two" />

      <div className="tw-floating-cross tw-cross-one">+</div>
      <div className="tw-floating-cross tw-cross-two">+</div>

      <div className="tw-latest-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="tw-latest-header">
          <div className="tw-latest-heading">
            <div className="tw-latest-eyebrow">
              <span className="tw-eyebrow-dot" />
              <span>LATEST ENGINEERING INSIGHTS</span>
              <span className="tw-eyebrow-line" />
            </div>

            <h2>
              Engineering
              <span> in practice.</span>
            </h2>

            <p>
              Practical ideas from the technologies, architecture decisions,
              and engineering challenges shaping modern products.
            </p>
          </div>

          <div className="tw-latest-stats">
            <div className="tw-latest-stat">
              <strong>10</strong>
              <span>ARTICLES</span>
            </div>

            <div className="tw-latest-stat-divider" />

            <div className="tw-latest-stat">
              <strong>07</strong>
              <span>TECH AREAS</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING SIGNAL
        ===================================================== */}

        <div className="tw-engineering-signal">
          <div className="tw-signal-label">
            <span className="tw-signal-pulse" />
            TECHWRAP / ENGINEERING JOURNAL
          </div>

          <div className="tw-signal-track">
            <span className="tw-signal-line" />
            <span className="tw-signal-moving-dot" />
          </div>

          <div className="tw-signal-status">
            <span />
            LIVE
          </div>
        </div>

        {/* =====================================================
            FILTER TOOLBAR
        ===================================================== */}

        <div className="tw-insights-toolbar">
          <div className="tw-filter-intro">
            <span>EXPLORE</span>
            <strong>BY TECHNOLOGY</strong>
          </div>

          <div className="tw-insight-filters">
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter}
                className={`tw-filter-button ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                style={{
                  animationDelay: `${index * 55}ms`,
                }}
              >
                <span className="tw-filter-icon">
                  {filter === "All" ? "✦" : "•"}
                </span>

                <span className="tw-filter-label">{filter}</span>

                {activeFilter === filter && (
                  <span className="tw-filter-active-dot" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* =====================================================
            RESULT BAR
        ===================================================== */}

        <div className="tw-result-bar">
          <div className="tw-result-left">
            <span className="tw-result-indicator" />

            <span>
              Showing <strong>{filteredInsights.length}</strong>{" "}
              engineering insights
            </span>
          </div>

          {activeFilter !== "All" && (
            <button
              type="button"
              className="tw-clear-filter"
              onClick={() => setActiveFilter("All")}
            >
              Clear filter
              <span>×</span>
            </button>
          )}
        </div>

        {/* =====================================================
            ARTICLE CARD GRID
            Desktop + Mobile = 3 / 4 / 3
        ===================================================== */}

        <div className="tw-insights-feed tw-insights-card-grid">
          {filteredInsights.map(
            (
              article: {
                id: number;
                image: string | undefined;
                imageAlt: string | undefined;
                number:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                category:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                readTime:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                date:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                description:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                technologies: any[];
              },
              index: number
            ) => (
              <article
                className="tw-insight-card"
                key={article.id}
                style={{
                  animationDelay: `${index * 85}ms`,
                }}
              >

                {/* Image */}

                <div className="tw-card-image-wrap">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="tw-card-image"
                    loading="lazy"
                  />

                  <div className="tw-card-image-overlay" />

                  <span className="tw-card-number">
                    {article.number}
                  </span>

                  <span className="tw-card-category">
                    <span />
                    {article.category}
                  </span>
                </div>

                {/* Content */}

                <div className="tw-card-content">
                  <div className="tw-card-meta">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <div className="tw-insight-tags">
                    {article.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {/* =================================================
                      UPDATED EXPLORE ARTICLE BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    className="tw-card-explore"
                    onClick={() => openArticle(article.id)}
                    aria-label={`Explore ${article.title}`}
                  >
                    <span className="tw-card-explore-shine" />

                    <span className="tw-card-explore-text">
                      Explore article
                    </span>

                    <span className="tw-card-explore-arrow">
                      <span className="tw-card-arrow-symbol">↗</span>
                    </span>
                  </button>
                </div>
              </article>
            )
          )}
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="tw-latest-footer">
          <div className="tw-footer-line" />

          <div className="tw-latest-footer-content">
            <span className="tw-footer-journal">
              TECHWRAP ENGINEERING JOURNAL
            </span>

            <span className="tw-footer-status">
              <i />
              NEW INSIGHTS EVERY WEEK
            </span>

            <button
              type="button"
              className="tw-explore-all"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;