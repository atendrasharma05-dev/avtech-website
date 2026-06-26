import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { auth } from "./firebase";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      window.location.href = "/admin";
    } catch (error) {
      alert(error.message);
    }
  };

return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#08142d,#0f274f,#1f4e8c)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      padding: "30px",
    }}
  >
    {/* Background Glow */}
    <div
      style={{
        position: "absolute",
        width: 400,
        height: 400,
        background: "#4da6ff",
        borderRadius: "50%",
        filter: "blur(150px)",
        top: -100,
        left: -100,
        opacity: 0.25,
      }}
    />

    <div
      style={{
        position: "absolute",
        width: 300,
        height: 300,
        background: "#00e5ff",
        borderRadius: "50%",
        filter: "blur(120px)",
        bottom: -80,
        right: -80,
        opacity: 0.2,
      }}
    />

    <div
      style={{
        width: "1100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "60px",
      }}
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          flex: 1,
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          AVTech
        </h1>

        <h2
          style={{
            fontSize: "34px",
            lineHeight: "1.4",
          }}
        >
          Secure Admin Dashboard
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "#dbe8ff",
            maxWidth: "450px",
            lineHeight: "1.8",
          }}
        >
          Manage Reviews, Contact Requests,
          Gallery, Services and Website
          Content from one secure dashboard.
        </p>
        <motion.div
  animate={{
    opacity: [0.15, 0.45, 0.15],
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  style={{
    position: "absolute",
    left: "130px",
    top: "330px",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(77,166,255,.45), transparent 70%)",
    filter: "blur(35px)",
    zIndex: 0,
  }}
/>

<motion.div
  animate={{
    y: [0, -20, 0],
    rotate: [0, -4, 4, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    marginTop: "40px",
    fontSize: "170px",
    display: "inline-block",
    position: "relative",
zIndex: 2,
    filter: "drop-shadow(0 20px 40px rgba(0,0,0,.35))",
  }}
>
  👨‍🔧
</motion.div>
<motion.div
  animate={{
    y: [0, 10, 0],
    rotate: [0, -8, 8, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  style={{
    fontSize: "80px",
    marginTop: "-25px",
    position: "relative",
    display: "inline-block",
  }}
>
  💼

  {/* Tools */}
  <motion.div
    animate={{
      y: [20, -50, 20],
      opacity: [0, 1, 0],
      rotate: [0, 360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: 0,
    }}
    style={{
      position: "absolute",
      top: "-10px",
      left: "-30px",
      fontSize: "32px",
    }}
  >
    🔧
  </motion.div>
<motion.div
  animate={{
    y: [0, -18, 0],
    rotateY: [0, 10, -10, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  style={{
    position: "absolute",
    left: "240px",
    top: "120px",
  }}
>
  <div
    style={{
      width: "170px",
      height: "105px",
      background: "#111",
      border: "6px solid #555",
      borderRadius: "12px",
      boxShadow:
        "0 0 35px rgba(77,166,255,.8)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg,#4da6ff,#00d4ff,#7cf5ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "45px",
      }}
    >
      📺
    </div>
  </div>
</motion.div>
  <motion.div
    animate={{
      y: [20, -80, 20],
      opacity: [0, 1, 0],
      rotate: [0, -360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: 0.2,
    }}
    style={{
      position: "absolute",
      top: "-10px",
      left: "20px",
      fontSize: "32px",
    }}
  >
    📺
  </motion.div>

  <motion.div
    animate={{
      y: [20, -60, 20],
      opacity: [0, 1, 0],
      rotate: [0, 360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: 0.4,
    }}
    style={{
      position: "absolute",
      top: "-10px",
      left: "70px",
      fontSize: "30px",
    }}
  >
    🔩
  </motion.div>

  <motion.div
    animate={{
      y: [20, -90, 20],
      opacity: [0, 1, 0],
      rotate: [0, -360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: 0.6,
    }}
    style={{
      position: "absolute",
      top: "-10px",
      left: "110px",
      fontSize: "32px",
    }}
  >
    🛠️
  </motion.div>
  </motion.div>

      </motion.div>

      {/* RIGHT SIDE */}
      <motion.form
        onSubmit={handleLogin}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          flex: 1,
          maxWidth: "420px",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "25px",
          padding: "45px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            color: "#fff",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={loginInput}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={loginInput}
        />

        <button
          type="submit"
          style={loginButton}
        >
          Login
        </button>
      </motion.form>
    </div>
  </div>
);
}
const loginInput = {
  width: "100%",
  padding: "16px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const loginButton = {
  width: "100%",
  padding: "16px",
  borderRadius: "12px",
  border: "none",
  background: "#4da6ff",
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};