export default function App() {
  const services = [
    "TV Wall Mount Installation",
    "Interactive Flat Panel Installation",
    "Smart Classroom Setup",
    "Projector Installation",
    "Conference Room AV Setup",
    "LED Display Installation",
    "Video Conferencing Setup",
    "Cable Management",
  ];

  const features = [
    "All India Service",
    "Experienced Team",
    "Fast Installation",
    "Affordable Pricing",
    "Professional Support",
    "Clean Cable Management",
    "School & Office Experts",
    "Customer Satisfaction",
  ];

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
        }}
      >
        <h2 style={{ color: "#4da6ff", margin: 0 }}>
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
            "linear-gradient(135deg,#08142d,#0f274f,#1f4e8c)",
          color: "white",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px" }}>
          <h1 style={{ fontSize: "55px" }}>
            Professional TV & Interactive Flat Panel Installation
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#d6e6ff",
            }}
          >
            AVTech Installation Services provides professional TV wall
            mounting, smart classroom setup and AV solutions across India.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a href="tel:+918532066293" style={callBtn}>
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918532066293"
              target="_blank"
              rel="noreferrer"
              style={whatsappBtn}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "80px 20px",
          background: "#f5f7fb",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", color: "#08142d" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "40px auto",
          }}
        >
          {services.map((service, index) => (
            <div key={index} style={serviceCard}>
              <h3>{service}</h3>
              <p>Professional installation with expert support.</p>
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
        <h2 style={{ fontSize: "42px" }}>
          Why Choose AVTech?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "40px auto",
          }}
        >
          {features.map((item, index) => (
            <div key={index} style={featureCard}>
              ✅ {item}
            </div>
          ))}
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

const callBtn = {
  background: "#fff",
  color: "#000",
  padding: "15px 30px",
  borderRadius: "10px",
  textDecoration: "none",
  marginRight: "15px",
  fontWeight: "bold",
};

const whatsappBtn = {
  background: "#25D366",
  color: "#fff",
  padding: "15px 30px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const serviceCard = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const featureCard = {
  background: "rgba(255,255,255,0.1)",
  padding: "25px",
  borderRadius: "15px",
};
