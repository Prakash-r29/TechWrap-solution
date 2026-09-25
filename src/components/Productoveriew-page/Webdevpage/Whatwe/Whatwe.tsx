import React from "react";
import "./Whatwe.css";
import { Link } from "react-router-dom";

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "High-performance websites designed to convert visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    slug: "business-websites",
  },

  {
    number: "02",
    title: "SaaS Applications",
    description:
      "Scalable web platforms built for modern businesses and growing teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    slug: "saas-applications",
  },

  {
    number: "03",
    title: "E-Commerce",
    description:
      "Secure and optimized online shopping experiences that drive sales.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    slug: "e-commerce",
  },

  {
    number: "04",
    title: "Web Portals",
    description:
      "Customer, employee and partner portals built around your business needs.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    slug: "web-portals",
  },

  {
    number: "05",
    title: "Admin Dashboards",
    description:
      "Data-rich dashboards and management systems that simplify decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    slug: "admin-dashboards",
  },

  {
    number: "06",
    title: "Custom Applications",
    description:
      "Tailored web applications built around your unique workflow.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
    slug: "custom-applications",
  },
];

const WhatWeBuild: React.FC = () => {
  return (
    <section className="what-we-build" id="solutions">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="build-grid"></div>

      <div className="container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="build-heading">

          <div className="build-label">
            <span></span>
            WHAT WE BUILD
          </div>

          <h2>
            Digital products built
            <br />
            <span>for real businesses.</span>
          </h2>

          <p>
            From high-converting websites to powerful SaaS
            platforms, we build digital experiences designed
            to perform, scale and grow with your business.
          </p>

        </div>


        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="build-grid-cards">

          {services.map((service) => (

            <article
              className="build-card"
              key={service.number}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="build-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <div
                  className="image-overlay"
                  aria-hidden="true"
                ></div>

                <span className="build-number">
                  {service.number}
                </span>

                <span
                  className="build-image-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="build-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                {/* =================================================
                    EXPLORE BUTTON

                    IMPORTANT:
                    The slug is sent as a HASH.

                    Example:
                    /Productoveriew-page/Webdevpage/Whatwe/WebProductdetails#e-commerce

                    WebProductDetails.tsx reads this hash and
                    automatically scrolls to the matching section.
                ================================================= */}

                <Link
                  to={`/Productoveriew-page/Webdevpage/Whatwe/WebProductdetails#${service.slug}`}
                  className="build-link"
                  aria-label={`Explore ${service.title}`}
                >

                  <span className="build-link-text">
                    Explore
                  </span>

                  <span
                    className="build-link-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhatWeBuild;