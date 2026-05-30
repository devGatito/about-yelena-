import { motion } from "motion/react";

export default function BachilleresHero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-x-hidden border-b border-line">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="/image/background_bachi.jpeg"
          alt="Fondo de Bachilleres"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_38%,rgba(7,10,20,0.16)_72%,rgba(7,10,20,0.30)_100%)]" />
      </div>

      {/* Contenido pegado abajo */}
      <div className="container-shell relative z-20 grid min-h-screen w-full items-end">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl pb-10 md:p-2"
        >
          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            Mi estancia en Bachilleres
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
            Una etapa que me dejó aprendizajes, amistades verdaderas y recuerdos
            que siempre voy a guardar con muchísimo cariño.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#recuerdos"
              className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Ver recuerdos
            </a>

            <a
              href="#amistad"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Amistad especial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}