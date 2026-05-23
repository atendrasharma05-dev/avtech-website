export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-6xl font-bold mb-10">
        AVTech Installation Services
      </h1>

      <p className="text-2xl mb-10 max-w-4xl">
        Professional TV Installation, Smart Board Setup,
        Interactive Flat Panel Installation and AV Solutions Across India.
      </p>

      <div className="flex gap-5">
        <a
          href="tel:+919599176584"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/919599176584"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
