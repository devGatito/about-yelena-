import { motion } from "motion/react";
import { EASE, fadeContainer, fadeItem } from "./motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-shell py-10 md:py-16">
        <div className="grid min-h-[92vh] grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[420px] md:max-w-[520px]">
              <motion.img
                src="/image/bacho/1.jpeg"
                alt="Flor decorativa de la página sobre mí"
                className="fiasco-image mx-auto w-full object-contain"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02, rotate: -1 }}
              />

              <motion.div
                className="absolute -bottom-4 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-secondary-container/40 blur-3xl"
                animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center gap-10 md:gap-14"
          >
            <motion.div variants={fadeItem} className="max-w-[540px]">
              <span className="chip mb-4">Sobre mí</span>

              <p className="max-w-[34ch] text-(--text-body-lg) text-muted">
                Soy Aylin, una persona que valora profundamente a su familia, la
                amistad, el esfuerzo y los sueños que quiere convertir en realidad.
              </p>

              <p className="mt-6 max-w-[34ch] text-(--text-body-lg) text-muted">
                En esta página comparto quién soy, las personas más importantes
                en mi vida, una etapa que marcó mi historia y las metas que me
                inspiran a seguir creciendo.
              </p>
            </motion.div>

            <motion.div variants={fadeItem} className="max-w-[760px]">
              <h1 className="max-w-[12ch] text-left font-display text-[clamp(2.9rem,6vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-foreground">
                Mi historia está hecha de amor, aprendizaje y sueños por cumplir.
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}