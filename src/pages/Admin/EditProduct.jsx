import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdminLayout from "../../components/Admin/AdminLayout";
import {
  getProducts,
  updateProduct,
} from "../../services/productService";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Hardware");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      const { data, error } = await getProducts();

      if (error) {
        alert(error.message);
        return;
      }

      const product = data.find((item) => item.id === Number(id));

      if (!product) {
        alert("Product not found.");
        navigate("/admin/products");
        return;
      }

      setTitle(product.title);
      setCategory(product.category);
      setDescription(product.description);
      setStatus(product.status);
      setImage(product.image);

      setLoading(false);
    }

    loadProduct();
  }, [id, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await updateProduct(id, {
      title,
      category,
      description,
      status,
      image,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Product updated successfully!");

    navigate("/admin/products");
  }

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <h1>Edit Product</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product Name"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Hardware</option>
          <option>Agriculture</option>
          <option>Industrial</option>
          <option>Property</option>
        </select>

        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>In Stock</option>
          <option>Sold Out</option>
        </select>

        <button className="login-btn">
          💾 Save Changes
        </button>
      </form>
    </AdminLayout>
  );
}

export default EditProduct;