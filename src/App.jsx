export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Navbar */}
      <header
        style={{
          background: "#08142d",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ margin: 0, color: "#4da6ff" }}>
          AVTech Installation Services
        </h2>

        <nav>
          <a href="#home" style={navLink}>Home</a>
          <a href="#services" style={navLink}>Services</a>
          <a href="#gallery" style={navLink}>Gallery</a>
          <a href="#contact" style={navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          background:
            "linear-gradient(135deg, #08142d 0%, #0f274f 50%, #1f4e8c 100%)",
          color: "white",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px" }}>
          <h1
            style={{
              fontSize: "55px",
              marginBottom: "20px",
            }}
          >
            Professional TV & Interactive Flat Panel Installation
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#d6e6ff",
              lineHeight: "1.8",
            }}
          >
            AVTech Installation Services provides professional TV wall mounting,
            smart classroom setup, interactive flat panel installation and AV
            solutions across India.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a
              href="tel:+918532066293"
              style={{
                background: "#ffffff",
                color: "#000",
                padding: "15px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                marginRight: "15px",
                fontWeight: "bold",
              }}
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918532066293"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25D366",
                color: "white",
                padding: "15px 30px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              💬 WhatsApp
            </a>
          </div>

          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3>500+</h3>
              <p>Installations Completed</p>
            </div>

            <div style={cardStyle}>
              <h3>50+</h3>
              <p>Cities Covered</p>
            </div>

            <div style={cardStyle}>
              <h3>24x7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  marginLeft: "20px",
  fontWeight: "bold",
};

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
};
