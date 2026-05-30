import { ClipboardList } from "lucide-react";
import { motion } from "motion/react";


const memories = [
  {
    number: "01",
    title: "Momentos en el salón",
    text: "Las clases, las conversaciones y el tiempo compartido dentro del salón hicieron que cada día tuviera algo especial.",
    meta: "Recuerdo de Bachilleres",
  },
  {
    number: "02",
    title: "Risas y trabajos",
    text: "Las risas con mis compañeros, los trabajos en equipo y todo lo que vivimos juntos hicieron esta etapa mucho más valiosa.",
    meta: "Etapa compartida",
  },
  {
    number: "03",
    title: "Días difíciles",
    text: "Incluso los días complicados dejaron enseñanzas. Todo formó parte de una experiencia que me ayudó a madurar.",
    meta: "Aprendizaje personal",
  },
];

export default function BachilleresMemories() {
  return (
    <section id="recuerdos" className="border-b border-line bg-background">
      <div className="container-shell py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="chip">Recuerdos</span>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.03em] text-foreground md:text-5xl">
            Todo lo vivido hizo esta etapa especial
          </h2>
          <p className="mt-5 text-base leading-8 text-muted md:text-lg">
            No fueron solo los buenos momentos; también cada reto, cada trabajo
            y cada día compartido ayudaron a que Bachilleres se convirtiera en
            un recuerdo muy importante para mí.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {memories.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[24px] border border-line bg-surface-lowest shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Parte superior */}
              <div className="h-32 border-b border-line bg-surface-high" />

              {/* Icono sobresaliendo entre ambas secciones */}
              <div className="absolute left-1/2 top-32 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-line bg-background shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                  <ClipboardList
                    size={34}
                    strokeWidth={1.8}
                    className="text-accent"
                  />
                </div>
              </div>

              {/* Parte inferior */}
              <div className="p-6 pt-14">
                <span className="inline-flex rounded-full bg-surface-high px-3 py-1 text-xs text-muted">
                  {item.meta}
                </span>

                <h3 className="mt-5 font-display text-2xl tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-muted">
                  {item.text}
                </p>

                <div className="mt-6 border-t border-line pt-4">
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80">
                    Ver recuerdo
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}