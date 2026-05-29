import { motion } from 'framer-motion'
import { useState } from 'react'
import { FAQ, SITE } from '../../constants/content'
import { fadeUp, slideRight, stagger, vp } from '../../constants/animations'

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      className="border-b border-slate-line last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-navy-900 text-sm md:text-base group-hover:text-teal transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="w-7 h-7 rounded-full border-2 border-slate-line flex items-center justify-center flex-shrink-0 text-slate-text"
        >
          +
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="font-body text-slate-text text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </motion.div>
  )
}

export function Contact() {
  return (
    <>
      {/* FAQ */}
      <section className="section-pad bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={vp}>
            <span className="tag mb-4 block">Pogosta vprašanja</span>
            <h2 className="section-title mb-8">Odgovori na vaša vprašanja</h2>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp}>
              {FAQ.map((f, i) => (
                <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <meta itemProp="name" content={f.q} />
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <meta itemProp="text" content={f.a} />
                  </div>
                  <FaqItem q={f.q} a={f.a} i={i} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-navy-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <h3 className="font-display font-bold text-white text-2xl mb-1">Pišite nam</h3>
                <p className="text-white/40 font-body text-sm mb-8">Odgovorimo v 24 urah. Ponudba je brezplačna.</p>

                <form
                  action="https://formsubmit.co/info@domdom.si"
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  <input type="hidden" name="_subject" value="Novo povpraševanje — DomDom" />
                  <input type="hidden" name="_captcha" value="false" />

                  {[
                    { name: 'ime', label: 'Ime in priimek', type: 'text', placeholder: 'npr. Janez Novak' },
                    { name: 'kontakt', label: 'Email ali telefon', type: 'text', placeholder: 'email@primer.si ali 041 123 456' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-white/40 mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        required
                        placeholder={f.placeholder}
                        className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/25 font-body text-sm focus:outline-none focus:border-teal/60 transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-white/40 mb-1.5">Vrsta storitve</label>
                    <select
                      name="storitev"
                      className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-teal/60 transition-colors appearance-none"
                    >
                      <option value="" className="text-navy-900 bg-white">Izberite storitev…</option>
                      <option value="Čiščenje teras & fasad" className="text-navy-900 bg-white">💦 Čiščenje teras & fasad (Karcher)</option>
                      <option value="Čiščenje oken" className="text-navy-900 bg-white">🪟 Čiščenje oken</option>
                      <option value="Poslovni prostori" className="text-navy-900 bg-white">🏢 Poslovni prostori (pogodba)</option>
                      <option value="Generalno čiščenje" className="text-navy-900 bg-white">✨ Generalno čiščenje</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-white/40 mb-1.5">Sporočilo</label>
                    <textarea
                      name="sporocilo"
                      rows={4}
                      placeholder="Opišite vaš projekt…"
                      className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-white placeholder-white/25 font-body text-sm focus:outline-none focus:border-teal/60 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 40px rgba(0,196,204,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary justify-center py-4 mt-2"
                  >
                    Pošlji povpraševanje →
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="kontakt" className="relative py-28 px-6 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-display font-bold tracking-widest uppercase text-teal mb-6"
          >
            Pripravljeni?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-6"
          >
            Pripravljeni na <span className="text-teal-grad">čisto okolje?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 font-body text-lg mb-10"
          >
            Stopite v stik z nami. Brezplačna ocena, hiter odgovor, brez obveznosti.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={`tel:${SITE.phone}`}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(0,196,204,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-base px-10 py-4 justify-center"
            >
              📞 {SITE.phone}
            </motion.a>
            <motion.a
              href={`mailto:${SITE.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost text-base px-10 py-4 justify-center"
            >
              ✉ {SITE.email}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
