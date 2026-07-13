import "./Products.css";
import products from "../../Data/products";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  function goToCategory(title) {
    switch (title) {
      case "Hardware":
        navigate("/products?category=Hardware");
        break;

      case "Electrical":
        navigate("/products?category=Electrical");
        break;

      case "Agriculture":
        navigate("/products?category=Agriculture");
        break;

      case "Plumbing":
        navigate("/products?category=Plumbing");
        break;

      case "Paints":
        navigate("/products?category=Paints");
        break;

      case "Industrial":
        navigate("/products?category=Industrial");
        break;

      default:
        navigate("/products");
    }
  }

  return (
    <section className="products">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          FEATURED PRODUCTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Explore Our Product Categories
        </motion.h2>

        <div className="products-grid">

          {products.map((product, index) => (

            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              onClick={() => goToCategory(product.title)}
              style={{ cursor: "pointer" }}
            >

              <div className="product-icon">
                {product.icon}
              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToCategory(product.title);
                }}
              >
                View Category →
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;