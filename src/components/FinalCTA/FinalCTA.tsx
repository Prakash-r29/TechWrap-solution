import { Link } from "react-router-dom";
import { Reveal } from "../Reveal/Reveal";
import "./FinalCTA.css";

export function FinalCTA() {
  return (
    <section className="tw-section tw-final-cta-section">
      <div className="tw-container">
        <Reveal className="tw-final-cta" as="div">
          {/* Background system */}
          <div className="tw-final-cta__grid" aria-hidden="true" />
          <div className="tw-final-cta__glow tw-final-cta__glow--one" aria-hidden="true" />
          <div className="tw-final-cta__glow tw-final-cta__glow--two" aria-hidden="true" />
          <div className="tw-final-cta__scanline" aria-hidden="true" />

          {/* Top status */}
          <div className="tw-final-cta__status">
            <span className="tw-final-cta__status-dot" />
            <span>Ready to build</span>
          </div>

          <div className="tw-final-cta__layout">
            {/* LEFT — CTA content */}
            <div className="tw-final-cta__content">
              <div className="tw-final-cta__eyebrow">
                <span className="tw-final-cta__eyebrow-dot" />
                TECHWRAP DIGITAL PLATFORM
              </div>

              <h2>
                Ready to wrap
                <br />
                your next <span>big idea?</span>
              </h2>

              <div className="tw-final-cta__accent" aria-hidden="true" />

              <p>
                Turn your next idea into a production-ready product —
                from strategy and design to engineering, AI and scale.
              </p>

              <div className="tw-final-cta__ctas">
                 <Link to="/Company/Contact/Maincontact"
                  className="tw-final-cta__button tw-final-cta__button--primary"
                >
                  <span>Book a Slot</span>
                  <span className="tw-final-cta__arrow" aria-hidden="true">
                    
                  </span>
                </Link>

                <Link to="/Product"
                  className="tw-final-cta__button tw-final-cta__button--secondary"
                >
                  <span>Explore capabilities</span>
                  <span className="tw-final-cta__arrow" aria-hidden="true">
                  </span>
                </Link>
              </div>

              <div className="tw-final-cta__trust">
                <span className="tw-final-cta__trust-line" />
                <span>No credit card · No commitment · Free discovery call</span>
              </div>
            </div>

            {/* RIGHT — Hero-inspired product visual */}
            <div className="tw-final-cta__visual" aria-hidden="true">
              <div className="tw-final-cta__orbit tw-final-cta__orbit--one" />
              <div className="tw-final-cta__orbit tw-final-cta__orbit--two" />
              <div className="tw-final-cta__orbit tw-final-cta__orbit--three" />

              <span className="tw-final-cta__orb tw-final-cta__orb--one" />
              <span className="tw-final-cta__orb tw-final-cta__orb--two" />
              <span className="tw-final-cta__orb tw-final-cta__orb--three" />

              <div className="tw-final-cta__dashboard">
                <div className="tw-final-cta__window-bar">
                  <div className="tw-final-cta__window-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span className="tw-final-cta__window-label">
                    techwrap / delivery
                  </span>

                  <span className="tw-final-cta__live">
                    <span />
                    Live
                  </span>
                </div>

                <div className="tw-final-cta__dashboard-body">
                  <div className="tw-final-cta__dashboard-heading">
                    <div>
                      <span>PROJECT STATUS</span>
                      <strong>Build pipeline</strong>
                    </div>
                    <div className="tw-final-cta__progress-value">92%</div>
                  </div>

                  <div className="tw-final-cta__progress">
                    <span />
                  </div>

                  <div className="tw-final-cta__steps">
                    <div className="tw-final-cta__step tw-final-cta__step--done">
                      <div className="tw-final-cta__step-icon">✓</div>
                      <div>
                        <strong>Discovery sprint</strong>
                        <small>Wrapped</small>
                      </div>
                      <span>Done</span>
                    </div>

                    <div className="tw-final-cta__step tw-final-cta__step--active">
                      <div className="tw-final-cta__step-icon">↗</div>
                      <div>
                        <strong>Product build</strong>
                        <small>Engineering in progress</small>
                      </div>
                      <span>Live</span>
                    </div>

                    <div className="tw-final-cta__step">
                      <div className="tw-final-cta__step-icon">○</div>
                      <div>
                        <strong>QA &amp; release</strong>
                        <small>Ready for launch</small>
                      </div>
                      <span>Next</span>
                    </div>
                  </div>

                  <div className="tw-final-cta__metrics">
                    <div>
                      <span>Velocity</span>
                      <strong>+38%</strong>
                    </div>
                    <div>
                      <span>Deployments</span>
                      <strong>24</strong>
                    </div>
                    <div>
                      <span>Uptime</span>
                      <strong>99.9%</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tw-final-cta__floating-card tw-final-cta__floating-card--top">
                <span className="tw-final-cta__floating-icon">✦</span>
                <div>
                  <small>AI READY</small>
                  <strong>Smart delivery</strong>
                </div>
              </div>

              <div className="tw-final-cta__floating-card tw-final-cta__floating-card--bottom">
                <span className="tw-final-cta__floating-check">✓</span>
                <div>
                  <small>RELEASE</small>
                  <strong>Production ready</strong>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
