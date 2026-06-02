import { motion } from "motion/react";
import { schoolMoments } from "./data";
import { EASE, fadeContainer, fadeItem } from "./motion";

export function BachilleresSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
              className="max-w-[11ch]"
            >
              Una etapa que siempre voy a recordar.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96, rotate: -2, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="mt-8 w-full max-w-md"
            >
              <div className="fiasco-image overflow-hidden rounded-(--radius-xl) border border-line bg-surface-lowest shadow-[0_18px_40px_rgba(0,0,0,.08)]">
                <img
                  src="/image/bacho/1.jpeg"
                  alt="Recuerdo de bachillerato"
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeItem}
              className="max-w-[65ch] text-(--text-body-lg) text-muted"
            >
              Bachilleres ha sido, sin duda, una de las mejores etapas de mi
              vida. Aquí no solo aprendí muchísimas cosas académicamente,
              también crecí como persona y conocí a quienes considero mis
              verdaderos amigos.
            </motion.p>

            <motion.div
              variants={fadeItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="feature-card rounded-(--radius-xl) p-6 md:p-8"
            >
              <ul className="grid gap-4">
                {schoolMoments.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: EASE,
                    }}
                    className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <p className="text-(--text-body-md) leading-relaxed">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              variants={fadeItem}
              className="max-w-[65ch] text-(--text-body-lg) text-muted"
            >
              Aunque me pone triste saber que esta etapa ya está por concluir,
              también me deja muchísimas enseñanzas y recuerdos que siempre voy
              a guardar con cariño. Estoy muy agradecida con todas las personas
              que formaron parte de estos años.
            </motion.p>

            <motion.p
              variants={fadeItem}
              className="max-w-[65ch] text-(--text-body-lg) text-muted"
            >
              Aprecio muchísimo a mi grupo de capacitación y también a mi
              profesor Justino, porque gracias a ellos aprendí muchas cosas y
              compartí momentos que nunca voy a olvidar.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}