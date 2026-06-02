import { useMemo, useState } from "react";
import { Images, ListFilter, X } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const galleryItems = [
  { id: 1, title: "Aylin", category: "Retratos", image: "/image/aylin.png" },
  { id: 2, title: "Family", category: "Familia", image: "/image/family.png" },
  { id: 3, title: "Health", category: "Salud", image: "/image/health.png" },
  { id: 4, title: "Mayra", category: "Retratos", image: "/image/mayra.jpeg" },
  { id: 5, title: "Ray", category: "Retratos", image: "/image/ray.jpeg" },
  { id: 6, title: "Silvia", category: "Retratos", image: "/image/silvia.jpeg" },
  { id: 7, title: "Ulises", category: "Retratos", image: "/image/ulises.jpg" },
  { id: 8, title: "Yelena", category: "Retratos", image: "/image/yelena.png" },
  { id: 9, title: "Three", category: "Editorial", image: "/image/three.png" },
  { id: 10, title: "Hero", category: "Editorial", image: "/image/hero.png" },
  { id: 11, title: "Background Bachi", category: "Bacho", image: "/image/background_bachi.png" },
  { id: 12, title: "Background Bachi 2", category: "Bacho", image: "/image/background_bachi.jpeg" },
];

const categories = ["Todas", "Retratos", "Familia", "Salud", "Editorial", "Bacho"];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [showFilters, setShowFilters] = useState(true);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Todas") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <div className="container-shell py-6 md:py-8">
          <section className="rounded-xl bg-surface-base px-6 py-10 md:px-12 md:py-16">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1.5 text-sm text-muted">
                <Images size={16} />
                Galería visual
              </div>

              <h1 className="mb-4">Galería</h1>

              <p className="max-w-xl text-muted">
                Explora la colección organizada por categorías visuales.
                Puedes filtrar por retratos, familia, salud, editorial o material de bacho.
              </p>
            </div>
          </section>

          <nav className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="text-foreground">Home</span>
            <span>›</span>
            <span>Galería</span>
          </nav>

          <section className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="chip inline-flex w-fit items-center gap-2"
            >
              <ListFilter size={16} />
              {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-foreground">
                {filteredItems.length} imagen{filteredItems.length !== 1 ? "es" : ""}
              </span>

              {activeCategory !== "Todas" && (
                <button
                  onClick={() => setActiveCategory("Todas")}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm"
                >
                  <X size={14} />
                  Limpiar filtro
                </button>
              )}
            </div>
          </section>

          <section
            className={`mt-8 grid grid-cols-1 gap-8 ${
              showFilters ? "lg:grid-cols-[260px_minmax(0,1fr)]" : "lg:grid-cols-1"
            }`}
          >
            {showFilters && (
              <aside className="space-y-8">
                <div>
                  <h3 className="mb-4 font-sans text-base font-bold">Categorías</h3>

                  <ul className="space-y-3 text-sm">
                    {categories.map((category) => {
                      const active = activeCategory === category;

                      return (
                        <li key={category}>
                          <button
                            onClick={() => setActiveCategory(category)}
                            className={`w-full rounded-lg px-3 py-2 text-left transition ${
                              active
                                ? "bg-foreground text-background"
                                : "hover:bg-surface-low"
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <article key={item.id} className="group">
                  <div className="overflow-hidden rounded-lg bg-surface-low editorial-card border-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="fiasco-image aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="pt-3">
                    <div className="mb-1 text-xs uppercase tracking-[0.12em] text-muted">
                      {item.category}
                    </div>

                    <h3 className="font-sans text-[18px] font-medium leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}