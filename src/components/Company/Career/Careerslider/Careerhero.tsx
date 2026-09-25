
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Careerhero.css";

interface CareerSlide {
  title: string;
  description: string;
  image: string;
}

const slides: CareerSlide[] = [
  {
    title: "Build Your Career With TechWrap",
    description:
      "Join a team building modern digital products with React, TypeScript, Java, Python, AI and cloud technologies.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "Build Products That Matter",
    description:
      "Work on SaaS platforms, enterprise applications and AI-powered products that solve real business problems.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "Grow With Modern Technology",
    description:
      "Develop your engineering skills across React, Spring Boot, Node.js, Python, REST APIs, databases and cloud.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "Learn. Collaborate. Ship.",
    description:
      "Work with developers, designers and product teams in an environment focused on learning, collaboration and shipping.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "Your Next Opportunity Starts Here",
    description:
      "Bring your curiosity, engineering mindset and ideas. Build your future while helping TechWrap build what's next.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85",
  },
];

const CareerHero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  // Apply Now button navigation
  const handleApply = () => {
    navigate("/Company/Career/jobapp/JobApp");
  };

  // Explore More button - slight smooth scroll only
  const handleExplore = () => {
    window.scrollBy({
      top: 120,
      behavior: "smooth",
    });
  };

  return (
    <section className="career-hero">
      <div className="career-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`career-slide ${
              index === activeSlide ? "career-slide-active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="career-slide-image"
            />

            <div className="career-overlay" />

            <div className="career-content">
              <div className="career-eyebrow">
                <span className="career-eyebrow-dot" />
                TECHWRAP CAREERS
              </div>

              <h1 key={`title-${activeSlide}`}>
                {slide.title}
              </h1>

              <p key={`description-${activeSlide}`}>
                {slide.description}
              </p>

              <div className="career-tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Spring Boot</span>
                <span>Python</span>
                <span>AI</span>
                <span>Cloud</span>
              </div>

              <div className="career-actions">
                <button
                  type="button"
                  className="career-apply-btn"
                  onClick={handleApply}
                >
                  <span>Apply Now</span>
                </button>

                <button
                  type="button"
                  className="career-explore-btn"
                  onClick={handleExplore}
                >
                  <span>Explore More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="career-progress">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`career-progress-line ${
              index === activeSlide ? "active" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerHero;
