export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <span className="font-display font-bold text-xs text-white">i</span>
            </div>
            <span className="font-display font-bold text-white tracking-tight">ignatwave</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Services', 'Work', 'Stack', 'Team', 'Testimonials', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs text-white/30 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-white/20">
            © {year} ignatwave. All rights reserved.
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-white/15 tracking-widest uppercase">
            Built with ❤ — We Build Creators. And With Creators, We Build Companies.
          </p>
        </div>
      </div>
    </footer>
  )
}