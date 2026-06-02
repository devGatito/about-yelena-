import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DescripcionHistorica } from "../components/taxco/DescripcionHistorica";
import { GridLugares } from "../components/taxco/GridLugares";
import { HeroLugar } from "../components/taxco/HeroLugar";
import { InfoRibbon } from "../components/taxco/InfoRibbon";
import { ResumenLugar } from "../components/taxco/ResumenLugar";

const page = {
  title: "Taxco",
  category: "Turismo",
  summary:
    "Información para viajes a Taxco: explora dónde comer, qué hacer y dónde alojarse por viajeros que han estado allí.",
  audioSrc: "",
  history: [
    "Taxco aparece en Tripadvisor como un destino turístico de México con información para planear viajes.",
    "La página reúne recomendaciones sobre qué hacer, dónde comer y dónde alojarse.",
    "Entre los lugares destacados del archivo aparecen Plaza Borda, Cristo Monumental Taxco y el Teleférico de Montetaxco.",
    "La URL canónica del contenido es la página de turismo de Taxco en Tripadvisor."
  ],
};

const heroSlides = [
  {
    type: "image" as const,
    src: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/06/73/53/67/atzala-falls-nearby-taxco.jpg",
    alt: "Vista de Taxco",
    title: "Taxco",
    credit: "Tripadvisor",
  },
  {
    type: "image" as const,
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/07/82/f5/plaza-borda.jpg?w=600&h=400&s=1",
    alt: "Plaza Borda",
    title: "Plaza Borda",
    credit: "Tripadvisor",
  },
  {
    type: "image" as const,
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/17/ec/fd/img-20191117-wa0259-largejpg.jpg?w=600&h=400&s=1",
    alt: "Cristo Monumental Taxco",
    title: "Cristo Monumental Taxco",
    credit: "Tripadvisor",
  },
  {
    type: "image" as const,
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f8/a0/82/photo6jpg.jpg?w=600&h=400&s=1",
    alt: "Teleférico de Montetaxco",
    title: "Teleférico de Montetaxco",
    credit: "Tripadvisor",
  },
];

const ribbonItems = [
  { label: "Guerrero" },
  { label: "México" },
  { label: "Turismo" },
];
const places = [
  {
    id: "1",
    title: "Plaza Borda",
    category: "Atracción",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/07/82/f5/plaza-borda.jpg?w=600&h=400&s=1",
    excerpt:
      "Lugar destacado de Taxco listado en la página turística de Tripadvisor.",
  },
  {
    id: "2",
    title: "Cristo Monumental Taxco",
    category: "Atracción",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/17/ec/fd/img-20191117-wa0259-largejpg.jpg?w=600&h=400&s=1",
    excerpt:
      "Punto de interés turístico mostrado entre las atracciones de Taxco.",
  },
  {
    id: "3",
    title: "Teleférico de Montetaxco",
    category: "Atracción",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f8/a0/82/photo6jpg.jpg?w=600&h=400&s=1",
    excerpt:
      "Atracción turística de Taxco incluida en el contenido estructurado de la página.",
  },
];
const shareData = {
  url: "https://www.tripadvisor.com.mx/Tourism-g150803-Taxco_Pacific_Coast-Vacations.html",
  title: "Taxco",
  qrImage: "",
};

export default function MiFamiliaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <HeroLugar title={page.title} slides={heroSlides} />
        <InfoRibbon items={ribbonItems} />
        <ResumenLugar
          category={page.category}
          title={page.title}
          summary={page.summary}
          audioSrc={page.audioSrc}
        />
        <DescripcionHistorica paragraphs={page.history} />
        <GridLugares items={places} />
       
        <Footer />
      </main>
    </>
  );
}