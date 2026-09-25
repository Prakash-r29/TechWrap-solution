import React, { useState } from "react";
import "./Bloghero.css";

const categories = [
  {
    name: "Engineering",
    icon: "</>",
  },
  {
    name: "AI & ML",
    icon: "✦",
  },
  {
    name: "Frontend",
    icon: "◈",
  },
  {
    name: "Backend",
    icon: "⌘",
  },
  {
    name: "Cloud & DevOps",
    icon: "☁",
  },
  {
    name: "Architecture",
    icon: "⌬",
  },
];


const BlogHero: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState("Engineering");

  return (
    <section className="tw-new-blog-hero">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="tw-new-blog-grid" />

      <div className="tw-new-blog-glow tw-new-blog-glow-left" />
      <div className="tw-new-blog-glow tw-new-blog-glow-right" />


      <div className="tw-new-blog-container">

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="tw-new-blog-topbar">

          <div className="tw-new-blog-status">
            <span className="tw-new-status-dot" />

            <span>
              TECHWRAP ENGINEERING
            </span>

            <i />

            <span>
              INSIGHTS · 2026
            </span>
          </div>


          

        </div>


        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="tw-new-blog-main">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="tw-new-blog-copy">

            <div className="tw-new-blog-eyebrow">

              <span className="tw-new-eyebrow-dot" />

              <span>
                ENGINEERING / KNOWLEDGE
              </span>

              <div />

            </div>


            <h1 className="tw-new-blog-title">

              <span>
                Technology That
              </span>

              <span className="tw-new-title-blue">
                Moves Products
              </span>

              <span>
                Forward.
              </span>

            </h1>


            <p className="tw-new-blog-description">
              Engineering insights, architecture decisions, AI
              developments, and practical lessons from building
              modern software with TechWrap.
            </p>


            {/* =================================================
                TOPICS
            ================================================= */}

            <div className="tw-new-blog-topics">

              <div className="tw-new-topic-label">
                EXPLORE TOPICS
              </div>


              <div className="tw-new-topic-list">

                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.name}
                    className={`tw-new-topic-chip ${
                      activeCategory === category.name
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveCategory(category.name)
                    }
                    aria-pressed={
                      activeCategory === category.name
                    }
                  >

                    <span className="tw-new-topic-icon">
                      {category.icon}
                    </span>

                    <span>
                      {category.name}
                    </span>

                    {activeCategory === category.name && (
                      <span className="tw-new-topic-active" />
                    )}

                  </button>
                ))}

              </div>

            </div>


            

          </div>


          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="tw-new-blog-visual">

            {/* Decorative blue shape */}
            <div className="tw-new-visual-orb" />


            {/* =================================================
                FLOATING REACT BADGE
            ================================================= */}

            <div className="tw-new-floating-badge tw-new-badge-react">

              <span>⚛</span>

              React

            </div>


            {/* =================================================
                FLOATING JAVA BADGE
            ================================================= */}

            <div className="tw-new-floating-badge tw-new-badge-java">

              <span>☕</span>

              Java

            </div>


            {/* =================================================
                MAIN ENGINEERING CARD
            ================================================= */}

            <div className="tw-new-engineering-card">

              {/* Header */}

              <div className="tw-new-card-header">

                <div className="tw-new-window-dots">

                  <span />
                  <span />
                  <span />

                </div>


                <span className="tw-new-window-title">
                  techwrap / engineering
                </span>


                <div className="tw-new-live">

                  <span />

                  LIVE

                </div>

              </div>


              {/* Body */}

              <div className="tw-new-card-body">

                {/* =================================================
                    CARD LABEL
                ================================================= */}

                <div className="tw-new-card-label">
                  PRODUCT ARCHITECTURE
                </div>


                <div className="tw-new-card-heading">
                  Build systems that
                  <strong>
                    scale with your product.
                  </strong>
                </div>


                {/* =================================================
                    ARCHITECTURE FLOW
                ================================================= */}

                <div className="tw-new-architecture-flow">

                  <div className="tw-new-flow-node">

                    <span className="tw-new-flow-icon">
                      UI
                    </span>

                    <div>
                      <strong>
                        Frontend
                      </strong>

                      <small>
                        React · TS
                      </small>
                    </div>

                  </div>


                  <div className="tw-new-flow-arrow">
                    <span />
                    →
                  </div>


                  <div className="tw-new-flow-node active">

                    <span className="tw-new-flow-icon">
                      API
                    </span>

                    <div>
                      <strong>
                        Backend
                      </strong>

                      <small>
                        Java · Node
                      </small>
                    </div>

                  </div>


                  <div className="tw-new-flow-arrow">
                    <span />
                    →
                  </div>


                  <div className="tw-new-flow-node">

                    <span className="tw-new-flow-icon">
                      DB
                    </span>

                    <div>
                      <strong>
                        Data
                      </strong>

                      <small>
                        SQL · NoSQL
                      </small>
                    </div>

                  </div>

                </div>


                {/* =================================================
                    AI BLOCK
                ================================================= */}

                <div className="tw-new-ai-block">

                  <div className="tw-new-ai-icon">
                    ✦
                  </div>


                  <div className="tw-new-ai-text">

                    <strong>
                      AI / Intelligence Layer
                    </strong>

                    <span>
                      LLMs · Agents · Automation
                    </span>

                  </div>


                  <div className="tw-new-ai-pulse" />

                </div>


                {/* =================================================
                    METRICS
                ================================================= */}

                <div className="tw-new-card-metrics">

                  <div>
                    <small>
                      ARCHITECTURE
                    </small>

                    <strong>
                      SCALABLE
                    </strong>
                  </div>


                  <div>
                    <small>
                      STACK
                    </small>

                    <strong>
                      MODERN
                    </strong>
                  </div>


                  <div>
                    <small>
                      INTELLIGENCE
                    </small>

                    <strong>
                      AI-POWERED
                    </strong>
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                FLOATING AI BADGE
            ================================================= */}

            <div className="tw-new-floating-badge tw-new-badge-ai">

              <span>
                ✦
              </span>

              AI / LLM

            </div>


            {/* =================================================
                FLOATING CLOUD BADGE
            ================================================= */}

            <div className="tw-new-floating-badge tw-new-badge-cloud">

              <span>
                ☁
              </span>

              Cloud

            </div>


            {/* =================================================
                BOTTOM METRIC
            ================================================= */}

            <div className="tw-new-visual-metric">

              <span className="tw-new-metric-dot" />

              <div>

                <small>
                  ENGINEERING SIGNAL
                </small>

                <strong>
                  01 → BUILD → SCALE
                </strong>

              </div>

            </div>

          </div>

        </div>


        

        

        </div>

      

    </section>
  );
};

export default BlogHero;