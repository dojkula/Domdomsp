import { motion } from 'framer-motion'
import { fadeUp, slideRight, slideLeft, vp } from '../../constants/animations'

export function About() {
  return (
    <section id="o-nas" className="section-pad bg-off">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Visual side */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="relative order-2 lg:order-1"
        >
          {/* Photo frame placeholder */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy-900 shadow-card-hover">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Centered emoji characters — placeholder until real photo */}
            <div className="absolute inset-0 flex items-center justify-center gap-6">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-teal/20 border-2 border-teal/40 flex items-center justify-center text-5xl mb-3">
                  👨
                </div>
                <span className="text-white/70 font-display font-semibold text-sm">Martin</span>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl mb-8"
              >
                ❤️
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-teal/20 border-2 border-teal/40 flex items-center justify-center text-5xl mb-3">
                  👩
                </div>
                <span className="text-white/70 font-display font-semibold text-sm">Dominika</span>
              </motion.div>
            </div>

            {/* DomDom label */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-dark rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-display font-bold text-sm">Martin & Dominika</p>
                  <p className="text-white/40 font-body text-xs">Ustanovitelja DomDom</p>
                </div>
                <div className="text-2xl">🧹</div>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -right-4 top-8 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center text-navy-900 font-display font-black text-lg">
              5+
            </div>
            <div>
              <p className="font-display font-bold text-navy-900 text-sm">Let izkušenj</p>
              <p className="font-body text-xs text-slate-light">profesionalnega čiščenja</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="absolute -left-4 bottom-12 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3"
          >
            <div className="text-2xl">⭐</div>
            <div>
              <p className="font-display font-bold text-navy-900 text-sm">200+ strank</p>
              <p className="font-body text-xs text-slate-light">zadovoljnih po vsej Sloveniji</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="order-1 lg:order-2"
        >
          <span className="tag mb-4 block">O nas</span>
          <h2 className="section-title mb-4">
            Družinsko podjetje.<br />
            <span className="text-teal-grad">Osebni pristop.</span>
          </h2>

          <div className="space-y-4 text-slate-text font-body leading-relaxed">
            <p>
              DomDom je začel kot sanja dveh — da bi čiščenje postalo storitev, na katero se stranke res zanesejo. Martin in Dominika sta ekipa, ki dela z srcem in profesionalno opremo.
            </p>
            <p>
              Vsak projekt obravnavamo osebno. Ne zgolj storitev — pravi odnos. Ko pride DomDom, je to vidno.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: '🎯', label: 'Natančnost' },
              { icon: '🤝', label: 'Zaupanje' },
              { icon: '⚡', label: 'Hitrost' },
              { icon: '💚', label: 'Predanost' },
            ].map(v => (
              <div key={v.label} className="flex items-center gap-2 font-body text-sm text-slate-text">
                <span className="text-lg">{v.icon}</span>
                {v.label}
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-display italic text-navy-900 text-lg mt-8"
          >
            Martin & Dominika ❤️
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="mt-8">
            <a href="#kontakt" className="btn-outline">
              Spoznajte nas →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
