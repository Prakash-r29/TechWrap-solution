
import { useNavigate } from "react-router-dom";
import "./Agetech.css";

const collaborationSteps = [
  {
    number: "01",
    title: "Client + Strategy",
    description:
      "Your agency owns the client relationship, strategy and creative direction.",
    side: "agency",
  },
  {
    number: "02",
    title: "Development",
    description:
      "TechWrap converts the approved solution into production-ready software.",
    side: "techwrap",
  },
  {
    number: "03",
    title: "AI + APIs",
    description:
      "We integrate AI capabilities, APIs and third-party services.",
    side: "techwrap",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Quality checks, responsive testing and technical validation before launch.",
    side: "techwrap",
  },
  {
    number: "05",
    title: "Production Build",
    description:
      "A complete production-ready application is delivered back to your agency.",
    side: "agency",
  },
];

function AgencyCollaboration() {
  const navigate = useNavigate();

  return (
    <section className="agency-collaboration">

      {/* Background */}
      <div className="collaboration-grid"></div>

      <div className="collaboration-glow collaboration-glow-one"></div>
      <div className="collaboration-glow collaboration-glow-two"></div>

      <div className="container">

        {/* Header */}
        <div className="collaboration-header">

          <div className="collaboration-label">
            <span className="collaboration-dot"></span>
            AGENCY + TECHWRAP

            <span className="collaboration-live">
              PARTNERSHIP FLOW
            </span>
          </div>

          <h2>
            Your Client Relationship.
            <span> Our Engineering Power.</span>
          </h2>

          <p>
            You stay focused on strategy, design and client relationships.
            TechWrap handles the engineering behind the scenes.
          </p>

        </div>


        {/* Collaboration Architecture */}
        <div className="collaboration-system">

          {/* Top Labels */}
          <div className="collaboration-partners">

            <div className="partner partner-agency">

              <div className="partner-icon">
                ◆
              </div>

              <div>
                <strong>YOUR AGENCY</strong>
                <span>Strategy & Client</span>
              </div>

            </div>


            <div className="partner-connection">

              <span className="connection-pulse"></span>

              COLLABORATION

            </div>


            <div className="partner partner-techwrap">

              <div className="partner-icon">
                T
              </div>

              <div>
                <strong>TECHWRAP</strong>
                <span>Engineering Partner</span>
              </div>

            </div>

          </div>


          {/* Main Flow */}
          <div className="collaboration-flow">

            {/* Agency Column */}
            <div className="collaboration-column agency-column">

              <div className="column-heading">
                <span className="column-dot"></span>
                YOUR AGENCY
              </div>

              <div className="agency-output">

                <span>
                  CLIENT DELIVERY
                </span>

                <small>
                  Strategy • Design • Relationship
                </small>

              </div>

            </div>


            {/* Center Pipeline */}
            <div className="collaboration-center">

              <div className="center-line"></div>

              {/* Moving particles */}
              <span className="collaboration-particle particle-one"></span>
              <span className="collaboration-particle particle-two"></span>

              {collaborationSteps.map((step) => (

                <div
                  className={`collaboration-step ${step.side}`}
                  key={step.number}
                >

                  <div className="step-number">
                    {step.number}
                  </div>

                  <div className="step-icon">
                    {step.side === "agency" ? "◆" : "✦"}
                  </div>

                  <div className="step-content">

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                  <div className="step-status">

                    {step.side === "agency"
                      ? "AGENCY"
                      : "TECHWRAP"}

                  </div>

                </div>

              ))}

            </div>


            {/* TechWrap Column */}
            <div className="collaboration-column techwrap-column">

              <div className="column-heading">

                <span className="column-dot"></span>

                TECHWRAP

              </div>

              <div className="techwrap-output">

                <span>
                  ENGINEERING POWER
                </span>

                <small>
                  Build • Integrate • Test • Deploy
                </small>

              </div>

            </div>

          </div>


          {/* Technology Stack */}
          <div className="collaboration-stack">

            <span>
              POWERED BY
            </span>

            <div className="stack-item">
              React
            </div>

            <div className="stack-item">
              TypeScript
            </div>

            <div className="stack-item">
              Spring Boot
            </div>

            <div className="stack-item">
              REST APIs
            </div>

            <div className="stack-item">
              AI
            </div>

            <div className="stack-item">
              DevOps
            </div>

          </div>


          {/* Bottom CTA */}
          <div className="collaboration-bottom">

            <div className="bottom-message">

              <span className="bottom-status"></span>

              <p>
                One partnership.
                <strong>
                  {" "}More projects delivered.
                </strong>
              </p>

            </div>


            {/* Start a Partnership */}
            <button
              type="button"
              className="collaboration-partnership-button"
              onClick={() => navigate("/Company/Contact/Maincontact")}
            >
              Start a Partnership
              <span>→</span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AgencyCollaboration;
