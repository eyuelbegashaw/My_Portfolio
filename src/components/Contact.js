import {useState} from "react";

const Contact = () => {
  const [flag, setFlag] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleClick = async () => {
    try {
      let content = `subject ${subject} <br/> message ${message}`;
      console.log(content);
      if (email && subject && email) {
        setFlag("loading");
        const response = await fetch("https://formspree.io/f/mrgvobby", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            message: `Subject : ${subject}
                      ${message}
                      `,
          }),
        });
        if (response.ok) {
          setFlag("success");
          setTimeout(() => setFlag(""), 5000);
        } else {
          setFlag("");
        }
      }
    } catch (error) {
      console.log(error);
      setFlag("failure");
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <h1 className="fs-1 fw-bold">Contact Me</h1>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box ">
              <h3>Email Me</h3>
              <p className="fs-6">eyuelbegashaw214@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <h3>Call Me</h3>
              <p className="fs-6">+251922002403</p>
            </div>
          </div>
        </div>

        <div className="php-email-form mt-4">
          <div className="mb-3">
            {flag == "loading" && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {flag == "success" && (
              <div className="alert alert-success" role="alert">
                Email Sent Successfully
              </div>
            )}

            {flag == "failure" && (
              <div className="alert alert-danger" role="alert">
                Error occured. Please Try again
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-12 form-group mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button className="btn bgtheme text-light w-100 mt-2" onClick={handleClick}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
