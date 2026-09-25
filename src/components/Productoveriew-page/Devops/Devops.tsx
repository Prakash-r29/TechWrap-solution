import React from "react";
import {
  Code2,
  Hammer,
  FlaskConical,
  Rocket,
  Activity,
  Scaling,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Devops.css";

const pipeline = [
  {
    number: "01",
    title: "CODE",
    description: "Develop",
    icon: Code2,
  },
  {
    number: "02",
    title: "BUILD",
    description: "Compile",
    icon: Hammer,
  },
  {
    number: "03",
    title: "TEST",
    description: "Validate",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "DEPLOY",
    description: "Release",
    icon: Rocket,
  },
  {
    number: "05",
    title: "MONITOR",
    description: "Observe",
    icon: Activity,
  },
  {
    number: "06",
    title: "SCALE",
    description: "Grow",
    icon: Scaling,
  },
];

function DevOpsHero() {
  // Same scroll behavior as AIProductHero
  const handleExploreDevOps = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="devops-hero">

      {/* Background */}
      <div className="devops-hero-grid"></div>

      <div className="devops-hero-glow devops-glow-one"></div>
      <div className="devops-hero-glow devops-glow-two"></div>

      <div className="devops-floating-dot dot-one"></div>
      <div className="devops-floating-dot dot-two"></div>
      <div className="devops-floating-dot dot-three"></div>

      <div className="container">

        <div className="row align-items-center g-5">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="col-lg-6">

            <div className="devops-hero-content">

              <div className="devops-label">
                <span className="devops-label-dot"></span>
                DEVOPS ENGINEERING
              </div>

              <h1>
                Build, Deploy
                <br />
                <span>& Scale</span> with
                <br />
                Confidence.
              </h1>

              <p>
                Automate development workflows, accelerate deployments
                and build reliable cloud infrastructure with modern
                DevOps practices.
              </p>

              <div className="devops-hero-buttons">

                {/* Start Your Project → Contact Page */}
                <Link
                  to="/Company/Contact/Maincontact"
                  className="devops-btn devops-btn-primary"
                  aria-label="Start Your Project"
                >
                  Start Your Project
                  <ArrowRight size={17} strokeWidth={2} />
                </Link>

                {/* Explore DevOps → Smooth 400px Scroll */}
                <button
                  type="button"
                  className="devops-btn devops-btn-secondary"
                  onClick={handleExploreDevOps}
                  aria-label="Explore DevOps"
                >
                  Explore DevOps
                </button>

              </div>

              {/* Trust indicators */}

              <div className="devops-trust">

                <div>
                  <CheckCircle2 size={16} />
                  Automated pipelines
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  Cloud ready
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  Secure infrastructure
                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              RIGHT PIPELINE
          ========================================= */}

          <div className="col-lg-6">

            <div className="devops-pipeline-wrapper">

              {/* Browser / Dashboard top */}

              <div className="devops-window">

                <div className="devops-window-header">

                  <div className="devops-window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="devops-window-title">
                    deployment-pipeline
                  </div>

                  <div className="devops-status">
                    <span></span>
                    LIVE
                  </div>

                </div>


                {/* Pipeline */}

                <div className="devops-pipeline">

                  <div className="pipeline-line"></div>

                  <div className="pipeline-progress"></div>

                  {pipeline.map((step, index) => {

                    const Icon = step.icon;

                    return (
                      <React.Fragment key={step.title}>

                        <div
                          className={`pipeline-step pipeline-step-${index + 1}`}
                        >

                          <div className="pipeline-icon">

                            <Icon
                              size={23}
                              strokeWidth={1.8}
                            />

                            <div className="pipeline-pulse"></div>

                          </div>

                          <div className="pipeline-info">

                            <span className="pipeline-number">
                              {step.number}
                            </span>

                            <strong>
                              {step.title}
                            </strong>

                            <small>
                              {step.description}
                            </small>

                          </div>

                        </div>

                        {index < pipeline.length - 1 && (
                          <div className="pipeline-connector">
                            <span></span>
                          </div>
                        )}

                      </React.Fragment>
                    );

                  })}

                </div>


                {/* Dashboard bottom */}

                <div className="devops-dashboard-footer">

                  <div>
                    <small>BUILD</small>
                    <strong>#1842</strong>
                  </div>

                  <div>
                    <small>SUCCESS RATE</small>
                    <strong>98.7%</strong>
                  </div>

                  <div>
                    <small>DEPLOY TIME</small>
                    <strong>2m 34s</strong>
                  </div>

                  <div className="deployment-status">
                    <span></span>
                    Production Healthy
                  </div>

                </div>

              </div>


              {/* Floating metric */}

              <div className="devops-floating-card floating-card-one">

                <div className="floating-icon">
                  <Rocket size={16} />
                </div>

                <div>
                  <small>DEPLOYMENT</small>
                  <strong>Successful</strong>
                </div>

              </div>


              <div className="devops-floating-card floating-card-two">

                <div className="floating-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div>
                  <small>UPTIME</small>
                  <strong>99.99%</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DevOpsHero;