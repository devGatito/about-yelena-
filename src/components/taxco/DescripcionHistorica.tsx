export function DescripcionHistorica({
  title = "Descripción histórica",
  paragraphs,
}: {
  title?: string;
  paragraphs: string[];
}) {
  return (
    <section className="bg-surface-low py-16">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <div>
            <div className="sticky top-24">
              <span className="chip mb-4">Historia</span>
              <h3>{title}</h3>
            </div>
          </div>

          <div className="editorial-card bg-white p-6 md:p-10">
            <div className="prose prose-neutral max-w-none">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}