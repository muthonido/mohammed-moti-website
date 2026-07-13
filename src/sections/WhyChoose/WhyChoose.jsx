import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaTools,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaCheckCircle />,
    title: "120+ Years of Experience",
    text: "Serving Kenya since 1896 with trusted products and dependable service."
  },
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    text: "Knowledgeable staff ready to help customers choose the right products."
  },
  {
    icon: <FaHandshake />,
    title: "Trusted by Thousands",
    text: "A reputation built through generations of honesty and customer satisfaction."
  },
  {
    icon: <FaTools />,
    title: "Wide Product Range",
    text: "Hardware, agricultural machinery, industrial equipment, and commercial property."
  }
];

function WhyChoose() {
  return (
    <section className="whychoose">
      <div className="container">

        <p className="section-tag">
          WHY CHOOSE US
        </p>

        <h2>Why Customers Trust mohammed Moti</h2>

        <div className="why-grid">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;