import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="container">

        <p className="section-tag">
          CONTACT US
        </p>

        <h2>Let's Build Together</h2>

        <p className="contact-intro">
          Whether you're looking for quality hardware, agricultural machinery,
          industrial equipment, or commercial office space, our team is ready
          to assist you.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-card">
              <h3>📍 Address</h3>
              <p>Njuri Ncheke Street, Meru Town, Kenya</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+254 XXX XXX XXX</p>
            </div>

            <div className="info-card">
              <h3>✉ Email</h3>
              <p>info@mohammedmoti.co.ke</p>
            </div>

            <div className="info-card">
              <h3>🕒 Business Hours</h3>
              <p>Monday - Saturday</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;