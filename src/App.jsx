export default function App() {
  return (
    <div
      style={{
        background: "#08142d",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "60px" }}>
        AVTech Installation Services
      </h1>

      <p style={{ fontSize: "24px", maxWidth: "800px" }}>
        Professional TV Installation, Smart Board Setup,
        Interactive Flat Panel Installation and AV Solutions Across India.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a
          href="tel:+918532066293"
          style={{
            background: "white",
            color: "black",
            padding: "15px 30px",
            borderRadius: "10px",
            marginRight: "15px",
            textDecoration: "none"
          }}
        >
          Call Now
        </a>

        <a
          href="https://wa.me/918532066293"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "green",
            color: "white",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none"
          }}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
