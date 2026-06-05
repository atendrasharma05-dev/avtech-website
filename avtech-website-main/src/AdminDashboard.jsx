import { useState } from "react";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export default function AdminDashboard() {
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState("");

  const saveContactDetails = async () => {
  try {
    console.log("Saving Data...");

    await setDoc(doc(db, "settings", "contact"), {
      phone,
      whatsapp,
      updatedAt: new Date().toISOString(),
    });

    console.log("Data Saved Successfully");
    alert("FIREBASE SAVE SUCCESS ✅");
  } catch (error) {
    console.error("Firestore Error:", error);
    alert("ERROR: " + error.message);
  }
};

  const addService = async () => {
  try {
    if (!service) {
      alert("Please enter service name");
      return;
    }

    await setDoc(doc(db, "services", service), {
      name: service,
      createdAt: new Date().toISOString(),
    });

    alert("SERVICE SAVED ✅");
    setService("");
  } catch (error) {
    console.error("Firestore Error:", error);
    alert("ERROR: " + error.message);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#08142d",
          marginBottom: "30px",
        }}
      >
        AVTech Admin Dashboard 🚀
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={card}>🏠 Hero Section</div>
        <div style={card}>🛠 Services</div>
        <div style={card}>🖼 Gallery</div>
        <div style={card}>📞 Contact Details</div>
        <div style={card}>💬 WhatsApp Settings</div>
        <div style={card}>🚪 Logout</div>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Contact Details</h2>

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="WhatsApp Number"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          style={inputStyle}
        />

        <button style={btn} onClick={saveContactDetails}>
          Save Changes
        </button>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Services Management</h2>

        <input
          type="text"
          placeholder="Add New Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={inputStyle}
        />

        <button style={btn} onClick={addService}>
          Add Service
        </button>
      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "10px",
  boxSizing: "border-box",
};

const btn = {
  background: "#08142d",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};