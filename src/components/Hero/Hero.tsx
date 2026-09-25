
import { Link } from "react-router-dom";
import "./Hero.css";

/**
 * Entrance animation is pure CSS (see Hero.css): each child gets
 * `.tw-hero-enter` plus a staggered `--d` delay variable. This keeps
 * the very first paint (LCP) free of JS/observer setup, unlike the
 * scroll-triggered Reveal used further down the page.
 */
export function Hero() {
  return (
    <section className="tw-hero" id="top">
      <div className="tw-hero__field" aria-hidden="true" />

      <div className="tw-container tw-hero__grid">
        <div className="tw-hero__copy">
          <span className="tw-eyebrow tw-hero-enter" style={{ ["--d" as any]: "0ms" }}>
            Trusted software delivery partner
          </span>

          <h1 className="tw-hero-enter" style={{ ["--d" as any]: "80ms" }}>
            Ship software your
            <span className="tw-hero__accent"> customers actually trust.</span>
          </h1>

          <p className="tw-hero__lead tw-hero-enter" style={{ ["--d" as any]: "160ms" }}>
            TechWrap Solution is the engineering partner behind fast-moving
            product teams — from first prototype to the infrastructure that
            keeps you live at scale.
          </p>

          <div className="tw-hero__ctas tw-hero-enter" style={{ ["--d" as any]: "240ms" }}>
            <Link to="/Company/Contact/Maincontact" className="tw-btn tw-btn--primary">Start Project</Link>
            <Link to="/Pages/Products" className="tw-btn tw-btn--secondary">See the product</Link>
          </div>

          <div className="tw-hero__proof tw-hero-enter" style={{ ["--d" as any]: "320ms" }}>
            <div>
              <strong>240+</strong>
              <span>Products shipped</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Client retention</span>
            </div>
            <div>
              <strong>99.98%</strong>
              <span>Platform uptime</span>
            </div>
          </div>
        </div>

        <div className="tw-hero__visual tw-hero-enter" style={{ ["--d" as any]: "180ms" }}>
          <div className="tw-hero__panel">
            <div className="tw-hero__panel-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="tw-hero__row">
              <span>Discovery sprint</span>
              <span className="tw-hero__tag tw-hero__tag--done">Wrapped</span>
            </div>
            <div className="tw-hero__row">
              <span>Product build — Phase 2</span>
              <span className="tw-hero__tag tw-hero__tag--live">Live</span>
            </div>
            <div className="tw-hero__bar">
              <span style={{ width: "72%" }} />
            </div>
            <div className="tw-hero__row">
              <span>QA & release pipeline</span>
              <span className="tw-hero__tag tw-hero__tag--queued">In queue</span>
            </div>
          </div>
          <div className="tw-hero__glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

