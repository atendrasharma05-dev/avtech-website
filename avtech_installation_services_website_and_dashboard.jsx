export default function AVTechWebsite() {
  const isLoggedIn = true;
  const services = [
    "TV Wall Mount Installation",
    "Interactive Flat Panel Installation",
    "Smart Classroom Setup",
    "Conference Room AV Setup",
    "Cable Management",
    "LED Display Installation",
  ];

  const cities = [
    "Delhi",
    "Noida",
    "Gurgaon",
    "Patna",
    "Begusarai",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Chennai",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-400">
            AVTech Installation Services
          </h1>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#gallery" className="hover:text-blue-400">Gallery</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Professional TV & Interactive Flat Panel Installation Services Across India
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              We provide professional TV Wall Mount Installation, Smart Board Setup,
              Interactive Flat Panel Installation and AV Solutions for Schools,
              Offices, Conference Rooms and Homes.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl font-semibold shadow-lg">
                Call Now
              </button>

              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold shadow-lg">
                WhatsApp Now
              </button>

              <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-2xl font-semibold shadow-lg">
                Get Free Quote
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop"
              alt="AV Installation"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-600">
              Professional AV installation solutions for homes, offices and schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-2xl mb-5"></div>
                <h4 className="text-xl font-bold mb-3">{service}</h4>
                <p className="text-gray-600">
                  Professional setup with clean installation and proper cable management.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Technician"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">
              Why Choose AVTech Installation Services?
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "All India Service Available",
                "Professional Installation Team",
                "Fast Response Support",
                "Clean Cable Management",
                "School & Office Expertise",
                "Affordable Pricing",
                "Same Day Service",
                "Reliable Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl px-5 py-4 font-medium"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Recent Installations</h3>
            <p className="text-gray-600">Professional work gallery</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-3xl shadow-lg bg-white">
                <img
                  src={`https://picsum.photos/600/400?random=${item}`}
                  alt="Gallery"
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Service Available Across India
          </h3>

          <p className="text-gray-300 max-w-3xl mx-auto mb-10">
            We provide TV Installation and Interactive Flat Panel Installation
            services across India for schools, offices and homes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-blue-500 px-6 py-3 rounded-full font-semibold"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Professional installation service and clean work.",
              "Very fast installation support for our school smart board.",
              "Excellent TV wall mounting service.",
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 shadow-md"
              >
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            About AVTech Installation Services
          </h3>

          <p className="text-lg text-gray-700 leading-8">
            AVTech Installation Services provides professional TV Installation,
            Interactive Flat Panel Installation, Smart Board Setup and AV
            Solutions across India. We work with schools, offices, conference
            rooms, showrooms and homes.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              Call us today for professional installation support across India.
            </p>

            <div className="space-y-4 text-lg">
              <p>📞 Phone Number</p>
              <p>💬 WhatsApp Support</p>
              <p>📧 Email Address</p>
              <p>📍 Service Areas Across India</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Name"
                className="p-4 rounded-2xl border"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="p-4 rounded-2xl border"
              />

              <input
                type="text"
                placeholder="City"
                className="p-4 rounded-2xl border"
              />

              <select className="p-4 rounded-2xl border">
                <option>Select Service</option>
                {services.map((service, index) => (
                  <option key={index}>{service}</option>
                ))}
              </select>

              <textarea
                placeholder="Message"
                rows="5"
                className="p-4 rounded-2xl border"
              ></textarea>

              <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Admin Dashboard</h3>
            <p className="text-gray-300">
              Manage inquiries, services and customer requests.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {[
              "Total Inquiries",
              "WhatsApp Leads",
              "Completed Jobs",
              "Pending Requests",
            ].map((item, index) => (
              <div key={index} className="bg-black rounded-3xl p-6 shadow-lg">
                <h4 className="text-gray-400 text-sm mb-3">{item}</h4>
                <p className="text-4xl font-bold">128</p>
              </div>
            ))}
          </div>

          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-5 bg-blue-600 p-4 font-semibold">
              <div>Name</div>
              <div>City</div>
              <div>Service</div>
              <div>Status</div>
              <div>Action</div>
            </div>

            {[1, 2, 3, 4].map((row) => (
              <div
                key={row}
                className="grid grid-cols-5 p-4 border-b border-gray-800 items-center"
              >
                <div>Rahul Kumar</div>
                <div>Delhi</div>
                <div>TV Installation</div>
                <div>
                  <span className="bg-green-500 px-4 py-1 rounded-full text-sm">
                    Completed
                  </span>
                </div>
                <div>
                  <button className="bg-blue-500 px-4 py-2 rounded-xl">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="text-white text-2xl font-bold mb-3">
              AVTech Installation Services
            </h4>
            <p>
              Professional TV & Interactive Flat Panel Installation Across India.
            </p>
          </div>

          <div className="flex gap-6 text-white">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
            <a href="#">Google Business</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold hover:scale-105 transition">
        WhatsApp
      </button>
    </div>
  );
}
