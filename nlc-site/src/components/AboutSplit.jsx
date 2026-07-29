const CDN = 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/'

export default function AboutSplit() {
  return (
    <div id="about" style={{ backgroundColor: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '540px' }}>
        <div style={{ overflow: 'hidden', maxHeight: '540px' }}>
          <img
            src='/mike-crew.webp'
            alt="No Limit team at work"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.8s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg,#fff 0%,#fafaf9 100%)' }}>
          <span className="section-label" style={{ marginBottom: '20px' }}>Who We Are</span>
          <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg,#000,rgba(0,0,0,0.3))', marginBottom: '24px' }} />
          <h2 style={{ fontFamily: '"Oswald",sans-serif', fontWeight: 700, fontSize: 'clamp(32px,3.5vw,52px)', letterSpacing: '-0.01em', lineHeight: 1.05, color: '#000', marginBottom: '24px' }}>
            Built Strong.<br />Done Right.
          </h2>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: 1.78, color: '#3a3a3a', marginBottom: '36px' }}>
            At No Limit, we partner with you to bring your custom outdoor vision to life. You&apos;re hiring seasoned professionals who combine expert craftsmanship with lasting quality&mdash;ensuring your project is done right, built strong, and made to stand the test of time.
          </p>
          <a href="#services"
            style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#000', textDecoration: 'none', borderBottom: '1.5px solid #000', paddingBottom: '3px', display: 'inline-block' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Explore Our Services &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
