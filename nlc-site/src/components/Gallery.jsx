import { useEffect, useRef } from 'react'

const B = 'https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/'

const IMGS = [
  '/nolimittruck.jpeg',
  B + '37766647-86bb-4f59-8ad1-d7d4f7fc5e3d/Untitled+design+copy.jpg?format=1500w',
  '/mike-crew.webp',
  B + '2623c8ae-e684-4473-8936-69d42c0c78eb/Untitled+design+%281%29.jpg?format=1000w',
  B + '6ce892f8-d2c6-4224-aeae-b163ccde1845/Untitled+design.jpg?format=1000w',
  B + '1703873214331-QMRDYSH2LBIXB1O5Z8CZ/IMG_3942.jpg?format=1000w',
  B + '1703873235128-ARXGYPJYOEU4PQV9HDS9/IMG_3943.jpg?format=1000w',
  B + 'a312a26c-6e7f-4bce-aaec-2b348faba547/tempImagecMCEC9.png?format=1000w',
]

const CARD_W = 448   // 440px card + 8px gap
const TOTAL  = IMGS.length * CARD_W

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Gallery() {
  const trackRef   = useRef(null)
  const posRef     = useRef(0)
  const pausedRef  = useRef(false)
  const transRef   = useRef(false)
  const rafRef     = useRef(null)

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current && !transRef.current && trackRef.current) {
        posRef.current -= 0.55
        if (posRef.current <= -TOTAL) posRef.current += TOTAL
        trackRef.current.style.transform = `translateX(${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const nudge = (dir) => {
    if (transRef.current) return
    transRef.current = true
    posRef.current += dir * 440
    if (posRef.current > 0) posRef.current -= TOTAL
    if (posRef.current <= -TOTAL) posRef.current += TOTAL
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)'
      trackRef.current.style.transform  = `translateX(${posRef.current}px)`
    }
    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = ''
      transRef.current = false
    }, 720)
  }

  const ArrowBtn = ({ dir }) => (
    <button
      onClick={() => nudge(dir === 'left' ? 1 : -1)}
      style={{ width:'48px', height:'48px', borderRadius:'50%', border:'1.5px solid rgba(0,0,0,0.15)', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 14px rgba(0,0,0,0.09)', transition:'all 0.22s', color:'#1a1a1a', flexShrink:0 }}
      onMouseEnter={e => { e.currentTarget.style.background='#0a0a0a'; e.currentTarget.style.borderColor='#0a0a0a'; e.currentTarget.style.color='#fff'; e.currentTarget.style.boxShadow='0 6px 24px rgba(0,0,0,0.2)' }}
      onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.borderColor='rgba(0,0,0,0.15)'; e.currentTarget.style.color='#1a1a1a'; e.currentTarget.style.boxShadow='0 2px 14px rgba(0,0,0,0.09)' }}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
    >
      {dir === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  )

  return (
    <section id="gallery" style={{ backgroundColor:'#fff' }}>

      {/* header */}
      <div style={{ padding:'96px 64px 52px', maxWidth:'1400px', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <span className="section-label" style={{ marginBottom:'14px' }}>Portfolio</span>
          <h2 style={{ fontFamily:'"Oswald",sans-serif', fontWeight:700, fontSize:'clamp(38px,5vw,72px)', color:'#000', letterSpacing:'-0.01em', lineHeight:1.0, marginTop:'12px' }}>
            Our Latest<br />Projects
          </h2>
        </div>
        <a href="#contact-us"
          style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', color:'#000', textDecoration:'none', borderBottom:'1.5px solid #000', paddingBottom:'3px', flexShrink:0, marginBottom:'10px' }}
          onMouseEnter={e => e.currentTarget.style.opacity='0.5'}
          onMouseLeave={e => e.currentTarget.style.opacity='1'}
        >Start Your Project &rarr;</a>
      </div>

      {/* scroller */}
      <div style={{ position:'relative', paddingBottom:'64px' }}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        {/* left fade + arrow */}
        <div style={{ position:'absolute', left:0, top:0, bottom:'64px', width:'140px', background:'linear-gradient(to right,#fff 28%,transparent)', pointerEvents:'none', zIndex:5 }} />
        <div style={{ position:'absolute', left:'24px', top:'50%', transform:'translateY(calc(-50% - 32px))', zIndex:10 }}>
          <ArrowBtn dir="left" />
        </div>

        {/* right fade + arrow */}
        <div style={{ position:'absolute', right:0, top:0, bottom:'64px', width:'140px', background:'linear-gradient(to left,#fff 28%,transparent)', pointerEvents:'none', zIndex:5 }} />
        <div style={{ position:'absolute', right:'24px', top:'50%', transform:'translateY(calc(-50% - 32px))', zIndex:10 }}>
          <ArrowBtn dir="right" />
        </div>

        {/* track */}
        <div style={{ overflow:'hidden' }}>
          <div ref={trackRef} style={{ display:'flex', gap:'8px', willChange:'transform' }}>
            {[...IMGS, ...IMGS].map((src, i) => (
              <div key={i} style={{ width:'440px', height:'340px', flexShrink:0, overflow:'hidden' }}>
                <img src={src} alt={'No Limit project ' + ((i % IMGS.length) + 1)}
                  style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.7s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* progress ticks */}
        <div style={{ display:'flex', justifyContent:'center', gap:'6px', marginTop:'28px' }}>
          {IMGS.map((_, i) => (
            <div key={i} style={{ width:'20px', height:'2px', background:'rgba(0,0,0,0.15)', borderRadius:'1px' }} />
          ))}
        </div>
      </div>

    </section>
  )
}
