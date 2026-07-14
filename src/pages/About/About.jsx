import "./About.css";
import Timeline from "../../sections/Timeline/Timeline";
import Mission from "../../sections/Mission/Mission";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";
import CTA from "../../sections/CTA/CTA";

// Import the real plaza image
import plaza from "../../assets/divisions/plaza.jpg";

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-container">

          <div className="about-content">
            <p className="section-tag">ABOUT US</p>

            <h1>Over 120 Years of Building Kenya</h1>

            <p>
              Mohammed Moti & Sons Kenya Ltd has proudly served generations
              of customers since 1896. From supplying quality hardware and
              agricultural machinery to providing commercial property solutions,
              our commitment to excellence has remained unchanged for over a
              century.
            </p>
          </div>

          <div className="about-image">
            <img
              src={plaza}
              alt="Mohammed Moti Plaza"
            />
          </div>

        </div>
      </section>

      <Timeline />
      <Mission />
      <WhyChoose />
      <CTA />
    </>
  );
}

export default About;