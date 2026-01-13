import { useState, useEffect } from "react";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "web developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timeout;
    const currentIndex = displayText.length;

    if (!isDeleting && currentIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
      }, typingSpeed);
    } else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex - 1));
      }, typingSpeed);
    } else if (!isDeleting && currentIndex === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(100);
      }, 2000);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typingSpeed, fullText]);

  return (
    <section id="home" className="home section-show">
      <div className="container d-flex justify-content-around">
        <div className="home-intro">
          <div>
            <h1>
              Hi , My name is <span className="theme">Eyuel Begashaw</span>
            </h1>
            <h4>
              I'm a passionate <span className="theme">{displayText}</span>
              <span className="typing-cursor">|</span>
            </h4>
            <p className="value-proposition mt-3">
              I transform ideas into powerful web applications. Specializing in full-stack development 
              with React, Node.js, and modern databases. Let's build something amazing together!
            </p>
          </div>

          <div className="mt-4">
            <a href="#contact" className="cta-button me-3">
              <i className="bi bi-envelope me-2"></i>Hire Me
            </a>
            <a href="#portfolio" className="cta-button secondary">
              <i className="bi bi-briefcase me-2"></i>View My Work
            </a>
          </div>

          <div className="social-links">
            <a 
              href="https://t.me/eyuelzz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="telegram"
              aria-label="Contact on Telegram"
            >
              <i className="bi bi-telegram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/eyuelbegashaw"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              aria-label="Visit LinkedIn profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/eyuelbegashaw"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
              aria-label="Visit GitHub profile"
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
          alt="Eyuel Begashaw - Web Developer Portfolio"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
