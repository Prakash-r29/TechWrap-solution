import React from "react";
import "./Intlogo.css";

interface IntegrationLogo {
  name: string;
  logo: string;
  category: string;
}

const integrations: IntegrationLogo[] = [
  {
    name: "Stripe",
    logo: "https://cdn.simpleicons.org/stripe/2563EB",
    category: "Payments",
  },
  {
    name: "Razorpay",
    logo: "https://cdn.simpleicons.org/razorpay/2563EB",
    category: "Payments",
  },
  {
    name: "AWS",
    logo:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=200&q=85",
    category: "Cloud",
  },
  {
    name: "OpenAI",
    logo:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&q=85",
    category: "AI",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.simpleicons.org/googlecloud/2563EB",
    category: "Cloud",
  },
  {
    name: "Azure",
    logo:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=85",
    category: "Cloud",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb/2563EB",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql/2563EB",
    category: "Database",
  },
  {
    name: "MySQL",
    logo: "https://cdn.simpleicons.org/mysql/2563EB",
    category: "Database",
  },
  {
    name: "Slack",
    logo:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=200&q=85",
    category: "Communication",
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/2563EB",
    category: "Development",
  },
  {
    name: "Firebase",
    logo: "https://cdn.simpleicons.org/firebase/2563EB",
    category: "Backend",
  },
];

const PopularIntegrations: React.FC = () => {
  /*
    Duplicate the logos so the CSS animation can create
    a seamless infinite scrolling effect.
  */
  const firstRow = integrations.slice(0, 6);
  const secondRow = integrations.slice(6, 12);

  return (
    <section className="popular-integrations-section">

      {/* Background effects */}
      <div className="popular-bg-grid"></div>

      <div className="popular-glow popular-glow-one"></div>
      <div className="popular-glow popular-glow-two"></div>

      <div className="container">

        {/* ================= HEADING ================= */}

        <div className="popular-heading">

          <div className="popular-label">
            <span></span>
            POPULAR INTEGRATIONS
          </div>

          <h2>
            Connect with the
            <span> tools you already use.</span>
          </h2>

          <p>
            Seamlessly connect TechWrap with the platforms,
            services and technologies powering modern businesses.
          </p>

        </div>


        {/* ================= LOGO WALL ================= */}

        <div className="integration-logo-wall">

          {/* Row 1 */}
          <div className="logo-marquee">

            <div className="logo-track">

              {[...firstRow, ...firstRow].map(
                (item, index) => (

                  <div
                    className="integration-logo-card"
                    key={`row1-${item.name}-${index}`}
                  >

                    <div className="logo-icon">

                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        loading="lazy"
                      />

                    </div>

                    <div className="logo-info">

                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        {item.category}
                      </span>

                    </div>

                    <div className="logo-pulse"></div>

                  </div>

                )
              )}

            </div>

          </div>


          {/* Row 2 */}
          <div className="logo-marquee logo-marquee-reverse">

            <div className="logo-track">

              {[...secondRow, ...secondRow].map(
                (item, index) => (

                  <div
                    className="integration-logo-card"
                    key={`row2-${item.name}-${index}`}
                  >

                    <div className="logo-icon">

                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        loading="lazy"
                      />

                    </div>

                    <div className="logo-info">

                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        {item.category}
                      </span>

                    </div>

                    <div className="logo-pulse"></div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>


        {/* ================= BOTTOM STATUS ================= */}

        <div className="popular-status">

          <span className="status-dot"></span>

          <span>
            100+ integrations available
          </span>

          <span className="status-line"></span>

          <span>
            APIs · Cloud · AI · Payments · Databases
          </span>

        </div>

      </div>

    </section>
  );
};

export default PopularIntegrations;