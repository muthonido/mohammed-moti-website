import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Agribusiness from "./pages/Agribusiness/Agribusiness";
import Plaza from "./pages/Plaza/Plaza";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";
import AdminProducts from "./pages/Admin/Products";
import EditProduct from "./pages/Admin/EditProduct";
import Messages from "./pages/Admin/Messages";

import ProtectedRoute from "./components/Auth/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/agriculture" element={<Agribusiness />} />
        <Route path="/plaza" element={<Plaza />} />
        <Route path="/contact" element={<Contact />} />

        {/* ================= ADMIN ================= */}

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-product/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* WhatsApp button appears on public pages only */}
      {!isAdminPage && <WhatsAppButton />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;