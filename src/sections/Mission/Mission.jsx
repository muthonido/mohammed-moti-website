import "./Mission.css";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

const cards = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To provide high-quality products and reliable services that empower businesses, farmers, and communities across Kenya."
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "To remain Kenya's most trusted supplier by combining innovation, integrity, and over a century of excellence."
  },
  {
    icon: <FaGem />,
    title: "Our Values",
    text: "Integrity, quality, customer satisfaction, teamwork, and continuous improvement guide everything we do."
  }
];

function Mission() {
  return (
    <section className="mission">
      <div className="container">

        <p className="section-tag">WHO WE ARE</p>

        <h2>Mission, Vision & Values</h2>

        <div className="mission-grid">
          {cards.map((card, index) => (
            <motion.div
              className="mission-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
            >
              <div className="mission-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Mission;