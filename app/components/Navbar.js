'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services',     href: '#services',     num: '01' },
  { label: 'Work',         href: '#work',          num: '02' },
  { label: 'Stack',        href: '#stack',         num: '03' },
  { label: 'Team',         href: '#team',          num: '04' },
  { label: 'Testimonials', href: '#testimonials',  num: '05' },
  { label: 'Contact',      href: '#contact',       num: '06' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeLink, setActiveLink] = useState('')

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── lock body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── close on Escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = (href) => {
    setMenuOpen(false)
    setActiveLink(href)
  }

  return (
    <>
      {/* ════════════════════════════ NAV BAR ════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 border-b border-white/[0.06]'
            : 'py-5'
        }`}
        style={scrolled ? {
          background: 'rgba(8,8,8,0.82)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        } : {
          background: 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 group z-10">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                boxShadow: '0 0 18px rgba(249,115,22,0.45)',
              }}
            >
              <span
                className="text-white text-sm"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              >
                i
              </span>
            </div>
            <span
              className="text-white text-lg tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              ignatwave
            </span>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="relative group transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: 400,
                  color: activeLink === link.href ? '#fff' : 'rgba(255,255,255,0.55)',
                }}
              >
                {link.label}
                {/* animated underline */}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    width: activeLink === link.href ? '100%' : '0%',
                    background: 'linear-gradient(90deg,#f97316,#fb923c)',
                  }}
                />
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg,#f97316,#fb923c)', opacity: 0.6 }}
                />
              </a>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-full transition-all duration-300"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              background: 'linear-gradient(135deg,#f97316,#ea580c)',
              color: '#fff',
              boxShadow: '0 0 20px rgba(249,115,22,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 32px rgba(249,115,22,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(249,115,22,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start a Project
            <span className="text-orange-200">→</span>
          </a>

          {/* ── Hamburger (mobile) ── */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden relative z-10 flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-xl transition-colors duration-200"
            style={{
              background: menuOpen ? 'transparent' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span className="block w-[18px] h-px bg-white/70 rounded-full transition-all duration-300" />
            <span className="block w-[14px] h-px bg-orange-400 rounded-full transition-all duration-300 self-end mr-[4px]" />
            <span className="block w-[18px] h-px bg-white/70 rounded-full transition-all duration-300" />
          </button>

        </div>
      </nav>

      {/* ════════════════════════ MOBILE DRAWER ════════════════════════ */}

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-[60] md:hidden transition-all duration-500"
        style={{
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: menuOpen ? 'blur(4px)' : 'blur(0px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Drawer panel — slides in from right */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[70] md:hidden flex flex-col"
        style={{
          width: 'min(320px, 88vw)',
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          borderLeft: '1px solid rgba(249,115,22,0.12)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.32,0.72,0,1)',
          boxShadow: menuOpen ? '-24px 0 80px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 pt-5 pb-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          {/* Logo inside drawer */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 0 12px rgba(249,115,22,0.4)' }}
            >
              <span className="text-white text-xs" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>i</span>
            </div>
            <span className="text-white text-base" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
              ignatwave
            </span>
          </a>

          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(249,115,22,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => close(link.href)}
                className="group flex items-center justify-between px-3 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  background: activeLink === link.href
                    ? 'rgba(249,115,22,0.1)'
                    : 'transparent',
                  border: activeLink === link.href
                    ? '1px solid rgba(249,115,22,0.2)'
                    : '1px solid transparent',
                  /* stagger in */
                  transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: menuOpen ? 1 : 0,
                }}
                onMouseEnter={e => {
                  if (activeLink !== link.href) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  }
                }}
                onMouseLeave={e => {
                  if (activeLink !== link.href) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'transparent'
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: activeLink === link.href ? '#f97316' : 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {link.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: activeLink === link.href ? '#fff' : 'rgba(255,255,255,0.65)',
                    }}
                    className="group-hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </span>
                </div>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M3 7h8M7 3l4 4-4 4" stroke={activeLink === link.href ? '#f97316' : 'rgba(255,255,255,0.2)'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </nav>

        {/* Drawer footer — CTA + availability */}
        <div
          className="px-4 pt-4 pb-8 flex flex-col gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              background: 'linear-gradient(135deg,#f97316,#ea580c)',
              color: '#fff',
              boxShadow: '0 8px 24px rgba(249,115,22,0.3)',
            }}
          >
            Start a Project
            <span>→</span>
          </a>

          {/* Availability badge */}
          <div
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl"
            style={{
              background: 'rgba(249,115,22,0.05)',
              border: '1px solid rgba(249,115,22,0.12)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-orange-400"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(249,115,22,0.8)',
              }}
            >
              Available for projects
            </span>
          </div>
        </div>

        {/* Subtle orange glow at top-right of drawer */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      </div>
    </>
  )
}