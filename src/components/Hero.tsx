import { useEffect, useState } from "react";
import heroSchema from "../schema/hero.json";

export default function HeroIsomeetStyle() {
  const [current, setCurrent] = useState(0);

  const lang = 'es';
  const content = heroSchema[lang];
  const slides = content.slides;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background" aria-label={content.aria.heroSection}>
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-16">
        {/* Left */}
        <div className="order-2 max-w-xl lg:order-1">
          <h1 className="font-display text-4xl leading-[0.95] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
           
            {content.heading.line2}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base md:text-lg">
            {content.description}
          </p>
        </div>

        {/* Right */}
        <div className="order-1 relative flex items-center justify-center lg:order-2">
          <div className="relative w-full max-w-[560px] pb-20 sm:pb-16 lg:pb-0">
            {/* Main slider */}
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.10)] sm:rounded-[32px]">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.name} className="min-w-full">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="h-[420px] w-full object-cover sm:h-[520px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute bottom-8 left-4 z-10 w-[235px] rounded-[24px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:bottom-20 sm:left-[-40px] sm:w-[260px]">
              <p className="mb-2 text-sm text-muted">{slides[current].badge}</p>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-base">
                  <img
                    src={slides[current].image}
                    alt={slides[current].name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate font-medium text-foreground">
                    {slides[current].name}
                  </p>
                  <p className="truncate text-sm text-muted">
                    {slides[current].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 sm:relative sm:left-auto sm:mt-6 sm=translate-x-0">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index
                      ? "w-6 bg-foreground"
                      : "w-2.5 bg-black/15"
                  }`}
                  aria-label={`${content.aria.slide} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}