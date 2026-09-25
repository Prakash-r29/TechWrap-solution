import React from "react";
import { Link } from "react-router-dom";
import "./Techstack.css";

interface TechStack {
  title: string;
  description: string;
  technologies: string[];
  logos: string[];
  icon: string;
  slug: string;
}

const techStacks: TechStack[] = [
  {
    title: "MERN Stack",
    description: "Modern SaaS platforms, dashboards and scalable web applications.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    logos: [
      "https://cdn.simpleicons.org/mongodb",
      "https://cdn.simpleicons.org/express",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/nodedotjs",
    ],
    icon: "⌘",
    slug: "mern-stack",
  },

  {
    title: "MEAN Stack",
    description: "Structured enterprise applications and business platforms.",
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
    logos: [
      "https://cdn.simpleicons.org/mongodb",
      "https://cdn.simpleicons.org/express",
      "https://cdn.simpleicons.org/angular",
      "https://cdn.simpleicons.org/nodedotjs",
    ],
    icon: "◇",
    slug: "mean-stack",
  },

  {
    title: "PERN Stack",
    description: "Data-intensive applications requiring powerful relational databases.",
    technologies: ["PostgreSQL", "Express.js", "React", "Node.js"],
    logos: [
      "https://cdn.simpleicons.org/postgresql",
      "https://cdn.simpleicons.org/express",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/nodedotjs",
    ],
    icon: "◈",
    slug: "pern-stack",
  },

  {
    title: "Java Full Stack",
    description: "Enterprise systems and reliable business applications.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    logos: [
      "https://cdn.simpleicons.org/openjdk",
      "https://cdn.simpleicons.org/springboot",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/mysql",
    ],
    icon: "☕",
    slug: "java-full-stack",
  },

  {
    title: "Python Full Stack",
    description: "AI-powered platforms, automation and data-driven applications.",
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    logos: [
      "https://cdn.simpleicons.org/python",
      "https://cdn.simpleicons.org/django",
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/postgresql",
    ],
    icon: "✦",
    slug: "python-full-stack",
  },

  {
    title: "Modern Frontend",
    description: "Fast, responsive and interactive digital experiences.",
    technologies: ["React", "TypeScript", "Bootstrap", "REST API"],
    logos: [
      "https://cdn.simpleicons.org/react",
      "https://cdn.simpleicons.org/typescript",
      "https://cdn.simpleicons.org/bootstrap",
      "https://cdn.simpleicons.org/postman",
    ],
    icon: "</>",
    slug: "modern-frontend",
  },
];

const TechnologyStack: React.FC = () => {
  return (
    <section className="technology-section">
      {/* Background decoration */}
      <div className="technology-grid"></div>

      <div className="technology-glow technology-glow-one"></div>
      <div className="technology-glow technology-glow-two"></div>

      <div className="container">
        {/* Heading */}
        <div className="technology-heading">
          <div className="technology-label">
            <span></span>
            TECHNOLOGY STACK
          </div>

          <h2>
            Built with technologies
            <span> that scale.</span>
          </h2>

          <p>
            We choose the right technology stack based on your product requirements, performance
            goals, scalability needs and development roadmap.
          </p>
        </div>

        {/* Stack Cards */}
        <div className="technology-grid-cards">
          {techStacks.map((stack, index) => (
            <article
              className="technology-card"
              key={stack.title}
              style={
                {
                  "--stack-delay": `${index * 0.08}s`,
                } as React.CSSProperties
              }
            >
              {/* Card top */}
              <div className="technology-card-top">
                <div className="technology-icon">{stack.icon}</div>
              </div>

              {/* Main content */}
              <div className="technology-card-content">
                <h3>{stack.title}</h3>

                <p>{stack.description}</p>

                {/* Technology Logos */}
                <div className="technology-logos">
                  {stack.logos.map((logo, logoIndex) => (
                    <div className="technology-logo" key={logoIndex}>
                      <img src={logo} alt={stack.technologies[logoIndex]} />
                    </div>
                  ))}
                </div>

                {/* Technology names */}
                <div className="technology-tags">
                  {stack.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  EXPLORE STACK NAVIGATION
              ================================================= */}

              <Link
                to={`/Productoveriew-page/Webdevpage/Techstack/Technologystackdetails#${stack.slug}`}
                className="technology-link"
                aria-label={`Explore ${stack.title}`}
              >
                <span>Explore Stack</span>
                <span aria-hidden="true">→</span>
              </Link>

              {/* Decorative elements */}
              <div className="technology-card-glow"></div>

              <div className="technology-card-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
