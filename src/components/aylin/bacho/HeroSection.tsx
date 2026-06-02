import { motion } from "motion/react";

const sectionContent = {
  
  intro:
    "Aquí aprendí mucho más que materias. Fue una etapa donde crecí, hice amistades importantes y viví momentos que todavía significan mucho para mí.",
  title:
    "Una etapa que me formó, me cambió y me dejó recuerdos para siempre.",
  secondaryText:
    "No solo fue un lugar de estudio; también fue un espacio donde descubrí quién era, qué quería y con quién quería compartir ese camino.",
  primaryAction: {
    label: "Ver historia",
    href: "#historia",
  },
};

export default function BachoEditorialSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-shell py-5 ">
        <div className="grid min-h-[80vh] items-center gap-14 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-[18rem] w-[18rem] rounded-full bg-accent/8 blur-3xl md:h-[28rem] md:w-[28rem]" />

            <motion.div
              initial={{ opacity: 0, rotate: -4, y: 24 }}
              animate={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 w-[240px] sm:w-[300px] md:w-[380px]"
            >
              <div className="fiasco-image overflow-hidden border border-line bg-surface-lowest shadow-[0_20px_50px_rgba(0,0,0,.08)]">
                <img
                  src="/image/bacho/1.jpeg"
                  alt="Recuerdo de bachillerato"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-center text-left">
          
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-md text-body-md text-muted md:text-body-lg"
            >
              {sectionContent.intro}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 max-w-[11ch] text-balance"
            >
              {sectionContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-lg text-body-md text-muted md:text-body-lg"
            >
              {sectionContent.secondaryText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8"
            >
              <a href={sectionContent.primaryAction.href} className="btn-primary">
                {sectionContent.primaryAction.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}