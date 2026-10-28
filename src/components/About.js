const skillGroups = [
  {
    name: "Languages",
    icon: "bi-code-slash",
    skills: ["Python", "TypeScript", "JavaScript", "C#", "Java"],
  },
  {
    name: "Frontend",
    icon: "bi-window",
    skills: ["Next.js", "React", "AngularJS", "Tailwind CSS", "SSR"],
  },
  {
    name: "Backend",
    icon: "bi-server",
    skills: ["FastAPI", "Node.js", "Express", ".NET", "REST APIs", "Temporal", "Async jobs"],
  },
  {
    name: "Databases",
    icon: "bi-database",
    skills: ["PostgreSQL", "SQL", "MongoDB", "SQLAlchemy", "Alembic", "Mongoose", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    icon: "bi-cloud",
    skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Git", "Linux"],
  },
  {
    name: "Testing",
    icon: "bi-check2-circle",
    skills: ["pytest", "Jest", "Playwright", "Unit testing", "E2E testing"],
  },
  {
    name: "Integrations & Fintech",
    icon: "bi-plug",
    skills: ["Xero", "NetSuite", "Square", "Lightspeed", "OAuth 2.0", "Webhooks", "Data syncing", "BASE24"],
  },
  {
    name: "AI",
    icon: "bi-stars",
    skills: ["Cursor", "Claude Code", "GitHub Copilot", "OpenAI API", "Anthropic API", "Prompt engineering"],
  },
];

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <h1 className="fs-1 fw-bold">LEARN MORE ABOUT ME</h1>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="./assets/img/me.jpg" className="img-fluid" alt="Eyuel Begashaw - Software Engineer" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Engineer</h3>
            <p className="ps-1">Hi there👋</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Website:</strong>{" "}
                    <span>
                      <a href="https://eyuel.onrender.com" target="_blank" rel="noopener noreferrer" aria-label="Visit portfolio website">https://eyuel.onrender.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <span>+251922002403</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>City:</strong>
                    <span>Addis Ababa, Ethiopia</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>
                    <span>BSc Computer Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span>eyuelbegashaw214@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Languages:</strong>
                    <span>English (Fluent), Amharic (Native)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Software Engineer with 3+ years of experience building production-grade web
              applications, backend services and system integrations. Delivered projects across
              fintech, banking, ERP and research management platforms, working with technologies
              such as Python, FastAPI, Node.js, TypeScript, React, Next.js, .NET and PostgreSQL.
              Experienced in payment processing, workflow orchestration and scalable API design. A
              proactive problem-solver and clear communicator who takes ownership of features end
              to end and works well in remote, cross-functional teams.
            </p>

            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="cta-button"
                aria-label="Get in touch"
              >
                <i className="bi bi-envelope me-2"></i>Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="skills container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid mt-4 fade-in">
          {skillGroups.map((group) => (
            <div key={group.name} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-group-icon">
                  <i className={`bi ${group.icon}`}></i>
                </span>
                <h4>{group.name}</h4>
              </div>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="interests container">
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <i className="bi bi-code-slash pe-2 theme" style={{ fontSize: "32px" }}></i>
              <h3>Open Source</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <i className="bi bi-book pe-2 theme" style={{ fontSize: "32px" }}></i>
              <h3>Reading</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <img
                src="./assets/img/icons/chess.png"
                className="img-fluid pe-2"
                width="40"
                alt="Chess icon"
                loading="lazy"
              />
              <h3>Chess</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <i className="bi bi-controller pe-2 theme" style={{ fontSize: "32px" }}></i>
              <h3>Gaming</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <img
                src="./assets/img/icons/music.png"
                className="img-fluid pe-2"
                width="40"
                alt="Music icon"
                loading="lazy"
              />
              <h3>Music</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <i className="bi bi-camera pe-2 theme" style={{ fontSize: "32px" }}></i>
              <h3>Photography</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <i className="bi bi-lightbulb pe-2 theme" style={{ fontSize: "32px" }}></i>
              <h3>Tech Podcasts</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <i className="bi bi-trophy pe-2 theme" style={{ fontSize: "32px" }}></i>
              <h3>Hackathons</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
