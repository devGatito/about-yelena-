type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={[
        "space-y-3",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="text-label-md font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-headline-sm md:text-headline-md text-foreground">
        {title}
      </h2>

      {description ? (
        <p className="max-w-[60ch] text-body-md leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}