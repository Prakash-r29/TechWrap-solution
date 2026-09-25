import React, {
  useEffect,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import image from "../../assets/image/solution.jpg";
import resourceimage from "../../assets/image/Resesrch.jpg";
import companyimage from "../../assets/image/company.jpg";

import productimage from "../../assets/image/Product.jpg";

/* =========================================================
   TYPES
========================================================= */

type MenuType =
  | "products"
  | "solutions"
  | "resources"
  | "company"
  | null;


/* =========================================================
   NAVBAR
========================================================= */

const Navbar: React.FC = () => {
  const location = useLocation();

  /*
   * Large TechWrap card is HOME ONLY.
   * Internal pages use compact navbar.
   */

  const isHomePage =
    location.pathname === "/" ||
    location.pathname.toLowerCase() === "/home";

  const [activeMenu, setActiveMenu] =
    useState<MenuType>(null);


  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileSubmenu, setMobileSubmenu] =
    useState<MenuType>(null);


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
        setMobileSubmenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =======================================================
     LANGUAGE CHANGE
  ======================================================= */


  /* =======================================================
     MENU HANDLERS
  ======================================================= */

  const openMenu = (
    menu: MenuType
  ) => {
    if (window.innerWidth > 992) {
      setActiveMenu(menu);
    }
  };

  const closeEverything = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(
      (previous) => !previous
    );

    setActiveMenu(null);
    setMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (
    menu: Exclude<MenuType, null>
  ) => {
    setMobileSubmenu((previous) =>
      previous === menu ? null : menu
    );
  };

  return (
    <header
      className={`tw-navbar-area ${
        isHomePage
          ? "tw-home-navbar"
          : "tw-inner-navbar"
      }`}
    >

      {/* =====================================================
          LARGE TECHWRAP CARD
      ===================================================== */}

      <div
        className={`tw-navbar-card ${
          isHomePage
            ? "tw-home-card"
            : "tw-inner-card"
        }`}
      >

        {isHomePage && (
          <>
            {/* ===================================================
                HOME-ONLY VIDEO BACKGROUND
            =================================================== */}

            <div className="tw-navbar-video-layer">

              <video
                className="tw-navbar-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >

                <source
                  src="/videos/Navbar.mp4"
                  type="video/mp4"
                />

              </video>

              <div className="tw-navbar-video-overlay" />

            </div>

            {/* ===================================================
                HOME-ONLY DECORATIVE TECH ELEMENTS
            =================================================== */}

            <div className="tw-grid-overlay" />

            <div className="tw-glow tw-glow-one" />

            <div className="tw-glow tw-glow-two" />

            <span className="tw-tech-line tw-line-one" />

            <span className="tw-tech-line tw-line-two" />

          </>
        )}

        {/* ===================================================
            ACTUAL NAVBAR
        =================================================== */}

        <nav
          className="tw-navbar"
          onMouseLeave={() => {
            if (window.innerWidth > 992) {
              setActiveMenu(null);
            }
          }}
        >

          {/* =================================================
              LEFT SECTION
          ================================================= */}

          <div className="tw-navbar-left">

            <Link
              to="/"
              className="tw-brand"
              onClick={closeEverything}
            >

              <span className="tw-logo-box">

                <span className="tw-logo-letter">
                  T
                </span>

                <span className="tw-logo-corner" />

              </span>

              <span className="tw-brand-name">
                TechWrap
              </span>

            </Link>

          </div>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}

          <div className="tw-navbar-center">

            <div className="tw-navigation-pill">

              {/* ================= PRODUCTS ================= */}

              <div
                className={`tw-nav-item ${
                  activeMenu === "products"
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  openMenu("products")
                }
              >

                <Link
                  to="/"
                  className="tw-nav-link"
                  onClick={closeEverything}
                >

                  <span>
                    Products
                  </span>

                  <span className="tw-arrow">
                  </span>

                </Link>

                {activeMenu === "products" && (
                  <MegaMenu
                    type="products"
                    closeMenu={closeEverything}
                  />
                )}

              </div>

              {/* ================= SOLUTIONS ================= */}

              <div
                className={`tw-nav-item ${
                  activeMenu === "solutions"
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  openMenu("solutions")
                }
              >

                <Link
                  to="/"
                  className="tw-nav-link"
                  onClick={closeEverything}
                >

                  <span>
                    Solutions
                  </span>

                  <span className="tw-arrow">
                  </span>

                </Link>

                {activeMenu === "solutions" && (
                  <MegaMenu
                    type="solutions"
                    closeMenu={closeEverything}
                  />
                )}

              </div>

              {/* ================= RESOURCES ================= */}

              <div
                className={`tw-nav-item ${
                  activeMenu === "resources"
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  openMenu("resources")
                }
              >

                <Link
                  to="/"
                  className="tw-nav-link"
                  onClick={closeEverything}
                >

                  <span>
                    Resources
                  </span>

                  <span className="tw-arrow">
                  </span>

                </Link>

                {activeMenu === "resources" && (
                  <MegaMenu
                    type="resources"
                    closeMenu={closeEverything}
                  />
                )}

              </div>

              {/* ================= COMPANY ================= */}

              <div
                className={`tw-nav-item ${
                  activeMenu === "company"
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  openMenu("company")
                }
              >

                <Link
                  to="/"
                  className="tw-nav-link"
                  onClick={closeEverything}
                >

                  <span>
                    Company
                  </span>

                  <span className="tw-arrow">
                  </span>

                </Link>

                {activeMenu === "company" && (
                  <MegaMenu
                    type="company"
                    closeMenu={closeEverything}
                  />
                )}

              </div>

              {/* ================= CONTACT ================= */}

              <Link
                to="/Company/Contact/Maincontact"
                className="tw-nav-link tw-contact-link"
                onClick={closeEverything}
              >
                Contact
              </Link>

            </div>

          </div>

          {/* =================================================
              RIGHT SECTION
          ================================================= */}

          <div className="tw-navbar-right">

            
            {/* ================= SIGN UP ================= */}

            <Link
              to="/pages/Authentication/Register"
              className="tw-signup-button"
              onClick={closeEverything}
            >
              Sign Up
            </Link>

            {/* ================= LOGIN ================= */}

            <Link
              to="/login"
              className="tw-login-button"
              onClick={closeEverything}
            >

              <span>
                Login
              </span>

              <span className="tw-login-arrow">
              </span>

            </Link>

            {/* ================= MOBILE ================= */}

            <button
              type="button"
              className={`tw-mobile-toggle ${
                mobileOpen
                  ? "open"
                  : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
              aria-expanded={
                mobileOpen
              }
            >

              <span />
              <span />
              <span />

            </button>

          </div>

        </nav>

        {/* ===================================================
            HOME CARD CENTER MESSAGE
        =================================================== */}

        {isHomePage && (
          <div className="tw-home-hero-content">

            

            <h1>
              Technology that helps
              <br />
              your business move forward.
            </h1>

            

            <div
              className="tw-home-hero-points"
              aria-label="TechWrap business benefits"
            >

              <span>
                Build with confidence
              </span>

              <span>
                Automate with AI
              </span>

              <span>
                Scale for growth
              </span>

            </div>

          </div>
        )}

        {/* ===================================================
            MOBILE NAVIGATION
        =================================================== */}

        {mobileOpen && (
          <div className="tw-mobile-menu">

            {/* ================= PRODUCTS ================= */}
            <div className="tw-mobile-menu-group">
              <button
                type="button"
                className={`tw-mobile-menu-trigger ${
                  mobileSubmenu === "products"
                    ? "open"
                    : ""
                }`}
                onClick={() =>
                  toggleMobileSubmenu("products")
                }
                aria-expanded={
                  mobileSubmenu === "products"
                }
              >
                <span>
                  Products
                </span>
                <span className="tw-mobile-menu-plus">
                  {mobileSubmenu === "products"
                    ? "−"
                    : "+"}
                </span>
              </button>

              {mobileSubmenu === "products" && (
                <div className="tw-mobile-submenu">
                  <Link
                    to="/pages/Products"
                    onClick={closeEverything}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/Productoveriew/Webdevpage/Mainweb"
                    onClick={closeEverything}
                  >
                    Web Development
                  </Link>

                  <Link
                    to="/Productoveriew/Ai-products/MainAi"
                    onClick={closeEverything}
                  >
                    AI Products
                  </Link>

                  <Link
                    to="/Productoveriew-page/Devops/MainDev"
                    onClick={closeEverything}
                  >
                    DevOps
                  </Link>

                  <Link
                    to="/productoveriew/Integration/MainInt"
                    onClick={closeEverything}
                  >
                    Integrations
                  </Link>

                  <Link
                    to="/Capability/Platformdetails"
                    onClick={closeEverything}
                  >
                    Analytics
                  </Link>
                </div>
              )}
            </div>

            {/* ================= SOLUTIONS ================= */}
            <div className="tw-mobile-menu-group">
              <button
                type="button"
                className={`tw-mobile-menu-trigger ${
                  mobileSubmenu === "solutions"
                    ? "open"
                    : ""
                }`}
                onClick={() =>
                  toggleMobileSubmenu("solutions")
                }
                aria-expanded={
                  mobileSubmenu === "solutions"
                }
              >
                <span>
                  Solutions
                </span>
                <span className="tw-mobile-menu-plus">
                  {mobileSubmenu === "solutions"
                    ? "−"
                    : "+"}
                </span>
              </button>

              {mobileSubmenu === "solutions" && (
                <div className="tw-mobile-submenu">
                  <Link
                    to="/solutions/Startup/Mainstartup"
                    onClick={closeEverything}
                  >
                    Startups
                  </Link>

                  <Link
                    to="/solutions/Enterprise/Mainenterprise"
                    onClick={closeEverything}
                  >
                    Enterprise
                  </Link>

                  <Link
                    to="/Solutions/Agency/Mainagency"
                    onClick={closeEverything}
                  >
                    Agencies
                  </Link>

                  <Link
                    to="/Solutions/Developer/Maindev"
                    onClick={closeEverything}
                  >
                    Developers
                  </Link>
                </div>
              )}
            </div>

            {/* ================= RESOURCES ================= */}
            <div className="tw-mobile-menu-group">
              <button
                type="button"
                className={`tw-mobile-menu-trigger ${
                  mobileSubmenu === "resources"
                    ? "open"
                    : ""
                }`}
                onClick={() =>
                  toggleMobileSubmenu("resources")
                }
                aria-expanded={
                  mobileSubmenu === "resources"
                }
              >
                <span>
                  Resources
                </span>
                <span className="tw-mobile-menu-plus">
                  {mobileSubmenu === "resources"
                    ? "−"
                    : "+"}
                </span>
              </button>

              {mobileSubmenu === "resources" && (
                <div className="tw-mobile-submenu">
                  <Link
                    to="/pages/Blog"
                    onClick={closeEverything}
                  >
                    Blog
                  </Link>

                  <Link
                    to="/pages/Guide"
                    onClick={closeEverything}
                  >
                    Guides
                  </Link>

                  <Link
                    to="/pages/Techsucessstorypage"
                    onClick={closeEverything}
                  >
                    Case Studies
                  </Link>

                  <Link
                    to="/pages/Documentation"
                    onClick={closeEverything}
                  >
                    Documentation
                  </Link>
                </div>
              )}
            </div>

            {/* ================= COMPANY ================= */}
            <div className="tw-mobile-menu-group">
              <button
                type="button"
                className={`tw-mobile-menu-trigger ${
                  mobileSubmenu === "company"
                    ? "open"
                    : ""
                }`}
                onClick={() =>
                  toggleMobileSubmenu("company")
                }
                aria-expanded={
                  mobileSubmenu === "company"
                }
              >
                <span>
                  Company
                </span>
                <span className="tw-mobile-menu-plus">
                  {mobileSubmenu === "company"
                    ? "−"
                    : "+"}
                </span>
              </button>

              {mobileSubmenu === "company" && (
                <div className="tw-mobile-submenu">
                  <Link
                    to="/pages/Aboutus"
                    onClick={closeEverything}
                  >
                    About Us
                  </Link>

                  <Link
                    to="/Company/Career/Maincareer"
                    onClick={closeEverything}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* ================= CONTACT ================= */}
            <Link
              to="/Company/Contact/Maincontact"
              className="tw-mobile-contact"
              onClick={closeEverything}
            >
              Contact
            </Link>

            {/* ================= AUTH ================= */}
            <div className="tw-mobile-auth">
              <Link
                to="/pages/Authentication/Register"
                className="tw-mobile-signup"
                onClick={closeEverything}
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="tw-mobile-login"
                onClick={closeEverything}
              >
                Login
              </Link>
            </div>

          </div>
        )}

        {isHomePage && (
          <div className="tw-card-bottom">

            <div className="tw-status">

              <span className="tw-status-dot" />

              <span>
                TECHWRAP DIGITAL PLATFORM
              </span>

            </div>

            <div className="tw-card-message">
              Build. Integrate. Scale.
            </div>

            <div className="tw-card-tech-stack">

              <span>
                AI Product
              </span>

              <span>
                Cloud
              </span>

              <span>
                Deveops
              </span>

            </div>

          </div>
        )}

      </div>

    </header>
  );
};

/* =========================================================
   MEGA MENU COMPONENT
========================================================= */

interface MegaMenuProps {
  type: Exclude<
    MenuType,
    null
  >;

  closeMenu: () => void;
}

const MegaMenu: React.FC<
  MegaMenuProps
> = ({
  type,
  closeMenu,
}) => {

  const menuData = {

    /* =====================================================
       PRODUCTS
    ===================================================== */

    products: {
      label: "PRODUCTS",

      title:
        "Build powerful digital products.",

      description:
        "Modern technology products for  scalability and intelligent automation.",

      image:productimage,

      imageAlt:
        "TechWrap digital products and technology",

      columns: [
        {
          title: "PRODUCTS",

          items: [
            {
              title: "Overview",

              description:
                "Explore the complete TechWrap platform.",

              path:
                "/Pages/Products",
            },

            {
              title:
                "Web Development",

              description:
                "Modern Web applications.",

              path:
                "/Productoveriew/Webdevpage/Mainweb",
            },

            {
              title:
                "AI Products",

              description:
                "AI-powered applications and workflows.",

              path:
                "/Productoveriew/Ai-products/MainAi",
            },
          ],
        },

        {
          title:
            "ENGINEERING",

          items: [
            {
              title:
                "DevOps",

              description:
                "Deployment,automation & infrastructure.",

              path:
                "/Productoveriew-page/Devops/MainDev",
            },

            {
              title:
                "Integration",

              description:
                "Connect APIs, platforms and services.",

              path:
                "/productoveriew/Integration/MainInt",
            },
          ],
        },
      ],
    },

    /* =====================================================
       SOLUTIONS
    ===================================================== */

    solutions: {
      label: "SOLUTIONS",

      title:
        "Technology for every stage.",

      description:
        "TechWrap helps teams build and scale.",

      image:image,

      imageAlt:
        "TechWrap business and technology solutions",

      columns: [
        {
          title:
            "BUSINESS",

          items: [
            {
              title:
                "Startups",

              description:
                "Launch and validate ideas faster.",

              path:
                "/solutions/Startup/Mainstartup",
            },

            {
              title:
                "Enterprise",

              description:
                "Scalable solutions for large teams.",

              path:
                "/solutions/Enterprise/Mainenterprise",
            },
          ],
        },

        {
          title:
            "TEAMS",

          items: [
            {
              title:
                "Agencies",

              description:
                "Deliver better digital projects.",

              path:
                "/Solutions/Agency/Mainagency",
            },

            {
              title:
                "Developers",

              description:
                "Modern tools for developers.",

              path:
                "/Solutions/Developer/Maindev",
            },
          ],
        },
      ],
    },

    /* =====================================================
       RESOURCES
    ===================================================== */

    resources: {
      label: "RESOURCES",

      title:
        "Learn. Build. Grow.",

      description:
        "Technical knowledge, guides and engineering insights for modern teams.",

      image:resourceimage,

      imageAlt:
        "TechWrap resources and engineering knowledge",

      columns: [
        {
          title:
            "LEARN",

          items: [
            {
              title:
                "Blog",

              description:
                "Technology and product insights.",

              path:
                "/pages/Blog",
            },

            {
              title:
                "Guides",

              description:
                "Practical development guides.",

              path:
                "/pages/Guide",
            },
          ],
        },

        {
          title:
            "EXPLORE",

          items: [
            {
              title:
                "Case Studies",

              description:
                "Real-world TechWrap solutions.",

              path:
                "/pages/Techsucessstorypage",
            },

            {
              title:
                "Documentation",

              description:
                "APIs and technical documentation.",

              path:
                "/pages/Documentation",
            },
          ],
        },
      ],
    },

    /* =====================================================
       COMPANY
    ===================================================== */

    company: {
      label:
        "COMPANY",

      title:
        "Technology with purpose.",

      description:
        "TechWrap helps ambitious businesses build the next generation of digital products.",

      image:companyimage,

      imageAlt:
        "TechWrap team and company",

      columns: [
        {
          title:
            "COMPANY",

          items: [
            {
              title:
                "About Us",

              description:
                "Learn more about TechWrap.",

              path:
                "/pages/Aboutus",
            },

            {
              title:
                "Careers",

              description:
                "Join our technology team.",

              path:
                "/Company/Career/Maincareer",
            },
          ],
        },

        {
          title:
            "CONNECT",

          items: [
            {
              title:
                "Contact",

              description:
                "Talk to the TechWrap team.",

              path:
                "/Company/Contact/Maincontact",
            },
          ],
        },
      ],
    },
  };

  const data =
    menuData[type];

  return (
    <div
      className="tw-mega-menu"
      onMouseEnter={(event) =>
        event.stopPropagation()
      }
    >

      <div className="tw-mega-inner">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="tw-mega-columns">

          {data.columns.map(
            (
              column,
              columnIndex
            ) => (

              <div
                className="tw-mega-column"
                key={
                  columnIndex
                }
              >

                <span className="tw-mega-label">
                  {
                    column.title
                  }
                </span>

                {column.items.map(
                  (item) => (

                    <Link
                      key={
                        item.title
                      }
                      to={
                        item.path
                      }
                      className="tw-mega-link"
                      onClick={
                        closeMenu
                      }
                    >

                      

                      <span className="tw-mega-link-content">

                        <strong>
                          {
                            item.title
                          }
                        </strong>

                        <small>
                          {
                            item.description
                          }
                        </small>

                      </span>

                    </Link>

                  )
                )}

              </div>

            )
          )}

        </div>

        {/* =================================================
            RIGHT FEATURE — FULL IMAGE CARD
        ================================================= */}

        <div className="tw-mega-feature">

          {/* =================================================
              FEATURE IMAGE
          ================================================= */}

          <div className="tw-feature-media">

            <img
              src={data.image}
              alt={data.imageAlt}
              loading="lazy"
            />

            <div className="tw-feature-media-overlay" />

          </div>

          {/* =================================================
              FEATURE CONTENT
          ================================================= */}

          <div className="tw-feature-content">

            <span className="tw-feature-label">
              {data.label}
            </span>

            <h3>
              {data.title}
            </h3>

            <p>
              {data.description}
            </p>

            <Link
              to={
                type ===
                "products"
                  ? "/Pages/Products"
                  : type ===
                    "solutions"
                  ? "/solutions"
                  : type ===
                    "resources"
                  ? "/resources"
                  : "/company"
              }
              onClick={
                closeMenu
              }
              className="tw-feature-link"
            >
             
              
              
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;