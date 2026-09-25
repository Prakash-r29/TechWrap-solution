
import React from "react";
import { Link } from "react-router-dom";
import "./Intcard.css";

interface IntegrationItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  slug: string;
}

const integrations: IntegrationItem[] = [
  {
    number: "01",
    title: "API Integrations",
    description:
      "Connect REST APIs, GraphQL APIs and third-party services into a unified application ecosystem.",
    icon: "🔗",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    tags: ["REST API", "GraphQL", "Webhooks"],
    slug: "api-integrations",
  },

  {
    number: "02",
    title: "Cloud Platforms",
    description:
      "Connect AWS, Azure, Google Cloud and modern cloud infrastructure to build scalable systems.",
    icon: "☁️",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85",
    tags: ["AWS", "Azure", "Google Cloud"],
    slug: "cloud-platforms",
  },

  {
    number: "03",
    title: "AI & ML Services",
    description:
      "Connect AI models, LLMs, vector databases and intelligent APIs to your applications.",
    icon: "🤖",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    tags: ["LLM", "AI APIs", "Vector DB"],
    slug: "ai-ml-services",
  },

  {
    number: "04",
    title: "Payment Systems",
    description:
      "Integrate secure payment platforms and create reliable transaction workflows for your business.",
    icon: "💳",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Stripe", "Razorpay", "PayPal"],
    slug: "payment-systems",
  },

  {
    number: "05",
    title: "Business & Analytics",
    description:
      "Connect CRM platforms, analytics systems, dashboards and business applications.",
    icon: "📊",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["CRM", "Analytics", "Dashboards"],
    slug: "business-analytics",
  },

  {
    number: "06",
    title: "Communication Tools",
    description:
      "Connect email, SMS, WhatsApp, Slack and notification systems to automate communication.",
    icon: "💬",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tags: ["Email", "SMS", "Slack"],
    slug: "communication-tools",
  },
];

const IntegrationItem: React.FC = () => {
  return (
    <section className="integration-section">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="integration-bg-grid"></div>

      <div className="integration-glow integration-glow-one"></div>
      <div className="integration-glow integration-glow-two"></div>

      {/* ================= FLOATING PARTICLES ================= */}

      <span className="integration-particle particle-one"></span>
      <span className="integration-particle particle-two"></span>
      <span className="integration-particle particle-three"></span>

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="integration-heading">

          <div className="integration-label">
            <span></span>
            WHAT WE INTEGRATE
          </div>

          <h2>
            Connect your entire
            <span> technology ecosystem.</span>
          </h2>

          <p>
            Bring your applications, cloud platforms, AI services and business
            tools together through reliable, scalable integrations.
          </p>

        </div>

        {/* ================= CARDS ================= */}

        <div className="integration-cards">

          {integrations.map((item, index) => (

            <article
              className="integration-card"
              key={item.number}
              style={
                {
                  "--integration-delay": `${index * 0.12}s`,
                } as React.CSSProperties
              }
            >

              {/* ================= IMAGE ================= */}

              <div className="integration-card-image">

                <img
                  src={item.image}
                  alt={`${item.title} technology integration`}
                  loading="lazy"
                />

                <div className="integration-image-overlay"></div>

                <div className="integration-number">
                  {item.number}
                </div>

                <div className="integration-image-status">
                  <span></span>
                  CONNECTED
                </div>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="integration-card-content">

                <div className="integration-card-top">

                  <div className="integration-icon">
                    <span>{item.icon}</span>
                  </div>

                  <div className="integration-arrow">
                    ↗
                  </div>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {/* ================= TAGS ================= */}

                <div className="integration-tags">

                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                {/* ================= DYNAMIC DETAIL PAGE ================= */}

                <Link
                  to={`/Productoveriew-page/Integration/Intcard/Integrationdeatils/${item.slug}`}
                  className="integration-link"
                >
                  Explore integration
                  <span>→</span>
                </Link>

              </div>

              {/* ================= HOVER GLOW ================= */}

              <div className="integration-card-glow"></div>

              {/* ================= BOTTOM ANIMATED LINE ================= */}

              <div className="integration-card-line"></div>

            </article>

          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="integration-bottom">

          <div className="integration-bottom-dot"></div>

          <span>
            Need a custom integration?
          </span>

          <Link to="/Company/Contact/Maincontact">
            Let's connect
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default IntegrationItem;

