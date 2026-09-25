import React, { useEffect, useRef, useState } from "react";
import "./Featureinsight.css";

interface Article {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  technology: string;
  tags: string[];
  readTime: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
      id: 1,
      // number: "01",
      category: "FRONTEND ENGINEERING",
      title: "Building Production-Ready React Applications in 2026",
      description: "How modern React teams structure applications for performance, scalability, maintainability, and long-term product growth.",
      technology: "React",
      tags: ["React", "Engineering", "Production"],
      readTime: "8 min read",
      date: "Aug 26, 2026",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 2,
      // number: "02",
      category: "TYPESCRIPT ENGINEERING",
      title: "Designing Scalable TypeScript Applications",
      description: "How engineering teams use TypeScript to create maintainable frontend systems, reusable architecture, and safer product development.",
      technology: "TypeScript",
      tags: ["TypeScript", "Architecture", "Frontend"],
      readTime: "7 min read",
      date: "Aug 24, 2026",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 3,
      // number: "03",
      category: "JAVA ENGINEERING",
      title: "Building Enterprise APIs With Spring Boot",
      description: "A practical look at production API architecture, service boundaries, validation, security, observability, and long-term maintainability.",
      technology: "Spring Boot",
      tags: ["Java", "Spring Boot", "API"],
      readTime: "10 min read",
      date: "Aug 22, 2026",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 4,
      // number: "04",
      category: "BACKEND ENGINEERING",
      title: "Designing Node.js Systems That Scale",
      description: "Architecture patterns for building reliable Node.js services, APIs, background jobs, and high-performance backend applications.",
      technology: "Node.js",
      tags: ["Node.js", "Backend", "API"],
      readTime: "9 min read",
      date: "Aug 20, 2026",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 5,
      // number: "05",
      category: "AI ENGINEERING",
      title: "From LLM APIs to Production AI Products",
      description: "What engineering teams need to consider when moving AI experiments into reliable customer-facing products and workflows.",
      technology: "AI / LLM",
      tags: ["AI", "LLM", "Automation"],
      readTime: "11 min read",
      date: "Aug 18, 2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 6,
      // number: "06",
      category: "PYTHON ENGINEERING",
      title: "Where Python Fits in Modern Product Engineering",
      description: "Exploring Python for AI services, automation, data workflows, APIs, intelligent applications, and modern backend systems.",
      technology: "Python",
      tags: ["Python", "AI", "Backend"],
      readTime: "6 min read",
      date: "Aug 16, 2026",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 7,
      // number: "07",
      category: "DATABASE ENGINEERING",
      title: "PostgreSQL vs MongoDB: Choosing the Right Data Layer",
      description: "A practical framework for selecting relational or document databases based on product requirements, relationships, scale, and flexibility.",
      technology: "PostgreSQL",
      tags: ["PostgreSQL", "MongoDB", "Database"],
      readTime: "8 min read",
      date: "Aug 14, 2026",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 8,
      // number: "08",
      category: "CLOUD & DEVOPS",
      title: "Designing a Reliable CI/CD Pipeline",
      description: "From Git commit to production deployment, explore the engineering principles behind dependable and repeatable software delivery.",
      technology: "DevOps",
      tags: ["Docker", "CI/CD", "Cloud"],
      readTime: "9 min read",
      date: "Aug 12, 2026",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 9,
      // number: "09",
      category: "SYSTEM ARCHITECTURE",
      title: "Monolith or Microservices? Making the Right Decision",
      description: "Why architecture decisions should follow product complexity, team requirements, and business growth rather than technology trends.",
      technology: "Architecture",
      tags: ["Architecture", "Scalability", "Systems"],
      readTime: "10 min read",
      date: "Aug 10, 2026",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },

  {
      id: 10,
      // number: "10",
      category: "API ENGINEERING",
      title: "Designing REST APIs That Scale With Your Product",
      description: "A practical guide to resource design, API versioning, validation, security, errors, documentation, and maintainable contracts.",
      technology: "REST API",
      tags: ["REST", "API", "Backend"],
      readTime: "8 min read",
      date: "Aug 08, 2026",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90",
      number: ""
  },
];

const FeaturedInsights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const currentArticle = articles[currentIndex];

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => {
        return (previous + 1) % articles.length;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const nextArticle = () => {
    setCurrentIndex((previous) => {
      return (previous + 1) % articles.length;
    });
  };

  const previousArticle = () => {
    setCurrentIndex((previous) => {
      return (previous - 1 + articles.length) % articles.length;
    });
  };

  const selectArticle = (index: number) => {
    setCurrentIndex(index);
  };

  /* =========================================================
     TOUCH SUPPORT
  ========================================================= */

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;

    const difference =
      touchStartX.current - touchEndX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextArticle();
      } else {
        previousArticle();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section className="tw-featured-section">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="tw-featured-bg-grid" />

      <div className="tw-featured-bg-glow tw-glow-left" />
      <div className="tw-featured-bg-glow tw-glow-right" />

      <div className="tw-featured-container">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <div className="tw-featured-heading">

          <div>
            <div className="tw-featured-eyebrow">
              <span className="tw-eyebrow-dot" />
              FEATURED ENGINEERING INSIGHT
            </div>

            <h2>
              Ideas worth
              <span> building on.</span>
            </h2>
          </div>

          <div className="tw-featured-intro">
            <p>
              Engineering knowledge, architecture decisions,
              and technology insights from the world of
              modern software.
            </p>

            <div className="tw-featured-total">
              
            </div>
          </div>
        </div>

        {/* ===================================================
            MAIN INFINITE FEATURE CARD
        =================================================== */}

        <div
          className="tw-featured-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* =================================================
              IMAGE SIDE
          ================================================= */}

          <div className="tw-featured-image">

            <img
              key={currentArticle.image}
              src={currentArticle.image}
              alt={currentArticle.title}
              className="tw-featured-main-image"
            />

            <div className="tw-featured-image-overlay" />

            {/* Number */}

            <div className="tw-featured-number">
              {currentArticle.number}

              <span>
                
              </span>
            </div>

            {/* Top badge */}

            <div className="tw-featured-image-badge">
              <span className="tw-image-status" />
              TECHWRAP / INSIGHT
            </div>

            {/* Technology */}

            <div className="tw-featured-image-tech">
              {currentArticle.technology}
            </div>

            {/* Image decoration */}

            <div className="tw-image-corner tw-corner-one" />
            <div className="tw-image-corner tw-corner-two" />
          </div>

          {/* =================================================
              CONTENT SIDE
          ================================================= */}

          <div className="tw-featured-content">

            <div className="tw-featured-content-top">

              <div className="tw-featured-meta">

                <span>
                  {currentArticle.category}
                </span>

                <i />

                <span>
                  {currentArticle.readTime}
                </span>

              </div>

              <div className="tw-slide-controls">

                <button
                  onClick={previousArticle}
                  aria-label="Previous article"
                >
                  ←
                </button>

                <button
                  onClick={nextArticle}
                  aria-label="Next article"
                >
                  →
                </button>

              </div>

            </div>

            {/* Title */}

            <h3
              key={`title-${currentArticle.id}`}
              className="tw-featured-title"
            >
              {currentArticle.title}
            </h3>

            {/* Description */}

            <p
              key={`description-${currentArticle.id}`}
              className="tw-featured-description"
            >
              {currentArticle.description}
            </p>

            {/* Author */}

            <div className="tw-featured-author-row">

              <div className="tw-featured-author">

                

                <div className="tw-author-details">
                  <strong>
                    TechWrap Engineering
                  </strong>

                  <span>
                    {currentArticle.date}
                  </span>
                </div>

              </div>

              <button className="tw-featured-read">
                Read article
                <span></span>
              </button>

            </div>

            {/* Technology */}

            <div className="tw-featured-technology">

              <span className="tw-technology-label">
                TECHNOLOGY
              </span>

              <div className="tw-technology-tags">

                {currentArticle.tags.map(
                  (tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className={
                        index === 0
                          ? "primary"
                          : ""
                      }
                    >
                      {tag}
                    </span>
                  )
                )}

              </div>

            </div>

            {/* Progress */}

            <div className="tw-featured-progress">

              <div className="tw-progress-numbers">
                <strong>
                  {currentArticle.number}
                </strong>

                <span>
                
                </span>
              </div>

              <div className="tw-progress-track">

                <div
                  className="tw-progress-fill"
                  style={{
                    width: `${
                      ((currentIndex + 1) /
                        articles.length) *
                      100
                    }%`,
                  }}
                />

              </div>

              <div className="tw-autoplay">

                <span
                  className={
                    isPaused
                      ? "paused"
                      : ""
                  }
                />

                {isPaused
                  ? "PAUSED"
                  : "AUTOPLAY"}
              </div>

            </div>

          </div>
        </div>

        {/* ===================================================
            10 ARTICLE SELECTOR
        =================================================== */}

        <div className="tw-insight-selector">

          <div className="tw-selector-heading">
            <div>
              <span>
                MORE FROM TECHWRAP
              </span>

              <h3>
                Explore engineering insights
              </h3>
            </div>

            <span className="tw-selector-count">
              
            </span>
          </div>

          {/* Horizontal infinite-looking selector */}

          <div className="tw-selector-window">

            <div className="tw-selector-track">

              {[...articles, ...articles].map(
                (article, index) => {

                  const originalIndex =
                    index % articles.length;

                  return (
                    <button
                      key={`${article.id}-${index}`}
                      className={`tw-selector-card ${
                        currentIndex ===
                        originalIndex
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        selectArticle(
                          originalIndex
                        )
                      }
                    >

                      <div className="tw-selector-image">

                        <img
                          src={article.image}
                          alt=""
                          loading="lazy"
                        />

                        <span>
                          {article.number}
                        </span>

                      </div>

                      <div className="tw-selector-content">

                        <small>
                          {article.category}
                        </small>

                        <strong>
                          {article.title}
                        </strong>

                        <div>
                          <span>
                            {article.technology}
                          </span>

                          <span>
                            {article.readTime}
                          </span>
                        </div>

                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </div>
        </div>

        {/* {/* ===================================================
            STACK LINE
        =================================================== */}

        <div className="tw-featured-stack">


        </div> 

      </div>
    </section>
  );
};

export default FeaturedInsights;