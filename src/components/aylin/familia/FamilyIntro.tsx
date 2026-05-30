import { motion } from "motion/react";

export default function FamilyIntro() {
  return (
    <section className="border-b border-line">
      <div className="container-shell grid items-center justify-items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-[540px] flex-col items-start text-start"
        >
          <span className="chip">Introducción</span>

          <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Una parte esencial de su vida
          </h2>

          <img
            src="/image/family.png"
            alt="Introducción"
            className="mt-5 w-full rounded-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[620px] space-y-5 text-start text-base leading-relaxed text-muted"
        >
          <p>
            Mi familia es una de las partes más importantes de mi vida y
            sinceramente les tengo muchísimo cariño. Siempre han estado para mí,
            apoyándome y acompañándome en diferentes momentos, por eso son
            personas que amo demasiado y valoro mucho.
          </p>

          <p>
            Aunque cada quien tenga sus responsabilidades y estén en distintos
            lugares, siguen siendo personas fundamentales para mí. Su presencia,
            su esfuerzo y su cariño forman una parte muy importante de quién
            soy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}