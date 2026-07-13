import "./Stats.css";
import stats from "../../Data/stats";
import { motion } from "framer-motion";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">

        <motion.p
          className="stats-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          MAHOMED MOTI & SONS — BY THE NUMBERS
        </motion.p>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              className="stat-card"
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
            >
              <div className="stat-icon">
                {item.icon}
              </div>

              <h2>{item.number}</h2>

              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="stats-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Trusted Across the Mount Kenya Region Since 1896
        </motion.h3>

      </div>
    </section>
  );
}

export default Stats;