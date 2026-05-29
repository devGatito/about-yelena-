import { useEffect, useRef, useState } from "react";

type SnakeItem = {
  id: number;
  image: string;
  alt: string;
  offsetY?: number;
  rotate?: number;
};

const items: SnakeItem[] = [
  { id: 1, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 1", offsetY: 40, rotate: -2 },
  { id: 2, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 2", offsetY: 180, rotate: 1 },
  { id: 3, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 3", offsetY: 140, rotate: -1 },
  { id: 4, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 4", offsetY: 90, rotate: 2 },
  { id: 5, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 5", offsetY: 10, rotate: -1 },
  { id: 6, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 6", offsetY: 120, rotate: 1 },
  { id: 7, image: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", alt: "Familia 7", offsetY: 70, rotate: -2 },
];

export default function SnakeScrollGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const current = Math.min(Math.max(-rect.top, 0), total);
      const nextProgress = total > 0 ? current / total : 0;

      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const translateX = progress * 55;

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh] bg-background"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container-shell relative flex h-full flex-col justify-between py-10 md:py-14">
          {/* Top copy */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-7" />
            <div className="md:col-span-5 max-w-md">
              <p className="text-sm leading-6 text-foreground md:text-base">
                Este espacio reúne recuerdos, personas y momentos que forman
                parte de mi historia. Mientras avanzas, las imágenes se arrastran
                como una secuencia continua para darle al recorrido una sensación
                más viva y personal.
              </p>

              <p className="mt-5 text-sm leading-6 text-muted md:text-base">
                La idea es que no se sienta como una galería rígida, sino como
                una línea visual en movimiento.
              </p>
            </div>
          </div>

          {/* Snake row */}
          <div className="relative mt-10 h-[52vh] md:h-[56vh]">
            <div
              className="absolute left-0 top-0 flex will-change-transform"
              style={{
                transform: `translateX(-${translateX}%)`,
                gap: "0px",
              }}
            >
              {items.map((item) => (
                <article
                  key={item.id}
                  className="relative shrink-0"
                  style={{
                    marginTop: `${item.offsetY ?? 0}px`,
                    transform: `rotate(${item.rotate ?? 0}deg)`,
                  }}
                >
                  <div className="overflow-hidden bg-surface-lowest shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-[180px] w-[160px] object-cover sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[280px] lg:h-[300px] lg:w-[360px]"
                    />
                  </div>
                </article>
              ))}

              {/* duplicado para que no se sienta cortado */}
              {items.map((item) => (
                <article
                  key={`duplicate-${item.id}`}
                  className="relative shrink-0"
                  style={{
                    marginTop: `${item.offsetY ?? 0}px`,
                    transform: `rotate(${item.rotate ?? 0}deg)`,
                  }}
                >
                  <div className="overflow-hidden bg-surface-lowest shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-[180px] w-[160px] object-cover sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[280px] lg:h-[300px] lg:w-[360px]"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}