import { motion } from 'framer-motion'

interface Props {
  supra?: string
  title: string
  accent?: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeading({ supra, title, accent, subtitle, center, light }: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
      {supra && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`text-sm font-display font-semibold tracking-widest uppercase mb-3 ${light ? 'text-brand-accent' : 'text-brand-violet'}`}
        >
          {supra}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display font-bold text-4xl md:text-5xl leading-tight mb-4 ${light ? 'text-white' : 'text-brand-dark'}`}
      >
        {title}
        {accent && <span className="text-gradient block">{accent}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-indigo-200' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: center ? '60px' : '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 rounded-full bg-gradient-to-r from-brand-violet to-brand-blue mt-5 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
