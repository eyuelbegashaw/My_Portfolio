const Home = () => {
  return (
    <section id="home" className="home section-show">
      <div className="container d-flex justify-content-around">
        <div>
          <div>
            <h1>
              Hi , My name is <span className="theme">Eyuel Begashaw</span>
            </h1>
            <h4>
              I'm a passionate <span>web developer</span>
            </h4>
          </div>

          <div className="social-links">
            <a href="https://t.me/eyuelzz" target="_blank" className="telegram">
              <i className="bi bi-telegram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/eyuelbegashaw"
              target="_blank"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/eyuelbegashaw"
              target="_blank"
              className="github"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src="./assets/img/homepage.png"
          className="img-fluid homeImage"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
