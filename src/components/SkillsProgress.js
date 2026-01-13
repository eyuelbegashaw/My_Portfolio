import { useState, useEffect, useRef } from "react";

const SkillBar = ({ name, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              setWidth(percentage);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [isVisible, delay, percentage]);

  return (
    <div ref={skillRef} className="skill-item fade-in">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{width}%</span>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsProgress = () => {
  const skills = [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Express.js", percentage: 85 },
    { name: "MongoDB", percentage: 70 },
    { name: "MySQL", percentage: 90 },
    { name: "Python", percentage: 90 },
    { name: "Java", percentage: 70 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Redux", percentage: 80 },
    { name: "Git/GitHub", percentage: 85 },
  ];

  return (
    <div className="skills-progress container mt-5">
      <div className="row">
        <div className="col-lg-6">
          {skills.slice(0, 6).map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={index * 100}
            />
          ))}
        </div>
        <div className="col-lg-6">
          {skills.slice(6, 12).map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;

