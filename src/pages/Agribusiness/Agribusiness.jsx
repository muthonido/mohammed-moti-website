import "./Agribusiness.css";
import { Link } from "react-router-dom";

function Agribusiness() {
  return (
    <section className="coming-soon">
      <div className="coming-container">

        <h1>🌾 Agribusiness Division</h1>

        <h2>Coming Soon</h2>

        <p>
          We are preparing a dedicated Agribusiness platform showcasing
          tractors, irrigation systems, water pumps, generators,
          greenhouse equipment, animal feeds and modern farming solutions.
        </p>

        <Link to="/products" className="primary-btn">
          Browse Available Products
        </Link>

      </div>
    </section>
  );
}

export default Agribusiness;