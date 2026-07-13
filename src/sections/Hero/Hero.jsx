import "./Hero.css";
import { motion } from "framer-motion";
import { FaAward, FaBuilding, FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            Serving Kenya Since 1896
          </span>

          <h1>
            Building Kenya's Future for Over <span>120 Years</span>
          </h1>

          <p>
            Mahomed Moti & Sons Kenya Ltd is a trusted supplier of hardware,
            agricultural machinery, industrial equipment, and commercial
            property across the Mount Kenya region.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Products
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>
          </div>

          <div className="hero-trust">
            <span>
              <FaCheckCircle />
              Trusted Since 1896
            </span>

            <span>
              <FaAward />
              120+ Years
            </span>

            <span>
              <FaBuilding />
              Serving Kenya
            </span>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
            alt="Modern Commercial Building"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;