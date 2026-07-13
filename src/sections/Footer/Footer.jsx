import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div className="footer-column">

            <div className="footer-logo">

              <div className="logo-box">
                MM
              </div>

              <div>

                <h3>mohammed Moti</h3>

                <span>& Sons Kenya Ltd</span>

              </div>

            </div>

            <p>
              Serving Kenya with integrity and excellence
              since 1896. Trusted by businesses,
              contractors and homeowners nationwide.
            </p>

          </div>

          <div className="footer-column">

            <h4>Products</h4>

            <ul>
              <li>Hardware</li>
              <li>Industrial Equipment</li>
              <li>Agriculture</li>
              <li>Plumbing</li>
              <li>Paints</li>
            </ul>

          </div>

          <div className="footer-column">

            <h4>Quick Links</h4>

            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>History</li>
              <li>Contact</li>
            </ul>

          </div>

          <div className="footer-column">

            <h4>Contact</h4>

            <ul>
              <li>📍 Meru CBD</li>
              <li>📞 +254 722 000 000</li>
              <li>✉ info@mohammed-moti.co.ke</li>
              <li>🕒 Mon–Fri 8:00–5:30</li>
            </ul>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © 2026 mohammed Moti & Sons Kenya Ltd.
            All Rights Reserved.
          </p>

          <div>

            <span>Privacy Policy</span>

            <span>Terms</span>

            <span>Sitemap</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;