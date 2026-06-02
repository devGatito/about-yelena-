import { motion } from "motion/react";

export default function SkillsSection() {
  const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
    viewport: { once: true, amount: 0.2 },
  };

  const technicalSkills = [
    "Android Studio",
    "Java y Kotlin",
    "XML / Material Design 3",
    "Vite + React",
    "Tailwind CSS",
    "Bases de datos",
  ];

  const personalSkills = [
    "Comunicación",
    "Liderazgo",
    "Resolución de problemas",
    "Aprendizaje autónomo",
    "Organización",
    "Trabajo con clientes",
  ];

  return (
    <section
      id="habilidades"
      className="bg-surface-low py-16 md:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="container-shell">
        <div className="overflow-hidden rounded-[28px] border border-line bg-surface-lowest">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              {...reveal}
              className="flex min-h-[420px] flex-col justify-center px-6 py-10 md:px-10 md:py-14 lg:px-14"
            >
              <span className="chip mb-4 w-fit">Habilidades</span>

              <h2
                id="skills-heading"
                className="max-w-xl text-[clamp(2.3rem,4.6vw,4.6rem)] leading-[0.94]"
              >
                Técnica, criterio y habilidades personales para construir
                soluciones reales
              </h2>

              <p className="mt-5 max-w-md text-muted">
                Combino desarrollo, diseño de interfaz y comunicación efectiva
                para llevar ideas a productos funcionales, claros y enfocados en
                negocio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="btn-primary">Software y desarrollo</span>
                <span className="btn-ghost">Comunicación y criterio</span>
              </div>
            </motion.div>

            <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
              <motion.article
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.05 }}
                className="group relative min-h-[320px] overflow-hidden md:min-h-[420px]"
              >
                <img
                  src="/image/three.png"
                  alt="Visual relacionado con desarrollo y habilidades técnicas"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 flex h-full flex-col justify-end px-6 py-8 text-white md:px-7">
                  <span className="chip mb-4 w-fit bg-white/10 text-white">
                    Técnicas
                  </span>

                  <h3 className="mb-4 text-white">Desarrollo y producto</h3>

                  <ul className="space-y-2">
                    {technicalSkills.map((skill) => (
                      <li
                        key={skill}
                        className="border-b border-white/15 pb-2 text-sm font-medium text-white/90"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>

              <motion.article
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 }}
                className="group relative min-h-[320px] overflow-hidden md:min-h-[420px]"
              >
                <img
                  src="/image/aylin.png"
                  alt="Imagen personal para representar habilidades humanas y enfoque personal"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,91,62,.88),rgba(255,91,62,.45),rgba(0,0,0,.18))]" />

                <div className="relative z-10 flex h-full flex-col justify-end px-6 py-8 text-white md:px-7">
                  <span className="chip mb-4 w-fit bg-white/15 text-white">
                    Personales
                  </span>

                  <h3 className="mb-4 text-white">Comunicación y enfoque</h3>

                  <ul className="space-y-2">
                    {personalSkills.map((skill) => (
                      <li
                        key={skill}
                        className="border-b border-white/20 pb-2 text-sm font-medium text-white/95"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}