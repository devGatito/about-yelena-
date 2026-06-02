export function ResumenLugar({
  category,
  title,
  summary,
  audioSrc,
}: {
  category: string;
  title: string;
  summary: string;
  audioSrc?: string;
}) {
  return (
    <section className="container-shell py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-muted">
          {category}
        </p>

        <h2 className="mb-6">{title}</h2>

        <div className="editorial-card bg-surface-low p-6 md:p-8">
          <p className="mx-auto max-w-3xl text-body-lg text-foreground/90">
            {summary}
          </p>

          {audioSrc && (
            <div className="mt-6">
              <audio controls className="mx-auto w-full max-w-xl">
                <source src={audioSrc} />
              </audio>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}