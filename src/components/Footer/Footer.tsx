import "./Footer.css";
import { Link } from "react-router-dom";

/* =========================================================
   FOOTER TYPES
========================================================= */

type FooterLink = {
  label: string;
  path: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

/* =========================================================
   FOOTER NAVIGATION
========================================================= */

const COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      {
        label: "Overview",
        path: "/Pages/Products",
      },
      {
        label: "Web Development",
        path: "/Productoveriew/Webdevpage/Mainweb",
      },
      {
        label: "AI Products",
        path: "/Productoveriew/Ai-products/MainAi",
      },
      {
        label: "DevOps",
        path: "/Productoveriew-page/Devops/MainDev",
      },
      {
        label: "Integrations",
        path: "/productoveriew/Integration/MainInt",
      },
    ],
  },

  {
    title: "Solutions",
    links: [
      {
        label: "Startups",
        path: "/solutions/Startup/Mainstartup",
      },
      {
        label: "Enterprise",
        path: "/solutions/Enterprise/Mainenterprise",
      },
      {
        label: "Agencies",
        path: "/Solutions/Agency/Mainagency",
      },
      {
        label: "Developers",
        path: "/Solutions/Developer/Maindev",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        path: "/pages/Blog",
      },
      {
        label: "Guides",
        path: "/pages/Guide",
      },
      {
        label: "Documentation",
        path: "/pages/Documentation",
      },
      {
        label: "Case Studies",
        path: "/pages/Techsucessstorypage",
      },
      {
        label: "Support",
        path: "/Company/Contact/Maincontact",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About",
        path: "/pages/Aboutus",
      },
      {
        label: "Careers",
        path: "/company/Career/Maincareer",
      },
      {
        label: "Contact",
        path: "/Company/Contact/Maincontact",
      },
    ],
  },
];

/* =========================================================
   FOOTER COMPONENT
========================================================= */

export function Footer() {
  return (
    <footer className="tw-footer">

      {/* ===================================================
          DECORATIVE BACKGROUND
      =================================================== */}

      <div className="tw-footer__glow tw-footer__glow--one" />
      <div className="tw-footer__glow tw-footer__glow--two" />

      {/* ===================================================
          MAIN FOOTER
      =================================================== */}

      <div className="tw-container tw-footer__grid">

        {/* =================================================
            BRAND
        ================================================= */}

        <div className="tw-footer__brand">

          <Link
            to="/"
            className="tw-footer__logo"
            aria-label="TechWrap Home"
          >
            <span>Tech</span>
            <strong>Wrap</strong>
          </Link>

          <p className="tw-footer__description">
            Wrap ideas. Deliver solutions. A software
            engineering partner for teams that ship.
          </p>

          

        </div>

        {/* =================================================
            FOOTER COLUMNS
        ================================================= */}

        {COLUMNS.map((col, index) => (
          <div
            key={col.title}
            className="tw-footer__col"
            style={{
              animationDelay: `${index * 90}ms`,
            }}
          >

            <h6>
              {col.title}
            </h6>

            <div className="tw-footer__links">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="tw-footer__link"
                  aria-label={`Go to ${link.label}`}
                >
                  <span>{link.label}</span>

                  <span
                    className="tw-footer__link-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

          </div>
        ))}

      </div>

      {/* ===================================================
          FOOTER BOTTOM
      =================================================== */}

      <div className="tw-container tw-footer__bottom">
        <span className="tw-footer__copyright">
          © {new Date().getFullYear()} TechWrap Solution.
          All rights reserved.
        </span>

        <span className="tw-footer__tagline">
          <span className="tw-footer__status-dot" />
          Wrap Ideas. Deliver Solutions.
        </span>

      </div>

    </footer>
  );
}

export default Footer;