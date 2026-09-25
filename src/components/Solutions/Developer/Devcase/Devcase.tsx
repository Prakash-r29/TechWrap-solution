import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Devcase.css";

type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  chart: number[];
  details: string[];
};

const projects: Project[] = [
  {
    id: "saas",
    number: "01",
    category: "SAAS PLATFORM",
    title: "AI SaaS Platform",

    description:
      "A scalable SaaS platform combining product analytics, API services, subscriptions and AI-powered workflows.",

    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "OpenAI",
      "Docker",
    ],

    metrics: [
      {
        label: "ACTIVE USERS",
        value: "12,450",
        change: "+18.4%",
      },
      {
        label: "API REQUESTS",
        value: "1.8M",
        change: "+24.8%",
      },
      {
        label: "REVENUE",
        value: "$48K",
        change: "+12.6%",
      },
    ],

    chart: [
      32,
      42,
      37,
      55,
      48,
      67,
      61,
      78,
      72,
      91,
    ],

    details: [
      "Multi-tenant SaaS architecture",
      "REST API integration",
      "AI-powered workflows",
      "Role-based authentication",
      "Cloud-ready deployment",
    ],
  },

  {
    id: "ai",
    number: "02",
    category: "AI APPLICATION",
    title: "AI Automation Platform",

    description:
      "An intelligent application that connects AI models, automation workflows and business APIs into one developer-friendly platform.",

    technologies: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Docker",
    ],

    metrics: [
      {
        label: "AI REQUESTS",
        value: "842K",
        change: "+31.7%",
      },
      {
        label: "AUTOMATIONS",
        value: "68.2K",
        change: "+26.1%",
      },
      {
        label: "TASKS SAVED",
        value: "24.8K",
        change: "+41.2%",
      },
    ],

    chart: [
      25,
      38,
      31,
      48,
      53,
      61,
      57,
      73,
      81,
      94,
    ],

    details: [
      "LLM API integration",
      "AI workflow automation",
      "Prompt management",
      "Background task processing",
      "Scalable Python API layer",
    ],
  },

  {
    id: "enterprise",
    number: "03",
    category: "ENTERPRISE DASHBOARD",
    title: "Enterprise Operations Dashboard",

    description:
      "A production dashboard designed to monitor users, business operations, APIs and enterprise data in real time.",

    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Docker",
    ],

    metrics: [
      {
        label: "TOTAL USERS",
        value: "84,920",
        change: "+15.2%",
      },
      {
        label: "PROCESSED DATA",
        value: "3.4M",
        change: "+28.4%",
      },
      {
        label: "SYSTEM UPTIME",
        value: "99.98%",
        change: "+0.12%",
      },
    ],

    chart: [
      41,
      35,
      48,
      52,
      61,
      57,
      68,
      74,
      82,
      89,
    ],

    details: [
      "Enterprise admin dashboard",
      "Spring Boot REST services",
      "Real-time analytics",
      "Role-based access control",
      "Production monitoring",
    ],
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

function DeveloperCaseStudies() {
  const [activeProject, setActiveProject] =
    useState("saas");

  const navigate = useNavigate();


  /* =======================================================
     CURRENT PROJECT
  ======================================================= */

  const currentIndex = projects.findIndex(
    (project) => project.id === activeProject
  );

  const currentProject =
    projects[currentIndex];


  /* =======================================================
     PROJECT SELECTOR
  ======================================================= */

  const changeProject = (id: string) => {
    setActiveProject(id);
  };


  /* =======================================================
     NEXT PROJECT
  ======================================================= */

  const nextProject = () => {
    const nextIndex =
      currentIndex === projects.length - 1
        ? 0
        : currentIndex + 1;

    setActiveProject(
      projects[nextIndex].id
    );
  };


  /* =======================================================
     PREVIOUS PROJECT
  ======================================================= */

  const previousProject = () => {
    const previousIndex =
      currentIndex === 0
        ? projects.length - 1
        : currentIndex - 1;

    setActiveProject(
      projects[previousIndex].id
    );
  };


  /* =======================================================
     CASE STUDY NAVIGATION
     
     AI SaaS:
     /case-study/ai-saas-platform
     
     Other projects:
     Coming soon
  ======================================================= */

  const handleCaseStudyNavigation = () => {
    if (currentProject.id !== "saas") {
      return;
    }

    navigate(
      "/Solutions/Developer/Devcase/DevAIsaas"
    );

    /* Ensure the new page starts at the top */
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <section className="developer-case-section">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="case-grid-background"></div>

      <div className="case-glow case-glow-left"></div>

      <div className="case-glow case-glow-right"></div>


      <div className="container case-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="case-header">

          <div className="case-eyebrow">
            <span></span>

            REAL PROJECTS

            <span></span>
          </div>


          <h2>
            Built to Work.
            <br />

            <span>
              Designed to Scale.
            </span>
          </h2>


          <p>
            Explore how TechWrap technologies come together
            to create production-ready SaaS platforms, AI
            products and enterprise applications.
          </p>

        </div>


        {/* =====================================================
            PROJECT SELECTOR
        ===================================================== */}

        <div className="case-project-selector">

          {projects.map((project) => (

            <button
              key={project.id}
              type="button"
              className={`case-project-tab ${
                activeProject === project.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                changeProject(project.id)
              }
            >

              <span className="case-tab-number">
                {project.number}
              </span>


              <span className="case-tab-content">

                <strong>
                  {project.title}
                </strong>

                <small>
                  {project.category}
                </small>

              </span>


              <span className="case-tab-arrow">
                →
              </span>

            </button>

          ))}

        </div>


        {/* =====================================================
            MAIN SHOWCASE
        ===================================================== */}

        <div
          className="case-showcase"
          key={currentProject.id}
        >

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}

          <div className="case-information">

            <div className="case-project-label">

              <span className="case-live-dot"></span>

              {currentProject.category}

            </div>


            <div className="case-number">
              PROJECT / {currentProject.number}
            </div>


            <h3>
              {currentProject.title}
            </h3>


            <p className="case-description">
              {currentProject.description}
            </p>


            {/* =================================================
                TECHNOLOGY STACK
            ================================================= */}

            <div className="case-tech-section">

              <span className="case-section-label">
                TECHNOLOGY STACK
              </span>


              <div className="case-tech-list">

                {currentProject.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>


            {/* =================================================
                CASE STUDY BUTTON
            ================================================= */}

            <button
              type="button"
              className={`case-study-button ${
                currentProject.id !== "saas"
                  ? "case-study-disabled"
                  : ""
              }`}
              onClick={
                handleCaseStudyNavigation
              }
              disabled={
                currentProject.id !== "saas"
              }
              aria-label={
                currentProject.id === "saas"
                  ? "View AI SaaS case study"
                  : "Case study coming soon"
              }
            >

              <span>
                {currentProject.id === "saas"
                  ? "View Case Study"
                  : "Case Study Coming Soon"}
              </span>


              {currentProject.id === "saas" && (
                <span className="case-button-arrow">
                  →
                </span>
              )}

            </button>


            {/* =================================================
                PROJECT NAVIGATION
            ================================================= */}

            <div className="case-navigation">

              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
              >
                ←
              </button>


              <div className="case-progress">

                <span>
                  0{currentIndex + 1}
                </span>


                <div>

                  <i
                    style={{
                      width: `${
                        ((currentIndex + 1) /
                          projects.length) *
                        100
                      }%`,
                    }}
                  ></i>

                </div>


                <span>
                  0{projects.length}
                </span>

              </div>


              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
              >
                →
              </button>

            </div>

          </div>


          {/* =================================================
              RIGHT PRODUCT PREVIEW
          ================================================= */}

          <div className="case-dashboard">

            <div className="dashboard-window">

              {/* =================================================
                  WINDOW HEADER
              ================================================= */}

              <div className="dashboard-header">

                <div className="dashboard-dots">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>


                <div className="dashboard-url">
                  app.techwrap.dev
                </div>


                <div className="dashboard-status">

                  <span></span>

                  LIVE

                </div>

              </div>


              {/* =================================================
                  DASHBOARD BODY
              ================================================= */}

              <div className="dashboard-body">

                <div className="dashboard-title-row">

                  <div>

                    <small>
                      OVERVIEW
                    </small>

                    <h4>
                      Product Analytics
                    </h4>

                  </div>


                  <button
                    type="button"
                    aria-label="Select analytics period"
                  >
                    Last 30 days

                    <span>
                      ⌄
                    </span>
                  </button>

                </div>


                {/* =================================================
                    METRICS
                ================================================= */}

                <div className="dashboard-metrics">

                  {currentProject.metrics.map(
                    (metric) => (

                      <div
                        className="dashboard-metric"
                        key={metric.label}
                      >

                        <span>
                          {metric.label}
                        </span>


                        <strong>
                          {metric.value}
                        </strong>


                        <small>

                          <i>
                            ↗
                          </i>

                          {metric.change}

                        </small>

                      </div>

                    )
                  )}

                </div>


                {/* =================================================
                    CHART
                ================================================= */}

                <div className="dashboard-chart">

                  <div className="chart-heading">

                    <div>

                      <span>
                        PLATFORM ACTIVITY
                      </span>

                      <strong>
                        +28.4%
                      </strong>

                    </div>


                    <small>
                      API / USERS / REVENUE
                    </small>

                  </div>


                  <div className="chart-area">

                    <div className="chart-lines">

                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>

                    </div>


                    <div className="chart-bars">

                      {currentProject.chart.map(
                        (height, index) => (

                          <div
                            className="chart-bar"
                            key={index}
                            style={{
                              height:
                                `${height}%`,
                            }}
                          >

                            <span></span>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>


                {/* =================================================
                    BOTTOM DATA
                ================================================= */}

                <div className="dashboard-bottom">

                  <div className="dashboard-mini-card">

                    <span>
                      API HEALTH
                    </span>

                    <strong>
                      99.98%
                    </strong>

                    <div className="health-line">
                      <i></i>
                    </div>

                  </div>


                  <div className="dashboard-mini-card">

                    <span>
                      ACTIVE SERVICES
                    </span>

                    <strong>
                      24
                    </strong>


                    <div className="service-dots">

                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                FLOATING STATUS
            ================================================= */}

            <div className="dashboard-floating-card">

              <span className="floating-icon">
                ✓
              </span>


              <div>

                <strong>
                  Deployment successful
                </strong>

                <small>
                  Production · 2m ago
                </small>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            PROJECT DETAILS
        ===================================================== */}

        <div className="case-study-details">

          <div className="details-header">

            <div>

              <span>
                PROJECT DETAILS
              </span>

              <h3>
                {currentProject.title}
              </h3>

            </div>


            <div className="details-stack">

              {currentProject.technologies
                .slice(0, 4)
                .map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

            </div>

          </div>


          <div className="details-content">

            {/* =================================================
                WHAT WE BUILT
            ================================================= */}

            <div className="details-column">

              <span className="details-label">
                WHAT WE BUILT
              </span>

              <p>
                {currentProject.description}
              </p>

            </div>


            {/* =================================================
                ENGINEERING HIGHLIGHTS
            ================================================= */}

            <div className="details-column">

              <span className="details-label">
                ENGINEERING HIGHLIGHTS
              </span>


              <ul>

                {currentProject.details.map(
                  (detail) => (

                    <li key={detail}>

                      <span>
                        ✓
                      </span>

                      {detail}

                    </li>

                  )
                )}

              </ul>

            </div>


            {/* =================================================
                DELIVERY
            ================================================= */}

            <div className="details-column">

              <span className="details-label">
                DELIVERY
              </span>


              <div className="delivery-status">

                <span></span>

                PRODUCTION READY

              </div>


              <p>
                Designed with a scalable architecture
                that can evolve as the product grows.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DeveloperCaseStudies;