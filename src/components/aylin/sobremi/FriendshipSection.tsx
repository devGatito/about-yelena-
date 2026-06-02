import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { EASE } from "./motion";

export function FriendshipSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="overflow-hidden rounded-(--radius-xl) bg-primary text-primary-foreground"
        >
          <div className="grid items-stretch gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
              className="relative min-h-[360px] bg-[color:var(--color-primary-container)]"
            >
              <motion.div
                initial={{ opacity: 0, x: 22, y: -18, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.14, ease: EASE }}
                className="absolute left-[10%] top-[10%] w-[52%]"
              >
                <div className="fiasco-image overflow-hidden rounded-(--radius-lg) border border-white/10 bg-surface-lowest shadow-[0_16px_36px_rgba(0,0,0,.16)]">
                  <img
                    src="/image/bacho/3.jpeg"
                    alt="Recuerdo especial de amistad"
                    className="h-[220px] w-full object-cover md:h-[260px]"
                    draggable={false}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
                className="absolute bottom-[8%] right-[8%] z-10 w-[58%]"
              >
                <div className="fiasco-image overflow-hidden rounded-(--radius-lg) border border-white/10 bg-surface-lowest shadow-[0_18px_40px_rgba(0,0,0,.18)]">
                  <img
                    src="/image/bacho/7.jpeg"
                    alt="Amistad importante en bachillerato"
                    className="h-[240px] w-full object-cover md:h-[290px]"
                    draggable={false}
                  />
                </div>
              </motion.div>
            </motion.div>

            <div className="px-6 py-10 md:px-10 md:py-14">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm"
              >
                <Sparkles size={16} strokeWidth={2.2} />
                <span>Una amistad especial</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                className="mt-5 max-w-[11ch] text-white"
              >
                Yelena siempre tendrá un lugar muy importante en mi vida.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
                className="mt-6 max-w-[60ch] text-(--text-body-lg) text-white/80"
              >
                Desde la secundaria ha sido mi mejor amiga y definitivamente es una
                de las personas más especiales que Bachilleres me pudo dejar. Ha
                estado conmigo en muchísimos momentos y su amistad es algo que
                valoro demasiado.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: 0.24, ease: EASE }}
                className="mt-8 rounded-(--radius-lg) bg-secondary-container/95 p-5 text-secondary-container-foreground"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/8">
                    <Heart size={18} strokeWidth={2.2} />
                  </span>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em]">
                      Un vínculo muy valioso
                    </p>
                    <p className="mt-2 text-(--text-body-md) leading-relaxed">
                      Su amistad me ha acompañado en etapas muy importantes y es
                      uno de los recuerdos más bonitos que me llevo conmigo.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mt-8 h-px w-full bg-white/15"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
                className="mt-8 max-w-[45ch] text-sm uppercase tracking-[0.14em] text-white/65"
              >
                Esta página reúne a las personas, recuerdos y sueños que más han
                marcado quién soy.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}