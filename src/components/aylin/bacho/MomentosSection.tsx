import { motion, useInView, type Variants, type Easing } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import momento1 from "/image/bacho/1.jpeg";
import momento2 from "/image/bacho/2.jpeg";
import momento3 from "/image/bacho/3.jpeg";

const EASE: Easing = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const moments = [
  {
    image: momento1,
    quote:
      "Un momento que me recordó lo valioso que fue compartir esta etapa con personas tan importantes.",
    name: "Recuerdo I.",
  },
  {
    image: momento2,
    quote:
      "Entre pequeñas salidas, fotografías y risas, se fueron creando recuerdos que hoy significan muchísimo.",
    name: "Recuerdo II.",
  },
  {
    image: momento3,
    quote:
      "Cada instante compartido terminó convirtiéndose en parte de una historia que siempre voy a guardar.",
    name: "Recuerdo III.",
  },
];

export default function MomentosSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-15% 0px -15% 0px",
  });

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
    }, 4200);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="momentos"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-10">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className="md:col-span-4 lg:col-span-3"
          >
            <motion.span
              variants={item}
              className="mb-5 inline-flex text-label-md font-medium uppercase tracking-[0.18em] text-muted"
            >
              Momentos
            </motion.span>

            <motion.h2
              variants={item}
              className="max-w-[8ch] font-display text-foreground"
            >
              Momentos de progreso
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xs text-body-md leading-relaxed text-foreground/75"
            >
              Recuerdos, fotografías y pequeños instantes que terminaron
              convirtiéndose en parte esencial de esta etapa.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-3"
            >
              <button
                onClick={prevSlide}
                aria-label="Momento anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-lowest text-foreground transition-colors duration-200 hover:bg-surface-high"
              >
                <ArrowLeft size={20} strokeWidth={1.8} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Siguiente momento"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-lowest text-foreground transition-colors duration-200 hover:bg-surface-high"
              >
                <ArrowRight size={20} strokeWidth={1.8} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className="md:col-span-8 lg:col-span-9"
          >
            <motion.div
              variants={item}
              className="relative overflow-hidden"
            >
              <motion.div
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.75, ease: EASE }}
                className="flex"
              >
                {moments.map((moment, i) => (
                  <article
                    key={i}
                    className="w-full min-w-full"
                  >
                    <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(320px,420px)_minmax(0,360px)]">
                      <div className="editorial-card overflow-hidden p-0">
                        <img
                          src={moment.image}
                          alt={moment.name}
                          className="fiasco-image h-full w-full aspect-[4/4.8] md:aspect-[4/4.6] object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-[18ch] text-body-lg leading-[1.2] text-foreground md:max-w-[16ch] lg:max-w-[18ch]">
                          {moment.quote}
                        </p>

                        <p className="mt-5 text-headline-sm md:text-2xl font-bold text-foreground">
                          {moment.name}
                        </p>

                        <div className="mt-6 flex gap-2">
                          {moments.map((_, dotIndex) => (
                            <button
                              key={dotIndex}
                              onClick={() => setIndex(dotIndex)}
                              aria-label={`Ir al momento ${dotIndex + 1}`}
                              className={`h-2.5 rounded-full transition-all duration-300 ${
                                dotIndex === index
                                  ? "w-10 bg-foreground"
                                  : "w-2.5 bg-foreground/25"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}