import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TechnologyStackDetails.css";

interface StackDetails {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  capabilities: string[];
  stat: string;
  statLabel: string;
}

const stackDetails: StackDetails[] = [
  {
    id: "mern-stack",
    number: "01",
    title: "MERN Stack",
    eyebrow: "MODERN JAVASCRIPT APPLICATIONS",
    description:
      "Build scalable SaaS platforms, dashboards and modern web applications with a powerful JavaScript-based technology stack. MERN enables rapid development, reusable components and flexible architectures for products that need to evolve quickly.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90",

    imageAlt:
      "Modern JavaScript web development workspace with laptop and code",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],

    capabilities: [
      "Scalable SaaS platforms",
      "Interactive dashboards",
      "REST API development",
      "Real-time applications",
    ],

    stat: "4",
    statLabel: "Core Technologies",
  },

  {
    id: "mean-stack",
    number: "02",
    title: "MEAN Stack",
    eyebrow: "STRUCTURED ENTERPRISE APPLICATIONS",
    description:
      "Create structured business applications using MongoDB, Express.js, Angular and Node.js. MEAN is well suited for enterprise platforms that benefit from a strongly organized frontend architecture and scalable backend services.",

    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=90",

    imageAlt:
      "Developer working with structured web application source code",

    technologies: [
      "MongoDB",
      "Express.js",
      "Angular",
      "Node.js",
    ],

    capabilities: [
      "Enterprise applications",
      "Business management systems",
      "Structured frontend architecture",
      "API-driven platforms",
    ],

    stat: "4",
    statLabel: "Core Technologies",
  },

  {
    id: "pern-stack",
    number: "03",
    title: "PERN Stack",
    eyebrow: "POWERFUL RELATIONAL APPLICATIONS",
    description:
      "Build data-intensive applications using PostgreSQL, Express.js, React and Node.js. PERN combines a powerful relational database with modern frontend and backend technologies for applications requiring reliable structured data.",

    /* Changed only the PERN image */
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1400&q=90",

    imageAlt:
      "Database technology and data storage infrastructure representing relational database systems",

    technologies: [
      "PostgreSQL",
      "Express.js",
      "React",
      "Node.js",
    ],

    capabilities: [
      "Data-intensive applications",
      "Relational data systems",
      "Business analytics platforms",
      "Secure API architectures",
    ],

    stat: "99.9%",
    statLabel: "Data Reliability",
  },

  {
    id: "java-full-stack",
    number: "04",
    title: "Java Full Stack",
    eyebrow: "ENTERPRISE-GRADE APPLICATIONS",
    description:
      "Develop reliable enterprise applications with Java, Spring Boot, React and MySQL. This stack is designed for organizations that need secure architecture, maintainability, strong backend services and long-term scalability.",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=90",

    imageAlt:
      "Java programming and enterprise software development code",

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
    ],

    capabilities: [
      "Enterprise systems",
      "Secure backend services",
      "Business applications",
      "Database-driven platforms",
    ],

    stat: "Enterprise",
    statLabel: "Ready",
  },

  {
    id: "python-full-stack",
    number: "05",
    title: "Python Full Stack",
    eyebrow: "AI • AUTOMATION • DATA",
    description:
      "Build intelligent applications using Python, Django, React and PostgreSQL. This stack is ideal for AI-powered platforms, automation systems, data-driven applications and products requiring rapid backend development.",

    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=90",

    imageAlt:
      "Python programming environment representing AI and data development",

    technologies: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
    ],

    capabilities: [
      "AI-powered applications",
      "Automation platforms",
      "Data-driven products",
      "Machine learning integrations",
    ],

    stat: "AI",
    statLabel: "Ready",
  },

  {
    id: "modern-frontend",
    number: "06",
    title: "Modern Frontend",
    eyebrow: "FAST • RESPONSIVE • INTERACTIVE",
    description:
      "Create modern digital experiences using React, TypeScript, Bootstrap and REST APIs. We build responsive interfaces that combine strong UX, reusable components and high-performance frontend engineering.",

    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90",

    imageAlt:
      "Modern UI and frontend web design workspace",

    technologies: [
      "React",
      "TypeScript",
      "Bootstrap",
      "REST APIs",
    ],

    capabilities: [
      "Responsive interfaces",
      "Reusable component systems",
      "Interactive web applications",
      "API-connected experiences",
    ],

    stat: "100%",
    statLabel: "Responsive",
  },
];

const TechnologyStackDetails: React.FC = () => {
  const navigate = useNavigate();

  /* =========================================================
     HASH NAVIGATION
  ========================================================= */

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }

    const sectionId = decodeURIComponent(
      hash.substring(1)
    );

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
  }, []);

  /* =========================================================
     BACK TO TECHNOLOGY STACK
  ========================================================= */

  const handleBackToStack = () => {
    navigate(-1);
  };

  return (
    <main className="technology-details-page">

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <button
        type="button"
        className="technology-details-back"
        onClick={handleBackToStack}
        aria-label="Back to Technology Stack"
      >
        <span className="technology-back-arrow">
          ←
        </span>

        <span className="technology-back-content">
          <small>
            BACK TO
          </small>

          <strong>
            Technology Stack
          </strong>
        </span>
      </button>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="technology-details-hero">

        <div className="technology-details-grid"></div>

        <div className="technology-details-glow technology-details-glow-one"></div>

        <div className="technology-details-glow technology-details-glow-two"></div>

        <div className="container">

          <div className="technology-details-hero-layout">

            {/* Hero content */}

            <div className="technology-details-hero-content">

              <div className="technology-details-label">
                <span></span>
                TECHWRAP TECHNOLOGY STACK
              </div>

              <div className="technology-details-number">
                01 — 06
              </div>

              <h1>
                Technology
                <br />
                <span>
                  built to scale.
                </span>
              </h1>

              <p>
                From modern JavaScript stacks to enterprise
                platforms, AI-powered systems and high-performance
                frontend applications — TechWrap chooses the right
                technology for every product.
              </p>

              <a
                href="#mern-stack"
                className="technology-details-primary"
              >
                <span>
                  Explore Stacks
                </span>

                <span>
                  ↓
                </span>
              </a>

            </div>


            {/* Hero visual */}

            <div className="technology-details-visual">

              <div className="technology-details-image-glow"></div>

              <div className="technology-details-image-card">

                <img
                  src={stackDetails[0].image}
                  alt="TechWrap technology stack"
                />

                <div className="technology-details-image-overlay"></div>

                <div className="technology-details-image-content">

                  <span>
                    TECHWRAP ENGINEERING
                  </span>

                  <strong>
                    Build. Scale. Evolve.
                  </strong>

                </div>

              </div>

              <div className="technology-details-floating-stat">

                <strong>
                  06
                </strong>

                <small>
                  Technology Stacks
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="technology-details-overview">

        <div className="container">

          <div className="technology-details-overview-grid">

            <div>

              <span className="technology-section-label">
                ENGINEERING TECHNOLOGY
              </span>

              <h2>
                The right stack
                <br />
                <strong>
                  for the right product.
                </strong>
              </h2>

            </div>

            <div>

              <p>
                Technology should support your business goals,
                not limit them. TechWrap combines modern
                frameworks, reliable databases, scalable APIs
                and proven engineering practices to create
                products ready for real-world growth.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STACK DETAILS
      ===================================================== */}

      <section
        className="technology-stack-solutions"
        aria-label="Technology Stack Solutions"
      >

        <div className="container">

          <div className="technology-stack-heading">

            <span>
              OUR TECHNOLOGY EXPERTISE
            </span>

            <h2>
              Choose the technology
              <br />
              <strong>
                that fits your product.
              </strong>
            </h2>

          </div>


          <div className="technology-stack-list">

            {stackDetails.map((stack, index) => (

              <article
                id={stack.id}
                className={`technology-detail-section ${
                  index % 2 !== 0
                    ? "technology-detail-reverse"
                    : ""
                }`}
                key={stack.id}
              >

                {/* Image */}

                <div className="technology-detail-visual">

                  <div className="technology-detail-image">

                    <img
                      src={stack.image}
                      alt={stack.imageAlt}
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                    />

                    <div className="technology-detail-image-overlay"></div>

                    <span className="technology-detail-index">
                      {stack.number}
                    </span>

                  </div>

                  <div className="technology-detail-stat">

                    <strong>
                      {stack.stat}
                    </strong>

                    <small>
                      {stack.statLabel}
                    </small>

                  </div>

                </div>


                {/* Content */}

                <div className="technology-detail-content">

                  <div className="technology-detail-small-index">
                    {stack.number} / 06
                  </div>

                  <div className="technology-detail-eyebrow">
                    {stack.eyebrow}
                  </div>

                  <h2>
                    {stack.title}
                  </h2>

                  <p className="technology-detail-description">
                    {stack.description}
                  </p>


                  {/* Capabilities */}

                  <div className="technology-capabilities">

                    {stack.capabilities.map(
                      (capability) => (

                        <div
                          className="technology-capability"
                          key={capability}
                        >

                          <span>
                            ✓
                          </span>

                          <strong>
                            {capability}
                          </strong>

                        </div>

                      )
                    )}

                  </div>


                  {/* Technologies */}

                  <div className="technology-detail-technologies">

                    <span>
                      TECHNOLOGIES
                    </span>

                    <div>

                      {stack.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  <Link
                    to="/Company/Contact/Maincontact"
                    className="technology-details-primary"
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

      <section className="technology-details-final">

        <div className="container">

          <div className="technology-final-content">

            <span>
              BUILD WITH THE RIGHT STACK
            </span>

            <h2>
              Ready to build
              <br />
              <strong>
                your next product?
              </strong>
            </h2>

            <p>
              Tell us what you're building and we'll recommend
              the right technology architecture for performance,
              scalability and long-term growth.
            </p>

            <Link
              to="/Company/Contact/Maincontact"
              className="technology-details-primary"
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

export default TechnologyStackDetails;