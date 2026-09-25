import { Link } from "react-router-dom";
import "./Enterhero.css";

function EnterpriseHero() {
  return (
    <section className="enterprise-hero">
      {/* Background */}
      <div className="enterprise-grid"></div>

      <div className="enterprise-glow enterprise-glow-one"></div>
      <div className="enterprise-glow enterprise-glow-two"></div>

      <div className="container">
        <div className="row align-items-center enterprise-hero-row">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="col-lg-6">
            <div className="enterprise-content">

              <div className="enterprise-label">
                <span className="enterprise-status-dot"></span>

                <span>TECHWRAP ENTERPRISE</span>

                <span className="enterprise-live">
                  LIVE PLATFORM
                </span>
              </div>

              <h1>
                Modernize Your Enterprise.
                <span> Build for What's Next.</span>
              </h1>

              <p className="enterprise-description">
                Transform complex business systems with scalable web
                applications, AI-powered solutions, cloud infrastructure,
                and secure integrations designed for enterprise growth.
              </p>

              {/* =================================================
                  NAVIGATION / SCROLL BUTTONS
              ================================================= */}
              <div className="enterprise-buttons">

                {/* Talk to Our Experts */}
                <Link
                  to="/Company/Contact/Maincontact"
                  className="enterprise-primary-btn"
                >
                  Talk to Our Experts
                  <span>→</span>
                </Link>

                {/* Explore Enterprise Solutions - Smooth Scroll */}
                <button
                  type="button"
                  className="enterprise-secondary-btn"
                  onClick={() => {
                    window.scrollBy({
                      top: 450,
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore Enterprise Solutions
                  <span>↓</span>
                </button>

              </div>

              <div className="enterprise-trust">

                <div className="trust-item">
                  <strong>99.9%</strong>
                  <span>Reliability</span>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-item">
                  <strong>24/7</strong>
                  <span>Monitoring</span>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-item">
                  <strong>∞</strong>
                  <span>Scalability</span>
                </div>

              </div>

            </div>
          </div>


          {/* =====================================================
              RIGHT ENTERPRISE DASHBOARD
          ===================================================== */}
          <div className="col-lg-6">

            <div className="enterprise-dashboard-wrap">

              <span className="dashboard-orb dashboard-orb-one"></span>
              <span className="dashboard-orb dashboard-orb-two"></span>
              <span className="dashboard-orb dashboard-orb-three"></span>

              <div className="enterprise-dashboard">

                <div className="dashboard-border-beam"></div>
                <div className="dashboard-scan"></div>
                <div className="dashboard-glow"></div>


                {/* =================================================
                    DASHBOARD HEADER
                ================================================= */}
                <div className="dashboard-header">

                  <div className="dashboard-heading-group">

                    <div className="dashboard-title">
                      TECHWRAP ENTERPRISE PLATFORM
                    </div>

                    <div className="dashboard-subtitle">
                      Real-time infrastructure overview
                    </div>

                  </div>

                  <div className="dashboard-live">
                    <span></span>
                    LIVE
                  </div>

                </div>


                {/* =================================================
                    METRICS
                ================================================= */}
                <div className="enterprise-metrics">

                  <div className="enterprise-metric">

                    <span>ACTIVE USERS</span>

                    <div>
                      <strong>2.4M</strong>
                      <small>↑ 18%</small>
                    </div>

                    <div className="metric-progress">
                      <span></span>
                    </div>

                  </div>


                  <div className="enterprise-metric">

                    <span>API REQUESTS</span>

                    <div>
                      <strong>18.6M</strong>
                      <small>↑ 24%</small>
                    </div>

                    <div className="metric-progress">
                      <span></span>
                    </div>

                  </div>


                  <div className="enterprise-metric">

                    <span>SERVICES</span>

                    <div>
                      <strong>324</strong>
                      <small>↑ 12%</small>
                    </div>

                    <div className="metric-progress">
                      <span></span>
                    </div>

                  </div>

                </div>


                {/* =================================================
                    PERFORMANCE
                ================================================= */}
                <div className="enterprise-performance">

                  <div className="performance-heading">
                    <span>Enterprise Performance</span>
                    <span>Last 30 days</span>
                  </div>

                  <div className="performance-chart">

                    <div className="chart-grid-line line-one"></div>
                    <div className="chart-grid-line line-two"></div>
                    <div className="chart-grid-line line-three"></div>

                    <div className="chart-area"></div>

                    <div className="chart-scan-line"></div>

                    <svg
                      className="performance-svg"
                      viewBox="0 0 500 120"
                      preserveAspectRatio="none"
                    >

                      <path
                        className="performance-path"
                        d="
                        M0 92
                        C35 88,48 72,75 78
                        S115 65,145 70
                        S180 48,210 57
                        S250 46,280 50
                        S320 31,350 39
                        S390 26,420 31
                        S460 17,500 22
                        "
                      />

                      <circle
                        className="performance-point"
                        cx="500"
                        cy="22"
                        r="4"
                      />

                      <circle
                        className="performance-point-glow"
                        cx="500"
                        cy="22"
                        r="9"
                      />

                    </svg>

                  </div>

                </div>


                {/* =================================================
                    SYSTEM ARCHITECTURE
                ================================================= */}
                <div className="enterprise-architecture">

                  <div className="architecture-title">

                    <span>01</span>

                    <div>
                      SYSTEM ARCHITECTURE

                      <small>
                        Distributed enterprise infrastructure
                      </small>
                    </div>

                    <div className="architecture-live">
                      <i></i>
                      LIVE FLOW
                    </div>

                  </div>


                  <div className="architecture-map">

                    <div className="architecture-grid"></div>

                    <div className="architecture-scanner"></div>

                    <div className="architecture-radar"></div>

                    <div className="architecture-energy-ring ring-one"></div>
                    <div className="architecture-energy-ring ring-two"></div>

                    <div className="architecture-core-glow"></div>


                    {/* =================================================
                        SVG FLOW SYSTEM
                    ================================================= */}
                    <svg
                      className="architecture-svg"
                      viewBox="0 0 600 250"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >

                      <defs>

                        <linearGradient
                          id="architectureFlow"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >

                          <stop
                            offset="0%"
                            stopColor="#4f46e5"
                            stopOpacity="0.2"
                          />

                          <stop
                            offset="50%"
                            stopColor="#8b5cf6"
                            stopOpacity="1"
                          />

                          <stop
                            offset="100%"
                            stopColor="#06b6d4"
                            stopOpacity="0.2"
                          />

                        </linearGradient>


                        <filter
                          id="architectureGlow"
                          x="-100%"
                          y="-100%"
                          width="300%"
                          height="300%"
                        >

                          <feGaussianBlur
                            stdDeviation="4"
                            result="blur"
                          />

                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>

                        </filter>

                      </defs>


                      <path
                        className="architecture-path-glow"
                        d="M70 55 H530"
                      />

                      <path
                        className="architecture-path"
                        d="M70 55 H530"
                      />


                      <path
                        className="architecture-path-glow"
                        d="M180 55 V125 H300"
                      />

                      <path
                        className="architecture-path"
                        d="M180 55 V125 H300"
                      />


                      <path
                        className="architecture-path-glow architecture-ai-path"
                        d="M300 55 V125"
                      />

                      <path
                        className="architecture-path architecture-ai-path"
                        d="M300 55 V125"
                      />


                      <path
                        className="architecture-path-glow"
                        d="M420 55 V125 H300"
                      />

                      <path
                        className="architecture-path"
                        d="M420 55 V125 H300"
                      />


                      <path
                        className="architecture-path-glow"
                        d="M300 125 V205"
                      />

                      <path
                        className="architecture-path"
                        d="M300 125 V205"
                      />


                      <circle
                        className="architecture-connection"
                        cx="180"
                        cy="55"
                        r="4"
                      />

                      <circle
                        className="architecture-connection"
                        cx="300"
                        cy="55"
                        r="4"
                      />

                      <circle
                        className="architecture-connection"
                        cx="420"
                        cy="55"
                        r="4"
                      />

                      <circle
                        className="architecture-connection"
                        cx="300"
                        cy="125"
                        r="5"
                      />


                      {/* Moving Data Particles */}

                      <circle
                        className="data-particle"
                        r="4"
                      >
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path="M70 55 H530"
                        />
                      </circle>


                      <circle
                        className="data-particle"
                        r="4"
                      >
                        <animateMotion
                          dur="2.5s"
                          repeatCount="indefinite"
                          path="M180 55 V125 H300"
                        />
                      </circle>


                      <circle
                        className="data-particle"
                        r="4"
                      >
                        <animateMotion
                          dur="3.2s"
                          repeatCount="indefinite"
                          path="M420 55 V125 H300 V205"
                        />
                      </circle>


                      <circle
                        className="data-particle"
                        r="3"
                      >
                        <animateMotion
                          dur="2.2s"
                          repeatCount="indefinite"
                          path="M300 55 V125 V205"
                        />
                      </circle>


                      <circle
                        className="data-particle particle-reverse"
                        r="3"
                      >
                        <animateMotion
                          dur="3.8s"
                          repeatCount="indefinite"
                          path="M530 55 H70"
                        />
                      </circle>

                    </svg>


                    {/* =================================================
                        ARCHITECTURE NODES
                    ================================================= */}

                    <div className="architecture-node node-web">

                      <span className="node-pulse"></span>

                      <span className="architecture-node-icon">
                        ◉
                      </span>

                      <div className="node-content">
                        <span>WEB</span>
                        <small>CLIENT</small>
                      </div>

                      <span className="node-status"></span>

                    </div>


                    <div className="architecture-node node-api">

                      <span className="node-pulse"></span>

                      <span className="architecture-node-icon">
                        ↗
                      </span>

                      <div className="node-content">
                        <span>API</span>
                        <small>GATEWAY</small>
                      </div>

                      <span className="node-status"></span>

                    </div>


                    <div className="architecture-node node-ai">

                      <span className="ai-core-ring"></span>
                      <span className="ai-core-ring ring-two-ai"></span>

                      <span className="architecture-node-icon">
                        ✦
                      </span>

                      <div className="node-content">
                        <span>AI CORE</span>
                        <small>INTELLIGENCE</small>
                      </div>

                      <span className="node-live-indicator"></span>

                    </div>


                    <div className="architecture-node node-cloud">

                      <span className="node-pulse"></span>

                      <span className="architecture-node-icon">
                        ☁
                      </span>

                      <div className="node-content">
                        <span>CLOUD</span>
                        <small>INFRA</small>
                      </div>

                      <span className="node-status"></span>

                    </div>


                    <div className="architecture-node node-security">

                      <span className="node-pulse"></span>

                      <span className="architecture-node-icon">
                        ◇
                      </span>

                      <div className="node-content">
                        <span>SECURITY</span>
                        <small>ZERO TRUST</small>
                      </div>

                      <span className="node-status"></span>

                    </div>


                    <div className="architecture-node node-data">

                      <span className="node-pulse"></span>

                      <span className="architecture-node-icon">
                        ◆
                      </span>

                      <div className="node-content">
                        <span>DATA</span>
                        <small>DATABASE</small>
                      </div>

                      <span className="node-status"></span>

                    </div>


                    <div className="architecture-node node-analytics">

                      <span className="node-pulse"></span>

                      <span className="architecture-node-icon">
                        ▥
                      </span>

                      <div className="node-content">
                        <span>ANALYTICS</span>
                        <small>INSIGHTS</small>
                      </div>

                      <span className="node-status"></span>

                    </div>


                    <div className="architecture-core-label">
                      <span></span>
                      TECHWRAP
                      <strong>CORE</strong>
                    </div>


                    <div className="architecture-activity">

                      <span className="activity-signal"></span>

                      <span>
                        DATA FLOW ACTIVE
                      </span>

                      <strong>
                        1.82M events/s
                      </strong>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    DASHBOARD FOOTER
                ================================================= */}
                <div className="dashboard-footer">

                  <span className="systems-operational">
                    <i></i>
                    All systems operational
                  </span>

                  <span className="infrastructure-status">
                    <i></i>
                    Cloud infrastructure
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default EnterpriseHero;