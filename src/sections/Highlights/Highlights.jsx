import "./Highlights.css";
import { motion } from "framer-motion";

function Highlights() {
  const stats = [
    {
      title: "120+ Years",
      subtitle: "Serving Kenya Since 1896",
    },
    {
      title: "4 Divisions",
      subtitle: "Hardware, Agriculture, Industrial & Plaza",
    },
    {
      title: "50,000+",
      subtitle: "Satisfied Customers",
    },
  ];

  return (
    <section className="highlights">
      <div className="highlights-container">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="highlight-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
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