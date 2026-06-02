import { motion } from "motion/react";
import familyMembersSchema from "../../../schema-aylin/family-members.json";

type FamilyMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  reflection: string;
};

type FamilyMembersContent = {
  eyebrow: string;
  title: string;
  items: FamilyMember[];
};

const itemStyles = [
  {
    pill: "bg-[#f15bb5] text-white",
    dot: "bg-[#f15bb5]",
    soft: "bg-[#f15bb5]/10",
  },
  {
    pill: "bg-[#6ccf6d] text-[#163317]",
    dot: "bg-[#6ccf6d]",
    soft: "bg-[#6ccf6d]/10",
  },
  {
    pill: "bg-[#ff8fab] text-[#4a1f2d]",
    dot: "bg-[#ff8fab]",
    soft: "bg-[#ff8fab]/10",
  },
  {
    pill: "bg-[#f6bd2b] text-[#4c3900]",
    dot: "bg-[#f6bd2b]",
    soft: "bg-[#f6bd2b]/10",
  },
];

export default function FamilyMembers() {
  const lang = "es";
  const content = familyMembersSchema[lang] as FamilyMembersContent;
  const familyMembers = content.items;

  return (
    <section
      id="integrantes"
      className="overflow-hidden border-b border-line bg-background"
    >
      <div className="container-shell relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="chip">{content.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
            {content.title}
          </h2>
        </motion.div>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-40 hidden h-[calc(100%-8rem)] -translate-x-1/2 md:block"
          viewBox="0 0 860 1800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M430 40
               C 650 120, 650 250, 430 340
               C 210 430, 210 580, 430 670
               C 650 760, 650 920, 430 1010
               C 210 1100, 210 1260, 430 1350
               C 650 1440, 650 1600, 430 1710"
            stroke="#b8b3b1"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative mt-14 space-y-14 md:space-y-20">
          {familyMembers.map((member, index) => {
            const isReversed = index % 2 !== 0;
            const style = itemStyles[index % itemStyles.length];

            return (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10"
              >
                <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
                  <div
                    className={[
                      "mx-auto w-full max-w-[320px]",
                      isReversed ? "md:order-2" : "md:order-1",
                    ].join(" ")}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[28px] ${style.soft} p-3`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="aspect-[9/16] w-full rounded-[22px] object-cover object-center"
                      />
                    </div>
                  </div>

                  <div
                    className={[
                      "mx-auto w-full max-w-[560px]",
                      isReversed ? "md:order-1" : "md:order-2",
                    ].join(" ")}
                  >
                    <div className="relative">
                      <div className="rounded-[28px] border border-line bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
                        <p className="text-sm uppercase tracking-[0.18em] text-muted md:hidden">
                          {member.role}
                        </p>

                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-foreground shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                          {member.name}
                        </h3>

                        <p className="mt-4 leading-relaxed text-muted">
                          {member.description}
                        </p>

                        <p className="mt-4 leading-relaxed text-muted">
                          {member.reflection}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}