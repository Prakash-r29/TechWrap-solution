import { Link } from "react-router-dom";
import "./Startuphero.css";

function StartupHero() {
  const handleExploreSolutions = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="startup-hero">

      {/* Background effects */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div className="startup-badge">
              <span className="badge-dot"></span>
              STARTUP SOLUTIONS
            </div>

            <h1 className="startup-title">
              Turn Your Startup Idea Into a
              <span> Scalable Product</span>
            </h1>

            <p className="startup-description">
              From MVP development to AI integration, cloud deployment and
              scalable architecture, TechWrap helps startups transform ideas
              into powerful digital products built for growth.
            </p>

            {/* CTA */}
            <div className="startup-actions">

              <Link
                to="/Company/Contact/Maincontact"
                className="startup-btn startup-btn-primary"
              >
                Start Your Project
                <span>→</span>
              </Link>

              <button
                type="button"
                className="startup-btn startup-btn-secondary"
                onClick={handleExploreSolutions}
              >
                Explore Our Solutions
                <span>↗</span>
              </button>

            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="col-lg-6">

            <div className="startup-visual">

              {/* Main glow */}
              <div className="visual-orb"></div>

              {/* Dashboard */}
              <div className="startup-dashboard">

                {/* Dashboard header */}
                <div className="dashboard-header">

                  <div>
                    <small>STARTUP PERFORMANCE</small>
                    <h3>Growth Overview</h3>
                  </div>

                  <div className="live-status">
                    <span></span>
                    Live
                  </div>

                </div>


                {/* Growth number */}
                <div className="growth-section">

                  <div>
                    <small>PRODUCT GROWTH</small>

                    <div className="growth-number">
                      +240%
                    </div>
                  </div>

                  <div className="growth-icon">
                    ↗
                  </div>

                </div>


                {/* Graph */}
                <div className="growth-chart">

                  <div className="chart-line line-1"></div>
                  <div className="chart-line line-2"></div>
                  <div className="chart-line line-3"></div>
                  <div className="chart-line line-4"></div>

                  <div className="chart-path">
                    <svg viewBox="0 0 500 150">
                      <path
                        d="M0 120 C70 110 80 100 130 105
                        C180 110 190 70 240 85
                        C290 100 300 55 350 65
                        C400 75 420 20 500 25"
                      />
                    </svg>
                  </div>

                  <div className="chart-point point-1"></div>
                  <div className="chart-point point-2"></div>
                  <div className="chart-point point-3"></div>

                </div>


                {/* Bottom metrics */}
                <div className="dashboard-metrics">

                  <div className="metric">
                    <span>Users</span>
                    <strong>24.8K</strong>
                  </div>

                  <div className="metric">
                    <span>API Calls</span>
                    <strong>1.2M</strong>
                  </div>

                  <div className="metric">
                    <span>Uptime</span>
                    <strong>99.9%</strong>
                  </div>

                </div>

              </div>


              {/* Floating cards */}

              <div className="floating-card card-ai">
                <div className="floating-icon">✦</div>
                <div>
                  <small>AI INTEGRATION</small>
                  <strong>Active</strong>
                </div>
              </div>


              <div className="floating-card card-mvp">
                <div className="check-icon">✓</div>
                <div>
                  <small>MVP STATUS</small>
                  <strong>Ready to Launch</strong>
                </div>
              </div>


              <div className="floating-card card-cloud">
                <div className="cloud-icon">☁</div>
                <div>
                  <small>CLOUD</small>
                  <strong>Scalable</strong>
                </div>
              </div>


              {/* Growth nodes */}
              <div className="growth-node node-1"></div>
              <div className="growth-node node-2"></div>
              <div className="growth-node node-3"></div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default StartupHero;