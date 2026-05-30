import { motion } from "motion/react";

export default function FamilyBonds() {
  return (
    <section className="border-b border-line">
      <div className="container-shell py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1"
          >
            <span className="chip">Vínculos</span>

            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Su apoyo deja huella
            </h2>

            <div className="mt-5">
              <img
                src="/image/health.png"
                alt="Imagen representativa de los vínculos familiares"
                className="h-64 w-64 object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-5 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="p-6"
            >
              <h1 className="font-display text-2xl">Distancia y esfuerzo</h1>
              <p className="mt-3 leading-relaxed text-muted">
                Mi papá Ray y mi hermano Ulises actualmente trabajan en Estados
                Unidos. Aunque estén lejos, siguen siendo muy importantes para mí
                y admiro profundamente el esfuerzo que hacen todos los días por
                salir adelante y apoyar a la familia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-6"
            >
              <h3 className="font-display text-2xl">Compañía y cariño</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Mi mamá Mayra y mi abuelita Silvia forman una parte muy cercana
                de mi día a día. Con ellas comparto apoyo, escucha, amor y
                compañía, y por eso ocupan un lugar muy especial en mi vida.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}