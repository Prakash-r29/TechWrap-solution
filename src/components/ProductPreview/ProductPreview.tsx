import { Reveal } from "../Reveal/Reveal";
import type { ProductHighlight } from "../../types";
import { Link } from "react-router-dom";
import "./ProductPreview.css";

const HIGHLIGHTS: ProductHighlight[] = [
  {
    label: "Active sprints",
    value: "12",
  },
  {
    label: "Avg. release cycle",
    value: "9 days",
  },
  {
    label: "Deploy success rate",
    value: "99.4%",
  },
];

const CHART_BARS = [38, 62, 48, 80, 58, 92, 70];

const ACTIVITY_ITEMS = [
  {
    status: "live",
    title: "API gateway deployed",
    time: "2m ago",
  },
  {
    status: "ok",
    title: "Design review approved",
    time: "18m ago",
  },
  {
    status: "pending",
    title: "Staging QA in progress",
    time: "32m ago",
  },
];

export function ProductPreview() {
  return (
    <section
      className="tw-preview tw-section"
      id="product-preview"
      aria-labelledby="product-preview-title"
    >
      <div className="tw-container tw-preview__grid">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <Reveal className="tw-preview__copy">
          <div className="tw-preview__eyebrow-wrap">
            <span
              className="tw-preview__eyebrow-dot"
              aria-hidden="true"
            />

            <span className="tw-eyebrow">
              Inside the product
            </span>
          </div>

          <h2 id="product-preview-title">
            One dashboard for the entire{" "}
            <span>build.</span>
          </h2>

          <p>
            Every sprint, deploy, and decision lives in a single workspace —
            so your team always knows what shipped, what's next, and why.
          </p>

          <ul className="tw-preview__list">
            <li>
              <span
                className="tw-preview__check"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.2 10.2L8.2 13.2L14.8 6.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>
                Real-time sprint and release tracking
              </span>
            </li>

            <li>
              <span
                className="tw-preview__check"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.2 10.2L8.2 13.2L14.8 6.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>
                Shared changelogs your whole company can read
              </span>
            </li>

            <li>
              <span
                className="tw-preview__check"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.2 10.2L8.2 13.2L14.8 6.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>
                Direct line to the engineers building your product
              </span>
            </li>
          </ul>

          {/* =====================================================
              EXPLORE PLATFORM BUTTON
          ====================================================== */}
          <Link
            to="/pages/Products"
            className="tw-preview__cta"
            aria-label="Explore Our Platform"
          >
            <span className="tw-preview__cta-text">
              Explore Our Platform
            </span>

            <span
              className="tw-preview__cta-arrow"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10H16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M11 5L16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </Reveal>

        {/* =====================================================
            PRODUCT VISUAL
        ====================================================== */}
        <Reveal
          className="tw-preview__visual"
          delayMs={140}
        >
          <div
            className="tw-preview__visual-orbit"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div className="tw-preview__window">

            {/* Browser Header */}
            <div className="tw-preview__bar">
              <div className="tw-preview__browser-controls">
                <span className="tw-window-dot tw-window-dot--red" />
                <span className="tw-window-dot tw-window-dot--yellow" />
                <span className="tw-window-dot tw-window-dot--green" />
              </div>

              <div
                className="tw-preview__url"
                aria-label="Product dashboard URL"
              >
                <span
                  className="tw-preview__url-lock"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.5"
                      y="7"
                      width="9"
                      height="6"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />

                    <path
                      d="M5.25 7V5.6C5.25 4.08 6.48 2.85 8 2.85C9.52 2.85 10.75 4.08 10.75 5.6V7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                app.techwrapsolution.com
              </div>

              <div className="tw-preview__browser-live">
                <span />
                Live
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="tw-preview__body">

              {/* =================================================
                  DASHBOARD MINI TOPBAR
              ================================================== */}
              <div className="tw-preview__mini-topbar">
                <div>
                  <span className="tw-preview__mini-kicker">
                    WORKSPACE
                  </span>

                  <strong>
                    Product overview
                  </strong>
                </div>

                <div className="tw-preview__mini-status">
                  <span />
                  System healthy
                </div>
              </div>

              {/* =================================================
                  ANALYTICS CHART
              ================================================== */}
              <div
                className="tw-preview__chart"
                aria-label="Product activity chart"
              >
                <div className="tw-preview__chart-glare" />

                <div className="tw-preview__chart-header">
                  <div className="tw-preview__chart-title">
                    <span className="tw-preview__chart-label">
                      Product activity
                    </span>

                    <strong>
                      +24.8%
                    </strong>
                  </div>

                  <span className="tw-preview__chart-period">
                    Last 7 days
                  </span>
                </div>

                <div
                  className="tw-preview__chart-grid"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="tw-preview__bars">
                  {CHART_BARS.map((height, index) => (
                    <span
                      key={index}
                      className={`tw-preview__bar tw-preview__bar--${index}`}
                      style={{
                        height: `${height}%`,
                      }}
                      aria-hidden="true"
                    >
                      <i />
                    </span>
                  ))}
                </div>

                <div className="tw-preview__chart-days">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

                <div
                  className="tw-preview__chart-scan"
                  aria-hidden="true"
                />
              </div>

              {/* =================================================
                  LIVE ACTIVITY
              ================================================== */}
              <div className="tw-preview__activity-head">
                <div className="tw-preview__activity-title">
                  <span>Live activity</span>
                  <small>Team workspace</small>
                </div>

                <span className="tw-preview__live">
                  <i />
                  Live
                </span>
              </div>

              <div className="tw-preview__rows">
                {ACTIVITY_ITEMS.map((item, index) => (
                  <div
                    className="tw-preview__row"
                    key={item.title}
                    style={{
                      animationDelay: `${index * 140}ms`,
                    }}
                  >
                    <span
                      className={`tw-preview__activity-icon tw-preview__activity-icon--${item.status}`}
                      aria-hidden="true"
                    >
                      {item.status === "live" && (
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4V10L14 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <circle
                            cx="10"
                            cy="10"
                            r="6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}

                      {item.status === "ok" && (
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 10.2L8.4 13.1L14.6 6.9"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}

                      {item.status === "pending" && (
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 5V10.2L13.3 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <circle
                            cx="10"
                            cy="10"
                            r="6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </span>

                    <span className="tw-preview__row-text">
                      {item.title}
                    </span>

                    <span className="tw-preview__row-time">
                      {item.time}
                    </span>

                    <span
                      className="tw-preview__row-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>

              <div className="tw-preview__body-footer">
                <span>
                  <i />
                  All systems operational
                </span>

                <span>
                  Updated just now
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              FLOATING STAT CARDS
          ====================================================== */}
          <div
            className="tw-preview__floaters"
            aria-hidden="true"
          >
            {HIGHLIGHTS.map((highlight, index) => (
              <div
                key={highlight.label}
                className={`tw-preview__float tw-preview__float--${index}`}
              >
                <span className="tw-preview__float-icon">
                  {index === 0 && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 15.5V11.5M8 15.5V8.5M11.5 15.5V5.5M15 15.5V2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3V17M10 3L6.5 6.5M10 3L13.5 6.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 10L8 13.5L15.5 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <div>
                  <strong>
                    {highlight.value}
                  </strong>

                  <span>
                    {highlight.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}