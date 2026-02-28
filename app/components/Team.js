// 'use client'
// import { useEffect, useRef, useState } from 'react'

// const stats = [
//   { num: 50, suffix: '+', label: 'Projects Delivered' },
//   { num: 30, suffix: '+', label: 'Happy Clients' },
//   { num: 2, suffix: 'M+', label: 'Total Reach Built' },
//   { num: 100, suffix: '%', label: 'Client Satisfaction' },
// ]

// const teamMembers = [
//   { name: 'Alex K.', role: 'Founder & Full-Stack Dev', color: 'bg-orange-500', initials: 'AK', image: '/images/Business-man01.jpg' },
//   { name: 'Sara M.', role: 'UI/UX Designer', color: 'bg-blue-500', initials: 'SM', image: '/images/Business-man01.jpg' },
//   { name: 'Ravi P.', role: 'Backend Engineer', color: 'bg-emerald-500', initials: 'RP', image: '/images/Business-man01.jpg' },
//   { name: 'Nadia T.', role: 'Automation Specialist', color: 'bg-purple-500', initials: 'NT', image: '/images/Business-man01.jpg' },
//   { name: 'John C.', role: 'SEO & Growth', color: 'bg-yellow-500', initials: 'JC', image: '/images/Business-man01.jpg' },
//   { name: 'Priya S.', role: 'Brand Designer', color: 'bg-pink-500', initials: 'PS', image: '/images/Business-man01.jpg' },
//   { name: 'Omar H.', role: 'WordPress Dev', color: 'bg-cyan-500', initials: 'OH', image: '/images/Business-man01.jpg' },
//   { name: 'Leila F.', role: 'Content Strategist', color: 'bg-red-500', initials: 'LF', image: '/images/Business-man01.jpg' },
// ]

// function CountUp({ target, suffix, active }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (!active) return
//     let start = 0
//     const increment = target / 60
//     const timer = setInterval(() => {
//       start += increment
//       if (start >= target) {
//         setCount(target)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(start))
//       }
//     }, 20)
//     return () => clearInterval(timer)
//   }, [active, target])

//   return (
//     <span>{count}{suffix}</span>
//   )
// }

// export default function Team() {
//   const sectionRef = useRef(null)
//   const [statsVisible, setStatsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible')
//             if (entry.target.dataset.stats) setStatsVisible(true)
//           }
//         })
//       },
//       { threshold: 0.2 }
//     )
//     const elements = sectionRef.current?.querySelectorAll('.reveal')
//     elements?.forEach((el) => observer.observe(el))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section id="team" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-800/30 relative overflow-hidden">
//       <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
//       <div className="max-w-7xl mx-auto relative">

//         {/* Team Header */}
//         <div className="mb-16 reveal">
//           <div className="tag inline-block mb-4">The Team</div>
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//             <h2
//               className="font-display font-black text-white leading-tight"
//               style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
//             >
//               ignatwave
//               <br />
//               <span className="text-gradient">Growth Squad</span>
//             </h2>
//             <p className="font-body text-white/40 max-w-sm text-sm leading-relaxed">
//               A tight-knit team of builders, designers, and strategists united by one goal: your growth.
//             </p>
//           </div>
//         </div>

//         {/* Team Grid — colorful blocks like image 2 */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-20 stagger-children">
//           {teamMembers.map((member, i) => (
//             <div
//               key={i}
//               className="reveal group relative rounded-2xl overflow-hidden aspect-square flex flex-col items-start justify-end p-4 cursor-default"
//               style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
//             >
//               {/* Colored bg square in corner */}
//               <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${member.color} opacity-60 group-hover:opacity-80 transition-opacity`} style={{ borderRadius: '0 16px 0 40px' }} />

//               {/* Avatar initials */}
//               <div className={`absolute top-3 right-3 w-10 h-10 rounded-xl ${member.color} flex items-center justify-center`}>
//                 <span className="font-display font-bold text-white text-xs">{member.initials}</span>
//               </div>

//               {/* Info */}
//               <div className="relative z-10">
//                 <div className="font-display font-bold text-white text-sm leading-tight">{member.name}</div>
//                 <div className="font-mono text-xs text-white/40 mt-0.5 leading-tight">{member.role}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats — like the circles in image 2 */}
//         <div className="reveal" data-stats="true">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//             {stats.map((stat, i) => (
//               <div
//                 key={i}
//                 className="glass rounded-2xl p-6 sm:p-8 text-center card-hover relative overflow-hidden group"
//                 style={{ border: '1px solid rgba(255,255,255,0.06)' }}
//               >
//                 <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500" />
//                 {/* Ring decoration */}
//                 <div className="absolute inset-4 rounded-full border border-white/5 group-hover:border-orange-500/10 transition-all duration-500" />
//                 <div className="relative">
//                   <div className="font-display font-black text-gradient leading-none mb-2" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
//                     <CountUp target={stat.num} suffix={stat.suffix} active={statsVisible} />
//                   </div>
//                   <div className="font-body text-white/40 text-xs sm:text-sm">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const stats = [
  { num: 50, suffix: '+', label: 'Projects Delivered' },
  { num: 30, suffix: '+', label: 'Happy Clients' },
  { num: 2, suffix: 'M+', label: 'Total Reach Built' },
  { num: 100, suffix: '%', label: 'Client Satisfaction' },
]

const teamMembers = [
  {
    name: 'Alex K.',
    role: 'Founder & Full-Stack Dev',
    initials: 'AK',
    image: '/images/Business-man01.jpg',
    tile: '#f97316',
    ring: '#fb923c',
    pattern: 'circles',
    size: 'large',
    skills: [0.9, 0.7, 0.85, 0.6],
  },
  {
    name: 'Sara M.',
    role: 'UI/UX Designer',
    initials: 'SM',
    image: '/images/Business-man01.jpg',
    tile: '#3b82f6',
    ring: '#60a5fa',
    pattern: 'lines',
    size: 'normal',
  },
  {
    name: 'Ravi P.',
    role: 'Backend Engineer',
    initials: 'RP',
    image: '/images/Business-man01.jpg',
    tile: '#10b981',
    ring: '#34d399',
    pattern: 'dots',
    size: 'normal',
  },
  {
    name: 'Nadia T.',
    role: 'Automation Specialist',
    initials: 'NT',
    image: '/images/Business-man01.jpg',
    tile: '#a855f7',
    ring: '#c084fc',
    pattern: 'grid',
    size: 'normal',
  },
  {
    name: 'John C.',
    role: 'SEO & Growth',
    initials: 'JC',
    image: '/images/Business-man01.jpg',
    tile: '#eab308',
    ring: '#fde047',
    pattern: 'circles',
    size: 'normal',
  },
  {
    name: 'Priya S.',
    role: 'Brand Designer',
    initials: 'PS',
    image: '/images/Business-man01.jpg',
    tile: '#ec4899',
    ring: '#f472b6',
    pattern: 'lines',
    size: 'large',
    skills: [0.95, 0.8, 0.7, 0.88],
  },
  {
    name: 'Omar H.',
    role: 'WordPress Dev',
    initials: 'OH',
    image: '/images/Business-man01.jpg',
    tile: '#06b6d4',
    ring: '#22d3ee',
    pattern: 'dots',
    size: 'normal',
  },
  {
    name: 'Leila F.',
    role: 'Content Strategist',
    initials: 'LF',
    image: '/images/Business-man01.jpg',
    tile: '#ef4444',
    ring: '#f87171',
    pattern: 'grid',
    size: 'normal',
  },
]

// ── SVG decorative backgrounds ──────────────────────────────────────────────
function PatternBg({ pattern, color }) {
  const op = 0.12
  if (pattern === 'circles') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {[30, 55, 80, 105, 130].map((r, i) => (
        <circle key={i} cx="75%" cy="28%" r={`${r}%`} fill="none" stroke={color} strokeWidth="0.6" opacity={op - i * 0.01} />
      ))}
    </svg>
  )
  if (pattern === 'lines') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1={`${i * 12}%`} y1="0" x2={`${i * 12 - 25}%`} y2="100%" stroke={color} strokeWidth="0.7" opacity={op} />
      ))}
    </svg>
  )
  if (pattern === 'dots') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={`${col * 16 + 8}%`} cy={`${row * 16 + 8}%`} r="1.8" fill={color} opacity={op + ((row + col) % 3) * 0.04} />
        ))
      )}
    </svg>
  )
  if (pattern === 'grid') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={`${i * 14}%`} x2="100%" y2={`${i * 14}%`} stroke={color} strokeWidth="0.5" opacity={op} />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={`${i * 14}%`} y1="0" x2={`${i * 14}%`} y2="100%" stroke={color} strokeWidth="0.5" opacity={op} />
      ))}
    </svg>
  )
  return null
}

// ── Creative Avatar with image + fallback ───────────────────────────────────
function MemberAvatar({ member, size = 'md' }) {
  const [imgErr, setImgErr] = useState(false)

  const dim = size === 'lg' ? 96 : 64
  const fontSize = size === 'lg' ? '1.75rem' : '1.1rem'
  const rounded = 'rounded-2xl'

  return (
    <div className="relative flex-shrink-0" style={{ width: dim, height: dim }}>
      {/* Glow halo */}
      <div
        className={`absolute -inset-1.5 ${rounded} opacity-50 blur-md`}
        style={{ background: `linear-gradient(135deg, ${member.tile}, ${member.ring})` }}
      />
      {/* Frame */}
      <div
        className={`relative w-full h-full ${rounded} overflow-hidden`}
        style={{
          background: `linear-gradient(145deg, ${member.tile}25, ${member.ring}10)`,
          border: `1.5px solid ${member.tile}55`,
        }}
      >
        {!imgErr ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes={`${dim}px`}
            className="object-cover object-center"
            onError={() => setImgErr(true)}
          />
        ) : (
          /* ── Artistic fallback avatar ── */
          <div className="w-full h-full flex flex-col items-center justify-end overflow-hidden relative">
            {/* Body silhouette using CSS */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[45%] rounded-t-full opacity-25"
              style={{ background: `linear-gradient(to top, ${member.tile}, transparent)` }}
            />
            {/* Head circle */}
            <div
              className="absolute top-[18%] left-1/2 -translate-x-1/2 rounded-full opacity-30"
              style={{
                width: size === 'lg' ? 36 : 24,
                height: size === 'lg' ? 36 : 24,
                background: member.tile,
              }}
            />
            {/* Initials on top */}
            <span
              className="relative z-10 font-display font-black text-white mb-2 select-none"
              style={{ fontSize, textShadow: `0 2px 10px ${member.tile}90` }}
            >
              {member.initials}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Skill bar row ───────────────────────────────────────────────────────────
function SkillBars({ skills, tile, ring }) {
  return (
    <div className="flex items-center gap-1.5 mt-3">
      {skills.map((v, i) => (
        <div key={i} className="h-1.5 rounded-full overflow-hidden bg-white/10" style={{ width: 24 }}>
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${v * 100}%`, background: `linear-gradient(90deg, ${tile}, ${ring})` }}
          />
        </div>
      ))}
    </div>
  )
}

// ── Large feature card (2×2) ─────────────────────────────────────────────────
function LargeCard({ member, idx, align = 'left' }) {
  return (
    <div
      className="reveal relative rounded-3xl overflow-hidden cursor-default group col-span-2 row-span-2"
      style={{
        background: '#0c0c0c',
        border: `1px solid ${member.tile}22`,
        minHeight: 280,
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 90% 90% at ${align === 'left' ? '25% 60%' : '75% 60%'}, ${member.tile}, transparent)`,
        }}
      />
      <PatternBg pattern={member.pattern} color={member.tile} />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: align === 'left'
            ? `linear-gradient(90deg, ${member.tile}, ${member.ring}, transparent)`
            : `linear-gradient(90deg, transparent, ${member.tile}, ${member.ring})`,
        }}
      />

      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
        {/* Header row */}
        <div className={`flex items-start ${align === 'right' ? 'flex-row-reverse' : ''} justify-between`}>
          <span
            className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ background: `${member.tile}15`, color: member.ring, border: `1px solid ${member.tile}35` }}
          >
            {member.role}
          </span>
          <span className="font-mono text-xs text-white/15">
            {String(idx + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Bottom: avatar + name */}
        <div className={`flex items-end gap-5 mt-auto ${align === 'right' ? 'flex-row-reverse' : ''}`}>
          <MemberAvatar member={member} size="lg" />
          <div className={align === 'right' ? 'text-right' : ''}>
            <h3
              className="font-display font-black text-white leading-none"
              style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
            >
              {member.name}
            </h3>
            <SkillBars skills={member.skills} tile={member.tile} ring={member.ring} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Normal card ──────────────────────────────────────────────────────────────
function NormalCard({ member, idx }) {
  return (
    <div
      className="reveal relative rounded-2xl overflow-hidden cursor-default group"
      style={{
        background: '#0c0c0c',
        border: `1px solid ${member.tile}20`,
        aspectRatio: '1 / 1',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-15 group-hover:opacity-28 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 70% 20%, ${member.tile}, transparent 65%)` }}
      />
      <PatternBg pattern={member.pattern} color={member.tile} />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${member.tile}80, transparent)` }} />

      {/* Large watermark number */}
      <div
        aria-hidden="true"
        className="absolute bottom-1 right-2 font-display font-black select-none pointer-events-none"
        style={{ fontSize: '5rem', color: member.tile, opacity: 0.05, lineHeight: 1 }}
      >
        {String(idx + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10 p-4 h-full flex flex-col justify-between">
        {/* Avatar */}
        <MemberAvatar member={member} size="sm" />

        {/* Name + role */}
        <div>
          <div className="font-display font-bold text-white text-sm leading-snug">{member.name}</div>
          <div className="font-mono text-xs mt-0.5 leading-tight" style={{ color: `${member.ring}90` }}>
            {member.role}
          </div>
          {/* Thin accent underline */}
          <div
            className="mt-2 h-px rounded-full transition-all duration-500 w-8 group-hover:w-14"
            style={{ background: `linear-gradient(90deg, ${member.tile}, transparent)` }}
          />
        </div>
      </div>
    </div>
  )
}

// ── CountUp ──────────────────────────────────────────────────────────────────
function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const inc = target / 60
    const timer = setInterval(() => {
      start += inc
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 20)
    return () => clearInterval(timer)
  }, [active, target])
  return <span>{count}{suffix}</span>
}

// ── Main export ───────────────────────────────────────────────────────────────
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
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Indices: 0=Alex(large), 1=Sara, 2=Ravi, 3=Nadia, 4=John, 5=Priya(large), 6=Omar, 7=Leila
  return (
    <section id="team" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-800/30 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="tag inline-block mb-4">The Team</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-black text-white leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}>
              ignatwave<br />
              <span className="text-gradient">Growth Squad</span>
            </h2>
            <p className="font-body text-white/40 max-w-sm text-sm leading-relaxed">
              A tight-knit team of builders, designers, and strategists united by one goal: your growth.
            </p>
          </div>
        </div>

        {/* ── DESKTOP MOSAIC (≥768px) ─────────────────────────────────────── */}
        <div className="hidden md:grid gap-3 mb-20" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '160px' }}>
          {/* Row 1+2 left: Alex 2×2 */}
          <LargeCard member={teamMembers[0]} idx={0} align="left" />
          {/* Row 1: Sara, Ravi */}
          <NormalCard member={teamMembers[1]} idx={1} />
          <NormalCard member={teamMembers[2]} idx={2} />
          {/* Row 2: Nadia, John */}
          <NormalCard member={teamMembers[3]} idx={3} />
          <NormalCard member={teamMembers[4]} idx={4} />
          {/* Row 3: Omar, Leila */}
          <NormalCard member={teamMembers[6]} idx={6} />
          <NormalCard member={teamMembers[7]} idx={7} />
          {/* Row 3+4 right: Priya 2×2 */}
          <LargeCard member={teamMembers[5]} idx={5} align="right" />
        </div>

        {/* ── MOBILE GRID (< 768px): simple 2-col ──────────────────────────── */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-16">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`reveal relative rounded-2xl overflow-hidden cursor-default group ${member.size === 'large' ? 'col-span-2' : ''}`}
              style={{
                background: '#0c0c0c',
                border: `1px solid ${member.tile}22`,
                minHeight: member.size === 'large' ? 160 : 140,
              }}
            >
              <div
                className="absolute inset-0 opacity-15"
                style={{ background: `radial-gradient(circle at 30% 50%, ${member.tile}, transparent 65%)` }}
              />
              <PatternBg pattern={member.pattern} color={member.tile} />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${member.tile}, transparent)` }} />

              <div className="relative z-10 p-4 h-full flex items-center gap-4">
                <MemberAvatar member={member} size={member.size === 'large' ? 'lg' : 'sm'} />
                <div>
                  <div className="font-display font-bold text-white text-sm leading-snug">{member.name}</div>
                  <div className="font-mono text-xs mt-0.5" style={{ color: `${member.ring}90` }}>{member.role}</div>
                  {member.skills && <SkillBars skills={member.skills} tile={member.tile} ring={member.ring} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal" data-stats="true">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 sm:p-8 text-center card-hover relative overflow-hidden group"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500" />
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