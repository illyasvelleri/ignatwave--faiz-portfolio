export default function TechMarquee() {
  const items = [
    'Next.js', '✦', 'Node.js', '✦', 'WordPress', '✦', 'Shopify', '✦',
    'MongoDB', '✦', 'Tailwind CSS', '✦', 'n8n Automation', '✦', 'WhatsApp API', '✦',
    'REST APIs', '✦', 'SEO', '✦', 'UI/UX Design', '✦', 'Branding', '✦',
    'eCommerce', '✦', 'Social Media', '✦', 'JavaScript', '✦', 'Webhooks', '✦',
  ]

  return (
    <div className="py-6 overflow-hidden border-y border-white/5 bg-dark-800/50">
      <div className="marquee-track gap-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`inline-block mx-4 font-mono text-xs tracking-widest uppercase ${
              item === '✦' ? 'text-orange-500' : 'text-white/30 hover:text-white/60 transition-colors cursor-default'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}