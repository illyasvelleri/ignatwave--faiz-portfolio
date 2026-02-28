'use client'
import { useEffect, useRef } from 'react'

const floatingTags = [
  { label: 'Next.js', top: '15%', left: '8%', delay: '0s' },
  { label: 'n8n Automation', top: '25%', right: '6%', delay: '0.5s' },
  { label: 'Shopify', bottom: '30%', left: '5%', delay: '1s' },
  { label: 'WhatsApp API', bottom: '20%', right: '8%', delay: '1.5s' },
  { label: 'Node.js', top: '60%', left: '3%', delay: '0.8s' },
  { label: 'WordPress', top: '45%', right: '3%', delay: '1.2s' },
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
        background: 'radial-gradient(ellipse 80% 60% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(234,88,12,0.15) 0%, transparent 60%), #080808',
      }}
    >
      {/* Big BG text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-[clamp(80px,20vw,280px)] leading-none opacity-[0.025] tracking-tighter text-white"
          style={{ letterSpacing: '-0.06em' }}
        >
          IGNITE
        </span>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/8 blur-[80px] pointer-events-none animate-pulse-slow" />

      {/* Floating tech tags - hidden on small screens */}
      {floatingTags.map((tag, i) => (
        <div
          key={i}
          className="hidden lg:block absolute tag pointer-events-none"
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
            bottom: tag.bottom,
            animationDelay: tag.delay,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: tag.delay,
          }}
        >
          {tag.label}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
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