import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-year">Serving Kenya Since 1896</p>

        <h1>Building Kenya's Future for Over 120 Years</h1>

        <p className="hero-text">
          Mahomed Moti & Sons Kenya Ltd is a trusted supplier of hardware,
          agricultural machinery, industrial equipment, construction materials,
          generators, and commercial property solutions across Kenya.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;