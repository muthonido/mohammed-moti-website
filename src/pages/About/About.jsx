import "./About.css";
import Timeline from "../../sections/Timeline/Timeline";
import Mission from "../../sections/Mission/Mission";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";
import CTA from "../../sections/CTA/CTA";
function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-container">
          <div className="about-content">
            <p className="section-tag">ABOUT US</p>

            <h1>Over 120 Years of Building Kenya</h1>

            <p>
              Mahomed Moti & Sons Kenya Ltd has been serving generations of
              customers since 1896.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
              alt="Company Building"
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