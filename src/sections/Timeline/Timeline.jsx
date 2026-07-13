import "./Timeline.css";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "1896",
    title: "Company Founded",
    description:
      "Mahomed Moti & Sons began serving customers with quality products and trusted service."
  },
  {
    year: "1950s",
    title: "Business Expansion",
    description:
      "Expanded into hardware, agriculture and industrial supplies across the Mount Kenya region."
  },
  {
    year: "2000s",
    title: "Modern Growth",
    description:
      "Introduced modern retail practices and expanded commercial property investments."
  },
  {
    year: "Today",
    title: "Trusted Partner",
    description:
      "Continuing a legacy of excellence with four major business divisions serving Kenya."
  }
];

function Timeline() {
  return (
    <section className="timeline">
      <div className="container">

        <p className="section-tag">OUR JOURNEY</p>

        <h2>More Than a Century of Excellence</h2>

        <div className="timeline-wrapper">

          {timeline.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Timeline;