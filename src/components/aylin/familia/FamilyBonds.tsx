import { motion } from "motion/react";
import familyBondsSchema from "../../../schema-aylin/family-bonds.json";

type FamilyBondItem = {
  id: string;
  title: string;
  description: string;
};

type FamilyBondsContent = {
  eyebrow: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  items: FamilyBondItem[];
};

export default function FamilyBonds() {
  const lang = "es";
  const content = familyBondsSchema[lang] as FamilyBondsContent;

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
            <span className="chip">{content.eyebrow}</span>

            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              {content.title}
            </h2>

            <div className="mt-5">
              <img
                src={content.image.src}
                alt={content.image.alt}
                className="h-64 w-64 object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-5 md:col-span-2">
            {content.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index === 0 ? 0.05 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-6"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}