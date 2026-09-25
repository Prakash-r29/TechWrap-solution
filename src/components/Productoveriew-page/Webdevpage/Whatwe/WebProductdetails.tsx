import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./WebProductdetails.css";

interface WebProduct {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  stat: string;
  statLabel: string;
  technologies: string[];
}

const webProducts: WebProduct[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    eyebrow: "DIGITAL EXPERIENCES THAT CONVERT",
    description:
      "High-performance business websites designed to communicate your brand clearly, build trust and convert visitors into customers. We combine strong visual design, responsive development and conversion-focused UX to create websites that work as a growth engine for your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Modern business website and analytics interface displayed on a laptop",
    features: [
      "Modern responsive design",
      "Conversion-focused UX",
      "SEO-ready architecture",
      "High-performance development",
    ],
    stat: "100%",
    statLabel: "Responsive",
    technologies: ["React", "TypeScript", "Bootstrap", "REST APIs"],
  },

  {
    id: "saas-applications",
    number: "02",
    title: "SaaS Applications",
    eyebrow: "BUILD PRODUCTS THAT SCALE",
    description:
      "Build powerful SaaS applications with scalable architecture, intuitive interfaces and reliable backend systems. From authentication and dashboards to APIs and subscription workflows, we create SaaS products designed for growing businesses and teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "SaaS analytics dashboard showing application performance metrics",
    features: [
      "Scalable application architecture",
      "Authentication & user management",
      "Interactive dashboards",
      "API-driven development",
    ],
    stat: "24/7",
    statLabel: "Scalable",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },

  {
    id: "e-commerce",
    number: "03",
    title: "E-Commerce",
    eyebrow: "TURN SHOPPING INTO EXPERIENCE",
    description:
      "Create secure and optimized e-commerce experiences that make shopping simple, fast and engaging. We build product catalogs, checkout experiences, payment integrations and management systems designed to help businesses increase online sales.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "E-commerce shopping experience with online store interface",
    features: [
      "Product catalog experiences",
      "Shopping cart & checkout",
      "Payment integration",
      "Order management",
    ],
    stat: "99.9%",
    statLabel: "Reliable",
    technologies: ["React", "TypeScript", "Payment APIs", "REST APIs"],
  },

  {
    id: "web-portals",
    number: "04",
    title: "Web Portals",
    eyebrow: "CONNECTED DIGITAL WORKSPACES",
    description:
      "Build customer, employee and partner portals that bring information, workflows and services into one connected digital workspace. We create secure portal experiences with role-based access and business-specific workflows.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Business team collaborating around a modern digital workspace",
    features: [
      "Role-based access",
      "Customer portals",
      "Employee platforms",
      "Workflow automation",
    ],
    stat: "Secure",
    statLabel: "Access",
    technologies: ["React", "TypeScript", "REST APIs", "Authentication"],
  },

  {
    id: "admin-dashboards",
    number: "05",
    title: "Admin Dashboards",
    eyebrow: "SEE YOUR BUSINESS CLEARLY",
    description:
      "Turn complex business data into simple, actionable dashboards. We create data-rich admin interfaces that help teams monitor performance, understand trends and make faster business decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Modern analytics dashboard with charts and business performance data",
    features: [
      "Real-time data visualization",
      "Interactive analytics",
      "Role-based dashboards",
      "Business performance metrics",
    ],
    stat: "Real-time",
    statLabel: "Analytics",
    technologies: ["React", "TypeScript", "Charts", "REST APIs"],
  },

  {
    id: "custom-applications",
    number: "06",
    title: "Custom Applications",
    eyebrow: "BUILT AROUND YOUR WORKFLOW",
    description:
      "Create custom web applications designed specifically around your business processes, users and long-term technology goals. We transform complex requirements into intuitive, scalable and maintainable digital products.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90",
    imageAlt:
      "Software development team building a custom web application",
    features: [
      "Custom business workflows",
      "Scalable architecture",
      "Third-party integrations",
      "Tailored user experiences",
    ],
    stat: "100%",
    statLabel: "Custom",
    technologies: ["React", "TypeScript", "APIs", "Cloud"],
  },
];

const WebProductDetails: React.FC = () => {
  const navigate = useNavigate();

  /* =========================================================
     SCROLL TO SELECTED PRODUCT
     ========================================================= */

  useEffect(() => {
    const scrollToHashSection = () => {
      const hash = window.location.hash;

      /*
       * No hash means user opened the details page directly.
       * Start at the hero.
       */
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });

        return;
      }

      const sectionId = decodeURIComponent(hash.substring(1));

      /*
       * Wait until React has rendered all product sections.
       */
      const timer = window.setTimeout(() => {
        const target = document.getElementById(sectionId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 350);

      return () => {
        window.clearTimeout(timer);
      };
    };

    const cleanup = scrollToHashSection();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  /* =========================================================
     BACK TO WEB DEVELOPMENT PAGE
     ========================================================= */

  const handleBackToProducts = () => {
    /*
     * Navigate directly to the Web Development page.
     *
     * The #solutions hash tells the Web Development page
     * exactly which section should be displayed.
     */
    navigate("/Productoveriew-page/Webdevpage/Mainweb");
  };

  return (
    <main className="web-product-details-page">

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <button
        type="button"
        className="web-product-back"
        onClick={handleBackToProducts}
        aria-label="Back to Web Development products"
      >
        <span aria-hidden="true">
          ←
        </span>

        <div>
          <small>
            BACK TO
          </small>

          <strong>
            Products
          </strong>
        </div>
      </button>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="web-product-hero">

        <div
          className="product-hero-grid"
          aria-hidden="true"
        ></div>

        <div
          className="product-hero-glow product-glow-one"
          aria-hidden="true"
        ></div>

        <div
          className="product-hero-glow product-glow-two"
          aria-hidden="true"
        ></div>

        <div className="container">

          <div className="product-hero-layout">

            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div className="product-hero-content">

              <div className="product-details-label">

                <span aria-hidden="true"></span>

                TECHWRAP WEB DEVELOPMENT

              </div>

              <div className="product-number">
                01 — 06
              </div>

              <h1>
                Digital products
                <br />
                <span>
                  built to perform.
                </span>
              </h1>

              <p className="product-hero-description">
                From business websites and SaaS platforms to
                e-commerce experiences, portals and custom
                applications — TechWrap builds modern web
                products designed for real business growth.
              </p>

              {/* =================================================
                  HERO BUTTON
              ================================================= */}

              <a
                href="#business-websites"
                className="product-primary-button"
              >
                <span>
                  Explore Solutions
                </span>

                <span>
                  ↓
                </span>
              </a>

            </div>


            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="product-hero-visual">

              <div
                className="product-image-glow"
                aria-hidden="true"
              ></div>

              <div className="product-image-card">

                <img
                  src={webProducts[0].image}
                  alt="TechWrap web development solutions"
                />

                <div
                  className="product-image-overlay"
                  aria-hidden="true"
                ></div>

                <div className="product-image-content">

                  <span>
                    TECHWRAP WEB DEVELOPMENT
                  </span>

                  <strong>
                    Build. Launch. Grow.
                  </strong>

                </div>

              </div>


              {/* FLOATING STAT */}

              <div className="product-floating-stat">

                <strong>
                  06
                </strong>

                <small>
                  Web Solutions
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="product-overview">

        <div className="container">

          <div className="product-overview-grid">

            <div className="product-overview-heading">

              <span>
                WHAT WE BUILD
              </span>

              <h2>
                Digital experiences
                <br />
                <strong>
                  for real businesses.
                </strong>
              </h2>

            </div>

            <div className="product-overview-text">

              <p>
                Every business needs a digital product that
                solves real problems. TechWrap combines
                thoughtful UX, modern frontend engineering,
                scalable APIs and reliable infrastructure to
                build products that are fast, secure and ready
                to grow.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WEB PRODUCT SOLUTIONS
      ===================================================== */}

      <section
        className="web-product-solutions"
        aria-label="TechWrap Web Development Solutions"
      >

        <div className="container">

          <div className="product-section-heading">

            <span>
              OUR WEB DEVELOPMENT SOLUTIONS
            </span>

            <h2>
              Everything you need
              <br />
              to <strong>build for the web.</strong>
            </h2>

          </div>


          {/* =================================================
              PRODUCT LIST
          ================================================= */}

          <div className="web-product-list">

            {webProducts.map((product, index) => (

              <article
                id={product.id}
                className={`web-product-section ${
                  index % 2 !== 0
                    ? "web-product-reverse"
                    : ""
                }`}
                key={product.id}
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="web-product-section-visual">

                  <div className="web-product-section-image">

                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                    />

                    <div
                      className="web-product-section-overlay"
                      aria-hidden="true"
                    ></div>

                    <div className="web-product-section-number">
                      {product.number}
                    </div>

                  </div>


                  {/* FLOATING STAT */}

                  <div className="web-product-stat">

                    <strong>
                      {product.stat}
                    </strong>

                    <small>
                      {product.statLabel}
                    </small>

                  </div>

                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="web-product-section-content">

                  <div className="web-product-index">
                    {product.number} / 06
                  </div>

                  <div className="web-product-eyebrow">
                    {product.eyebrow}
                  </div>

                  <h2>
                    {product.title}
                  </h2>

                  <p className="web-product-description">
                    {product.description}
                  </p>


                  {/* =================================================
                      FEATURES
                  ================================================= */}

                  <div className="web-product-features">

                    {product.features.map(
                      (feature) => (

                        <div
                          className="web-product-feature"
                          key={feature}
                        >

                          <span className="web-feature-check">
                            ✓
                          </span>

                          <span>
                            {feature}
                          </span>

                        </div>

                      )
                    )}

                  </div>


                  {/* =================================================
                      TECHNOLOGIES
                  ================================================= */}

                  <div className="web-product-technologies">

                    <span className="web-tech-label">
                      TECHNOLOGY
                    </span>

                    <div className="web-tech-list">

                      {product.technologies.map(
                        (technology) => (

                          <span
                            className="web-tech-pill"
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* =================================================
                      CTA
                  ================================================= */}

                  <Link
                    to="/Company/Contact/Maincontact"
                    className="product-primary-button"
                  >

                    <span>
                      Start a Project
                    </span>

                    <span>
                      →
                    </span>

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="web-product-final-cta">

        <div className="container">

          <div className="product-final-content">

            <span className="product-section-label">
              BUILD WITH TECHWRAP
            </span>

            <h2>
              Ready to build
              <br />
              <strong>
                your next product?
              </strong>
            </h2>

            <p>
              Tell us what you want to build and we'll help
              turn your idea into a modern, scalable and
              high-performance digital product.
            </p>

            <Link
              to="/Company/Contact/Maincontact"
              className="product-primary-button"
            >

              <span>
                Start a Project
              </span>

              <span>
                →
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default WebProductDetails;