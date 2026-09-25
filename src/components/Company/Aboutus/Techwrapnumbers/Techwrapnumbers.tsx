import React, { useEffect, useRef, useState } from "react";
import "./Techwrapnumbers.css";

interface Metric {
  id: number;
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
  growth: string;
}

const metrics: Metric[] = [
  {
    id: 1,
    label: "Employees",
    value: 120,
    suffix: "+",
    description: "Engineers, designers & technology professionals",
    icon: "👥",
    growth: "Growing team",
  },
  {
    id: 2,
    label: "Projects Delivered",
    value: 250,
    suffix: "+",
    description: "Web, SaaS, enterprise & AI products",
    icon: "⌘",
    growth: "Across industries",
  },
  {
    id: 3,
    label: "Achievements",
    value: 48,
    suffix: "+",
    description: "Milestones, launches & technology outcomes",
    icon: "✦",
    growth: "And counting",
  },
  {
    id: 4,
    label: "Platform Users",
    value: 850,
    suffix: "K+",
    description: "Users reached through products we helped build",
    icon: "◉",
    growth: "Users worldwide",
  },
];

const TechWrapNumbers: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    metrics.map(() => 0)
  );

  /* =========================================================
     SECTION INTERSECTION OBSERVER
     ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     NUMBER COUNT-UP
     ========================================================= */

  useEffect(() => {
    if (!hasEntered) return;

    const duration = 1800;
    const startTime = performance.now();

    const animateNumbers = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      /*
       * Ease-out animation.
       * Starts quickly and smoothly slows near the final number.
       */
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCounts(
        metrics.map((metric) =>
          Math.floor(metric.value * easedProgress)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    };

    requestAnimationFrame(animateNumbers);
  }, [hasEntered]);

  return (
    <section
      className={`techwrap-numbers ${
        hasEntered ? "numbers-visible" : ""
      }`}
      ref={sectionRef}
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="numbers-background-grid"></div>

      <div className="numbers-glow numbers-glow-one"></div>
      <div className="numbers-glow numbers-glow-two"></div>

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="numbers-container">

        <div className="numbers-header">

          <div className="numbers-eyebrow">
            <span className="numbers-eyebrow-dot"></span>

            TECHWRAP • IMPACT
          </div>

          <h2>
            TechWrap
            <span>by the Numbers.</span>
          </h2>

          <p>
            A snapshot of the people, products and technology
            impact behind the work we deliver.
          </p>

        </div>

        {/* ===================================================
            METRICS
            =================================================== */}

        <div className="numbers-grid">

          {metrics.map((metric, index) => (

            <article
              className="number-card"
              key={metric.id}
              style={
                {
                  "--card-delay": `${index * 120}ms`,
                } as React.CSSProperties
              }
            >

              {/* Top section */}

              <div className="number-card-top">

                <div className="number-icon">
                  {metric.icon}
                </div>

                <span className="number-status">
                  <span className="status-dot"></span>

                  {metric.growth}
                </span>

              </div>

              {/* Number */}

              <div className="number-value">

                <span className="number-counter">
                  {counts[index].toLocaleString()}
                </span>

                <span className="number-suffix">
                  {metric.suffix}
                </span>

              </div>

              {/* Label */}

              <h3>
                {metric.label}
              </h3>

              {/* Description */}

              <p>
                {metric.description}
              </p>

              {/* Bottom progress */}

              <div className="number-card-footer">

                <span>
                  TECHWRAP
                </span>

                <div className="number-progress">
                  <span></span>
                </div>

              </div>

            </article>

          ))}

        </div>

        {/* ===================================================
            BOTTOM INSIGHT
            =================================================== */}

        <div className="numbers-bottom">

          <div className="numbers-bottom-line"></div>

          <div className="numbers-bottom-content">

            <span className="numbers-live-dot"></span>

            <span>
              Building, shipping and scaling digital products
            </span>

          </div>

          <div className="numbers-bottom-line"></div>

        </div>

      </div>
    </section>
  );
};

export default TechWrapNumbers;