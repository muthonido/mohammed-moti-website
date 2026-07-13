import "./Contact.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { addMessage } from "../../services/messageService";

function Contact() {
  const location = useLocation();

  const selectedProduct = location.state?.product || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(
    selectedProduct ? `Quote Request - ${selectedProduct}` : ""
  );
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await addMessage({
      name,
      email,
      phone,
      product: subject,
      message,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Thank you! Your message has been sent successfully.");

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  }

  return (
    <section className="contact">
      <div className="container">

        <p className="section-tag">
          CONTACT US
        </p>

        <h1>Let's Talk</h1>

        <p className="contact-intro">
          We'd love to hear from you. Contact us for quotations,
          product inquiries, partnerships or general information.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>📍 Moi Avenue, Meru, Kenya</p>

            <p>📮 P.O. Box 19-60200</p>

            <p>📞 +254 725 800 800</p>

            <p>✉ moti@plansonline.net</p>

            <p>🕒 Monday - Saturday: 8:00 AM - 5:30 PM</p>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              className="primary-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;