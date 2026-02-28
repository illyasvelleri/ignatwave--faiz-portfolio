'use client'
import { useEffect, useRef } from 'react'

const reasons = [
  {
    num: '01',
    title: 'We Don\'t Just Build — We Think',
    desc: 'Every project starts with understanding your business model, not just your design brief. We architect solutions that solve real problems.',
    icon: '◐',
  },
  {
    num: '02',
    title: 'Automation is Built In',
    desc: 'Most developers build websites. We build systems. Your site will integrate with CRMs, automate follow-ups, and work while you sleep.',
    icon: '⚙',
  },
  {
    num: '03',
    title: 'One Team. Full Stack.',
    desc: 'No fragmented freelancers. Design, development, SEO, and automation — one team that speaks the same language and ships together.',
    icon: '◈',
  },
  {
    num: '04',
    title: 'Speed Without Compromise',
    desc: 'We move fast. Our streamlined process means you get production-ready work in weeks, not months — without cutting corners.',
    icon: '◎',
  },
  {
    num: '05',
    title: 'You Own Everything',
    desc: 'No lock-in. No recurring agency fees to maintain access. Your code, your content, your brand — fully delivered and documented.',
    icon: '⬡',
  },
  {
    num: '06',
    title: 'Small Team Energy, Enterprise Quality',
    desc: 'You get direct communication with the people building your project. Senior-level work without the enterprise overhead.',
    icon: '✦',
  },
]

export default function WhyUs() {
  const sectionRef = useRef(null)

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

  return (
    <section id="why" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* BG Decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-500/3 to-transparent pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="tag inline-block mb-4">Why ignatwave</div>
          <h2
            className="font-display font-black text-white leading-tight max-w-2xl"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
          >
            Not Just Another
            <br />
            <span className="text-gradient">Agency</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden stagger-children">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="reveal bg-dark-800 p-6 sm:p-8 hover:bg-dark-700 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-orange-500/40 text-xs font-bold tracking-widest">{r.num}</span>
                <span className="text-orange-500/30 text-xl group-hover:text-orange-500/60 transition-colors">{r.icon}</span>
              </div>
              <h3 className="font-display font-bold text-white text-base mb-3 leading-tight">{r.title}</h3>
              <p className="font-body text-white/40 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote/statement */}
        <div className="mt-16 reveal">
          <div className="glass-orange rounded-2xl p-8 sm:p-12 text-center">
            <p
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}
            >
              "We Build Creators.
              <br />
              <span className="text-gradient">And With Creators, We Build Companies."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}