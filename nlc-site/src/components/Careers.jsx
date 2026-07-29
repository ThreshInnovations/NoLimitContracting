import { HardHat, MapPin, Briefcase, ArrowRight } from 'lucide-react'

const roles = [
  'Equipment Operators',
  'Concrete Finishers',
  'Pool Laborers',
  'General Laborers',
  'Project Supervisors',
]

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      {/* Diagonal accent top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(234,88,12,0.04) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#EA580C]" />
              <span className="font-display font-semibold uppercase tracking-[0.3em] text-[11px] text-[#EA580C]">
                Join the Crew
              </span>
            </div>

            <h2
              className="font-display font-black uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', letterSpacing: '-0.02em' }}
            >
              Work That{' '}
              <span style={{ color: '#EA580C' }}>Means</span>
              <br />Something.
            </h2>

            <p className="text-[#9CA3AF] text-base leading-relaxed mb-4 font-light">
              We&apos;re always looking for people who take pride in their craft.
              No Limit is a growing company and we take care of our team.
              If you show up, work hard, and want to build something real — let&apos;s talk.
            </p>

            <div className="flex items-center gap-3 mb-10 text-[#6B7280] text-sm font-light">
              <MapPin size={14} strokeWidth={1.5} style={{ color: '#EA580C' }} />
              Based in Missouri — local applicants preferred
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 font-display font-bold uppercase tracking-[0.18em] text-sm px-8 py-4 bg-[#EA580C] text-white transition-all duration-200 hover:bg-[#F97316] hover:shadow-[0_8px_32px_rgba(234,88,12,0.4)]"
            >
              Apply Now
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — roles */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={16} strokeWidth={1.5} style={{ color: '#EA580C' }} />
              <span className="font-display font-semibold uppercase tracking-[0.22em] text-[11px] text-[#9CA3AF]">
                Open Positions
              </span>
            </div>

            <div className="flex flex-col">
              {roles.map((r, i) => (
                <a
                  key={r}
                  href="#contact"
                  className="group flex items-center justify-between py-5 border-b transition-colors duration-200 hover:bg-[#1A1A1A] -mx-4 px-4"
                  style={{ borderColor: '#1A1A1A' }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-display font-black text-3xl opacity-10 w-8 text-right leading-none"
                      style={{ color: '#F5F5F4' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display font-bold uppercase tracking-[0.1em] text-base text-[#F5F5F4] group-hover:text-[#EA580C] transition-colors duration-200">
                      {r}
                    </span>
                  </div>
                  <ArrowRight size={14} style={{ color: '#4B5563' }} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#EA580C]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
