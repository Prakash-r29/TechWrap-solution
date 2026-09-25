import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Jointechwrap.css"

const technologies = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Python",
  "AI",
  "Cloud",
  "DevOps",
];

const JoinTechWrap: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`join-techwrap ${isVisible ? "join-visible" : ""}`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="join-grid"></div>

      <div className="join-glow join-glow-left"></div>
      <div className="join-glow join-glow-right"></div>

      {/* =====================================================
          FLOATING AI / TECHNOLOGY PARTICLES
      ===================================================== */}

      <div className="join-particles" aria-hidden="true">
        <span className="join-particle particle-1"></span>
        <span className="join-particle particle-2"></span>
        <span className="join-particle particle-3"></span>
        <span className="join-particle particle-4"></span>
        <span className="join-particle particle-5"></span>
        <span className="join-particle particle-6"></span>
        <span className="join-particle particle-7"></span>
        <span className="join-particle particle-8"></span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="join-container">
        {/* Left small label */}
        <div className="join-side-label">
          <span className="join-side-line"></span>

          <div>
            <span>TECHWRAP</span>
            <strong>AI ENGINEERING</strong>
          </div>
        </div>

        {/* Main content */}
        <div className="join-content">
          <div className="join-eyebrow">
            <span className="join-eyebrow-dot"></span>
            BUILD WITH US
          </div>

          <h2 className="join-heading">
            Build
            <br />
            <span className="join-heading-dark">the Future</span>
            <br />
            <span className="join-heading-blue">With Us.</span>
          </h2>

          <p className="join-description">
            Join a technology team building modern digital products with
            React, TypeScript, Java, Spring Boot, Python, AI, Cloud and
            DevOps.
          </p>

          {/* Technology stack */}
          <div className="join-tech-list">
            {technologies.map((technology, index) => (
              <span
                className="join-tech"
                key={technology}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                <span className="join-tech-dot"></span>
                {technology}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="join-actions">
            <Link to="/login" className="join-connect-button">
              <span>Connect With Us</span>

              <span className="join-button-arrow">→</span>

              <span className="join-button-shine"></span>
            </Link>

            <div className="join-caption">
              <span className="join-caption-dot"></span>
              Your next opportunity starts here.
            </div>
          </div>
        </div>

        {/* Right decorative architecture */}
        <div className="join-architecture" aria-hidden="true">
          <div className="architecture-ring ring-one"></div>
          <div className="architecture-ring ring-two"></div>
          <div className="architecture-ring ring-three"></div>

          <div className="architecture-core">
            <span></span>
          </div>

          <div className="architecture-line line-one"></div>
          <div className="architecture-line line-two"></div>
          <div className="architecture-line line-three"></div>

          <div className="architecture-node node-one"></div>
          <div className="architecture-node node-two"></div>
          <div className="architecture-node node-three"></div>
          <div className="architecture-node node-four"></div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="join-bottom-bar">
        <span>TECHWRAP</span>
        <i></i>
        <span>ENGINEERING • AI • CLOUD • DIGITAL PRODUCTS</span>
      </div>
    </section>
  );
};

export default JoinTechWrap;