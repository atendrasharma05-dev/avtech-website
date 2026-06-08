import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

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
    background: "rgba(8,20,45,0.85)",
backdropFilter: "blur(10px)",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textShadow: "0 0 20px rgba(77,166,255,0.5)",
  }}
>
  <img
    src="/ChatGPT Image May 28, 2026, 03_52_48 PM.png"
    alt="AVTech Logo"
    style={{
      width: "60px",
      height: "60px",
      objectFit: "contain",
      transition: "0.4s",
cursor: "pointer",
    }}
  />

<h2
  style={{
    color: "#4da6ff",
    margin: 0,
    textShadow: "0 0 15px rgba(77,166,255,0.8)",
  }}
>
    AVTech Installation Services
  </h2>
</div>

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
          position: "relative",
overflow: "hidden",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <div
  style={{
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(77,166,255,0.25)",
    borderRadius: "50%",
    filter: "blur(80px)",
    top: "100px",
    left: "10%",
  }}
></div>

<div
  style={{
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "rgba(37,211,102,0.20)",
    borderRadius: "50%",
    filter: "blur(80px)",
    bottom: "50px",
    right: "10%",
  }}
></div>
<div style={{ maxWidth: "1000px" }}>

<h1
  style={{
    fontSize: "65px",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.2",
    background: "linear-gradient(90deg,#ffffff,#4da6ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
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

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  }}
>
  <span>✅ All India Service</span>
  <span>✅ Certified Technicians</span>
  <span>✅ Fast Installation</span>
</div>

  <div style={{ marginTop: "30px" }}>
<a
  href="tel:+918532066293"
  style={callBtn}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
      📞 Call Now
    </a>

<a
  href="https://wa.me/918532066293"
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
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
<div
  key={index}
  style={serviceCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 20px 40px rgba(0,0,0,0.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(0,0,0,0.08)";
  }}
>
<>
  <div
    style={{
      fontSize: "40px",
      marginBottom: "15px",
    }}
  >
    🔧
  </div>

  <h3
    style={{
      color: "#08142d",
      fontSize: "22px",
      marginBottom: "15px",
    }}
  >
    {service}
  </h3>
</>
<p
  style={{
    color: "#666",
    lineHeight: "1.7",
  }}
>
  Professional installation, expert technicians, quality support and proper cable management.
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
      {/* Gallery Section */}
<section
  id="gallery"
  style={{
    padding: "80px 20px",
    background: "#f8fafc",
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
    Our Recent Installations
  </h2>

  <p
    style={{
      color: "#666",
      marginBottom: "40px",
    }}
  >
    TV Installation, Smart Board Setup & Interactive Panel Projects
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    {[1,2,3,4,5,6,7,8,9,10,11,12].map((item) => (
      <img
        key={item}
        src={`https://picsum.photos/500/350?random=${item}`}
        alt="Gallery"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        }}
      />
    ))}
  </div>
</section>

{/* About Section */}
<section
  style={{
    background: "#ffffff",
    padding: "80px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        color: "#08142d",
        marginBottom: "25px",
      }}
    >
      About AVTech Installation Services
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      AVTech Installation Services provides professional TV installation,
      Interactive Flat Panel installation, Smart Classroom setup,
      Conference Room AV solutions and complete audio-video deployment
      services across India.
    </p>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#555",
        marginTop: "20px",
      }}
    >
      We work with schools, colleges, offices, corporate meeting rooms,
      showrooms and residential customers. Our goal is to deliver
      professional installation with proper cable management and
      long-term support.
    </p>
  </div>
</section>

{/* India Coverage */}
<section
  style={{
    background: "#08142d",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      marginBottom: "20px",
    }}
  >
    Service Available Across India
  </h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "auto",
      lineHeight: "1.8",
      color: "#d6e6ff",
    }}
  >
    We provide installation services in Delhi, Noida, Gurgaon,
    Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Kolkata, Patna,
    Begusarai and all major cities across India.
  </p>
</section>
      {/* Company Stats */}
<section
  style={{
    background: "#0f274f",
    color: "white",
    padding: "70px 20px",
    textAlign: "center",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <div>
      <h2 style={{ fontSize: "50px", margin: 0 }}>500+</h2>
      <p>Projects Completed</p>
    </div>

    <div>
      <h2 style={{ fontSize: "50px", margin: 0 }}>50+</h2>
      <p>Cities Covered</p>
    </div>

    <div>
      <h2 style={{ fontSize: "50px", margin: 0 }}>100+</h2>
      <p>Corporate Clients</p>
    </div>

    <div>
      <h2 style={{ fontSize: "50px", margin: 0 }}>24x7</h2>
      <p>Support Available</p>
    </div>
  </div>
</section>
      {/* Customer Reviews */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#08142d",
      marginBottom: "40px",
    }}
  >
    What Our Clients Say
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <div style={serviceCard}>
      ⭐⭐⭐⭐⭐
      <p>"Excellent TV installation service. Very professional team."</p>
      <strong>- School Project, Delhi</strong>
    </div>

    <div style={serviceCard}>
      ⭐⭐⭐⭐⭐
      <p>"Interactive panel installation completed perfectly."</p>
      <strong>- Corporate Office, Noida</strong>
    </div>

    <div style={serviceCard}>
      ⭐⭐⭐⭐⭐
      <p>"Fast installation and proper cable management."</p>
      <strong>- Client, Bengaluru</strong>
    </div>
  </div>
</section>
      {/* FAQ Section */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    maxWidth: "1000px",
    margin: "auto",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#08142d",
      marginBottom: "40px",
    }}
  >
    Frequently Asked Questions
  </h2>

  <div style={serviceCard}>
    <h3>Do you provide service across India?</h3>
    <p>Yes, we provide installation services in major cities across India.</p>
  </div>

  <div style={{ ...serviceCard, marginTop: "20px" }}>
    <h3>Do you install Interactive Flat Panels?</h3>
    <p>Yes, we install Interactive Flat Panels, Smart Boards and AV systems.</p>
  </div>

  <div style={{ ...serviceCard, marginTop: "20px" }}>
    <h3>Do you provide cable management?</h3>
    <p>Yes, professional cable management is included in our installation services.</p>
  </div>
</section>
      {/* Trusted By */}
<section
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
      marginBottom: "40px",
    }}
  >
    Trusted By Schools & Corporates
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <div style={serviceCard}>🏫 Schools</div>
    <div style={serviceCard}>🏢 Corporate Offices</div>
    <div style={serviceCard}>🎓 Colleges</div>
    <div style={serviceCard}>🏬 Showrooms</div>
    <div style={serviceCard}>🏛 Government Projects</div>
    <div style={serviceCard}>📺 Residential Clients</div>
  </div>
</section>
      {/* Contact Section */}
<section
  id="contact"
  style={{
    padding: "80px 20px",
    background: "#f5f7fb",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        color: "#08142d",
        marginBottom: "20px",
      }}
    >
      Contact Us
    </h2>

    <p
      style={{
        color: "#666",
        marginBottom: "40px",
      }}
    >
      Get in touch for TV Installation, Smart Board Setup and AV Solutions.
    </p>

    <div
      style={{
        maxWidth: "700px",
        margin: "auto",
        display: "grid",
        gap: "15px",
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        style={inputStyle}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="Email Address"
        style={inputStyle}
      />

      <textarea
        placeholder="Your Requirement"
        rows="5"
        style={inputStyle}
      ></textarea>

      <button
        style={{
          background: "#08142d",
          color: "white",
          border: "none",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Submit Inquiry
      </button>
    </div>

    <div style={{ marginTop: "40px" }}>
      <h3>📞 8532066293</h3>
      <h3>📧 installationavtech@gmail.com</h3>
      <h3>🌍 Service Available Across India</h3>
    </div>
  </div>
  <iframe
  title="AVTech Location"
  src="https://www.google.com/maps?q=Delhi,India&output=embed"
  width="100%"
  height="350"
  style={{
    border: "0",
    borderRadius: "15px",
    marginTop: "30px",
  }}
  loading="lazy"
></iframe>
</section>

{/* Footer */}
<footer
  style={{
    background: "#08142d",
    color: "white",
    textAlign: "center",
    padding: "30px",
  }}
>
  <p>📞 +91 8532066293</p>
<p>📧 installationavtech@gmail.com</p>
<p>📍 Serving Clients Across India</p>
  <p>
    Professional TV & Interactive Flat Panel Installation Across India
  </p>
  <div
  style={{
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <a href="#home" style={{ color: "#4da6ff", textDecoration: "none" }}>
    Home
  </a>

  <a href="#services" style={{ color: "#4da6ff", textDecoration: "none" }}>
    Services
  </a>

  <a href="#gallery" style={{ color: "#4da6ff", textDecoration: "none" }}>
    Gallery
  </a>

  <a href="#contact" style={{ color: "#4da6ff", textDecoration: "none" }}>
    Contact
  </a>
</div>

  <p style={{ marginTop: "15px", color: "#ccc" }}>
    © 2026 AVTech Installation Services. All Rights Reserved.
  </p>
</footer>

{/* Floating WhatsApp */}
      <a
  href="tel:+918532066293"
  style={{
    position: "fixed",
    bottom: "90px",
    right: "20px",
    background: "#08142d",
    color: "white",
    padding: "15px 20px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  }}
>
  📞 Call
</a>
<a
  href="https://wa.me/918532066293"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px 20px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  }}
>
  WhatsApp
</a>
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
  background: "#ffffff",
  color: "#08142d",
  padding: "15px 35px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  transition: "0.3s",
display: "inline-block",
};

const whatsappBtn = {
  background: "#25D366",
  color: "#fff",
  padding: "15px 35px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  transition: "0.3s",
display: "inline-block",
};
const serviceCard = {
  background: "#ffffff",
  padding: "35px",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  border: "1px solid #eef2f7",
  cursor: "pointer",
};

const featureCard = {
  background: "rgba(255,255,255,0.1)",
  padding: "25px",
  borderRadius: "15px",
};
const inputStyle = {
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
};
