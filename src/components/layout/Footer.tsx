import { motion } from 'framer-motion'
import { SITE, NAV } from '../../constants/content'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'DomDom',
            description: 'Profesionalno čiščenje pisarn, teras in oken po Sloveniji.',
            telephone: SITE.phone,
            email: SITE.email,
            address: { '@type': 'PostalAddress', addressCountry: 'SI', addressRegion: 'Slovenija' },
            areaServed: 'Slovenija',
            openingHours: 'Mo-Fr 07:00-19:00',
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center">
                <span className="font-display font-black text-teal text-sm">DD</span>
              </div>
              <span className="font-display font-black text-xl">
                Dom<span className="text-teal">Dom</span>
              </span>
            </div>
            <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs">
              Profesionalno čiščenje za podjetja in domove. Z znanjem, izkušnjami in Karcher opremo — po vsej Sloveniji.
            </p>
            <div className="flex gap-3 mt-6">
              {['Facebook', 'Instagram', 'TikTok'].map(s => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-teal hover:text-navy-900 transition-colors flex items-center justify-center text-white/50 text-xs font-display font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-bold text-[10px] tracking-widest uppercase text-white/30 mb-5">Navigacija</h4>
            <ul className="space-y-3">
              {NAV.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-white font-body text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-[10px] tracking-widest uppercase text-white/30 mb-5">Kontakt</h4>
            <ul className="space-y-3 font-body text-sm text-white/50">
              <li><a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a></li>
              <li>Slovenija</li>
              <li>Pon–Pet: 7:00–19:00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/20 font-body text-xs">
            © {new Date().getFullYear()} DomDom. Vse pravice pridržane.
          </p>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xl"
            aria-hidden
          >
            🧹
          </motion.div>
          <p className="text-white/20 font-body text-xs">Made with ❤️ v Sloveniji</p>
        </div>
      </div>
    </footer>
  )
}
