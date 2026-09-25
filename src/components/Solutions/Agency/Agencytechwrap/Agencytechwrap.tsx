
import { useNavigate } from "react-router-dom";
import "./Agencytechwrap.css";

const capabilities = [
  {
    number: "01",
    icon: "◉",
    title: "Full-Stack Development",
    description:
      "Build production-ready web applications using React, TypeScript and modern backend technologies.",
    tech: ["React", "TypeScript", "Spring Boot"],
  },
  {
    number: "02",
    icon: "✦",
    title: "AI Development",
    description:
      "Add AI features, intelligent workflows, assistants and automation to client products.",
    tech: ["AI", "Automation", "APIs"],
  },
  {
    number: "03",
    icon: "↗",
    title: "API & Integrations",
    description:
      "Connect payments, CRM, ERP, authentication, analytics and third-party services.",
    tech: ["REST API", "CRM", "ERP"],
  },
  {
    number: "04",
    icon: "◇",
    title: "UI Implementation",
    description:
      "Turn Figma designs and design systems into responsive, production-quality interfaces.",
    tech: ["Figma", "React", "Bootstrap"],
  },
  {
    number: "05",
    icon: "☁",
    title: "Cloud & DevOps",
    description:
      "Handle deployment, CI/CD, infrastructure and application monitoring.",
    tech: ["Cloud", "CI/CD", "DevOps"],
  },
  {
    number: "06",
    icon: "↻",
    title: "Maintenance & Scaling",
    description:
      "Continue supporting client applications after launch as requirements and users grow.",
    tech: ["Support", "Scale", "Monitoring"],
  },
];

function AgencyProvides() {
  const navigate = useNavigate();

  return (
    <section className="agency-provides" id="agency-solutions">

      {/* Background */}
      <div className="agency-provides-grid"></div>

      <div className="agency-provides-glow agency-provides-glow-one"></div>
      <div className="agency-provides-glow agency-provides-glow-two"></div>

      <div className="container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="agency-provides-header">

          <div className="agency-provides-label">

            <span className="provides-label-dot"></span>

            WHAT TECHWRAP PROVIDES

            <span className="provides-live">
              AGENCY ENGINEERING
            </span>

          </div>

          <h2>
            More capability.
            <span> More delivery power.</span>
          </h2>

          <p>
            Extend your agency with a dedicated technology partner
            that can design, build, integrate and scale complex
            digital products.
          </p>

        </div>

        {/* =====================================================
            PIPELINE
        ===================================================== */}

        <div className="agency-provides-system">

          {/* System Header */}

          <div className="provides-system-header">

            <div className="system-title">

              <span className="system-status"></span>

              TECHWRAP DELIVERY SYSTEM

            </div>

            <div className="system-live">
              ● LIVE FLOW
            </div>

          </div>

          {/* =================================================
              MAIN FLOW
          ================================================= */}

          <div className="provides-flow">

            <div className="flow-line"></div>

            <span className="flow-particle"></span>

            {/* WEB */}

            <div className="flow-stage active-stage">

              <div className="flow-node">

                <span className="flow-node-icon">
                  ◉
                </span>

              </div>

              <span className="flow-stage-name">
                WEB
              </span>

              <small>
                React + TypeScript
              </small>

            </div>

            <div className="flow-arrow">
              →
            </div>

            {/* API */}

            <div className="flow-stage">

              <div className="flow-node">

                <span className="flow-node-icon">
                  ↗
                </span>

              </div>

              <span className="flow-stage-name">
                API
              </span>

              <small>
                Spring Boot
              </small>

            </div>

            <div className="flow-arrow">
              →
            </div>

            {/* AI */}

            <div className="flow-stage">

              <div className="flow-node">

                <span className="flow-node-icon">
                  ✦
                </span>

              </div>

              <span className="flow-stage-name">
                AI
              </span>

              <small>
                Automation
              </small>

            </div>

            <div className="flow-arrow">
              →
            </div>

            {/* CLOUD */}

            <div className="flow-stage">

              <div className="flow-node">

                <span className="flow-node-icon">
                  ☁
                </span>

              </div>

              <span className="flow-stage-name">
                CLOUD
              </span>

              <small>
                DevOps
              </small>

            </div>

            <div className="flow-arrow">
              →
            </div>

            {/* DELIVERY */}

            <div className="flow-stage delivery-stage">

              <div className="flow-node">

                <span className="flow-node-icon">
                  🚀
                </span>

              </div>

              <span className="flow-stage-name">
                DELIVERY
              </span>

              <small>
                Production
              </small>

            </div>

          </div>

          {/* =================================================
              CAPABILITY LIST
          ================================================= */}

          <div className="capabilities-wrapper">

            {capabilities.map((capability) => (

              <article
                className="capability-row"
                key={capability.number}
              >

                {/* Number */}

                <div className="capability-number">
                  {capability.number}
                </div>

                {/* Icon */}

                <div className="capability-icon">
                  {capability.icon}
                </div>

                {/* Content */}

                <div className="capability-content">

                  <h3>
                    {capability.title}
                  </h3>

                  <p>
                    {capability.description}
                  </p>

                  {/* Tech */}

                  <div className="capability-tech">

                    {capability.tech.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Arrow */}

                <div className="capability-arrow">
                  →
                </div>

              </article>

            ))}

          </div>

          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div className="provides-bottom">

            <div className="bottom-flow-line"></div>

            <div className="provides-bottom-content">

              <span className="bottom-dot"></span>

              <p>
                From <strong>client requirement</strong> to{" "}
                <strong>production delivery</strong> — TechWrap
                extends your team's engineering capabilities.
              </p>

              {/* Start a Partnership */}

              <button
                type="button"
                className="provides-partnership-button"
                onClick={() => navigate("/Company/Contact/Maincontact")}
              >
                Start a Partnership
                <span>→</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AgencyProvides;

