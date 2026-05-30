import { motion } from "motion/react";

export default function BachilleresGratitude() {
  return (
    <section className="border-b border-line">
      <div className="container-shell py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="chip">Agradecimiento</span>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.03em] text-foreground md:text-5xl">
              Personas que hicieron esta etapa valiosa
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-line bg-surface p-6 md:p-8"
          >
            <p className="text-base leading-8 text-foreground md:text-lg">
              Aprecio muchísimo a mi grupo de capacitación y también a mi
              profesor Justino, porque gracias a ellos aprendí muchas cosas y
              compartí momentos que nunca voy a olvidar.
            </p>

            <p className="mt-5 text-base leading-8 text-muted md:text-lg">
              Estoy muy agradecida con todas las personas que formaron parte de
              estos años y que hicieron que Bachilleres se sintiera como un
              lugar tan importante para mí.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}