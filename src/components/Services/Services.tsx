import { Reveal } from "../Reveal/Reveal";
import type { ServiceItem } from "../../types";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const SERVICES: ServiceItem[] = [
  {
    id: "build",
    icon: "build",
    title: "Rapid product engineering",
    description:
      "Senior engineers embedded in your roadmap, shipping production-ready features in sprints, not quarters.",
  },
  {
    id: "design",
    icon: "design",
    title: "Design systems that scale",
    description:
      "Consistent, accessible UI foundations built once and reused across every surface you ship.",
  },
  {
    id: "insight",
    icon: "insight",
    title: "Live delivery visibility",
    description:
      "A shared dashboard shows exactly what's in progress, what's blocked, and what ships next.",
  },
  {
    id: "reliability",
    icon: "reliability",
    title: "SLA-backed reliability",
    description:
      "Infrastructure and on-call support built to keep your product live, monitored, and fast.",
  },
  {
    id: "integrate",
    icon: "integrate",
    title: "Integration-ready",
    description:
      "Pre-built connectors for the tools your team already runs on — no glue code required.",
  },
  {
    id: "pricing",
    icon: "pricing",
    title: "Transparent pricing",
    description:
      "Fixed-scope sprints or dedicated squads — pick a model that matches how you like to plan.",
  },
];

/* =========================================================
   SERVICE ICONS
========================================================= */

const ICONS: Record<ServiceItem["icon"], JSX.Element> = {
  build: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 17l6-6-6-6M12 19h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  design: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),

  insight: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12h4l3 8 4-16 3 8h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  reliability: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7v5l3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),

  integrate: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),

  pricing: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 1v22M5 8h14M5 16h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
};


/* =========================================================
   DIFFERENT NAVIGATION PATH FOR EACH CARD
========================================================= */

const SERVICE_ROUTES: Record<ServiceItem["id"], string> = {
  build: "/pages/Products",

  design: "/Solutions/Enterprise/Mainenterprise",

  insight: "/Solutions/Agency/Mainagency",

  reliability: "/Productoveriew-page/Devops/MainDev",

  integrate:"/productoveriew/Integration/MainInt",

  pricing: "/Company/Contact/Maincontact",
};


/* =========================================================
   SERVICES COMPONENT
========================================================= */

function Services() {
  return (
    <section
      className="tw-services tw-section"
      id="services"
    >
      <div className="tw-container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <Reveal className="tw-services__head">

          <span className="tw-eyebrow">
            Capabilities
          </span>

          <h2>
            Every layer of the build, wrapped for you.
          </h2>

          <p>
            From first sketch to production traffic, one accountable team —
            not a chain of contractors.
          </p>

        </Reveal>


        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div className="tw-services__grid">

          {SERVICES.map((service, i) => (

            <Reveal
              key={service.id}
              delayMs={i * 60}
              className="tw-service-card"
            >

              <div className="tw-service-card__inner">

                {/* =================================================
                    SERVICE ICON
                ================================================= */}

                <div className="tw-service-card__icon">
                  {ICONS[service.icon]}
                </div>


                {/* =================================================
                    SERVICE TITLE
                ================================================= */}

                <h3>
                  {service.title}
                </h3>


                {/* =================================================
                    SERVICE DESCRIPTION
                ================================================= */}

                <p>
                  {service.description}
                </p>


                {/* =================================================
                    EXPLORE MORE
                    EACH CARD HAS A DIFFERENT PATH
                ================================================= */}

                <Link
                  to={SERVICE_ROUTES[service.id]}
                  className="tw-service-card__link"
                  aria-label={`Explore ${service.title}`}
                >

                  <span>
                    Explore More
                  </span>

                  <span
                    className="tw-service-card__arrow"
                    aria-hidden="true"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                    >

                      <path
                        d="M5 12h13M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                    </svg>

                  </span>

                </Link>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;