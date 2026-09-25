
import { useNavigate } from "react-router-dom";
import "./Agencyhero.css";

function AgencyHero() {
  const navigate = useNavigate();

  /* =====================================================
     EXPLORE AGENCY SOLUTIONS
     Smooth scroll to the Agency Solutions section
  ===================================================== */

  const handleExploreSolutions = () => {
    const section = document.getElementById("agency-solutions");

    if (section) {
      const yOffset = -80;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="agency-hero">

      {/* Background */}
      <div className="agency-hero-grid"></div>

      <div className="agency-hero-glow agency-glow-one"></div>
      <div className="agency-hero-glow agency-glow-two"></div>

      <div className="container">

        <div className="row align-items-center agency-hero-row">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="col-lg-6">

            <div className="agency-hero-content">

              {/* Label */}

              <div className="agency-hero-label">

                <span className="agency-live-dot"></span>

                TECHWRAP FOR AGENCIES

                <span className="agency-live-badge">
                  LIVE
                </span>

              </div>


              {/* Heading */}

              <h1>

                Your Agency.

                <span>
                  More Development Power.
                </span>

              </h1>


              {/* Description */}

              <p className="agency-hero-description">

                Extend your agency's capabilities with TechWrap's
                full-stack development, AI, integrations and DevOps
                expertise. Deliver complex client projects faster
                without expanding your internal engineering team.

              </p>


              {/* =====================================================
                  BUTTONS
              ===================================================== */}

              <div className="agency-hero-buttons">

                {/* Start a Partnership */}

                <button
                  type="button"
                  className="agency-primary-btn"
                  onClick={() => navigate("/Company/Contact/Maincontact")}
                >
                  Start a Partnership

                  <span>→</span>
                </button>


                {/* Explore Agency Solutions */}

                <button
                  type="button"
                  className="agency-secondary-btn"
                  onClick={handleExploreSolutions}
                >
                  Explore Agency Solutions

                  <span>↓</span>
                </button>

              </div>


              {/* =====================================================
                  TECHNOLOGY STACK
              ===================================================== */}

             

            </div>

          </div>


          {/* =====================================================
              RIGHT PIPELINE
          ===================================================== */}

          <div className="col-lg-6">

            <div className="agency-pipeline-wrapper">

              {/* Pipeline Header */}

              <div className="pipeline-header">

                <div>

                  <span className="pipeline-status-dot"></span>

                  AGENCY DELIVERY PIPELINE

                </div>

                <span className="pipeline-live">
                  LIVE FLOW
                </span>

              </div>


              <div className="agency-pipeline">

                {/* =================================================
                    CLIENT REQUIREMENT
                ================================================= */}

                <div className="pipeline-node main-node">

                  <div className="pipeline-icon">
                    💼
                  </div>

                  <div>
                    <strong>
                      CLIENT REQUIREMENT
                    </strong>

                    <small>
                      Strategy & Scope
                    </small>
                  </div>

                </div>


                {/* Connector */}

                <div className="pipeline-connector">

                  <span className="flow-particle"></span>

                </div>


                {/* =================================================
                    DESIGN
                ================================================= */}

                <div className="pipeline-node">

                  <div className="pipeline-icon">
                    🎨
                  </div>

                  <div>
                    <strong>
                      DESIGN
                    </strong>

                    <small>
                      UI / UX
                    </small>
                  </div>

                </div>


                {/* Connector */}

                <div className="pipeline-connector">

                  <span className="flow-particle"></span>

                </div>


                {/* =================================================
                    TECHWRAP BUILD
                ================================================= */}

                <div className="pipeline-node build-node">

                  <div className="pipeline-icon build-icon">
                    ⚡
                  </div>

                  <div>

                    <strong>
                      TECHWRAP BUILD
                    </strong>

                    <small>
                      Full-Stack Engineering
                    </small>

                  </div>

                  <span className="build-live">
                    BUILDING
                  </span>

                </div>


                {/* =================================================
                    TECH STACK
                ================================================= */}

                <div className="pipeline-branches">

                  <div className="pipeline-branch-line"></div>

                  <div className="pipeline-tech-grid">

                    <div className="pipeline-tech-node">

                      <span>◉</span>

                      <div>
                        <strong>WEB</strong>
                        <small>React + TS</small>
                      </div>

                    </div>


                    <div className="pipeline-tech-node">

                      <span>✦</span>

                      <div>
                        <strong>AI</strong>
                        <small>Automation</small>
                      </div>

                    </div>


                    <div className="pipeline-tech-node">

                      <span>↗</span>

                      <div>
                        <strong>API</strong>
                        <small>Spring Boot</small>
                      </div>

                    </div>

                  </div>

                </div>


                {/* Connector */}

                <div className="pipeline-connector">

                  <span className="flow-particle"></span>

                </div>


                {/* =================================================
                    QA
                ================================================= */}

                <div className="pipeline-node">

                  <div className="pipeline-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      QA + TESTING
                    </strong>

                    <small>
                      Quality & Performance
                    </small>
                  </div>

                </div>


                {/* Connector */}

                <div className="pipeline-connector">

                  <span className="flow-particle"></span>

                </div>


                {/* =================================================
                    DEPLOYMENT
                ================================================= */}

                <div className="pipeline-node">

                  <div className="pipeline-icon">
                    ☁
                  </div>

                  <div>
                    <strong>
                      DEPLOYMENT
                    </strong>

                    <small>
                      Cloud + DevOps
                    </small>
                  </div>

                </div>


                {/* Connector */}

                <div className="pipeline-connector">

                  <span className="flow-particle"></span>

                </div>


                {/* =================================================
                    CLIENT DELIVERY
                ================================================= */}

                <div className="pipeline-node delivery-node">

                  <div className="pipeline-icon">
                    🚀
                  </div>

                  <div>
                    <strong>
                      CLIENT DELIVERY
                    </strong>

                    <small>
                      Production Ready
                    </small>
                  </div>

                  <span className="delivery-check">
                    ✓ READY
                  </span>

                </div>

              </div>


              {/* =====================================================
                  PIPELINE FOOTER
              ===================================================== */}

              <div className="pipeline-footer">

                <span>
                  <i></i>
                  DEVELOPMENT ACTIVE
                </span>

                <span>
                  React
                </span>

                <span>
                  Spring Boot
                </span>

                <span>
                  Cloud
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AgencyHero;

