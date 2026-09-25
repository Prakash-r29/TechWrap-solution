import React from "react";
import {
  FaExpandArrowsAlt,
  FaCode,
  FaRobot,
  FaShieldAlt,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import "./Intwhytech.css";

interface IntegrationReason {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const integrationReasons: IntegrationReason[] = [
  {
    number: "01",
    icon: <FaExpandArrowsAlt />,
    title: "Scalable Architecture",
    description:
      "Integrations designed to grow with your application and support increasing users, services and data.",
  },
  {
    number: "02",
    icon: <FaCode />,
    title: "Modern APIs",
    description:
      "Use reliable and maintainable API architectures built for seamless communication between systems.",
  },
  {
    number: "03",
    icon: <FaRobot />,
    title: "AI Ready",
    description:
      "Connect modern AI services, models and intelligent workflows to your existing technology ecosystem.",
  },
  {
    number: "04",
    icon: <FaShieldAlt />,
    title: "Secure by Design",
    description:
      "Security is considered throughout the integration architecture, authentication and data flow.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Faster Development",
    description:
      "Reduce development time through reusable integration patterns and streamlined implementation.",
  },
  {
    number: "06",
    icon: <FaHeadset />,
    title: "Long-Term Support",
    description:
      "Monitor, maintain and continuously improve your integrations after the initial implementation.",
  },
];

function WhyTechWrapIntegrations() {
  return (
    <section className="why-integration-section">

      {/* Animated background */}
      <div className="why-integration-grid"></div>

      <div className="why-integration-glow why-glow-one"></div>
      <div className="why-integration-glow why-glow-two"></div>

      <div className="container">

        {/* Heading */}
        <div className="why-integration-heading">

          <div className="why-integration-label">
            <span></span>
            WHY TECHWRAP
          </div>

          <h2>
            Integrations built for
            <span> long-term growth.</span>
          </h2>

          <p>
            We don't just connect systems. We build reliable integration
            architectures that help your business scale, innovate and operate
            efficiently.
          </p>

        </div>

        {/* Cards */}
        <div className="why-integration-grid-cards">

          {integrationReasons.map((item, index) => (
            <article
              className="why-integration-card"
              key={item.number}
              style={
                {
                  "--integration-delay": `${index * 100}ms`,
                } as React.CSSProperties
              }
            >

              {/* Top row */}
              <div className="why-card-top">

                <span className="why-card-number">
                  {item.number}
                </span>

                <div className="why-card-icon">
                  <div className="why-icon-ring"></div>
                  <div className="why-icon-inner">
                    {item.icon}
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="why-card-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              {/* Bottom decoration */}
              <div className="why-card-footer">

                <span>TECHWRAP</span>

                <div className="why-card-line">
                  <div></div>
                </div>

              </div>

              {/* Hover glow */}
              <div className="why-card-glow"></div>

            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="why-integration-bottom">

          <div className="why-bottom-pulse"></div>

          <span>
            CONNECT • SCALE • INNOVATE
          </span>

        </div>

      </div>

    </section>
  );
}

export default WhyTechWrapIntegrations;