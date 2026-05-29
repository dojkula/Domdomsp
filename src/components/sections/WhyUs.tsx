import { motion } from 'framer-motion'
import { WHY_US } from '../../constants/content'
import { SectionHeading } from '../ui/SectionHeading'
import { stagger, scaleIn } from '../../constants/animations'

function TrustBadge({ item, index }: { item: typeof WHY_US[0]; index: number }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index * 0.08}
      className="bg-white rounded-2xl p-6 shadow-card flex gap-4 items-start group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-violet to-brand-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-violet-sm">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h3 className="font-display font-bold text-base text-brand-dark mb-1">{item.title}</h3>
        <p className="text-sm text-slate-500 font-body leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export function WhyUs() {
  return (
    <section id="zakaj-mi" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <SectionHeading
            supra="Zakaj DomDom"
            title="Vaš prostor"
            accent="v dobrih rokah"
            subtitle="Vsakemu projektu pristopimo z enako skrbnostjo in predanostjo — ne glede na velikost."
            center
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {WHY_US.map((item, i) => (
            <TrustBadge key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
