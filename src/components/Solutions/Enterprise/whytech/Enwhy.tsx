
import { useNavigate } from "react-router-dom";
import "./Enwhy.css";

type EnterpriseBenefit = {
  number: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const benefits: EnterpriseBenefit[] = [
  {
    number: "01",
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Secure architecture designed for business-critical applications, APIs and enterprise data.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    tags: ["Security", "API", "Auth"],
  },

  {
    number: "02",
    icon: "📈",
    title: "Scalable Architecture",
    description:
      "Build systems that can handle growing users, workloads, integrations and business operations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Cloud", "Scale", "Architecture"],
  },

  {
    number: "03",
    icon: "🔗",
    title: "Seamless Integrations",
    description:
      "Connect CRM, ERP, payment platforms, databases and third-party enterprise systems.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    tags: ["REST API", "CRM", "ERP"],
  },

  {
    number: "04",
    icon: "🤖",
    title: "AI-Ready",
    description:
      "Add intelligent automation, AI assistants and data-driven workflows to existing systems.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    tags: ["AI", "Automation", "ML"],
  },

  {
    number: "05",
    icon: "☁️",
    title: "Cloud-Native",
    description:
      "Modern cloud infrastructure, CI/CD and deployment strategies built for reliable growth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    tags: ["Cloud", "DevOps", "CI/CD"],
  },

  {
    number: "06",
    icon: "⚡",
    title: "Faster Innovation",
    description:
      "Modern engineering practices help enterprise teams reduce development cycles and ship faster.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tags: ["Agile", "React", "DevOps"],
  },
];

function WhyEnterprisesChoose() {
  const navigate = useNavigate();

  return (
    <section className="why-enterprises">

      {/* Background */}

      <div className="enterprise-bg-grid"></div>

      <div className="enterprise-glow enterprise-glow-one"></div>
      <div className="enterprise-glow enterprise-glow-two"></div>


      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="enterprise-benefit-header">

          <div className="enterprise-benefit-label">

            <span className="enterprise-label-dot"></span>

            WHY ENTERPRISES CHOOSE TECHWRAP

            <span className="enterprise-label-line"></span>

          </div>


          <h2>
            Built for the demands of
            <span> modern enterprise.</span>
          </h2>


          <p>
            From secure architecture to AI-powered automation,
            TechWrap helps enterprises modernize, integrate and
            scale with confidence.
          </p>

        </div>


        {/* =================================================
            BENEFIT CARDS
        ================================================= */}

        <div className="row g-4">

          {benefits.map((benefit, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={benefit.number}
            >

              <article
                className="enterprise-benefit-card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* IMAGE */}

                <div className="enterprise-card-image">

                  <img
                    src={benefit.image}
                    alt={benefit.title}
                  />


                  <div className="enterprise-image-overlay"></div>


                  {/* Animated scan */}

                  <div className="enterprise-image-scan"></div>


                  {/* Number */}

                  <span className="enterprise-card-number">
                    {benefit.number}
                  </span>


                  {/* Icon */}

                  <div className="enterprise-card-icon">
                    {benefit.icon}
                  </div>


                  {/* Status */}

                  <span className="enterprise-card-status">

                    <span></span>

                    ENTERPRISE READY

                  </span>

                </div>


                {/* CONTENT */}

                <div className="enterprise-card-content">

                  <div className="enterprise-card-title-row">

                    <h3>
                      {benefit.title}
                    </h3>

                    <span className="enterprise-card-arrow">
                      ↗
                    </span>

                  </div>


                  <p>
                    {benefit.description}
                  </p>


                  {/* TECHNOLOGY TAGS */}

                  <div className="enterprise-card-tags">

                    {benefit.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>


                  {/* BOTTOM */}

                  <div className="enterprise-card-bottom">

                    


                    <div className="enterprise-card-progress">

                      <span></span>

                    </div>

                  </div>

                </div>

              </article>

            </div>

          ))}

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="enterprise-benefit-cta">

          <div className="enterprise-cta-left">

            <span className="enterprise-cta-pulse"></span>

            <div>

              <strong>
                Ready to modernize your enterprise?
              </strong>

              <p>
                Build secure, scalable and AI-ready systems with TechWrap.
              </p>

            </div>

          </div>


          {/* React Router Navigation */}

          <button
            type="button"
            onClick={() => navigate("/Company/Contact/Maincontact")}
            className="enterprise-expert-button"
          >
            Talk to Our Experts

            <span>
              →
            </span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default WhyEnterprisesChoose;

