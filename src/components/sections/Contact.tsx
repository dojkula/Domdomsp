import { motion } from 'framer-motion'
import { useState } from 'react'
import { FAQ, SITE } from '../../constants/content'
import { fadeUp, slideRight, stagger, vp } from '../../constants/animations'

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div variants={fadeUp} custom={i} className="border-b border-ink-line last:border-0">
      <button onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        aria-expanded={open}>
        <span className="font-display font-semibold text-ink-dark text-sm md:text-base group-hover:text-brand-blue transition-colors">
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className="w-7 h-7 rounded-full border-2 border-ink-line flex items-center justify-center flex-shrink-0 text-ink-light font-bold text-lg">
          +
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="font-body text-ink-mid text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </motion.div>
  )
}

export function Contact() {
  return (
    <>
      {/* FAQ + Form */}
      <section className="section-pad bg-surface-soft" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={vp}>
            <span className="tag mb-4 block">Pogosta vprašanja</span>
            <h2 className="section-title mb-8">Odgovori na vaša<br/>vprašanja</h2>
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

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={vp} transition={{ duration: 0.7 }}>
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue-light rounded-full blur-3xl opacity-50 pointer-events-none" />
              <div className="relative">
                <h3 className="font-display font-bold text-ink-dark text-2xl mb-1">Pišite nam</h3>
                <p className="text-ink-light font-body text-sm mb-8">Odgovorimo v 24 urah. Ponudba je brezplačna.</p>

                <form action="https://formsubmit.co/info@domdom.si" method="POST" className="flex flex-col gap-4">
                  <input type="hidden" name="_subject" value="Novo povpraševanje — DomDom"/>
                  <input type="hidden" name="_captcha" value="false"/>

                  {[
                    { name: 'ime', label: 'Ime in priimek', type: 'text', placeholder: 'npr. Janez Novak' },
                    { name: 'kontakt', label: 'Email ali telefon', type: 'text', placeholder: 'email@primer.si ali 041 123 456' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-ink-light mb-1.5">{f.label}</label>
                      <input type={f.type} name={f.name} required placeholder={f.placeholder}
                        className="w-full bg-surface border border-ink-line rounded-xl px-4 py-3 text-ink-dark placeholder-ink-light font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"/>
                    </div>
                  ))}

                  <div>
                    <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-ink-light mb-1.5">Vrsta storitve</label>
                    <select name="storitev"
                      className="w-full bg-surface border border-ink-line rounded-xl px-4 py-3 text-ink-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all appearance-none">
                      <option value="">Izberite storitev…</option>
                      <option value="Čiščenje teras">Čiščenje teras & fasad (Karcher)</option>
                      <option value="Okna">Čiščenje oken</option>
                      <option value="Pisarne">Poslovni prostori (pogodba)</option>
                      <option value="Generalno">Generalno čiščenje</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-display font-bold tracking-widest uppercase text-ink-light mb-1.5">Sporočilo</label>
                    <textarea name="sporocilo" rows={4} placeholder="Opišite vaš projekt…"
                      className="w-full bg-surface border border-ink-line rounded-xl px-4 py-3 text-ink-dark placeholder-ink-light font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"/>
                  </div>

                  <motion.button type="submit"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="btn-primary justify-center py-4 mt-2">
                    Pošlji povpraševanje
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA — soft blue, not dark */}
      <section id="kontakt" className="relative py-28 px-6 bg-gradient-to-br from-brand-blue via-brand-sky to-brand-teal overflow-hidden">
        <div className="soft-grid absolute inset-0 opacity-20" />
        <div className="blob-bg w-[500px] h-[400px] bg-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-6">
            Pripravljeni na<br/>čisto okolje?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/75 font-body text-lg mb-10">
            Stopite v stik z nami. Brezplačna ocena, hiter odgovor, brez obveznosti.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href={`tel:${SITE.phone}`}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-display font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {SITE.phone}
            </motion.a>
            <motion.a href={`mailto:${SITE.email}`}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-display font-bold px-10 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              {SITE.email}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
