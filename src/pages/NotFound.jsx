import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "80px", color: "#13233d" }}>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="primary-btn"
        style={{ marginTop: "25px" }}
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;