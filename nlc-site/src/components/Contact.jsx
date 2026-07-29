import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const change = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact-us" className='dark-section' style={{ padding: '112px 64px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '96px', alignItems: 'start' }}>

        {/* left — info */}
        <div>
          <span className="section-label-lt" style={{ marginBottom: '18px' }}>Get In Touch</span>
          <h2 style={{ fontFamily: '"Oswald",sans-serif', fontWeight: 700, fontSize: 'clamp(52px,6.5vw,88px)', color: '#fff', letterSpacing: '-0.01em', lineHeight: 0.9, marginTop: '14px', marginBottom: '56px' }}>
            Let&apos;s Build<br />Something.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '48px' }}>
            <div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4a4a4a', display: 'block', marginBottom: '8px' }}>Address</span>
              <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>1602 Galemore St<br />Festus, MO 63028</p>
            </div>
            <div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4a4a4a', display: 'block', marginBottom: '8px' }}>Hours</span>
              <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>Mon &ndash; Fri: 8 AM &ndash; 4 PM<br />Sat &ndash; Sun: By appointment</p>
            </div>
            <div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4a4a4a', display: 'block', marginBottom: '8px' }}>Phone</span>
              <a href="tel:+13148271737" style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 400, fontSize: '16px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >(314) 827-1737</a>
            </div>
            <div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4a4a4a', display: 'block', marginBottom: '8px' }}>Email</span>
              <a href="mailto:nolimit.contracting@yahoo.com" style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.72)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
              >nolimit.contracting@yahoo.com</a>
            </div>
            <div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4a4a4a', display: 'block', marginBottom: '8px' }}>Service Area</span>
              <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Serving St. Louis &amp; Southeast Missouri</p>
            </div>
          </div>

          <a href="https://www.bbb.org/us/mo/festus/profile/swimming-pools/no-limit-signature-pools-0734-1000042417/" target="_blank" rel="noopener noreferrer">
            <img src="https://images.squarespace-cdn.com/content/v1/6579ea4bd5d4180c1324644b/15188dcc-0c5a-42fa-b4f4-d95b2227aa71/verified-vendor-seal-2024-med.png?format=300w"
              alt="BBB Verified Vendor"
              style={{ height: '72px', objectFit: 'contain', filter: 'brightness(1.1)' }} />
          </a>
        </div>

        {/* right — form */}
        <div>
          {sent ? (
            <div style={{ paddingTop: '56px' }}>
              <div style={{ width: '48px', height: '2px', backgroundColor: '#fff', marginBottom: '28px' }} />
              <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 300, fontSize: '20px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.65 }}>
                Thank you &mdash; we&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ paddingTop: '8px' }}>
              {[
                ['name',  'Full Name',     'text',  true],
                ['email', 'Email Address', 'email', true],
                ['phone', 'Phone Number',  'tel',   false],
              ].map(([name, ph, type, req]) => (
                <input key={name} name={name} type={type} placeholder={ph}
                  required={req} value={form[name]} onChange={change}
                  className="field" />
              ))}
              <textarea name="message" placeholder="Tell us about your project" rows={5}
                value={form.message} onChange={change}
                className="field" style={{ resize: 'none', marginBottom: '40px' }} />
              <button type="submit" style={{
                fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.2em', textTransform: 'uppercase', padding: '17px 48px',
                backgroundColor: '#fff', color: '#000',
                border: '1.5px solid transparent', cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'transparent' }}
              >Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
