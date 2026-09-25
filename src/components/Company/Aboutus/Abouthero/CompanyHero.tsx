import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CompanyHero.css";

interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

const slides: HeroSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "TECHWRAP • ENGINEERING",
    title: "Build With Modern Technology",
    description:
      "We build scalable digital products using React, TypeScript, Java, Spring Boot, Node.js, Python and modern cloud technologies.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Node.js",
      "Python",
      "Cloud",
    ],
  },

  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "TECHWRAP • COLLABORATION",
    title: "People Building Together",
    description:
      "Great products start with great collaboration. Our developers, designers and technology teams work together to turn ideas into real products.",
    tags: [
      "Teamwork",
      "Development",
      "UI/UX",
      "APIs",
      "Agile",
      "Innovation",
    ],
  },

  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "TECHWRAP • INNOVATION",
    title: "Turn Ideas Into Digital Products",
    description:
      "From modern web applications to AI-powered platforms, we combine engineering, automation and cloud technologies to build what comes next.",
    tags: [
      "AI",
      "Web Apps",
      "APIs",
      "Automation",
      "DevOps",
      "Cloud",
    ],
  },
];

const AboutHero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================================================
     AUTOMATIC SLIDE CHANGE
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     MANUAL SLIDE CHANGE
  ========================================================= */

  const changeSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="about-hero">

      {/* =====================================================
          BACKGROUND IMAGE SLIDER
      ===================================================== */}

      <div
        className="about-hero-slider"
        style={{
          transform: `translateX(-${activeSlide * 33.333333}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className={`about-hero-slide ${
              activeSlide === index ? "active" : ""
            }`}
            key={slide.title}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          >
            <div className="about-hero-image-overlay"></div>
          </div>
        ))}
      </div>

      {/* =====================================================
          DARK CINEMATIC OVERLAY
      ===================================================== */}

      <div className="about-hero-dark-overlay"></div>

      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <div className="about-hero-content">

        <div className="about-hero-eyebrow">
          <span className="about-hero-dot"></span>

          {slides[activeSlide].eyebrow}
        </div>

        {/* ===================================================
            ACTIVE CONTENT
        =================================================== */}

        <div className="about-hero-content-slider">

          <article
            key={slides[activeSlide].title}
            className="about-hero-content-item active"
          >

            <h1>
              {slides[activeSlide].title}
            </h1>

            <p>
              {slides[activeSlide].description}
            </p>

            {/* =================================================
                TECHNOLOGY TAGS
            ================================================= */}

            <div className="about-hero-tags">

              {slides[activeSlide].tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            {/* =================================================
                CONNECT WITH US
            ================================================= */}

            <div className="about-hero-actions">

              <Link
                to="/login"
                className="about-connect-btn"
              >
                <span>Connect With Us</span>

                <span className="about-connect-arrow">
                  →
                </span>
              </Link>

            </div>

          </article>

        </div>
      </div>

      {/* =====================================================
          BOTTOM SLIDE PROGRESS INDICATORS
      ===================================================== */}

      <div className="about-hero-progress">

        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`about-progress-item ${
              activeSlide === index ? "active" : ""
            }`}
            onClick={() => changeSlide(index)}
          >
            <span></span>
          </button>
        ))}

      </div>

    </section>
  );
};

export default AboutHero;