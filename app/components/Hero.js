// 'use client'
// import { useEffect, useRef } from 'react'

// const floatingTags = [
//   { label: 'Next.js', top: '15%', left: '8%', delay: '0s' },
//   { label: 'n8n Automation', top: '25%', right: '6%', delay: '0.5s' },
//   { label: 'Shopify', bottom: '30%', left: '5%', delay: '1s' },
//   { label: 'WhatsApp API', bottom: '20%', right: '8%', delay: '1.5s' },
//   { label: 'Node.js', top: '60%', left: '3%', delay: '0.8s' },
//   { label: 'WordPress', top: '45%', right: '3%', delay: '1.2s' },
// ]

// export default function Hero() {
//   const heroRef = useRef(null)

//   useEffect(() => {
//     const el = heroRef.current
//     if (!el) return
//     const handleMouseMove = (e) => {
//       const rect = el.getBoundingClientRect()
//       const x = ((e.clientX - rect.left) / rect.width) * 100
//       const y = ((e.clientY - rect.top) / rect.height) * 100
//       el.style.setProperty('--mouse-x', `${x}%`)
//       el.style.setProperty('--mouse-y', `${y}%`)
//     }
//     el.addEventListener('mousemove', handleMouseMove)
//     return () => el.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   return (
//     <section
//       id="hero"
//       ref={heroRef}
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern"
//       style={{
//         background: 'radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(234,88,12,0.15) 0%, transparent 60%), #080808',
//       }}
//     >
//       {/* Big BG text */}
//       <div
//         className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
//         aria-hidden="true"
//       >
//         <span
//           className="font-display font-black text-[clamp(80px,20vw,280px)] leading-none opacity-[0.025] tracking-tighter text-white"
//           style={{ letterSpacing: '-0.06em' }}
//         >
//           IGNITE
//         </span>
//       </div>

//       {/* Glowing orbs */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/8 blur-[80px] pointer-events-none animate-pulse-slow" />

//       {/* Floating tech tags - hidden on small screens */}
//       {floatingTags.map((tag, i) => (
//         <div
//           key={i}
//           className="hidden lg:block absolute tag pointer-events-none"
//           style={{
//             top: tag.top,
//             left: tag.left,
//             right: tag.right,
//             bottom: tag.bottom,
//             animationDelay: tag.delay,
//             animation: `float 6s ease-in-out infinite`,
//             animationDelay: tag.delay,
//           }}
//         >
//           {tag.label}
//         </div>
//       ))}

//       {/* Main Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
//         {/* Top badge */}
//         <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 mb-8 animate-fade-in">
//           <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
//           <span className="font-mono text-xs text-orange-300 tracking-widest uppercase">
//             Digital Agency — Available for Projects
//           </span>
//         </div>

//         {/* Headline */}
//         <h1
//           className="font-display font-black leading-[0.9] mb-6"
//           style={{ fontSize: 'clamp(44px, 8vw, 100px)', letterSpacing: '-0.04em' }}
//         >
//           <span className="block text-white opacity-0 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
//             We Build
//           </span>
//           <span
//             className="block text-gradient opacity-0 animate-slide-up"
//             style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
//           >
//             Digital Systems
//           </span>
//           <span className="block text-white opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
//             That Scale.
//           </span>
//         </h1>

//         {/* Subtext */}
//         <p
//           className="font-body text-white/50 max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-slide-up"
//           style={{ fontSize: 'clamp(15px, 2vw, 18px)', animationDelay: '0.55s', animationFillMode: 'forwards' }}
//         >
//           Full-stack websites. Automation workflows. Brand systems. 
//           We're the technical partner that builds your business infrastructure end-to-end.
//         </p>

//         {/* CTA Buttons */}
//         <div
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up"
//           style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
//         >
//           <a href="#contact" className="btn-orange px-8 py-4 rounded-full text-base w-full sm:w-auto">
//             Start a Project →
//           </a>
//           <a href="#work" className="btn-outline px-8 py-4 rounded-full text-base w-full sm:w-auto">
//             View Our Work
//           </a>
//         </div>

//         {/* Quick stats row */}
//         <div
//           className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-0 animate-slide-up"
//           style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
//         >
//           {[
//             { num: '50+', label: 'Projects Delivered' },
//             { num: '30+', label: 'Happy Clients' },
//             { num: '4+', label: 'Years Experience' },
//             { num: '100%', label: 'Client Satisfaction' },
//           ].map((s, i) => (
//             <div key={i} className="text-center">
//               <div className="font-display font-bold text-2xl text-orange-400">{s.num}</div>
//               <div className="font-body text-xs text-white/40 mt-0.5">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
//         <span className="font-mono text-xs tracking-widest text-white/50 uppercase">Scroll</span>
//         <div className="w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
//       </div>
//     </section>
//   )
// }

'use client'
import { useEffect, useRef } from 'react'

const floatingTags = [
  { label: 'Next.js',       top: '15%', left: '8%',  delay: '0s'   },
  { label: 'n8n Automation',top: '25%', right: '6%', delay: '0.5s' },
  { label: 'Shopify',       bottom: '30%', left: '5%', delay: '1s' },
  { label: 'WhatsApp API',  bottom: '20%', right: '8%', delay: '1.5s' },
  { label: 'Node.js',       top: '60%', left: '3%',  delay: '0.8s' },
  { label: 'WordPress',     top: '45%', right: '3%', delay: '1.2s' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mouse-x', `${x}%`)
      el.style.setProperty('--mouse-y', `${y}%`)
    }
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(234,88,12,0.15) 0%, transparent 60%), #080808',
      }}
    >
      {/* ── Big BG text (desktop only) ── */}
      <div
        className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black leading-none opacity-[0.025] tracking-tighter text-white"
          style={{ fontSize: 'clamp(80px,20vw,280px)', letterSpacing: '-0.06em' }}
        >
          IGNITE
        </span>
      </div>

      {/* ── Glowing orbs ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/8 blur-[80px] pointer-events-none animate-pulse-slow" />

      {/* ── Floating tech tags (desktop only) ── */}
      {floatingTags.map((tag, i) => (
        <div
          key={i}
          className="hidden lg:block absolute tag pointer-events-none"
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
            bottom: tag.bottom,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: tag.delay,
          }}
        >
          {tag.label}
        </div>
      ))}

      {/* ════════════════════════════════════════
          MOBILE / MD  —  deccanexperts.ai style
          Large soft font · centered · single CTA
      ════════════════════════════════════════ */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:hidden flex flex-col items-center text-center">

        {/* Top trust badge */}
        <div
          className="inline-flex items-center gap-2.5 glass-orange rounded-full px-5 py-2.5 mb-8 opacity-0 animate-fade-in"
          style={{ animationFillMode: 'forwards' }}
        >
          {/* Stacked avatar dots */}
          <div className="flex -space-x-2">
            {['#f97316','#fb923c','#ea580c','#c2410c'].map((bg, i) => (
              <span
                key={i}
                className="w-6 h-6 rounded-full border-2 border-black/30 flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: bg }}
              >
                {['K','S','R','N'][i]}
              </span>
            ))}
          </div>
          <span className="font-body text-xs text-orange-300 font-medium">
            Trusted by 50+ Clients
          </span>
        </div>

        {/* Headline — large, light-weight, soft rounded feel */}
        <h1
          className="text-white leading-[1.08] mb-5 opacity-0 animate-slide-up"
          style={{
            fontSize: 'clamp(2.6rem, 11vw, 3.8rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            animationDelay: '0.15s',
            animationFillMode: 'forwards',
          }}
        >
          We Build{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #f97316, #fb923c, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Digital Systems
          </span>{' '}
          That Scale.
        </h1>

        {/* Sub text — lighter, more readable */}
        <p
          className="text-white/50 leading-relaxed mb-8 opacity-0 animate-slide-up"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)',
            maxWidth: '32ch',
            lineHeight: 1.75,
            animationDelay: '0.3s',
            animationFillMode: 'forwards',
          }}
        >
          Full-stack websites. Automation workflows. Brand systems built end-to-end.
        </p>

        {/* Single primary CTA — pill, centered, like deccanexperts */}
        <div
          className="flex flex-col items-center gap-3 w-full max-w-xs opacity-0 animate-slide-up"
          style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
        >
          <a
            href="#contact"
            className="btn-orange w-full text-center py-4 rounded-full text-sm font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start a Project →
          </a>
          <a
            href="#work"
            className="text-white/40 text-xs font-mono tracking-widest uppercase hover:text-white/70 transition-colors"
          >
            View Our Work ↓
          </a>
        </div>

        {/* Stats row — compact, spaced */}
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-5 mt-12 w-full max-w-xs opacity-0 animate-slide-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '30+', label: 'Happy Clients' },
            { num: '4+', label: 'Years Experience' },
            { num: '100%', label: 'Satisfaction' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-orange-400 leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 6vw, 2rem)',
                }}
              >
                {s.num}
              </div>
              <div
                className="text-white/35"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.04em' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client logos strip — inspired by deccanexperts bottom */}
        <div
          className="mt-10 flex flex-col items-center gap-3 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}
        >
          <span
            className="text-white/25 text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem' }}
          >
            Tech We Master
          </span>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {['Next.js', 'Shopify', 'WordPress', 'Node.js'].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-xl text-white/40 text-xs font-mono tracking-wide"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: '0.68rem',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP LG+ — original design unchanged
      ════════════════════════════════════════ */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto hidden lg:block">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="font-mono text-xs text-orange-300 tracking-widest uppercase">
            Digital Agency — Available for Projects
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black leading-[0.9] mb-6"
          style={{ fontSize: 'clamp(44px, 8vw, 100px)', letterSpacing: '-0.04em' }}
        >
          <span className="block text-white opacity-0 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            We Build
          </span>
          <span
            className="block text-gradient opacity-0 animate-slide-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Digital Systems
          </span>
          <span className="block text-white opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            That Scale.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-white/50 max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-slide-up"
          style={{ fontSize: 'clamp(15px, 2vw, 18px)', animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          Full-stack websites. Automation workflows. Brand systems.
          We're the technical partner that builds your business infrastructure end-to-end.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <a href="#contact" className="btn-orange px-8 py-4 rounded-full text-base w-full sm:w-auto">
            Start a Project →
          </a>
          <a href="#work" className="btn-outline px-8 py-4 rounded-full text-base w-full sm:w-auto">
            View Our Work
          </a>
        </div>

        {/* Quick stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '30+', label: 'Happy Clients' },
            { num: '4+', label: 'Years Experience' },
            { num: '100%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-2xl text-orange-400">{s.num}</div>
              <div className="font-body text-xs text-white/40 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs tracking-widest text-white/50 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
      </div>
    </section>
  )
}