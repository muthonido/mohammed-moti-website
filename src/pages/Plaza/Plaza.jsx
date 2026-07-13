import "./Plaza.css";
import { Link } from "react-router-dom";

function Plaza() {
  return (
    <section className="coming-soon">
      <div className="coming-container">

        <h1>🏢 Mahomed Moti Plaza</h1>

        <h2>Coming Soon</h2>

        <p>
          Soon you'll be able to explore office spaces,
          retail shops and commercial property available
          for rent at Mahomed Moti Plaza in Meru.
        </p>

        <Link to="/contact" className="primary-btn">
          Contact Us
        </Link>

      </div>
    </section>
  );
}

export default Plaza;