
import { useNavigate } from "react-router-dom";
import "./Aienter.css";

type AICapability = {
  icon: string;
  title: string;
  description: string;
  tech: string;
};

const aiCapabilities: AICapability[] = [
  {
    icon: "◉",
    title: "AI Customer Support",
    description:
      "Build intelligent support systems that understand customer questions and respond instantly.",
    tech: "AI + API",
  },
  {
    icon: "▤",
    title: "Document Processing",
    description:
      "Extract, classify and process enterprise documents using intelligent AI workflows.",
    tech: "AI + Automation",
  },
  {
    icon: "⚡",
    title: "Business Automation",
    description:
      "Automate repetitive enterprise processes and connect them with existing business systems.",
    tech: "AI + APIs",
  },
  {
    icon: "◒",
    title: "Predictive Analytics",
    description:
      "Turn enterprise data into predictions, trends and actionable business insights.",
    tech: "AI + Analytics",
  },
  {
    icon: "✦",
    title: "AI Assistants",
    description:
      "Create intelligent assistants that help employees access information and complete tasks.",
    tech: "AI + React",
  },
  {
    icon: "⌘",
    title: "Knowledge Systems",
    description:
      "Build secure internal knowledge systems that make company information easier to discover.",
    tech: "AI + Search",
  },
];

function EnterpriseAI() {
  const navigate = useNavigate();

  return (
    <section className="enterprise-ai" id="enterprise-ai">

      {/* Background */}

      <div className="ai-bg-grid"></div>

      <div className="ai-glow ai-glow-one"></div>
      <div className="ai-glow ai-glow-two"></div>


      <div className="container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="enterprise-ai-header">

          <div className="enterprise-ai-label">

            <span className="ai-live-dot"></span>

            TECHWRAP AI FOR ENTERPRISE

            <span className="ai-live-badge">
              LIVE INTELLIGENCE
            </span>

          </div>


          <h2>
            Bring AI Into
            <span> Your Enterprise.</span>
          </h2>


          <p>
            Transform enterprise data into intelligent experiences,
            automated workflows and actionable insights with secure,
            scalable AI solutions.
          </p>

        </div>


        {/* =====================================================
            AI PIPELINE
        ===================================================== */}

        <div className="ai-pipeline">

          {/* Top title */}

          <div className="ai-pipeline-header">

            <div>
              <span className="pipeline-status"></span>

              ENTERPRISE AI PIPELINE
            </div>

            <span className="pipeline-secure">
              ● SECURE DATA FLOW
            </span>

          </div>


          {/* =================================================
              DATA INPUT
          ================================================= */}

          <div className="ai-data-source">

            <div className="source-icon">
              ◈
            </div>

            <div className="source-content">

              <strong>
                Enterprise Data
              </strong>

              <span>
                CRM • ERP • Documents • APIs • Databases
              </span>

            </div>

            <div className="source-status">
              CONNECTED
            </div>

          </div>


          {/* Vertical connector */}

          <div className="ai-main-connector">

            <span className="ai-particle particle-one"></span>
            <span className="ai-particle particle-two"></span>
            <span className="ai-particle particle-three"></span>

          </div>


          {/* =================================================
              AI ENGINE
          ================================================= */}

          <div className="ai-engine-wrapper">

            <div className="ai-engine">

              <div className="ai-engine-ring ring-one"></div>
              <div className="ai-engine-ring ring-two"></div>
              <div className="ai-engine-ring ring-three"></div>


              <div className="ai-engine-core">

                <span className="ai-core-symbol">
                  AI
                </span>

                <span className="ai-core-pulse"></span>

              </div>

            </div>


            <div className="ai-engine-info">

              <strong>
                TECHWRAP AI ENGINE
              </strong>

              <span>
                Process • Understand • Predict • Automate
              </span>

            </div>

          </div>


          {/* =================================================
              OUTPUT CONNECTOR
          ================================================= */}

          <div className="ai-output-connector">

            <span className="output-particle output-one"></span>
            <span className="output-particle output-two"></span>
            <span className="output-particle output-three"></span>

          </div>


          {/* =================================================
              AI CAPABILITIES
          ================================================= */}

          <div className="ai-capabilities">

            {aiCapabilities.map((capability, index) => (

              <article
                className="ai-capability"
                key={capability.title}
              >

                <div className="capability-top">

                  <div className="capability-icon">
                    {capability.icon}
                  </div>

                  <span className="capability-number">
                    0{index + 1}
                  </span>

                </div>


                <h3>
                  {capability.title}
                </h3>


                <p>
                  {capability.description}
                </p>


                <div className="capability-tech">

                  <span className="tech-dot"></span>

                  {capability.tech}

                </div>


                <div className="capability-line"></div>

              </article>

            ))}

          </div>


          {/* =================================================
              BUSINESS OUTCOME
          ================================================= */}

          <div className="ai-business-connector">

            <span className="business-particle"></span>

          </div>


          <div className="ai-business-outcome">

            <div className="outcome-icon">
              ↗
            </div>

            <div className="outcome-content">

              <span>
                BUSINESS OUTCOME
              </span>

              <strong>
                Faster decisions. Smarter operations. Better experiences.
              </strong>

            </div>


            <div className="outcome-metrics">

              <div>
                <strong>AI</strong>
                <span>Enabled</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Automation</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Scale</span>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            AI TECHNOLOGY STACK
        ===================================================== */}


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="enterprise-ai-cta">

          <div className="ai-cta-content">

            <span className="ai-cta-dot"></span>

            <div>

              <strong>
                Ready to make your enterprise AI-ready?
              </strong>

              <span>
                Build intelligent systems around the data you already have.
              </span>

            </div>

          </div>


          <button
            type="button"
            className="enterprise-ai-contact-button"
            onClick={() => navigate("/Company/Contact/Maincontact")}
          >

            Talk to Our AI Experts

            <span>
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
}

export default EnterpriseAI;
