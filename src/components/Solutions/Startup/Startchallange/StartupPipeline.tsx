import "./StartupPipeline.css";

function StartupPipeline() {
  return (
    <section className="startup-pipeline">

      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pipeline-grid"></div>

      <div className="pipeline-glow pipeline-glow-1"></div>
      <div className="pipeline-glow pipeline-glow-2"></div>

      <div className="pipeline-orb orb-1"></div>
      <div className="pipeline-orb orb-2"></div>


      <div className="container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="pipeline-header">

          {/* BADGE */}
          <div className="pipeline-badge">
            <span className="pipeline-badge-dot"></span>

            <span>
              WHAT TECHWRAP PROVIDES
            </span>
          </div>


          {/* HEADING */}
          <h2>
            <span className="pipeline-title-main">
              Turn your idea into a
            </span>

            <span className="pipeline-title-highlight">
              scalable product.
            </span>
          </h2>


          {/* DESCRIPTION */}
          <p>
            From the first concept to production and growth,
            TechWrap provides everything your startup needs
            to build, launch and scale.
          </p>

        </div>


        {/* ==========================================
            PIPELINE
        ========================================== */}

        <div className="pipeline-wrapper">

          {/* Decorative grid */}
          <div className="pipeline-inner-grid"></div>


          {/* ==========================================
              STRAIGHT PIPELINE LINE
          ========================================== */}

          <svg
            className="pipeline-svg"
            viewBox="0 0 1200 1500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            <path
              className="pipeline-line-base"
              d="
                M 600 70
                L 600 1430
              "
            />

            <path
              className="pipeline-line-flow"
              d="
                M 600 70
                L 600 1430
              "
            />

          </svg>


          {/* ==========================================
              STAGE 01
          ========================================== */}

          <article className="pipeline-node idea-node">

            <div className="pipeline-node-icon">
              💡
            </div>

            <div className="pipeline-node-content">

              <small>01</small>

              <h3>IDEA</h3>

              <p>
                Your startup vision
              </p>

            </div>

            <div className="node-active-line"></div>

          </article>


          {/* ==========================================
              STAGE 02
          ========================================== */}

          <article className="pipeline-node design-node">

            <div className="pipeline-node-icon">
              🎨
            </div>

            <div className="pipeline-node-content">

              <small>02</small>

              <h3>DESIGN</h3>

              <p>
                UI / UX & product strategy
              </p>

            </div>

            <div className="node-active-line"></div>

          </article>


          {/* ==========================================
              STAGE 03
          ========================================== */}

          <article className="pipeline-node build-node">

            <div className="pipeline-node-icon">
              ⚡
            </div>

            <div className="pipeline-node-content">

              <small>03</small>

              <h3>MVP BUILD</h3>

              <p>
                Build & validate quickly
              </p>

            </div>

            <div className="node-active-line"></div>

          </article>


          {/* ==========================================
              CENTRAL PRODUCT
          ========================================== */}

          <article className="pipeline-product">

            <div className="product-glow"></div>

            <div className="product-top">

              <div className="product-status">
                <span></span>
                PRODUCT IN DEVELOPMENT
              </div>

              <span className="product-live">
                LIVE
              </span>

            </div>


            <div className="product-content">

              <div className="product-icon">
                ✦
              </div>

              <div className="product-copy">

                <small>
                  YOUR PRODUCT
                </small>

                <h3>
                  TechWrap Platform
                </h3>

                <p>
                  Building your next big idea
                </p>

              </div>

            </div>


            <div className="product-progress">

              <div className="progress-info">

                <span>
                  Development Progress
                </span>

                <strong>
                  78%
                </strong>

              </div>

              <div className="progress-bar">

                <span></span>

                <i></i>

              </div>

            </div>

          </article>


          {/* ==========================================
              PRODUCT OUTPUTS
          ========================================== */}

          <div className="pipeline-output-label">
            PRODUCT CAPABILITIES
          </div>


          <article className="pipeline-branch-node web-node">

            <span className="branch-icon">
              ◇
            </span>

            <div>

              <strong>WEB</strong>

              <small>
                React + TypeScript
              </small>

            </div>

          </article>


          <article className="pipeline-branch-node mobile-node">

            <span className="branch-icon">
              ◈
            </span>

            <div>

              <strong>MOBILE</strong>

              <small>
                Responsive Apps
              </small>

            </div>

          </article>


          <article className="pipeline-branch-node ai-node">

            <span className="branch-icon">
              ✦
            </span>

            <div>

              <strong>AI</strong>

              <small>
                Automation + AI
              </small>

            </div>

          </article>


          {/* ==========================================
              STAGE 04
          ========================================== */}

          <article className="pipeline-node api-node">

            <div className="pipeline-node-icon">
              🔗
            </div>

            <div className="pipeline-node-content">

              <small>
                04
              </small>

              <h3>
                APIs
              </h3>

              <p>
                Connect your ecosystem
              </p>

            </div>

            <div className="node-active-line"></div>

          </article>


          {/* ==========================================
              STAGE 05
          ========================================== */}

          <article className="pipeline-node cloud-node">

            <div className="pipeline-node-icon">
              ☁
            </div>

            <div className="pipeline-node-content">

              <small>
                05
              </small>

              <h3>
                CLOUD
              </h3>

              <p>
                Deploy & scale infrastructure
              </p>

            </div>

            <div className="node-active-line"></div>

          </article>


          {/* ==========================================
              STAGE 06
          ========================================== */}

          <article className="pipeline-scale">

            <div className="scale-icon">
              🚀
            </div>

            <div>

              <small>
                06
              </small>

              <h3>
                SCALE
              </h3>

              <p>
                Grow without limits
              </p>

            </div>

            <span className="scale-pulse"></span>

          </article>


          {/* ==========================================
              FLOATING TECHNOLOGIES
          ========================================== */}

          <div className="floating-tech tech-react">
            <span>⚛</span>
            React
          </div>

          <div className="floating-tech tech-ts">
            <span>TS</span>
            TypeScript
          </div>

          <div className="floating-tech tech-java">
            <span>☕</span>
            Spring Boot
          </div>

          <div className="floating-tech tech-api">
            <span>↗</span>
            REST API
          </div>

          <div className="floating-tech tech-ai">
            <span>✦</span>
            AI
          </div>

          <div className="floating-tech tech-cloud">
            <span>☁</span>
            Cloud
          </div>


          {/* ==========================================
              CONNECTION STATUS
          ========================================== */}

          <div className="pipeline-status">

            <span className="pipeline-status-dot"></span>

            <span>
              SYSTEM FLOW ACTIVE
            </span>

          </div>

        </div>


        {/* ==========================================
            FOOTER
        ========================================== */}

        <div className="pipeline-footer">

          <span className="footer-star">
            ✦
          </span>

          <span>
            One partner.
          </span>

          <strong>
            Every stage of your startup journey.
          </strong>

        </div>

      </div>

    </section>
  );
}

export default StartupPipeline;