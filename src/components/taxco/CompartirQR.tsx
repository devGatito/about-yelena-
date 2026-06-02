type ShareData = {
  url: string;
  title: string;
  qrImage?: string;
};

export function CompartirQR({ data }: { data: ShareData }) {
  return (
    <section className="bg-surface-low py-16">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="editorial-card bg-white p-6 md:p-8">
            <span className="chip mb-4">Compartir</span>
            <h3 className="mb-3">Difunde este lugar</h3>
            <p className="mb-6 text-muted">
              Comparte la página o deja visible el código QR para acceso rápido.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(data.title + " " + data.url)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                WhatsApp
              </a>
              <button
                className="btn-primary"
                onClick={() => navigator.clipboard.writeText(data.url)}
              >
                Copiar enlace
              </button>
            </div>
          </div>

          <div className="editorial-card flex flex-col items-center justify-center bg-white p-6 md:p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-muted">
              Código QR
            </p>

            {data.qrImage ? (
              <img
                src={data.qrImage}
                alt={`QR de ${data.title}`}
                className="mb-4 h-52 w-52 rounded-lg border border-line object-contain"
              />
            ) : (
              <div className="mb-4 grid h-52 w-52 place-items-center rounded-lg border border-dashed border-line bg-surface-low text-sm text-muted">
                QR aquí
              </div>
            )}

            <p className="text-center text-sm text-muted">{data.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}