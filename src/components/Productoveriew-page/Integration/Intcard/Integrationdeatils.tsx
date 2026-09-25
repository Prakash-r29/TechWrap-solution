import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  Lock,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import "./Integrationdetails.css";

interface IntegrationDetail {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  stats: {
    value: string;
    label: string;
  }[];
  whatWeBuild: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  capabilities: string[];
  technologies: string[];
  useCases: string[];
  workflow: {
    number: string;
    title: string;
    description: string;
  }[];
}

const integrationDetails: IntegrationDetail[] = [
  {
    slug: "api-integrations",
    number: "01",
    eyebrow: "API ENGINEERING",
    title: "Connect every",
    highlightedTitle: "digital system.",
    description:
      "Build reliable API ecosystems that connect your applications, services, data and third-party platforms through secure, scalable integrations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",
    icon: Network,
    stats: [
      { value: "REST", label: "API Architecture" },
      { value: "GraphQL", label: "Flexible Queries" },
      { value: "99.9%", label: "Integration Reliability" },
    ],
    whatWeBuild: [
      {
        title: "REST API Systems",
        description:
          "Design structured REST APIs that connect applications and business services efficiently.",
        icon: Code2,
      },
      {
        title: "GraphQL Platforms",
        description:
          "Create flexible GraphQL integrations for modern applications and data-driven experiences.",
        icon: Network,
      },
      {
        title: "Webhook Automation",
        description:
          "Connect real-time events and trigger automated workflows across multiple platforms.",
        icon: Zap,
      },
      {
        title: "API Security",
        description:
          "Protect APIs using authentication, authorization, rate limiting and secure communication.",
        icon: ShieldCheck,
      },
    ],
    capabilities: [
      "REST API development",
      "GraphQL integration",
      "Third-party API integration",
      "Webhook architecture",
      "OAuth authentication",
      "API monitoring",
    ],
    technologies: [
      "REST",
      "GraphQL",
      "Node.js",
      "Spring Boot",
      "JSON",
      "Webhooks",
    ],
    useCases: [
      "SaaS platforms",
      "Mobile applications",
      "Enterprise systems",
      "E-commerce platforms",
      "Business automation",
      "Third-party integrations",
    ],
    workflow: [
      {
        number: "01",
        title: "Analyze",
        description:
          "Understand your applications, APIs and integration requirements.",
      },
      {
        number: "02",
        title: "Architect",
        description:
          "Design a secure and scalable integration architecture.",
      },
      {
        number: "03",
        title: "Integrate",
        description:
          "Connect APIs, services and data using reliable integration patterns.",
      },
      {
        number: "04",
        title: "Monitor",
        description:
          "Track performance, failures and system health continuously.",
      },
    ],
  },

  {
    slug: "cloud-platforms",
    number: "02",
    eyebrow: "CLOUD INTEGRATION",
    title: "Build for the",
    highlightedTitle: "cloud at scale.",
    description:
      "Connect applications with modern cloud infrastructure to create flexible, secure and highly scalable digital platforms.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=90",
    icon: Cloud,
    stats: [
      { value: "AWS", label: "Cloud Platform" },
      { value: "24/7", label: "Infrastructure" },
      { value: "99.9%", label: "Availability" },
    ],
    whatWeBuild: [
      {
        title: "Cloud Architecture",
        description:
          "Design scalable cloud environments for modern applications and enterprise workloads.",
        icon: Cloud,
      },
      {
        title: "Cloud Migration",
        description:
          "Move existing applications and infrastructure into modern cloud environments.",
        icon: Rocket,
      },
      {
        title: "Container Platforms",
        description:
          "Build portable application environments using containers and modern deployment practices.",
        icon: Layers3,
      },
      {
        title: "Cloud Security",
        description:
          "Implement secure access, networking and infrastructure protection.",
        icon: Lock,
      },
    ],
    capabilities: [
      "AWS integration",
      "Azure integration",
      "Google Cloud integration",
      "Cloud migration",
      "Containerization",
      "Infrastructure monitoring",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
    useCases: [
      "Cloud-native applications",
      "Enterprise migration",
      "SaaS infrastructure",
      "Distributed systems",
      "High-traffic applications",
      "Production platforms",
    ],
    workflow: [
      {
        number: "01",
        title: "Assess",
        description:
          "Analyze your existing infrastructure and cloud requirements.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Create the target architecture and infrastructure strategy.",
      },
      {
        number: "03",
        title: "Deploy",
        description:
          "Deploy applications and services into secure cloud environments.",
      },
      {
        number: "04",
        title: "Scale",
        description:
          "Optimize infrastructure for performance, reliability and growth.",
      },
    ],
  },

  {
    slug: "ai-ml-services",
    number: "03",
    eyebrow: "AI INTEGRATION",
    title: "Bring intelligence",
    highlightedTitle: "into your products.",
    description:
      "Integrate AI models, LLMs, vector databases and intelligent APIs into applications to create smarter digital experiences.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=90",
    icon: Sparkles,
    stats: [
      { value: "LLM", label: "AI Models" },
      { value: "RAG", label: "Knowledge Systems" },
      { value: "24/7", label: "AI Automation" },
    ],
    whatWeBuild: [
      {
        title: "AI Assistants",
        description:
          "Build intelligent assistants that understand users and provide contextual responses.",
        icon: Sparkles,
      },
      {
        title: "LLM Applications",
        description:
          "Connect modern language models to business applications and workflows.",
        icon: Code2,
      },
      {
        title: "RAG Systems",
        description:
          "Build knowledge-aware AI systems using your business data and vector search.",
        icon: Database,
      },
      {
        title: "AI Automation",
        description:
          "Automate repetitive business workflows using intelligent AI services.",
        icon: Zap,
      },
    ],
    capabilities: [
      "LLM integration",
      "RAG applications",
      "AI assistants",
      "Vector databases",
      "Prompt engineering",
      "AI workflow automation",
    ],
    technologies: [
      "OpenAI",
      "LLMs",
      "RAG",
      "Vector DB",
      "Python",
      "REST APIs",
    ],
    useCases: [
      "AI assistants",
      "Customer support",
      "Document intelligence",
      "Knowledge platforms",
      "AI automation",
      "Recommendation systems",
    ],
    workflow: [
      {
        number: "01",
        title: "Discover",
        description:
          "Identify where AI can create measurable value in your product.",
      },
      {
        number: "02",
        title: "Connect",
        description:
          "Connect models, APIs, business data and knowledge sources.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Develop intelligent features and AI-powered workflows.",
      },
      {
        number: "04",
        title: "Optimize",
        description:
          "Improve accuracy, performance and production reliability.",
      },
    ],
  },

  {
    slug: "payment-systems",
    number: "04",
    eyebrow: "PAYMENT ENGINEERING",
    title: "Power secure",
    highlightedTitle: "digital transactions.",
    description:
      "Connect reliable payment infrastructure and create secure transaction experiences for modern digital businesses.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=90",
    icon: Zap,
    stats: [
      { value: "PCI", label: "Security Focus" },
      { value: "24/7", label: "Transactions" },
      { value: "99.9%", label: "Reliability" },
    ],
    whatWeBuild: [
      {
        title: "Payment Gateways",
        description:
          "Connect leading payment providers to your web and mobile applications.",
        icon: Zap,
      },
      {
        title: "Checkout Systems",
        description:
          "Create smooth and conversion-focused checkout experiences.",
        icon: Globe2,
      },
      {
        title: "Transaction APIs",
        description:
          "Build secure transaction workflows between applications and payment providers.",
        icon: Network,
      },
      {
        title: "Payment Security",
        description:
          "Protect sensitive payment workflows using secure integration practices.",
        icon: ShieldCheck,
      },
    ],
    capabilities: [
      "Payment gateway integration",
      "Checkout development",
      "Subscription billing",
      "Transaction APIs",
      "Payment webhooks",
      "Payment monitoring",
    ],
    technologies: [
      "Stripe",
      "Razorpay",
      "PayPal",
      "REST API",
      "Webhooks",
      "Secure APIs",
    ],
    useCases: [
      "E-commerce",
      "SaaS subscriptions",
      "Online marketplaces",
      "Booking platforms",
      "Digital products",
      "Mobile commerce",
    ],
    workflow: [
      {
        number: "01",
        title: "Plan",
        description:
          "Understand your payment model and transaction requirements.",
      },
      {
        number: "02",
        title: "Integrate",
        description:
          "Connect payment gateways and transaction services.",
      },
      {
        number: "03",
        title: "Secure",
        description:
          "Implement secure payment and webhook workflows.",
      },
      {
        number: "04",
        title: "Monitor",
        description:
          "Track transaction health and payment events.",
      },
    ],
  },

  {
    slug: "business-analytics",
    number: "05",
    eyebrow: "DATA & ANALYTICS",
    title: "Turn business data",
    highlightedTitle: "into decisions.",
    description:
      "Connect business systems, analytics platforms and dashboards to transform fragmented data into actionable insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
    icon: Database,
    stats: [
      { value: "360°", label: "Business Visibility" },
      { value: "Real-time", label: "Analytics" },
      { value: "24/7", label: "Insights" },
    ],
    whatWeBuild: [
      {
        title: "Analytics Dashboards",
        description:
          "Create interactive dashboards that provide clear visibility into business performance.",
        icon: Database,
      },
      {
        title: "CRM Integrations",
        description:
          "Connect CRM systems with your applications and business workflows.",
        icon: Globe2,
      },
      {
        title: "Data Pipelines",
        description:
          "Move and transform business data between connected platforms.",
        icon: Network,
      },
      {
        title: "Business Intelligence",
        description:
          "Create data-driven systems that help teams make faster decisions.",
        icon: Layers3,
      },
    ],
    capabilities: [
      "CRM integration",
      "Analytics platforms",
      "Business dashboards",
      "Data pipelines",
      "Reporting systems",
      "Real-time metrics",
    ],
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "REST API",
      "Analytics",
      "Dashboards",
    ],
    useCases: [
      "Business intelligence",
      "Sales analytics",
      "Customer analytics",
      "Operations dashboards",
      "Performance tracking",
      "Executive reporting",
    ],
    workflow: [
      {
        number: "01",
        title: "Collect",
        description:
          "Connect your business applications and data sources.",
      },
      {
        number: "02",
        title: "Transform",
        description:
          "Structure and prepare data for meaningful analysis.",
      },
      {
        number: "03",
        title: "Visualize",
        description:
          "Create dashboards and reports that reveal important patterns.",
      },
      {
        number: "04",
        title: "Decide",
        description:
          "Turn real-time insights into better business decisions.",
      },
    ],
  },

  {
    slug: "communication-tools",
    number: "06",
    eyebrow: "COMMUNICATION INTEGRATION",
    title: "Keep every team",
    highlightedTitle: "connected.",
    description:
      "Connect communication channels and notification systems to automate customer, employee and business communication.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    icon: MessageSquare,
    stats: [
      { value: "24/7", label: "Communication" },
      { value: "SMS", label: "Messaging" },
      { value: "API", label: "Automation" },
    ],
    whatWeBuild: [
      {
        title: "Messaging Systems",
        description:
          "Connect SMS and messaging platforms to your applications.",
        icon: MessageSquare,
      },
      {
        title: "Email Automation",
        description:
          "Automate transactional and business communication workflows.",
        icon: Globe2,
      },
      {
        title: "Team Integrations",
        description:
          "Connect internal workflows with platforms such as Slack.",
        icon: Network,
      },
      {
        title: "Notification Engines",
        description:
          "Build event-driven notification systems for important business events.",
        icon: Zap,
      },
    ],
    capabilities: [
      "Email integration",
      "SMS integration",
      "Slack integration",
      "WhatsApp workflows",
      "Push notifications",
      "Communication automation",
    ],
    technologies: [
      "Email APIs",
      "SMS APIs",
      "WhatsApp",
      "Slack",
      "Webhooks",
      "REST APIs",
    ],
    useCases: [
      "Customer notifications",
      "Transactional messaging",
      "Marketing automation",
      "Team communication",
      "Order notifications",
      "Support systems",
    ],
    workflow: [
      {
        number: "01",
        title: "Connect",
        description:
          "Connect your communication channels and business systems.",
      },
      {
        number: "02",
        title: "Automate",
        description:
          "Create event-driven communication workflows.",
      },
      {
        number: "03",
        title: "Personalize",
        description:
          "Deliver contextual and personalized communication.",
      },
      {
        number: "04",
        title: "Measure",
        description:
          "Track delivery, engagement and communication performance.",
      },
    ],
  },
];

const IntegrationDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const integration = integrationDetails.find(
    (item) => item.slug.toLowerCase() === slug?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!integration) {
    return (
      <main className="integration-details-page integration-not-found">
        <div className="integration-details-grid"></div>

        <div className="container">
          <div className="integration-not-found-card">
            <div className="integration-not-found-icon">
              <Network size={32} />
            </div>

            <span>INTEGRATION NOT FOUND</span>

            <h1>
              This integration
              <strong> doesn't exist.</strong>
            </h1>

            <p>
              The integration you're looking for could not be found.
            </p>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="integration-back-button"
            >
              <ArrowLeft size={17} />
              Back to Integrations
            </button>
          </div>
        </div>
      </main>
    );
  }

  const HeroIcon = integration.icon;

  return (
    <main className="integration-details-page">

      {/* ================= BACKGROUND ================= */}

      <div className="integration-details-grid"></div>

      <div className="integration-details-glow details-glow-one"></div>
      <div className="integration-details-glow details-glow-two"></div>

      <div className="details-floating-orb orb-one"></div>
      <div className="details-floating-orb orb-two"></div>

      {/* ================= HERO ================= */}

      <section className="integration-detail-hero">

        <div className="container">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="integration-back-button"
          >
            
            Back to Integrations
          </button>

          <div className="row align-items-center g-5">

            {/* LEFT */}

            <div className="col-lg-6">

              <div className="integration-detail-content">

                <div className="integration-detail-label">
                  <span></span>
                  {integration.eyebrow}
                </div>

                <div className="integration-detail-number">
                  {integration.number}
                </div>

                <h1>
                  {integration.title}
                  <br />
                  <span>{integration.highlightedTitle}</span>
                </h1>

                <p>
                  {integration.description}
                </p>

                <div className="integration-detail-actions">

                  <Link
                    to="/Company/Contact/Maincontact"
                    className="integration-detail-primary"
                  >
                    Start a Project
                    <ArrowRight size={17} />
                  </Link>

                  <button
                    type="button"
                    className="integration-detail-secondary"
                    onClick={() => {
                      window.scrollTo({
                        top: window.scrollY + 520,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Explore Solution
                    <span>↓</span>
                  </button>

                </div>

                {/* Stats */}

                <div className="integration-detail-stats">

                  {integration.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="col-lg-6">

              <div className="integration-detail-visual">

                <div className="detail-image-ring ring-one"></div>
                <div className="detail-image-ring ring-two"></div>

                <div className="integration-detail-image">

                  <img
                    src={integration.image}
                    alt={integration.title}
                  />

                  <div className="integration-detail-image-overlay"></div>

                  <div className="integration-detail-image-top">
                    <span>
                      <i></i>
                      SYSTEM CONNECTED
                    </span>

                    <b>
                      {integration.number}
                    </b>
                  </div>

                  <div className="integration-detail-icon">
                    <HeroIcon size={34} strokeWidth={1.5} />
                  </div>

                  <div className="integration-detail-image-bottom">
                    <span>
                      TECHWRAP
                    </span>

                    <strong>
                      Integration Engine
                    </strong>
                  </div>

                </div>

                {/* Floating card */}

                <div className="detail-floating-card detail-card-top">

                  <CheckCircle2 size={17} />

                  <div>
                    <small>STATUS</small>
                    <strong>Connected</strong>
                  </div>

                </div>

                <div className="detail-floating-card detail-card-bottom">

                  <Zap size={17} />

                  <div>
                    <small>PERFORMANCE</small>
                    <strong>99.9%</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHAT WE BUILD ================= */}

      <section className="integration-build-section">

        <div className="container">

          <div className="integration-section-heading">

            <div className="integration-detail-label">
              <span></span>
              WHAT WE BUILD
            </div>

            <h2>
              Integration solutions
              <span> built for real products.</span>
            </h2>

            <p>
              From architecture to production, we create reliable
              integrations designed around your business requirements.
            </p>

          </div>


          <div className="integration-build-grid">

            {integration.whatWeBuild.map((item, index) => {

              const ItemIcon = item.icon;

              return (
                <article
                  className="integration-build-card"
                  key={item.title}
                  style={
                    {
                      "--build-delay": `${index * 0.1}s`,
                    } as React.CSSProperties
                  }
                >

                  <div className="integration-build-number">
                    0{index + 1}
                  </div>

                  <div className="integration-build-icon">
                    <ItemIcon size={24} strokeWidth={1.7} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="integration-build-arrow">
                    →
                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= CAPABILITIES ================= */}

      <section className="integration-capabilities-section">

        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-5">

              <div className="integration-capabilities-heading">

                <div className="integration-detail-label">
                  <span></span>
                  CAPABILITIES
                </div>

                <h2>
                  Everything you need
                  <span> to connect.</span>
                </h2>

                <p>
                  We combine engineering, security and automation
                  to build integrations that remain reliable as
                  your product grows.
                </p>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="integration-capabilities-list">

                {integration.capabilities.map(
                  (capability, index) => (
                    <div
                      className="integration-capability"
                      key={capability}
                    >

                      <span>
                        <CheckCircle2 size={16} />
                      </span>

                      <strong>
                        {capability}
                      </strong>

                      <small>
                        0{index + 1}
                      </small>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TECHNOLOGY STACK ================= */}

      <section className="integration-tech-section">

        <div className="container">

          <div className="integration-section-heading centered">

            <div className="integration-detail-label">
              <span></span>
              TECHNOLOGY STACK
            </div>

            <h2>
              Built with modern
              <span> integration technology.</span>
            </h2>

          </div>

          <div className="integration-tech-cloud">

            {integration.technologies.map(
              (technology, index) => (
                <div
                  className="integration-tech-pill"
                  key={technology}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {technology}
                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* ================= USE CASES ================= */}

      <section className="integration-usecase-section">

        <div className="container">

          <div className="integration-section-heading">

            <div className="integration-detail-label">
              <span></span>
              USE CASES
            </div>

            <h2>
              Where this integration
              <span> makes an impact.</span>
            </h2>

          </div>

          <div className="integration-usecase-grid">

            {integration.useCases.map(
              (useCase, _index) => (
                <div
                  className="integration-usecase"
                  key={useCase}
                >

                  <div className="usecase-icon">
                    <Rocket size={17} />
                  </div>

                  <span>
                    {useCase}
                  </span>

                  <b>
                    →
                  </b>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* ================= WORKFLOW ================= */}

      <section className="integration-workflow-section">

        <div className="container">

          <div className="integration-section-heading centered">

            <div className="integration-detail-label">
              <span></span>
              OUR PROCESS
            </div>

            <h2>
              From connection
              <span> to production.</span>
            </h2>

            <p>
              A structured engineering process keeps every
              integration secure, scalable and production-ready.
            </p>

          </div>


          <div className="integration-workflow">

            <div className="workflow-line"></div>

            {integration.workflow.map(
              (step, index) => (
                <div
                  className="integration-workflow-step"
                  key={step.number}
                >

                  <div className="workflow-number">
                    {step.number}
                  </div>

                  <div className="workflow-content">

                    <span>
                      STEP {index + 1}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="integration-detail-cta">

        <div className="integration-cta-glow"></div>

        <div className="container">

          <div className="integration-cta-card">

            <div className="integration-cta-icon">
              <Sparkles size={25} />
            </div>

            <div>

              <span>
                READY TO CONNECT?
              </span>

              <h2>
                Let's build your
                <strong> integration.</strong>
              </h2>

              <p>
                Tell us what you need to connect and we'll help
                you design the right solution.
              </p>

            </div>

            <Link
              to="/Company/Contact/Maincontact"
              className="integration-cta-button"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default IntegrationDetails;