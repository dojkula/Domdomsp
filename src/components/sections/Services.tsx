import { motion } from 'framer-motion'
import { SERVICES } from '../../constants/content'
import { SectionHeading } from '../ui/SectionHeading'
import { stagger, fadeUp, cardHover } from '../../constants/animations'

const ICONS: Record<string, JSX.Element> = {
  pressure: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="#ede9fe" />
      <path d="M14 24 L22 14 L28 20 L22 26 Z" fill="#7c3aed" opacity="0.3"/>
      <rect x="26" y="20" width="10" height="5" rx="2" fill="#7c3aed"/>
      <path d="M36 22.5 L44 18" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="44" cy="17.5" r="2" fill="#2563eb"/>
      {/* water droplets */}
      <circle cx="18" cy="34" r="2.5" fill="#7c3aed" opacity="0.7"/>
      <circle cx="24" cy="38" r="1.8" fill="#a78bfa" opacity="0.6"/>
      <circle cx="14" cy="38" r="1.5" fill="#7c3aed" opacity="0.5"/>
    </svg>
  ),
  window: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="#ede9fe" />
      <rect x="10" y="10" width="28" height="28" rx="3" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2"/>
      <line x1="24" y1="10" x2="24" y2="38" stroke="#7c3aed" strokeWidth="1.5"/>
      <line x1="10" y1="24" x2="38" y2="24" stroke="#7c3aed" strokeWidth="1.5"/>
      <path d="M30 14 Q34 16 36 20" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
  office: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="#ede9fe" />
      <rect x="11" y="14" width="26" height="22" rx="2" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="2"/>
      <rect x="15" y="18" width="6" height="5" rx="1" fill="#7c3aed"/>
      <rect x="23" y="18" width="6" height="5" rx="1" fill="#7c3aed" opacity="0.7"/>
      <rect x="31" y="18" width="4" height="5" rx="1" fill="#7c3aed" opacity="0.5"/>
      <rect x="15" y="26" width="6" height="5" rx="1" fill="#a78bfa"/>
      <rect x="23" y="26" width="6" height="5" rx="1" fill="#7c3aed" opacity="0.5"/>
      <rect x="11" y="36" width="26" height="2" rx="1" fill="#7c3aed"/>
    </svg>
  ),
  deep: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="#ede9fe" />
      <path d="M16 28 Q24 14 32 28" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2"/>
      <rect x="14" y="28" width="20" height="8" rx="2" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="2"/>
      <path d="M20 24 L20 32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 22 L24 32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 24 L28 32" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  return (
    <motion.article
      custom={index * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover="hover"
      animate="rest"
      variants={{ ...cardHover, hidden: fadeUp.hidden, visible: (d: number) => ({ ...fadeUp.visible(d), ...cardHover.rest }) }}
      className={`relative bg-white rounded-3xl p-7 shadow-card flex flex-col gap-4 overflow-hidden group cursor-default ${
        service.featured ? 'ring-2 ring-brand-violet' : ''
      }`}
    >
      {/* Featured ribbon */}
      {service.featured && (
        <div className="absolute top-5 right-5">
          <span className="bg-brand-violet text-white text-[10px] font-display font-bold px-3 py-1 rounded-full tracking-wide uppercase">
            ⭐ Prioriteta
          </span>
        </div>
      )}

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: -4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="w-fit"
      >
        {ICONS[service.icon]}
      </motion.div>

      <div>
        <p className="text-xs font-display font-semibold text-brand-violet tracking-wider uppercase mb-1">
          {service.sub}
        </p>
        <h3 className="font-display font-bold text-xl text-brand-dark">{service.title}</h3>
      </div>

      <p className="text-slate-500 font-body text-sm leading-relaxed">{service.desc}</p>

      <ul className="flex flex-col gap-2 mt-auto">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-600 font-body">
            <span className="w-4 h-4 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0">
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/0 to-brand-violet/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
    </motion.article>
  )
}

export function Services() {
  return (
    <section id="storitve" className="section-pad bg-surface-soft">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionHeading
            supra="Vse na enem mestu"
            title="Naše storitve"
            subtitle="Profesionalno čiščenje za podjetja in domove. Od rednih servisov do zahtevnih generalnih čiščenj — mi poskrbimo za vse."
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#kontakt" className="btn-primary inline-flex">
            Zahtevajte brezplačno ponudbo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
