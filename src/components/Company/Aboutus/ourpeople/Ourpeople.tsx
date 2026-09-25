import React, { useState } from "react";
import "./Ourpeople.css";

interface Employee {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  bestAt: string;
  workLife: string;
  image: string;
  initials: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Senior Full Stack Developer",
    expertise: ["React", "TypeScript", "Node.js"],
    bestAt: "Building scalable web applications",
    workLife: "Flexible & collaborative",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    initials: "AK",
  },

  {
    id: 2,
    name: "Priya Sharma",
    role: "UI/UX & Product Designer",
    expertise: ["UI/UX", "Figma", "Design Systems"],
    bestAt: "Turning complex ideas into simple experiences",
    workLife: "Creative & balanced",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
    initials: "PS",
  },

  {
    id: 3,
    name: "Rahul Menon",
    role: "Java Backend Engineer",
    expertise: ["Java", "Spring Boot", "REST APIs"],
    bestAt: "Designing reliable backend systems",
    workLife: "Focused & flexible",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    initials: "RM",
  },

  {
    id: 4,
    name: "Sneha Raj",
    role: "AI & Python Developer",
    expertise: ["Python", "AI", "Machine Learning"],
    bestAt: "Building intelligent product features",
    workLife: "Learning & flexible",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    initials: "SR",
  },

  {
    id: 5,
    name: "Vikram Singh",
    role: "Cloud & DevOps Engineer",
    expertise: ["Docker", "Cloud", "CI/CD"],
    bestAt: "Making deployments faster and reliable",
    workLife: "Remote-friendly",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    initials: "VS",
  },

  {
    id: 6,
    name: "Ananya Iyer",
    role: "Product & Technology Lead",
    expertise: ["Product", "Architecture", "Agile"],
    bestAt: "Connecting business goals with technology",
    workLife: "People-first culture",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    initials: "AI",
  },
];

const OurPeople: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleEmployees = showAll
    ? employees
    : employees.slice(0, 3);

  return (
    <section className="people-section" id="our-people">

      {/* Background decoration */}
      <div className="people-bg-glow people-bg-glow-one"></div>
      <div className="people-bg-glow people-bg-glow-two"></div>

      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="people-header">

          <div className="people-eyebrow">
            <span className="people-eyebrow-dot"></span>
            THE PEOPLE BEHIND TECHWRAP
          </div>

          <h2>
            Meet the people
            <span> building what’s next.</span>
          </h2>

          <p>
            Great technology starts with great people. Our developers,
            designers, engineers and product thinkers work together to
            transform ideas into meaningful digital products.
          </p>

        </div>

        {/* =========================
            TEAM GRID
        ========================== */}
        <div className="people-grid">

          {visibleEmployees.map((employee, index) => (
            <article
              className={`people-card ${
                showAll && index >= 3
                  ? "people-card-revealed"
                  : ""
              }`}
              key={employee.id}
              style={
                showAll && index >= 3
                  ? ({
                      "--reveal-delay": `${(index - 3) * 120}ms`,
                    } as React.CSSProperties)
                  : undefined
              }
            >

              {/* Image */}
              <div className="people-image-wrapper">

                <img
                  src={employee.image}
                  alt={employee.name}
                  className="people-image"
                  loading="lazy"
                />

                <div className="people-image-gradient"></div>

                {/* Top badge */}
                <div className="people-number">
                  {String(employee.id).padStart(2, "0")}
                </div>

                {/* Expertise floating badge */}
                <div className="people-floating-badge">
                  <span className="badge-dot"></span>
                  TECHWRAP TEAM
                </div>

                {/* Hover profile */}
                <div className="people-hover-profile">
                  <div className="profile-mini-avatar">
                    {employee.initials}
                  </div>

                  <div>
                    <strong>{employee.name}</strong>
                    <span>{employee.role}</span>
                  </div>
                </div>

              </div>

              {/* Card Content */}
              <div className="people-card-content">

                <div className="people-card-heading">
                  <div>
                    <h3>{employee.name}</h3>
                    <span>{employee.role}</span>
                  </div>

                  <div className="people-arrow">
                    ↗
                  </div>
                </div>

                {/* Expertise */}
                <div className="people-expertise">
                  {employee.expertise.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {/* Best At */}
                <div className="people-info">

                  <div className="people-info-icon">
                    ✦
                  </div>

                  <div>
                    <small>BEST AT</small>
                    <p>{employee.bestAt}</p>
                  </div>

                </div>

                {/* Work life */}
                <div className="people-worklife">

                  <div className="worklife-icon">
                    ◌
                  </div>

                  <div>
                    <small>WORK-LIFE BALANCE</small>
                    <p>{employee.workLife}</p>
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* =========================
            SEE MORE
        ========================== */}
        <div className="people-action">

          <button
            className={`people-see-more ${
              showAll ? "is-expanded" : ""
            }`}
            onClick={() => setShowAll((prev) => !prev)}
            type="button"
          >
            <span>
              {showAll ? "Show Less" : "Meet More Of Our Team"}
            </span>

            <span className="people-button-arrow">
              {showAll ? "↑" : "↓"}
            </span>
          </button>

          <p className="people-action-note">
            {showAll
              ? "You’ve met the full TechWrap team."
              : "Discover the people and expertise behind our products."}
          </p>

        </div>

        {/* =========================
            BOTTOM CULTURE STRIP
        ========================== */}
        <div className="people-culture">

          <div className="culture-line"></div>

          <div className="culture-content">

            <div className="culture-icon">
              +
            </div>

            <div>
              <span>ONE TEAM · MANY SKILLS</span>

              <strong>
                Engineering, creativity and collaboration in one place.
              </strong>
            </div>

          </div>

          <div className="culture-stats">

            <div>
              <strong>6+</strong>
              <span>Specialists</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Ideas</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Team</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurPeople;