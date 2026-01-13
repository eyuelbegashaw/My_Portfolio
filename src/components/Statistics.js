import { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="stat-item fade-in">
      <h3 className="stat-number">
        {count}
        {suffix}
      </h3>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="statistics fade-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-box fade-in">
              <div className="stat-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <Counter end={15} suffix="+" />
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-box fade-in">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>
              <Counter end={5} suffix="+" />
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-box fade-in">
              <div className="stat-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <Counter end={3} suffix="+" />
              <p>Years Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-box fade-in">
              <div className="stat-icon">
                <i className="bi bi-github"></i>
              </div>
              <Counter end={25} suffix="+" />
              <p>GitHub Repositories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

