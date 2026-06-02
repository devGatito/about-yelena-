import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const slides = [
  {
    eyebrow: "Bachillerato",
    title: "Una etapa que me formó, me cambió y me dejó recuerdos que sigo llevando conmigo",
    body: "",
  },
  {
    eyebrow: "Personas",
    title: "Entre clases y momentos simples, nacieron amistades que hicieron todo más especial",
    body: "",
  },
  {
    eyebrow: "Momentos",
    title: "Cada escena cuenta una pequeña parte de lo que fuimos y de lo que vivimos juntos",
    body: "",
  },
  {
    eyebrow: "Historia",
    title: "Más que una escuela, fue un lugar lleno de crecimiento, aprendizaje y memoria",
    body: "",
  },
];

const photos = [
  {
    id: "left-mid",
    src: "/image/bacho/1.jpeg",
    width: 240,
    height: 310,
    mobileWidth: 120,
    mobileHeight: 154,
    objectPosition: "center center",
    anchor: "left",
    x: [-24, -18, -10, 0],
    y: [-40, -28, -18, -8],
    mobileX: [-8, -6, -4, 0],
    mobileY: [-24, -20, -16, -12],
    scale: [1, 1, 0.98, 0.95],
    opacity: [1, 1, 1, 0.15],
  },
  

  {
    id: "right-top",
    src: "/image/bacho/7.jpeg",
    width: 190,
    height: 240,
    mobileWidth: 104,
    mobileHeight: 128,
    objectPosition: "center top",
    anchor: "rightTop",
    x: [0, -8, -14, -20],
    y: [0, 6, 12, 16],
    mobileX: [0, -4, -6, -10],
    mobileY: [0, 2, 4, 8],
    scale: [1, 1, 1, 1],
    opacity: [1, 1, 1, 1],
  },
  {
    id: "right-mid",
    src: "/image/bacho/8.jpeg",
    width: 170,
    height: 210,
    mobileWidth: 0,
    mobileHeight: 0,
    objectPosition: "center center",
    anchor: "rightMid",
    x: [0, -8, -16, -24],
    y: [0, -10, -18, -28],
    mobileX: [0, 0, 0, 0],
    mobileY: [0, 0, 0, 0],
    scale: [0, 0, 1, 1],
    opacity: [0, 0, 1, 1],
  },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

function getAnchorClass(anchor: string) {
  switch (anchor) {
    case "left":
      return "left-0 top-[26%] md:left-0";
    case "leftBottom":
      return "left-[12%] bottom-[12%] md:left-[10%] md:bottom-[10%]";
    case "bottomCenter":
      return "left-1/2 bottom-[8%] -translate-x-1/2";
    case "rightTop":
      return "right-[5%] top-[8%] md:right-[4%] md:top-[6%]";
    case "rightMid":
      return "right-0 top-[38%] md:right-[3%]";
    default:
      return "left-0 top-0";
  }
}

function FloatingPhoto({
  photo,
  progress,
  isMobile,
}: {
  photo: (typeof photos)[number];
  progress: any;
  isMobile: boolean;
}) {
  if (isMobile && photo.mobileWidth === 0) return null;

  const input = [0, 0.33, 0.66, 1];
  const x = useTransform(progress, input, isMobile ? photo.mobileX : photo.x);
  const y = useTransform(progress, input, isMobile ? photo.mobileY : photo.y);
  const scale = useTransform(progress, input, photo.scale);
  const opacity = useTransform(progress, input, photo.opacity);

  const width = isMobile ? photo.mobileWidth : photo.width;
  const height = isMobile ? photo.mobileHeight : photo.height;

  return (
    <motion.div
      className={`absolute ${getAnchorClass(photo.anchor)}`}
      style={{ x, y, scale, opacity, width, height }}
    >
      <div className="h-full w-full overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,.08)]">
        <img
          src={photo.src}
          alt=""
          draggable={false}
          className="h-full w-full select-none object-cover"
          style={{ objectPosition: photo.objectPosition }}
        />
      </div>
    </motion.div>
  );
}

function SmoothText({
  slide,
  index,
  progress,
}: {
  slide: (typeof slides)[number];
  index: number;
  progress: any;
}) {
  const center = index / (slides.length - 1);

  const opacity = useTransform(
    progress,
    [Math.max(0, center - 0.2), center, Math.min(1, center + 0.2)],
    [0, 1, 0]
  );

  const y = useTransform(
    progress,
    [Math.max(0, center - 0.2), center, Math.min(1, center + 0.2)],
    [18, 0, -18]
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ opacity, y }}
    >
      <p className="mb-2 text-[11px] italic text-black/70 md:mb-4 md:text-[18px]">
        {slide.eyebrow}
      </p>

      <h2 className="mx-auto max-w-[320px] text-[2rem] leading-[0.98] tracking-tight text-black sm:max-w-[420px] sm:text-[2.6rem] md:max-w-[760px] md:text-[4.35rem]">
        {slide.title}
      </h2>

      {slide.body ? (
        <p className="mx-auto mt-4 max-w-[34rem] text-sm leading-relaxed text-black/75 md:text-xl">
          {slide.body}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function FiascoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const NAVBAR_HEIGHT = isMobile ? 72 : 88;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${NAVBAR_HEIGHT}px`, "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 46,
    damping: 28,
    mass: 0.95,
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f4ea14]"
      style={{ height: isMobile ? "320vh" : "420vh" }}
    >
      <div
        className="sticky overflow-hidden"
        style={{
          top: `${NAVBAR_HEIGHT}px`,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <div className="relative h-full w-full overflow-hidden">
          {photos.map((photo) => (
            <FloatingPhoto
              key={photo.id}
              photo={photo}
              progress={progress}
              isMobile={isMobile}
            />
          ))}

          <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
            <div className="w-full max-w-[860px] text-center">
              <div className="relative min-h-[180px] md:min-h-[260px]">
                {slides.map((slide, index) => (
                  <SmoothText
                    key={index}
                    slide={slide}
                    index={index}
                    progress={progress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}