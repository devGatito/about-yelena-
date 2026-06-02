import { motion, useReducedMotion } from "motion/react";
import familyHeroSchema from "../../../schema-aylin/family-hero.json";
import Button from "../../Button";

type FamilyHeroContent = {
  title: string;
  paragraphs: string[];
  actions: {
    primary?: {
      label: string;
      to: string;
    };
  };
};

export default function FamilyHero() {
  const reduceMotion = useReducedMotion();

  const lang = "es";
  const content = familyHeroSchema[lang] as FamilyHeroContent;

  return (
    <section className="border-line bg-background">
      <div className="container-shell py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14 lg:gap-20">
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }
            }
            animate={
              reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[760px]"
          >
            <h1 className="font-display text-[clamp(3rem,8vw,6.25rem)] leading-[0.94] tracking-[-0.05em] text-foreground">
              {content.title}
            </h1>
          </motion.div>

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 24, filter: "blur(8px)" }
            }
            animate={
              reduceMotion ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-end pt-1"
          >
            <div className="max-w-[420px] space-y-6 text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
              {content.paragraphs.map((paragraph, index) => (
                <p key={`family-hero-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>

            {content.actions.primary ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to={content.actions.primary.to} variant="primary">
                  {content.actions.primary.label}
                </Button>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}