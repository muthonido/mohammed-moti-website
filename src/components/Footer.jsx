import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h2>Mahomed Moti & Sons Kenya Ltd</h2>

          <p>
            Serving Kenya since 1896 with quality hardware,
            agricultural machinery, industrial equipment and
            commercial property solutions.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Our Divisions</h3>

          <Link to="/products?category=Hardware">Hardware</Link>
          <Link to="/agriculture">Agribusiness</Link>
          <Link to="/products?category=Industrial">Industrial</Link>
          <Link to="/plaza">Mahomed Moti Plaza</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📍 Moi Avenue, Meru, Kenya</p>

          <p>📮 P.O. Box 19-60200</p>

          <p>📞 +254 725 800 800</p>

          <p>✉ moti@plansonline.net</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mahomed Moti & Sons Kenya Ltd.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;