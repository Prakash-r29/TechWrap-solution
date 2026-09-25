import React, { useEffect, useRef, useState } from "react";
import "./Whoweare.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 25,
    suffix: "+",
    label: "Products",
    description: "Digital products and platforms built for real-world use.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Employees",
    description: "Developers, designers and technology professionals.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Technologies",
    description: "Modern frontend, backend, AI, API and cloud technologies.",
  },
  {
    value: 15,
    suffix: "+",
    label: "Achievements",
    description: "Milestones achieved through engineering and innovation.",
  },
];

const introLines = [
  "TechWrap is a technology-driven company focused on building",
  "modern digital products, scalable applications and intelligent",
  "technology solutions for businesses, startups and developers.",
];

const technologyStack = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Node.js",
  "Python",
  "REST APIs",
  "AI",
  "Cloud",
];

const WhoWeAre: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0)
  );

  /*
   * Detect when the section enters the viewport.
   */
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

  /*
   * Animated statistics counter.
   */
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1600;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(elapsed / duration, 1);

      /*
       * Smooth ease-out animation.
       */
      const easedProgress =
        1 - Math.pow(1 - percentage, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (percentage < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isVisible]);

  /*
   * Vertical progress based on section scroll position.
   */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionHeight = rect.height;

      const start = windowHeight;
      const end = -sectionHeight;

      const current = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      );

      setProgress(current * 100);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`who-we-are ${
        isVisible ? "who-visible" : ""
      }`}
    >
      {/* Background decoration */}
      <div className="who-bg-grid" />
      <div className="who-glow who-glow-one" />
      <div className="who-glow who-glow-two" />

      <div className="who-container">

        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <div className="who-left">

          <div className="who-sticky">

            <div className="who-label">
              <span className="who-label-dot" />
              ABOUT TECHWRAP
            </div>

            <h2>
              Who
              <span>We Are</span>
            </h2>

            <p className="who-short-text">
              Engineering ideas into modern digital
              experiences through technology,
              collaboration and continuous innovation.
            </p>

            {/* Vertical timeline */}
            <div className="who-timeline">

              <div className="who-timeline-track">
                <div
                  className="who-timeline-progress"
                  style={{
                    height: `${progress}%`,
                  }}
                />
              </div>

              <div className="who-timeline-item active">
                <span />
                <div>
                  <strong>01</strong>
                  <p>Our Identity</p>
                </div>
              </div>

              <div className="who-timeline-item">
                <span />
                <div>
                  <strong>02</strong>
                  <p>Our Technology</p>
                </div>
              </div>

              <div className="who-timeline-item">
                <span />
                <div>
                  <strong>03</strong>
                  <p>Our Growth</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div className="who-right">

          {/* INTRO */}
          <div className="who-introduction">

            <div className="who-section-number">
              01 / INTRODUCTION
            </div>

            <h3>
              Building technology
              <span>that moves businesses forward.</span>
            </h3>

            <div className="who-line-reveal">

              {introLines.map((line, index) => (
                <div
                  key={line}
                  className="who-line"
                  style={{
                    transitionDelay: `${index * 180}ms`,
                  }}
                >
                  <span>{line}</span>
                </div>
              ))}

            </div>

            <p className="who-description">
              From responsive React applications and
              TypeScript interfaces to powerful Java
              Spring Boot backends, Node.js services,
              Python solutions and AI-powered platforms,
              TechWrap brings modern engineering practices
              together to create scalable products.
            </p>

          </div>

          {/* TECHNOLOGY STRIP */}
          <div className="who-tech-area">

            <div className="who-section-number">
              02 / TECHNOLOGY
            </div>

            <div className="who-tech-heading">
              <h4>
                Built with the
                <span>right technology.</span>
              </h4>

              <p>
                Modern tools. Strong engineering.
                Production-ready thinking.
              </p>
            </div>

            <div className="who-tech-stack">

              {technologyStack.map((technology, index) => (
                <span
                  key={technology}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

          {/* STATS */}
          <div className="who-stat-area">

            <div className="who-section-number">
              03 / OUR JOURNEY
            </div>

            <div className="who-stats-grid">

              {stats.map((stat, index) => (
                <div
                  className="who-stat-card"
                  key={stat.label}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >

                  <div className="who-stat-top">

                    <span className="who-stat-index">
                      0{index + 1}
                    </span>

                    <span className="who-stat-line" />

                  </div>

                  <div className="who-stat-number">

                    {counts[index]}
                    <span>{stat.suffix}</span>

                  </div>

                  <h5>{stat.label}</h5>

                  <p>{stat.description}</p>

                </div>
              ))}

            </div>

          </div>

          {/* BOTTOM STATEMENT */}
          <div className="who-bottom">

            <div className="who-bottom-icon">
              <span />
            </div>

            <div>
              <span className="who-bottom-label">
                THE TECHWRAP APPROACH
              </span>

              <p>
                We believe technology should not only
                solve today's problems — it should create
                opportunities for what comes next.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;