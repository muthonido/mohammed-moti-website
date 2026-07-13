import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <div className="logo">

          <div className="logo-box">
            MM
          </div>

          <div className="logo-text">
            <h3>mohammed Moti & Sons</h3>
            <span>KENYA LTD · EST. 1896</span>
          </div>

        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Agriculture</li>
          <li>Plaza</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="quote-btn">
          Request Quote
        </button>

        <div className="menu-icon">
          <HiOutlineMenuAlt3  size={32} />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;