import { motion } from 'framer-motion'
import { SERVICES } from '../../constants/content'
import { ServiceIcon } from '../ui/Icon'
import { fadeUp, scaleUp, stagger, vp } from '../../constants/animations'

function Card({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  return (
    <motion.article
      variants={scaleUp}
      custom={i}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
      className={`shine card flex flex-col p-8 ${
        s.featured
          ? 'bg-gradient-to-br from-brand-blue to-brand-teal text-white ring-0'
          : 'bg-white'
      }`}
    >
      {s.featured && (
        <span className="self-start bg-white/20 text-white font-display font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-4">
          Prednostna storitev
        </span>
      )}

      <motion.div
        whileHover={{ scale: 1.1, rotate: -4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="mb-6"
      >
        {s.featured
          ? <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <ServiceIcon name={s.icon} />
            </div>
          : <ServiceIcon name={s.icon} />
        }
      </motion.div>

      <p className={`text-[10px] font-display font-bold tracking-widest uppercase mb-2 ${s.featured ? 'text-white/70' : 'text-brand-blue'}`}>
        {s.badge}
      </p>
      <h3 className={`font-display font-bold text-xl mb-3 leading-snug ${s.featured ? 'text-white' : 'text-ink-dark'}`}>
        {s.title}
      </h3>
      <p className={`font-body text-sm leading-relaxed mb-6 ${s.featured ? 'text-white/75' : 'text-ink-mid'}`}>
        {s.desc}
      </p>

      <ul className="flex flex-col gap-2.5 mt-auto">
        {s.features.map(f => (
          <li key={f} className="flex items-center gap-2.5 font-body text-sm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <circle cx="8" cy="8" r="7" fill={s.featured ? 'rgba(255,255,255,0.2)' : '#dbeafe'}/>
              <path d="M5 8l2 2 4-4" stroke={s.featured ? '#fff' : '#2563eb'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={s.featured ? 'text-white/80' : 'text-ink-mid'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className={`mt-8 pt-6 border-t ${s.featured ? 'border-white/20' : 'border-ink-line'}`}>
        <a href="#kontakt"
          className={`inline-flex items-center gap-2 font-display font-semibold text-sm transition-colors ${
            s.featured ? 'text-white/90 hover:text-white' : 'text-brand-blue hover:text-brand-teal'
          }`}
        >
          Zahtevajte ponudbo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </motion.article>
  )
}

export function Services() {
  return (
    <section id="storitve" className="section-pad bg-surface-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
            <span className="tag mb-3 block">Vse na enem mestu</span>
            <h2 className="section-title">Naše storitve</h2>
          </motion.div>
          <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={vp}
            className="text-ink-mid font-body max-w-xs leading-relaxed">
            Od rednih pisarniških servisov do zahtevnih generalnih čiščenj — mi poskrbimo za vse.
          </motion.p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => <Card key={s.id} s={s} i={i} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="text-center mt-12">
          <a href="#kontakt" className="btn-outline">
            Zahtevajte brezplačno ponudbo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
