const FB_URL_C = 'https://www.facebook.com/NoLimitContractingSTL'
const FB_URL_P = 'https://www.facebook.com/NoLimitSignaturePools'

const FbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const IgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

function FbCard({ logo, name, subtitle, cover, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ display:'block', textDecoration:'none', width:'300px', borderRadius:'10px', overflow:'hidden', boxShadow:'0 2px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)', background:'#fff', flexShrink:0, transition:'transform 0.3s, box-shadow 0.3s' }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.15)' }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)' }}
    >
      {/* browser chrome */}
      <div style={{ background:'#e9e9e9', padding:'9px 12px', display:'flex', alignItems:'center', gap:'8px' }}>
        <div style={{ display:'flex', gap:'5px' }}>
          {['#ff5f57','#ffbd2e','#28c940'].map(c => <div key={c} style={{ width:9, height:9, borderRadius:'50%', background:c }} />)}
        </div>
        <div style={{ flex:1, background:'#fff', borderRadius:'4px', padding:'3px 10px', fontSize:'10px', color:'#888', textAlign:'center', fontFamily:'Poppins,sans-serif', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
          facebook.com/nolimit
        </div>
      </div>
      {/* cover photo */}
      <div style={{ height:'120px', backgroundImage:`url(${cover})`, backgroundSize:'cover', backgroundPosition:'center', backgroundColor:'#1a1a1a' }} />
      {/* profile area */}
      <div style={{ padding:'10px 14px 18px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
          <div style={{ width:'44px', height:'44px', borderRadius:'50%', overflow:'hidden', border:'2px solid #fff', boxShadow:'0 1px 6px rgba(0,0,0,0.2)', flexShrink:0, background:'#111', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <img src={logo} style={{ width:'38px', height:'38px', objectFit:'contain' }} alt="" />
          </div>
          <div>
            <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'13px', color:'#1a1a1a', lineHeight:1.2 }}>{name}</div>
            <div style={{ fontFamily:'Poppins,sans-serif', fontSize:'11px', color:'#888', marginTop:'2px' }}>{subtitle}</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:'8px' }}>
          <div style={{ flex:1, textAlign:'center', background:'#1877f2', color:'#fff', fontSize:'12px', fontWeight:700, padding:'7px', borderRadius:'5px', fontFamily:'Poppins,sans-serif' }}>
            Follow
          </div>
          <div style={{ flex:1, textAlign:'center', background:'#f0f2f5', color:'#1a1a1a', fontSize:'12px', fontWeight:700, padding:'7px', borderRadius:'5px', fontFamily:'Poppins,sans-serif' }}>
            Message
          </div>
        </div>
      </div>
    </a>
  )
}

export default function SocialStrip() {
  return (
    <div style={{ backgroundColor:'#F5F4F2', borderTop:'1px solid #E8E6E2', padding:'80px 64px' }}>
      <div style={{ maxWidth:'1400px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>

        {/* LEFT: text + handles */}
        <div>
          <span className="section-label" style={{ marginBottom:'18px' }}>Social</span>
          <h2 style={{ fontFamily:'"Oswald",sans-serif', fontWeight:700, fontSize:'clamp(36px,4.5vw,64px)', color:'#0a0a0a', letterSpacing:'-0.02em', lineHeight:0.92, marginBottom:'22px' }}>
            Follow<br />Our Work
          </h2>
          <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:'15px', lineHeight:1.75, color:'#555', maxWidth:'360px', marginBottom:'40px' }}>
            See finished projects, behind-the-scenes builds, and the latest from No Limit — updated regularly on Facebook.
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            {[
              { Icon: FbIcon, label:'No Limit Contracting', handle:'@NoLimitContractingSTL', url: FB_URL_C, color:'#1877f2' },
              { Icon: FbIcon, label:'Signature Pools',      handle:'@NoLimitSignaturePools', url: FB_URL_P, color:'#1877f2' },
              { Icon: IgIcon, label:'Instagram',            handle:'@nolimitoutdoors',       url:'https://instagram.com', color:'#c13584' },
            ].map(({ Icon, label, handle, url, color }) => (
              <a key={handle} href={url} target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:'14px', textDecoration:'none', padding:'14px 20px', background:'#fff', borderRadius:'8px', border:'1px solid rgba(0,0,0,0.07)', transition:'all 0.2s', maxWidth:'360px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform='translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'; e.currentTarget.style.transform='translateX(0)' }}
              >
                <span style={{ color, flexShrink:0 }}><Icon /></span>
                <div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'12px', color:'#1a1a1a', lineHeight:1.2 }}>{label}</div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontSize:'11px', color:'#888', marginTop:'2px' }}>{handle}</div>
                </div>
                <span style={{ marginLeft:'auto', fontSize:'14px', color:'#ccc' }}>&#8594;</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Meta preview cards */}
        <div style={{ display:'flex', gap:'20px', justifyContent:'flex-end', alignItems:'center' }}>
          <FbCard
            logo="/logo-contracting.png"
            name="No Limit Contracting"
            subtitle="Contractor · Festus, MO"
            cover="/nolimittruck.jpeg"
            url={FB_URL_C}
          />
          <FbCard
            logo="/logo-pools.png"
            name="Signature Pools"
            subtitle="Pool Builder · STL Region"
            cover="https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/2623c8ae-e684-4473-8936-69d42c0c78eb/Untitled+design+%281%29.jpg?format=1000w"
            url={FB_URL_P}
          />
        </div>

      </div>
    </div>
  )
}
