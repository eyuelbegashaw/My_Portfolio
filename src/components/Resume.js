const experiences = [
  {
    title: "Software Engineer",
    company: "Williams Stanley and Co",
    date: "Jul 2025 - Present",
    location: "Remote (London, UK)",
    description:
      "Built production integration platforms connecting financial and till systems at scale. Designed and maintained backend APIs and Temporal workflows with FastAPI and PostgreSQL for authentication, data syncing, and reliable background processing across accounting and POS integrations such as Xero, NetSuite, Square, and Lightspeed. Delivered end-to-end features in Next.js and TypeScript spanning organisations, access control, integrations management, automations, and payment operations, wiring production UI to backend APIs and workflow orchestration.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Temporal", "Next.js", "TypeScript"],
  },
  {
    title: "Freelance Software Engineer",
    company: "Upwork, DataAnnotation, Outlier",
    date: "Mar 2025 - Jul 2025",
    location: "Remote",
    description:
      "Worked on software development projects through Upwork, contributing to application development and backend functionality. Also worked with DataAnnotation and Outlier on AI training tasks to improve AI models by reviewing AI-generated code, identifying programming errors, and providing feedback on code quality. In addition, developed software solutions for local and international clients, tailoring applications to their technical requirements.",
    technologies: ["Backend Development", "Code Review", "Debugging", "AI Training"],
  },
  {
    title: "Software Engineer",
    company: "Bank of Abyssinia",
    date: "Dec 2023 - Feb 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Worked with the BASE24 payment processing system, supporting transaction processing and system integration, with additional exposure to T24 core banking. Developed backend services and RESTful APIs using Node.js, implementing business logic, database interactions, and API integrations to support banking applications. Contributed to backend architecture, system reliability, and the development of secure, efficient, and maintainable software solutions.",
    technologies: ["Node.js", "REST APIs", "BASE24", "T24", "SQL"],
  },
  {
    title: "Software Developer",
    company: "Super Consult (Addis Ababa University)",
    date: "Sep 2023 - Aug 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Contributed to the development of software solutions for the Institute of Foreign Affairs of Ethiopia (IFA), including the Integrated Research Management System (IRMS) and other projects. Developed frontend interfaces and backend functionality using AngularJS and .NET, helping build responsive, functional, and user-friendly web applications.",
    technologies: ["AngularJS", ".NET", "C#", "SQL Server"],
  },
  {
    title: "Web Developer",
    company: "Tohey Technologies PLC",
    date: "Mar 2022 - Jul 2022",
    location: "Addis Ababa, Ethiopia",
    description:
      "Contributed to the development of multiple ERP systems using React, building responsive user interfaces and reusable components for modules such as inventory, sales and HR. Integrated frontend features with backend REST APIs and implemented forms, data tables and dashboards. Collaborated with designers and backend developers in an agile team to deliver user-friendly solutions on schedule.",
    technologies: ["React", "JavaScript", "REST APIs", "CSS3"],
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <h1 className="fs-1 fw-bold">Check My Resume</h1>
        </div>

        <div className="resume-timeline">
          {experiences.map((job) => (
            <div key={`${job.company}-${job.date}`} className="timeline-item experience-item">
              <div className="timeline-marker experience-marker">
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="timeline-card-icon experience-icon">
                      <i className="bi bi-briefcase-fill"></i>
                    </div>
                    <div className="timeline-card-title-group">
                      <h4>
                        {job.title}, {job.company}
                      </h4>
                      <span className="timeline-badge experience-badge">Experience</span>
                    </div>
                  </div>
                  <div className="timeline-card-date">
                    {job.date} | {job.location}
                  </div>
                  <div className="timeline-card-body">
                    <p>{job.description}</p>
                    <div className="resume-tech-tags">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="resume-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="timeline-item education-item">
            <div className="timeline-marker education-marker">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-card-icon education-icon">
                    <i className="bi bi-book-fill"></i>
                  </div>
                  <div className="timeline-card-title-group">
                    <h4>BSc Computer Engineering</h4>
                    <span className="timeline-badge education-badge">Education</span>
                  </div>
                </div>
                <div className="timeline-card-date">Sep 2018 - Jul 2023 | Addis Ababa, Ethiopia</div>
                <div className="timeline-card-body">
                  <p className="timeline-card-institution">
                    <em>Addis Ababa University</em>
                  </p>
                  <p>
                    Graduated with Great Distinction in Computer Engineering, achieving a CGPA of
                    3.62/4.00 and an exit examination score of 88/100. Built a strong foundation in
                    software engineering, programming, data structures and algorithms, database
                    management, and system design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
