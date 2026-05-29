import { motion } from 'framer-motion'
import { SERVICES } from '../../constants/content'
import { fadeUp, scaleUp, stagger, vp } from '../../constants/animations'

function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  return (
    <motion.article
      variants={scaleUp}
      custom={i}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
      className={`relative card shine overflow-hidden flex flex-col p-8 ${
        s.featured
          ? 'bg-navy-900 text-white ring-2 ring-teal/60'
          : 'bg-white'
      }`}
    >
      {/* Featured badge */}
      {s.featured && (
        <div className="absolute top-5 right-5">
          <span className="bg-teal text-navy-900 font-display font-black text-[10px] px-3 py-1 rounded-full tracking-widest uppercase">
            Prioriteta ⭐
          </span>
        </div>
      )}

      {/* Emoji icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: -5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${
          s.featured ? 'bg-teal/15' : 'bg-off'
        }`}
      >
        {s.emoji}
      </motion.div>

      {/* Badge */}
      <span className={`text-[10px] font-display font-bold tracking-widest uppercase mb-2 ${
        s.featured ? 'text-teal' : 'text-teal'
      }`}>
        {s.badge}
      </span>

      {/* Title */}
      <h3 className={`font-display font-bold text-xl mb-3 leading-snug ${s.featured ? 'text-white' : 'text-navy-900'}`}>
        {s.title}
      </h3>

      {/* Desc */}
      <p className={`font-body text-sm leading-relaxed mb-6 ${s.featured ? 'text-white/60' : 'text-slate-text'}`}>
        {s.desc}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mt-auto">
        {s.features.map(f => (
          <li key={f} className="flex items-center gap-2.5 font-body text-sm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <circle cx="8" cy="8" r="8" fill={s.featured ? 'rgba(0,196,204,0.2)' : 'rgba(0,196,204,0.15)'} />
              <path d="M5 8l2 2 4-4" stroke="#00c4cc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={s.featured ? 'text-white/75' : 'text-slate-text'}>{f}</span>
          </li>
        ))}
      </ul>

      {/* Bottom bar */}
      <div className={`mt-8 pt-6 border-t ${s.featured ? 'border-white/10' : 'border-slate-line'}`}>
        <a
          href="#kontakt"
          className={`inline-flex items-center gap-2 font-display font-semibold text-sm transition-colors ${
            s.featured ? 'text-teal hover:text-teal/80' : 'text-navy-900 hover:text-teal'
          }`}
        >
          Zahtevajte ponudbo
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.article>
  )
}

export function Services() {
  return (
    <section id="storitve" className="section-pad bg-off">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <span className="tag mb-3 block">Vse na enem mestu</span>
            <h2 className="section-title">
              Naše storitve
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            custom={1}
            className="text-slate-text font-body max-w-sm leading-relaxed"
          >
            Od rednih pisarniških servisov do zahtevnih generalnih čiščenj — mi poskrbimo za vse.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
