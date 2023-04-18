const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <h1 className="fs-1 fw-bold">LEARN MORE ABOUT ME</h1>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="./assets/img/me.jpg" className="img-fluid" alt="profile image" />
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
                      <a href="https://eyuel.onrender.com">https://eyuel.onrender.com</a>
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
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I am a senior computer engineering student at Addis Ababa University, with a strong
              passion for programming. I am constantly seeking to expand my knowledge and skills in
              the field, and I am always eager to take on new challenges that will help me grow as a
              developer. I have gained practical experience working on a variety of programming
              projects. In my free time, I love exploring new technologies, experimenting with code,
              and collaborating with other programmers. Ultimately, I hope to use my skills to
              create innovative solutions that have a positive impact on society.
            </p>

            <div className="mt-4">
              <a
                href="./assets/EyuelBegashawResume.pdf"
                download
                target="_blank"
                class="bg-dark download text-white p-3"
              >
                Download Resume
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
            <div className="d-flex justify-content-around">
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/html.png"
                  className="img-fluid"
                  width="100"
                  alt="html"
                />
              </div>
              <div className="logoBorder p-2">
                <img src="./assets/img/icons/css.png" className="img-fluid" width="100" alt="css" />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/js.png"
                  className="img-fluid"
                  width="100"
                  alt="javascript"
                />
              </div>
            </div>
            <div className="d-flex justify-content-around w-100 mt-3">
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/bootstrap.png"
                  width="100"
                  className="img-fluid"
                  alt="bootstrap"
                />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/react.png"
                  width="100"
                  className="img-fluid"
                  alt="react"
                />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/redux.png"
                  width="100"
                  className="img-fluid"
                  alt="redux"
                />
              </div>
            </div>
          </div>
          <div className="flex-fill">
            <div className="d-flex justify-content-around">
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/nodejs.png"
                  className="img-fluid"
                  width="100"
                  alt="html"
                />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/express.png"
                  className="img-fluid"
                  width="100"
                  alt="css"
                />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/mongodb.png"
                  className="img-fluid"
                  width="100"
                  alt="javascript"
                />
              </div>
            </div>
            <div className="d-flex justify-content-around w-100 mt-3">
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/mysql.png"
                  width="100"
                  className="img-fluid"
                  alt="bootstrap"
                />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/python.png"
                  width="100"
                  className="img-fluid"
                  alt="react"
                />
              </div>
              <div className="logoBorder p-2">
                <img
                  src="./assets/img/icons/java.png"
                  width="100"
                  className="img-fluid"
                  alt="redux"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="interests container">
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <img
                src="./assets/img/icons/football.png"
                className="img-fluid pe-2"
                width="40"
                alt="javascript"
              />
              <h3>Football</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <img
                src="./assets/img/icons/chess.png"
                className="img-fluid pe-2"
                width="40"
                alt="javascript"
              />
              <h3>Chess</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <img
                src="./assets/img/icons/music.png"
                className="img-fluid pe-2"
                width="40"
                alt="javascript"
              />
              <h3>Music</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-2">
            <div className="icon-box d-flex">
              <img
                src="./assets/img/icons/travelling.png"
                className="img-fluid pe-2"
                width="40"
                alt="javascript"
              />
              <h3>Travelling</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
