import { motion } from "motion/react";

export default function MiCarreraHero() {
  return (
    <section className="relative overflow-hidden bg-background text-black">
      <div className="container-shell grid items-center gap-8 py-12 md:py-16 lg:min-h-[78vh] lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-[560px]"
        >
          <h1 className="max-w-[10ch] text-black text-[var(--text-body-lg)]">
            Mi futuro.
            <br />
            <span className="text-black">Mi camino.</span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-[var(--text-body-lg)] text-black/85">
            Aquí comparto lo que estudio, lo que he aprendido y las metas que
            quiero alcanzar en mi formación profesional.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#aprendizaje" className="btn-accent">
              Ver más
            </a>

            <a
              href="#metas"
              className="btn-ghost border-black/20 text-black hover:border-black hover:bg-black hover:text-white"
            >
              Mis metas
            </a>
          </div>
        </motion.div>

        <div className="relative flex items-end justify-center gap-4 lg:-mt-4">
          <motion.div
            initial={{ opacity: 0, x: -24, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="w-[44%] rounded-[28px] bg-accent p-5 shadow-[0_24px_60px_rgba(0,0,0,.14)] md:p-6 lg:w-[42%]"
          >
            <p className="text-sm font-medium text-white/80">Aprendizaje</p>

            <h3 className="mt-3 text-white">
              Lo que aprendo hoy forma mi futuro.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            whileHover={{ y: -6 }}
            className="w-[52%] rounded-[28px] bg-secondary-container p-5 text-secondary-container-foreground shadow-[0_24px_60px_rgba(0,0,0,.14)] md:p-6 lg:w-[50%]"
          >
            <p className="text-sm font-medium text-black/70">Metas</p>

            <h3 className="mt-3 max-w-[9ch] text-black">
              Cada paso me acerca a mis objetivos.
            </h3>

            <div className="mt-5 rounded-[20px] bg-white p-4 text-foreground shadow-[0_10px_30px_rgba(0,0,0,.08)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-base font-bold">
                  A
                </div>

                <div>
                  <p className="font-bold">Aylin</p>
                  <p className="text-sm text-muted">Estudiante en formación</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-muted">
                Estoy preparándome para crecer, aprender más y convertir mis
                estudios en oportunidades reales.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}