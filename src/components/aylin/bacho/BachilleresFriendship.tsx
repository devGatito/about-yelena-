import { motion } from "motion/react";

export default function BachilleresFriendship() {
  return (
    <section id="amistad" className="border-b border-line">
      <div className="container-shell py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl rounded-[32px] border border-line bg-surface p-6 md:p-10"
        >
          <span className="chip">Amistad especial</span>

          <h2 className="mt-5 font-display text-3xl tracking-[-0.03em] text-foreground md:text-5xl">
            El recuerdo más especial que me dejó esta etapa
          </h2>

          <p className="mt-6 text-base leading-8 text-foreground md:text-lg">
            Y, en especial, voy a agradecer siempre a Yelena, porque desde la
            secundaria ha sido mi mejor amiga y definitivamente es la persona
            más especial que Bachilleres me pudo dejar.
          </p>

          <p className="mt-5 text-base leading-8 text-muted md:text-lg">
            Ha estado conmigo en muchísimos momentos y su amistad es algo que
            valoro demasiado. Sé que siempre recordaré esta etapa con cariño,
            pero también con gratitud por haber compartido tantos momentos con
            una persona tan importante para mí.
          </p>
        </motion.div>
      </div>
    </section>
  );
}