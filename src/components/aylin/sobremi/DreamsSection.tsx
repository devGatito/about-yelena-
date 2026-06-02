import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { dreams } from "./data";
import { EASE } from "./motion";

export function DreamsSection() {
  const [open, setOpen] = useState(false);
  const [currentDream, setCurrentDream] = useState(0);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleOpen = () => {
    setCurrentDream(0);
    setOpen(true);
  };

  const handleNextDream = () => {
    if (currentDream < dreams.length - 1) {
      setCurrentDream((prev) => prev + 1);
    } else {
      setOpen(false);
    }
  };

  const dream = dreams[currentDream];
  const imageSrc = currentDream === 0 ? "/image/bacho/6.jpeg" : "/image/bacho/7.jpeg";

  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="container-shell">
          <div className="grid items-stretch gap-0 md:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex min-h-[620px] flex-col justify-center bg-background pr-0 md:pr-8"
            >
              <div className="max-w-xl pt-2">
                <span className="chip mb-4">Mi futuro</span>

                <h2 className="max-w-[10ch]">
                  Las carreras que inspiran mi camino.
                </h2>

                <p className="mt-5 max-w-[56ch] text-(--text-body-md) text-muted md:text-(--text-body-lg)">
                  Desde hace mucho tiempo he pensado en lo que quiero para mi
                  futuro, y hay dos caminos profesionales que realmente llaman mi
                  atención y que me ilusiona imaginar.
                </p>
              </div>

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                onClick={handleOpen}
                className="mt-10 flex w-full max-w-[350px] items-center justify-between rounded-default bg-primary px-5 py-4 text-sm font-bold text-primary-foreground transition-colors duration-200 hover:bg-accent"
              >
                <span>Conocer mis sueños</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: EASE }}
              className="relative min-h-[620px] bg-[color:var(--color-primary-container)]"
            >
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                className="absolute left-[7%] top-[4%] w-[56%]"
              >
                <div className="fiasco-image overflow-hidden bg-surface-lowest shadow-[0_12px_30px_rgba(0,0,0,.14)]">
                  <img
                    src="/image/bacho/6.jpeg"
                    alt="Espacio que representa mis metas"
                    className="h-[280px] w-full object-cover md:h-[340px]"
                    draggable={false}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
                className="absolute bottom-[5%] right-[4%] z-10 w-[68%]"
              >
                <div className="fiasco-image overflow-hidden bg-surface-lowest shadow-[0_18px_40px_rgba(0,0,0,.18)]">
                  <img
                    src="/image/bacho/7.jpeg"
                    alt="Visualización de mi futuro profesional"
                    className="h-[300px] w-full object-cover md:h-[370px]"
                    draggable={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.38, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <AnimatePresence mode="wait">
                <motion.article
                  key={dream.title}
                  initial={{ opacity: 0, x: 40, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden rounded-(--radius-xl) border border-line bg-surface-lowest shadow-[0_22px_60px_rgba(0,0,0,.16)]"
                >
                  <div className="relative bg-linear-to-br from-surface-high via-surface-low to-surface-base px-4 pb-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/88 text-foreground shadow-sm transition-colors duration-200 hover:bg-accent hover:text-white"
                      aria-label="Cerrar modal"
                    >
                      <X size={16} strokeWidth={2.3} />
                    </button>

                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/12 text-accent">
                        <Sparkles size={16} strokeWidth={2.2} />
                      </span>
                      <p className="text-sm font-bold text-foreground">
                        Mi sueño {currentDream + 1}
                      </p>
                    </div>

                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="fiasco-image overflow-hidden rounded-(--radius-lg) border border-white/60 bg-white shadow-[0_12px_24px_rgba(0,0,0,.10)]"
                    >
                      <img
                        src={imageSrc}
                        alt={dream.title}
                        className="h-[180px] w-full object-cover"
                        draggable={false}
                      />
                    </motion.div>
                  </div>

                  <div className="px-4 pb-4 pt-3">
                    <h3 className="text-[1.15rem] leading-tight">
                      {dream.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {dream.text}
                    </p>

                    <motion.button
                      type="button"
                      whileHover={{ y: -1, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNextDream}
                      className="mt-4 inline-flex w-full items-center justify-center rounded-default bg-accent px-4 py-3 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
                    >
                      {currentDream < dreams.length - 1 ? "Siguiente" : "Finalizar"}
                    </motion.button>
                  </div>
                </motion.article>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}