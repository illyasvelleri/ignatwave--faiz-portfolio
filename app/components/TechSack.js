'use client'
import { useEffect, useRef } from 'react'

const stackCategories = [
  {
    label: 'Frontend',
    color: '#f97316',
    items: [
      { name: 'Next.js', desc: 'React Framework' },
      { name: 'JavaScript', desc: 'Core Language' },
      { name: 'Tailwind CSS', desc: 'Utility CSS' },
    ],
  },
  {
    label: 'Backend',
    color: '#3b82f6',
    items: [
      { name: 'Node.js', desc: 'Runtime' },
      { name: 'MongoDB', desc: 'Database' },
      { name: 'REST APIs', desc: 'Architecture' },
    ],
  },
  {
    label: 'CMS & Commerce',
    color: '#10b981',
    items: [
      { name: 'WordPress', desc: 'CMS Platform' },
      { name: 'Shopify', desc: 'eCommerce' },
      { name: 'Headless CMS', desc: 'Contentful/Sanity' },
    ],
  },
  {
    label: 'Automation',
    color: '#a855f7',
    items: [
      { name: 'n8n', desc: 'Workflow Engine' },
      { name: 'WhatsApp API', desc: 'Messaging' },
      { name: 'Webhooks', desc: 'Event Triggers' },
    ],
  },
]

export default function TechStack() {
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
    <section id="stack" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="tag inline-block mb-4">Technology</div>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}
          >
            Our Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="font-body text-white/40 text-sm mt-4 max-w-lg leading-relaxed">
            Modern, battle-tested tools we use to build fast, scalable, and maintainable digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 stagger-children">
          {stackCategories.map((cat, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl p-6 card-hover"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: cat.color }}
                />
                <span className="font-display font-bold text-white text-sm">{cat.label}</span>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {cat.items.map((item, j) => (
                  <div key={j} className="group/item">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-white text-base">{item.name}</span>
                      <span
                        className="w-1.5 h-1.5 rounded-full opacity-40 group-hover/item:opacity-100 transition-opacity"
                        style={{ background: cat.color }}
                      />
                    </div>
                    <span className="font-mono text-xs text-white/30">{item.desc}</span>
                    <div
                      className="mt-2 h-px w-0 group-hover/item:w-full transition-all duration-300"
                      style={{ background: `linear-gradient(90deg, ${cat.color}60, transparent)` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}