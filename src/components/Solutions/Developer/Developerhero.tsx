
import { useNavigate } from "react-router-dom";
import "./DeveloperHero.css";

const technologies = [
  {
    className: "node-react",
    icon: "⚛",
    name: "React",
    description: "Frontend",
  },
  {
    className: "node-typescript",
    icon: "TS",
    name: "TypeScript",
    description: "Type-safe Apps",
  },
  {
    className: "node-spring",
    icon: "☕",
    name: "Spring Boot",
    description: "Java Backend",
  },
  {
    className: "node-python",
    icon: "PY",
    name: "Python",
    description: "AI & Backend",
  },
  {
    className: "node-api",
    icon: "API",
    name: "REST API",
    description: "Integrations",
  },
  {
    className: "node-ai",
    icon: "AI",
    name: "AI Products",
    description: "Intelligence",
  },
  {
    className: "node-cloud",
    icon: "☁",
    name: "Cloud",
    description: "Deploy & Scale",
  },
];

function DeveloperHero() {
  const navigate = useNavigate();

  const handleExploreTechnology = () => {
    window.scrollBy({
      top: 550,
      behavior: "smooth",
    });
  };

  return (
    <section className="developer-hero">

      {/* Background */}
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Background particles */}
      <span className="hero-particle particle-1" />
      <span className="hero-particle particle-2" />
      <span className="hero-particle particle-3" />
      <span className="hero-particle particle-4" />
      <span className="hero-particle particle-5" />

      <div className="developer-hero-container">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="developer-hero-content">

          <div className="developer-badge">
            <span className="badge-dot" />
            <span>DEVELOPER TECHNOLOGY</span>
            <span className="badge-arrow">↗</span>
          </div>

          <h1>
            Build What's Next.
            <br />
            <span>Ship Production-Ready Products.</span>
          </h1>

          <p className="developer-hero-description">
            From React applications and Java backends to AI-powered
            products and cloud infrastructure, TechWrap gives developers
            the stack and engineering foundation to build, integrate
            and scale faster.
          </p>

          <div className="developer-hero-actions">

            <button
              type="button"
              className="hero-primary-btn"
              onClick={() => navigate("/Company/Contact/Maincontact")}
            >
              Start Building
              <span></span>
            </button>

            <button
              type="button"
              className="hero-secondary-btn"
              onClick={handleExploreTechnology}
            >
              Explore Technology
            </button>

          </div>

          {/* Technology list */}
          <div className="hero-built-with">


          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE DEVELOPMENT VISUAL
        ===================================================== */}

        <div className="developer-stack-visual">

          {/* Large orbital rings */}
          <div className="stack-orbit orbit-one" />
          <div className="stack-orbit orbit-two" />
          <div className="stack-orbit orbit-three" />


          {/* Connection lines */}
          <div className="connection-line line-one" />
          <div className="connection-line line-two" />
          <div className="connection-line line-three" />
          <div className="connection-line line-four" />
          <div className="connection-line line-five" />


          {/* =================================================
              CENTER ENGINEERING CORE
          ================================================= */}

          <div className="stack-center">

            {/* Rotating rings */}
            <div className="center-ring center-ring-1" />
            <div className="center-ring center-ring-2" />

            {/* Expanding pulse */}
            <div className="center-pulse" />

            {/* Orbiting particles */}
            <span className="center-particle cp-1" />
            <span className="center-particle cp-2" />
            <span className="center-particle cp-3" />
            <span className="center-particle cp-4" />


            {/* Main core */}
            <div className="engineering-core">

              <div className="core-code">
                {"</>"}
              </div>

              <div className="core-status">
                <span />
                BUILDING
              </div>

            </div>


            {/* Animated code lines */}
            <div className="core-code-lines">
              <span className="code-line line-short" />
              <span className="code-line line-medium" />
              <span className="code-line line-long" />
            </div>


            {/* Core title */}
            <div className="core-title">

              <strong>
                TechWrap
              </strong>

              <small>
                ENGINEERING CORE
              </small>

            </div>


            {/* Development workflow */}
            <div className="core-workflow">

              <span>BUILD</span>

              <i>→</i>

              <span>INTEGRATE</span>

              <i>→</i>

              <span>SCALE</span>

            </div>

          </div>


          {/* =================================================
              TECHNOLOGY NODES
          ================================================= */}

          {technologies.map((technology) => (
            <div
              className={`stack-node ${technology.className}`}
              key={technology.name}
            >
              <div className="node-icon">
                {technology.icon}
              </div>

              <div>
                <strong>{technology.name}</strong>
                <small>{technology.description}</small>
              </div>
            </div>
          ))}


          {/* =================================================
              API STATUS CARD
          ================================================= */}

          <div className="dev-floating-card api-card">

            <div className="floating-card-top">

              <div className="floating-icon">
                API
              </div>

              <span className="floating-card-title">
                API STATUS
              </span>

              <span className="status-dot" />

            </div>

            <div className="floating-card-value">
              1.8M
              <span> requests</span>
            </div>

            <div className="mini-progress">
              <span />
            </div>

          </div>


          {/* =================================================
              CI/CD CARD
          ================================================= */}

          <div className="dev-floating-card pipeline-card">

            <div className="floating-card-top">

              <div className="floating-icon">
                CI
              </div>

              <span className="floating-card-title">
                PIPELINE
              </span>

              <span className="pipeline-check">
                ✓
              </span>

            </div>

            <div className="pipeline-steps">

              <span className="pipeline-done">
                ✓
              </span>

              <span className="pipeline-line" />

              <span className="pipeline-done">
                ✓
              </span>

              <span className="pipeline-line" />

              <span className="pipeline-active">
                ●
              </span>

            </div>

            <small>
              Build → Test → Deploy
            </small>

          </div>


          {/* =================================================
              DEPLOYMENT CARD
          ================================================= */}

          <div className="dev-floating-card deploy-card">

            <div className="floating-card-top">

              <div className="floating-icon">
                CD
              </div>

              <span className="deploy-status">
                LIVE
              </span>

            </div>

            <div className="deploy-project">
              techwrap-app
            </div>

            <div className="deploy-time">
              Production deployment successful
            </div>

          </div>


          {/* =================================================
              CODE REVIEW CARD
          ================================================= */}

          <div className="dev-floating-card review-card">

            <div className="floating-card-top">

              <div className="floating-icon">
                PR
              </div>

              <span className="review-count">
                #248
              </span>

            </div>

            <div className="review-text">
              Code review approved
            </div>

            <div className="review-user">

              <span className="avatar">
                TW
              </span>

              TechWrap Engineering

            </div>

          </div>


          {/* =================================================
              PERFORMANCE CARD
          ================================================= */}

          <div className="dev-floating-card performance-card">

            <div className="performance-header">

              <span>
                Performance
              </span>

              <strong>
                98%
              </strong>

            </div>

            <div className="performance-bar">
              <span />
            </div>

            <div className="performance-meta">

              <span>
                Response
              </span>

              <span>
                120ms
              </span>

            </div>

          </div>


          {/* Moving particles */}
          <span className="moving-particle mp-1" />
          <span className="moving-particle mp-2" />
          <span className="moving-particle mp-3" />

        </div>

      </div>


      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">


        <div className="scroll-line">
          <span />
        </div>

      </div>

    </section>
  );
}

export default DeveloperHero;

