import { motion, useReducedMotion } from "motion/react";

export default function FamilyHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="  border-line bg-background">
      <div className="container-shell py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[760px]"
          >
           

            <h1 className="font-display text-[clamp(3rem,8vw,6.25rem)] leading-[0.94] tracking-[-0.05em] text-foreground">
              Mi familia es una parte fundamental de mi vida.
            </h1>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24, filter: "blur(8px)" }}
            animate={reduceMotion ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-end pt-1"
          >
            <div className="max-w-[420px] space-y-6 text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
              <p>
                Mi familia siempre ha estado presente en los momentos más
                importantes de mi vida. Su apoyo, cariño y compañía me han dado
                fuerza para seguir adelante.
              </p>

              <p>
                Cada integrante ocupa un lugar especial para mí. A través del
                tiempo, las experiencias, los consejos y los recuerdos han hecho
                que nuestro vínculo sea algo que valoro profundamente.
              </p>

              <p>
                Más que cercanía, representan amor, confianza y una base que me
                acompaña incluso en la distancia.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#integrantes" className="btn-primary">
                Ver integrantes
              </a>

              <a href="#recuerdos" className="btn-ghost">
                Ver recuerdos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}