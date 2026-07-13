import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import "./Admin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await login(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/admin/dashboard");
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>

        <h1>mohammed Moti CMS</h1>

        <p>Administrator Login</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="login-btn"
          type="submit"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  );
}

export default Login;