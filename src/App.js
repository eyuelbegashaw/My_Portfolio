import "./App.css";
import { useEffect } from "react";

//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Statistics from "./components/Statistics";

function App() {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <Home />
      <Statistics />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
