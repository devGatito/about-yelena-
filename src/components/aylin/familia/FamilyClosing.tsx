import { motion } from "motion/react";

export default function FamilyClosing() {
  return (
    <section className="container-shell py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] border border-line bg-surface p-8 md:p-10"
      >
        <span className="chip">Cierre</span>

        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl">
          En general, considero que tengo una familia muy importante para mí
        </h2>

        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          Aunque cada quien tenga sus responsabilidades y estén en diferentes
          lugares, siempre me han demostrado su apoyo y su cariño. Por eso,
          hablar de mi familia también es hablar de una parte esencial de mi
          historia.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/aylin" className="btn-primary">
            Volver al inicio
          </a>
         
        </div>
      </motion.div>
    </section>
  );
}