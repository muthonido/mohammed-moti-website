import { Link } from "react-router-dom";
import "./Admin.css";

function AdminSidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">mohammed Moti CMS</h2>

      <nav>
        <Link to="/admin/dashboard">📊 Dashboard</Link>

        <Link to="/admin/products">📦 Products</Link>

        <Link to="/admin/add-product">➕ Add Product</Link>

        <Link to="/admin/messages">📨 Messages</Link>

        <Link to="/admin/settings">⚙️ Settings</Link>

        <Link to="/admin/login">🚪 Logout</Link>
      </nav>
    </aside>
  );
}

export default AdminSidebar;