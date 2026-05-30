import { motion } from "motion/react";

export default function BachilleresIntro() {
  return (
    <section className="border-b border-line">
      <div className="container-shell py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="chip">Introducción</span>

          <h2 className="mt-4 font-display text-3xl tracking-[-0.03em] text-foreground md:text-5xl">
            Una etapa que me ayudó a crecer
          </h2>

          <div className="mt-8 rounded-[28px] border border-line bg-surface p-6 md:p-8">
            <p className="text-base leading-8 text-foreground md:text-lg">
              Bachilleres ha sido, sin duda, una de las mejores etapas de mi
              vida. Aquí no solo aprendí muchísimas cosas académicamente,
              también crecí como persona y conocí a quienes considero mis
              verdaderos amigos.
            </p>

            <p className="mt-5 text-base leading-8 text-muted md:text-lg">
              Cada experiencia fue importante para mí, porque esta etapa no solo
              se trató de estudiar, sino también de compartir, convivir y formar
              recuerdos que marcaron una parte muy especial de mi vida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}