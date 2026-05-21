export default function App() {
  return (
    <div style={{fontFamily:'Arial',padding:'40px',background:'#0f172a',minHeight:'100vh',color:'white'}}>
      <h1 style={{fontSize:'48px'}}>AVTech Installation Services</h1>
      <p style={{fontSize:'20px',maxWidth:'700px'}}>
        Professional TV Installation, Smart Board Setup,
        Interactive Flat Panel Installation and AV Solutions Across India.
      </p>

      <div style={{marginTop:'30px'}}>
        <button style={{padding:'14px 24px',marginRight:'10px',borderRadius:'10px',border:'none'}}>
          Call Now
        </button>

        <button style={{padding:'14px 24px',borderRadius:'10px',border:'none',background:'green',color:'white'}}>
          WhatsApp
        </button>
      </div>

      <div style={{marginTop:'60px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px'}}>
        {[
          'TV Installation',
          'Interactive Flat Panel',
          'Smart Classroom Setup',
          'Conference Room Setup'
        ].map((item,index)=>(
          <div key={index} style={{background:'#1e293b',padding:'25px',borderRadius:'16px'}}>
            <h2>{item}</h2>
            <p>Professional installation service available.</p>
          </div>
        ))}
      </div>
    </div>
  )
}