
import "./TrustedBy.css";

import google from "../../assets/image/google.webp";
import notion from "../../assets/image/notion.jpg";
import ebay from "../../assets/image/ebay.webp";
import workday from "../../assets/image/workday.webp";
import okta from "../../assets/image/okta.webp";
import uber from "../../assets/image/uber.webp";
import meta from "../../assets/image/meta.jpg";


/* =========================================================
   TRUSTED COMPANY LOGOS
========================================================= */

const cards = [
  { logo: google, width: "260px" },
  { logo: notion, width: "180px" },
  { logo: uber, width: "220px" },
  { logo: ebay, width: "220px" },
  { logo: workday, width: "220px" },
  { logo: okta, width: "200px" },
  { logo: meta, width: "220px" },
];


/* =========================================================
   DUPLICATE LOGOS FOR INFINITE SLIDER
========================================================= */

const slider = [...cards, ...cards];


/* =========================================================
   TRUSTED BY COMPONENT
========================================================= */

function TrustedBy() {

  return (

    <section className="clients-section py-5">

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="container">

        <h2 className="trusted-by-title text-center fw-bold mb-3">

          Trusted by{" "}

          <span className="trusted-by-accent">
            Leading
          </span>{" "}

          companies

        </h2>


        <p className="trusted-by-subtitle text-center mb-5">

          Inspired by our customers. Built with love.

        </p>

      </div>


      {/* =====================================================
          LOGO SLIDER
      ===================================================== */}

      <div className="logo-slider">

        <div className="logo-track">

          {slider.map((item, index) => (

            <div
              className="logo-card"
              key={index}
              style={{ width: item.width }}
            >

              <img
                src={item.logo}
                alt="Trusted company"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}


export default TrustedBy;
