/* Financing section — full-bleed editorial split */
import { BadgeDollarSign, Clock, ThumbsUp, ArrowRight } from 'lucide-react'

const points = [
  {
    icon: BadgeDollarSign,
    title: 'Flexible Payment Plans',
    desc: 'We work with lending partners to get you approved quickly so your project starts sooner.',
  },
  {
    icon: Clock,
    title: 'Fast Approvals',
    desc: 'Most applicants get a decision same-day. No long waits, no endless paperwork.',
  },
  {
    icon: ThumbsUp,
    title: 'No Surprises',
    desc: 'Fixed-rate options available. Your payment stays the same from start to final walkthrough.',
  },
]

export default function Financing() {
  return (
    <section
      id="financing"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Left side orange fill panel */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
        }}
      >
        {/* Diagonal stripe */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -55deg, transparent, transparent 16px,
              rgba(0,0,0,0.08) 16px, rgba(0,0,0,0.08) 17px
            )`,
          }}
        />
        {/* Centered label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
          <span className="font-display font-semibold uppercase tracking-[0.3em] text-[11px] text-white/60 mb-6">
            No Limit Financing
          </span>
          <h2
            className="font-display font-black uppercase text-white leading-none mb-6"
            style={{ fontSize: 'clamp(40px, 4.5vw, 68px)', letterSpacing: '-0.02em' }}
          >
            Your Dream.
            <br />
            Your Budget.
          </h2>
          <p className="text-white/70 text-sm font-light leading-relaxed max-w-xs">
            We believe a great outdoor project shouldn&apos;t wait on finances.
            Ask about our financing options when you call.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-0">

          {/* Left spacer on desktop */}
          <div className="hidden lg:block" />

          {/* Right — content */}
          <div className="lg:pl-16">
            {/* Mobile heading */}
            <div className="lg:hidden mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[2px] bg-[#EA580C]" />
                <span className="font-display font-semibold uppercase tracking-[0.3em] text-[11px] text-[#EA580C]">
                  Financing
                </span>
              </div>
              <h2
                className="font-display font-black uppercase leading-none"
                style={{ fontSize: 'clamp(36px, 9vw, 60px)', letterSpacing: '-0.02em' }}
              >
                Your Dream. Your Budget.
              </h2>
            </div>

            <div className="flex flex-col gap-8 mb-12">
              {points.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="flex gap-5 items-start group">
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #2A2A2A',
                      }}
                    >
                      <Icon size={18} style={{ color: '#EA580C' }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-display font-bold uppercase tracking-[0.12em] text-sm text-[#F5F5F4] block mb-2">
                        {p.title}
                      </span>
                      <p className="text-[#6B7280] text-sm leading-relaxed font-light">{p.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="tel:+15736234737"
              className="group inline-flex items-center gap-3 font-display font-bold uppercase tracking-[0.18em] text-sm px-8 py-4 bg-[#EA580C] text-white transition-all duration-200 hover:bg-[#F97316] hover:shadow-[0_8px_32px_rgba(234,88,12,0.4)]"
            >
              Ask About Financing
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
