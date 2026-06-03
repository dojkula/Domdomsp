import { motion } from 'framer-motion'
import { fadeUp, slideRight, slideLeft, vp } from '../../constants/animations'

export function About() {
  return (
    <section id="o-nas" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Visual */}
        <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={vp}
          className="relative order-2 lg:order-1">
          {/* Main photo frame */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-blue-light via-brand-sky-light to-brand-teal-light shadow-card relative">
            <div className="soft-grid absolute inset-0" />
            {/* Centered placeholder — replace with actual photo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex items-end gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 h-32 rounded-2xl bg-white/60 border border-white/80 shadow-card flex flex-col items-center justify-end pb-3">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 border-2 border-brand-blue/30 mb-2" />
                  <span className="font-display font-bold text-ink-dark text-xs">Martin</span>
                  <span className="font-body text-[10px] text-ink-light">Karcher Expert</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="w-24 h-32 rounded-2xl bg-white/60 border border-white/80 shadow-card flex flex-col items-center justify-end pb-3">
                  <div className="w-12 h-12 rounded-full bg-brand-sky/20 border-2 border-brand-sky/30 mb-2" />
                  <span className="font-display font-bold text-ink-dark text-xs">Dominika</span>
                  <span className="font-body text-[10px] text-ink-light">Window Specialist</span>
                </motion.div>
              </div>
              <p className="text-ink-mid font-body text-xs mt-2 bg-white/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
                Vaša fotografija tukaj
              </p>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute -right-5 top-10 card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-ink-dark text-sm">5+ let izkušenj</p>
              <p className="font-body text-xs text-ink-light">profesionalno čiščenje</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.55 }}
            className="absolute -left-5 bottom-12 card p-4 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div>
              <p className="font-display font-bold text-ink-dark text-sm">200+ strank</p>
              <p className="font-body text-xs text-ink-light">po vsej Sloveniji</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={vp}
          className="order-1 lg:order-2">
          <span className="tag mb-4 block">O nas</span>
          <h2 className="section-title mb-4">
            Družinsko podjetje.<br/>
            <span className="text-blue-grad">Osebni pristop.</span>
          </h2>
          <div className="space-y-4 text-ink-mid font-body leading-relaxed">
            <p>DomDom je začel kot sanja dveh — da bi čiščenje postalo storitev, na katero se stranke res zanesejo. Martin in Dominika sta ekipa, ki dela z srcem in profesionalno opremo.</p>
            <p>Vsak projekt obravnavamo osebno. Ne zgolj storitev — pravi odnos. Ko pride DomDom, je to vidno.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: 'target', label: 'Natančnost' },
              { icon: 'shield', label: 'Zaupanje' },
              { icon: 'tool', label: 'Profesionalnost' },
              { icon: 'leaf', label: 'Predanost' },
            ].map(v => (
              <div key={v.label} className="flex items-center gap-2.5 font-body text-sm text-ink-mid">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-light flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                    {v.icon === 'target' && <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>}
                    {v.icon === 'shield' && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>}
                    {v.icon === 'tool' && <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>}
                    {v.icon === 'leaf' && <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>}
                  </svg>
                </div>
                {v.label}
              </div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-display italic text-ink-dark text-lg mt-8">
            Martin & Dominika
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="mt-6">
            <a href="#kontakt" className="btn-outline">Spoznajte nas</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
