import { useEffect, useState } from "react";
import "./Careerintro.css";

const technologies = [
  "React",
  "TypeScript",
  "Spring Boot",
  "Node.js",
  "Python",
  "AI / LLMs",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Cloud",
  "DevOps",
];

const careerTracks = [
  {
    number: "01",
    title: "Graduate Engineers",
    description:
      "Start your engineering journey by working on real applications, APIs and production-ready features.",
    roles: ["Junior React Developer", "Java Developer", "Python Developer"],
  },
  {
    number: "02",
    title: "Software Engineers",
    description:
      "Build scalable products across frontend, backend, APIs, databases and cloud infrastructure.",
    roles: ["Full Stack Developer", "Backend Engineer", "Frontend Engineer"],
  },
  {
    number: "03",
    title: "AI & Platform Engineers",
    description:
      "Work on AI-powered products, automation, integrations and modern cloud-native platforms.",
    roles: ["AI Engineer", "Automation Engineer", "Cloud Engineer"],
  },
  {
    number: "04",
    title: "Technical Leaders",
    description:
      "Own architecture, engineering decisions and technical direction for ambitious products.",
    roles: ["Tech Lead", "Solution Architect", "Engineering Lead"],
  },
];

const growthSteps = [
  {
    number: "01",
    title: "Learn",
    text: "Build strong foundations across modern development tools and engineering practices.",
  },
  {
    number: "02",
    title: "Build",
    text: "Turn your knowledge into real products, APIs, dashboards and integrations.",
  },
  {
    number: "03",
    title: "Own",
    text: "Take ownership of features, systems and technical decisions.",
  },
  {
    number: "04",
    title: "Lead",
    text: "Mentor others and drive architecture, quality and product outcomes.",
  },
];

function CareerSections() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeTech, setActiveTech] = useState("React");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrack((current) => (current + 1) % careerTracks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="career-page">

      {/* =====================================================
          CAREER INTRO
      ===================================================== */}

      <section className="career-intro">

        <div className="career-grid-bg"></div>

        <div className="career-particle particle-one"></div>
        <div className="career-particle particle-two"></div>
        <div className="career-particle particle-three"></div>

        <div className="container">

          <div className="career-intro-content">

            <span className="career-eyebrow">
              TECHWRAP / CAREERS
            </span>

            <h1>
              Build Your Career.
              <span> Build What's Next.</span>
            </h1>

            <p>
              Join engineers, developers and problem-solvers building
              modern digital products with React, Java, Python, AI,
              cloud and DevOps.
            </p>

            <div className="career-actions">
              <a href="#opportunities" className="career-primary-btn">
                Explore Opportunities
                <span>↗</span>
              </a>

              <a href="#growth" className="career-outline-btn">
                Discover Growth
              </a>
            </div>

            <div className="career-tech-strip">

              <span>BUILT WITH</span>

              {technologies.slice(0, 7).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveTech(tech)}
                  className={activeTech === tech ? "active" : ""}
                >
                  {tech}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CAREER OPPORTUNITIES
      ===================================================== */}

      <section className="career-opportunities" id="opportunities">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              OPPORTUNITIES
            </span>

            <h2>
              Find Where You
              <span> Fit In.</span>
            </h2>

            <p>
              Whether you're starting your career or leading
              engineering teams, there's room to grow at TechWrap.
            </p>

          </div>


          <div className="career-track">

            <div className="track-navigation">

              {careerTracks.map((track, index) => (

                <button
                  key={track.number}
                  className={
                    activeTrack === index
                      ? "track-item active"
                      : "track-item"
                  }
                  onClick={() => setActiveTrack(index)}
                >

                  <span className="track-number">
                    {track.number}
                  </span>

                  <span className="track-title">
                    {track.title}
                  </span>

                  <span className="track-arrow">
                    →
                  </span>

                </button>

              ))}

            </div>


            <div className="track-detail">

              <div className="track-detail-number">
                {careerTracks[activeTrack].number}
              </div>

              <div>

                <h3>
                  {careerTracks[activeTrack].title}
                </h3>

                <p>
                  {careerTracks[activeTrack].description}
                </p>

                <div className="role-list">

                  {careerTracks[activeTrack].roles.map((role) => (
                    <span key={role}>
                      {role}
                    </span>
                  ))}

                </div>

                <button className="explore-role">
                  Explore roles
                  <span>↗</span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY SECTION
      ===================================================== */}

      <section className="career-technology">

        <div className="container">

          <div className="technology-layout">

            <div className="technology-copy">

              <span className="section-label">
                ENGINEERING AT TECHWRAP
              </span>

              <h2>
                Work With the
                <span> Technology of Tomorrow.</span>
              </h2>

              <p>
                Careers at TechWrap are built around modern engineering.
                You won't be limited to one framework or one layer of
                development.
              </p>

              <div className="technology-active">

                <div className="tech-glow"></div>

                <span>YOUR CURRENT FOCUS</span>

                <strong>{activeTech}</strong>

              </div>

            </div>


            <div className="technology-cloud">

              {technologies.map((tech, index) => (

                <button
                  key={tech}
                  className={`technology-pill ${
                    activeTech === tech ? "selected" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.12}s`,
                  }}
                  onClick={() => setActiveTech(tech)}
                >
                  <span className="tech-dot"></span>
                  {tech}
                </button>

              ))}

              <div className="tech-orbit orbit-one"></div>
              <div className="tech-orbit orbit-two"></div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GROWTH
      ===================================================== */}

      <section className="career-growth" id="growth">

        <div className="container">

          <div className="section-heading center">

            <span className="section-label">
              YOUR GROWTH
            </span>

            <h2>
              Learn. Build.
              <span> Own. Lead.</span>
            </h2>

            <p>
              Your career shouldn't stand still. We give engineers
              opportunities to continuously expand their technical
              and product skills.
            </p>

          </div>


          <div className="growth-line">

            {growthSteps.map((step, index) => (

              <div
                className="growth-step"
                key={step.number}
              >

                <div className="growth-node">
                  {step.number}
                </div>

                <div className="growth-content">

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                </div>

                {index !== growthSteps.length - 1 && (
                  <div className="growth-arrow">
                    →
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LIFE AT TECHWRAP
      ===================================================== */}

      <section className="career-culture">

        <div className="container">

          <div className="culture-header">

            <div>

              <span className="section-label">
                LIFE AT TECHWRAP
              </span>

              <h2>
                Engineering Is a
                <span> Team Sport.</span>
              </h2>

            </div>

            <p>
              We bring together developers, designers, product thinkers
              and technology enthusiasts to solve meaningful problems.
            </p>

          </div>


          <div className="culture-grid">

            <div className="culture-feature">

              <span>01</span>

              <h3>
                Build Real Products
              </h3>

              <p>
                Work on SaaS platforms, enterprise applications,
                AI products and scalable APIs.
              </p>

              <div className="culture-code">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>

            </div>


            <div className="culture-feature">

              <span>02</span>

              <h3>
                Learn From Engineers
              </h3>

              <p>
                Collaborate with developers across frontend, backend,
                AI, cloud and DevOps.
              </p>

              <div className="culture-code">
                <span>AI</span>
                <span>Docker</span>
                <span>Cloud</span>
              </div>

            </div>


            <div className="culture-feature">

              <span>03</span>

              <h3>
                Own Your Impact
              </h3>

              <p>
                Take responsibility for your work and see your
                contribution become part of a real product.
              </p>

              <div className="culture-code">
                <span>API</span>
                <span>CI/CD</span>
                <span>DevOps</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="career-final">

        <div className="career-final-glow"></div>

        <div className="container">

          <span className="section-label">
            YOUR NEXT CHAPTER
          </span>

          <h2>
            Ready to Build
            <span> What's Next?</span>
          </h2>

          <p>
            Bring your curiosity, engineering mindset and ambition.
            We'll provide the technology, problems and people to grow with.
          </p>

          <a
            href="#opportunities"
            className="career-primary-btn"
          >
            Explore Open Roles
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default CareerSections;