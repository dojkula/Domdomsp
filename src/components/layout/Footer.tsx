import { motion } from 'framer-motion'
import { SITE } from '../../constants/content'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'DomDom',
            description: 'Profesionalno čiščenje pisarn, teras in oken po Sloveniji.',
            url: 'https://domdom.si',
            telephone: SITE.phone,
            email: SITE.email,
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'SI',
              addressRegion: 'Slovenija',
            },
            areaServed: 'Slovenija',
            priceRange: '€€',
            openingHours: 'Mo-Fr 07:00-19:00',
            sameAs: [],
          }),
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-violet flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">DD</span>
              </div>
              <span className="font-display font-bold text-xl">
                Dom<span className="text-brand-violet-light">Dom</span>
              </span>
            </div>
            <p className="text-indigo-200 font-body text-sm leading-relaxed max-w-xs">
              Čisto. Zanesljivo. Naš dom.<br />
              Profesionalno čiščenje po vsej Sloveniji — pisarne, terase, okna in generalna čiščenja.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-violet transition-colors flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-violet transition-colors flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-indigo-300 mb-5">Storitve</h4>
            <ul className="space-y-3">
              {['Čiščenje teras & fasad', 'Čiščenje oken', 'Poslovni prostori', 'Generalno čiščenje'].map(s => (
                <li key={s}>
                  <a href="#storitve" className="text-indigo-200 hover:text-white font-body text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-indigo-300 mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE.phone}`} className="text-indigo-200 hover:text-white font-body text-sm transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 text-brand-violet-light">📞</span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-indigo-200 hover:text-white font-body text-sm transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 text-brand-violet-light">✉</span>
                  {SITE.email}
                </a>
              </li>
              <li className="text-indigo-200 font-body text-sm">
                <span className="text-brand-violet-light mr-2">📍</span>
                Slovenija
              </li>
              <li className="text-indigo-200 font-body text-sm">
                <span className="text-brand-violet-light mr-2">🕐</span>
                Pon–Pet: 7:00–19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-indigo-400 font-body text-xs">
            © {new Date().getFullYear()} DomDom. Vse pravice pridržane.
          </p>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
            aria-hidden
          >
            🧹
          </motion.div>
          <p className="text-indigo-500 font-body text-xs">
            Made with ♥ v Sloveniji
          </p>
        </div>
      </div>
    </footer>
  )
}
