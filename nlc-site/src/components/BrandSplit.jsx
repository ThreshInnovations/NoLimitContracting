import { useEffect, useRef, useState } from 'react'

const CDN = 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/'
const BG_CONTRACT = '/nolimittruck.jpeg'
const BG_POOLS    = CDN + '2623c8ae-e684-4473-8936-69d42c0c78eb/Untitled+design+%281%29.jpg?format=2500w'

export default function BrandSplit() {
  const [vis, setVis] = useState(false)
  const [hov, setHov] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const leftFlex  = hov === 'contract' ? 1.42 : hov === 'pools' ? 0.58 : 1
  const rightFlex = hov === 'pools'    ? 1.42 : hov === 'contract' ? 0.58 : 1

  const flyIn = (dir, delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : `translateX(${dir === 'L' ? '-48px' : '48px'}) translateY(14px)`,
    transition: `opacity 0.85s ease ${delay}s, transform 1.0s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  })

  return (
    <div ref={ref} style={{ display:'flex', height:'82vh', minHeight:'520px', maxHeight:'860px', overflow:'hidden' }}>

      {/* LEFT — Contracting */}
      <div
        onMouseEnter={() => setHov('contract')}
        onMouseLeave={() => setHov(null)}
        style={{
          flex: leftFlex, minWidth: 0, position:'relative', overflow:'hidden',
          transition:'flex 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
          cursor:'default', borderRight:'1px solid rgba(255,255,255,0.12)',
        }}
      >
        {/* photo bg — brightens/saturates on hover instead of zooming */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`url(${BG_CONTRACT})`,
          backgroundSize:'cover', backgroundPosition:'center 35%',
          filter: hov==='contract' ? 'grayscale(0%) brightness(1.06)' : 'grayscale(50%) brightness(0.78)',
          transition:'filter 0.9s ease',
        }} />

        {/* overlay — lightens on hover to reveal photo */}
        <div style={{
          position:'absolute', inset:0,
          background: hov==='contract'
            ? 'linear-gradient(175deg,rgba(0,0,0,0.22) 0%,rgba(0,0,0,0.12) 38%,rgba(0,0,0,0.72) 100%)'
            : 'linear-gradient(175deg,rgba(0,0,0,0.50) 0%,rgba(0,0,0,0.30) 38%,rgba(0,0,0,0.86) 100%)',
          transition:'background 0.8s ease',
        }} />

        {/* ghost watermark */}
        <div aria-hidden style={{
          position:'absolute', bottom:'-36px', right:'-16px',
          fontFamily:'"Oswald",sans-serif', fontWeight:700, lineHeight:1,
          fontSize:'clamp(120px,14vw,230px)', letterSpacing:'-0.04em',
          color:`rgba(255,255,255,${hov==='contract'?0.06:0.024})`,
          userSelect:'none', pointerEvents:'none', transition:'color 0.6s',
        }}>BUILT</div>

        {/* top-left corner accent */}
        <div style={{ position:'absolute', top:0, left:0, width: hov==='contract'?100:44, height:2, background:'linear-gradient(90deg,rgba(255,255,255,0.7),transparent)', transition:'width .45s ease' }} />
        <div style={{ position:'absolute', top:0, left:0, width:2, height: hov==='contract'?100:44, background:'linear-gradient(180deg,rgba(255,255,255,0.7),transparent)', transition:'height .45s ease' }} />

        {/* content */}
        <div style={{
          position:'relative', zIndex:1, height:'100%',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          padding:'44px 52px 52px',
        }}>
          {/* top: logo + index */}
          <div style={{ ...flyIn('L', 0), display:'flex', alignItems:'flex-start', justifyContent:'space-between' }}>
            <img src="/logo-contracting.png" alt="No Limit Contracting"
              style={{
                height:'115px', objectFit:'contain', objectPosition:'left',
                filter:'brightness(0) invert(1)', display:'block',
                transform: hov==='contract' ? 'scale(1.06)' : 'scale(1)',
                transition:'transform 0.45s ease',
              }}
            />
            <span style={{
              fontFamily:'"Oswald",sans-serif', fontWeight:700, fontSize:'88px',
              lineHeight:1, color:'rgba(255,255,255,0.06)', letterSpacing:'-0.03em',
              userSelect:'none',
            }}>01</span>
          </div>

          {/* bottom: headline + body + tags + CTA */}
          <div style={flyIn('L', 0.12)}>
            <span style={{
              fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'11px',
              letterSpacing:'0.3em', textTransform:'uppercase',
              color:'rgba(255,255,255,0.4)', display:'block', marginBottom:'12px',
            }}>Ground Up Construction</span>

            <h3 style={{
              fontFamily:'"Oswald",sans-serif', fontWeight:700,
              fontSize:'clamp(44px,4.4vw,72px)', color:'#fff',
              letterSpacing:'-0.02em', lineHeight:0.9, marginBottom:'20px',
            }}>
              Concrete &amp;<br />Contracting
            </h3>

            <div style={{
              width: hov==='contract' ? 64 : 32, height:2,
              backgroundColor:'#fff', marginBottom:'20px', transition:'width 0.4s ease',
            }} />

            <p style={{
              fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:'15px',
              color:'rgba(255,255,255,0.6)', lineHeight:1.78, marginBottom:'24px',
              maxWidth:'360px',
            }}>
              Concrete, excavation, retaining walls &amp; complete custom outdoor living&mdash;built from the ground up.
            </p>

            <div style={{ display:'flex', gap:'20px', flexWrap:'wrap', marginBottom:'28px' }}>
              {['Concrete','Excavation','Outdoor Living','Retaining Walls'].map(s => (
                <span key={s} style={{
                  fontFamily:'Poppins,sans-serif', fontSize:'10.5px', fontWeight:600,
                  letterSpacing:'0.16em', textTransform:'uppercase',
                  color:'rgba(255,255,255,0.35)',
                  borderBottom:'1px solid rgba(255,255,255,0.14)', paddingBottom:'2px',
                }}>{s}</span>
              ))}
            </div>

            <a href="#services"
              style={{
                fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'11px',
                letterSpacing:'0.2em', textTransform:'uppercase',
                color:'#fff', textDecoration:'none',
                display:'inline-flex', alignItems:'center', gap:'10px',
                padding:'14px 28px', border:'1.5px solid rgba(255,255,255,0.38)',
                transition:'gap 0.25s, background 0.22s, border-color 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.75)'; e.currentTarget.style.gap='16px' }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(255,255,255,0.38)'; e.currentTarget.style.gap='10px' }}
            >
              Our Services <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT — Signature Pools */}
      <div
        onMouseEnter={() => setHov('pools')}
        onMouseLeave={() => setHov(null)}
        style={{
          flex: rightFlex, minWidth: 0, position:'relative', overflow:'hidden',
          transition:'flex 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
          cursor:'default',
        }}
      >
        {/* photo bg — brightens/saturates on hover instead of zooming */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`url(${BG_POOLS})`,
          backgroundSize:'cover', backgroundPosition:'center 40%',
          filter: hov==='pools' ? 'grayscale(0%) brightness(1.06)' : 'grayscale(50%) brightness(0.78)',
          transition:'filter 0.9s ease',
        }} />

        {/* blue tint overlay */}
        <div style={{
          position:'absolute', inset:0,
          background: hov==='pools'
            ? 'linear-gradient(175deg,rgba(2,12,30,0.30) 0%,rgba(5,20,50,0.18) 38%,rgba(2,12,30,0.80) 100%)'
            : 'linear-gradient(175deg,rgba(2,12,30,0.55) 0%,rgba(5,20,50,0.38) 38%,rgba(2,12,30,0.90) 100%)',
          transition:'background 0.8s ease',
        }} />

        {/* radial shimmer */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          background:'radial-gradient(ellipse at 82% 18%,rgba(20,100,220,0.25) 0%,transparent 55%)',
          opacity: hov==='pools' ? 1 : 0.4, transition:'opacity 0.6s',
        }} />

        {/* bottom glow line */}
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, height:3,
          background:`linear-gradient(90deg,transparent,rgba(30,140,220,${hov==='pools'?0.82:0.26}),transparent)`,
          transition:'background 0.5s',
        }} />

        {/* ghost watermark */}
        <div aria-hidden style={{
          position:'absolute', bottom:'-36px', right:'-16px',
          fontFamily:'"Oswald",sans-serif', fontWeight:700, lineHeight:1,
          fontSize:'clamp(120px,14vw,230px)', letterSpacing:'-0.04em',
          color:`rgba(20,100,220,${hov==='pools'?0.14:0.055})`,
          userSelect:'none', pointerEvents:'none', transition:'color 0.6s',
        }}>POOLS</div>

        {/* top-right corner accent */}
        <div style={{ position:'absolute', top:0, right:0, width: hov==='pools'?100:44, height:2, background:'linear-gradient(90deg,transparent,rgba(30,140,220,0.75))', transition:'width .45s ease' }} />
        <div style={{ position:'absolute', top:0, right:0, width:2, height: hov==='pools'?100:44, background:'linear-gradient(180deg,rgba(30,140,220,0.75),transparent)', transition:'height .45s ease' }} />

        {/* content */}
        <div style={{
          position:'relative', zIndex:1, height:'100%',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          padding:'44px 52px 52px',
        }}>
          {/* top: logo + index */}
          <div style={{ ...flyIn('R', 0.08), display:'flex', alignItems:'flex-start', justifyContent:'space-between' }}>
            <img src="/logo-pools.png" alt="No Limit Signature Pools"
              style={{
                height:'80px', objectFit:'contain', objectPosition:'left',
                filter:'brightness(0) invert(1)', display:'block',
                transform: hov==='pools' ? 'scale(1.06)' : 'scale(1)',
                transition:'transform 0.45s ease',
              }}
            />
            <span style={{
              fontFamily:'"Oswald",sans-serif', fontWeight:700, fontSize:'88px',
              lineHeight:1, color:'rgba(255,255,255,0.06)', letterSpacing:'-0.03em',
              userSelect:'none',
            }}>02</span>
          </div>

          {/* bottom: headline + body + tags + CTA */}
          <div style={flyIn('R', 0.20)}>
            <span style={{
              fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'10px',
              letterSpacing:'0.3em', textTransform:'uppercase',
              color:'rgba(30,140,220,0.6)', display:'block', marginBottom:'12px',
            }}>Water &amp; Poolscape Design</span>

            <h3 style={{
              fontFamily:'"Oswald",sans-serif', fontWeight:700,
              fontSize:'clamp(40px,4vw,66px)', color:'#fff',
              letterSpacing:'-0.02em', lineHeight:0.9, marginBottom:'20px',
            }}>
              Signature<br />Pools
            </h3>

            <div style={{
              width: hov==='pools' ? 64 : 32, height:2,
              background:'linear-gradient(90deg,rgba(30,140,220,0.9),rgba(30,140,220,0.1))',
              marginBottom:'20px', transition:'width 0.4s ease',
            }} />

            <p style={{
              fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:'13.5px',
              color:'rgba(255,255,255,0.6)', lineHeight:1.78, marginBottom:'24px',
              maxWidth:'340px',
            }}>
              Custom poolscape design, new construction, renovation &amp; expert maintenance&mdash;your backyard oasis starts here.
            </p>

            <div style={{ display:'flex', gap:'20px', flexWrap:'wrap', marginBottom:'28px' }}>
              {['Custom Design','New Installation','Renovation','Maintenance'].map(s => (
                <span key={s} style={{
                  fontFamily:'Poppins,sans-serif', fontSize:'9.5px', fontWeight:600,
                  letterSpacing:'0.16em', textTransform:'uppercase',
                  color:'rgba(30,140,220,0.5)',
                  borderBottom:'1px solid rgba(30,140,220,0.2)', paddingBottom:'2px',
                }}>{s}</span>
              ))}
            </div>

            <a href="#services"
              style={{
                fontFamily:'Poppins,sans-serif', fontWeight:700, fontSize:'11px',
                letterSpacing:'0.2em', textTransform:'uppercase',
                color:'rgba(100,200,255,0.9)', textDecoration:'none',
                display:'inline-flex', alignItems:'center', gap:'10px',
                padding:'14px 28px', border:'1.5px solid rgba(30,140,220,0.4)',
                transition:'gap 0.25s, background 0.22s, border-color 0.22s, color 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(30,140,220,0.16)'; e.currentTarget.style.borderColor='rgba(100,200,255,0.75)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.gap='16px' }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(30,140,220,0.4)'; e.currentTarget.style.color='rgba(100,200,255,0.9)'; e.currentTarget.style.gap='10px' }}
            >
              Explore Pools <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
