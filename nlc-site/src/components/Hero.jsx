const CDN = 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/'

export default function Hero() {
  const poster = CDN + 'fdb513aa-3056-4ca0-ba0e-61f0fbaeac2f/2O9A4898.JPG?format=2500w'
  const vid    = 'https://video.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/950190da-f3a4-4afd-92d1-ad0c3ab82080'

  return (
    <section id="home">

      {/* ── full-viewport video ── */}
      <div style={{
        position: 'relative', width: '100%', height: '100vh', minHeight: '700px',
        overflow: 'hidden', backgroundColor: '#050505',
        backgroundImage: 'url(' + poster + ')',
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
      }}>
        <video autoPlay muted loop playsInline style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        }}>
          <source src={vid + '/mp4-1920'} type="video/mp4" />
          <source src={vid + '/mp4-640'}  type="video/mp4" />
        </video>

        {/* cinematic gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 28%, rgba(0,0,0,0.08) 52%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0.96) 100%)',
        }} />

        {/* radial vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)',
        }} />

        {/* ── hero text ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 64px 56px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            {/* location tag */}
            <div className="hero-tag" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
              <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.7)' }} />
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 6px rgba(0,0,0,1), 0 0 28px rgba(0,0,0,0.95)' }}>
                Missouri&apos;s Outdoor Construction Experts
              </span>
            </div>

            {/* HEADLINE — Oswald */}
            <h1 className="hero-head" style={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(80px,12vw,172px)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              color: '#fff',
              margin: '0 0 30px',
              textShadow: '0 0 140px rgba(255,255,255,0.07), 0 4px 32px rgba(0,0,0,0.7)',
            }}>
              NO<br />LIMIT.
            </h1>

            {/* divider */}
            <div className="hero-line" style={{ width: '520px', maxWidth: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.17)', marginBottom: '26px' }} />

            {/* services */}
            <p className="hero-subs" style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 500, fontSize: '17px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.88)', textShadow: '0 2px 16px rgba(0,0,0,0.8)', marginBottom: '40px' }}>
              Concrete &nbsp;&middot;&nbsp; Excavation &nbsp;&middot;&nbsp; Signature Pools &nbsp;&middot;&nbsp; Outdoor Living
            </p>

            {/* CTAs */}
            <div className="hero-ctas" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
              <a href="#contact-us" style={{
                fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '17px 44px', backgroundColor: '#fff', color: '#000',
                textDecoration: 'none', border: '1.5px solid transparent', transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'transparent' }}
              >Get A Free Quote</a>
              <a href="#services" style={{
                fontFamily: 'Poppins,sans-serif', fontWeight: 500, fontSize: '13px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >See Our Work &darr;</a>
            </div>

          </div>
        </div>

        {/* scroll line */}
        <div style={{ position: 'absolute', right: '64px', bottom: '80px' }}>
          <div style={{ width: '1px', height: '56px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.32))' }} />
        </div>
      </div>

      {/* ── stats strip ── */}
      <div style={{ background: 'linear-gradient(180deg, #050505 0%, #0C0C0C 100%)', borderBottom: '1px solid rgba(255,255,255,0.055)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 64px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            ['15+',  'Years Experience'],
            ['500+', 'Projects Completed'],
            ['A+',   'BBB Rating'],
            ['STL + SE Missouri', 'Service Area'],
          ].map(([num, label], i) => (
            <div key={label} className={'stat-' + i}
              style={{ padding: '44px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', transition: 'transform 0.25s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontFamily: '"Oswald",sans-serif', fontWeight: 700, fontSize: '32px', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 400, fontSize: '12px', color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '10px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
