import "./Testimonials.css";
import testimonials from "../../Data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <p className="section-tag">
          TESTIMONIALS
        </p>

        <h2>
          Trusted by Businesses Across Kenya
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <div className="testimonial-card" key={item.id}>

              <div className="quote-icon">
                ❝
              </div>

              <p className="quote">
                {item.quote}
              </p>

              <h3>{item.name}</h3>

              <span>{item.company}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;