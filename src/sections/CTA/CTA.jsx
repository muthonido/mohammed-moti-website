import "./CTA.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="container">

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Work With mohammed Moti?</h2>

          <p>
            Whether you're looking for hardware, agricultural machinery,
            industrial equipment, or commercial property, our experienced team
            is here to help.
          </p>

          <div className="cta-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;