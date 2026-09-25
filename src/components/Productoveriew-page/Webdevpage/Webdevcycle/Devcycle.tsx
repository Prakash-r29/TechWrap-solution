import React from "react";
import "./Devcycle.css";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, users and technical requirements.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the architecture, technology stack, roadmap and project goals.",
    icon: "⌗",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create intuitive interfaces and scalable product architecture.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build reliable frontend and backend systems using modern technologies.",
    icon: "</>",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Validate performance, security, usability and functionality.",
    icon: "✓",
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "Launch your application with reliable deployment and infrastructure.",
    icon: "↑",
  },
  {
    number: "07",
    title: "Scale",
    description:
      "Optimize your product and scale infrastructure as your business grows.",
    icon: "↗",
  },
];

const DevelopmentProcess: React.FC = () => {
  return (
    <section className="development-process">

      {/* Background */}
      <div className="process-grid"></div>

      <div className="process-glow process-glow-one"></div>
      <div className="process-glow process-glow-two"></div>

      <div className="container">

        {/* ================= HEADING ================= */}
        <div className="process-heading">

          <div className="process-label">
            <span></span>
            DEVELOPMENT PROCESS
          </div>

          {/* NORMAL BOLD HEADING */}
          <h2>
            From idea to Production.
          </h2>

          <p>
            A structured development process that transforms your idea
            into a reliable, scalable and high-performance digital product.
          </p>

        </div>


        {/* ================= TIMELINE ================= */}
        <div className="process-timeline">

          {/* Progress Line */}
          <div className="process-line">
            <div className="process-line-progress"></div>
          </div>


          {/* ================= STEPS ================= */}
          <div className="process-steps">

            {processSteps.map((step, index) => (

              <div
                className="process-step"
                key={step.number}
                style={
                  {
                    "--process-delay": `${index * 0.12}s`,
                  } as React.CSSProperties
                }
              >

                {/* Number */}
                <div className="process-number-wrapper">

                  <div className="process-number">

                    <span className="process-icon">
                      {step.icon}
                    </span>

                    <span className="process-step-number">
                      {step.number}
                    </span>

                  </div>

                </div>


                {/* Content */}
                <div className="process-card">

                  <span className="process-card-number">
                    STEP {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default DevelopmentProcess;