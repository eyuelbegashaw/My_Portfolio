const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <h1 className="fs-1 fw-bold">Check My Resume</h1>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Sc in Computer Engineering</h4>
              <h5>2018 - 2023</h5>
              <p>
                <em>Addis Ababa Institute of Technology , Addis Ababa University</em>
              </p>
              <p>
                My education in Computer Engineering at Addis Ababa University (AAU) has prepared me
                for a career in this dynamic field. I'm particularly passionate about programming
                and software development. AAU's rigorous curriculum has given me a strong foundation
                to address real-world challenges and contribute to technological advancements, all
                while focusing on my passion for coding
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Website developer, Tohey Technologies PLC</h4>
              <h5>April 2022 - July 2022</h5>
              <p>
                Worked as a website developer for Tohey Technologies, an Addis Ababa-based company,
                for four months. Collaborated with a team to develop and maintain websites using
                various technologies. As part of this role, I also:
              </p>
              <p>
                <ul>
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
              </p>
            </div>

            <div className="resume-item">
              <h4>Software developer , Addis Ababa University project team </h4>
              <h5>Sep 2023 - Jan 2024</h5>
              <p>
               Successfully led and managed the development of a comprehensive software solution for the Institute of Foreign Affairs. Oversaw the end-to-end design, development, and implementation of software applications, utilizing Jira for project management and Angular and .NET for development. 
             </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
