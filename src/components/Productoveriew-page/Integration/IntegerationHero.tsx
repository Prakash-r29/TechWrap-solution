import { Link } from "react-router-dom";
import "./IntegrationHero.css";

const integrations = [
  { icon: "⚡", name: "APIs", className: "node-api" },
  { icon: "🗄", name: "Database", className: "node-database" },
  { icon: "☁", name: "Cloud", className: "node-cloud" },
  { icon: "🤖", name: "AI", className: "node-ai" },
  { icon: "💳", name: "Payment", className: "node-payment" },
  { icon: "💬", name: "Communication", className: "node-communication" },
];

function IntegrationHero() {
  // Same scroll behavior as AIProductHero Explore button
  const handleExploreIntegrations = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="integration-hero">

      {/* Background */}
      <div className="integration-hero-grid"></div>

      <div className="integration-hero-glow integration-glow-one"></div>
      <div className="integration-hero-glow integration-glow-two"></div>

      {/* Floating particles */}
      <span className="integration-particle particle-1"></span>
      <span className="integration-particle particle-2"></span>
      <span className="integration-particle particle-3"></span>
      <span className="integration-particle particle-4"></span>

      <div className="container">

        <div className="row align-items-center">

          {/* ================= LEFT CONTENT ================= */}

          <div className="col-lg-6">

            <div className="integration-hero-content">

              <div className="integration-label">
                <span></span>
                INTEGRATION PLATFORM
              </div>

              <h1>
                Connect Everything.
                <br />

                <span>Build Without Limits.</span>
              </h1>

              <p>
                Integrate your applications, APIs, cloud platforms,
                AI services and business tools into one connected
                ecosystem.
              </p>

              <div className="integration-hero-buttons">

                {/* ================= START A PROJECT ================= */}
                {/* First button → Contact page */}

                <Link
                  to="/Company/Contact/Maincontact"
                  className="integration-btn integration-btn-primary"
                  aria-label="Start a Project"
                >
                  Start a Project
                  <span>→</span>
                </Link>

                {/* ================= EXPLORE INTEGRATIONS ================= */}
                {/* Second button → Smooth 400px scroll */}

                <button
                  type="button"
                  className="integration-btn integration-btn-secondary"
                  onClick={handleExploreIntegrations}
                  aria-label="Explore Integrations"
                >
                  Explore Integrations
                  <span>↓</span>
                </button>

              </div>

              {/* Small trust indicators */}

              <div className="integration-trust">

                <div>
                  <strong>50+</strong>
                  <span>Integrations</span>
                </div>

                <div>
                  <strong>99.9%</strong>
                  <span>Reliability</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Monitoring</span>
                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}

          <div className="col-lg-6">

            <div className="integration-visual">

              {/* Connection SVG */}
              <svg
                className="integration-connections"
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
              >

                <defs>

                  <linearGradient
                    id="integrationLine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" />
                    <stop offset="50%" />
                    <stop offset="100%" />
                  </linearGradient>

                </defs>

                <path
                  className="connection-line line-1"
                  d="M300 300 C210 210 130 130 85 90"
                />

                <path
                  className="connection-line line-2"
                  d="M300 300 C390 210 470 130 515 90"
                />

                <path
                  className="connection-line line-3"
                  d="M300 300 C190 300 110 300 55 300"
                />

                <path
                  className="connection-line line-4"
                  d="M300 300 C410 300 490 300 545 300"
                />

                <path
                  className="connection-line line-5"
                  d="M300 300 C220 390 140 470 90 515"
                />

                <path
                  className="connection-line line-6"
                  d="M300 300 C380 390 460 470 510 515"
                />

              </svg>


              {/* Animated data particles */}

              <span className="data-particle data-1"></span>
              <span className="data-particle data-2"></span>
              <span className="data-particle data-3"></span>
              <span className="data-particle data-4"></span>


              {/* ================= CENTRAL HUB ================= */}

              <div className="integration-hub">

                <div className="hub-ring hub-ring-one"></div>
                <div className="hub-ring hub-ring-two"></div>

                <div className="hub-core">

                  <div className="hub-icon">
                    <span>✦</span>
                  </div>

                  <strong>TechWrap</strong>

                  <small>Integration Hub</small>

                </div>

              </div>


              {/* ================= NODES ================= */}

              {integrations.map((item) => (

                <div
                  key={item.name}
                  className={`integration-node ${item.className}`}
                >

                  <div className="node-icon">
                    {item.icon}
                  </div>

                  <span>{item.name}</span>

                  <i className="node-status"></i>

                </div>

              ))}


              {/* Floating API status */}

              <div className="integration-status-card">

                <span className="status-live"></span>

                <div>
                  <strong>Integration Active</strong>
                  <small>All systems connected</small>
                </div>

                <b>99.9%</b>

              </div>


              {/* API request card */}

              <div className="integration-request-card">

                <span>API REQUEST</span>

                <strong>
                  <i></i>
                  2,481
                </strong>

                <small>requests / sec</small>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default IntegrationHero;