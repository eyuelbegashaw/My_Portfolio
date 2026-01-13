import SkillsProgress from "./SkillsProgress";

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
            <img src="./assets/img/me.jpg" className="img-fluid" alt="Eyuel Begashaw - Web Developer" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Website &amp; Mobile Developer</h3>
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
                    <span>Computer Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span>eyuelbegashaw214@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I am a computer engineer graduated from Addis Ababa University, with a strong passion
              for programming. I am constantly seeking to expand my knowledge and skills in the
              field, and I am always eager to take on new challenges that will help me grow as a
              developer. I have gained practical experience working on a variety of programming
              projects. In my free time, I love exploring new technologies, experimenting with code,
              and collaborating with other programmers. Ultimately, I hope to use my skills to
              create innovative solutions that have a positive impact on society.
            </p>

            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a
                href="./assets/EyuelBegashawResume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                aria-label="Download resume PDF"
              >
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
              <a
                href="#contact"
                className="cta-button secondary"
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

        <div className="d-md-flex mt-4">
          <div className="flex-fill">
            <h4 className="mb-4 text-center">Technologies I Work With</h4>
          </div>
        </div>
        <div className="d-md-flex mt-4">
          <div className="flex-fill">
            <div className="d-flex justify-content-around">
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/html.png"
                    className="img-fluid"
                    width="100"
                    alt="HTML5 logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">HTML</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/css.png"
                    className="img-fluid"
                    width="100"
                    alt="CSS3 logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">CSS</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/js.png"
                    className="img-fluid"
                    width="100"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">JavaScript</div>
              </div>
            </div>
            <div className="d-flex justify-content-around w-100 mt-3">
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/bootstrap.png"
                    width="100"
                    className="img-fluid"
                    alt="Bootstrap framework logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Bootstrap</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/react.png"
                    width="100"
                    className="img-fluid"
                    alt="React.js logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">React</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/redux.png"
                    width="100"
                    className="img-fluid"
                    alt="Redux logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Redux</div>
              </div>
            </div>
          </div>
          <div className="flex-fill">
            <div className="d-flex justify-content-around">
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/nodejs.png"
                    className="img-fluid"
                    width="100"
                    alt="Node.js logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Nodejs</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/express.png"
                    className="img-fluid"
                    width="100"
                    alt="Express.js logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Express</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/mongodb.png"
                    className="img-fluid"
                    width="100"
                    alt="MongoDB logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Mongodb</div>
              </div>
            </div>
            <div className="d-flex justify-content-around w-100 mt-3">
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/mysql.png"
                    width="100"
                    className="img-fluid"
                    alt="MySQL logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Mysql</div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <div>
                    <img
                      src="./assets/img/icons/python.png"
                      width="100"
                      className="img-fluid"
                      alt="Python logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center theme mt-1">Python</div>
                </div>
              </div>
              <div className="logoBorder p-2">
                <div>
                  <img
                    src="./assets/img/icons/java.png"
                    width="100"
                    className="img-fluid"
                    alt="Java logo"
                    loading="lazy"
                  />
                </div>
                <div className="text-center theme mt-1">Java</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4 text-center">Skill Proficiency</h4>
          <SkillsProgress />
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
