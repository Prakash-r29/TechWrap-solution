import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Platformdetails.css";

interface PlatformSection {
  id: string;
  number: string;
  icon: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  stat: string;
  statLabel: string;
  image: string;
  imageAlt: string;
}

const platformSections: PlatformSection[] = [
  {
    id: "web-development",
    number: "01",
    icon: "⌘",
    title: "Web Development",
    eyebrow: "BUILD DIGITAL EXPERIENCES",
    description:
      "Build modern, responsive and scalable web applications with a technology stack designed for performance, maintainability and growth.",
    features: [
      "React & TypeScript applications",
      "Responsive UI and UX",
      "Reusable component architecture",
      "API-driven applications",
    ],
    stat: "100%",
    statLabel: "Responsive",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Developer working with code on a modern software development screen",
  },

  {
    id: "ai-products",
    number: "02",
    icon: "✦",
    title: "AI Products",
    eyebrow: "BUILD WITH INTELLIGENCE",
    description:
      "Create AI-powered products that automate workflows, improve decision making and deliver intelligent experiences to your users.",
    features: [
      "AI-powered applications",
      "LLM integrations",
      "AI workflows & automation",
      "Intelligent product experiences",
    ],
    stat: "24/7",
    statLabel: "Automation",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Artificial intelligence technology visualization",
  },

  {
    id: "devops",
    number: "03",
    icon: "⚙",
    title: "DevOps",
    eyebrow: "SHIP WITH CONFIDENCE",
    description:
      "Streamline development and deployment with reliable CI/CD pipelines, automated infrastructure and continuous monitoring.",
    features: [
      "CI/CD automation",
      "Deployment workflows",
      "Infrastructure management",
      "Application monitoring",
    ],
    stat: "99.9%",
    statLabel: "Reliability",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Cloud infrastructure and technology network",
  },

  {
    id: "integrations",
    number: "04",
    icon: "⌁",
    title: "Integrations",
    eyebrow: "CONNECT EVERYTHING",
    description:
      "Connect APIs, applications and third-party services through a flexible integration architecture built for modern digital products.",
    features: [
      "REST API integrations",
      "Third-party services",
      "Webhooks & automation",
      "Secure data connections",
    ],
    stat: "100+",
    statLabel: "Connections",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Technology hardware and connected systems",
  },

  {
    id: "analytics",
    number: "05",
    icon: "◌",
    title: "Analytics",
    eyebrow: "TURN DATA INTO INSIGHTS",
    description:
      "Monitor users, API activity and product performance with real-time analytics that help teams understand what is happening across their platform.",
    features: [
      "User activity analytics",
      "API usage monitoring",
      "Product performance metrics",
      "Real-time dashboards",
    ],
    stat: "Real-time",
    statLabel: "Insights",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Business analytics and data visualization",
  },

  {
    id: "security",
    number: "06",
    icon: "◇",
    title: "Security",
    eyebrow: "PROTECT WHAT YOU BUILD",
    description:
      "Build secure applications with authentication, authorization and infrastructure practices designed to protect your digital products.",
    features: [
      "Secure authentication",
      "Authorization systems",
      "Protected APIs",
      "Infrastructure security",
    ],
    stat: "24/7",
    statLabel: "Protection",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Cybersecurity concept with digital security interface",
  },
];

const PlatformDetails: React.FC = () => {
  const navigate = useNavigate();

  /* =========================================================
     BACK TO PLATFORM CAPABILITIES CARDS
     ========================================================= */

  const handleBackToCapabilities = () => {
    navigate(-1);
  };

  /* =========================================================
     EXPLORE CAPABILITIES

     IMPORTANT:
     This stays on the PlatformDetails page and smoothly
     scrolls to the FIRST capability section.

     No route navigation happens here.
     ========================================================= */

  const handleExploreCapabilities = () => {
    const firstCapability = document.getElementById("web-development");

    if (firstCapability) {
      firstCapability.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="platform-details-page">

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <button
        type="button"
        className="platform-back-button"
        onClick={handleBackToCapabilities}
        aria-label="Back to Platform Capabilities"
      >
        <span
          className="platform-back-icon"
          aria-hidden="true"
        >
          <span className="back-arrow">←</span>
        </span>

        <span className="platform-back-content">
          <small>BACK TO</small>
          <strong>Card</strong>
        </span>

        <span
          className="platform-back-shine"
          aria-hidden="true"
        ></span>
      </button>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="platform-details-hero">

        <div
          className="details-grid"
          aria-hidden="true"
        ></div>

        <div
          className="details-glow details-glow-one"
          aria-hidden="true"
        ></div>

        <div
          className="details-glow details-glow-two"
          aria-hidden="true"
        ></div>

        <div className="container">

          <div className="details-hero-layout">

            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div className="details-hero-content">

              <div className="details-label">
                <span aria-hidden="true"></span>
                TECHWRAP PLATFORM
              </div>

              <h1>
                Everything you need to
                <span>build what's next.</span>
              </h1>

              <p>
                Explore the technologies, capabilities and
                infrastructure that help teams build,
                integrate and scale modern digital products.
              </p>

              {/* =================================================
                  EXPLORE CAPABILITIES BUTTON

                  Clicking this button ONLY scrolls to the
                  first capability section on this page.
              ================================================= */}

              <button
                type="button"
                className="details-hero-button"
                onClick={handleExploreCapabilities}
                aria-label="Explore TechWrap capabilities"
              >
                <span className="hero-button-text">
                  Explore Capabilities
                </span>

                <span
                  className="hero-button-arrow"
                  aria-hidden="true"
                >
                  ↓
                </span>

                <span
                  className="hero-button-shine"
                  aria-hidden="true"
                ></span>
              </button>

            </div>

            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="details-hero-visual">

              <div
                className="hero-visual-glow"
                aria-hidden="true"
              ></div>

              <div className="hero-visual-card">

                <div className="hero-visual-header">

                  <div
                    className="hero-window-controls"
                    aria-hidden="true"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="hero-visual-title">
                    TechWrap Platform
                  </div>

                  <div className="hero-visual-live">
                    <i aria-hidden="true"></i>
                    Live
                  </div>

                </div>

                <div className="hero-image-wrapper">

                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90"
                    alt="Modern product analytics and technology dashboard"
                    className="hero-platform-image"
                  />

                  <div
                    className="hero-image-overlay"
                    aria-hidden="true"
                  ></div>

                  <div
                    className="hero-image-grid"
                    aria-hidden="true"
                  ></div>

                  <div className="hero-image-content">

                    <span className="hero-image-label">
                      PRODUCT ANALYTICS
                    </span>

                    <strong>
                      Build. Integrate. Scale.
                    </strong>

                    <p>
                      One platform for modern digital products.
                    </p>

                  </div>

                  <div className="hero-mini-chart">

                    <div className="mini-chart-header">
                      <span>Growth</span>
                      <strong>+24.7%</strong>
                    </div>

                    <div className="mini-chart-bars">

                      <span style={{ height: "35%" }}></span>
                      <span style={{ height: "48%" }}></span>
                      <span style={{ height: "42%" }}></span>
                      <span style={{ height: "62%" }}></span>
                      <span style={{ height: "74%" }}></span>
                      <span style={{ height: "92%" }}></span>

                    </div>

                  </div>

                </div>

                <div className="hero-dashboard-row">

                  <div className="hero-dashboard-item">
                    <span>Active Users</span>
                    <strong>24.5K</strong>
                  </div>

                  <div className="hero-dashboard-item">
                    <span>API Calls</span>
                    <strong>1.82M</strong>
                  </div>

                  <div className="hero-dashboard-item">
                    <span>Deployments</span>
                    <strong>3,240</strong>
                  </div>

                </div>

              </div>

              {/* =================================================
                  FLOATING CARD 1
              ================================================= */}

              <div className="hero-floating-card hero-floating-card-one">

                <span
                  className="floating-status-dot"
                  aria-hidden="true"
                ></span>

                <div>
                  <small>Deployment</small>
                  <strong>Successful</strong>
                </div>

              </div>

              {/* =================================================
                  FLOATING CARD 2
              ================================================= */}

              <div className="hero-floating-card hero-floating-card-two">

                <div
                  className="floating-icon"
                  aria-hidden="true"
                >
                  ⚡
                </div>

                <div>
                  <small>API Requests</small>
                  <strong>1.82M</strong>
                </div>

              </div>

              {/* =================================================
                  FLOATING CARD 3
              ================================================= */}

              <div className="hero-floating-card hero-floating-card-three">

                <div className="floating-users">

                  <span>R</span>
                  <span>A</span>
                  <span>K</span>
                  <span>+</span>

                </div>

                <div>
                  <strong>2,480+</strong>
                  <small>Active today</small>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PLATFORM DETAIL SECTIONS
      ===================================================== */}

      <section
        className="platform-detail-sections"
        aria-label="TechWrap Platform Capabilities"
      >

        <div className="container">

          {platformSections.map((section, index) => (

            <article
              id={section.id}
              className={`platform-detail-section ${
                index % 2 !== 0
                  ? "detail-reverse"
                  : ""
              }`}
              key={section.id}
            >

              {/* =================================================
                  DETAIL VISUAL
              ================================================= */}

              <div className="detail-visual">

                <div className="detail-image-wrapper">

                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="detail-section-image"
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                  />

                  <div
                    className="detail-image-overlay"
                    aria-hidden="true"
                  ></div>

                </div>

                <div
                  className="detail-visual-grid"
                  aria-hidden="true"
                ></div>

                <div
                  className="detail-visual-glow"
                  aria-hidden="true"
                ></div>

                <div
                  className="detail-number"
                  aria-hidden="true"
                >
                  {section.number}
                </div>

                <div
                  className="detail-icon"
                  aria-hidden="true"
                >
                  <span className="detail-icon-symbol">
                    {section.icon}
                  </span>
                </div>

                <div className="detail-floating-card detail-floating-one">

                  <span aria-hidden="true"></span>

                  <strong>TechWrap</strong>

                </div>

                <div className="detail-floating-card detail-floating-two">

                  <strong>{section.stat}</strong>

                  <small>{section.statLabel}</small>

                </div>

              </div>

              {/* =================================================
                  DETAIL CONTENT
              ================================================= */}

              <div className="detail-content">

                <div className="detail-section-number">
                  {section.number} / 06
                </div>

                <div className="detail-eyebrow">
                  {section.eyebrow}
                </div>

                <h2>
                  {section.title}
                </h2>

                <p className="detail-description">
                  {section.description}
                </p>

                <div className="detail-features">

                  {section.features.map((feature) => (

                    <div
                      className="detail-feature"
                      key={feature}
                    >

                      <span className="feature-check">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  to="/Company/Contact/Maincontact"
                  className="detail-cta"
                >

                  <span className="detail-cta-text">
                    Start a Project
                  </span>

                  <span
                    className="detail-cta-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                  <span
                    className="detail-cta-shine"
                    aria-hidden="true"
                  ></span>

                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="platform-final-cta">

        <div
          className="final-cta-glow"
          aria-hidden="true"
        ></div>

        <div className="container">

          <div className="final-cta-content">

            <div className="details-label">

              <span aria-hidden="true"></span>

              BUILD WITH TECHWRAP

            </div>

            <h2>
              Ready to build
              <span>what's next?</span>
            </h2>

            <p>
              Turn your idea into a scalable digital product
              with the right technology, architecture and
              engineering approach.
            </p>

            <Link
              to="/Company/Contact/Maincontact"
              className="details-hero-button final-cta-button"
            >

              <span className="hero-button-text">
                Get Started
              </span>

              <span
                className="hero-button-arrow"
                aria-hidden="true"
              >
                →
              </span>

              <span
                className="hero-button-shine"
                aria-hidden="true"
              ></span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default PlatformDetails;