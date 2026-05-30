import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";

export function NotFoundPage() {
  const reduceMotion = useReducedMotion();

  const blobTransition = (duration: number) => ({
    duration,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,248,248,1)_0%,rgba(241,237,236,1)_100%)]" />

      {/* Blobs Motion */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 top-[-6rem] h-[22rem] w-[22rem] rounded-full bg-accent/16 blur-3xl"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={
            reduceMotion
              ? { opacity: 0.45 }
              : { x: [0, 40, -10, 20], y: [0, 20, 60, 10], scale: [1, 1.08, 0.96, 1.04] }
          }
          transition={blobTransition(18)}
        />

        <motion.div
          className="absolute right-[-5rem] top-[10%] h-[18rem] w-[18rem] rounded-full bg-secondary-container/35 blur-3xl"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={
            reduceMotion
              ? { opacity: 0.55 }
              : { x: [0, -35, -60, -20], y: [0, 30, -10, 15], scale: [1, 1.05, 0.94, 1.02] }
          }
          transition={blobTransition(20)}
        />

        <motion.div
          className="absolute bottom-[-7rem] left-[10%] h-[24rem] w-[24rem] rounded-full bg-primary/8 blur-3xl"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={
            reduceMotion
              ? { opacity: 0.35 }
              : { x: [0, 25, -20, 10], y: [0, -30, 20, 0], scale: [1, 1.06, 0.95, 1] }
          }
          transition={blobTransition(22)}
        />

        <motion.div
          className="absolute bottom-[8%] right-[8%] h-[16rem] w-[16rem] rounded-full bg-muted/10 blur-3xl"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={
            reduceMotion
              ? { opacity: 0.3 }
              : { x: [0, -15, 25, 0], y: [0, 25, -20, 0], scale: [1, 1.03, 0.98, 1] }
          }
          transition={blobTransition(16)}
        />
      </div>

      {/* Grid / noise sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] ]" />

      {/* Contenido */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className=" w-full max-w-2xl p-8 text-center   sm:p-10"
        >
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4 text-label-md font-medium uppercase tracking-[0.32em] text-muted"
          >
            Error
          </motion.p>

          <motion.h1
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-[5rem] font-bold leading-none tracking-[-0.08em] text-foreground sm:text-[7rem] md:text-[8rem]"
          >
            404
          </motion.h1>

          <motion.h2
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-3 text-foreground"
          >
            Página no encontrada
          </motion.h2>

          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mx-auto mt-4 max-w-md text-body-md text-muted"
          >
            Lo sentimos, no pudimos encontrar la ruta que estás buscando.
          </motion.p>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mt-8 flex items-center justify-center"
          >
            <Link to="/" className="btn-primary">
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}