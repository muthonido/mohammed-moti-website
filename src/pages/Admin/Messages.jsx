import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import {
  getMessages,
  updateMessage,
  deleteMessage,
} from "../../services/messageService";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      setLoading(true);

      const { data, error } = await getMessages();

      if (error) {
        console.error(error);
        alert(error.message);
      } else {
        setMessages(data || []);
      }

      setLoading(false);
    }

    loadMessages();
  }, []);

  async function refreshMessages() {
    const { data } = await getMessages();
    setMessages(data || []);
  }

  async function handleContacted(id) {
    const { error } = await updateMessage(id, "Contacted");

    if (error) {
      alert(error.message);
      return;
    }

    refreshMessages();
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this customer message?"
    );

    if (!confirmDelete) return;

    const { error } = await deleteMessage(id);

    if (error) {
      alert(error.message);
      return;
    }

    refreshMessages();
  }

  return (
    <AdminLayout>
      <h1>Customer Messages</h1>

      <p>Manage all customer inquiries.</p>

      {loading ? (
        <h2>Loading...</h2>
      ) : messages.length === 0 ? (
        <h2>No customer messages yet.</h2>
      ) : (
        <div style={{ marginTop: "30px" }}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 5px 15px rgba(0,0,0,.08)",
              }}
            >
              <h2>{message.name}</h2>

              <p>
                <strong>Email:</strong> {message.email}
              </p>

              <p>
                <strong>Phone:</strong> {message.phone}
              </p>

              <p>
                <strong>Product:</strong> {message.product}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <p>{message.message}</p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      message.status === "New"
                        ? "green"
                        : "#b38b10",
                    fontWeight: "bold",
                  }}
                >
                  {message.status}
                </span>
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <button
                  className="edit-btn"
                  onClick={() =>
                    handleContacted(message.id)
                  }
                >
                  ✓ Mark Contacted
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(message.id)
                  }
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

export default Messages;