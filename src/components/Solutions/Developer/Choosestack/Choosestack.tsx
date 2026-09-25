import { useState } from "react";
import "./Choosestack.css";

type Stack = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  technologies: string[];
  useCases: string[];
  bestFor: string;
  frontend: string;
  backend: string;
  database: string;
  api: string;
};

const stacks: Stack[] = [
  {
    id: "mern",
    number: "01",
    name: "MERN Stack",
    shortName: "MERN",
    description:
      "A modern JavaScript stack for building fast, scalable SaaS platforms and full-stack web applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    useCases: [
      "SaaS Platforms",
      "Dashboards",
      "Marketplaces",
      "Real-time Apps",
    ],
    bestFor: "Startups & Product Teams",
    frontend: "React",
    backend: "Node.js",
    database: "MongoDB",
    api: "Express",
  },

  {
    id: "mean",
    number: "02",
    name: "MEAN Stack",
    shortName: "MEAN",
    description:
      "An enterprise-friendly JavaScript stack designed for structured and scalable web applications.",
    technologies: ["Angular", "Node.js", "Express", "MongoDB"],
    useCases: [
      "Enterprise Apps",
      "Business Portals",
      "Admin Systems",
      "Large Web Apps",
    ],
    bestFor: "Enterprise Applications",
    frontend: "Angular",
    backend: "Node.js",
    database: "MongoDB",
    api: "Express",
  },

  {
    id: "java",
    number: "03",
    name: "Java Full Stack",
    shortName: "JAVA",
    description:
      "A robust full-stack architecture for secure, scalable and enterprise-grade applications.",
    technologies: ["React", "Spring Boot", "REST API", "MySQL"],
    useCases: [
      "Enterprise Systems",
      "Banking Apps",
      "Business Platforms",
      "Large SaaS",
    ],
    bestFor: "Enterprise & Large Teams",
    frontend: "React",
    backend: "Spring Boot",
    database: "MySQL",
    api: "REST API",
  },

  {
    id: "python",
    number: "04",
    name: "Python Full Stack",
    shortName: "PYTHON",
    description:
      "A flexible full-stack architecture for AI products, automation platforms and data-driven applications.",
    technologies: ["React", "Python", "FastAPI / Django", "PostgreSQL"],
    useCases: [
      "AI Products",
      "Automation",
      "Data Platforms",
      "SaaS Applications",
    ],
    bestFor: "AI & Data Products",
    frontend: "React",
    backend: "Python",
    database: "PostgreSQL",
    api: "FastAPI / Django",
  },
];

function ChooseYourStack() {
  const [activeStack, setActiveStack] = useState("mern");

  const selectedStack =
    stacks.find((stack) => stack.id === activeStack) || stacks[0];

  return (
    <section className="choose-stack-section">

      <div className="choose-stack-grid"></div>

      <div className="choose-stack-glow choose-glow-one"></div>
      <div className="choose-stack-glow choose-glow-two"></div>

      <div className="choose-stack-container">

        {/* ================= HEADER ================= */}

        <div className="choose-stack-header">

          <div className="choose-stack-eyebrow">
            <span></span>

            TECHWRAP ARCHITECTURE

            <span></span>
          </div>

          <h2>
            Choose Your Stack.
            <br />
            <span>Build Your Way.</span>
          </h2>

          <p>
            Start with the technology that fits your product,
            team and scale. Choose an architecture and see how
            the pieces connect from frontend to database.
          </p>

        </div>


        {/* ================= STACK SELECTOR ================= */}

        <div className="stack-selector-wrapper">

          <div className="stack-selector-label">

            <div className="selector-label-left">

              <span className="selector-live-dot"></span>

              SELECT ARCHITECTURE

            </div>

            <span className="selector-count">
              {stacks.length} OPTIONS
            </span>

          </div>


          <div className="stack-selector">

            {stacks.map((stack) => {

              const isActive = activeStack === stack.id;

              return (
                <button
                  key={stack.id}
                  type="button"
                  aria-label={`Select ${stack.name}`}
                  aria-pressed={isActive}
                  className={`stack-tab ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActiveStack(stack.id)}
                >

                  {/* Animated hover background */}
                  <span className="stack-tab-bg"></span>


                  {/* Number */}
                  <span className="stack-tab-number">
                    {stack.number}
                  </span>


                  {/* Stack name */}
                  <span className="stack-tab-content">

                    <span className="stack-tab-name">
                      {stack.shortName}
                    </span>

                    <span className="stack-tab-subtitle">
                      {stack.name}
                    </span>

                  </span>


                  {/* Arrow */}
                  <span className="stack-tab-arrow-wrapper">

                    <span className="stack-tab-arrow-circle">

                      <span className="stack-tab-arrow">
                        →
                      </span>

                    </span>

                  </span>


                  {/* Active indicator */}
                  <span className="stack-active-line"></span>

                </button>
              );
            })}

          </div>

        </div>


        {/* ================= ARCHITECTURE ================= */}

        <div
          className="architecture-layout"
          key={selectedStack.id}
        >

          {/* LEFT INFORMATION */}

          <div className="stack-information">

            <div className="stack-info-top">

              <span className="stack-selected-label">
                SELECTED STACK
              </span>

              <span className="stack-number">
                {selectedStack.number}
              </span>

            </div>


            <h3>
              {selectedStack.name}
            </h3>


            <p className="stack-description">
              {selectedStack.description}
            </p>


            {/* Technology path */}

            <div className="technology-path">

              {selectedStack.technologies.map(
                (technology, index) => (

                  <div
                    className="technology-path-item"
                    key={technology}
                  >

                    <span className="path-index">
                      0{index + 1}
                    </span>

                    <span className="path-name">
                      {technology}
                    </span>

                  </div>

                )
              )}

            </div>


            {/* Best for */}

            <div className="stack-best-for">

              <span>
                BEST FOR
              </span>

              <strong>
                {selectedStack.bestFor}
              </strong>

            </div>


            {/* Use cases */}

            <div className="stack-usecases">

              <span className="usecases-label">
                COMMON BUILDS
              </span>

              <div className="usecase-list">

                {selectedStack.useCases.map(
                  (useCase) => (

                    <span key={useCase}>
                      {useCase}
                    </span>

                  )
                )}

              </div>

            </div>

          </div>


          {/* ================= ARCHITECTURE VISUAL ================= */}

          <div className="architecture-visual">

            <div className="architecture-top-label">

              <span></span>

              APPLICATION ARCHITECTURE

              <small>
                LIVE FLOW
              </small>

            </div>


            <div className="architecture-flow">

              <div className="architecture-line">

                <span className="flow-particle"></span>

                <span className="flow-particle particle-two"></span>

                <span className="flow-particle particle-three"></span>

              </div>


              {/* Frontend */}

              <div className="architecture-node">

                <div className="node-number">
                  01
                </div>

                <div className="node-content">

                  <span className="node-type">
                    FRONTEND
                  </span>

                  <strong>
                    {selectedStack.frontend}
                  </strong>

                  <small>
                    User Interface
                  </small>

                </div>

                <span className="node-status">
                  READY
                </span>

              </div>


              <div className="architecture-connector">
                <span>API REQUEST</span>
              </div>


              {/* Backend */}

              <div className="architecture-node">

                <div className="node-number">
                  02
                </div>

                <div className="node-content">

                  <span className="node-type">
                    BACKEND
                  </span>

                  <strong>
                    {selectedStack.backend}
                  </strong>

                  <small>
                    Application Logic
                  </small>

                </div>

                <span className="node-status">
                  READY
                </span>

              </div>


              <div className="architecture-connector">
                <span>DATA FLOW</span>
              </div>


              {/* API */}

              <div className="architecture-node">

                <div className="node-number">
                  03
                </div>

                <div className="node-content">

                  <span className="node-type">
                    API LAYER
                  </span>

                  <strong>
                    {selectedStack.api}
                  </strong>

                  <small>
                    Service Communication
                  </small>

                </div>

                <span className="node-status">
                  READY
                </span>

              </div>


              <div className="architecture-connector">
                <span>PERSIST</span>
              </div>


              {/* Database */}

              <div className="architecture-node database-node">

                <div className="node-number">
                  04
                </div>

                <div className="node-content">

                  <span className="node-type">
                    DATABASE
                  </span>

                  <strong>
                    {selectedStack.database}
                  </strong>

                  <small>
                    Persistent Data
                  </small>

                </div>

                <span className="node-status">
                  READY
                </span>

              </div>

            </div>


            {/* Architecture footer */}

            <div className="architecture-footer">

              <div>

                <span className="footer-dot"></span>

                STACK CONNECTED

              </div>

              <strong>
                {selectedStack.frontend}
                {" → "}
                {selectedStack.backend}
                {" → "}
                {selectedStack.api}
                {" → "}
                {selectedStack.database}
              </strong>

            </div>

          </div>

        </div>


        {/* ================= TECHNOLOGY STRIP ================= */}

        <div className="stack-tech-strip">

          <div className="tech-strip-title">

            <span></span>

            TECHWRAP ENGINEERING STACK

          </div>


          <div className="tech-strip-items">

            {selectedStack.technologies.map(
              (technology, index) => (

                <div
                  className="tech-strip-item"
                  key={technology}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {technology}
                  </strong>

                </div>

              )
            )}

          </div>


          <div className="tech-strip-status">

            <span></span>

            PRODUCTION ARCHITECTURE

          </div>

        </div>

      </div>
    </section>
  );
}

export default ChooseYourStack;