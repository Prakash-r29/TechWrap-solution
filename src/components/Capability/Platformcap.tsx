import React from "react";
import { Link } from "react-router-dom";
import "./Platform.css";

interface Capability {
  number: string;
  icon: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  className?: string;
}

const capabilities: Capability[] = [
  {
    icon: "⌘",
    title: "Web Development",
    description: "Build fast, scalable and responsive web applications using modern technologies.",
    slug: "web-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    className: "capability-large",
    number: ""
  },

  {
    icon: "✦",
    title: "AI Products",
    description: "Create intelligent applications, AI workflows and powerful automation.",
    slug: "ai-products",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    number: ""
  },

  {
    icon: "⚙",
    title: "DevOps",
    description: "Automate CI/CD pipelines, deployments and infrastructure monitoring.",
    slug: "devops",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=85",
    number: ""
  },

  {
    icon: "⌁",
    title: "Integrations",
    description: "Connect APIs, applications and third-party services from one platform.",
    slug: "integrations",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    number: ""
  },

  {
    icon: "◌",
    title: "Analytics",
    description: "Monitor users, API activity and product performance with real-time insights.",
    slug: "analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    className: "capability-large",
    number: ""
  },

  {
    icon: "◇",
    title: "Security",
    description: "Protect your applications with secure authentication and infrastructure.",
    slug: "security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    number: ""
  },
];

const PlatformCapabilities: React.FC = () => {
  return (
    <section
      id="platform-capabilities"
      className="platform-section"
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="platform-grid"></div>

      <div className="platform-orb platform-orb-one"></div>

      <div className="platform-orb platform-orb-two"></div>

      <div className="platform-noise"></div>

      <div className="container position-relative">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="platform-heading">

          <div className="platform-label">

            <span className="platform-label-dot"></span>

            ONE PLATFORM

          </div>

          <h2>
            Everything you need to
            <span> build and scale.</span>
          </h2>

          <p>
            From development to deployment, TechWrap gives your
            team the tools to build, integrate and grow digital
            products faster.
          </p>

        </div>


        {/* =========================================
            CAPABILITY GRID
        ========================================= */}

        <div className="capability-grid">

          {capabilities.map((capability, index) => (

            <Link
              key={capability.title}
              to={`/Capability/Platformdetails#${capability.slug}`}
              className={`capability-card ${
                capability.className ?? ""
              }`}
              style={
                {
                  "--delay": `${index * 100}ms`,
                } as React.CSSProperties
              }
            >

              {/* =================================
                  IMAGE
              ================================= */}

              <div className="capability-image">

                <img
                  src={capability.image}
                  alt={capability.title}
                  loading={
                    index > 2
                      ? "lazy"
                      : "eager"
                  }
                />

                <div className="image-overlay"></div>
                

                <div className="capability-icon">

                  <span className="icon-symbol">
                    {capability.icon}
                  </span>

                  <span className="icon-ring"></span>

                </div>

              </div>


              {/* =================================
                  CARD BODY
              ================================= */}

              <div className="capability-body">

                <span className="capability-eyebrow">
                  TECHWRAP PLATFORM
                </span>

                <h3>
                  {capability.title}
                </h3>

                <p>
                  {capability.description}
                </p>


                {/* =================================
                    BOTTOM
                ================================= */}

                <div className="capability-bottom">

                  <span className="capability-link">

                    <span className="link-text">
                      Learn More
                    </span>

                    <span className="link-arrow">
                      →
                    </span>

                  </span>

                  <span className="card-index">
                    {capability.number}
                  </span>

                </div>

              </div>


              {/* =================================
                  HOVER ELEMENTS
              ================================= */}

              <div className="card-border"></div>

              <div className="card-glow"></div>

              <div className="card-light"></div>

              <div className="card-line"></div>

              <div className="card-dot"></div>

              <div className="card-corner-arrow">
                ↗
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default PlatformCapabilities;