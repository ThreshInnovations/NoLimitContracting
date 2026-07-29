import { useState } from 'react'

const CONCRETE = [
  { n: '01', title: 'Concrete',          body: 'Patios, driveways, slabs, foundations, short walls, and decorative finishes — commercial and residential.' },
  { n: '02', title: 'Excavation',        body: 'Site preparation, land clearing, erosion control, grading, and demolition — commercial and residential.' },
  { n: '03', title: 'Retaining Walls',   body: 'Concrete or block walls of any size — designed for your lot and built to last.' },
  { n: '04', title: 'Outdoor Living',    body: 'Fire pits, outdoor kitchens, fire and water elements, and full outdoor living space design and build.' },
]

const POOLS = [
  { n: '01', title: 'Custom Pool Design',  body: 'Full poolscape concept and design — we work with you from vision to final blueprint.' },
  { n: '02', title: 'New Construction',    body: 'Complete new pool builds from excavation through finish — every detail handled in-house.' },
  { n: '03', title: 'Renovation',          body: 'Remodels, replastering, tile, coping, equipment upgrades — full pool makeovers.' },
  { n: '04', title: 'Maintenance',         body: 'Ongoing pool care, water chemistry, equipment service, and seasonal prep.' },
]

export default function Services() {
  const [hov, setHov] = useState(null)

  const serviceRow = (s, side) => {
    const id = side + s.n
    const isHov = hov === id
    const accentColor = side === 'pools' ? 'rgba(30,140,220,0.5)' : 'rgba(255,255,255,0.22)'
    const arrowColor  = side === 'pools' ? 'rgba(80,180,255,0.9)' : '#fff'

    return (
      <div key={id}
        style={{ borderBottom: `1px solid rgba(255,255,255,${side==='pools'?'0.07':'0.08'})`, cursor: 'default' }}
        onMouseEnter={() => setHov(id)}
        onMouseLeave={() => setHov(null)}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: '20px',
          padding: isHov ? '26px 0 10px' : '20px 0',
          transition: 'padding 0.25s ease',
        }}>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', color: accentColor, letterSpacing: '0.16em', minWidth: '28px', flexShrink: 0 }}>{s.n}</span>
          <span style={{
            fontFamily: '"Oswald",sans-serif', fontSize: 'clamp(20px,2vw,28px)',
            color: isHov ? '#fff' : 'rgba(255,255,255,0.52)',
            letterSpacing: '-0.01em', lineHeight: 1.1, flex: 1,
            transition: 'color 0.2s',
          }}>{s.title}</span>
          <span style={{
            fontSize: '16px', flexShrink: 0,
            color: isHov ? arrowColor : '#252525',
            transform: isHov ? 'translateX(6px)' : 'translateX(0)',
            transition: 'color 0.2s, transform 0.25s',
          }}>&rarr;</span>
        </div>
        <div style={{
          maxHeight: isHov ? '60px' : '0',
          overflow: 'hidden', opacity: isHov ? 1 : 0,
          transition: 'max-height 0.32s ease, opacity 0.22s ease',
          paddingLeft: '48px', paddingBottom: isHov ? '16px' : '0',
        }}>
          <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '13.5px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.72 }}>{s.body}</p>
        </div>
      </div>
    )
  }

  return (
    <section id="services" className='dark-section' style={{ padding: '96px 64px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* section header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px', gap: '32px' }}>
          <div>
            <span className="section-label-lt" style={{ marginBottom: '16px' }}>What We Do</span>
            <h2 style={{ fontFamily: '"Oswald",sans-serif', fontSize: 'clamp(64px,8vw,116px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 0.88, marginTop: '14px' }}>
              Services
            </h2>
          </div>
          <a href="tel:+13148271737"
            style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '14px 36px', border: '1.5px solid rgba(255,255,255,0.45)', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s', display: 'inline-block', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)' }}
          >Call (314) 827-1737</a>
        </div>

        {/* ── two-column division split ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '0 56px', alignItems: 'start' }}>

          {/* LEFT — Concrete & Hardscape */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', flexShrink: 0 }}>Div. 01</span>
              <h3 style={{ fontFamily: '"Oswald",sans-serif', fontWeight: 700, fontSize: 'clamp(22px,2.4vw,34px)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>
                Concrete &amp; Hardscape
              </h3>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {CONCRETE.map(s => serviceRow(s, 'concrete'))}
            </div>
          </div>

          {/* center divider */}
          <div style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 15%, rgba(255,255,255,0.1) 85%, transparent)', alignSelf: 'stretch' }} />

          {/* RIGHT — Signature Pools */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid rgba(30,140,220,0.25)' }}>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(30,140,220,0.5)', flexShrink: 0 }}>Div. 02</span>
              <h3 style={{ fontFamily: '"Oswald",sans-serif', fontWeight: 700, fontSize: 'clamp(22px,2.4vw,34px)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>
                Signature Pools
              </h3>
            </div>
            <div style={{ borderTop: '1px solid rgba(30,140,220,0.1)' }}>
              {POOLS.map(s => serviceRow(s, 'pools'))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
