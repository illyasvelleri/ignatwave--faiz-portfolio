'use client'
import { useEffect, useRef, useState } from 'react'

const serviceGroups = [
  {
    letter: 'A',
    color: 'from-orange-500 to-red-600',
    category: 'Web Development',
    icon: '⬡',
    services: [
      { name: 'Custom Business Websites', desc: 'Pixel-perfect, fast-loading sites that represent your brand.' },
      { name: 'Landing Pages', desc: 'High-converting pages built to turn visitors into customers.' },
      { name: 'eCommerce Stores', desc: 'Full shopping experiences with payments, inventory, and analytics.' },
      { name: 'SaaS Frontends', desc: 'Complex app UIs with dashboards, auth, and real-time data.' },
    ],
    stack: ['Next.js', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    letter: 'B',
    color: 'from-blue-500 to-cyan-600',
    category: 'CMS & Platforms',
    icon: '◈',
    services: [
      { name: 'WordPress Websites', desc: 'Custom themes, plugins, and WooCommerce integrations.' },
      { name: 'Shopify Stores', desc: 'Theme customization, apps, and conversion optimization.' },
      { name: 'Headless CMS', desc: 'Contentful, Sanity, or Strapi powered dynamic content.' },
      { name: 'Custom Admin Dashboards', desc: 'Tailored control panels for your business data.' },
    ],
    stack: ['WordPress', 'Shopify', 'WooCommerce', 'Strapi'],
  },
  {
    letter: 'C',
    color: 'from-emerald-500 to-teal-600',
    category: 'Automation & Systems',
    icon: '⚙',
    badge: 'Our Edge',
    services: [
      { name: 'n8n Workflow Automation', desc: 'Connect your tools and automate repetitive workflows.' },
      { name: 'WhatsApp API Automation', desc: 'Automated messaging, lead follow-ups, and chatbots.' },
      { name: 'Lead → CRM Integration', desc: 'Capture leads and push them instantly to your CRM.' },
      { name: 'Payment & Order Automation', desc: 'Trigger actions on purchases, subscriptions, and renewals.' },
    ],
    stack: ['n8n', 'WhatsApp API', 'Webhooks', 'Zapier'],
  },
  {
    letter: 'D',
    color: 'from-purple-500 to-pink-600',
    category: 'Digital Growth & Brand',
    icon: '◎',
    services: [
      { name: 'UI/UX Design', desc: 'Research-led interfaces that delight users and drive conversions.' },
      { name: 'Branding Systems', desc: 'Logo, identity, typography, and brand guidelines.' },
      { name: 'SEO', desc: 'On-page, technical SEO and content strategy that ranks.' },
      { name: 'Social Media Marketing', desc: 'Content strategy, scheduling, and paid social campaigns.' },
    ],
    stack: ['Figma', 'Illustrator', 'Analytics', 'Meta Ads'],
  },
]

export default function Services() {
  const [activeGroup, setActiveGroup] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="tag inline-block mb-4">Services</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-black text-white leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.03em' }}>
              What We<br />
              <span className="text-gradient">Build For You</span>
            </h2>
            <p className="font-body text-white/40 max-w-xs text-sm leading-relaxed">
              Four pillars. One agency. Everything you need to launch, grow, and automate your digital presence.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
          {serviceGroups.map((group, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl p-6 sm:p-8 card-hover cursor-default relative overflow-hidden group"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`font-mono text-xs font-bold bg-gradient-to-br ${group.color} text-transparent bg-clip-text`}>
                      0{i + 1}
                    </span>
                    {group.badge && (
                      <span className="text-xs font-mono bg-orange-500/10 border border-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
                        ★ {group.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">{group.category}</h3>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-lg flex-shrink-0`}>
                  {group.icon}
                </div>
              </div>

              {/* Services list */}
              <div className="space-y-4 mb-6">
                {group.services.map((svc, j) => (
                  <div key={j} className="flex gap-3">
                    <div className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-br ${group.color} flex-shrink-0`} />
                    <div>
                      <div className="font-display font-semibold text-white text-sm">{svc.name}</div>
                      <div className="font-body text-white/40 text-xs mt-0.5 leading-relaxed">{svc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                {group.stack.map((tech, k) => (
                  <span key={k} className="font-mono text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <a href="#contact" className="btn-orange px-8 py-4 rounded-full text-base inline-block">
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}