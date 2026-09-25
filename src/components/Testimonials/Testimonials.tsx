import { useEffect, useRef } from "react";
import { Reveal } from "../Reveal/Reveal";
import { useTestimonialSlider } from "../../hooks/useTestimonialSlider";
import type { TestimonialItem } from "../../types";
import "./Testimonials.css";

/*
 * These videos are being used as a visual look inside TechWrap:
 * team collaboration, development, company environment,
 * and project execution.
 *
 * Keep the same TestimonialItem structure so your existing
 * TypeScript type and slider continue to work.
 */
const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "team",
    videoSrc: "/videos/testimonial-1.mp4",
    posterSrc: "/videos/testimonial-1-poster.jpg",
    name: "TechWrap Team",
    role: "Product & Engineering",
    company: "TechWrap Solution",
    quote:
      "Ideas move faster when product, design, and engineering work together from the start.",
  },

  {
    id: "development",
    videoSrc: "/videos/testimonial-2.mp4",
    posterSrc: "/videos/testimonial-2-poster.jpg",
    name: "Development",
    role: "Engineering in Action",
    company: "TechWrap Solution",
    quote:
      "We turn requirements into reliable software through focused development, testing, and continuous iteration.",
  },

  {
    id: "collaboration",
    videoSrc: "/videos/testimonial-3.mp4",
    posterSrc: "/videos/testimonial-3-poster.jpg",
    name: "Project Collaboration",
    role: "Teamwork & Delivery",
    company: "TechWrap Solution",
    quote:
      "Clear communication keeps every project aligned — from the first discussion to every release.",
  },

  {
    id: "delivery",
    videoSrc: "/videos/testimonial-4.mp4",
    posterSrc: "/videos/testimonial-4-poster.jpg",
    name: "Project Delivery",
    role: "Build, Deploy & Scale",
    company: "TechWrap Solution",
    quote:
      "We stay involved throughout the build so the product is ready for real users, real workloads, and future growth.",
  },
];

function Testimonials() {
  const { index, next, prev, goTo, pause, resume } =
    useTestimonialSlider({
      length: TESTIMONIALS.length,
      autoplayMs: 7000,
    });

  const videoRefs =
    useRef<(HTMLVideoElement | null)[]>([]);

  const touchStartX =
    useRef<number | null>(null);

  /*
   * Play only the active video
   */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.currentTime = 0;

        video.play().catch(() => {
          /*
           * Browser autoplay may be blocked.
           * Poster image remains visible.
           */
        });
      } else {
        video.pause();
      }
    });
  }, [index]);


  /*
   * Swipe support for mobile
   */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current =
      e.touches[0].clientX;

    pause();
  };


  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }

    const delta =
      e.changedTouches[0].clientX -
      touchStartX.current;

    if (delta > 40) {
      prev();
    } else if (delta < -40) {
      next();
    }

    touchStartX.current = null;

    resume();
  };


  return (
    <section
      className="tw-testi tw-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="tw-container">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <Reveal className="tw-testi__head">
          <span className="tw-eyebrow">
            Inside TechWrap
          </span>

          <h2 id="testimonials-title">
            How we build, together.
          </h2>

          <p className="tw-testi__intro">
            Meet the people, process, and engineering work
            behind the products we build for our clients.
          </p>
        </Reveal>


        {/* =====================================================
            VIDEO / STORY SLIDER
        ====================================================== */}

        <Reveal
          className="tw-testi__slider"
          delayMs={80}
        >
          <div
            className="tw-testi__viewport"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={resume}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >

            {/* =================================================
                TRACK
            ================================================= */}

            <div
              className="tw-testi__track"
              style={{
                transform:
                  `translateX(-${index * 100}%)`,
              }}
            >

              {TESTIMONIALS.map((item, i) => (
                <article
                  className="tw-testi__slide"
                  key={item.id}
                  aria-hidden={i !== index}
                >

                  {/* =========================================
                      VIDEO
                  ========================================== */}

                  <div className="tw-testi__video-wrap">
                    <video
                      ref={(element) => {
                        videoRefs.current[i] =
                          element;
                      }}
                      src={item.videoSrc}
                      poster={item.posterSrc}
                      muted
                      loop
                      playsInline
                      controls
                      preload="none"
                      tabIndex={
                        i === index
                          ? 0
                          : -1
                      }
                    />
                  </div>


                  {/* =========================================
                      STORY CONTENT
                  ========================================== */}

                  <div className="tw-testi__meta">

                    <span className="tw-testi__label">
                      {item.role}
                    </span>

                    <p className="tw-testi__quote">
                      {item.quote}
                    </p>

                    <div className="tw-testi__person">
                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        {item.company}
                      </span>
                    </div>

                  </div>

                </article>
              ))}

            </div>


            {/* =================================================
                HIDDEN NAV BUTTONS
                Slider still works with swipe + dots
            ================================================= */}

            <button
              type="button"
              className="tw-testi__nav tw-testi__nav--prev"
              onClick={prev}
              aria-label="Previous story"
              hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>


            <button
              type="button"
              className="tw-testi__nav tw-testi__nav--next"
              onClick={next}
              aria-label="Next story"
              hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>


          {/* =====================================================
              DOTS
          ====================================================== */}

          <div
            className="tw-testi__dots"
            role="tablist"
            aria-label="Choose TechWrap story"
          >
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={
                  i === index
                }
                aria-label={`Show ${item.role}`}
                className={
                  `tw-testi__dot ${
                    i === index
                      ? "is-active"
                      : ""
                  }`
                }
                onClick={() => goTo(i)}
              />
            ))}
          </div>

        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;