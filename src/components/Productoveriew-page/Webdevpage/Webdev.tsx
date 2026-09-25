import React from "react";
import "./Webpage.css";
import { Link } from "react-router-dom";

const WebDevelopmentHero: React.FC = () => {
  return (
    <section className="web-hero">

      {/* Background */}
      <div className="web-hero-grid"></div>

      <div className="web-glow web-glow-one"></div>
      <div className="web-glow web-glow-two"></div>

      {/* Decorative dots */}
      <span className="hero-dot hero-dot-one"></span>
      <span className="hero-dot hero-dot-two"></span>

      <div className="container web-hero-container">

        <div className="row align-items-center g-5">

          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-6">

            <div className="web-hero-content">

              <div className="web-hero-label">
                <span></span>
                WEB DEVELOPMENT
              </div>

              <h1>
                Build powerful
                <br />
                <span>web experiences</span>
                <br />
                that scale.
              </h1>

              <p className="web-hero-description">
                We design and develop fast, responsive and scalable web
                applications that help businesses turn ideas into powerful
                digital products.
              </p>

              {/* Buttons */}
              <div className="web-hero-buttons">

                {/* ================= START A PROJECT ================= */}
                <Link
                  to="/Company/Contact/Maincontact"
                  className="web-primary-btn"
                >
                  <span>Start a Project</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {/* ================= EXPLORE SOLUTIONS ================= */}
                <Link
                  to="/solutions/Startup/Mainstartup"
                  className="web-secondary-btn"
                >
                  <span>Explore Our Solutions</span>
                  <span aria-hidden="true">↗</span>
                </Link>

              </div>

              {/* Technology tags */}

            </div>

          </div>


          {/* ================= RIGHT DASHBOARD ================= */}
          <div className="col-lg-6">

            <div className="web-dashboard-area">

              {/* Floating uptime card */}
              <div className="web-floating-card uptime-card">

                <div className="floating-icon success-icon">
                  ✓
                </div>

                <div>
                  <small>System Status</small>
                  <strong>99.9% Uptime</strong>
                </div>

              </div>


              {/* Floating users card */}
              <div className="web-floating-card users-card">

                <div className="floating-icon users-icon">
                  ↗
                </div>

                <div>
                  <small>Active Users</small>
                  <strong>+42%</strong>
                </div>

              </div>


              {/* Main Dashboard */}
              <div className="web-dashboard">

                {/* Browser top */}
                <div className="dashboard-browser">

                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-address">
                    app.techwrap.io
                  </div>

                  <div className="browser-menu">
                    •••
                  </div>

                </div>


                {/* Dashboard Header */}
                <div className="dashboard-header">

                  <div>
                    <small>OVERVIEW</small>
                    <h3>Project Analytics</h3>
                  </div>

                  <div className="dashboard-live">
                    <span></span>
                    Live
                  </div>

                </div>


                {/* Metrics */}
                <div className="dashboard-metrics">

                  <div className="dashboard-metric">

                    <small>Total Users</small>

                    <strong>24.8K</strong>

                    <span className="metric-positive">
                      ↑ 18.4%
                    </span>

                  </div>


                  <div className="dashboard-metric">

                    <small>API Requests</small>

                    <strong>1.42M</strong>

                    <span className="metric-positive">
                      ↑ 24.8%
                    </span>

                  </div>


                  <div className="dashboard-metric">

                    <small>Performance</small>

                    <strong>98.6</strong>

                    <span className="metric-positive">
                      ↑ 4.2%
                    </span>

                  </div>

                </div>


                {/* Chart */}
                <div className="dashboard-chart">

                  <div className="chart-top">

                    <div>
                      <small>APPLICATION TRAFFIC</small>
                      <strong>84,392</strong>
                    </div>

                    <button type="button">
                      Last 30 days ▾
                    </button>

                  </div>


                  <div className="chart-area">

                    <div className="chart-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <svg
                      className="traffic-chart"
                      viewBox="0 0 500 170"
                      preserveAspectRatio="none"
                    >

                      <defs>

                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >

                          <stop
                            offset="0%"
                            stopColor="#168cff"
                            stopOpacity="0.30"
                          />

                          <stop
                            offset="100%"
                            stopColor="#168cff"
                            stopOpacity="0"
                          />

                        </linearGradient>

                      </defs>


                      <path
                        d="
                          M0 135
                          C35 125 45 110 75 118
                          C105 126 115 88 145 94
                          C175 100 185 70 215 78
                          C245 86 260 48 290 60
                          C320 72 335 42 365 51
                          C395 60 415 28 445 40
                          C465 48 480 20 500 27
                          L500 170
                          L0 170 Z
                        "
                        fill="url(#chartGradient)"
                      />


                      <path
                        d="
                          M0 135
                          C35 125 45 110 75 118
                          C105 126 115 88 145 94
                          C175 100 185 70 215 78
                          C245 86 260 48 290 60
                          C320 72 335 42 365 51
                          C395 60 415 28 445 40
                          C465 48 480 20 500 27
                        "
                        fill="none"
                        stroke="#168cff"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                    </svg>

                  </div>


                  <div className="chart-months">
                    <span>May 01</span>
                    <span>May 07</span>
                    <span>May 14</span>
                    <span>May 21</span>
                    <span>May 30</span>
                  </div>

                </div>


                {/* Bottom status */}
                <div className="dashboard-bottom">

                  <div className="deployment-status">

                    <div className="deployment-check">
                      ✓
                    </div>

                    <div>
                      <strong>Deployment Successful</strong>
                      <small>Production · 2 minutes ago</small>
                    </div>

                    <span className="deployment-live">
                      LIVE
                    </span>

                  </div>


                  <div className="api-status">

                    <span className="api-pulse"></span>

                    API Connected

                  </div>

                </div>

              </div>


              {/* Bottom floating card */}
              <div className="web-floating-card deployment-card">

                <div className="floating-icon deploy-icon">
                  ↑
                </div>

                <div>
                  <small>Latest Deployment</small>
                  <strong>Production Ready</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WebDevelopmentHero;