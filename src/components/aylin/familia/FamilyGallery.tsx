import { motion } from "motion/react";
import { familyGallery } from "./family.data";

export default function FamilyGallery() {
  return (
    <section id="recuerdos" className="border-b border-line">
      <div className="container-shell py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="chip">Recuerdos</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Galería previa de momentos familiares
            </h2>
          </div>

          <a href="/aylin/galeria" className="btn-ghost">
            Ir a galería
          </a>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {familyGallery.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-3xl border border-line bg-surface p-4"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface-high">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-foreground shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 font-medium text-foreground">{item.alt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}