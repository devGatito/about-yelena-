import { useState } from "react";
import type { LugarCard } from "./data";
import { AnimatePresence, motion } from "motion/react";

export function GridLugares({
  title = "Lugares destacados",
  items,
}: {
  title?: string;
  items: LugarCard[];
}) {
  const [active, setActive] = useState<LugarCard | null>(null);

  return (
    <section className="container-shell py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="chip mb-3">Explora</span>
          <h3>{title}</h3>
        </div>
        <p className="max-w-md text-sm text-muted">
          Una selección de sitios y puntos de interés para reutilizar en tu página.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="editorial-card overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface-base">
              <img
                src={item.image}
                alt={item.title}
                className="fiasco-image h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            <div className="space-y-4 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                {item.category}
              </p>

              <h4 className="text-xl">{item.title}</h4>

              {item.excerpt && (
                <p className="text-sm text-muted">{item.excerpt}</p>
              )}

              <button className="btn-primary w-full" onClick={() => setActive(item)}>
                Abrir
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence mode="wait">
  {active && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/55 px-4 py-6 backdrop-blur-md md:px-6 md:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={() => setActive(null)}
    >
      <div className="grid min-h-full place-items-center">
        <motion.div
          layout
          role="dialog"
          aria-modal="true"
          aria-labelledby="lugar-modal-title"
          className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-surface-lowest shadow-[0_30px_90px_rgba(0,0,0,.28)]"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.98 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Cerrar modal"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-black/55"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-[1.08fr_.92fr]">
            <div className="relative min-h-[280px] md:min-h-[620px]">
              <img
                src={active.gallery?.[0] || active.image}
                alt={active.title}
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                  {active.category}
                </p>
                <h3
                  id="lugar-modal-title"
                  className="max-w-[14ch] text-2xl font-semibold leading-tight text-white md:text-4xl"
                >
                  {active.title}
                </h3>
              </div>
            </div>

            <div className="flex min-h-full flex-col bg-[color:var(--color-surface)] p-5 md:p-8">
              <div className="mb-5">
                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                  Lugar destacado
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-muted md:text-[15px]">
                  {active.excerpt ||
                    "Contenido listo para conectar con descripción, galería o mapa."}
                </p>

                {active.gallery && active.gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {active.gallery.slice(0, 3).map((img, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-2xl bg-surface-base"
                      >
                        <img
                          src={img}
                          alt={`${active.title} ${index + 1}`}
                          className="aspect-[4/3] h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    className="btn-primary flex-1"
                    onClick={() => setActive(null)}
                  >
                    Entendido
                  </button>

                  <button
                    className="btn-ghost flex-1"
                    onClick={() => setActive(null)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}