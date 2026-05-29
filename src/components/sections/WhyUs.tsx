import { motion } from 'framer-motion'
import { WHY, PROCESS } from '../../constants/content'
import { fadeUp, scaleUp, stagger, vp } from '../../constants/animations'

export function WhyUs() {
  return (
    <>
      {/* Why section */}
      <section id="zakaj-mi" className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
              <span className="tag mb-3 block">Zakaj DomDom</span>
              <h2 className="section-title">Vaš prostor v <span className="text-teal-grad">dobrih rokah</span></h2>
              <p className="text-slate-text font-body mt-4 max-w-xl mx-auto">
                Vsakemu projektu pristopimo z enako skrbnostjo — ne glede na velikost ali zahtevnost.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {WHY.map((item, i) => (
              <motion.div
                key={item.title}
                variants={scaleUp}
                custom={i}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
                className="card p-7 flex gap-4 items-start group"
              >
                <div className="w-11 h-11 rounded-xl bg-off flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-navy-900 mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-slate-text leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process section */}
      <section className="section-pad bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
              <span className="inline-block text-[10px] font-display font-bold tracking-widest uppercase text-teal mb-3">Kako delamo</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                Preprosto in brez skrbi
              </h2>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                custom={i}
                className="relative"
              >
                {/* Connector line */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%+10px)] w-[calc(100%-20px)] h-px bg-teal/20 z-0" />
                )}
                <div className="glass-dark rounded-2xl p-7 relative z-10">
                  <div className="font-display font-black text-4xl text-teal/20 mb-4 leading-none">{step.n}</div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
