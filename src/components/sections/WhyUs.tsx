import { motion } from 'framer-motion'
import { WHY, PROCESS } from '../../constants/content'
import { fadeUp, scaleUp, stagger, vp } from '../../constants/animations'
import { Icon } from '../ui/Icon'

export function WhyUs() {
  return (
    <>
      <section id="zakaj-mi" className="section-pad bg-surface-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
              <span className="tag mb-3 block mx-auto w-fit">Zakaj DomDom</span>
              <h2 className="section-title">
                Vaš prostor v <span className="text-blue-grad">dobrih rokah</span>
              </h2>
              <p className="text-ink-mid font-body mt-4 max-w-lg mx-auto">
                Vsakemu projektu pristopimo z enako skrbnostjo in predanostjo.
              </p>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((item, i) => (
              <motion.div key={item.title} variants={scaleUp} custom={i}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
                className="card p-7 flex gap-4 items-start group">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon as any} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-ink-dark mb-1.5">{item.title}</h3>
                  <p className="font-body text-sm text-ink-mid leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process — light blue background, no dark sections */}
      <section className="section-pad bg-brand-blue-light/40 relative overflow-hidden">
        <div className="soft-grid absolute inset-0 opacity-80" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
              <span className="tag mb-3 block mx-auto w-fit">Kako delamo</span>
              <h2 className="section-title">Preprosto in brez skrbi</h2>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((step, i) => (
              <motion.div key={step.n} variants={fadeUp} initial="hidden" whileInView="show"
                viewport={vp} custom={i} className="relative">
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+10px)] w-[calc(100%-20px)] h-px bg-brand-blue/20 z-0" />
                )}
                <div className="card p-7 relative z-10">
                  <div className="font-display font-black text-5xl text-brand-blue/15 mb-4 leading-none">
                    {step.n}
                  </div>
                  <h3 className="font-display font-bold text-ink-dark text-base mb-2">{step.title}</h3>
                  <p className="font-body text-ink-mid text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
