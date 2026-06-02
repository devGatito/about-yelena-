import { motion } from "motion/react";

export default function AcademicFormationSection() {
  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: smoothEase },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="formacion"
      className="bg-surface py-14 md:py-20"
      aria-labelledby="academic-heading"
    >
      <div className="container-shell">
        <motion.div {...fadeUp} className="mb-10 text-center md:mb-14">
          <h2 id="academic-heading" className="mx-auto max-w-4xl">
            Formación académica, aprendizajes y bases que sostienen mi trabajo actual
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[170px]">
          <motion.article
            {...fadeUp}
            className="feature-card flex items-center justify-center rounded-lg px-6 py-8 text-center md:col-span-3 md:row-span-1"
          >
            <p className="font-display text-2xl font-bold md:text-3xl">Escuela</p>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="editorial-card overflow-hidden md:col-span-6 md:row-span-1"
          >
            <div className="flex h-full items-end bg-surface-high p-6 md:p-8">
              <div className="max-w-xl">
               
               
               
                <p className="text-muted">
                  Formación con enfoque en desarrollo, lógica, estructuras, análisis de
                  requerimientos y construcción de soluciones aplicables a negocios y sistemas digitales.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex items-center justify-center rounded-lg bg-accent px-6 py-8 text-center text-white md:col-span-3 md:row-span-1"
          >
            <p className="font-display text-2xl font-bold md:text-3xl">Logros</p>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="editorial-card flex items-end rounded-lg bg-surface-low p-6 md:col-span-3 md:row-span-2 md:p-8"
          >
            <div>
              <span className="chip mb-4">Base técnica</span>
              <h3 className="mb-3 max-w-[12ch]">Conocimiento sólido en desarrollo</h3>
              <p className="text-muted">
                Programación, modelado de datos, diseño de interfaces, arquitectura de software y pensamiento estructurado.
              </p>
            </div>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.14 }}
            className="flex items-end rounded-lg bg-[#5b56d6] p-6 text-white md:col-span-3 md:row-span-1"
          >
            <div>
              <span className="mb-4 inline-flex rounded-full bg-white/12 px-3 py-1 text-sm text-white/90">
                Aprendizaje
              </span>
              <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
                Crecimiento constante
              </p>
            </div>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="flex flex-col justify-center rounded-lg bg-secondary-container px-6 py-8 text-secondary-container-foreground md:col-span-3 md:row-span-1 md:px-8"
          >
            
            <ul className="space-y-2 text-sm leading-6 md:text-[15px]">
              <li>Desarrollo de software.</li>
              <li>Bases de datos.</li>
              <li>Diseño de interfaces.</li>
              <li>Trabajo por proyectos.</li>
            </ul>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.18 }}
            className="editorial-card overflow-hidden md:col-span-3 md:row-span-1"
          >
            <div className="flex h-full flex-col justify-end bg-surface-base p-6">
              <div>
                <span className="chip mb-4">Resultado</span>
                
                <p className="text-muted">
                  Esa etapa me dio criterio técnico para construir apps, paneles y sistemas útiles.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex items-end rounded-lg bg-primary p-6 text-primary-foreground md:col-span-6 md:row-span-1 md:p-8"
          >
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white">
                Enfoque actual
              </span>
              <h3 className="mb-3 max-w-[18ch] text-white">
               
              </h3>
              <p className="text-white/80">
                Mi aprendizaje académico me dio fundamentos para pasar de la teoría a soluciones funcionales y reales.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}