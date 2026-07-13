import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

function Admin() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    testConnection();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Admin Dashboard</h1>
      <p>Supabase Connected 🚀</p>
    </div>
  );
}

export default Admin;