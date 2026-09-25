import { Link } from "react-router-dom";
import "./Whytech.css";

const benefits = [
  {
    number: "01",
    icon: "⚡",
    title: "Faster Time-to-Market",
    description:
      "Move from idea to MVP faster with focused development and reusable technology.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    tags: ["MVP", "React", "Agile"],
  },

  {
    number: "02",
    icon: "💻",
    title: "Full-Stack Development",
    description:
      "Build complete products with modern frontend, backend APIs and database architecture.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    tags: ["React", "TypeScript", "Spring Boot"],
  },

  {
    number: "03",
    icon: "🤖",
    title: "AI-Ready Solutions",
    description:
      "Integrate AI, automation and intelligent workflows into your startup product.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    tags: ["AI", "Automation", "API"],
  },

  {
    number: "04",
    icon: "☁️",
    title: "Cloud-Native Architecture",
    description:
      "Deploy your applications with infrastructure designed for reliability and growth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    tags: ["Cloud", "DevOps", "CI/CD"],
  },

  {
    number: "05",
    icon: "🔄",
    title: "Agile Development",
    description:
      "Iterate quickly, validate ideas and continuously improve your product.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    tags: ["Sprint", "Scrum", "Iteration"],
  },

  {
    number: "06",
    icon: "📊",
    title: "Scalable Infrastructure",
    description:
      "Prepare your product to handle more users, traffic and integrations as you grow.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    tags: ["API", "Cloud", "Scale"],
  },
];

function WhyStartupsChoose() {
  return (
    <section className="why-startups">

      {/* Background */}

      <div className="why-bg-grid"></div>

      <div className="why-glow why-glow-one"></div>
      <div className="why-glow why-glow-two"></div>


      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="why-header">

          <div className="why-label">

            <span className="why-label-dot"></span>

            WHY STARTUPS CHOOSE TECHWRAP

          </div>


          <h2>
            Built for startups that
            <span> move fast.</span>
          </h2>


          <p>
            We combine product thinking, modern engineering and
            scalable infrastructure to help startups build with
            confidence.
          </p>

        </div>


        {/* =================================================
            BENEFIT CARDS
        ================================================= */}

        <div className="row g-4">

          {benefits.map((benefit) => (

            <div
              className="col-lg-4 col-md-6"
              key={benefit.number}
            >

              <article className="startup-benefit-card">

                {/* IMAGE */}

                <div className="benefit-image">

                  <img
                    src={benefit.image}
                    alt={benefit.title}
                  />

                  <div className="benefit-image-overlay"></div>

                  <span className="benefit-number">
                    {benefit.number}
                  </span>

                  <span className="benefit-icon">
                    {benefit.icon}
                  </span>

                  <div className="benefit-scan"></div>

                </div>


                {/* CONTENT */}

                <div className="benefit-content">

                  <h3>
                    {benefit.title}
                  </h3>


                  <p>
                    {benefit.description}
                  </p>


                  {/* TECHNOLOGY TAGS */}

                  <div className="benefit-tags">

                    {benefit.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>


                  {/* BOTTOM */}

                </div>

              </article>

            </div>

          ))}

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="why-bottom">

          <div className="why-bottom-line"></div>


          <div className="why-bottom-content">

            <span className="why-bottom-dot"></span>


            <p>
              From <strong>idea</strong> to
              <strong> production</strong> — build faster,
              smarter and ready to scale.
            </p>


            {/* START YOUR STARTUP NAVIGATION */}

            <Link
              to="/Company/Contact/Maincontact"
              className="why-startup-link"
            >
              Start Your Startup
              <span>→</span>
            </Link>

          </div>


          <div className="why-bottom-line"></div>

        </div>

      </div>

    </section>
  );
}

export default WhyStartupsChoose;