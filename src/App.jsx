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
      <section{/* Services Section */}
<section
  id="services"
  style={{
    padding: "80px 20px",
    background: "#f5f7fb",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#08142d",
      marginBottom: "15px",
    }}
  >
    Our Services
  </h2>

  <p
    style={{
      color: "#666",
      marginBottom: "50px",
      fontSize: "18px",
    }}
  >
    Professional AV Installation Services Across India
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    {[
      "TV Wall Mount Installation",
      "Interactive Flat Panel Installation",
      "Smart Classroom Setup",
      "Projector Installation",
      "Conference Room AV Setup",
      "LED Display Installation",
      "Video Conferencing Setup",
      "Cable Management",
    ].map((service, index) => (
      <div
        key={index}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#0f274f" }}>{service}</h3>
        <p style={{ color: "#666" }}>
          Professional installation with expert support.
        </p>
      </div>
    ))}
  </div>
</section>

{/* Why Choose Us */}
<section
  style={{
    background: "#08142d",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
    Why Choose AVTech?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "40px auto 0",
    }}
  >
    {[
      "All India Service",
      "Experienced Team",
      "Fast Installation",
      "Affordable Pricing",
      "Professional Support",
      "Clean Cable Management",
      "School & Office Experts",
      "Customer Satisfaction",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        ✅ {item}
      </div>
    ))}
  </div>
</section>
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
