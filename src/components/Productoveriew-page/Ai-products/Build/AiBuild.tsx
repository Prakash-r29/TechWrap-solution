
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Aibuild.css";

interface AIProduct {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  tag: string;
}

const aiProducts: AIProduct[] = [
  {
    slug: "ai-assistants",
    title: "AI Assistants",
    description:
      "Intelligent assistants that understand users, answer questions and automate everyday tasks.",
    icon: "🤖",
    tag: "SMART ASSISTANCE",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90",
  },

  {
    slug: "ai-agents",
    title: "AI Agents",
    description:
      "Autonomous AI agents that reason, make decisions and execute complex business workflows.",
    icon: "🧠",
    tag: "AUTONOMOUS AI",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=90",
  },

  {
    slug: "generative-ai",
    title: "Generative AI",
    description:
      "Generate content, code, images and intelligent responses using modern generative AI.",
    icon: "✨",
    tag: "GENERATIVE AI",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=90",
  },

  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Connect AI with your business processes to reduce manual work and improve productivity.",
    icon: "⚙️",
    tag: "AUTOMATION",
    
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90",
  },

  {
    slug: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Turn business data into predictions, insights and decisions with intelligent analytics.",
    icon: "📊",
    tag: "DATA INTELLIGENCE",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90",
  },

  {
    slug: "ai-integrations",
    title: "AI Integrations",
    description:
      "Integrate AI capabilities into your existing applications, platforms and workflows.",
    icon: "🔗",
    tag: "AI CONNECTIVITY",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90",
  },
];

const AIBuildSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
  <section className="ai-build-section">

      {/* BACKGROUND */}

      <div className="ai-bg-grid"></div>

      <div className="ai-glow ai-glow-one"></div>
      <div className="ai-glow ai-glow-two"></div>

      <span className="ai-particle particle-one"></span>
      <span className="ai-particle particle-two"></span>
      <span className="ai-particle particle-three"></span>

      <div className="container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="ai-build-heading">

          <div className="ai-section-label">
            <span></span>
            WHAT WE BUILD
          </div>

          <h2>
            Intelligence that
            <br />
            <span>works for your business.</span>
          </h2>

          <p>
            From intelligent assistants to autonomous AI agents, we build
            practical AI products that solve real business problems and
            create measurable impact.
          </p>

        </div>


        {/* =================================================
            AI PRODUCT CARDS
        ================================================= */}

        <div className="ai-products-grid">

          {aiProducts.map((product, index) => (

            <article
              className={`ai-product-card ai-card-${index + 1}`}
              key={product.slug}
            >

              {/* IMAGE */}

              <div className="ai-card-image">

                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=90";
                  }}
                />

                <div className="ai-image-overlay"></div>

                <div className="ai-scan-line"></div>

              </div>


              {/* CONTENT */}

              <div className="ai-card-content">

                <div className="ai-card-top">

                  <div className="ai-card-icon">
                    {product.icon}
                  </div>

                  <span className="ai-card-tag">
                    {product.tag}
                  </span>

                </div>

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.description}
                </p>


                {/* =================================================
                    EXPLORE BUTTON
                ================================================= */}

                <Link
                  to={`/Productoveriew-page/Ai-products/Build/AiBuild/Aiproductdetails/${product.slug}`}
                  className="ai-card-link"
                >

                  <span className="ai-explore-text">
                    Explore
                  </span>

                  <span className="ai-explore-arrow">
                    →
                  </span>

                </Link>

              </div>

              <div className="ai-card-glow"></div>

            </article>

          ))}

        </div>


        {/* =================================================
            AI EVOLUTION
        ================================================= */}

        <div className="ai-evolution-card">

          <div className="ai-video-content">

            <div className="ai-section-label">

              <span></span>

              THE EVOLUTION OF AI

            </div>

            <h2>
              From automation
              <br />
              <span>to intelligence.</span>
            </h2>

            <p>
              AI has evolved from simple rule-based automation into
              intelligent systems capable of understanding, reasoning,
              generating and acting.
            </p>

            <div className="ai-video-stats">

              <div>
                <strong>01</strong>
                <span>Understand</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Reason</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Generate</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Act</span>
              </div>

            </div>

          </div>


          {/* VIDEO */}

          <div className="ai-video-wrapper">

            {!videoError ? (

              <video
                ref={videoRef}
                className="ai-evolution-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/ai-evolution-poster.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setVideoError(true)}
              >

                <source
                  src="/videos/ai-evolution.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.

              </video>

            ) : (

              <div className="ai-video-error">

                <div>

                  <span>⚠</span>

                  <strong>
                    Video unavailable
                  </strong>

                  <small>
                    Please check the video file path and format.
                  </small>

                </div>

              </div>

            )}


            <div className="ai-video-overlay"></div>


            {!videoError && (

              <button
                type="button"
                className="ai-video-center"
                onClick={toggleVideo}
                aria-label={
                  isPlaying
                    ? "Pause AI evolution video"
                    : "Play AI evolution video"
                }
              >

                <div className="ai-video-pulse"></div>

                <span>
                  {isPlaying ? "Ⅱ" : "▶"}
                </span>

              </button>

            )}


            <div className="ai-video-label">

              <span className="live-dot"></span>

              AI EVOLUTION

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AIBuildSection;

