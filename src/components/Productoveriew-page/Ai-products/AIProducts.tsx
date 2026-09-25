
import React, {
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";

import { Link } from "react-router-dom";

import "./Aiproducts.css";

interface Metric {
  label: string;
  value: string;
  growth: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const AIProductHero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const [activeMetric, setActiveMetric] = useState<number>(0);

  const [mousePosition, setMousePosition] =
    useState<MousePosition>({
      x: 0,
      y: 0,
    });

  /* =========================================================
     AI METRICS
  ========================================================= */

  const metrics: Metric[] = [
    {
      label: "AI Requests",
      value: "2.4M",
      growth: "+28.6%",
    },
    {
      label: "AI Products",
      value: "18",
      growth: "+42.3%",
    },
    {
      label: "Automation",
      value: "94.8%",
      growth: "+16.7%",
    },
  ];

  /* =========================================================
     ROTATING METRIC
  ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMetric(
        (previous) => (previous + 1) % metrics.length
      );
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, [metrics.length]);

  /* =========================================================
     MOUSE PARALLAX
  ========================================================= */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      setMousePosition({
        x: (x - centerX) / 45,
        y: (y - centerY) / 45,
      });
    };

    const handleMouseLeave = () => {
      setMousePosition({
        x: 0,
        y: 0,
      });
    };

    hero.addEventListener(
      "mousemove",
      handleMouseMove
    );

    hero.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      hero.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      hero.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  /* =========================================================
     DASHBOARD PARALLAX
  ========================================================= */

  const productStyle: CSSProperties = {
    transform: `
      translate3d(
        ${mousePosition.x}px,
        ${mousePosition.y}px,
        0
      )
      rotateY(-3deg)
      rotateX(1deg)
    `,
  };

  const coreStyle: CSSProperties = {
    transform: `
      translate3d(
        ${mousePosition.x * 0.8}px,
        ${mousePosition.y * 0.8}px,
        0
      )
    `,
  };

  const floatingStyle: CSSProperties = {
    transform: `
      translate3d(
        ${mousePosition.x * 0.45}px,
        ${mousePosition.y * 0.45}px,
        0
      )
    `,
  };
  /* =========================================================
     GET STARTED
     
     Keeps the original behavior of going to the
     AI Products section.
  ========================================================= */


  /* =========================================================
     GET STARTED BUTTON
  ========================================================= */


  /* =========================================================
     EXPLORE AI PRODUCTS BUTTON
     
     ONLY SCROLLS SLIGHTLY DOWN.
  ========================================================= */

  function handleExploreProducts() {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  }

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      ref={heroRef}
      className="tw-ai-product-hero ai-build-style-hero"
      aria-labelledby="tw-ai-title"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="tw-ai-bg-grid" />

      <div className="tw-ai-bg-glow tw-ai-glow-left" />

      <div className="tw-ai-bg-glow tw-ai-glow-right" />

      <div className="ai-hero-glow ai-hero-glow-one" />

      <div className="ai-hero-glow ai-hero-glow-two" />

      <div className="tw-ai-light-line tw-light-line-one" />

      <div className="tw-ai-light-line tw-light-line-two" />


      {/* =====================================================
          PARTICLES
      ===================================================== */}

      <span className="tw-ai-dot tw-dot-one" />

      <span className="tw-ai-dot tw-dot-two" />

      <span className="tw-ai-dot tw-dot-three" />

      <span className="tw-ai-dot tw-dot-four" />

      <span className="ai-particle particle-one" />

      <span className="ai-particle particle-two" />

      <span className="ai-particle particle-three" />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="container tw-ai-container">

        <div className="row align-items-center tw-ai-row">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="col-lg-6">

            <div className="tw-ai-content">

              {/* =================================================
                  TOP LABEL
              ================================================= */}

              <div className="tw-ai-top-label">

                <span className="tw-ai-label-line" />

                <span>
                  TECHWRAP AI LAB
                </span>

                <span className="tw-ai-live-dot" />

                <span>
                  LIVE
                </span>

              </div>


              {/* =================================================
                  HEADING
              ================================================= */}

              <h1
                id="tw-ai-title"
                className="tw-ai-heading"
              >

                Build

                <br />

                <span className="tw-ai-gradient-text">
                  Intelligent
                </span>

                <br />

                Products.

              </h1>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p className="tw-ai-description">

                Create intelligent digital products that
                understand, automate and evolve with your
                users. From AI assistants to intelligent
                workflows, TechWrap turns ideas into
                production-ready experiences.

              </p>


              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="tw-ai-actions">

                {/* =================================================
                    START A PROJECT
                    NAVIGATES TO CONTACT PAGE
                ================================================= */}

                <Link
                  to="/Company/Contact/Maincontact"
                  className="tw-ai-primary-button"
                  aria-label="Start a Project"
                >

                  <span>
                    Start a Project
                  </span>

                  <span className="tw-ai-button-arrow">
                    →
                  </span>

                </Link>


                {/* =================================================
                    EXPLORE AI PRODUCTS
                    ONLY SCROLLS SLIGHTLY DOWN
                ================================================= */}

                <button
                  type="button"
                  className="tw-ai-outline-button"
                  onClick={handleExploreProducts}
                  aria-label="Explore AI Products"
                >

                  <span>
                    Explore AI Products
                  </span>

                </button>

              </div>


              {/* =================================================
                  STACK
              ================================================= */}

              <div className="tw-ai-stack">

                <div className="tw-ai-stack-heading" />

              </div>


              {/* =================================================
                  TRUST
              ================================================= */}

              <div className="tw-ai-trust">

                <div className="tw-ai-trust-item">

                  <strong>
                    99.9%
                  </strong>

                  <span>
                    Uptime
                  </span>

                </div>

                <div className="tw-ai-trust-separator" />

                <div className="tw-ai-trust-item">

                  <strong>
                    24/7
                  </strong>

                  <span>
                    Automation
                  </span>

                </div>

                <div className="tw-ai-trust-separator" />

                <div className="tw-ai-trust-item">

                  <strong>
                    ∞
                  </strong>

                  <span>
                    Scalable
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="col-lg-6">

            <div className="tw-ai-stage">

              {/* =================================================
                  STAGE GLOW
              ================================================= */}

              <div className="tw-stage-glow" />


              {/* =================================================
                  AI CORE
              ================================================= */}

              <div
                className="tw-ai-core"
                style={coreStyle}
              >

                <div className="tw-core-circle core-circle-one" />

                <div className="tw-core-circle core-circle-two" />

                <div className="tw-core-circle core-circle-three" />

                <div className="tw-core-center">

                  <div className="tw-core-symbol">
                    ✦
                  </div>

                  <strong>
                    AI
                  </strong>

                  <span>
                    ENGINE
                  </span>

                </div>

              </div>


              {/* =================================================
                  AI DASHBOARD
              ================================================= */}

              <div
                className="tw-ai-dashboard"
                style={productStyle}
              >

                {/* =================================================
                    DASHBOARD TOP
                ================================================= */}

                <div className="tw-dashboard-top">

                  <div className="tw-dashboard-brand">

                    <div className="tw-dashboard-logo">
                      T
                    </div>

                    <div>

                      <strong>
                        TechWrap AI
                      </strong>

                      <span>
                        Intelligence Platform
                      </span>

                    </div>

                  </div>

                  <div className="tw-dashboard-status">

                    <span />

                    System Online

                  </div>

                </div>


                {/* =================================================
                    DASHBOARD NAV
                ================================================= */}

                <div className="tw-dashboard-nav">

                  <span className="active">
                    Overview
                  </span>

                  <span>
                    AI Agents
                  </span>

                  <span>
                    Automation
                  </span>

                  <span>
                    Analytics
                  </span>

                </div>


                {/* =================================================
                    DASHBOARD MESSAGE
                ================================================= */}

                <div className="tw-dashboard-message">

                  <div className="tw-message-icon">
                    ✦
                  </div>

                  <div>

                    <small>
                      TECHWRAP AI
                    </small>

                    <p>
                      Your intelligent workspace is ready.
                    </p>

                  </div>

                  <span className="tw-message-check">
                    ✓
                  </span>

                </div>


                {/* =================================================
                    DASHBOARD METRICS
                ================================================= */}

                <div className="tw-dashboard-metrics">

                  <div
                    className={`tw-dashboard-metric ${
                      activeMetric === 0
                        ? "selected"
                        : ""
                    }`}
                  >

                    <span>
                      {metrics[activeMetric].label}
                    </span>

                    <strong>
                      {metrics[activeMetric].value}
                    </strong>

                    <small>
                      ↗ {metrics[activeMetric].growth}
                    </small>

                  </div>


                  <div className="tw-dashboard-metric">

                    <span>
                      Active Users
                    </span>

                    <strong>
                      48.2K
                    </strong>

                    <small>
                      ↗ 21.4%
                    </small>

                  </div>


                  <div className="tw-dashboard-metric">

                    <span>
                      AI Accuracy
                    </span>

                    <strong>
                      98.7%
                    </strong>

                    <small>
                      ↗ 4.2%
                    </small>

                  </div>

                </div>


                {/* =================================================
                    CHART
                ================================================= */}

                <div className="tw-dashboard-chart">

                  <div className="tw-chart-heading">

                    <div>

                      <strong>
                        AI Product Activity
                      </strong>

                      <span>
                        Intelligent system performance
                      </span>

                    </div>

                    <button type="button">
                      7 Days
                    </button>

                  </div>


                  <div className="tw-chart-area">

                    <div className="tw-chart-lines">

                      <span />
                      <span />
                      <span />
                      <span />

                    </div>


                    <div className="tw-chart-svg">

                      <svg
                        viewBox="0 0 500 130"
                        preserveAspectRatio="none"
                      >

                        <defs>

                          <linearGradient
                            id="twAiGradient"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="0"
                          >

                            <stop
                              offset="0%"
                              stopColor="#06b6d4"
                            />

                            <stop
                              offset="50%"
                              stopColor="#0ea5e9"
                            />

                            <stop
                              offset="100%"
                              stopColor="#2563eb"
                            />

                          </linearGradient>


                          <linearGradient
                            id="twAiFill"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                          >

                            <stop
                              offset="0%"
                              stopColor="rgba(37,99,235,.20)"
                            />

                            <stop
                              offset="100%"
                              stopColor="rgba(37,99,235,0)"
                            />

                          </linearGradient>

                        </defs>


                        <path
                          className="tw-chart-fill"
                          d="
                            M0 105
                            L55 78
                            L110 91
                            L165 48
                            L220 66
                            L275 30
                            L330 51
                            L385 22
                            L440 42
                            L500 13
                            L500 130
                            L0 130
                            Z
                          "
                          fill="url(#twAiFill)"
                        />


                        <path
                          className="tw-chart-path"
                          d="
                            M0 105
                            L55 78
                            L110 91
                            L165 48
                            L220 66
                            L275 30
                            L330 51
                            L385 22
                            L440 42
                            L500 13
                          "
                          fill="none"
                          stroke="url(#twAiGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />


                        <circle
                          cx="500"
                          cy="13"
                          r="5"
                          fill="#2563eb"
                          className="tw-chart-end"
                        />

                      </svg>

                    </div>

                  </div>


                  <div className="tw-chart-days">

                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                    <span>S</span>

                  </div>

                </div>


                {/* =================================================
                    DASHBOARD PRODUCTS
                ================================================= */}

                <div className="tw-dashboard-products">

                  <div>

                    <span className="tw-product-icon">
                      ✦
                    </span>

                    <div>

                      <strong>
                        AI Assistant
                      </strong>

                      <small>
                        Active
                      </small>

                    </div>

                    <span className="tw-product-arrow">
                      →
                    </span>

                  </div>


                  <div>

                    <span className="tw-product-icon automation">
                      ⚡
                    </span>

                    <div>

                      <strong>
                        Automation
                      </strong>

                      <small>
                        94.8% Active
                      </small>

                    </div>

                    <span className="tw-product-arrow">
                      →
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  FLOATING ASSISTANT
              ================================================= */}

              <div
                className="tw-ai-floating-card tw-floating-assistant"
                style={floatingStyle}
              >

                <div className="tw-floating-card-icon">
                  ✦
                </div>

                <div>

                  <span>
                    AI Assistant
                  </span>

                  <strong>
                    Thinking...
                  </strong>

                </div>

                <div className="tw-thinking-dots">

                  <i />
                  <i />
                  <i />

                </div>

              </div>


              {/* =================================================
                  FLOATING AUTOMATION
              ================================================= */}

              <div
                className="tw-ai-floating-card tw-floating-automation"
                style={floatingStyle}
              >

                <div className="tw-floating-card-icon automation-icon">
                  ⚡
                </div>

                <div>

                  <span>
                    Automation
                  </span>

                  <strong>
                    94.8% Active
                  </strong>

                </div>

                <div className="tw-mini-progress">

                  <span />

                </div>

              </div>


              {/* =================================================
                  FLOATING SECURITY
              ================================================= */}

              <div
                className="tw-ai-floating-card tw-floating-security"
                style={floatingStyle}
              >

                <div className="tw-security-check">
                  ✓
                </div>

                <div>

                  <span>
                    Security
                  </span>

                  <strong>
                    Protected
                  </strong>

                </div>

              </div>


              {/* =================================================
                  SYSTEM STATUS
              ================================================= */}

              <div className="tw-ai-system-status">

                <span className="tw-system-icon">
                  ✓
                </span>

                <div>

                  <strong>
                    AI System Online
                  </strong>

                  <span>
                    All services operational
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

      <div className="tw-ai-bottom-line" />

    </section>
  );
};

export default AIProductHero;
