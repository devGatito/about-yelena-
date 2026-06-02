import { motion } from "motion/react";
import { familyCards } from "./data";
import { EASE } from "./motion";

export function FamilySection() {
  return (
    <section id="familia" className="bg-surface-low py-16 md:py-24">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 flex flex-col items-center text-center md:mb-10"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">
            Las personas más importantes
          </p>

          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.06em] text-foreground">
            Mi familia
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mx-auto grid max-w-[1100px] grid-cols-2 overflow-hidden md:grid-cols-4"
        >
          {familyCards.slice(0, 4).map((card, index) => (
            <motion.article
              key={card.name}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    ease: EASE,
                    delay: index * 0.02,
                  },
                },
              }}
              className="group relative aspect-[3/4] overflow-hidden bg-surface-base"
            >
              <motion.img
                src={card.image}
                alt={card.name}
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.45, ease: EASE }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className="inline-block bg-surface-lowest px-3 py-2">
                  <h3 className="text-sm leading-none text-foreground md:text-base">
                    {card.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted md:text-xs">
                    {card.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}