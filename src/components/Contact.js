import {useState} from "react";

const Contact = () => {
  const [flag, setFlag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    try {
      setIsSubmitting(true);
      setFlag("loading");
      const response = await fetch("https://formspree.io/f/mrgvobby", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: subject,
          message: `Subject: ${subject}\n\n${message}`,
        }),
      });
      if (response.ok) {
        setFlag("success");
        // Clear form fields after successful submission
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setFlag(""), 5000);
      } else {
        setFlag("failure");
      }
    } catch (error) {
      console.log(error);
      setFlag("failure");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <div className="section-title fade-in">
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

        <form className="php-email-form mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            {flag === "loading" && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status" aria-label="Sending message">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {flag === "success" && (
              <div className="alert alert-success" role="alert" aria-live="polite">
                Email Sent Successfully
              </div>
            )}

            {flag === "failure" && (
              <div className="alert alert-danger" role="alert" aria-live="assertive">
                Error occurred. Please try again.
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
            <button
              type="submit"
              className="btn bgtheme text-light w-100 mt-2"
              disabled={isSubmitting}
              aria-label="Send message"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      <div className="cta-section fade-in">
        <div className="container">
          <div className="cta-card">
            <span className="cta-eyebrow">
              <span className="cta-status-dot"></span>Open to new opportunities
            </span>
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new projects, product ideas, or opportunities to be
              part of your team.
            </p>
            <div className="cta-actions">
              <a href="mailto:eyuelbegashaw214@gmail.com" className="cta-button">
                <i className="bi bi-envelope me-2"></i>Send Email
              </a>
              <a href="tel:+251922002403" className="cta-button secondary">
                <i className="bi bi-telephone me-2"></i>Call Me
              </a>
            </div>
            <div className="cta-details">
              <span>
                <i className="bi bi-envelope"></i>eyuelbegashaw214@gmail.com
              </span>
              <span>
                <i className="bi bi-telephone"></i>+251922002403
              </span>
              <span>
                <i className="bi bi-geo-alt"></i>Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
