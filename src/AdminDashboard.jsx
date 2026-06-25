import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [phone, setPhone] = useState("");
const [whatsapp, setWhatsapp] = useState("");
  const navigate = useNavigate();
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this inquiry?"
  );

  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "inquiries", id));

    setInquiries((prev) =>
      prev.filter((item) => item.id !== id)
    );

    alert("Inquiry Deleted Successfully");
  } catch (error) {
    console.error(error);
    alert("Delete Failed");
  }
};

  // Login Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Load Inquiries
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "inquiries")
        );

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setInquiries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInquiries();
  }, []);
  useEffect(() => {
  const loadContact = async () => {
    const docRef = doc(db, "settings", "contact");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setPhone(docSnap.data().phone || "");
      setWhatsapp(docSnap.data().whatsapp || "");
    }
  };

  loadContact();
}, []);
const saveContact = async () => {
  try {
    await setDoc(doc(db, "settings", "contact"), {
      phone,
      whatsapp,
    });

    alert("Contact Details Saved Successfully");
  } catch (error) {
    console.error(error);
    alert("Error Saving Contact Details");
  }
};
  // Logout
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Logout
      </button>
<div style={{ marginBottom: "20px" }}>
  <h3>Contact Settings</h3>

  <input
    type="text"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    style={{
      padding: "10px",
      marginRight: "10px",
      width: "250px",
    }}
  />
<button
  onClick={saveContact}
  style={{
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Save Contact Details
</button>
  <input
    type="text"
    placeholder="WhatsApp Number"
    value={whatsapp}
    onChange={(e) => setWhatsapp(e.target.value)}
    style={{
      padding: "10px",
      width: "250px",
    }}
  />
</div>
      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Requirement</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {inquiries.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>{item.requirement}</td>

              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >

                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}