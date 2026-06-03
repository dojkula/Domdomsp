import { SITE, NAV, SERVICES } from '../../constants/content'

export function Footer() {
  return (
    <footer className="bg-ink-dark text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": SITE.name,
        "description": "Profesionalno čiščenje prostorov v Sloveniji — terasa, okna, pisarne, generalno čiščenje.",
        "telephone": SITE.phone,
        "email": SITE.email,
        "url": "https://domdom.si",
        "address": { "@type": "PostalAddress", "addressCountry": "SI", "addressLocality": "Slovenija" },
        "areaServed": "Slovenija",
        "openingHours": "Mo-Fr 07:00-19:00",
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Storitve čiščenja",
          "itemListElement": SERVICES.map(s => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": s.title }
          }))
        }
      })}} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="font-display font-bold text-white text-xl" itemProp="name">{SITE.name}</span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs mb-6" itemProp="description">
              Profesionalno čiščenje prostorov. Martin in Dominika — ekipa, ki dela z srcem in profesionalno opremo.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: 'Facebook', char: 'f' },
                { label: 'Instagram', char: 'in' },
                { label: 'TikTok', char: 'tt' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors">
                  <span className="font-display font-bold text-[10px] text-white/70">{s.char}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-[10px] tracking-widest uppercase text-white/40 mb-5">Navigacija</h4>
            <ul className="space-y-3">
              {NAV.map(n => (
                <li key={n.href}>
                  <a href={n.href} className="font-body text-sm text-white/50 hover:text-white transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-[10px] tracking-widest uppercase text-white/40 mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:${SITE.phone}`} className="font-body text-sm text-white/50 hover:text-white transition-colors" itemProp="telephone">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                <a href={`mailto:${SITE.email}`} className="font-body text-sm text-white/50 hover:text-white transition-colors" itemProp="email">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 13 8 13s8-7.75 8-13a8 8 0 0 0-8-8z"/>
                </svg>
                <span className="font-body text-sm text-white/50">Slovenija</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span className="font-body text-sm text-white/50">Pon–Pet: 7:00–19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} {SITE.name}. Vse pravice pridržane.
          </p>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p className="font-body text-xs text-white/30">Narejeno z ljubeznijo v Sloveniji</p>
          </div>
          <div className="flex gap-5">
            <a href="#" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">Zasebnost</a>
            <a href="#" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">Piškotki</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
