import { motion } from "motion/react";
import familyIntroSchema from "../../../schema-aylin/family-intro.json";

type FamilyIntroContent = {
  eyebrow: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
};

export default function FamilyIntro() {
  const lang = "es";
  const content = familyIntroSchema[lang] as FamilyIntroContent;

  return (
    <section className="border-b border-line">
      <div className="container-shell grid items-center justify-items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-[540px] flex-col items-start text-start"
        >
          <span className="chip">{content.eyebrow}</span>

          <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            {content.title}
          </h2>

          <img
            src={content.image.src}
            alt={content.image.alt}
            className="mt-5 w-full rounded-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[620px] space-y-5 text-start text-base leading-relaxed text-muted"
        >
          {content.paragraphs.map((paragraph, index) => (
            <p key={`family-intro-paragraph-${index}`}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}