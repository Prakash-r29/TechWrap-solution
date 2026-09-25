
import { useNavigate } from "react-router-dom";
import "./Slider.css";

const projects = [
  {
    title: "Marketing Websites",
    subtitle: "High-performance responsive websites",
    tech: "React • TypeScript • UI/UX",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "SaaS Platforms",
    subtitle: "Complete frontend + backend applications",
    tech: "React • Spring Boot • REST API",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "E-Commerce",
    subtitle: "Payments, inventory and customer integrations",
    tech: "React • API • Payments",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Client Dashboards",
    subtitle: "Analytics, reporting and business dashboards",
    tech: "TypeScript • Charts • APIs",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "AI Applications",
    subtitle: "AI assistants, automation and intelligent workflows",
    tech: "AI • APIs • Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Custom Platforms",
    subtitle: "Complex client-specific applications",
    tech: "Full Stack • Cloud • DevOps",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  },
];

function AgencyBuilds() {
  const navigate = useNavigate();

  // Duplicate the complete list.
  // This creates the seamless infinite-loop effect.
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="agency-builds">

      {/* Background */}
      <div className="agency-builds-grid"></div>

      <div className="agency-builds-glow agency-builds-glow-one"></div>
      <div className="agency-builds-glow agency-builds-glow-two"></div>


      <div className="container">

        {/* Header */}
        <div className="agency-builds-header">

          <div className="agency-builds-label">

            <span className="agency-builds-dot"></span>

            WHAT AGENCIES CAN BUILD

            <span className="agency-builds-live">
              TECHWRAP ENGINEERING
            </span>

          </div>


          <h2>
            Build More Than Websites.
            <span> Build Digital Products.</span>
          </h2>


          <p>
            From high-performance websites to SaaS platforms,
            AI applications and enterprise dashboards — TechWrap
            gives agencies the engineering power to deliver more.
          </p>

        </div>


        {/* Technology Stack */}
        <div className="agency-tech-strip">

          <span className="tech-strip-label">
            BUILT WITH
          </span>

          <span>React</span>
          <i></i>

          <span>TypeScript</span>
          <i></i>

          <span>Spring Boot</span>
          <i></i>

          <span>REST APIs</span>
          <i></i>

          <span>AI</span>
          <i></i>

          <span>Cloud</span>
          <i></i>

          <span>DevOps</span>

        </div>

      </div>


      {/* ==================================================
          SINGLE INFINITE HORIZONTAL ROW
      ================================================== */}

      <div className="agency-marquee-wrapper">

        {/* Left edge fade */}
        <div className="marquee-fade marquee-fade-left"></div>

        {/* Right edge fade */}
        <div className="marquee-fade marquee-fade-right"></div>


        <div className="agency-marquee-track">

          {infiniteProjects.map((project, index) => (

            <div
              className="agency-project"
              key={`${project.title}-${index}`}
            >

              <div className="agency-project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />


                <div className="agency-project-overlay"></div>


                {/* Scan animation */}
                <div className="agency-project-scan"></div>


                {/* Content */}
                <div className="agency-project-content">

                  <span className="agency-project-number">
                    {String(
                      (index % projects.length) + 1
                    ).padStart(2, "0")}
                  </span>


                  <div className="agency-project-info">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.subtitle}
                    </p>

                    <small>
                      {project.tech}
                    </small>

                  </div>


                  <span className="agency-project-arrow">
                    ↗
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ==================================================
          SCROLL HINT
      ================================================== */}

      <div className="agency-scroll-hint">

        <span className="scroll-arrow">
          ←
        </span>

        <span>
          EXPLORE PROJECT CAPABILITIES
        </span>

        <span className="scroll-line"></span>

        <span className="scroll-arrow">
          →
        </span>

      </div>


      {/* ==================================================
          BOTTOM
      ================================================== */}

      <div className="container">

        <div className="agency-builds-bottom">

          <div className="agency-builds-status">

            <span></span>

            <p>
              Your clients bring the vision.
              <strong>
                {" "}TechWrap builds the product.
              </strong>
            </p>

          </div>


          {/* Start a Partnership */}

          <button
            type="button"
            className="agency-builds-partnership-button"
            onClick={() => navigate("/Company/Contact/Maincontact")}
          >
            Start a Partnership

            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default AgencyBuilds;

