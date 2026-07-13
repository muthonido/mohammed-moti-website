import "./Products.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/productService";

function Products() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Get category directly from URL
  const selectedCategory = searchParams.get("category") || "All";

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const { data, error } = await getProducts();

      if (error) {
        console.error(error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const term = search.toLowerCase();

      const matchesSearch =
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() ===
          selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  function changeCategory(category) {
    if (category === "All") {
      navigate("/products");
    } else {
      navigate(`/products?category=${category}`);
    }
  }

  return (
    <>
      <section className="products-hero">
        <div className="container">
          <p className="section-tag">OUR PRODUCTS</p>

          <h1>Quality Products for Every Industry</h1>

          <p>
            Browse our extensive range of hardware,
            agricultural machinery,
            industrial equipment,
            generators,
            construction materials and commercial solutions.
          </p>

          <input
            type="text"
            className="search-box"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="products-list">
        <div className="container">

          <div className="filter-buttons">

            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => changeCategory("All")}
            >
              All
            </button>

            <button
              className={selectedCategory === "Hardware" ? "active" : ""}
              onClick={() => changeCategory("Hardware")}
            >
              Hardware
            </button>

            <button
              className={selectedCategory === "Agriculture" ? "active" : ""}
              onClick={() => changeCategory("Agriculture")}
            >
              Agriculture
            </button>

            <button
              className={selectedCategory === "Industrial" ? "active" : ""}
              onClick={() => changeCategory("Industrial")}
            >
              Industrial
            </button>

            <button
              className={selectedCategory === "Property" ? "active" : ""}
              onClick={() => changeCategory("Property")}
            >
              Property
            </button>

          </div>

          {loading ? (
            <h2 style={{ textAlign: "center" }}>
              Loading products...
            </h2>
          ) : filteredProducts.length === 0 ? (
            <h2 style={{ textAlign: "center" }}>
              No products found.
            </h2>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <span
                    className={
                      product.status === "In Stock"
                        ? "stock-badge"
                        : "sold-badge"
                    }
                  >
                    {product.status}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <button
                    className="primary-btn"
                    disabled={product.status === "Sold Out"}
                    onClick={() =>
                      navigate("/contact", {
                        state: {
                          product: product.title,
                        },
                      })
                    }
                  >
                    {product.status === "Sold Out"
                      ? "Sold Out"
                      : "Request Quote"}
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default Products;