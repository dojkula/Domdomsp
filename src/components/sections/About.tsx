import { motion } from 'framer-motion'
import { ABOUT } from '../../constants/content'
import { SectionHeading } from '../ui/SectionHeading'
import { slideRight, slideLeft } from '../../constants/animations'

export function About() {
  return (
    <section id="o-nas" className="section-pad bg-brand-light">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          <SectionHeading
            supra={ABOUT.supra}
            title={ABOUT.headline}
            subtitle={ABOUT.sub}
          />
          <div className="mt-8 space-y-4">
            {ABOUT.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-500 font-body leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-display italic text-brand-violet text-lg mt-6"
          >
            {ABOUT.sign}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <a href="#kontakt" className="btn-primary">
              Naša zgodba
            </a>
          </motion.div>
        </motion.div>

        {/* Visual card */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.15}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-violet to-brand-blue p-1 shadow-violet-glow">
            <div className="bg-white rounded-[22px] p-10 text-center">
              {/* Illustrated family icon */}
              <div className="flex items-end justify-center gap-3 mb-6">
                {/* Martin silhouette card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-gradient-to-b from-brand-violet to-brand-blue rounded-2xl p-5 shadow-violet-sm"
                >
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 rounded-full bg-amber-200" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-brand-violet rounded-t-full" />
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-300" />
                    {/* curly hair dots */}
                    {[-3,-1,1,3].map(x => (
                      <div key={x} className="absolute top-[-2px] rounded-full bg-amber-900 w-3 h-3" style={{left:`calc(50% + ${x * 4}px)`}} />
                    ))}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-3 rounded-full bg-amber-800 opacity-60" />
                  </div>
                  <p className="text-white font-display font-bold text-sm mt-3">Martin</p>
                  <p className="text-indigo-200 text-[10px] font-body">Karcher Expert</p>
                </motion.div>

                {/* Heart */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl mb-4"
                >
                  ♥
                </motion.div>

                {/* Dominika silhouette card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="bg-gradient-to-b from-brand-blue to-brand-violet rounded-2xl p-5 shadow-violet-sm"
                >
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 rounded-full bg-amber-100" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-brand-blue rounded-t-full" />
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-200" />
                    {/* auburn hair */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 rounded-full bg-red-800 opacity-80" />
                    {/* glasses */}
                    <div className="absolute top-4 left-2 w-5 h-4 rounded-full border-2 border-gray-400 bg-transparent opacity-70" />
                    <div className="absolute top-4 right-2 w-5 h-4 rounded-full border-2 border-gray-400 bg-transparent opacity-70" />
                  </div>
                  <p className="text-white font-display font-bold text-sm mt-3">Dominika</p>
                  <p className="text-indigo-200 text-[10px] font-body">Window Specialist</p>
                </motion.div>
              </div>

              <h3 className="font-display font-bold text-xl text-brand-dark mb-2">Družinsko podjetje</h3>
              <p className="text-slate-500 text-sm font-body">Osebni pristop pri vsakem projektu</p>

              {/* Values chips */}
              <div className="flex flex-wrap gap-2 justify-center mt-5">
                {['Zanesljivi', 'Profesionalni', 'Prijazni', 'Natančni'].map(v => (
                  <span key={v} className="bg-brand-accent/50 text-brand-violet text-xs font-display font-semibold px-3 py-1 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-violet/10 rounded-2xl rotate-12 blur-sm" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-blue/10 rounded-xl -rotate-12 blur-sm" />
        </motion.div>
      </div>
    </section>
  )
}
