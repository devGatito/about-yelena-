import { motion, useInView, type Variants, type Easing } from "motion/react";
import { useRef } from "react";

import galeria1 from "/image/bacho/1.jpeg";
import galeria2 from "/image/bacho/2.jpeg";
import galeria3 from "/image/bacho/3.jpeg";
import galeria4 from "/image/bacho/3.jpeg";
import galeria5 from "/image/bacho/2.jpeg";
import galeria6 from "/image/bacho/1.jpeg";
import galeria7 from "/image/bacho/1.jpeg";
import galeria8 from "/image/bacho/1.jpeg";
import galeria9 from "/image/bacho/1.jpeg";
import galeria10 from "/image/bacho/1.jpeg";

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
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },
};

const galleryItems = [
  { image: galeria1, alt: "Recuerdo 1", size: "tall" },
  { image: galeria2, alt: "Recuerdo 2", size: "square" },
  { image: galeria3, alt: "Recuerdo 3", size: "vertical" },
  { image: galeria4, alt: "Recuerdo 4", size: "wide" },
  { image: galeria5, alt: "Recuerdo 5", size: "square" },
  { image: galeria6, alt: "Recuerdo 6", size: "tall" },
  { image: galeria7, alt: "Recuerdo 7", size: "vertical" },
  { image: galeria8, alt: "Recuerdo 8", size: "wide" },
  { image: galeria9, alt: "Recuerdo 9", size: "square" },
  { image: galeria10, alt: "Recuerdo 10", size: "tall" },
];

const sizeClasses: Record<string, string> = {
  square: "aspect-square",
  vertical: "aspect-[4/5]",
  tall: "aspect-[4/6]",
  wide: "aspect-[4/3]",
};

export default function GaleriaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-10">
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
              Galería
            </motion.span>

            <motion.h2
              variants={item}
              className="max-w-[7ch] font-display text-foreground"
            >
              Instantes que quedan
              <sup className="ml-1 align-top text-base md:text-lg">05</sup>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xs text-body-md leading-relaxed text-foreground/75"
            >
              Una colección de fotos, detalles y recuerdos que guardan la
              esencia de esta etapa.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container}
            className="md:col-span-8 lg:col-span-9"
          >
            <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
              {galleryItems.map((photo, index) => (
                <motion.article
                  key={index}
                  variants={item}
                  className="mb-4 break-inside-avoid"
                >
                  <div className="group editorial-card overflow-hidden rounded-[24px] p-0">
                    <div className="relative overflow-hidden rounded-[24px] bg-surface-high">
                      <img
                        src={photo.image}
                        alt={photo.alt}
                        className={`fiasco-image w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${sizeClasses[photo.size]}`}
                        loading="lazy"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}