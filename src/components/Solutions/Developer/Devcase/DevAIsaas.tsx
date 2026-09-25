import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./DevAIsaas.css";


/* =========================================================
   DELIVERY STAGES
========================================================= */

const deliveryStages = [
  {
    number: "01",
    title: "Discover",
    label: "UNDERSTAND",
    icon: "⌕",
    text:
      "We define the product goals, users, business requirements and the technical challenges to solve.",
  },
  {
    number: "02",
    title: "Strategy",
    label: "PLAN",
    icon: "◈",
    text:
      "We turn requirements into a clear roadmap, technical scope and measurable delivery plan.",
  },
  {
    number: "03",
    title: "Architecture",
    label: "DESIGN",
    icon: "⌘",
    text:
      "We design the system architecture, APIs, data model and scalable foundation before development.",
  },
  {
    number: "04",
    title: "Build",
    label: "ENGINEER",
    icon: "✦",
    text:
      "Frontend, backend, AI workflows and integrations are developed as production-ready modules.",
  },
  {
    number: "05",
    title: "Validate",
    label: "QUALITY",
    icon: "✓",
    text:
      "We test functionality, APIs, responsiveness, performance, security and real-world user flows.",
  },
  {
    number: "06",
    title: "Launch",
    label: "DELIVER",
    icon: "↗",
    text:
      "The platform is deployed to production with cloud configuration, monitoring and delivery handoff.",
  },
];


function AISaaSCaseStudy() {

  /* =======================================================
     PAGE INITIALIZATION + REVEAL
  ======================================================= */

  useEffect(() => {
    const previousRestoration =
      window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });


    /* ---------------------------------------------
       Only observe elements inside this page.
       This prevents other page sections/components
       from interfering with the animation.
    --------------------------------------------- */

    const pageRoot =
      document.querySelector(".ai-case-page");

    if (!pageRoot) {
      return;
    }


    const revealElements =
      pageRoot.querySelectorAll(
        ".ai-case-reveal"
      );


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );
            }

          });

        },
        {
          threshold: 0.08,
          rootMargin:
            "0px 0px -50px 0px",
        }
      );


    revealElements.forEach((element) => {
      observer.observe(element);
    });


    return () => {

      observer.disconnect();

      window.history.scrollRestoration =
        previousRestoration;

    };

  }, []);


  return (
    <main className="ai-case-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ai-case-hero">

        {/* =================================================
            BACK TO DEVELOPER
            POSITION CONTROLLED BY CSS
        ================================================= */}
        <Link
          to="/Solutions/Developer/Maindev"
          className="ai-back-developer"
          aria-label="Back to Developer"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Developer</span>
        </Link>

        <div
          className="ai-case-grid"
          aria-hidden="true"
        />

        <div
          className="
            ai-hero-glow
            ai-glow-one
          "
          aria-hidden="true"
        />

        <div
          className="
            ai-hero-glow
            ai-glow-two
          "
          aria-hidden="true"
        />

        <div
          className="ai-hero-orb"
          aria-hidden="true"
        />


        <div className="container">

          {/* TOP BAR */}

          <div className="ai-case-topbar">

            <span className="ai-case-project-id">
            </span>

          </div>


          {/* HERO */}

          <div className="ai-hero-content">

            <div className="ai-hero-copy">

              <div className="ai-case-label">

                <span className="ai-live-dot"></span>

                AI SAAS PLATFORM

                <span className="ai-label-line"></span>

              </div>


              <div className="ai-hero-kicker">
                PRODUCT ENGINEERING / AI / SaaS
              </div>


              <h1>
                Build once.
                <br />

                <span>
                  Scale intelligently.
                </span>
              </h1>


              <p>
                A production-ready AI SaaS platform designed
                to connect intelligent workflows, product
                analytics, APIs and scalable cloud
                infrastructure into one unified experience.
              </p>


              <div className="ai-hero-actions">

                <a
                  href="#overview"
                  className="ai-primary-btn"
                >
                  Explore Project

                  <span>
                    ↓
                  </span>

                </a>


                <a
                  href="#architecture"
                  className="ai-secondary-btn"
                >
                  View Architecture

                  <span>
                    →
                  </span>

                </a>

              </div>


              <div className="ai-hero-stack">

                <span>React</span>
                <span>TypeScript</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>OpenAI</span>
                <span>Docker</span>

              </div>

            </div>


            {/* HERO DASHBOARD */}

            <div className="ai-hero-dashboard">

              <div
                className="ai-dashboard-glow"
                aria-hidden="true"
              />


              <div className="ai-dashboard-window">

                <div className="ai-window-top">

                  <div className="ai-window-dots">

                    <i></i>
                    <i></i>
                    <i></i>

                  </div>


                  <span>
                    app.techwrap.dev
                  </span>


                  <small>

                    <b></b>

                    LIVE

                  </small>

                </div>


                <div className="ai-dashboard-body">

                  <div className="ai-dashboard-heading">

                    <div>

                      <small>
                        PRODUCT OVERVIEW
                      </small>

                      <h3>
                        AI Platform Analytics
                      </h3>

                    </div>


                    <button type="button">
                      30 DAYS
                      <span>⌄</span>
                    </button>

                  </div>


                  <div className="ai-metric-grid">

                    <div>

                      <span>
                        ACTIVE USERS
                      </span>

                      <strong>
                        12,450
                      </strong>

                      <small>
                        ↗ 18.4%
                      </small>

                    </div>


                    <div>

                      <span>
                        AI REQUESTS
                      </span>

                      <strong>
                        1.8M
                      </strong>

                      <small>
                        ↗ 24.8%
                      </small>

                    </div>


                    <div>

                      <span>
                        REVENUE
                      </span>

                      <strong>
                        $48K
                      </strong>

                      <small>
                        ↗ 12.6%
                      </small>

                    </div>

                  </div>


                  <div className="ai-dashboard-chart">

                    <div className="ai-chart-heading">

                      <span>
                        PLATFORM ACTIVITY
                      </span>

                      <strong>
                        +28.4%
                      </strong>

                    </div>


                    <div className="ai-chart-lines">

                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>

                    </div>


                    <div className="ai-chart-bars">

                      {[
                        42,
                        56,
                        47,
                        68,
                        60,
                        75,
                        66,
                        84,
                        76,
                        94,
                      ].map(
                        (height, index) => (
                          <i
                            key={index}
                            style={{
                              height:
                                `${height}%`,
                              animationDelay:
                                `${index * 0.08}s`,
                            }}
                          ></i>
                        )
                      )}

                    </div>

                  </div>


                  <div className="ai-dashboard-bottom">

                    <div>

                      <span>
                        API HEALTH
                      </span>

                      <strong>
                        99.98%
                      </strong>

                      <b>
                        <i></i>
                      </b>

                    </div>


                    <div>

                      <span>
                        DEPLOYMENTS
                      </span>

                      <strong>
                        3,240
                      </strong>

                      <em>
                        ● ● ● ●
                      </em>

                    </div>

                  </div>

                </div>

              </div>


              <div className="ai-floating-card">

                <div className="ai-floating-icon">
                  ✦
                </div>


                <div>

                  <strong>
                    AI workflow completed
                  </strong>

                  <small>
                    Production · 1.2s
                  </small>

                </div>


                <span>
                  ✓
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          01 — OVERVIEW
      ===================================================== */}

      <section
        id="overview"
        className="
          ai-overview-section
          ai-case-section
        "
      >

        <div className="container">

          <div
            className="
              ai-case-section-heading
              ai-case-reveal
            "
          >

            <span>
              01 / PROJECT OVERVIEW
            </span>


            <h2>
              From idea to
              <strong>
                production.
              </strong>
            </h2>


            <p>
              TechWrap designed the platform around a
              scalable engineering foundation, allowing
              product teams to integrate AI capabilities
              without sacrificing performance,
              maintainability or user experience.
            </p>

          </div>


          <div className="ai-overview-grid">

            <article
              className="
                ai-overview-card
                ai-overview-challenge
                ai-case-reveal
              "
            >

              <span className="ai-overview-label">
                THE CHALLENGE
              </span>


              <h3>
                Building an AI product that
                can grow with its users.
              </h3>


              <p>
                The platform needed to bring together
                authentication, AI APIs, product
                analytics, subscriptions and backend
                services while maintaining a clean
                developer experience.
              </p>


              <div className="ai-overview-accent"></div>

            </article>


            <article
              className="
                ai-overview-card
                ai-overview-stat
                ai-case-reveal
              "
            >

              <span>
                USERS
              </span>


              <strong>
                12K+
              </strong>


              <p>
                Active platform users
              </p>

            </article>


            <article
              className="
                ai-overview-card
                ai-overview-stat
                ai-case-reveal
              "
            >

              <span>
                API REQUESTS
              </span>


              <strong>
                1.8M
              </strong>


              <p>
                Requests processed
              </p>

            </article>


            <article
              className="
                ai-overview-card
                ai-overview-solution
                ai-case-reveal
              "
            >

              <span className="ai-overview-label">
                THE SOLUTION
              </span>


              <h3>
                A modular SaaS architecture
                built for scale.
              </h3>


              <p>
                React and TypeScript power the interface,
                Spring Boot manages business logic and
                REST APIs, while PostgreSQL handles
                structured application data.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          02 — ARCHITECTURE
      ===================================================== */}

      <section
        id="architecture"
        className="
          ai-architecture-section
          ai-case-section
        "
      >

        <div className="container">

          <div
            className="
              ai-case-section-heading
              ai-case-centered-heading
              ai-case-reveal
            "
          >

            <span>
              02 / ARCHITECTURE
            </span>


            <h2>
              Engineered as a
              <strong>
                connected system.
              </strong>
            </h2>


            <p>
              Each layer has a clear responsibility,
              making the platform easier to develop,
              maintain and scale.
            </p>

          </div>


          {/* =================================================
              ARCHITECTURE VISUAL
          ================================================= */}

          <div
            className="
              ai-architecture-board
              ai-case-reveal
            "
          >

            <div
              className="ai-architecture-grid-bg"
              aria-hidden="true"
            />


            <div
              className="ai-architecture-scan"
              aria-hidden="true"
            />


            <div className="ai-architecture-flow">

              {/* FRONTEND */}

              <article className="ai-architecture-card">

                <div className="ai-architecture-number">
                  01
                </div>


                <div className="ai-architecture-icon">
                  UI
                </div>


                <div className="ai-architecture-content">

                  <span>
                    FRONTEND
                  </span>

                  <h3>
                    React
                  </h3>

                  <p>
                    Product interface
                  </p>

                </div>

              </article>


              {/* CONNECTOR */}

              <div className="ai-architecture-connector">

                <span></span>

              </div>


              {/* BACKEND */}

              <article className="ai-architecture-card">

                <div className="ai-architecture-number">
                  02
                </div>


                <div className="ai-architecture-icon">
                  API
                </div>


                <div className="ai-architecture-content">

                  <span>
                    BACKEND
                  </span>

                  <h3>
                    Spring Boot
                  </h3>

                  <p>
                    Business services
                  </p>

                </div>

              </article>


              {/* CONNECTOR */}

              <div className="ai-architecture-connector">

                <span></span>

              </div>


              {/* DATABASE */}

              <article className="ai-architecture-card">

                <div className="ai-architecture-number">
                  03
                </div>


                <div className="ai-architecture-icon">
                  DB
                </div>


                <div className="ai-architecture-content">

                  <span>
                    DATA
                  </span>

                  <h3>
                    PostgreSQL
                  </h3>

                  <p>
                    Application data
                  </p>

                </div>

              </article>


              {/* CONNECTOR */}

              <div className="ai-architecture-connector">

                <span></span>

              </div>


              {/* AI */}

              <article
                className="
                  ai-architecture-card
                  ai-architecture-ai-card
                "
              >

                <div className="ai-architecture-number">
                  04
                </div>


                <div className="ai-architecture-icon">
                  AI
                </div>


                <div className="ai-architecture-content">

                  <span>
                    INTELLIGENCE
                  </span>

                  <h3>
                    OpenAI
                  </h3>

                  <p>
                    Intelligent workflows
                  </p>

                </div>

              </article>

            </div>


            <div className="ai-architecture-status">

              <span></span>

              <strong>
                CONNECTED ARCHITECTURE
              </strong>

              <small>
                All layers working together
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          03 — TECHNOLOGY
      ===================================================== */}

      <section
        className="
          ai-technology-section
          ai-case-section
        "
      >

        <div className="container">

          <div
            className="
              ai-tech-heading
              ai-case-reveal
            "
          >

            <span>
              03 / TECHNOLOGY STACK
            </span>


            <h2>
              Modern technologies.
              <br />

              <strong>
                Production engineering.
              </strong>
            </h2>

          </div>


          <div className="ai-tech-list">

            <div
              className="
                ai-tech-row
                ai-case-reveal
              "
            >

              <span>
                FRONTEND
              </span>

              <div>

                <strong>
                  React
                </strong>

                <strong>
                  TypeScript
                </strong>

                <strong>
                  Bootstrap
                </strong>

              </div>

            </div>


            <div
              className="
                ai-tech-row
                ai-case-reveal
              "
            >

              <span>
                BACKEND
              </span>

              <div>

                <strong>
                  Spring Boot
                </strong>

                <strong>
                  REST API
                </strong>

                <strong>
                  Java
                </strong>

              </div>

            </div>


            <div
              className="
                ai-tech-row
                ai-case-reveal
              "
            >

              <span>
                DATA
              </span>

              <div>

                <strong>
                  PostgreSQL
                </strong>

                <strong>
                  Redis
                </strong>

              </div>

            </div>


            <div
              className="
                ai-tech-row
                ai-case-reveal
              "
            >

              <span>
                AI
              </span>

              <div>

                <strong>
                  OpenAI
                </strong>

                <strong>
                  LLM APIs
                </strong>

                <strong>
                  AI Workflows
                </strong>

              </div>

            </div>


            <div
              className="
                ai-tech-row
                ai-case-reveal
              "
            >

              <span>
                DEVOPS
              </span>

              <div>

                <strong>
                  Docker
                </strong>

                <strong>
                  CI/CD
                </strong>

                <strong>
                  Cloud
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — FEATURES
      ===================================================== */}

      <section
        className="
          ai-features-section
          ai-case-section
        "
      >

        <div className="container">

          <div
            className="
              ai-case-section-heading
              ai-case-centered-heading
              ai-case-reveal
            "
          >

            <span>
              04 / PLATFORM CAPABILITIES
            </span>


            <h2>
              Everything connected in
              <strong>
                one platform.
              </strong>
            </h2>

          </div>


          <div className="ai-features-grid">

            {[
              [
                "01",
                "AI Workflows",
                "Connect LLM APIs with repeatable business workflows and intelligent automation.",
              ],
              [
                "02",
                "Product Analytics",
                "Monitor users, API activity, platform usage and business performance.",
              ],
              [
                "03",
                "REST APIs",
                "Structured backend services designed for frontend and third-party integrations.",
              ],
              [
                "04",
                "Authentication",
                "Secure user access with scalable role-based application architecture.",
              ],
              [
                "05",
                "Cloud Ready",
                "Containerized services prepared for modern deployment environments.",
              ],
              [
                "06",
                "Scalable Architecture",
                "Modular application layers make future features easier to develop and maintain.",
              ],
            ].map(
              ([number, title, description], index) => (

                <article
                  className="
                    ai-feature-card
                    ai-case-reveal
                  "
                  key={number}
                  style={{
                    transitionDelay:
                      `${index * 70}ms`,
                  }}
                >

                  <span className="ai-feature-number">
                    {number}
                  </span>


                  <div>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {description}
                    </p>

                  </div>


                  <i>
                    →
                  </i>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — RESULTS
      ===================================================== */}

      <section
        className="
          ai-results-section
          ai-case-section
        "
      >

        <div className="container">

          <div
            className="
              ai-results-wrapper
              ai-case-reveal
            "
          >

            <div className="ai-results-heading">

              <span>
                05 / PROJECT RESULTS
              </span>


              <h2>
                Built for today.
                <br />

                <strong>
                  Ready for tomorrow.
                </strong>
              </h2>

            </div>


            <div className="ai-results-grid">

              <div>

                <strong>
                  12,450
                </strong>

                <span>
                  ACTIVE USERS
                </span>

              </div>


              <div>

                <strong>
                  1.8M
                </strong>

                <span>
                  API REQUESTS
                </span>

              </div>


              <div>

                <strong>
                  99.98%
                </strong>

                <span>
                  API HEALTH
                </span>

              </div>


              <div>

                <strong>
                  3,240
                </strong>

                <span>
                  DEPLOYMENTS
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — DELIVERY
      ===================================================== */}

      <section
        id="delivery"
        className="
          ai-delivery-section
          ai-case-section
        "
      >

        <div className="container">

          <div
            className="
              ai-delivery-heading
              ai-case-reveal
            "
          >

            <div>

              <span>
                06 / SCRATCH TO DELIVERY
              </span>


              <h2>
                From the first idea
                <strong>
                  to production.
                </strong>
              </h2>


              <p>
                A structured six-stage process keeps every
                project aligned, measurable and ready for
                real-world delivery.
              </p>

            </div>


            <div className="ai-delivery-status">

              <span></span>

              PRODUCTION WORKFLOW

            </div>

          </div>


          <div className="ai-delivery-timeline">

            <div
              className="ai-delivery-track"
              aria-hidden="true"
            >
              <span></span>
            </div>


            <div className="ai-delivery-grid">

              {deliveryStages.map(
                (stage, index) => (

                  <article
                    className="
                      ai-delivery-card
                      ai-case-reveal
                    "
                    key={stage.number}
                    style={{
                      transitionDelay:
                        `${index * 90}ms`,
                    }}
                  >

                    <div className="ai-delivery-card-top">

                      <span className="ai-delivery-number">
                        {stage.number}
                      </span>

                      <span className="ai-delivery-icon">
                        {stage.icon}
                      </span>

                    </div>


                    <span className="ai-delivery-label">
                      {stage.label}
                    </span>


                    <h3>
                      {stage.title}
                    </h3>


                    <p>
                      {stage.text}
                    </p>


                    <div className="ai-delivery-footer">

                      <span>
                        0{index + 1}
                      </span>

                      <span>
                        →
                      </span>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="ai-final-cta">

        <div className="container">

          <div
            className="
              ai-final-inner
              ai-case-reveal
            "
          >

            <span>
              HAVE A PRODUCT IN MIND?
            </span>


            <h2>
              Let's build what's
              <strong>
                next.
              </strong>
            </h2>


            <p>
              Bring your idea, product or technical
              challenge. TechWrap can help turn it
              into a scalable digital product.
            </p>


            <div>

              <Link
                to="/Solutions/Developer/Maindev"
                className="ai-final-primary"
              >
                Explore Developer Stack
                <span>
                  →
                </span>
              </Link>


              <Link
                to="/"
                className="ai-final-secondary"
              >
                Back to TechWrap
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


export default AISaaSCaseStudy;