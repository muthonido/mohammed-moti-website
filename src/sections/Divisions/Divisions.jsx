import "./Divisions.css";
import divisions from "../../Data/Division";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Divisions() {
  const navigate = useNavigate();

  return (
    <section className="divisions">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          OUR DIVISIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Four Pillars of Kenyan Commerce
        </motion.h2>

        <div className="division-grid">
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              className="division-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              onClick={() => navigate(division.link)}
              style={{ cursor: "pointer" }}
            >
              <div className="image-placeholder">
                <span>{division.icon}</span>
              </div>

              <div className="card-content">
                <h3>{division.title}</h3>

                <p>{division.description}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(division.link);
                  }}
                >
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Divisions;