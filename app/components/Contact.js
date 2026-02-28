'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-800/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="tag inline-block mb-4">Contact</div>
          <h2
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 72px)', letterSpacing: '-0.03em' }}
          >
            Ready to
            <br />
            <span className="text-gradient">Ignite Growth?</span>
          </h2>
          <p className="font-body text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5 reveal">
            {[
              { icon: '⬡', label: 'Email', value: 'hello@ignatwave.com', href: 'mailto:hello@ignatwave.com' },
              { icon: '◈', label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
              { icon: '◎', label: 'Location', value: 'Kerala, India · Remote Worldwide', href: null },
            ].map((info, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 flex items-center gap-4 card-hover"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="w-10 h-10 rounded-lg glass-orange flex items-center justify-center text-orange-400 text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-white/30 uppercase tracking-widest">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="font-body text-white hover:text-orange-400 transition-colors text-sm">
                      {info.value}
                    </a>
                  ) : (
                    <div className="font-body text-white/70 text-sm">{info.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick services */}
            <div className="glass rounded-xl p-5" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="font-mono text-xs text-white/30 uppercase tracking-widest mb-3">We specialize in</div>
              <div className="flex flex-wrap gap-2">
                {['Web Dev', 'Automation', 'Branding', 'SEO', 'eCommerce', 'Shopify', 'WordPress'].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="font-display font-bold text-white text-2xl">Message Sent!</h3>
                <p className="font-body text-white/50 text-sm">We'll get back to you within 24 hours with a tailored proposal.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }) }}
                  className="btn-outline px-6 py-2.5 rounded-full text-sm mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 space-y-5"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-orange-500/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-dark-800">Select a service...</option>
                    <option value="web" className="bg-dark-800">Web Development</option>
                    <option value="cms" className="bg-dark-800">CMS / Platform Build</option>
                    <option value="automation" className="bg-dark-800">Automation & Systems</option>
                    <option value="branding" className="bg-dark-800">Branding & Design</option>
                    <option value="seo" className="bg-dark-800">SEO & Digital Growth</option>
                    <option value="full" className="bg-dark-800">Full Package</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Tell Us About Your Project</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you building? What's your timeline and budget?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-orange w-full py-4 rounded-xl text-base">
                  Send Message — Let's Build Together →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}