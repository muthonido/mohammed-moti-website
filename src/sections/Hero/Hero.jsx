import "./Hero.css";
import { motion } from "framer-motion";
import { FaAward, FaBuilding, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hardware.jpg";

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
            Mohammed Moti & Sons Kenya Ltd is a trusted supplier of
            hardware, agricultural machinery, industrial equipment and
            commercial property serving customers across the Mount Kenya
            region.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="primary-btn">
                Explore Products
              </button>
            </Link>

            <Link to="/contact">
              <button className="secondary-btn">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="hero-trust">

            <span>
              <FaCheckCircle />
              Trusted Since 1896
            </span>

            <span>
              <FaAward />
              120+ Years of Excellence
            </span>

            <span>
              <FaBuilding />
              Serving Kenya Nationwide
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
            src={heroImage}
            alt="Mohammed Moti & Sons Kenya"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;