import React from "react";
import { Link } from "react-router-dom";
import "./Whytechwrap.css";

interface WhyPoint {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const whyPoints: WhyPoint[] = [
  {
    number: "01",
    title: "Scalable Architecture",
    description:
      "Build systems ready to grow with your business, users and future requirements.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "Use reliable and modern development technologies selected for your product needs.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Performance First",
    description:
      "Fast-loading, optimized applications designed for smooth and reliable experiences.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Security Focused",
    description:
      "Security is considered throughout development, from architecture to deployment.",
    icon: "◈",
  },
  {
    number: "05",
    title: "Business Driven",
    description:
      "Technology decisions are aligned with your actual business goals and users.",
    icon: "◎",
  },
  {
    number: "06",
    title: "Long-Term Support",
    description:
      "Continuous improvements, maintenance and technical support after launch.",
    icon: "∞",
  },
];

const WhyTechWrap: React.FC = () => {
  return (
    <section className="why-techwrap">

      {/* Background */}
      <div className="why-grid"></div>
      <div className="why-glow why-glow-one"></div>
      <div className="why-glow why-glow-two"></div>

      <div className="container">

        <div className="why-layout">

          {/* =========================================
              LEFT SIDE
          ========================================= */}
          <div className="why-intro">

            <div className="why-label">
              <span></span>
              WHY TECHWRAP
            </div>

            <h2>
              Technology built
              <span> around your success.</span>
            </h2>

            <p>
              We don't just build software. We combine technology,
              performance and business thinking to create digital
              products that are ready for what's next.
            </p>

            {/* CTA */}
            <Link to="/Company/Contact/Maincontact" className="why-cta">
              Work with TechWrap
              <span>→</span>
            </Link>

            {/* Animated visual */}
            <div className="why-visual">

              <div className="why-orbit orbit-one"></div>
              <div className="why-orbit orbit-two"></div>

              <div className="why-core">
                <div className="core-dot"></div>
                <strong>TECHWRAP</strong>
                <small>BUILD · SCALE · GROW</small>
              </div>

              <div className="why-floating floating-one">
                <span>99.9%</span>
                <small>Reliable</small>
              </div>

              <div className="why-floating floating-two">
                <span>∞</span>
                <small>Scalable</small>
              </div>

              <div className="why-floating floating-three">
                <span>⚡</span>
                <small>Fast</small>
              </div>

            </div>

          </div>


          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div className="why-list">

            <div className="why-line"></div>

            {whyPoints.map((point, index) => (

              <article
                className="why-item"
                key={point.number}
                style={
                  {
                    "--why-delay": `${index * 0.1}s`,
                  } as React.CSSProperties
                }
              >

                {/* Number */}
                <div className="why-number">
                  {point.number}
                </div>

                {/* Icon */}
                <div className="why-icon">
                  {point.icon}
                </div>

                {/* Content */}
                <div className="why-content">

                  <h3>{point.title}</h3>

                  <p>{point.description}</p>

                </div>

                {/* Arrow */}
                <div className="why-arrow">
                  →
                </div>

              </article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyTechWrap;