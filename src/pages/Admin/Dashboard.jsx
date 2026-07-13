import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { getProducts } from "../../services/productService";
import { getMessages } from "../../services/messageService";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      setLoading(true);

      const { data: productsData } = await getProducts();
      const { data: messagesData } = await getMessages();

      setProducts(productsData || []);
      setMessages(messagesData || []);

      setLoading(false);
    }

    loadDashboard();
  }, []);

  const totalProducts = products.length;

  const inStock = products.filter(
    (product) => product.status === "In Stock"
  ).length;

  const totalMessages = messages.length;

  const newMessages = messages.filter(
    (message) => message.status === "New"
  ).length;

  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <p>Welcome back, Administrator 👋</p>

      {loading ? (
        <h2 style={{ marginTop: "30px" }}>Loading Dashboard...</h2>
      ) : (
        <>
          {/* Statistics Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            <div className="card">
              <h2>{totalProducts}</h2>
              <p>📦 Total Products</p>
            </div>

            <div className="card">
              <h2>{inStock}</h2>
              <p>⭐ Products In Stock</p>
            </div>

            <div className="card">
              <h2>{totalMessages}</h2>
              <p>📨 Customer Messages</p>
            </div>

            <div className="card">
              <h2>{newMessages}</h2>
              <p>🟢 New Leads</p>
            </div>
          </div>

          {/* Latest Products */}

          <div
            style={{
              marginTop: "50px",
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h2>📦 Latest Products</h2>

            {products.length === 0 ? (
              <p>No products available.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <thead>
                  <tr>
                    <th align="left">Product</th>
                    <th align="left">Category</th>
                    <th align="left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {products.slice(0, 5).map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>{product.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Latest Messages */}

          <div
            style={{
              marginTop: "30px",
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h2>📨 Latest Customer Messages</h2>

            {messages.length === 0 ? (
              <p>No customer inquiries yet.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <thead>
                  <tr>
                    <th align="left">Customer</th>
                    <th align="left">Product</th>
                    <th align="left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {messages.slice(0, 5).map((message) => (
                    <tr key={message.id}>
                      <td>{message.name}</td>
                      <td>{message.product}</td>
                      <td>{message.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </AdminLayout>
  );
}

export default Dashboard;