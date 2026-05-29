import { motion } from 'framer-motion'
import { SITE, FAQ } from '../../constants/content'
import { SectionHeading } from '../ui/SectionHeading'
import { stagger, fadeUp, slideRight } from '../../constants/animations'
import { useState } from 'react'

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.1}
      className="border border-brand-accent/60 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-display font-semibold text-brand-dark text-sm hover:bg-brand-accent/20 transition-colors"
        aria-expanded={open}
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-brand-violet text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-slate-500 font-body text-sm leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  )
}

export function Contact() {
  return (
    <>
      {/* FAQ section */}
      <section className="section-pad bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <SectionHeading
              supra="Pogosta vprašanja"
              title="Pogosto vprašate"
              subtitle="Odgovori na najpogostejša vprašanja o naših storitvah."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-col gap-3"
            >
              {FAQ.map((f, i) => (
                <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <meta itemProp="name" content={f.q} />
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <meta itemProp="text" content={f.a} />
                  </div>
                  <FaqItem q={f.q} a={f.a} index={i} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-gradient-to-br from-brand-violet to-brand-blue rounded-3xl p-8 shadow-violet-glow text-white">
              <h3 className="font-display font-bold text-2xl mb-2">Pišite nam</h3>
              <p className="text-indigo-200 font-body text-sm mb-8">Odgovorimo v 24 urah. Ponudba je brezplačna.</p>

              <form
                action="https://formsubmit.co/info@domdom.si"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_subject" value="Nova povpraševanje — DomDom" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href + '?poslano=1' : ''} />

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-display font-semibold tracking-wider uppercase text-indigo-200">Ime in priimek</label>
                  <input
                    type="text"
                    name="ime"
                    required
                    placeholder="npr. Janez Novak"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-300 font-body text-sm focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-display font-semibold tracking-wider uppercase text-indigo-200">Email ali telefon</label>
                  <input
                    type="text"
                    name="kontakt"
                    required
                    placeholder="email@primer.si ali 041 123 456"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-300 font-body text-sm focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-display font-semibold tracking-wider uppercase text-indigo-200">Vrsta storitve</label>
                  <select
                    name="storitev"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-white/60 transition-colors appearance-none"
                  >
                    <option value="" className="text-brand-dark">Izberite storitev…</option>
                    <option value="Čiščenje teras & fasad" className="text-brand-dark">Čiščenje teras & fasad (Karcher)</option>
                    <option value="Čiščenje oken" className="text-brand-dark">Čiščenje oken</option>
                    <option value="Poslovni prostori" className="text-brand-dark">Poslovni prostori (pogodba)</option>
                    <option value="Generalno čiščenje" className="text-brand-dark">Generalno čiščenje</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-display font-semibold tracking-wider uppercase text-indigo-200">Sporočilo</label>
                  <textarea
                    name="sporocilo"
                    rows={4}
                    placeholder="Opišite vaš projekt ali vprašanje…"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-300 font-body text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white text-brand-violet font-display font-bold py-3.5 rounded-xl mt-2 hover:bg-brand-light transition-colors shadow-lg"
                >
                  Pošlji povpraševanje →
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA band */}
      <section id="kontakt" className="relative py-20 px-6 bg-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 to-brand-blue/5" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl text-brand-dark mb-4"
          >
            Pripravljeni na <span className="text-gradient">čisto okolje?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 text-lg font-body mb-10"
          >
            Stopite v stik z nami in poskrbeli bomo za vse.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={`tel:${SITE.phone}`} className="btn-primary text-lg px-10 py-4 justify-center">
              Pokličite zdaj: {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-secondary text-lg px-10 py-4 justify-center">
              {SITE.email}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
