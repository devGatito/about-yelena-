import { motion } from "motion/react";

const galleryItems = [
  {
    title: "Recuerdos del salón",
    text: "Aquí puedes poner fotos de clases, actividades o momentos cotidianos.",
  },
  {
    title: "Amistades",
    text: "Ideal para imágenes con amigas, grupo o personas importantes de esta etapa.",
  },
  {
    title: "Momentos especiales",
    text: "Eventos, trabajos, celebraciones o recuerdos que te gustaría conservar.",
  },
];

export default function BachilleresGallery() {
  return (
    <section className="border-b border-line">
      <div className="container-shell py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="chip">Galería</span>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.03em] text-foreground md:text-5xl">
            Una parte visual de esta historia
          </h2>
          <p className="mt-5 text-base leading-8 text-muted md:text-lg">
            Esta sección te sirve para cumplir con las imágenes y videos que te
            pide el proyecto, además de hacer la página más emocional y completa.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[28px] border border-line bg-surface"
            >
              <div className="aspect-[4/5] w-full bg-surface-high" />
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-muted">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}