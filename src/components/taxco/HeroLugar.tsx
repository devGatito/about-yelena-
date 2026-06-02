import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPinned, Play } from "lucide-react";
import type { HeroSlide } from "./data";

export function HeroLugar({
  title,
  slides,
}: {
  title: string;
  slides: HeroSlide[];
}) {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[78svh] min-h-[560px] overflow-hidden  bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${current.src}-${index}`}
          initial={{ opacity: 0.45, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.35, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {current.type === "video" ? (
            <div className="relative h-full w-full">
              <video
                src={current.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <Play size={14} />
                Video
              </div>
            </div>
          ) : (
            <img
              src={current.src}
              alt={current.alt || current.title}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />

      <div className="container-shell relative flex h-full flex-col justify-between py-8">
        <div />

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="chip mb-4 inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur"
          >
            <MapPinned size={16} />
            Zona de Monumentos Históricos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-white"
          >
            {title}
          </motion.h1>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="max-w-xl rounded-xl bg-black/30 px-4 py-3 backdrop-blur-md">
            <p className="text-sm font-semibold text-white">{current.title}</p>
            {current.credit && (
              <p className="text-xs text-white/75">{current.credit}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Slide anterior"
              className="btn-ghost border-white/60 text-white hover:bg-white hover:text-black"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              aria-label="Siguiente slide"
              className="btn-ghost border-white/60 text-white hover:bg-white hover:text-black"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}