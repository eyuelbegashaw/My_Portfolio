import { useState } from "react";
import ImageLoader from "./ImageLoader";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      category: "Full Stack",
      image: "./assets/img/portfolio/haset.jpg",
      images: [
        "./assets/img/portfolio/haset.jpg",
        "./assets/img/portfolio/haset2.jpg",
        "./assets/img/portfolio/haset3.jpg",
        "./assets/img/portfolio/haset4.jpg",
      ],
      description: "This website offers a simple and user-friendly online shopping experience, allowing you to easily customize your orders by choosing colors, quantities, and sizes. When you pick a color from the dropdown menu, you'll see an image of the product in that color, making it easier to decide. Additionally, the website gives the admin complete control over the products and categories, making management and organization effortless.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
      liveUrl: "https://hasetshop.com",
      carouselId: "carouselEcommerce",
    },
    {
      id: 2,
      title: "Pharmacy Management System",
      category: "Full Stack",
      image: "./assets/img/portfolio/portfolio-1.jpg",
      images: Array.from({ length: 12 }, (_, i) => 
        i === 0 ? "./assets/img/portfolio/portfolio-1.jpg" : `./assets/img/portfolio/${i + 1}.jpg`
      ),
      description: "This private website, built on the MERN stack, provides a comprehensive set of advanced features to manage and sell pharmaceutical products. In addition to drug sales, registration, and daily transaction management, the platform notifies users of low quantity and expired drugs and includes print functionality for receipts and transactions. The administrator has complete control over the system and can manage drug suppliers, categorize drugs, and update pharmacist data.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT"],
      liveUrl: "https://benetpharmacy.onrender.com",
      carouselId: "carouselPharmacy",
    },
    {
      id: 3,
      title: "Quiz Platform",
      category: "Frontend",
      image: "./assets/img/portfolio/fetena1.jpg",
      images: [
        "./assets/img/portfolio/fetena1.jpg",
        "./assets/img/portfolio/fetena2.jpg",
      ],
      description: "This quiz platform offers users the ability to select from over 20 categories, customize the difficulty level, and choose the number of questions. It provides an enjoyable and interactive way to test knowledge across a range of subjects.",
      technologies: ["React", "JavaScript", "CSS3", "API"],
      liveUrl: "https://fetena.netlify.app/",
      carouselId: "carouselExampleControls2",
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="mt-5 fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h1 className="fs-1 fw-bold">Some Of My Works</h1>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card fade-in">
              <div className="portfolio-card-image">
                <ImageLoader
                  src={project.image}
                  alt={project.title}
                  className="portfolio-thumbnail"
                />
                <div className="portfolio-card-overlay">
                  <button
                    className="portfolio-view-btn"
                    onClick={() => openProjectModal(project)}
                  >
                    <i className="bi bi-eye me-2"></i>View Details
                  </button>
                </div>
                <div className="portfolio-card-category">{project.category}</div>
              </div>
              <div className="portfolio-card-content">
                <h3>{project.title}</h3>
                <p className="portfolio-card-description">{project.description.substring(0, 120)}...</p>
                <div className="portfolio-card-tech">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge-small">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge-small">+{project.technologies.length - 4}</span>
                  )}
                </div>
                <div className="portfolio-card-footer">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-card-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="portfolio-modal" onClick={closeProjectModal}>
            <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="portfolio-modal-close" onClick={closeProjectModal}>
                <i className="bi bi-x-lg"></i>
              </button>
              <h2 className="portfolio-modal-title">{selectedProject.title}</h2>
              <div className="row">
                <div className="col-lg-7">
                  <div
                    id={selectedProject.carouselId}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {selectedProject.images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`carousel-item ${idx === 0 ? "active" : ""}`}
                        >
                          <ImageLoader
                            src={img}
                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                            className="d-block w-100"
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#${selectedProject.carouselId}`}
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#${selectedProject.carouselId}`}
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="portfolio-modal-info">
                    <h5>Project Information</h5>
                    <div className="mb-3">
                      <strong className="d-block mb-2">Technologies Used:</strong>
                      <div className="tech-badges">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-links mb-3">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <i className="bi bi-box-arrow-up-right me-2"></i>Live Demo
                      </a>
                    </div>
                    <p className="project-description">{selectedProject.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
