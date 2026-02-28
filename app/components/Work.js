'use client'
import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'HealthFirst Clinic',
    category: 'Business Website',
    desc: 'Healthcare clinic site with appointment booking, WhatsApp automation, and patient management integration.',
    tags: ['Next.js', 'WhatsApp API', 'n8n'],
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: '#3b82f6',
    year: '2024',
  },
  {
    title: 'Malabar Eats',
    category: 'eCommerce Store',
    desc: 'Traditional food brand online store with Shopify, 1000+ SKUs, and automated order fulfillment workflows.',
    tags: ['Shopify', 'n8n', 'SEO'],
    color: 'from-orange-500/20 to-red-500/10',
    accent: '#f97316',
    year: '2024',
  },
  {
    title: 'RealState Pro',
    category: 'Lead Gen + CRM',
    desc: 'Real estate agency landing pages with instant lead capture, WhatsApp follow-up, and CRM automation.',
    tags: ['Next.js', 'WhatsApp API', 'CRM'],
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: '#10b981',
    year: '2023',
  },
  {
    title: 'Habitos Care',
    category: 'Brand + Website',
    desc: 'Healthcare brand identity, website, and social media strategy for holistic wellness platform.',
    tags: ['Branding', 'WordPress', 'SMM'],
    color: 'from-purple-500/20 to-pink-500/10',
    accent: '#a855f7',
    year: '2023',
  },
  {
    title: 'EdTech SaaS Dashboard',
    category: 'SaaS Frontend',
    desc: 'Online learning platform with real-time progress tracking, instructor dashboard, and payment automation.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    color: 'from-yellow-500/20 to-orange-500/10',
    accent: '#f59e0b',
    year: '2024',
  },
  {
    title: 'LocalBiz Network',
    category: 'Multi-site WordPress',
    desc: '50+ local business microsites built on WordPress with centralized admin and automated content scheduling.',
    tags: ['WordPress', 'n8n', 'SEO'],
    color: 'from-rose-500/20 to-red-500/10',
    accent: '#f43f5e',
    year: '2024',
  },
]

export default function Work() {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Web Dev', 'eCommerce', 'Automation', 'Branding']

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
    <section id="work" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 reveal">
          <div className="tag inline-block mb-4">Selected Work</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
            >
              Projects That
              <br />
              <span className="text-gradient">Delivered Results</span>
            </h2>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-mono text-xs px-4 py-2 rounded-full transition-all duration-200 ${
                    filter === cat
                      ? 'bg-orange-500 text-white'
                      : 'glass text-white/50 hover:text-white hover:border-orange-500/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {projects.map((p, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Visual placeholder */}
              <div
                className={`relative h-44 bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 dot-grid opacity-40" />
                <span
                  className="font-display font-black text-5xl opacity-10"
                  style={{ color: p.accent }}
                >
                  {p.title.charAt(0)}
                </span>
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-xs text-white/30">{p.year}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-full"
                    style={{ background: `${p.accent}20`, color: p.accent, border: `1px solid ${p.accent}40` }}
                  >
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, k) => (
                    <span key={k} className="font-mono text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a href="#contact" className="btn-outline px-8 py-4 rounded-full inline-block text-sm">
            Let's Build Yours →
          </a>
        </div>
      </div>
    </section>
  )
}