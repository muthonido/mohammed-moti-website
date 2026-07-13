import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <h2>Mahomed Moti & Sons</h2>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/agriculture">Agribusiness</Link>
        </li>

        <li>
          <Link to="/plaza">Plaza</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button>Request Quote</button>
    </nav>
  );
}

export default Navbar;