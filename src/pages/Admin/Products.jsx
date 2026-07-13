import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/Admin/AdminLayout";
import {
  getProducts,
  deleteProduct,
} from "../../services/productService";

function AdminProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const { data, error } = await getProducts();

      if (error) {
        console.error(error);
        alert("Failed to load products.");
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    loadProducts();
  }, []);

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    const { error } = await deleteProduct(id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Product deleted successfully!");

    const { data } = await getProducts();
    setProducts(data || []);
  }

  return (
    <AdminLayout>
      <h1>Products</h1>

      <p>Manage all products from here.</p>

      {loading ? (
        <h2>Loading...</h2>
      ) : products.length === 0 ? (
        <h2>No products found.</h2>
      ) : (
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="table-image"
                  />
                </td>

                <td>{product.title}</td>

                <td>{product.category}</td>

                <td>
                  <span
                    className={
                      product.status === "In Stock"
                        ? "status in-stock"
                        : "status sold-out"
                    }
                  >
                    {product.status}
                  </span>
                </td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/admin/edit-product/${product.id}`)
                    }
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}

export default AdminProducts;