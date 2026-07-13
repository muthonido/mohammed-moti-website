import { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { addProduct } from "../../services/productService";
import { uploadProductImage } from "../../services/storageService";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Hardware");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    let imageUrl = "";

    // Upload image if selected
    if (imageFile) {
      const { publicUrl, error } = await uploadProductImage(imageFile);

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      imageUrl = publicUrl;
    }

    // Save product
    const { error } = await addProduct({
      title,
      category,
      description,
      image: imageUrl,
      status,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Product Added Successfully!");

    setTitle("");
    setCategory("Hardware");
    setDescription("");
    setStatus("In Stock");
    setImageFile(null);
  }

  return (
    <AdminLayout>
      <h1>Add Product</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>In Stock</option>
          <option>Sold Out</option>
        </select>

        <button
          className="login-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Save Product"}
        </button>
      </form>
    </AdminLayout>
  );
}

export default AddProduct;