const Resume = () => {
  return (
    <section id="resume" className="resume fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <h1 className="fs-1 fw-bold">Check My Resume</h1>
        </div>

        <div className="resume-timeline">
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
                    <h4>B.Sc in Computer Engineering</h4>
                    <span className="timeline-badge education-badge">Education</span>
                  </div>
                </div>
                <div className="timeline-card-date">2018 - 2023</div>
                <div className="timeline-card-body">
                  <p className="timeline-card-institution">
                    <em>Addis Ababa Institute of Technology, Addis Ababa University</em>
                  </p>
                  <p>
                    My education in Computer Engineering at Addis Ababa University (AAU) has prepared me
                    for a career in this dynamic field. I'm particularly passionate about programming
                    and software development. AAU's rigorous curriculum has given me a strong foundation
                    to address real-world challenges and contribute to technological advancements, all
                    while focusing on my passion for coding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 1 */}
          <div className="timeline-item experience-item">
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
                    <h4>Software Developer, Bank of Abyssinia</h4>
                    <span className="timeline-badge experience-badge">Experience</span>
                  </div>
                </div>
                <div className="timeline-card-date">Jan 2024 - Jan 2025</div>
                <div className="timeline-card-body">
                  <p>
                    Developed and maintained software solutions for banking operations. Collaborated with cross-functional teams to design, implement, and deploy applications that enhance banking services and improve operational efficiency.
                  </p>
                  <div className="resume-tech-tags">
                    <span className="resume-tech-tag">Java</span>
                    <span className="resume-tech-tag">React</span>
                    <span className="resume-tech-tag">Python REST API</span>
                    <span className="resume-tech-tag">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="timeline-item experience-item">
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
                    <h4>Full Stack Developer, Addis Ababa University Project Team</h4>
                    <span className="timeline-badge experience-badge">Experience</span>
                  </div>
                </div>
                <div className="timeline-card-date">Sep 2023 - Jan 2024</div>
                <div className="timeline-card-body">
                  <p>
                    Successfully led and managed the development of a comprehensive software solution for the Institute of Foreign Affairs. Oversaw the end-to-end design, development, and implementation of software applications, utilizing Jira for project management and Angular and .NET for development.
                  </p>
                  <div className="resume-tech-tags">
                    <span className="resume-tech-tag">Angular</span>
                    <span className="resume-tech-tag">.NET</span>
                    <span className="resume-tech-tag">Jira</span>
                    <span className="resume-tech-tag">SQL Server</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="timeline-item experience-item">
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
                    <h4>Website Developer, Tohey Technologies PLC</h4>
                    <span className="timeline-badge experience-badge">Experience</span>
                  </div>
                </div>
                <div className="timeline-card-date">April 2022 - July 2022</div>
                <div className="timeline-card-body">
                  <p>
                    Worked as a website developer for Tohey Technologies, an Addis Ababa-based company,
                    for four months. Collaborated with a team to develop and maintain websites using
                    various technologies. As part of this role, I also:
                  </p>
                  <ul className="resume-card-list">
                    <li>Designed and developed a fully functional website from scratch</li>
                    <li>
                      Collaborated with a team of designers and developers to ensure timely delivery
                      of the website.
                    </li>
                    <li>
                      Utilized React components and libraries to streamline the development process
                      and improve website functionality.
                    </li>
                    <li>
                      Implemented responsive design techniques to ensure the website was optimized for
                      viewing on different devices.
                    </li>
                  </ul>
                  <div className="resume-tech-tags">
                    <span className="resume-tech-tag">React</span>
                    <span className="resume-tech-tag">JavaScript</span>
                    <span className="resume-tech-tag">CSS3</span>
                    <span className="resume-tech-tag">Bootstrap</span>
                  </div>
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
