import "./Highlights.css";
import { motion } from "framer-motion";

function Highlights() {
  const stats = [
    {
      title: "ISO 9001",
      subtitle: "Certified",
    },
    {
      title: "4 Divisions",
      subtitle: "Nationwide",
    },
    {
      title: "Since 1896",
      subtitle: "Family Business",
    },
  ];

  return (
    <section className="highlights">
      <div className="highlights-container">

        {stats.map((item, index) => (
          <motion.div
            className="highlight-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Highlights;