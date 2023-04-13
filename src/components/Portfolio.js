const Portfolio = () => {
  return (
    <section id="portfolio" className="mt-5">
      <div className="m-md-2">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h1 className="fs-1 fw-bold">Some Of My Works</h1>
        </div>

        <div id="portfolio-details" className="portfolio-details">
          <div className="container-fluid">
            <h2>Pharmacy Management System</h2>
            <div className="row photos">
              <div className="col-lg-7 portfolioItems">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div>
                        <img
                          src="./assets/img/portfolio/portfolio-1.jpg"
                          className="d-block w-100"
                          alt="first"
                        />
                      </div>
                    </div>
                    {Array.from({length: 11}, (_, i) => i + 2).map(data => (
                      <div className="carousel-item">
                        <img
                          src={`./assets/img/portfolio/${data}.jpg`}
                          className="d-block w-100"
                          alt="second"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev buttons"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="col-lg-5 portfolioItems">
                <h5>Project information</h5>
                <ul>
                  <li>
                    <strong>Client</strong>: Benet pharmacy
                  </li>
                </ul>

                <p>
                  This private website, built on the MERN stack, provides a comprehensive set of
                  advanced features to manage and sell pharmaceutical products. In addition to drug
                  sales, registration, and daily transaction management, the platform notifies users
                  of low quantity and expired drugs and includes print functionality for receipts
                  and transactions. The administrator has complete control over the system and can
                  manage drug suppliers, categorize drugs, and update pharmacist data. The website
                  also ensures secure access with a login and logout system and includes a
                  user-friendly forgot password feature. Overall, this private website provides a
                  reliable and efficient solution for managing and selling pharmaceutical products.
                </p>
              </div>
            </div>

            <h2 className="mt-4">Quiz platform</h2>
            <div className="row photos">
              <div className="col-lg-7 portfolioItems">
                <div
                  id="carouselExampleControls2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./assets/img/portfolio/fetena1.jpg"
                        className="d-block w-100"
                        alt="first"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./assets/img/portfolio/fetena2.jpg"
                        className="d-block w-100"
                        alt="second"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls2"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls2"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="col-lg-5 portfolioItems">
                <h5>Project information</h5>
                <ul>
                  <li>
                    <strong>Client</strong>: Upwork employer
                  </li>

                  <li>
                    <strong>Project URL</strong> :{" "}
                    <a href="https://fetena.netlify.app/" target="_blank">
                      https://fetena.netlify.app/
                    </a>
                  </li>
                </ul>

                <p>
                  This quiz platform offers users the ability to select from over 20 categories,
                  customize the difficulty level, and choose the number of questions. It provides an
                  enjoyable and interactive way to test knowledge across a range of subjects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Portfolio;
