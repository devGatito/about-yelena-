import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import historiaImage from "/image/bacho/7.jpeg";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay,
      ease: EASE,
    },
  }),
};

export default function HistoriaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-15% 0px -15% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.03]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
   <section
  id="historia"
  ref={sectionRef}
  className="relative flex min-h-screen items-center overflow-hidden bg-background"
>
  <motion.div
    style={{ y: glowY }}
    className="pointer-events-none absolute inset-0 opacity-70"
  >
    <div className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full bg-secondary-container/20 blur-3xl" />
    <div className="absolute right-[14%] top-[26%] h-52 w-52 rounded-full bg-surface-highest blur-3xl" />
    <div className="absolute left-[42%] bottom-[10%] h-56 w-56 rounded-full bg-surface-high blur-3xl" />
  </motion.div>

  <div className="container-shell relative h-full py-8 md:py-10">
    <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-6 lg:min-h-[calc(100vh-5rem)]">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="md:col-span-6 md:col-start-4 lg:col-span-5 lg:col-start-4"
      >
        <motion.span
          custom={0}
          variants={fadeUp}
          className="mb-3 inline-flex text-label-md font-medium uppercase tracking-[0.18em] text-muted"
        >
          Historia
        </motion.span>

        <motion.h2
          custom={0.08}
          variants={fadeUp}
          className="max-w-[15ch] text-foreground leading-[0.95] tracking-[-0.04em]"
        >
          Una etapa que me cambió para siempre
        </motion.h2>

        <motion.p
          custom={0.16}
          variants={fadeUp}
          className="mt-4 max-w-lg text-[15px] leading-8 text-foreground/80 md:text-body-md"
        >
          Bachilleres ha sido, sin duda, una de las mejores etapas de mi vida.
          Aquí no solo aprendí muchísimas cosas académicamente, también crecí
          como persona y conocí a quienes considero mis verdaderos amigos.
        </motion.p>

       

        <motion.p
          custom={0.32}
          variants={fadeUp}
          className="max-w-md text-sm leading-8 text-muted md:ml-14"
        >
          Cada experiencia, cada momento en el salón, las risas, los trabajos
          y hasta los días difíciles hicieron que esta etapa fuera muy especial
          para mí. Aunque me pone triste saber que está por concluir, también
          me deja enseñanzas y recuerdos que siempre voy a guardar con muchísimo
          cariño.
        </motion.p>
      </motion.div>

      <motion.div
        ref={imageRef}
        style={{ y: imageY }}
        initial={{ opacity: 0, x: 40, rotate: 1 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                rotate: 0,
                transition: {
                  duration: 1,
                  delay: 0.22,
                  ease: EASE,
                },
              }
            : {}
        }
        className="absolute right-6 top-6 hidden w-[220px] md:block lg:right-10 lg:top-8 lg:w-[280px]"
      >
        <div className="editorial-card overflow-hidden rounded-md border border-line bg-surface-lowest p-2 shadow-sm">
          <motion.div
            style={{ scale: imageScale }}
            initial={{ clipPath: "inset(10% 0% 10% 0% round 8px)" }}
            animate={
              isInView
                ? {
                    clipPath: "inset(0% 0% 0% 0% round 8px)",
                    transition: {
                      duration: 1.1,
                      delay: 0.3,
                      ease: EASE,
                    },
                  }
                : {}
            }
          >
            <img
              src={historiaImage}
              alt="Recuerdo de la etapa de bachillerato"
              className="fiasco-image aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -36, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 0.95,
                  delay: 0.36,
                  ease: EASE,
                },
              }
            : {}
        }
        className="absolute bottom-4 left-2 hidden w-[170px] md:block lg:bottom-6 lg:left-3 lg:w-[220px]"
      >
        <div className="editorial-card overflow-hidden rounded-md border border-line bg-surface-lowest p-2 shadow-sm">
          <motion.div
            initial={{ clipPath: "inset(0% 12% 0% 12% round 8px)" }}
            animate={
              isInView
                ? {
                    clipPath: "inset(0% 0% 0% 0% round 8px)",
                    transition: {
                      duration: 1,
                      delay: 0.42,
                      ease: EASE,
                    },
                  }
                : {}
            }
          >
            <img
              src={historiaImage}
              alt="Otro recuerdo importante de bachillerato"
              className="fiasco-image aspect-[4/5] w-full object-cover object-left"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
}