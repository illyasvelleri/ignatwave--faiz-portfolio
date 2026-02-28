'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Abida Rasheed',
    role: 'Culinary Expert & Creator',
    avatar: 'AR',
    color: 'bg-orange-500',
    quote: 'ignatwave transformed my online presence completely. My recipe brand went from zero followers to 50K+ in 6 months. Their content strategy and website are incredible.',
    result: '50K+ followers in 6 months',
    bg: 'from-orange-500/10 to-red-500/5',
  },
  {
    name: 'Henna Gazal',
    role: 'Founder, Habitos Care',
    avatar: 'HG',
    color: 'bg-emerald-500',
    quote: 'The branding and website they built for Habitos Care perfectly captures our philosophy. The WhatsApp automation alone saves us 3 hours daily on patient inquiries.',
    result: '3+ hours saved daily via automation',
    bg: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    name: 'Faisal Rahman',
    role: 'Real Estate Agency Owner',
    avatar: 'FR',
    color: 'bg-blue-500',
    quote: 'Our lead conversion doubled after ignatwave rebuilt our website with automated follow-up sequences. The ROI was visible in the first month.',
    result: '2x lead conversion rate',
    bg: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    name: 'Amina Shareef',
    role: 'eCommerce Entrepreneur',
    avatar: 'AS',
    color: 'bg-purple-500',
    quote: "My Shopify store was built and launched in 3 weeks. The automation they set up for order notifications and inventory alerts is something I didn't even know I needed.",
    result: 'Launched in 3 weeks, 30% more orders',
    bg: 'from-purple-500/10 to-pink-500/5',
  },
  {
    name: 'Nizam VM',
    role: 'Content Creator & Coach',
    avatar: 'NV',
    color: 'bg-yellow-500',
    quote: "Working with ignatwave felt like having a co-founder for my digital side. They think about the business, not just the pixels. Game-changing team.",
    result: 'Brand built from ground up',
    bg: 'from-yellow-500/10 to-orange-500/5',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Healthcare Consultant',
    avatar: 'SC',
    color: 'bg-pink-500',
    quote: 'Professional, fast, and technically excellent. My multilingual WordPress site with booking system was delivered ahead of schedule and beyond expectations.',
    result: 'Delivered ahead of schedule',
    bg: 'from-pink-500/10 to-rose-500/5',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* BG Decoration */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal text-center">
          <div className="tag inline-block mb-4">Testimonials</div>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
          >
            Words From
            <br />
            <span className="text-gradient">Our Clients</span>
          </h2>
        </div>

        {/* Featured testimonial — like image 3 layout */}
        <div className="mb-8 reveal">
          <div className={`glass rounded-3xl overflow-hidden bg-gradient-to-br ${testimonials[active].bg}`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex flex-col md:flex-row">
              {/* Avatar side */}
              <div className="md:w-1/3 p-8 sm:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                <div className={`w-20 h-20 rounded-2xl ${testimonials[active].color} flex items-center justify-center mb-4 text-2xl font-display font-black text-white`}>
                  {testimonials[active].avatar}
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-white text-lg">{testimonials[active].name}</div>
                  <div className="font-mono text-xs text-white/40 mt-1">{testimonials[active].role}</div>
                </div>
                {/* Result badge */}
                <div className="mt-4 glass-orange rounded-full px-4 py-2 text-center">
                  <span className="font-mono text-xs text-orange-400">✓ {testimonials[active].result}</span>
                </div>
              </div>

              {/* Quote side */}
              <div className="md:w-2/3 p-8 sm:p-10 flex flex-col justify-center">
                <div className="text-orange-500/30 font-display text-6xl leading-none mb-4" aria-hidden="true">"</div>
                <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed italic">
                  {testimonials[active].quote}
                </p>
                <div className="flex gap-1 mt-6">
                  {[0,1,2,3,4].map(s => (
                    <span key={s} className="text-orange-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation + mini cards */}
        <div className="flex flex-col items-center gap-6 reveal">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? 'bg-orange-500 w-8' : 'bg-white/20 w-3 hover:bg-white/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Mini avatar strip */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                  active === i ? 'glass-orange' : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg ${t.color} flex items-center justify-center text-xs font-display font-bold text-white`}>
                  {t.avatar}
                </div>
                <span className={`font-body text-xs ${active === i ? 'text-white' : 'text-white/40'}`}>{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}