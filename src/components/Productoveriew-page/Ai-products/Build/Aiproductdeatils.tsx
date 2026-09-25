
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Aiproductdeatils.css";

/* ============================================================
   AI PRODUCT DETAIL INTERFACE
============================================================ */

interface AIProductDetail {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  icon: string;
  tag: string;

  stat: string;
  statLabel: string;

  features: string[];

  technologies: string[];

  useCases: string[];

  workflow: string[];
}

/* ============================================================
   AI PRODUCT DETAILS DATA
============================================================ */

const aiProductDetails: AIProductDetail[] = [
  /* =========================================================
     01 — AI ASSISTANTS
  ========================================================= */

  {
    slug: "ai-assistants",
    number: "01",
    title: "AI Assistants",

    eyebrow: "INTELLIGENT DIGITAL ASSISTANCE",

    description:
      "Build intelligent AI assistants that understand natural language, answer questions, retrieve information and help users complete everyday tasks. TechWrap creates assistant experiences that feel natural, useful and connected to your business.",

    heroDescription:
      "AI assistants designed to understand, respond and help your customers and teams work smarter.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1500&q=90",

    imageAlt:
      "Artificial intelligence interface representing an AI assistant",

    icon: "🤖",

    tag: "SMART ASSISTANCE",

    stat: "24/7",
    statLabel: "AI Assistance",

    features: [
      "Natural language conversations",
      "Context-aware responses",
      "Knowledge base integration",
      "Customer support automation",
      "Multi-step task assistance",
      "Human handoff workflows",
    ],

    technologies: [
      "React",
      "TypeScript",
      "AI APIs",
      "LLMs",
      "REST APIs",
      "RAG",
    ],

    useCases: [
      "Customer support",
      "Internal employee assistant",
      "Product assistant",
      "Knowledge management",
    ],

    workflow: [
      "Understand",
      "Retrieve",
      "Respond",
      "Assist",
    ],
  },

  /* =========================================================
     02 — AI AGENTS
  ========================================================= */

  {
    slug: "ai-agents",
    number: "02",
    title: "AI Agents",

    eyebrow: "AUTONOMOUS INTELLIGENCE",

    description:
      "Create autonomous AI agents capable of reasoning through problems, making decisions, using tools and completing multi-step business workflows. AI agents can move beyond simple conversations and actively perform tasks.",

    heroDescription:
      "Autonomous AI systems that reason, make decisions and execute complex business workflows.",

    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1500&q=90",

    imageAlt:
      "Futuristic artificial intelligence network representing autonomous AI agents",

    icon: "🧠",

    tag: "AUTONOMOUS AI",

    stat: "01 → ∞",
    statLabel: "AI Workflows",

    features: [
      "Autonomous task execution",
      "Multi-step reasoning",
      "Tool and API usage",
      "Workflow orchestration",
      "Decision automation",
      "Human approval checkpoints",
    ],

    technologies: [
      "React",
      "TypeScript",
      "LLMs",
      "AI Agents",
      "REST APIs",
      "Python",
    ],

    useCases: [
      "Business process automation",
      "Research agents",
      "Sales agents",
      "Operations automation",
    ],

    workflow: [
      "Observe",
      "Reason",
      "Plan",
      "Act",
    ],
  },

  /* =========================================================
     03 — GENERATIVE AI
  ========================================================= */

  {
    slug: "generative-ai",
    number: "03",
    title: "Generative AI",

    eyebrow: "CREATE WITH INTELLIGENCE",

    description:
      "Build powerful generative AI experiences that create text, code, images, ideas and structured content. TechWrap integrates modern AI models into products that help teams create faster and work more creatively.",

    heroDescription:
      "Generative AI experiences that transform ideas into content, code, images and intelligent outputs.",

    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1500&q=90",

    imageAlt:
      "Generative artificial intelligence concept",

    icon: "✨",

    tag: "GENERATIVE AI",

    stat: "∞",
    statLabel: "Creative Output",

    features: [
      "AI content generation",
      "Code generation",
      "Image generation",
      "Prompt engineering",
      "Structured AI outputs",
      "Custom AI workflows",
    ],

    technologies: [
      "React",
      "TypeScript",
      "LLMs",
      "AI APIs",
      "Prompt Engineering",
      "REST APIs",
    ],

    useCases: [
      "Marketing content",
      "Developer tools",
      "Content platforms",
      "Creative applications",
    ],

    workflow: [
      "Prompt",
      "Generate",
      "Refine",
      "Publish",
    ],
  },

  /* =========================================================
     04 — AI AUTOMATION
  ========================================================= */

  {
    slug: "ai-automation",
    number: "04",
    title: "AI Automation",

    eyebrow: "AUTOMATE WHAT SLOWS YOU DOWN",

    description:
      "Connect AI with your existing business processes to eliminate repetitive work, accelerate operations and improve productivity. TechWrap combines AI intelligence with APIs, workflows and automation systems.",

    heroDescription:
      "Intelligent automation that connects AI to real business processes and removes repetitive work.",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=90",

    imageAlt:
      "Technology automation and connected digital systems",

    icon: "⚙️",

    tag: "AUTOMATION",

    stat: "70%+",
    statLabel: "Less Manual Work",

    features: [
      "Workflow automation",
      "AI-powered decisions",
      "API integrations",
      "Document automation",
      "Notification workflows",
      "Approval systems",
    ],

    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "Webhooks",
      "AI APIs",
      "Cloud",
    ],

    useCases: [
      "Operations",
      "Customer service",
      "Document processing",
      "Back-office automation",
    ],

    workflow: [
      "Trigger",
      "Understand",
      "Automate",
      "Monitor",
    ],
  },

  /* =========================================================
     05 — PREDICTIVE ANALYTICS
  ========================================================= */

  {
    slug: "predictive-analytics",
    number: "05",
    title: "Predictive Analytics",

    eyebrow: "TURN DATA INTO DECISIONS",

    description:
      "Transform business data into actionable intelligence using analytics, machine learning and predictive models. Build systems that identify patterns, forecast outcomes and help teams make better decisions.",

    heroDescription:
      "Predictive intelligence that transforms historical data into future-focused business decisions.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=90",

    imageAlt:
      "Analytics dashboard showing predictive business intelligence",

    icon: "📊",

    tag: "DATA INTELLIGENCE",

    stat: "Real-time",
    statLabel: "Insights",

    features: [
      "Business intelligence dashboards",
      "Predictive models",
      "Trend analysis",
      "Real-time analytics",
      "Data visualization",
      "Decision intelligence",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Charts",
      "REST APIs",
      "Python",
      "PostgreSQL",
    ],

    useCases: [
      "Sales forecasting",
      "Customer analytics",
      "Risk analysis",
      "Business intelligence",
    ],

    workflow: [
      "Collect",
      "Analyze",
      "Predict",
      "Decide",
    ],
  },

  /* =========================================================
     06 — AI INTEGRATIONS
  ========================================================= */

  {
    slug: "ai-integrations",
    number: "06",
    title: "AI Integrations",

    eyebrow: "BRING AI INTO YOUR PRODUCTS",

    description:
      "Add intelligent capabilities to existing applications, platforms and workflows. TechWrap integrates AI models, APIs, knowledge systems and automation into your existing technology stack without requiring you to rebuild everything.",

    heroDescription:
      "Connect modern AI capabilities with your existing applications, platforms and business systems.",

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=90",

    imageAlt:
      "Cloud infrastructure and connected technology systems",

    icon: "🔗",

    tag: "AI CONNECTIVITY",

    stat: "100%",
    statLabel: "Connected",

    features: [
      "AI API integration",
      "Existing application integration",
      "Knowledge base connection",
      "CRM integrations",
      "Business system integration",
      "Custom AI workflows",
    ],

    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "Webhooks",
      "AI APIs",
      "Cloud",
    ],

    useCases: [
      "CRM systems",
      "SaaS platforms",
      "Internal applications",
      "Enterprise systems",
    ],

    workflow: [
      "Connect",
      "Integrate",
      "Automate",
      "Scale",
    ],
  },
];

/* ============================================================
   AI PRODUCT DETAILS COMPONENT
============================================================ */

const AIProductDetails: React.FC = () => {
  /* ==========================================================
     GET SLUG FROM ROUTE
  ========================================================== */

  const { slug } = useParams<{
    slug: string;
  }>();

  const navigate = useNavigate();

  /* ==========================================================
     FIND PRODUCT
  ========================================================== */

  const product = aiProductDetails.find(
    (item) =>
      item.slug.toLowerCase() ===
      (slug ?? "").toLowerCase()
  );

  /* ==========================================================
     START PAGE FROM TOP
  ========================================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [slug]);

  /* ==========================================================
     BACK TO PREVIOUS PAGE
  ========================================================== */

  const handleBack = () => {
    navigate(-1);
  };

  /* ==========================================================
     PRODUCT NOT FOUND
  ========================================================== */

  if (!product) {
    return (
      <main className="ai-product-details-page">

        <section className="ai-product-not-found">

          <div className="container">

            <div className="ai-not-found-content">

              <span>
                AI PRODUCT
              </span>

              <h1>
                Product not found.
              </h1>

              <p>
                The AI product you're looking for doesn't
                exist or the link may be incorrect.
              </p>

              <button
                type="button"
                className="ai-product-back-main"
                onClick={handleBack}
              >
                ← Back to AI Products
              </button>

            </div>

          </div>

        </section>

      </main>
    );
  }

  /* ==========================================================
     MAIN PRODUCT PAGE
  ========================================================== */

  return (
    <main className="ai-product-details-page">

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <button
        type="button"
        className="ai-product-back"
        onClick={handleBack}
        aria-label="Back to AI products"
      >

        <span>
          ←
        </span>

        <div>

          <small>
            BACK TO
          </small>

          <strong>
            AI Products
          </strong>

        </div>

      </button>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ai-product-hero">

        <div className="ai-product-grid"></div>

        <div className="ai-product-glow ai-glow-one"></div>

        <div className="ai-product-glow ai-glow-two"></div>

        <div className="ai-orbit ai-orbit-one"></div>

        <div className="ai-orbit ai-orbit-two"></div>

        <div className="container">

          <div className="ai-product-hero-layout">

            {/* HERO CONTENT */}

            <div className="ai-product-hero-content">

              <div className="ai-product-label">

                <span></span>

                TECHWRAP AI PRODUCTS

              </div>

              <div className="ai-product-number">

                {product.number} — 06

              </div>

              <div className="ai-product-hero-title-row">

                <div className="ai-product-hero-icon">

                  {product.icon}

                </div>

                <span className="ai-product-hero-tag">

                  {product.tag}

                </span>

              </div>

              <h1>

                {product.title}

                <br />

                <span>
                  built intelligently.
                </span>

              </h1>

              <p className="ai-product-hero-description">

                {product.heroDescription}

              </p>

              {/* =================================================
                  HERO ACTION BUTTONS
              ================================================= */}

              <div className="ai-product-hero-actions">

                {/* =================================================
                    FIRST BUTTON — START A PROJECT
                    PRIMARY / BLUE
                ================================================= */}

                <Link
                  to="/Company/Contact/Maincontact"
                  className="ai-product-primary-button"
                >

                  <span>
                    Start a Project
                  </span>

                  <span>
                    →
                  </span>

                </Link>


                {/* =================================================
                    SECOND BUTTON — EXPLORE SOLUTION
                    OUTLINE
                ================================================= */}

                <a
                  href="#ai-solution"
                  className="ai-product-secondary-button"
                >

                  <span>
                    Explore Solution
                  </span>

                  <span>
                    ↓
                  </span>

                </a>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="ai-product-hero-visual">

              <div className="ai-product-image-glow"></div>

              <div className="ai-product-hero-image">

                <img
                  src={product.image}
                  alt={product.imageAlt}
                />

                <div className="ai-product-image-overlay"></div>

                <div className="ai-product-image-content">

                  <span>
                    {product.tag}
                  </span>

                  <strong>
                    {product.workflow.join(" → ")}
                  </strong>

                </div>

                <div className="ai-image-corner ai-corner-one"></div>

                <div className="ai-image-corner ai-corner-two"></div>

              </div>


              {/* FLOATING STAT */}

              <div className="ai-product-floating-stat">

                <strong>
                  {product.stat}
                </strong>

                <small>
                  {product.statLabel}
                </small>

              </div>


              {/* FLOATING AI CHIP */}

              <div className="ai-floating-chip">

                <span className="ai-chip-dot"></span>

                AI POWERED

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section
        className="ai-product-overview"
        id="ai-solution"
      >

        <div className="container">

          <div className="ai-product-overview-grid">

            <div>

              <span className="ai-product-section-label">
                WHAT WE BUILD
              </span>

              <h2>

                Intelligence

                <br />

                <strong>
                  designed to work.
                </strong>

              </h2>

            </div>

            <div>

              <p>
                {product.description}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTION
      ===================================================== */}

      <section className="ai-product-solution">

        <div className="container">

          <div className="ai-product-section-heading">

            <span className="ai-product-section-label">
              {product.number} / 06
            </span>

            <div className="ai-product-eyebrow">
              {product.eyebrow}
            </div>

            <h2>

              Everything you need

              <br />

              to build <strong>smarter.</strong>

            </h2>

          </div>


          <div className="ai-product-solution-grid">

            {/* SOLUTION IMAGE */}

            <div className="ai-product-solution-visual">

              <div className="ai-solution-image">

                <img
                  src={product.image}
                  alt={product.imageAlt}
                />

                <div className="ai-solution-image-overlay"></div>

                <div className="ai-solution-number">
                  {product.number}
                </div>

                <div className="ai-solution-image-label">

                  <span>
                    TECHWRAP AI
                  </span>

                  <strong>
                    Intelligent by design.
                  </strong>

                </div>

              </div>


              <div className="ai-solution-stat">

                <strong>
                  {product.stat}
                </strong>

                <small>
                  {product.statLabel}
                </small>

              </div>

            </div>


            {/* SOLUTION CONTENT */}

            <div className="ai-product-solution-content">

              <div className="ai-product-index">
                {product.number} / 06
              </div>

              <div className="ai-product-eyebrow">
                {product.eyebrow}
              </div>

              <h2>
                {product.title}
              </h2>

              <p className="ai-product-description">
                {product.description}
              </p>


              {/* FEATURES */}

              <div className="ai-product-features">

                {product.features.map(
                  (feature, index) => (

                    <div
                      className="ai-product-feature"
                      key={feature}
                    >

                      <span className="ai-feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="ai-feature-check">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>

                    </div>

                  )
                )}

              </div>


              {/* TECHNOLOGIES */}

              <div className="ai-product-technologies">

                <span className="ai-tech-label">
                  TECHNOLOGY
                </span>

                <div className="ai-tech-list">

                  {product.technologies.map(
                    (technology) => (

                      <span
                        className="ai-tech-pill"
                        key={technology}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* PROJECT BUTTON */}

              <Link
                to="/Company/Contact/Maincontact"
                className="ai-product-primary-button"
              >

                <span>
                  Start a Project
                </span>

                <span>
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          USE CASES
      ===================================================== */}

      <section className="ai-usecases-section">

        <div className="container">

          <div className="ai-usecases-card">

            <div className="ai-usecases-content">

              <span className="ai-product-section-label">
                WHERE IT WORKS
              </span>

              <h2>

                Designed for

                <br />

                <strong>
                  real business use.
                </strong>

              </h2>

              <p>
                Turn AI capabilities into practical systems
                that support your customers, teams and
                business operations.
              </p>

            </div>


            <div className="ai-usecases-list">

              {product.useCases.map(
                (useCase, index) => (

                  <div
                    className="ai-usecase-item"
                    key={useCase}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>
                      {useCase}
                    </strong>

                    <b>
                      →
                    </b>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AIProductDetails;