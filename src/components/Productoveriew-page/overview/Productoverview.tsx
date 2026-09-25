import React from "react";
import { Link } from "react-router-dom";
import "./Productoverview.css";

const ProductOverview: React.FC = () => {
  return (
    <main className="product-overview-page">

      {/* ================= HERO SECTION ================= */}
      <section className="overview-hero">
        <div className="overview-grid"></div>

        {/* Background Glow */}
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-100 py-5">

            {/* ================= LEFT CONTENT ================= */}
            <div className="col-lg-6">

              <div className="hero-badge">
                <span className="badge-dot"></span>
                PRODUCT PLATFORM
              </div>

              <h1 className="overview-title">
                Build, Integrate
                <span> & Scale Faster</span>
              </h1>

              <p className="overview-description">
                Build powerful digital products, connect your favorite
                tools, and scale your business with a modern technology
                platform designed for growing teams.
              </p>

              {/* ================= CTA BUTTONS ================= */}
              <div className="hero-buttons">

                {/* Primary CTA */}
                <Link
                  to="/Company/Contact/Maincontact"
                  className="overview-primary-btn"
                >
                  <span className="btn-text">
                    Get Started
                  </span>

                  

                  <span className="btn-shine"></span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  to="/productoveriew/Integration/MainInt"
                  className="overview-secondary-btn"
                >
                  <span className="btn-text">
                    Explore Integrations
                  </span>

                  <span className="btn-arrow">
                    ↗
                  </span>
                </Link>

              </div>

            </div>

            {/* ================= RIGHT DASHBOARD ================= */}
            <div className="col-lg-6 mt-5 mt-lg-0">

              <div className="dashboard-wrapper">

                {/* Floating API Card */}
                <div className="floating-card api-card">
                  <div className="floating-icon">⚡</div>

                  <div>
                    <small>API Requests</small>
                    <strong>1.82M</strong>

                    <span className="growth">
                      ↑ 24.7%
                    </span>
                  </div>
                </div>

                {/* Main Dashboard */}
                <div className="product-dashboard">

                  {/* Dashboard Header */}
                  <div className="dashboard-header">

                    <div className="dashboard-brand">
                      <div className="dashboard-logo">
                        T
                      </div>

                      <div>
                        <strong>TechWrap</strong>
                        <small>Product Analytics</small>
                      </div>
                    </div>

                    <div className="dashboard-status">
                      <span></span>
                      Live
                    </div>

                  </div>

                  {/* Metrics */}
                  <div className="dashboard-metrics">

                    <div className="metric-card">
                      <small>Active Users</small>
                      <strong>24.5K</strong>
                      <span>↑ 18.4%</span>
                    </div>

                    <div className="metric-card">
                      <small>API Calls</small>
                      <strong>1.82M</strong>
                      <span>↑ 24.7%</span>
                    </div>

                    <div className="metric-card">
                      <small>Deployments</small>
                      <strong>3,240</strong>
                      <span>↑ 12.8%</span>
                    </div>

                  </div>

                  {/* Chart */}
                  <div className="chart-container">

                    <div className="chart-heading">
                      <div>
                        <small>User Growth</small>
                        <h5>24,580 Users</h5>
                      </div>

                      <button type="button">
                        30 Days ▾
                      </button>
                    </div>

                    <div className="chart">

                      <div className="chart-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <svg
                        viewBox="0 0 500 180"
                        className="growth-chart"
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
                              stopColor="#6366f1"
                              stopOpacity="0.35"
                            />

                            <stop
                              offset="100%"
                              stopColor="#6366f1"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="
                            M0 145
                            C45 135, 65 120, 105 125
                            C145 130, 155 105, 195 110
                            C235 115, 245 75, 285 82
                            C325 90, 340 65, 370 70
                            C410 75, 430 38, 500 25
                            L500 180
                            L0 180 Z
                          "
                          fill="url(#chartGradient)"
                        />

                        <path
                          d="
                            M0 145
                            C45 135, 65 120, 105 125
                            C145 130, 155 105, 195 110
                            C235 115, 245 75, 285 82
                            C325 90, 340 65, 370 70
                            C410 75, 430 38, 500 25
                          "
                          fill="none"
                          stroke="#818cf8"
                          strokeWidth="3"
                        />

                      </svg>

                    </div>

                    <div className="chart-months">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>

                  </div>

                  {/* Dashboard Bottom */}
                  <div className="dashboard-bottom">

                    <div className="integration-status">

                      <div className="section-title">
                        <span>Integration Status</span>
                        <small>View all →</small>
                      </div>

                      <div className="integration-row">
                        <span className="integration-logo stripe">
                          S
                        </span>

                        <span>Stripe</span>

                        <b>Connected</b>
                      </div>

                      <div className="integration-row">
                        <span className="integration-logo github">
                          G
                        </span>

                        <span>GitHub</span>

                        <b>Connected</b>
                      </div>

                      <div className="integration-row">
                        <span className="integration-logo slack">
                          S
                        </span>

                        <span>Slack</span>

                        <b>Connected</b>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Deployment Card */}
                <div className="floating-card deployment-card">

                  <div className="deployment-icon">
                    ✓
                  </div>

                  <div>
                    <small>Deployment</small>
                    <strong>Successful</strong>
                  </div>

                  <span className="deployment-time">
                    2m ago
                  </span>

                </div>

                {/* Floating Users Card */}
                <div className="floating-card users-card">

                  <div className="user-stack">
                    <span>R</span>
                    <span>A</span>
                    <span>K</span>
                    <span>+</span>
                  </div>

                  <div>
                    <strong>2,480+</strong>
                    <small>Active today</small>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

    </main>
  );
};

export default ProductOverview;