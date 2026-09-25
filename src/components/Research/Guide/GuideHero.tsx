import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuideHero.css";

/* =========================================================
   VISUAL GUIDE CARDS
========================================================= */

const guideSignals = [
  {
    number: "01",
    label: "BUILD",
    title: "Development",
    text: "Architecture, frontend & backend",
    icon: "</>",
  },
  {
    number: "02",
    label: "INTELLIGENCE",
    title: "AI & Automation",
    text: "AI workflows, APIs & agents",
    icon: "✦",
  },
  {
    number: "03",
    label: "CONNECT",
    title: "Integrations",
    text: "APIs, services & systems",
    icon: "↗",
  },
  {
    number: "04",
    label: "SHIP",
    title: "Deployment",
    text: "Cloud, CI/CD & production",
    icon: "◈",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const GuideHero: React.FC = () => {
  const navigate = useNavigate();

  /* =======================================================
     START BUILDING
     Navigation path added
  ======================================================= */

  const handleStart = () => {
    navigate("/Productoveriew/Webdevpage/Mainweb");
  };

  /* =======================================================
     EXPLORE CAPABILITIES
  ======================================================= */

  const handleExploreMore = () => {
    const possibleTargets = [
      "guide-content",
      "guides",
      "development",
    ];

    for (const id of possibleTargets) {
      const target = document.getElementById(id);

      if (target) {
        const navbarOffset = 90;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        return;
      }
    }

    /* Fallback:
       If none of the section IDs exist,
       scroll slightly down instead of doing nothing.
    */
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="tw-guide-hero"
      aria-labelledby="tw-guide-hero-title"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="tw-guide-noise"
        aria-hidden="true"
      />

      <div
        className="tw-guide-grid"
        aria-hidden="true"
      />

      <div
        className="
          tw-guide-light
          tw-guide-light-one
        "
        aria-hidden="true"
      />

      <div
        className="
          tw-guide-light
          tw-guide-light-two
        "
        aria-hidden="true"
      />

      {/* =====================================================
          MOVING BACKGROUND LINES
      ===================================================== */}

      <div
        className="
          tw-guide-background-line
          tw-guide-line-one
        "
        aria-hidden="true"
      />

      <div
        className="
          tw-guide-background-line
          tw-guide-line-two
        "
        aria-hidden="true"
      />

      <div
        className="
          tw-guide-background-line
          tw-guide-line-three
        "
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN SHELL
      ===================================================== */}

      <div className="tw-guide-shell">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="tw-guide-copy">

          {/* META */}

          <div className="tw-guide-meta">

            <span className="tw-guide-meta-dot" />

            <span>
              TECHWRAP / KNOWLEDGE SYSTEM
            </span>

            <span className="tw-guide-meta-status">
              LIVE
            </span>

          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            id="tw-guide-hero-title"
            className="tw-guide-title"
          >

            <span
              className="
                tw-guide-title-dark
              "
            >
              Practical
            </span>

            <span
              className="
                tw-guide-title-blue
              "
            >
              knowledge.
            </span>

            <span
              className="
                tw-guide-title-dark
              "
            >
              Built to move
            </span>

            <span
              className="
                tw-guide-title-blue
              "
            >
              you forward.
            </span>

          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="tw-guide-description">

            Explore practical knowledge for building,
            integrating, deploying, and scaling modern
            digital products with TechWrap.

          </p>

          {/* =================================================
              QUICK STATS
          ================================================= */}

          <div className="tw-guide-meta-stats">

            <div>

              <strong>
                BUILD
              </strong>

              <span>
                Modern products
              </span>

            </div>

            <div>

              <strong>
                CONNECT
              </strong>

              <span>
                APIs & systems
              </span>

            </div>

            <div>

              <strong>
                SHIP
              </strong>

              <span>
                Production ready
              </span>

            </div>

          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="tw-guide-actions">

            <button
              type="button"
              className="
                tw-guide-start-button
              "
              onClick={handleStart}
            >

              <span>
                Start Building
              </span>

            </button>

            <button
              type="button"
              className="
                tw-guide-explore-button
              "
              onClick={handleExploreMore}
            >

              <span>
                Explore more
              </span>

            </button>

          </div>

        </div>

        {/* ===================================================
            RIGHT VISUAL
        =================================================== */}

        <div className="tw-guide-visual">

          <div className="tw-guide-console">

            {/* =================================================
                CONSOLE HEADER
            ================================================= */}

            <div className="tw-guide-console-top">

              <div className="tw-guide-console-brand">

                <span
                  className="
                    tw-guide-console-dot
                  "
                >
                  <i />
                </span>

                <span>
                  GUIDE FLOW
                </span>

              </div>

              <div className="tw-guide-console-code">
                TW / DOCS / 01
              </div>

            </div>

            {/* =================================================
                SCANNING BEAM
            ================================================= */}

            <div
              className="tw-guide-scan"
              aria-hidden="true"
            />

            {/* =================================================
                CORE
            ================================================= */}

            <div className="tw-guide-core">

              <div
                className="
                  tw-guide-core-ring
                  tw-ring-one
                "
              />

              <div
                className="
                  tw-guide-core-ring
                  tw-ring-two
                "
              />

              <div
                className="
                  tw-guide-core-ring
                  tw-ring-three
                "
              />

              <div className="tw-guide-core-center">

                <span
                  className="
                    tw-guide-core-icon
                  "
                >
                  ✦
                </span>

                <strong>
                  GUIDES
                </strong>

                <small>
                  Learn → Build → Ship
                </small>

              </div>

              {/* ORBIT DOTS */}

              <span
                className="
                  tw-guide-orbit-dot
                  tw-orbit-a
                "
              />

              <span
                className="
                  tw-guide-orbit-dot
                  tw-orbit-b
                "
              />

              <span
                className="
                  tw-guide-orbit-dot
                  tw-orbit-c
                "
              />

              <span
                className="
                  tw-guide-orbit-dot
                  tw-orbit-d
                "
              />

            </div>

            {/* =================================================
                FLOATING GUIDE CARDS
            ================================================= */}

            <div className="tw-guide-signal-list">

              {guideSignals.map(
                (signal, index) => (

                  <article
                    key={signal.number}
                    className={`
                      tw-guide-signal
                      tw-guide-signal-${index + 1}
                    `}
                  >

                    {/* Animated top highlight */}

                    <span
                      className="
                        tw-guide-signal-highlight
                      "
                      aria-hidden="true"
                    />

                    {/* Number */}

                    <div
                      className="
                        tw-guide-signal-number
                      "
                    >
                      {signal.number}
                    </div>

                    {/* Icon */}

                    <div
                      className="
                        tw-guide-signal-icon
                      "
                    >

                      <span>
                        {signal.icon}
                      </span>

                    </div>

                    {/* Content */}

                    <div
                      className="
                        tw-guide-signal-copy
                      "
                    >

                      <span>
                        {signal.label}
                      </span>

                      <strong>
                        {signal.title}
                      </strong>

                      <small>
                        {signal.text}
                      </small>

                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        tw-guide-signal-arrow
                      "
                    >
                      →
                    </div>

                  </article>

                )
              )}

            </div>

            {/* =================================================
                CONSOLE FOOTER
            ================================================= */}

            <div
              className="
                tw-guide-console-footer
              "
            >

              <div>

                <span
                  className="
                    tw-guide-footer-live
                  "
                />

                SYSTEM ONLINE

              </div>

              <span>
                Knowledge / 04 modules
              </span>

            </div>

          </div>

          {/* =================================================
              FLOATING TAGS
          ================================================= */}

          <div
            className="
              tw-guide-float-tag
              tw-float-top
            "
          >

            <span>
              01
            </span>

            BUILD

          </div>

          <div
            className="
              tw-guide-float-tag
              tw-float-right
            "
          >

            <span>
              02
            </span>

            AI

          </div>

          <div
            className="
              tw-guide-float-tag
              tw-float-bottom
            "
          >

            <span>
              03
            </span>

            SHIP

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM CTA STRIP
      ===================================================== */}

      <div className="tw-guide-cta-strip">

      </div>

    </section>
  );
};

export default GuideHero;