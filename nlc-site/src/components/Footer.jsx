const NAV = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['About', '#about'],
  ['Contact', '#contact-us'],
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000' }}>
      <div style={{ height: '1px', backgroundColor: '#111' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '72px 64px 56px', display: 'grid', gridTemplateColumns: '2.5fr 1fr 1.3fr', gap: '72px' }}>

        {/* brand */}
        <div>
          <a href="#home" style={{ display: 'inline-block', marginBottom: '24px' }}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/d8bd5a98-553b-4905-b1df-9a163c661f80/NOLIMITTOGETHER.png?format=750w"
              alt="No Limit Contracting and Signature Pools"
              style={{ height: '72px', objectFit: 'contain', objectPosition: 'left', display: 'block' }}
            />
          </a>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '13px', color: '#4a4a4a', lineHeight: 1.8, maxWidth: '300px' }}>
            Outdoor construction done right.<br />Serving St.&nbsp;Louis and Southeast Missouri.
          </p>
        </div>

        {/* navigate */}
        <div>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#3a3a3a', display: 'block', marginBottom: '24px' }}>Navigate</span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {NAV.map(([l, h]) => (
              <a key={l} href={h}
                style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 400, fontSize: '13px', color: '#4a4a4a', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#4a4a4a'}
              >{l}</a>
            ))}
          </nav>
        </div>

        {/* contact */}
        <div>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#3a3a3a', display: 'block', marginBottom: '24px' }}>Contact</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="tel:+13148271737"
              style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 500, fontSize: '15px', color: '#777', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#777'}
            >(314) 827-1737</a>
            <a href="mailto:nolimit.contracting@yahoo.com"
              style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 400, fontSize: '12px', color: '#4a4a4a', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#4a4a4a'}
            >nolimit.contracting@yahoo.com</a>
            <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '13px', color: '#3a3a3a', lineHeight: 1.65 }}>1602 Galemore St<br />Festus, MO 63028</p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #111', maxWidth: '1400px', margin: '0 auto', padding: '20px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '12px', color: '#2e2e2e' }}>
          &copy; {new Date().getFullYear()} No Limit Contracting &amp; Signature Pools
        </span>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.14em', color: '#2e2e2e', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#2e2e2e'}
        >Facebook</a>
      </div>
    </footer>
  )
}
