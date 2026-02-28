'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 50, suffix: '+', label: 'Projects Delivered' },
  { num: 30, suffix: '+', label: 'Happy Clients' },
  { num: 2, suffix: 'M+', label: 'Total Reach Built' },
  { num: 100, suffix: '%', label: 'Client Satisfaction' },
]

const teamMembers = [
  { name: 'Alex K.', role: 'Founder & Full-Stack Dev', color: 'bg-orange-500', initials: 'AK' },
  { name: 'Sara M.', role: 'UI/UX Designer', color: 'bg-blue-500', initials: 'SM' },
  { name: 'Ravi P.', role: 'Backend Engineer', color: 'bg-emerald-500', initials: 'RP' },
  { name: 'Nadia T.', role: 'Automation Specialist', color: 'bg-purple-500', initials: 'NT' },
  { name: 'John C.', role: 'SEO & Growth', color: 'bg-yellow-500', initials: 'JC' },
  { name: 'Priya S.', role: 'Brand Designer', color: 'bg-pink-500', initials: 'PS' },
  { name: 'Omar H.', role: 'WordPress Dev', color: 'bg-cyan-500', initials: 'OH' },
  { name: 'Leila F.', role: 'Content Strategist', color: 'bg-red-500', initials: 'LF' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const increment = target / 60
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>{count}{suffix}</span>
  )
}

export default function Team() {
  const sectionRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (entry.target.dataset.stats) setStatsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-800/30 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">

        {/* Team Header */}
        <div className="mb-16 reveal">
          <div className="tag inline-block mb-4">The Team</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
            >
              ignatwave
              <br />
              <span className="text-gradient">Growth Squad</span>
            </h2>
            <p className="font-body text-white/40 max-w-sm text-sm leading-relaxed">
              A tight-knit team of builders, designers, and strategists united by one goal: your growth.
            </p>
          </div>
        </div>

        {/* Team Grid — colorful blocks like image 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-20 stagger-children">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="reveal group relative rounded-2xl overflow-hidden aspect-square flex flex-col items-start justify-end p-4 cursor-default"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Colored bg square in corner */}
              <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${member.color} opacity-60 group-hover:opacity-80 transition-opacity`} style={{ borderRadius: '0 16px 0 40px' }} />

              {/* Avatar initials */}
              <div className={`absolute top-3 right-3 w-10 h-10 rounded-xl ${member.color} flex items-center justify-center`}>
                <span className="font-display font-bold text-white text-xs">{member.initials}</span>
              </div>

              {/* Info */}
              <div className="relative z-10">
                <div className="font-display font-bold text-white text-sm leading-tight">{member.name}</div>
                <div className="font-mono text-xs text-white/40 mt-0.5 leading-tight">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats — like the circles in image 2 */}
        <div className="reveal" data-stats="true">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 sm:p-8 text-center card-hover relative overflow-hidden group"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500" />
                {/* Ring decoration */}
                <div className="absolute inset-4 rounded-full border border-white/5 group-hover:border-orange-500/10 transition-all duration-500" />
                <div className="relative">
                  <div className="font-display font-black text-gradient leading-none mb-2" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                    <CountUp target={stat.num} suffix={stat.suffix} active={statsVisible} />
                  </div>
                  <div className="font-body text-white/40 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}