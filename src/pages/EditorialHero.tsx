
import { useNavigate } from "react-router";
import aylin from "../assets/aylin.png";
import yelena from "../assets/yelena.png";
import { Typewriter } from "react-simple-typewriter";



export function EditorialHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Overlay de texto */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="max-w-xl rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-foreground/60">
            Editorial Profiles
          </p>

          <h1 className="max-w-lg font-display text-4xl font-bold leading-none text-foreground sm:text-5xl lg:text-6xl">
            Elige una historia.
          </h1>

         <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/75 sm:text-base">
  <Typewriter
    words={[
      "Dos perfiles, dos formas de ver la vida.",
      "Selecciona una imagen para descubrir sus recuerdos.",
      "Conoce sus gustos, su esencia y su historia."
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={45}
    deleteSpeed={25}
    delaySpeed={1800}
  />
</p>

          <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/55 sm:text-sm">
            Toca una imagen para continuar
          </p>
        </div>

        <div className="flex items-end justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/45 sm:text-xs">
         <span>Yelena</span>
          <span>Aylin</span>
         
        </div>
      </div>

      <div className="relative flex h-full w-full items-end justify-center">
        {/* Imagen base */}
        <img
          src={aylin}
          alt="Aylin"
          onClick={() => navigate("/aylin")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/aylin");
            }
          }}
          className="
            grayscale
            hover:grayscale-0
            transition-all
            duration-500
            absolute
            h-[70vh]

            max-[480px]:h-[70vh]
            max-[480px]:bottom-[-20vh]

            sm:h-[80vh]
            sm:bottom-0
            cursor-pointer
            lg:bottom-[-25vh]
            min-[540px]:bottom-[-15vh]
            md:h-[95vh]
            md:bottom-[-25vh]
            min-[344px]:bottom-[-22vh]
            lg:h-screen
            lg:bottom-0

            w-auto
            object-contain
          "
        />

        {/* Imagen encima */}
        <img
          src={yelena}
          alt="Yelena"
          onClick={() => navigate("/yelena")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/yelena");
            }
          }}
          className="
            absolute
            left-1/2
            z-10
            grayscale
            hover:grayscale-0
            transition-all
            duration-500
            cursor-pointer
            h-[70vh]
            min-[540px]:bottom-[-15vh]
            min-[344px]:bottom-[-22vh]
            min-[540px]:left-[-18vh]
            max-[480px]:h-[70vh]
            max-[480px]:bottom-[-20vh]
            max-[480px]:-translate-x-[75%]

            sm:h-[80vh]
            sm:bottom-0
            sm:-translate-x-[35%]

            md:h-[95vh]
            md:bottom-[-25vh]
            md:-translate-x-[20%]

            lg:bottom-[-25vh]
            lg:h-screen
            lg:bottom-0
            lg:-translate-x-[15%]

            w-auto
            object-contain
          "
        />
      </div>
    </section>
  );
}