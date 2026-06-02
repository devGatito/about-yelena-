import mainTopicsSchema from "../schema-aylin/main-topics.json";

type TopicCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
  eyebrow?: string;
  cta?: string;
  size?: "large" | "small";
  className?: string;
};

type TopicItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  eyebrow?: string;
  cta?: string;
  size?: "large" | "small";
};

type MainTopicsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: TopicItem[];
};

function TopicCard({
  title,
  description,
  image,
  href = "#",
  eyebrow,
  cta = "Ver más",
  size = "small",
  className = "",
}: TopicCardProps) {
  const isLarge = size === "large";

  return (
    <a
      href={href}
      className={[
        "group editorial-card relative flex overflow-hidden bg-surface-lowest transition-transform duration-300 hover:-translate-y-1",
        isLarge
          ? "min-h-[420px] md:min-h-[560px]"
          : "min-h-[250px] md:min-h-[270px]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

      <div
        className={[
          "relative z-10 flex h-full w-full flex-col justify-end",
          isLarge ? "p-6 md:p-8" : "p-5 md:p-6",
        ].join(" ")}
      >
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/72">
            {eyebrow}
          </p>
        ) : null}

        <h3
          className={[
            "font-display text-white",
            isLarge
              ? "text-3xl leading-[1.02] md:text-5xl"
              : "text-2xl leading-[1.05] md:text-3xl",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "mt-3 max-w-[34ch] text-white/82",
            isLarge ? "text-sm md:text-base" : "text-sm",
          ].join(" ")}
        >
          {description}
        </p>

        <div className="mt-5">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
            {cta}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function MainTopicsSection() {
  const lang = "es";
  const content = mainTopicsSchema[lang] as MainTopicsContent;

  const largeCard = content.items.find((item) => item.size === "large");
  const smallCards = content.items.filter((item) => item.size === "small");

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>

          <h2 className="font-display text-[var(--text-headline-sm)] text-foreground md:text-[var(--text-headline-md)]">
            {content.title}
          </h2>

          <p className="mt-4 max-w-[60ch] text-body-md leading-relaxed text-muted">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.45fr_0.85fr] lg:gap-6">
          {largeCard ? <TopicCard key={largeCard.id} {...largeCard} /> : null}

          <div className="grid grid-cols-1 gap-5 lg:grid-rows-2 lg:gap-6">
            {smallCards.map((item) => (
              <TopicCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}