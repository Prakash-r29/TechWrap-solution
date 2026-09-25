import { useState } from "react";
import "./Devtech.css";

type Technology = {
  name: string;
  icon: string;
  type: string;
  description: string;
  usage: string;
};

type TechnologyGroup = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    subtitle: "Build modern digital experiences",
    description:
      "Create fast, responsive and scalable interfaces for SaaS platforms, dashboards, marketplaces and enterprise applications.",
    technologies: [
      {
        name: "React",
        icon: "⚛",
        type: "UI Framework",
        description:
          "Component-based frontend development for interactive SaaS applications.",
        usage: "Dashboards • SaaS • Web Apps",
      },
      {
        name: "TypeScript",
        icon: "TS",
        type: "Programming Language",
        description:
          "Build reliable and maintainable applications with strong type safety.",
        usage: "Large Apps • APIs • Enterprise",
      },
      {
        name: "JavaScript",
        icon: "JS",
        type: "Web Language",
        description:
          "Core language for dynamic browser experiences and application logic.",
        usage: "Web • APIs • Interactions",
      },
      {
        name: "Bootstrap",
        icon: "B",
        type: "UI Framework",
        description:
          "Rapidly build responsive layouts and production-ready interfaces.",
        usage: "Responsive UI • Components",
      },
      {
        name: "HTML5",
        icon: "H5",
        type: "Markup",
        description:
          "Semantic structure and accessible foundations for web applications.",
        usage: "Structure • SEO • Accessibility",
      },
      {
        name: "CSS3",
        icon: "CSS",
        type: "Styling",
        description:
          "Create polished layouts, animations and responsive experiences.",
        usage: "Design • Animation • Layout",
      },
    ],
  },

  {
    id: "backend",
    number: "02",
    title: "Backend",
    subtitle: "Power reliable application logic",
    description:
      "Build secure, scalable backend systems that power business logic, authentication, APIs, payments and enterprise workflows.",
    technologies: [
      {
        name: "Spring Boot",
        icon: "SB",
        type: "Java Framework",
        description:
          "Production-ready Java framework for enterprise APIs and backend services.",
        usage: "Enterprise • REST APIs • Microservices",
      },
      {
        name: "Java",
        icon: "☕",
        type: "Programming Language",
        description:
          "Build robust backend applications and large-scale enterprise systems.",
        usage: "Enterprise • Banking • SaaS",
      },
      {
        name: "Node.js",
        icon: "N",
        type: "JavaScript Runtime",
        description:
          "Build fast event-driven APIs and real-time backend services.",
        usage: "APIs • Real-time • SaaS",
      },
      {
        name: "Python",
        icon: "PY",
        type: "Programming Language",
        description:
          "Flexible backend language for APIs, automation and intelligent systems.",
        usage: "APIs • AI • Automation",
      },
      {
        name: "Express",
        icon: "EX",
        type: "Node Framework",
        description:
          "Minimal and flexible framework for building Node.js APIs.",
        usage: "REST APIs • Backend",
      },
      {
        name: "FastAPI",
        icon: "FA",
        type: "Python Framework",
        description:
          "High-performance Python framework for modern API development.",
        usage: "AI APIs • Microservices",
      },
    ],
  },

  {
    id: "data",
    number: "03",
    title: "Data & APIs",
    subtitle: "Connect applications and data",
    description:
      "Design reliable data layers and integrations that connect products, services, users and external platforms.",
    technologies: [
      {
        name: "REST APIs",
        icon: "API",
        type: "API Architecture",
        description:
          "Connect frontend applications with backend services and third-party platforms.",
        usage: "Integrations • SaaS • Mobile",
      },
      {
        name: "PostgreSQL",
        icon: "PG",
        type: "SQL Database",
        description:
          "Reliable relational database for transactional and business applications.",
        usage: "SaaS • Enterprise • Analytics",
      },
      {
        name: "MongoDB",
        icon: "MG",
        type: "NoSQL Database",
        description:
          "Flexible document database for applications with evolving data models.",
        usage: "Web Apps • SaaS • Content",
      },
      {
        name: "MySQL",
        icon: "SQL",
        type: "Relational Database",
        description:
          "Popular relational database for web applications and business systems.",
        usage: "Web • Enterprise • Applications",
      },
      {
        name: "Redis",
        icon: "R",
        type: "In-Memory Database",
        description:
          "High-speed caching and data storage for performance-sensitive applications.",
        usage: "Cache • Sessions • Queues",
      },
      {
        name: "GraphQL",
        icon: "GQL",
        type: "API Layer",
        description:
          "Flexible API query language for retrieving exactly the data applications need.",
        usage: "APIs • Frontend • Platforms",
      },
    ],
  },

  {
    id: "ai",
    number: "04",
    title: "AI & Automation",
    subtitle: "Add intelligence to products",
    description:
      "Integrate modern AI capabilities into SaaS products, internal tools and automated business workflows.",
    technologies: [
      {
        name: "AI APIs",
        icon: "AI",
        type: "AI Integration",
        description:
          "Connect applications with modern artificial intelligence services.",
        usage: "AI Features • SaaS • Automation",
      },
      {
        name: "LLMs",
        icon: "LLM",
        type: "Generative AI",
        description:
          "Build intelligent experiences using large language models.",
        usage: "Chat • Content • Assistants",
      },
      {
        name: "AI Agents",
        icon: "AG",
        type: "Agentic AI",
        description:
          "Create AI systems capable of reasoning through multi-step tasks.",
        usage: "Automation • Workflows • Assistants",
      },
      {
        name: "RAG",
        icon: "RAG",
        type: "AI Architecture",
        description:
          "Connect AI models to private or domain-specific knowledge.",
        usage: "Enterprise AI • Search • Knowledge",
      },
      {
        name: "Automation",
        icon: "⚡",
        type: "Workflow Automation",
        description:
          "Automate repetitive business and development processes.",
        usage: "Operations • Workflows • Productivity",
      },
      {
        name: "AI Integrations",
        icon: "∞",
        type: "Product Integration",
        description:
          "Embed intelligent capabilities directly into existing products.",
        usage: "SaaS • CRM • Platforms",
      },
    ],
  },

  {
    id: "cloud",
    number: "05",
    title: "Cloud & DevOps",
    subtitle: "Deploy, monitor and scale",
    description:
      "Take applications from development to production with containers, automated delivery, cloud infrastructure and monitoring.",
    technologies: [
      {
        name: "Docker",
        icon: "DK",
        type: "Containerization",
        description:
          "Package applications and dependencies into portable containers.",
        usage: "Deployment • Development • Cloud",
      },
      {
        name: "CI/CD",
        icon: "CI",
        type: "Delivery Automation",
        description:
          "Automate testing, builds and production deployments.",
        usage: "DevOps • Deployment • Quality",
      },
      {
        name: "AWS",
        icon: "AWS",
        type: "Cloud Platform",
        description:
          "Deploy scalable applications using cloud infrastructure and services.",
        usage: "Cloud • SaaS • Infrastructure",
      },
      {
        name: "Azure",
        icon: "AZ",
        type: "Cloud Platform",
        description:
          "Build and deploy enterprise applications on Microsoft's cloud platform.",
        usage: "Enterprise • Cloud • DevOps",
      },
      {
        name: "GitHub",
        icon: "GH",
        type: "Developer Platform",
        description:
          "Collaborate on code, manage repositories and automate workflows.",
        usage: "Git • Collaboration • CI/CD",
      },
      {
        name: "Monitoring",
        icon: "◉",
        type: "Observability",
        description:
          "Track application health, performance and production behavior.",
        usage: "Monitoring • Performance • Reliability",
      },
    ],
  },
];

function DeveloperTechnologyStack() {
  const [activeGroup, setActiveGroup] = useState("frontend");
  const [activeTechnology, setActiveTechnology] = useState("React");

  const currentGroup =
    technologyGroups.find((group) => group.id === activeGroup) ||
    technologyGroups[0];

  const currentTechnology =
    currentGroup.technologies.find(
      (technology) => technology.name === activeTechnology
    ) || currentGroup.technologies[0];

  const handleGroupClick = (group: TechnologyGroup) => {
    setActiveGroup(group.id);
    setActiveTechnology(group.technologies[0].name);
  };

  const handleTechnologyClick = (technology: Technology) => {
    setActiveTechnology(technology.name);
  };

  return (
    <section className="developer-stack-section">

      <div className="stack-bg-grid"></div>

      <div className="stack-bg-glow stack-glow-one"></div>
      <div className="stack-bg-glow stack-glow-two"></div>

      <div className="developer-stack-container">

        {/* HEADER */}

        <div className="stack-section-header">

          <div className="stack-eyebrow">
            <span className="eyebrow-line"></span>

            DEVELOPER TECHNOLOGY

            <span className="eyebrow-line"></span>
          </div>

          <h2>
            Everything Developers
            <span> Need to Build.</span>
          </h2>

          <p>
            A modern engineering foundation for building SaaS platforms,
            web applications, APIs, AI products and scalable digital
            experiences.
          </p>

        </div>


        {/* STATUS BAR */}

        <div className="stack-status-bar">

          <div className="stack-status-left">

            <span className="live-dot"></span>

            <strong>TECHWRAP BUILD STACK</strong>

            <span className="status-divider"></span>

            <span>Production Ready</span>

          </div>

          <div className="stack-status-right">

            <span className="status-item">
              <b>05</b>
              Layers
            </span>

            <span className="status-item">
              <b>30+</b>
              Technologies
            </span>

            <span className="status-item">
              <b>∞</b>
              Possibilities
            </span>

          </div>

        </div>


        {/* MAIN WORKFLOW */}

        <div className="technology-workflow">

          <div className="workflow-main-line">
            <span className="workflow-travel-dot"></span>
          </div>


          {/* LEFT NAVIGATION */}

          <div className="technology-navigation">

            {technologyGroups.map((group) => {

              const isActive = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  className={`technology-nav-item ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => handleGroupClick(group)}
                >

                  <span className="nav-number">
                    {group.number}
                  </span>

                  <span className="nav-content">

                    <strong>
                      {group.title}
                    </strong>

                    <small>
                      {group.subtitle}
                    </small>

                  </span>

                  <span className="nav-arrow">

                    <span className="arrow-line"></span>

                    <span className="arrow-head">
                      ›
                    </span>

                  </span>

                </button>
              );

            })}

          </div>


          {/* BUILD PIPELINE */}

          <div className="build-pipeline">

            <div className="pipeline-label">

              <span></span>

              BUILD PIPELINE

            </div>


            <div className="pipeline-core">

              <div className="pipeline-orbit orbit-a"></div>

              <div className="pipeline-orbit orbit-b"></div>

              <div className="pipeline-orbit orbit-c"></div>

              <div className="pipeline-center">

                <span className="pipeline-code">
                  {"</>"}
                </span>

                <strong>
                  BUILD
                </strong>

                <small>
                  ENGINEERING CORE
                </small>

              </div>

            </div>


            <div className="pipeline-flow">

              <div className="pipeline-step active">

                <span>01</span>

                <strong>BUILD</strong>

              </div>

              <div className="pipeline-connector">
                <i></i>
              </div>

              <div className="pipeline-step">

                <span>02</span>

                <strong>INTEGRATE</strong>

              </div>

              <div className="pipeline-connector">
                <i></i>
              </div>

              <div className="pipeline-step">

                <span>03</span>

                <strong>DEPLOY</strong>

              </div>

              <div className="pipeline-connector">
                <i></i>
              </div>

              <div className="pipeline-step">

                <span>04</span>

                <strong>SCALE</strong>

              </div>

            </div>


            <div className="pipeline-active-stack">

              <span className="pipeline-active-dot"></span>

              <span>
                {currentGroup.title}
              </span>

              <strong>
                CONNECTED
              </strong>

            </div>

          </div>


          {/* RIGHT TECHNOLOGY PANEL */}

          <div className="technology-detail">

            <div className="detail-header">

              <div>

                <span className="detail-number">
                  {currentGroup.number}
                </span>

                <h3>
                  {currentGroup.title}
                </h3>

              </div>

              <span className="detail-live">
                ACTIVE
              </span>

            </div>


            <p className="detail-description">
              {currentGroup.description}
            </p>


            {/* TECHNOLOGY LIST */}

            <div className="technology-list">

              {currentGroup.technologies.map(
                (technology) => {

                  const selected =
                    technology.name === activeTechnology;

                  return (
                    <button
                      key={technology.name}
                      type="button"
                      className={`technology-row ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() =>
                        handleTechnologyClick(
                          technology
                        )
                      }
                    >

                      <span className="technology-icon">
                        {technology.icon}
                      </span>

                      <span className="technology-info">

                        <strong>
                          {technology.name}
                        </strong>

                        <small>
                          {technology.type}
                        </small>

                      </span>

                      <span className="technology-status">

                        <i></i>

                        READY

                      </span>

                      <span className="technology-arrow">
                        →
                      </span>

                    </button>
                  );

                }
              )}

            </div>


            {/* BUILD OUTPUT */}

            <div className="build-output">

              <div className="build-output-header">

                <div className="output-title">

                  <span className="terminal-dot"></span>

                  BUILD OUTPUT

                </div>

                <span className="output-status">
                  ● LIVE
                </span>

              </div>


              <div className="output-main">

                <div className="output-tech-icon">
                  {currentTechnology.icon}
                </div>

                <div className="output-info">

                  <span>
                    SELECTED TECHNOLOGY
                  </span>

                  <strong>
                    {currentTechnology.name}
                  </strong>

                </div>

                <div className="output-check">
                  ✓
                </div>

              </div>


              <p className="output-description">
                {currentTechnology.description}
              </p>


              <div className="output-usage">

                <span>
                  TYPICAL USE
                </span>

                <strong>
                  {currentTechnology.usage}
                </strong>

              </div>


              <div className="build-progress">

                <div className="progress-top">

                  <span>
                    STACK COMPATIBILITY
                  </span>

                  <strong>
                    98%
                  </strong>

                </div>

                <div className="progress-track">
                  <span></span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DeveloperTechnologyStack;