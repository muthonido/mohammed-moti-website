import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div>
        <h2>mohammed Moti & Sons</h2>
      </div>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </div>

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
        </li>

        <li>
          <Link to="/agriculture" onClick={closeMenu}>
            Agribusiness
          </Link>
        </li>

        <li>
          <Link to="/plaza" onClick={closeMenu}>
            Plaza
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

      <button>Request Quote</button>
    </nav>
  );
}

export default Navbar;