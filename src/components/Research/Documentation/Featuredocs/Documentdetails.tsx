import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./Documentdetails.css";

/* =========================================================
   DOCUMENTATION DATA TYPE
========================================================= */

interface DocumentationData {
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  icon: string;

  overview: string;

  learn: string[];

  technologies: string[];

  steps: {
    number: string;
    title: string;
    description: string;
  }[];

  previous?: {
    title: string;
    route: string;
  };

  next?: {
    title: string;
    route: string;
  };
}


/* =========================================================
   DOCUMENTATION DATA
========================================================= */

const documentationData: Record<
  string,
  DocumentationData
> = {

  /* =======================================================
     01 — GETTING STARTED
  ======================================================= */

  "getting-started": {
    category: "QUICK START",

    title: "Build your first TechWrap project",

    subtitle:
      "A simple introduction to the TechWrap development workflow.",

    readTime: "5 min read",

    icon: "⌘",

    overview:
      "TechWrap brings together modern frontend, backend, API, AI, and deployment technologies into a structured development workflow. This guide introduces the basic journey from an idea to a working application.",

    learn: [
      "Understand the TechWrap development workflow",
      "Explore the main technology layers",
      "Understand how frontend and backend communicate",
      "Get familiar with the path from development to deployment",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "Python",
    ],

    steps: [
      {
        number: "01",
        title: "Define",
        description:
          "Start with the product idea, requirements, and technical direction.",
      },

      {
        number: "02",
        title: "Build",
        description:
          "Develop the frontend, backend services, APIs, and required integrations.",
      },

      {
        number: "03",
        title: "Connect",
        description:
          "Connect application services, databases, APIs, and external platforms.",
      },

      {
        number: "04",
        title: "Deploy",
        description:
          "Move the application through environments toward production.",
      },
    ],

    next: {
      title: "API Overview",
      route: "/resources/documentation/api",
    },
  },


  /* =======================================================
     02 — API
  ======================================================= */

  api: {
    category: "API",

    title: "Understand the TechWrap API",

    subtitle:
      "Learn how applications communicate with services through APIs.",

    readTime: "8 min read",

    icon: "</>",

    overview:
      "APIs provide a structured way for frontend applications, backend services, and external systems to communicate. TechWrap documentation focuses on the concepts and workflow required to work with APIs without exposing private implementation details.",

    learn: [
      "Understand the role of REST APIs",
      "Learn how applications exchange data",
      "Understand authentication at a high level",
      "Explore common API integration patterns",
    ],

    technologies: [
      "REST API",
      "React",
      "TypeScript",
      "Spring Boot",
      "Node.js",
      "Python",
    ],

    steps: [
      {
        number: "01",
        title: "Request",
        description:
          "An application sends a request to an available API endpoint.",
      },

      {
        number: "02",
        title: "Authenticate",
        description:
          "The request is validated using the appropriate authentication mechanism.",
      },

      {
        number: "03",
        title: "Process",
        description:
          "The backend service processes the request and performs the required operation.",
      },

      {
        number: "04",
        title: "Response",
        description:
          "Structured data is returned to the application.",
      },
    ],

    previous: {
      title: "Quick Start",
      route: "/resources/documentation/getting-started",
    },

    next: {
      title: "Integration Guide",
      route: "/resources/documentation/integrations",
    },
  },


  /* =======================================================
     03 — INTEGRATIONS
  ======================================================= */

  integrations: {
    category: "INTEGRATIONS",

    title: "Connect your applications",

    subtitle:
      "Understand the building blocks behind application integrations.",

    readTime: "6 min read",

    icon: "↗",

    overview:
      "Modern applications rarely work alone. TechWrap integrations allow applications to communicate with external services, APIs, platforms, and business systems through clearly defined integration points.",

    learn: [
      "Understand integration architecture",
      "Explore third-party service connections",
      "Understand webhooks at a high level",
      "Learn how data moves between systems",
    ],

    technologies: [
      "REST APIs",
      "Webhooks",
      "Node.js",
      "Spring Boot",
      "Python",
      "MongoDB",
      "PostgreSQL",
    ],

    steps: [
      {
        number: "01",
        title: "Connect",
        description:
          "Identify the service and establish the required connection.",
      },

      {
        number: "02",
        title: "Exchange",
        description:
          "Applications exchange structured information through APIs or events.",
      },

      {
        number: "03",
        title: "Transform",
        description:
          "Data can be mapped into the format required by the application.",
      },

      {
        number: "04",
        title: "Monitor",
        description:
          "Integration activity can be monitored to maintain reliable workflows.",
      },
    ],

    previous: {
      title: "API Overview",
      route: "/resources/documentation/api",
    },

    next: {
      title: "Deployment Guide",
      route: "/resources/documentation/deployment",
    },
  },


  /* =======================================================
     04 — DEPLOYMENT
  ======================================================= */

  deployment: {
    category: "DEPLOYMENT",

    title: "From development to production",

    subtitle:
      "Understand the journey from local development to a production environment.",

    readTime: "7 min read",

    icon: "▲",

    overview:
      "Deployment is the final stage of turning an application into a production-ready product. TechWrap follows a structured workflow that separates development, testing, deployment, and monitoring.",

    learn: [
      "Understand development and production environments",
      "Explore the deployment lifecycle",
      "Understand CI/CD concepts",
      "Learn the role of monitoring after deployment",
    ],

    technologies: [
      "Docker",
      "CI/CD",
      "Cloud",
      "Git",
      "React",
      "Spring Boot",
      "Node.js",
    ],

    steps: [
      {
        number: "01",
        title: "Develop",
        description:
          "Build and test application features in the development environment.",
      },

      {
        number: "02",
        title: "Validate",
        description:
          "Verify application quality before moving toward production.",
      },

      {
        number: "03",
        title: "Deploy",
        description:
          "Use an automated deployment workflow to release the application.",
      },

      {
        number: "04",
        title: "Monitor",
        description:
          "Observe application health and performance after deployment.",
      },
    ],

    previous: {
      title: "Integration Guide",
      route: "/resources/documentation/integrations",
    },
  },
};


/* =========================================================
   DOCUMENTATION DETAIL COMPONENT
========================================================= */

const DocumentationDetail: React.FC = () => {

  const location = useLocation();

  const navigate = useNavigate();


  /* =======================================================
     GET CURRENT URL SLUG
  ======================================================= */

  const slug =
    location.pathname
      .split("/")
      .filter(Boolean)
      .pop() || "getting-started";


  /* =======================================================
     GET DOCUMENTATION CONTENT
  ======================================================= */

  const data =
    documentationData[slug];


  /* =======================================================
     SAFETY FALLBACK
  ======================================================= */

  const currentData =
    data ||
    documentationData["getting-started"];


  /* =======================================================
     SCROLL TO TOP WHEN PAGE CHANGES
  ======================================================= */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [location.pathname]);


  return (

    <main className="tw-doc-detail">

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="tw-doc-detail-grid" />

      <div
        className="
          tw-doc-detail-glow
          tw-doc-detail-glow-one
        "
      />

      <div
        className="
          tw-doc-detail-glow
          tw-doc-detail-glow-two
        "
      />


      {/* ===================================================
          TOP NAVIGATION
      =================================================== */}

      <div className="tw-doc-detail-top">

        <Link
          to="/pages/research/Documentation"
          className="tw-doc-back"
        >

          <span>←</span>

          Back to Documentation

        </Link>


        <span className="tw-doc-reading-time">

          {currentData.readTime}

        </span>

      </div>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="tw-doc-detail-hero">

        <div className="tw-doc-detail-category">

          <span />

          {currentData.category}

        </div>


        <div className="tw-doc-detail-icon">

          {currentData.icon}

        </div>


        <h1>

          {currentData.title}

        </h1>


        <p>

          {currentData.subtitle}

        </p>

      </section>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <section className="tw-doc-detail-content">


        {/* =================================================
            OVERVIEW
        ================================================= */}

        <div className="tw-doc-overview">

          <span className="tw-doc-section-label">

            OVERVIEW

          </span>


          <h2>

            Understand the

            <span> bigger picture.</span>

          </h2>


          <p>

            {currentData.overview}

          </p>

        </div>


        {/* =================================================
            WHAT YOU LEARN
        ================================================= */}

        <div className="tw-doc-learn">

          <div className="tw-doc-learn-heading">

            <span className="tw-doc-section-label">

              IN THIS GUIDE

            </span>


            <h2>

              What you'll learn

            </h2>

          </div>


          <div className="tw-doc-learn-list">

            {currentData.learn.map(
              (item, index) => (

                <div
                  key={item}
                  className="tw-doc-learn-item"
                >

                  <span>

                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}

                  </span>


                  <p>

                    {item}

                  </p>

                </div>

              )
            )}

          </div>

        </div>


        {/* =================================================
            TECHNOLOGY ECOSYSTEM
        ================================================= */}

        <div className="tw-doc-tech-section">

          <div>

            <span className="tw-doc-section-label">

              TECHNOLOGY ECOSYSTEM

            </span>


            <h2>

              Built around modern

              <span> technologies.</span>

            </h2>

          </div>


          <div className="tw-doc-tech-list">

            {currentData.technologies.map(
              (technology) => (

                <span key={technology}>

                  {technology}

                </span>

              )
            )}

          </div>

        </div>


        {/* =================================================
            WORKFLOW
        ================================================= */}

        <div className="tw-doc-workflow">

          <div className="tw-doc-workflow-heading">

            <span className="tw-doc-section-label">

              WORKFLOW

            </span>


            <h2>

              How it fits together

            </h2>


            <p>

              A simplified view of the process
              without exposing internal architecture
              or implementation details.

            </p>

          </div>


          <div className="tw-doc-workflow-line">

            {currentData.steps.map(
              (step, index) => (

                <div
                  key={step.number}
                  className="tw-doc-workflow-step"
                >

                  <div className="tw-doc-step-number">

                    {step.number}

                  </div>


                  <div className="tw-doc-step-content">

                    <h3>

                      {step.title}

                    </h3>


                    <p>

                      {step.description}

                    </p>

                  </div>


                  {index !==
                    currentData.steps.length - 1 && (

                    <div className="tw-doc-step-arrow">

                      →

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </div>


        {/* =================================================
            PREVIOUS / NEXT NAVIGATION
        ================================================= */}

        <div className="tw-doc-page-navigation">


          {/* PREVIOUS */}

          {currentData.previous ? (

            <button
              type="button"
              onClick={() =>
                navigate(
                  currentData.previous!.route
                )
              }
            >

              <small>

                ← PREVIOUS

              </small>


              <strong>

                {currentData.previous.title}

              </strong>

            </button>

          ) : (

            <div />

          )}


          {/* NEXT */}

          {currentData.next ? (

            <button
              type="button"
              className="tw-doc-next-button"
              onClick={() =>
                navigate(
                  currentData.next!.route
                )
              }
            >

              <small>

                NEXT →

              </small>


              <strong>

                {currentData.next.title}

              </strong>

            </button>

          ) : (

            <div />

          )}

        </div>

      </section>

    </main>
  );
};


export default DocumentationDetail;