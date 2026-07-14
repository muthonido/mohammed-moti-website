import "./Navbar.css";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-box">
            MM
          </div>

          <div className="logo-text">
            <h3>Mohammed Moti & Sons</h3>
            <span>KENYA LTD · EST. 1896</span>
          </div>
        </div>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/products" onClick={closeMenu}>Products</Link>
          </li>

          <li>
            <Link to="/agriculture" onClick={closeMenu}>Agriculture</Link>
          </li>

          <li>
            <Link to="/plaza" onClick={closeMenu}>Plaza</Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>

          {/* Mobile-only button */}
          <li className="mobile-quote">
            <button className="quote-btn">
              Request Quote
            </button>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="quote-btn desktop-btn">
          Request Quote
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;