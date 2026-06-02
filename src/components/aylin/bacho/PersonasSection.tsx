import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "motion/react";
import { useRef } from "react";

import personaMain from "/image/bacho/1.jpeg";
import personaDetail from "/image/bacho/2.jpeg";

function RevealText({
  progress,
  range,
  children,
  className,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [40, 0]);

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PersonasSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  // Images
  const imageMainY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 0]
  );

  const imageMainOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  const imageDetailY = useTransform(
    scrollYProgress,
    [0.1, 1],
    [160, 0]
  );

  const imageDetailOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    [0, 1]
  );

  // Title
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    [0.2, 1]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    [30, 0]
  );

  return (
    <section
      id="personas"
      ref={sectionRef}
      className="relative bg-background py-28 overflow-hidden"
    >
      <div className="container-shell">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          {/* IMAGES */}
          <div className="relative md:col-span-5">
            <motion.div
              style={{
                y: imageMainY,
                opacity: imageMainOpacity,
              }}
              className="w-[78%] overflow-hidden rounded-md"
            >
              <img
                src={personaMain}
                alt="Persona importante en mi etapa de bachillerato"
                className="fiasco-image aspect-[4/5] w-full object-cover"
              />
            </motion.div>

            <motion.div
              style={{
                y: imageDetailY,
                opacity: imageDetailOpacity,
              }}
              className="relative -mt-4 ml-[48%] w-[34%] overflow-hidden rounded-md"
            >
              <img
                src={personaDetail}
                alt="Detalle de un recuerdo especial"
                className="fiasco-image aspect-[4/5] w-full object-cover"
              />
            </motion.div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="md:sticky md:top-32">
              <motion.span
                style={{
                  opacity: titleOpacity,
                  y: titleY,
                }}
                className="mb-5 inline-flex text-label-md font-medium uppercase tracking-[0.18em] text-muted"
              >
                Personas
              </motion.span>

              <motion.h2
                style={{
                  opacity: titleOpacity,
                  y: titleY,
                }}
                className="max-w-[12ch] font-display text-foreground"
              >
                Personas que hicieron esta etapa inolvidable
              </motion.h2>

              <RevealText
                progress={scrollYProgress}
                range={[0.18, 0.38]}
                className="mt-6"
              >
                <p className="max-w-md text-base font-medium leading-[1.1] text-foreground md:text-lg">
                  Algunas personas no solo forman parte de una etapa, sino que
                  la convierten en algo imposible de olvidar.
                </p>
              </RevealText>

              <RevealText
                progress={scrollYProgress}
                range={[0.35, 0.58]}
                className="mt-6"
              >
                <p className="max-w-md text-sm leading-7 text-foreground md:text-base">
                  Entre clases, risas, trabajos y momentos inesperados, fui
                  encontrando amistades y personas que marcaron profundamente mi
                  vida dentro de bachilleres.
                </p>
              </RevealText>

              <RevealText
                progress={scrollYProgress}
                range={[0.55, 0.82]}
                className="mt-6"
              >
                <p className="max-w-md text-sm leading-7 text-foreground md:text-base">
                  Más allá de lo académico, fueron sus palabras, su compañía y
                  cada recuerdo compartido lo que terminó haciendo esta etapa
                  tan especial para mí.
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </div>

      {/* Glow editorial suave */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}