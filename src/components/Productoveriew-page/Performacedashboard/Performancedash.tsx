import React, { useEffect, useState } from "react";
import "./Performancedash.css";

interface Metric {
  label: string;
  value: number;
  displayValue: string;
  growth: string;
  icon: "users" | "api" | "deploy";
}

interface ChartData {
  label: string;
  value: number;
}

type Range = "30 Days" | "3 Months" | "1 Year";

const metrics: Metric[] = [
  {
    label: "Active Users",
    value: 24580,
    displayValue: "24,580",
    growth: "18.4%",
    icon: "users",
  },
  {
    label: "API Requests",
    value: 1820000,
    displayValue: "1.82M",
    growth: "24.7%",
    icon: "api",
  },
  {
    label: "Deployments",
    value: 3240,
    displayValue: "3,240",
    growth: "12.8%",
    icon: "deploy",
  },
];

const chartData: Record<Range, ChartData[]> = {
  "30 Days": [
    { label: "Jan", value: 12800 },
    { label: "Feb", value: 14500 },
    { label: "Mar", value: 15700 },
    { label: "Apr", value: 18100 },
    { label: "May", value: 20900 },
    { label: "Jun", value: 24580 },
  ],

  "3 Months": [
    { label: "Apr", value: 16400 },
    { label: "May", value: 18700 },
    { label: "Jun", value: 24580 },
  ],

  "1 Year": [
    { label: "Jul", value: 9200 },
    { label: "Sep", value: 10800 },
    { label: "Nov", value: 13100 },
    { label: "Jan", value: 15800 },
    { label: "Mar", value: 19400 },
    { label: "Jun", value: 24580 },
  ],
};

const ProductPerformance: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([
    0,
    0,
    0,
  ]);

  const [selectedRange, setSelectedRange] =
    useState<Range>("30 Days");

  const [isVisible, setIsVisible] = useState(false);

  /* =========================================================
     NUMBER ANIMATION
  ========================================================= */

  useEffect(() => {
    setIsVisible(true);

    const duration = 1400;
    const steps = 70;
    const intervalTime = duration / steps;

    let step = 0;

    const interval = setInterval(() => {
      step++;

      const progress = Math.min(step / steps, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(
        metrics.map((metric) =>
          Math.floor(metric.value * easeOut)
        )
      );

      if (step >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     CHART DATA
  ========================================================= */

  const activeChart = chartData[selectedRange];

  const maxChartValue =
    Math.max(...activeChart.map((item) => item.value)) * 1.18;

  /* =========================================================
     CREATE CHART PATH
  ========================================================= */

  const createChartPath = () => {
    const width = 700;
    const height = 250;

    return activeChart
      .map((item, index) => {
        const x =
          (index / (activeChart.length - 1)) * width;

        const y =
          height -
          (item.value / maxChartValue) * height;

        if (index === 0) {
          return `M${x} ${y}`;
        }

        const previous = activeChart[index - 1];

        const previousX =
          ((index - 1) / (activeChart.length - 1)) *
          width;

        const previousY =
          height -
          (previous.value / maxChartValue) * height;

        const controlX =
          (previousX + x) / 2;

        return `
          C${controlX} ${previousY}, 
          ${controlX} ${y}, 
          ${x} ${y} 
        `;
      })
      .join(" ");
  };

  const chartPath = createChartPath();

  const finalPoint =
    activeChart[activeChart.length - 1];

  const finalX = 700;

  const finalY =
    250 -
    (finalPoint.value / maxChartValue) * 250;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      className={`performance-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="performance-grid" />

      <div className="performance-glow performance-glow-one" />
      <div className="performance-glow performance-glow-two" />

      <div className="performance-orb performance-orb-one" />
      <div className="performance-orb performance-orb-two" />

      <div className="container performance-container">

        {/* ===================================================
            HERO
        =================================================== */}

        <div className="performance-heading">

          <div className="performance-label">
            <span className="label-line" />

            <span className="live-dot" />

            <span>PRODUCT ANALYTICS</span>
          </div>

          {/* =================================================
              UPDATED PRODUCT PERFORMANCE HEADING
          ================================================= */}

          <h2 className="performance-main-title">
            Product <span>Performance</span>
          </h2>

          <p>
            Understand your users, monitor API activity,
            and track your platform performance in
            real time.
          </p>

          <div className="heading-status">
            <span className="status-dot" />
            Live platform monitoring
          </div>

        </div>

        {/* ===================================================
            DASHBOARD
        =================================================== */}

        <div className="performance-dashboard">

          <div className="dashboard-glow" />

          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className="dashboard-topbar">

            <div className="dashboard-title">

              <div className="dashboard-title-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 18V10M10 18V6M16 18V3M22 18V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3>Product Performance</h3>

                <p>
                  Real-time platform insights
                </p>
              </div>

            </div>

            <div className="live-status">
              <span />
              LIVE
            </div>

          </div>

          {/* =================================================
              METRICS
          ================================================= */}

          <div className="performance-metrics">

            {metrics.map((metric, index) => {

              const formattedValue =
                index === 1
                  ? animatedValues[index] >= 1000000
                    ? `${(
                        animatedValues[index] /
                        1000000
                      ).toFixed(2)}M`
                    : animatedValues[
                        index
                      ].toLocaleString()
                  : animatedValues[
                      index
                    ].toLocaleString();

              return (
                <div
                  className="performance-metric"
                  key={metric.label}
                  style={{
                    animationDelay: `${0.2 + index * 0.12}s`,
                  }}
                >

                  <div className="metric-icon">

                    {metric.icon === "users" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="8"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />

                        <path
                          d="M5 20C5.5 16.5 8 14 12 14C16 14 18.5 16.5 19 20"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {metric.icon === "api" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 7L4 12L8 17"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M16 7L20 12L16 17"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M14 4L10 20"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {metric.icon === "deploy" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 19L19 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        <path
                          d="M11 5H19V13"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M5 10V19H14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                  </div>

                  <div className="metric-info">

                    <small>
                      {metric.label}
                    </small>

                    <strong>
                      {formattedValue}
                    </strong>

                    <span>
                      <b>↑</b> {metric.growth}
                    </span>

                  </div>

                  <div className="metric-mini-label">
                    + Growth
                  </div>

                  <div className="mini-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                </div>
              );
            })}

          </div>

          {/* =================================================
              USER GROWTH
          ================================================= */}

          <div className="user-growth-card">

            <div className="chart-header">

              <div className="chart-title">

                <div>
                  <small>
                    USER GROWTH
                  </small>

                  <h3>
                    {animatedValues[0].toLocaleString()}
                    <span> Users</span>
                  </h3>
                </div>

                <div className="chart-growth">
                  <span>↑</span>
                  18.4%
                </div>

              </div>

              <div className="chart-controls">

                {(
                  [
                    "30 Days",
                    "3 Months",
                    "1 Year",
                  ] as Range[]
                ).map((range) => (
                  <button
                    key={range}
                    className={
                      selectedRange === range
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setSelectedRange(range)
                    }
                  >
                    {range}
                  </button>
                ))}

              </div>

            </div>

            {/* =================================================
                CHART
            ================================================= */}

            <div className="main-chart">

              <div className="chart-y-axis">
                <span>30K</span>
                <span>20K</span>
                <span>10K</span>
                <span>0</span>
              </div>

              <div className="chart-area">

                <div className="chart-grid-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  key={selectedRange}
                  viewBox="0 0 700 250"
                  preserveAspectRatio="none"
                  className="performance-chart"
                >

                  <defs>

                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#2563eb"
                        stopOpacity="0.28"
                      />

                      <stop
                        offset="100%"
                        stopColor="#00b8f5"
                        stopOpacity="0"
                      />
                    </linearGradient>

                    <linearGradient
                      id="lineGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop
                        offset="0%"
                        stopColor="#2563eb"
                      />

                      <stop
                        offset="100%"
                        stopColor="#00b8f5"
                      />
                    </linearGradient>

                  </defs>

                  {/* Area */}

                  <path
                    className="chart-area-fill"
                    d={`
                      ${chartPath}
                      L700 250
                      L0 250
                      Z
                    `}
                  />

                  {/* Line */}

                  <path
                    key={selectedRange}
                    className="chart-line"
                    d={chartPath}
                  />

                  {/* Final point */}

                  <circle
                    className="chart-point-outer"
                    cx={finalX}
                    cy={finalY}
                    r="10"
                  />

                  <circle
                    className="chart-point"
                    cx={finalX}
                    cy={finalY}
                    r="5"
                  />

                </svg>

                {/* Tooltip */}

                <div className="chart-tooltip">

                  <span>
                    {finalPoint.label.toUpperCase()}
                  </span>

                  <strong>
                    {finalPoint.value.toLocaleString()}
                    <small> Users</small>
                  </strong>

                  <em>
                    ↑ 18.4%
                  </em>

                </div>

              </div>

            </div>

            {/* =================================================
                MONTHS
            ================================================= */}

            <div className="chart-months">

              {activeChart.map((item) => (
                <span key={item.label}>
                  {item.label}
                </span>
              ))}

            </div>

          </div>

          {/* =================================================
              BOTTOM CARDS
          ================================================= */}

          <div className="performance-bottom">

            {/* API USAGE */}

            <div className="api-usage-card">

              <div className="bottom-card-header">

                <div>
                  <small>
                    API ACTIVITY
                  </small>

                  <h4>
                    API Usage
                  </h4>
                </div>

                <span className="activity-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 6L18 12L12 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </span>

              </div>

              <div className="usage-item">

                <div className="usage-info">
                  <span>Web API</span>
                  <strong>78%</strong>
                </div>

                <div className="usage-bar">
                  <span style={{ width: "78%" }} />
                </div>

              </div>

              <div className="usage-item">

                <div className="usage-info">
                  <span>AI API</span>
                  <strong>61%</strong>
                </div>

                <div className="usage-bar">
                  <span style={{ width: "61%" }} />
                </div>

              </div>

              <div className="usage-item">

                <div className="usage-info">
                  <span>Database</span>
                  <strong>42%</strong>
                </div>

                <div className="usage-bar">
                  <span style={{ width: "42%" }} />
                </div>

              </div>

              <div className="api-footer">
                <span>
                  1.82M total requests
                </span>

                <span className="api-up">
                  +24.7%
                </span>
              </div>

            </div>

            {/* INTEGRATIONS */}

            <div className="integration-card">

              <div className="bottom-card-header">

                <div>
                  <small>
                    CONNECTED SERVICES
                  </small>

                  <h4>
                    Integration Status
                  </h4>
                </div>

                <span className="active-count">
                  4 Active
                </span>

              </div>

              <div className="integration-list">

                {[
                  ["S", "Stripe", "stripe"],
                  ["G", "GitHub", "github"],
                  ["S", "Slack", "slack"],
                  ["A", "AWS", "aws"],
                ].map(
                  ([icon, name, type]) => (
                    <div
                      className="integration-item"
                      key={name}
                    >

                      <div className="service-left">

                        <span
                          className={`service-icon ${type}`}
                        >
                          {icon}
                        </span>

                        <span>
                          {name}
                        </span>

                      </div>

                      <span className="connected">
                        <i />
                        Connected
                      </span>

                    </div>
                  )
                )}

              </div>

              <a
                href="/product/integrations"
                className="view-integrations"
              >
                View all integrations

                <span>→</span>
              </a>

            </div>

          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="dashboard-footer">

            <div>
              <span className="footer-live-dot" />
              All systems operational
            </div>

            <span>
              Updated just now
            </span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductPerformance;