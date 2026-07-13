import "./ContactPreview.css";
import { useNavigate } from "react-router-dom";

function ContactPreview() {
  const navigate = useNavigate();

  return (
    <section className="contact-preview">
      <div className="container">

        <p className="section-tag">
          CONTACT US
        </p>

        <h2>Let's Build Something Great Together</h2>

        <div className="contact-grid">

          <div
            className="contact-card"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/Moi+Avenue,+Meru,+Kenya",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <span>📍</span>
            <h3>Visit Us</h3>
            <p>Moi Avenue, Meru, Kenya</p>
          </div>

          <div
            className="contact-card"
            onClick={() =>
              (window.location.href = "tel:+254725800800")
            }
            style={{ cursor: "pointer" }}
          >
            <span>📞</span>
            <h3>Call Us</h3>
            <p>+254 725 800 800</p>
          </div>

          <div
            className="contact-card"
            onClick={() =>
              (window.location.href =
                "mailto:moti@plansonline.net")
            }
            style={{ cursor: "pointer" }}
          >
            <span>✉️</span>
            <h3>Email</h3>
            <p>moti@plansonline.net</p>
          </div>

          <div
            className="contact-card"
            onClick={() => navigate("/contact")}
            style={{ cursor: "pointer" }}
          >
            <span>🕒</span>
            <h3>Business Hours</h3>
            <p>Monday – Saturday</p>
            <p>8:00 AM – 5:30 PM</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactPreview;