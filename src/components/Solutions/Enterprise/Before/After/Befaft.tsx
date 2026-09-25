import { Link } from "lucide-react";
import "./Befaft.css";

type MigrationItem = {
  legacyIcon: string;
  legacyTitle: string;
  legacyDescription: string;

  modernIcon: string;
  modernTitle: string;
  modernDescription: string;
};

const migrationItems: MigrationItem[] = [
  {
    legacyIcon: "▣",
    legacyTitle: "Legacy Application",
    legacyDescription: "Outdated business applications",

    modernIcon: "◉",
    modernTitle: "Modern Web Application",
    modernDescription: "React + TypeScript applications",
  },
  {
    legacyIcon: "▤",
    legacyTitle: "Old Database",
    legacyDescription: "Siloed and difficult to maintain",

    modernIcon: "⌘",
    modernTitle: "API Layer",
    modernDescription: "Secure Spring Boot REST APIs",
  },
  {
    legacyIcon: "⚙",
    legacyTitle: "Manual Processes",
    legacyDescription: "Slow repetitive workflows",

    modernIcon: "✦",
    modernTitle: "AI Automation",
    modernDescription: "Intelligent automated workflows",
  },
  {
    legacyIcon: "◫",
    legacyTitle: "Disconnected Systems",
    legacyDescription: "Separate enterprise platforms",

    modernIcon: "☁",
    modernTitle: "Cloud Platform",
    modernDescription: "Scalable cloud infrastructure",
  },
];

function MigrationConnector() {
  return (
    <div className="migration-connector">

      <div className="connector-line"></div>

      <div className="connector-particle"></div>

      <div className="connector-arrow">
        →
      </div>

    </div>
  );
}

function EnterpriseModernization() {
  return (
    <>
    <section
      className="enterprise-modernization"
      id="enterprise-modernization"
    >

      {/* Background */}

      <div className="modernization-grid"></div>

      <div className="modernization-glow modernization-glow-one"></div>

      <div className="modernization-glow modernization-glow-two"></div>


      <div className="container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="modernization-header">

          <div className="modernization-label">

            <span className="modernization-label-dot"></span>

            ENTERPRISE MODERNIZATION

          </div>


          <h2>
            From Legacy Systems
            <span> to Modern Platforms.</span>
          </h2>


          <p>
            Modernize your enterprise without disrupting the systems
            your business depends on. TechWrap gradually transforms
            legacy technology into secure, scalable and connected platforms.
          </p>

        </div>


        {/* =====================================================
            TRANSFORMATION VISUAL
        ===================================================== */}

        <div className="modernization-panel">

          {/* Top status */}

          <div className="modernization-status">

            <div className="status-left">

              <span className="status-pulse"></span>

              SYSTEM TRANSFORMATION

            </div>

            <div className="status-right">

              <span className="status-legacy">
                LEGACY
              </span>

              <span className="status-arrow">
                →
              </span>

              <span className="status-modern">
                MODERN
              </span>

            </div>

          </div>


          {/* Architecture */}

          <div className="modernization-flow">

            {/* =================================================
                LEGACY SIDE
            ================================================= */}

            <div className="architecture-side legacy-side">

              <div className="side-heading">

                <span className="side-icon">
                  ◫
                </span>

                <div>

                  <strong>
                    LEGACY SYSTEMS
                  </strong>

                  <small>
                    Existing Enterprise Technology
                  </small>

                </div>

              </div>


              <div className="migration-stack">

                {migrationItems.map((item, index) => (

                  <div
                    className="migration-item legacy-item"
                    key={item.legacyTitle}
                  >

                    <div className="migration-icon">
                      {item.legacyIcon}
                    </div>

                    <div className="migration-content">

                      <strong>
                        {item.legacyTitle}
                      </strong>

                      <small>
                        {item.legacyDescription}
                      </small>

                    </div>


                    <span className="migration-number">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* =================================================
                TRANSFORMATION CENTER
            ================================================= */}

            <div className="transformation-center">

              <div className="transformation-core">

                <span className="core-ring ring-one"></span>

                <span className="core-ring ring-two"></span>

                <span className="core-icon">
                  ↗
                </span>

              </div>


              <div className="transformation-title">
                MODERNIZE
              </div>


              <div className="transformation-subtitle">
                Migrate • Integrate • Scale
              </div>

            </div>


            {/* =================================================
                MODERN SIDE
            ================================================= */}

            <div className="architecture-side modern-side">

              <div className="side-heading">

                <span className="side-icon modern-icon">
                  ✦
                </span>

                <div>

                  <strong>
                    MODERN PLATFORM
                  </strong>

                  <small>
                    TechWrap Enterprise Architecture
                  </small>

                </div>

              </div>


              <div className="migration-stack">

                {migrationItems.map((item, _index) => (

                  <div
                    className="migration-item modern-item"
                    key={item.modernTitle}
                  >

                    <div className="migration-icon">
                      {item.modernIcon}
                    </div>

                    <div className="migration-content">

                      <strong>
                        {item.modernTitle}
                      </strong>

                      <small>
                        {item.modernDescription}
                      </small>

                    </div>


                    <span className="modern-check">
                      ✓
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              TRANSFORMATION CONNECTIONS
          ================================================= */}

          <div className="migration-connectors">

            {migrationItems.map((item, index) => (

              <MigrationConnector
                key={`${item.legacyTitle}-${index}`}
              />

            ))}

          </div>

        </div>


          {/* =================================================
              MODERN TECHNOLOGY BAR
          ================================================= */}

          

        {/* =====================================================
            BENEFITS
        ===================================================== */}

        <div className="modernization-benefits">

          <div className="modernization-benefit">

            <span>
              01
            </span>

            <div>
              <strong>
                No Big-Bang Migration
              </strong>

              <p>
                Modernize your systems gradually while keeping
                critical business operations running.
              </p>
            </div>

          </div>


          <div className="modernization-benefit">

            <span>
              02
            </span>

            <div>
              <strong>
                API-First Architecture
              </strong>

              <p>
                Connect existing systems with modern applications
                through secure and maintainable APIs.
              </p>
            </div>

          </div>


          <div className="modernization-benefit">

            <span>
              03
            </span>

            <div>
              <strong>
                Built to Scale
              </strong>

              <p>
                Move toward cloud-native infrastructure that can
                evolve with your enterprise.
              </p>
            </div>

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="modernization-cta">

          <div>

            <span className="cta-dot"></span>

            Ready to modernize?

            <strong>
              Let's transform your technology.
            </strong>

          </div>


          <Link to="/Company/Contact/Maincontact" className="cta-button">
            Talk to Our Experts
            <span>
              →
            </span>
          </Link>

        </div>

      </div>

    </section>
  </> 
  );
}

export default EnterpriseModernization;