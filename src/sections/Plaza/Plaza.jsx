import "./Plaza.css";
import plaza from "../../Data/plaza";

function Plaza() {
  return (
    <section className="plaza">

      <div className="container">

        <div className="plaza-content">

          <div className="plaza-text">

            <p className="section-tag">
              {plaza.subtitle}
            </p>

            <h2>{plaza.title}</h2>

            <p className="plaza-description">
              {plaza.description}
            </p>

            <ul className="plaza-features">

              {plaza.features.map((feature, index) => (

                <li key={index}>
                  ✔ {feature}
                </li>

              ))}

            </ul>

            <div className="plaza-buttons">

              <button className="primary-btn">
                View Spaces
              </button>

              <button className="secondary-btn">
                Book Viewing
              </button>

            </div>

          </div>

          <div className="plaza-images">

            <div className="large-image">
              Plaza Image
            </div>

            <div className="small-image">
              Office Image
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Plaza;