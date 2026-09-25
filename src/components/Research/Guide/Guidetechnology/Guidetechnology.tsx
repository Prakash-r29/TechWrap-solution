import React, { useMemo, useState } from "react";
import "./Guidetechnology.css";

interface TechnologyGroup {
  id: string;
  name: string;
  description: string;
  technologies: string[];
}

interface Guide {
  title: string;
  description: string;
  stack: string;
  time: string;
}

/* =========================================================
   TECHNOLOGY GROUPS
========================================================= */

const technologyGroups: TechnologyGroup[] = [
  {
    id: "web",
    name: "Web Development",
    description:
      "Build scalable websites, SaaS platforms, dashboards, and full-stack applications.",
    technologies: [
      "MERN",
      "MEAN",
      "Java Full Stack",
      "Python Full Stack",
      "Modern Stack",
    ],
  },
  {
    id: "ai",
    name: "AI Products",
    description:
      "Explore practical technologies for building intelligent and AI-powered products.",
    technologies: [
      "AI Applications",
      "LLM Applications",
      "AI Agents",
      "AI APIs",
      "Python AI",
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    description:
      "Learn how modern teams build, automate, deploy, and monitor applications.",
    technologies: [
      "Docker",
      "CI/CD",
      "Kubernetes",
      "GitHub Actions",
      "Monitoring",
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    description:
      "Understand modern cloud infrastructure and scalable application environments.",
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Serverless",
      "Cloud Architecture",
    ],
  },
  {
    id: "mobile",
    name: "Mobile Applications",
    description:
      "Explore technologies for building modern connected mobile applications.",
    technologies: [
      "React Native",
      "Flutter",
      "Android",
      "iOS",
      "Mobile APIs",
    ],
  },
];

/* =========================================================
   GUIDE DATABASE
========================================================= */

const guideDatabase: Record<string, Guide[]> = {
  MERN: [
    {
      title: "Building Production-Ready MERN Applications",
      description:
        "Structure MongoDB, Express, React, and Node.js applications for production.",
      stack: "MongoDB · Express · React · Node.js",
      time: "10 min",
    },
    {
      title: "Designing a Scalable React Frontend",
      description:
        "Organize components, services, state, and reusable UI patterns.",
      stack: "React · TypeScript",
      time: "8 min",
    },
    {
      title: "Connecting React with Node.js APIs",
      description:
        "Understand the practical flow between a React frontend and Node backend.",
      stack: "React · Node.js · REST API",
      time: "7 min",
    },
    {
      title: "MongoDB Data Patterns for Modern Applications",
      description:
        "Explore practical approaches to structuring application data.",
      stack: "MongoDB · Node.js",
      time: "9 min",
    },
  ],

  MEAN: [
    {
      title: "Building Production-Ready MEAN Applications",
      description:
        "Understand the architecture behind MongoDB, Express, Angular, and Node.js.",
      stack: "MongoDB · Express · Angular · Node.js",
      time: "11 min",
    },
    {
      title: "Structuring a Modern Angular Application",
      description:
        "Explore clean Angular project organization and reusable architecture.",
      stack: "Angular · TypeScript",
      time: "8 min",
    },
    {
      title: "Connecting Angular with REST APIs",
      description:
        "Build reliable communication between Angular applications and APIs.",
      stack: "Angular · REST API",
      time: "7 min",
    },
    {
      title: "Building Reusable MEAN Services",
      description:
        "Understand how frontend and backend services work together.",
      stack: "Angular · Node.js · Express",
      time: "8 min",
    },
  ],

  "Java Full Stack": [
    {
      title: "Building Production-Ready Java Applications",
      description:
        "Understand the architecture behind modern Java full-stack applications.",
      stack: "React · Java · Spring Boot",
      time: "12 min",
    },
    {
      title: "React + Spring Boot Architecture",
      description:
        "Connect a modern React frontend with Spring Boot backend services.",
      stack: "React · Spring Boot · REST API",
      time: "10 min",
    },
    {
      title: "Designing REST APIs with Spring Boot",
      description:
        "Learn practical patterns for building maintainable backend APIs.",
      stack: "Java · Spring Boot · REST API",
      time: "9 min",
    },
    {
      title: "Java Full Stack Project Structure",
      description:
        "Understand how frontend, backend, database, and API layers fit together.",
      stack: "React · Java · PostgreSQL",
      time: "8 min",
    },
  ],

  "Python Full Stack": [
    {
      title: "Building Production-Ready Python Applications",
      description:
        "Explore patterns for building scalable Python-backed applications.",
      stack: "React · Python · REST API",
      time: "11 min",
    },
    {
      title: "React + Python API Architecture",
      description:
        "Understand communication between React applications and Python services.",
      stack: "React · Python · REST API",
      time: "9 min",
    },
    {
      title: "Designing Python REST APIs",
      description:
        "Explore practical API patterns for modern Python applications.",
      stack: "Python · REST API",
      time: "8 min",
    },
    {
      title: "Python Full Stack Project Structure",
      description:
        "Connect frontend, backend, database, and services into one product.",
      stack: "React · Python · PostgreSQL",
      time: "10 min",
    },
  ],

  "Modern Stack": [
    {
      title: "Building with the Modern Web Stack",
      description:
        "Combine React, TypeScript, APIs, cloud, and modern development workflows.",
      stack: "React · TypeScript · REST API",
      time: "10 min",
    },
    {
      title: "TypeScript Architecture for Large Applications",
      description:
        "Create maintainable and scalable TypeScript applications.",
      stack: "TypeScript · React",
      time: "8 min",
    },
    {
      title: "Modern Frontend Architecture",
      description:
        "Explore patterns for building maintainable frontend applications.",
      stack: "React · TypeScript · Bootstrap",
      time: "9 min",
    },
    {
      title: "From Frontend to Production",
      description:
        "Understand the complete journey from development to deployment.",
      stack: "React · Docker · CI/CD",
      time: "10 min",
    },
  ],

  "AI Applications": [
    {
      title: "Building AI-Powered Applications",
      description:
        "Understand where AI services fit inside modern applications.",
      stack: "React · AI APIs · Python",
      time: "10 min",
    },
    {
      title: "Connecting Applications with AI APIs",
      description:
        "Explore the architecture behind frontend, backend, and AI services.",
      stack: "React · REST API · AI",
      time: "8 min",
    },
    {
      title: "Designing AI Product Workflows",
      description:
        "Build practical workflows around intelligent application features.",
      stack: "Python · AI · REST API",
      time: "9 min",
    },
  ],

  "LLM Applications": [
    {
      title: "Building LLM-Powered Applications",
      description:
        "Understand the architecture behind applications powered by large language models.",
      stack: "React · Python · LLM API",
      time: "12 min",
    },
    {
      title: "Designing LLM Application Workflows",
      description:
        "Connect user interfaces, backend services, and language models.",
      stack: "React · Python · AI",
      time: "10 min",
    },
    {
      title: "Working with AI APIs",
      description:
        "Explore practical patterns for integrating language model APIs.",
      stack: "REST API · Python · AI",
      time: "8 min",
    },
  ],

  "AI Agents": [
    {
      title: "Introduction to AI Agents",
      description:
        "Understand how AI agents can perform tasks across application workflows.",
      stack: "Python · AI · APIs",
      time: "10 min",
    },
    {
      title: "Designing Agent Workflows",
      description:
        "Explore the building blocks behind practical AI agent systems.",
      stack: "Python · LLM · APIs",
      time: "11 min",
    },
  ],

  "AI APIs": [
    {
      title: "Integrating AI APIs into Applications",
      description:
        "Connect application workflows with modern AI services.",
      stack: "React · REST API · AI",
      time: "8 min",
    },
    {
      title: "Designing Reliable AI Integrations",
      description:
        "Understand how AI services fit into application architecture.",
      stack: "Python · APIs · AI",
      time: "9 min",
    },
  ],

  "Python AI": [
    {
      title: "Building AI Applications with Python",
      description:
        "Explore Python's role in modern AI application development.",
      stack: "Python · AI · APIs",
      time: "10 min",
    },
    {
      title: "Python AI Integration Patterns",
      description:
        "Connect Python services with modern application architectures.",
      stack: "Python · REST API · AI",
      time: "8 min",
    },
  ],

  Docker: [
    {
      title: "Containerizing Modern Applications",
      description:
        "Understand how Docker packages applications for consistent environments.",
      stack: "Docker · React · Node.js",
      time: "8 min",
    },
    {
      title: "Docker for Full Stack Applications",
      description:
        "Explore container strategies for frontend and backend applications.",
      stack: "Docker · React · Spring Boot",
      time: "10 min",
    },
  ],

  "CI/CD": [
    {
      title: "Building a Modern CI/CD Pipeline",
      description:
        "Understand how applications move automatically from code to deployment.",
      stack: "Git · CI/CD · Docker",
      time: "9 min",
    },
    {
      title: "Automating Application Deployment",
      description:
        "Explore practical continuous integration and delivery workflows.",
      stack: "CI/CD · Docker · Cloud",
      time: "8 min",
    },
  ],

  Kubernetes: [
    {
      title: "Introduction to Kubernetes",
      description:
        "Understand the role of Kubernetes in modern application infrastructure.",
      stack: "Kubernetes · Docker · Cloud",
      time: "10 min",
    },
  ],

  "GitHub Actions": [
    {
      title: "Automating Builds with GitHub Actions",
      description:
        "Create automated workflows for testing and deployment.",
      stack: "GitHub Actions · CI/CD · Git",
      time: "7 min",
    },
  ],

  Monitoring: [
    {
      title: "Monitoring Production Applications",
      description:
        "Understand the fundamentals of application health and performance monitoring.",
      stack: "Monitoring · Cloud · DevOps",
      time: "8 min",
    },
  ],

  AWS: [
    {
      title: "Deploying Applications on AWS",
      description:
        "Understand the journey from application development to AWS deployment.",
      stack: "AWS · Docker · CI/CD",
      time: "11 min",
    },
  ],

  Azure: [
    {
      title: "Modern Application Deployment with Azure",
      description:
        "Explore cloud deployment concepts using Microsoft Azure.",
      stack: "Azure · Docker · CI/CD",
      time: "10 min",
    },
  ],

  "Google Cloud": [
    {
      title: "Building Applications for Google Cloud",
      description:
        "Understand the fundamentals of deploying scalable applications on Google Cloud.",
      stack: "Google Cloud · Docker · CI/CD",
      time: "10 min",
    },
  ],

  Serverless: [
    {
      title: "Understanding Serverless Applications",
      description:
        "Explore how serverless architectures can simplify application deployment.",
      stack: "Serverless · Cloud · APIs",
      time: "8 min",
    },
  ],

  "Cloud Architecture": [
    {
      title: "Designing Scalable Cloud Architecture",
      description:
        "Understand the principles behind reliable cloud-based applications.",
      stack: "Cloud · Docker · APIs",
      time: "12 min",
    },
  ],

  "React Native": [
    {
      title: "Building Mobile Applications with React Native",
      description:
        "Create cross-platform mobile applications using React and native capabilities.",
      stack: "React Native · TypeScript",
      time: "10 min",
    },
  ],

  Flutter: [
    {
      title: "Building Cross-Platform Applications with Flutter",
      description:
        "Explore the fundamentals of modern Flutter application development.",
      stack: "Flutter · Dart · APIs",
      time: "9 min",
    },
  ],

  Android: [
    {
      title: "Modern Android Application Architecture",
      description:
        "Understand practical patterns for building maintainable Android applications.",
      stack: "Android · Kotlin · APIs",
      time: "10 min",
    },
  ],

  iOS: [
    {
      title: "Modern iOS Application Architecture",
      description:
        "Explore patterns for creating scalable iOS applications.",
      stack: "iOS · Swift · APIs",
      time: "10 min",
    },
  ],

  "Mobile APIs": [
    {
      title: "Connecting Mobile Applications with APIs",
      description:
        "Understand how mobile applications communicate with backend services.",
      stack: "Mobile · REST API · Cloud",
      time: "8 min",
    },
  ],
};

/* =========================================================
   GUIDE VISUAL
========================================================= */

const getGuideVisual = (
  technology: string,
  guide: Guide
): {
  icon: string;
  label: string;
  pattern: string;
} => {
  const source =
    `${technology} ${guide.title} ${guide.stack}`.toLowerCase();

  if (
    source.includes("ai") ||
    source.includes("llm") ||
    source.includes("agent")
  ) {
    return {
      icon: "✦",
      label: "AI",
      pattern: "ai",
    };
  }

  if (
    source.includes("cloud") ||
    source.includes("aws") ||
    source.includes("azure") ||
    source.includes("serverless")
  ) {
    return {
      icon: "☁",
      label: "CLOUD",
      pattern: "cloud",
    };
  }

  if (
    source.includes("docker") ||
    source.includes("kubernetes") ||
    source.includes("ci/cd")
  ) {
    return {
      icon: "◈",
      label: "DEVOPS",
      pattern: "devops",
    };
  }

  if (
    source.includes("api") ||
    source.includes("rest")
  ) {
    return {
      icon: "↗",
      label: "API",
      pattern: "api",
    };
  }

  if (
    source.includes("react") ||
    source.includes("angular") ||
    source.includes("frontend")
  ) {
    return {
      icon: "◉",
      label: "FRONTEND",
      pattern: "frontend",
    };
  }

  if (
    source.includes("mongodb") ||
    source.includes("postgresql") ||
    source.includes("database") ||
    source.includes("mysql") ||
    source.includes("redis")
  ) {
    return {
      icon: "▦",
      label: "DATA",
      pattern: "data",
    };
  }

  if (
    source.includes("mobile") ||
    source.includes("android") ||
    source.includes("ios") ||
    source.includes("flutter")
  ) {
    return {
      icon: "▣",
      label: "MOBILE",
      pattern: "mobile",
    };
  }

  return {
    icon: "⌘",
    label: "ENGINEERING",
    pattern: "engineering",
  };
};

/* =========================================================
   TECHNOLOGY PROFILE
========================================================= */

const getTechnologyVisual = (
  technology: string
): {
  icon: string;
  subtitle: string;
  description: string;
  capabilities: {
    label: string;
    value: string;
  }[];
} => {
  const source = technology.toLowerCase();

  if (source === "mern") {
    return {
      icon: "◉",
      subtitle: "Full Stack Web Architecture",
      description:
        "A JavaScript-based full-stack approach for building modern web products from interface to database.",
      capabilities: [
        { label: "FRONTEND", value: "React" },
        { label: "BACKEND", value: "Node.js" },
        { label: "DATABASE", value: "MongoDB" },
        { label: "API", value: "REST" },
      ],
    };
  }

  if (source === "mean") {
    return {
      icon: "◌",
      subtitle: "Angular Full Stack Architecture",
      description:
        "A structured full-stack architecture combining Angular, Node.js, Express, and MongoDB.",
      capabilities: [
        { label: "FRONTEND", value: "Angular" },
        { label: "BACKEND", value: "Node.js" },
        { label: "DATABASE", value: "MongoDB" },
        { label: "API", value: "REST" },
      ],
    };
  }

  if (source === "java full stack") {
    return {
      icon: "◆",
      subtitle: "Enterprise Full Stack Architecture",
      description:
        "A strong architecture for business applications using React, Java, Spring Boot, and relational databases.",
      capabilities: [
        { label: "FRONTEND", value: "React" },
        { label: "BACKEND", value: "Java" },
        { label: "FRAMEWORK", value: "Spring Boot" },
        { label: "DATA", value: "PostgreSQL" },
      ],
    };
  }

  if (source === "python full stack") {
    return {
      icon: "⌘",
      subtitle: "Python Full Stack Architecture",
      description:
        "A flexible architecture for applications combining modern frontends with Python-powered services.",
      capabilities: [
        { label: "FRONTEND", value: "React" },
        { label: "BACKEND", value: "Python" },
        { label: "API", value: "REST" },
        { label: "DATA", value: "PostgreSQL" },
      ],
    };
  }

  if (source === "modern stack") {
    return {
      icon: "✦",
      subtitle: "Modern Product Engineering",
      description:
        "A flexible product stack combining modern frontend engineering, APIs, cloud delivery, and strong developer workflows.",
      capabilities: [
        { label: "UI", value: "React" },
        { label: "LANGUAGE", value: "TypeScript" },
        { label: "API", value: "REST" },
        { label: "DEPLOY", value: "Cloud" },
      ],
    };
  }

  if (source.includes("ai")) {
    return {
      icon: "✦",
      subtitle: "Intelligent Product Engineering",
      description:
        "Design applications around AI services, intelligent workflows, model APIs, and automation.",
      capabilities: [
        { label: "MODEL", value: "LLM" },
        { label: "RUNTIME", value: "Python" },
        { label: "API", value: "AI APIs" },
        { label: "WORKFLOW", value: "Automation" },
      ],
    };
  }

  if (source === "docker") {
    return {
      icon: "◈",
      subtitle: "Containerized Application Delivery",
      description:
        "Package applications into consistent environments and prepare them for repeatable deployment.",
      capabilities: [
        { label: "PACKAGE", value: "Containers" },
        { label: "BUILD", value: "Images" },
        { label: "DEPLOY", value: "Cloud" },
        { label: "FLOW", value: "CI/CD" },
      ],
    };
  }

  if (source === "ci/cd") {
    return {
      icon: "↗",
      subtitle: "Continuous Delivery Engineering",
      description:
        "Automate testing, builds, and application delivery from source code to deployment.",
      capabilities: [
        { label: "SOURCE", value: "Git" },
        { label: "BUILD", value: "Automated" },
        { label: "TEST", value: "CI" },
        { label: "DEPLOY", value: "CD" },
      ],
    };
  }

  if (
    source.includes("kubernetes") ||
    source.includes("monitoring")
  ) {
    return {
      icon: "▦",
      subtitle: "Production Infrastructure Engineering",
      description:
        "Understand production infrastructure, containers, orchestration, and application observability.",
      capabilities: [
        { label: "PLATFORM", value: "Kubernetes" },
        { label: "RUNTIME", value: "Containers" },
        { label: "HEALTH", value: "Monitoring" },
        { label: "CLOUD", value: "Scalable" },
      ],
    };
  }

  if (
    source.includes("aws") ||
    source.includes("azure") ||
    source.includes("google cloud") ||
    source.includes("serverless") ||
    source.includes("cloud")
  ) {
    return {
      icon: "☁",
      subtitle: "Scalable Cloud Architecture",
      description:
        "Explore cloud platforms, scalable services, deployment patterns, and infrastructure foundations.",
      capabilities: [
        { label: "COMPUTE", value: "Cloud" },
        { label: "DEPLOY", value: "CI/CD" },
        { label: "SCALE", value: "Elastic" },
        { label: "API", value: "Services" },
      ],
    };
  }

  if (
    source.includes("react native") ||
    source.includes("flutter") ||
    source.includes("android") ||
    source.includes("ios") ||
    source.includes("mobile")
  ) {
    return {
      icon: "▣",
      subtitle: "Connected Mobile Application Development",
      description:
        "Build connected mobile experiences with modern application interfaces and backend services.",
      capabilities: [
        { label: "CLIENT", value: technology },
        { label: "LANGUAGE", value: "Type Safe" },
        { label: "API", value: "REST" },
        { label: "PLATFORM", value: "Mobile" },
      ],
    };
  }

  if (
    source.includes("api") ||
    source.includes("rest")
  ) {
    return {
      icon: "↗",
      subtitle: "Connected API Architecture",
      description:
        "Connect application layers through structured APIs, data exchange, authentication, and services.",
      capabilities: [
        { label: "PROTOCOL", value: "REST" },
        { label: "SECURITY", value: "Auth" },
        { label: "DATA", value: "JSON" },
        { label: "INTEGRATION", value: "Services" },
      ],
    };
  }

  return {
    icon: "⌘",
    subtitle: "Modern Technology Architecture",
    description:
      "Explore architecture patterns for building connected, scalable, production-ready applications.",
    capabilities: [
      { label: "BUILD", value: technology },
      { label: "DESIGN", value: "Scalable" },
      { label: "API", value: "Connected" },
      { label: "DELIVERY", value: "Production" },
    ],
  };
};

/* =========================================================
   COMPONENT
========================================================= */

const GuidesTechnology: React.FC = () => {
  const [activeGroup, setActiveGroup] =
    useState<string>("web");

  const [activeTechnology, setActiveTechnology] =
    useState<string>("MERN");

  const currentGroup =
    technologyGroups.find(
      (group) => group.id === activeGroup
    ) || technologyGroups[0];

  const currentGuides =
    guideDatabase[activeTechnology] || [];

  const technologyVisual = useMemo(
    () => getTechnologyVisual(activeTechnology),
    [activeTechnology]
  );

  const totalGuides =
    currentGuides.length;

  /* =======================================================
     GROUP CHANGE
  ======================================================= */

  const handleGroupChange = (
    group: TechnologyGroup
  ) => {
    setActiveGroup(group.id);

    setActiveTechnology(
      group.technologies[0]
    );
  };

  /* =======================================================
     TECHNOLOGY CHANGE
  ======================================================= */

  const handleTechnologyChange = (
    technology: string
  ) => {
    setActiveTechnology(
      technology
    );
  };

  return (
    <section
      className="tw-tech-explorer-v2"
      aria-label="Technology explorer"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="tw-v2-grid"
        aria-hidden="true"
      />

      <div
        className="tw-v2-glow tw-v2-glow-one"
        aria-hidden="true"
      />

      <div
        className="tw-v2-glow tw-v2-glow-two"
        aria-hidden="true"
      />

      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="tw-v2-header">
        <div className="tw-v2-eyebrow">
          <span className="tw-v2-eyebrow-dot" />

          <span>
            TECHNOLOGY EXPLORER
          </span>

          <i />
        </div>

        <h2>
          Build around the
          <span>
            right technology.
          </span>
        </h2>

        <p>
          Explore practical stacks, architecture patterns,
          and engineering guides used to build modern
          digital products.
        </p>
      </header>

      {/* ===================================================
          STEPS
      =================================================== */}

      <div className="tw-v2-steps">

        <div className="tw-v2-step active">
          <span>01</span>

          <strong>
            Choose a domain
          </strong>
        </div>

        <div className="tw-v2-step-line" />

        <div className="tw-v2-step">
          <span>02</span>

          <strong>
            Select a stack
          </strong>
        </div>

        <div className="tw-v2-step-line" />

        <div className="tw-v2-step">
          <span>03</span>

          <strong>
            Explore guides
          </strong>
        </div>

      </div>

      {/* ===================================================
          TECHNOLOGY DOMAIN
      =================================================== */}

      <div className="tw-v2-domain-shell">

        <div className="tw-v2-domain-top">

          <div>

            <span className="tw-v2-label">
              TECHNOLOGY DOMAIN
            </span>

            <h3>
              Start with an area
            </h3>

          </div>

          <span className="tw-v2-domain-count">
            {technologyGroups.length} AREAS
          </span>

        </div>

        <div
          className="tw-v2-domain-tabs"
          role="tablist"
          aria-label="Technology domains"
        >

          {technologyGroups.map(
            (group, index) => {

              const isActive =
                activeGroup === group.id;

              return (
                <button
                  type="button"
                  key={group.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`tw-v2-domain-tab ${
                    isActive
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleGroupChange(
                      group
                    )
                  }
                >

                  <span className="tw-v2-domain-number">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span className="tw-v2-domain-info">

                    <strong>
                      {group.name}
                    </strong>

                    <small>
                      {group.technologies.length} stacks
                    </small>

                  </span>

                  <span className="tw-v2-domain-arrow">
                    {isActive
                      ? "✓"
                      : "→"}
                  </span>

                </button>
              );
            }
          )}

        </div>

      </div>

      {/* ===================================================
          CURRENT DOMAIN
      =================================================== */}

      <div
        className="tw-v2-domain-description"
        key={activeGroup}
      >

        <span className="tw-v2-domain-description-dot" />

        <p>
          {currentGroup.description}
        </p>

      </div>

      {/* ===================================================
          STACK SELECTOR
      =================================================== */}

      <div className="tw-v2-selector">

        <div className="tw-v2-selector-head">

          <div>

            <span className="tw-v2-label">
              SELECT A STACK
            </span>

            <h3>
              {currentGroup.name}
            </h3>

          </div>

          <div className="tw-v2-live">

            <span />

            STACK SELECTOR ACTIVE

          </div>

        </div>

        <div
          className="tw-v2-stack-tabs"
          role="tablist"
          aria-label={`${currentGroup.name} technologies`}
          key={activeGroup}
        >

          {currentGroup.technologies.map(
            (technology, index) => {

              const isActive =
                activeTechnology ===
                technology;

              return (
                <button
                  type="button"
                  key={technology}
                  role="tab"
                  aria-selected={isActive}
                  className={`tw-v2-stack-tab ${
                    isActive
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleTechnologyChange(
                      technology
                    )
                  }
                >

                  <span className="tw-v2-stack-number">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span className="tw-v2-stack-name">
                    {technology}
                  </span>

                  <span className="tw-v2-stack-arrow">
                    {isActive
                      ? "✓"
                      : "→"}
                  </span>

                </button>
              );
            }
          )}

        </div>

      </div>

      {/* ===================================================
          ACTIVE TECHNOLOGY
      =================================================== */}

      <section
        className="tw-v2-active"
        key={activeTechnology}
        role="tabpanel"
      >

        <div
          className="tw-v2-active-top"
        >

          <div className="tw-v2-active-status">

            <span />

            ACTIVE TECHNOLOGY

          </div>

          <div className="tw-v2-active-count">

            <strong>
              {String(
                totalGuides
              ).padStart(
                2,
                "0"
              )}
            </strong>

            <span>
              {totalGuides === 1
                ? "GUIDE"
                : "GUIDES"}
            </span>

          </div>

        </div>

        <div className="tw-v2-active-main">

          <div className="tw-v2-active-icon">
            {technologyVisual.icon}
          </div>

          <div className="tw-v2-active-copy">

            <span>
              CURRENTLY EXPLORING
            </span>

            <h3>
              {activeTechnology}
            </h3>

            <p>
              {technologyVisual.subtitle}
            </p>

            <small>
              {technologyVisual.description}
            </small>

          </div>

        </div>

        {/* =================================================
            CAPABILITIES
        ================================================= */}

        <div className="tw-v2-capabilities">

          {technologyVisual.capabilities.map(
            (capability, index) => (
              <div
                className="tw-v2-capability"
                key={capability.label}
              >

                <span>
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div>

                  <small>
                    {capability.label}
                  </small>

                  <strong>
                    {capability.value}
                  </strong>

                </div>

              </div>
            )
          )}

        </div>

      </section>

      {/* ===================================================
          GUIDE HEADER
      =================================================== */}

      <div className="tw-v2-guide-header">

        <div>

          <span className="tw-v2-label">
            ENGINEERING GUIDES
          </span>

          <h3>
            Learn by building.
          </h3>

        </div>

        <span className="tw-v2-guide-count">
          {totalGuides} AVAILABLE
        </span>

      </div>

      {/* ===================================================
          GUIDE GRID
      =================================================== */}

      <div
        className="tw-v2-guide-grid"
        key={`guides-${activeTechnology}`}
      >

        {currentGuides.length > 0 ? (

          currentGuides.map(
            (guide, index) => {

              const visual =
                getGuideVisual(
                  activeTechnology,
                  guide
                );

              return (
                <article
                  className="tw-v2-guide-card"
                  key={guide.title}
                  style={
                    {
                      "--guide-delay":
                        `${index * 90}ms`,
                    } as React.CSSProperties
                  }
                >

                  {/* =================================================
                      PATTERN
                  ================================================= */}

                  <div
                    className={`tw-v2-guide-pattern tw-v2-pattern-${visual.pattern}`}
                    aria-hidden="true"
                  />

                  {/* =================================================
                      TOP
                  ================================================= */}

                  <div className="tw-v2-guide-top">

                    <span className="tw-v2-guide-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="tw-v2-guide-category">

                      <i />

                      {visual.label}

                    </span>

                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div className="tw-v2-guide-icon">
                    {visual.icon}
                  </div>

                  {/* =================================================
                      STACK
                  ================================================= */}

                  <span className="tw-v2-guide-stack">
                    {guide.stack}
                  </span>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <h4>
                    {guide.title}
                  </h4>

                  <p>
                    {guide.description}
                  </p>

                  {/* =================================================
                      FOOTER
                  ================================================= */}

                  <div className="tw-v2-guide-footer">

                    <div className="tw-v2-guide-time">

                      <span>
                        READ GUIDE
                      </span>

                      <strong>
                        {guide.time}
                      </strong>

                    </div>

                    <div className="tw-v2-guide-arrow">

                      <span>
                        →
                      </span>

                    </div>

                  </div>

                </article>
              );
            }
          )

        ) : (

          <div className="tw-v2-guide-empty">
            No guides available yet.
          </div>

        )}

      </div>

    </section>
  );
};

export default GuidesTechnology;