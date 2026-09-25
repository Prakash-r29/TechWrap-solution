import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./FeatureGuide.css";

const FeaturedGuide: React.FC = () => {
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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`tw-featured-guide ${
        isVisible ? "tw-featured-guide-visible" : ""
      }`}
    >
      {/* Background */}
      <div className="tw-featured-guide-grid" />

      <div className="tw-featured-guide-glow tw-featured-guide-glow-one" />
      <div className="tw-featured-guide-glow tw-featured-guide-glow-two" />

      {/* Floating dots */}
      <span className="tw-featured-guide-dot tw-featured-guide-dot-one" />
      <span className="tw-featured-guide-dot tw-featured-guide-dot-two" />
      <span className="tw-featured-guide-dot tw-featured-guide-dot-three" />

      {/* Section heading */}
      <div className="tw-featured-guide-heading">
        <div className="tw-featured-guide-eyebrow">
          <span />
          START HERE
        </div>

        <h2>
          One practical guide.
          <br />
          <span>Everything to get moving.</span>
        </h2>

        <p>
          Start with a practical walkthrough designed to help you understand
          the workflow behind building production-ready digital products.
        </p>
      </div>

      {/* Featured Guide */}
      <Link
        to="/Research/Guide/FeatureGuide/ReactProductionguide"
        className="tw-featured-guide-panel"
        aria-label="Read Build a Production-Ready React Application guide"
      >
        {/* Panel number */}
        <div className="tw-featured-guide-number">
          <span></span>
        </div>

        {/* Main content */}
        <div className="tw-featured-guide-content">
          <span className="tw-featured-guide-label">
            FEATURED GUIDE
          </span>

          <h3>
            Build a Production-Ready
            <span> React Application</span>
          </h3>

          <p>
            From project structure to API integration, discover the practical
            workflow behind building a scalable React application.
          </p>

          
        </div>

        {/* Right side */}
        <div className="tw-featured-guide-action">
          <span className="tw-featured-guide-time">
            12 min read
          </span>

          <div className="tw-featured-guide-read">
            <span>Read Guide</span>

            <span className="tw-featured-guide-arrow">
              →
            </span>
          </div>
        </div>

        {/* Hover gradient */}
        <div className="tw-featured-guide-sweep" />

        {/* Top accent */}
        <div className="tw-featured-guide-accent" />
      </Link>

      {/* Bottom hint */}
      <div className="tw-featured-guide-footer">
        <span className="tw-featured-guide-footer-line" />

        <span>
          Practical knowledge · Focused technical depth
        </span>

        <span className="tw-featured-guide-footer-line" />
      </div>
    </section>
  );
};

export default FeaturedGuide;