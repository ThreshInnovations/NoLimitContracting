import { useState, useEffect } from 'react'

const NAV = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['About', '#about'],
  ['Contact', '#contact-us'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 90)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled
        ? 'rgba(0,0,0,0.97)'
        : 'linear-gradient(180deg,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'background 0.5s ease, border-color 0.5s',
    }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '0 64px',
        height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#home" style={{ flexShrink: 0 }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/b009fa99-9bc3-42fd-8500-c599a5cce3ba/NOLIMITTOGETHER.png?format=1500w"
            alt="No Limit Contracting and Signature Pools"
            className='nav-logo' style={{ height: '86px', objectFit: 'contain', display: 'block' }}
          />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '44px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {NAV.map(([l, h], i) => (
              <a key={l} href={h} className={'nav-link' + (i === 0 ? ' active' : '')}>{l}</a>
            ))}
          </nav>
          <a href="tel:+13148271737" className="cta-btn">Call Now</a>
        </div>
      </div>
    </header>
  )
}
