import React, {useState, useEffect} from "react";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (e, optional) => {
    const section = e.target.hash;

    if (section || optional) {
      setActiveLink(section || optional);
      setNavOpen(false);
    }
  };

  const handleMenuClick = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const home = document.querySelector("#home");
      const about = document.querySelector("#about");
      const resume = document.querySelector("#resume");
      const portfolio = document.querySelector("#portfolio");
      const contact = document.querySelector("#contact");

      const scrollPosition = window.pageYOffset + 1;
      if (
        contact.offsetTop <= scrollPosition &&
        contact.offsetTop + contact.offsetHeight > scrollPosition
      ) {
        setActiveLink("#contact");
      } else if (
        portfolio.offsetTop <= scrollPosition &&
        portfolio.offsetTop + portfolio.offsetHeight > scrollPosition
      ) {
        setActiveLink("#portfolio");
      } else if (
        resume.offsetTop <= scrollPosition &&
        resume.offsetTop + resume.offsetHeight > scrollPosition
      ) {
        setActiveLink("#resume");
      } else if (
        about.offsetTop <= scrollPosition &&
        about.offsetTop + about.offsetHeight > scrollPosition
      ) {
        setActiveLink("#about");
      } else {
        setActiveLink("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);
  return (
    <header id="header" className="header-top">
      <div className="container-sm d-flex justify-content-between align-items-center">
        <a href="#home" className="mr-auto">
          <img src="./assets/img/logo.png" alt="" width="100" />
        </a>

        <nav id="navbar" className={`navbar ${navOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li className="d-flex align-items-center">
              <a
                className={`nav-link ${activeLink === "#home" ? "active" : ""}`}
                href="#home"
                onClick={handleNavClick}
              >
                <img
                  src="./assets/img/home.png"
                  className="pe-1 pb-1"
                  width="31"
                  onClick={e => handleNavClick(e, "#home")}
                />{" "}
                Home
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a
                className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
                href="#about"
                onClick={handleNavClick}
              >
                <img
                  src="./assets/img/user.png"
                  className=""
                  onClick={e => handleNavClick(e, "#about")}
                />{" "}
                About
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a
                className={`nav-link ${activeLink === "#resume" ? "active" : ""}`}
                href="#resume"
                onClick={handleNavClick}
              >
                <img
                  src="./assets/img/resume.png"
                  className="pe-1 pb-1 fs-6"
                  width="32"
                  onClick={e => handleNavClick(e, "#resume")}
                />{" "}
                Resume
              </a>
            </li>

            <li className="d-flex align-items-center ">
              <a
                className={`nav-link ${activeLink === "#portfolio" ? "active" : ""}`}
                href="#portfolio"
                onClick={handleNavClick}
              >
                <img
                  src="./assets/img/projects.png"
                  className="pe-1 pb-1 fs-6"
                  width="32"
                  onClick={e => handleNavClick(e, "#portfolio")}
                />{" "}
                Portfolio
              </a>
            </li>
            <li className="d-flex align-items-center ">
              <a
                className={`nav-link ${activeLink === "#contact" ? "active" : ""}`}
                href="#contact"
                onClick={handleNavClick}
              >
                <img
                  src="./assets/img/contact.png"
                  className="pe-1 pb-1 fs-6"
                  width="32"
                  onClick={e => handleNavClick(e, "#contact")}
                />
                Contact
              </a>
            </li>
          </ul>

          <i
            className="bi bi-list mobile-nav-toggle align-self-center me-3"
            onClick={handleMenuClick}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
