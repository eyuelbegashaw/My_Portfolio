const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.S. in Electrical and Computer Engineering</h4>
              <h5>2018 - 2023</h5>
              <p>
                <em>Addis Ababa Institute of Technology , Addis Ababa University</em>
              </p>
              <p>
                Studying Electrical and Computer Engineering (ECE) at Addis Ababa Institute of
                Technology (AAIT), Addis Ababa University (AAU), has prepared me to pursue a career
                in this constantly evolving and impactful field. With a strong foundation in both
                electrical engineering and computer engineering, I am equipped to tackle real-world
                problems and contribute to technological advancements.
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
              <h4>Freelance Web developer</h4>
              <h5>Jan 2021 - present</h5>
              <p>
                As a freelance web developer, I have developed websites for a variety of clients
                with different needs and requirements. I have acquired clients through various
                channels, including Upwork, social media job postings, and direct outreach. Each
                project has allowed me to improve my ability to meet client needs efficiently and
                effectively. Through my freelance work, I have demonstrated my self-motivation and
                adaptability, as well as my ability to work on multiple projects simultaneously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
