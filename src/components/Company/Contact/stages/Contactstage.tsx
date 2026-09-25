import React, { useEffect, useState } from "react";
import "./Contactstage.css"

interface ProcessStep {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Connect",
    shortTitle: "CONNECT",
    description:
      "Share your product idea, goals, timeline and initial requirements with our team.",
    technologies: ["Requirements", "Goals", "Timeline"],
  },
  {
    number: "02",
    title: "Discover",
    shortTitle: "DISCOVER",
    description:
      "We understand your users, business requirements, existing systems, APIs and technical challenges.",
    technologies: ["Users", "APIs", "Requirements"],
  },
  {
    number: "03",
    title: "Architect",
    shortTitle: "ARCHITECT",
    description:
      "We define the right stack, architecture, database, integrations, cloud strategy and delivery roadmap.",
    technologies: [
      "React",
      "Spring Boot",
      "Node.js",
      "Python",
      "REST APIs",
      "Cloud",
    ],
  },
  {
    number: "04",
    title: "Build",
    shortTitle: "BUILD",
    description:
      "Development starts with iterative releases, testing, deployment and continuous communication.",
    technologies: [
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "CI/CD",
    ],
  },
];

const WhatHappensNext: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((previous) => {
        if (previous >= steps.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="what-next-section">
      {/* Background grid */}
      <div className="what-next-grid" />

      {/* Floating particles */}
      <span className="next-particle particle-a" />
      <span className="next-particle particle-b" />
      <span className="next-particle particle-c" />

      <div className="what-next-container">

        {/* HEADER */}
        <div className="what-next-header">

          <div className="next-eyebrow">
            <span className="next-eyebrow-dot" />
            PROJECT JOURNEY
          </div>

          <h2>
            What Happens
            <span>After You Reach Out?</span>
          </h2>

          <p>
            From the first conversation to production deployment,
            TechWrap turns your idea into a clear, scalable
            engineering roadmap.
          </p>

        </div>

        {/* PROCESS */}
        <div
          className="next-process"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Connecting line */}
          <div className="process-track">

            <div
              className="process-progress"
              style={{
                width:
                  `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />

            {/* Traveling particle */}
            <div
              className="traveling-particle"
              style={{
                left:
                  `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            >
              <span />
            </div>

          </div>


          {/* STEPS */}
          <div className="next-steps">

            {steps.map((step, index) => {

              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <button
                  key={step.number}
                  type="button"
                  className={`
                    next-step
                    ${isActive ? "active" : ""}
                    ${isCompleted ? "completed" : ""}
                  `}
                  onClick={() => setActiveStep(index)}
                >

                  {/* Number */}
                  <span className="step-number">

                    {step.number}

                    <span className="number-glow" />

                  </span>


                  {/* Title */}
                  <span className="step-title">
                    {step.shortTitle}
                  </span>


                  {/* Description */}
                  <span className="step-description">
                    {step.description}
                  </span>


                  {/* Tech labels */}
                  <span className="step-technologies">

                    {step.technologies.map((tech) => (
                      <span
                        className="tech-tag"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}

                  </span>


                  {/* Arrow */}
                  <span className="step-arrow">
                    →
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* ACTIVE STAGE */}
        <div className="active-stage">

          <div className="active-stage-left">

            <span className="active-label">
              CURRENT STAGE
            </span>

            <div className="active-stage-number">
              {steps[activeStep].number}
            </div>

            <div>
              <h3>
                {steps[activeStep].title}
              </h3>

              <p>
                {steps[activeStep].description}
              </p>
            </div>

          </div>


          <div className="active-stack">

            <span>
              TECH STACK / FOCUS
            </span>

            <div className="active-stack-items">

              {steps[activeStep].technologies.map(
                (technology) => (
                  <span key={technology}>
                    <i />
                    {technology}
                  </span>
                )
              )}

            </div>

          </div>

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="next-bottom">

          <span className="bottom-dot" />

          <span>
            Every project starts with a conversation,
            not a commitment.
          </span>

          <span className="bottom-arrow">
            →
          </span>

        </div>

      </div>
    </section>
  );
};

export default WhatHappensNext;