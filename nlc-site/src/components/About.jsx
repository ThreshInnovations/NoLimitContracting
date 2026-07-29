import { CheckCircle2, ArrowRight } from 'lucide-react'

const pillars = [
  {
    title: 'Owner Operated',
    desc: "You deal directly with the people doing the work. No subcontracted middlemen, no call centers. When you call, you reach someone who's boots-on-the-ground.",
  },
  {
    title: 'Built to Last',
    desc: 'Every job is approached as if it were our own property. We spec, build, and finish to a standard the weather, time, and your neighbors can all judge.',
  },
  {
    title: 'Two Divisions, One Standard',
    desc: 'Whether it\'s a Signature Pool build or a concrete project — both divisions run at the same level of craft, communication, and accountability.',
  },
]

export default function About() {
  return (
    <section
      id="about-us"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Background accent — right large vertical text */}
      <div
        className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-black uppercase text-[18vw] leading-none opacity-[0.025]"
          style={{ color: '#F5F5F4', whiteSpace: 'nowrap', transform: 'translateX(15%)' }}
        >
          NO LIMIT
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — copy */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#EA580C]" />
              <span className="font-display font-semibold uppercase tracking-[0.3em] text-[11px] text-[#EA580C]">
                Who We Are
              </span>
            </div>

            <h2
              className="font-display font-black uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', letterSpacing: '-0.02em' }}
            >
              Seasoned Pros.
              <br />
              <span style={{ color: '#EA580C' }}>Zero Shortcuts.</span>
            </h2>

            <p className="text-[#9CA3AF] text-base leading-relaxed mb-6 font-light">
              No Limit Contracting &amp; Sales was built on a simple premise: do the work right or
              don&apos;t take it. We&apos;re a Missouri-based company with two full divisions — heavy
              construction and custom pool building — run by owners who are on the job site, not
              behind a desk.
            </p>
            <p className="text-[#9CA3AF] text-base leading-relaxed mb-10 font-light">
              From site clearing to final finish, we manage every detail ourselves. That means
              tighter timelines, cleaner work, and zero surprises on your invoice.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-6 mb-12">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: '#EA580C' }} strokeWidth={1.5} />
                  <div>
                    <span className="font-display font-bold uppercase tracking-[0.12em] text-sm text-[#F5F5F4] block mb-1">
                      {p.title}
                    </span>
                    <p className="text-[#6B7280] text-sm leading-relaxed font-light">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 font-display font-bold uppercase tracking-[0.18em] text-sm"
              style={{ color: '#EA580C' }}
            >
              Start Your Project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT — visual grid */}
          <div className="grid grid-cols-2 grid-rows-3 gap-3 h-[520px]">
            {/* Cell 1 — tall left */}
            <div
              className="row-span-2 relative overflow-hidden flex items-end p-5"
              style={{ backgroundColor: '#1A1A1A', border: '1px solid #222' }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #EA580C22 0%, transparent 60%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-black uppercase text-center text-[#2A2A2A] text-2xl leading-tight tracking-wide"
                >
                  YOUR WORK PHOTOS HERE
                </span>
              </div>
              <span
                className="relative font-display font-semibold uppercase tracking-[0.2em] text-[9px]"
                style={{ color: '#4B5563' }}
              >
                Site Work
              </span>
            </div>

            {/* Cell 2 — top right */}
            <div
              className="relative overflow-hidden flex items-end p-5"
              style={{ backgroundColor: '#111827', border: '1px solid #222' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black uppercase text-center text-[#2A2A2A] text-xl leading-tight tracking-wide">
                  POOL PHOTO
                </span>
              </div>
              <span className="relative font-display font-semibold uppercase tracking-[0.2em] text-[9px]" style={{ color: '#2563EB' }}>
                Signature Pool
              </span>
            </div>

            {/* Cell 3 — middle right */}
            <div
              className="relative overflow-hidden flex items-end p-5"
              style={{ backgroundColor: '#1A1A1A', border: '1px solid #222' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black uppercase text-center text-[#2A2A2A] text-xl leading-tight tracking-wide">
                  CONCRETE WORK
                </span>
              </div>
              <span className="relative font-display font-semibold uppercase tracking-[0.2em] text-[9px]" style={{ color: '#4B5563' }}>
                Concrete
              </span>
            </div>

            {/* Cell 4 — bottom spanning both */}
            <div
              className="col-span-2 relative overflow-hidden flex items-end p-5"
              style={{ backgroundColor: '#0F1117', border: '1px solid #222' }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(90deg, #2563EB11 0%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black uppercase text-center text-[#1E293B] text-2xl leading-tight tracking-wide">
                  TEAM / JOB SITE PHOTO
                </span>
              </div>
              <span className="relative font-display font-semibold uppercase tracking-[0.2em] text-[9px]" style={{ color: '#4B5563' }}>
                The Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
