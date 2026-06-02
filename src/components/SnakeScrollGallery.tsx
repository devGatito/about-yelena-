import { useEffect, useRef, useState } from "react";
import snakeGallerySchema from "../schema-aylin/snake-gallery.json";

type SnakeItem = {
  id: number;
  image: string;
  alt: string;
  offsetY?: number;
  rotate?: number;
};

type SnakeGalleryContent = {
  eyebrow: string;
  title: string;
  description: string[];
  items: SnakeItem[];
};

export default function SnakeScrollGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const lang = "es";
  const content = snakeGallerySchema[lang] as SnakeGalleryContent;
  const items = content.items;

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
    <section ref={sectionRef} className="relative h-[220vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container-shell relative flex h-full flex-col justify-between py-10 md:py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-7">

             
            </div>

            <div className="md:col-span-5 max-w-md">
              {content.description.map((paragraph, index) => (
                <p
                  key={`snake-description-${index}`}
                  className={`text-sm leading-6 md:text-base ${
                    index === 0 ? "text-foreground" : "mt-5 text-muted"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mt-10 h-[52vh] md:h-[56vh]">
            <div
              className="absolute left-0 top-0 flex will-change-transform"
              style={{ transform: `translateX(-${translateX}%)`, gap: "0px" }}
            >
              {items.map((item) => (
                <article
                  key={item.id}
                  className="relative shrink-0"
                  style={{
                    marginTop: `${item.offsetY ?? 0}px`,
                    transform: `rotate(${item.rotate ?? 0}deg)`
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

              {items.map((item) => (
                <article
                  key={`duplicate-${item.id}`}
                  className="relative shrink-0"
                  style={{
                    marginTop: `${item.offsetY ?? 0}px`,
                    transform: `rotate(${item.rotate ?? 0}deg)`
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