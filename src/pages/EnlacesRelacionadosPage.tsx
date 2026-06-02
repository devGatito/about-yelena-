import { Link } from "react-router";
import {
  ArrowRight,
  Compass,
  Contact,
  GalleryVertical,
  Map,
  UserRound,
  Users,
  GraduationCap,
} from "lucide-react";
import Navbar from "../components/Navbar";

const relatedSections = [
  {
    title: "Perfil",
    description: "Accesos a las secciones principales de presentación personal.",
    links: [
      { label: "Inicio", to: "/aylin", icon: Compass },
      { label: "Sobre mí", to: "/aylin/sobre-mi", icon: UserRound },
      { label: "Mi carrera", to: "/aylin/mi-carrera", icon: GraduationCap },
    ],
  },
  {
    title: "Entorno personal",
    description: "Secciones relacionadas con familia, recuerdos y etapa escolar.",
    links: [
      { label: "Mi familia", to: "/aylin/familia", icon: Users },
      { label: "Bachilleres", to: "/aylin/bacho", icon: GraduationCap },
      { label: "Galería", to: "/aylin/galeria", icon: GalleryVertical },
    ],
  },
  {
    title: "Contenido del sitio",
    description: "Apartados informativos y de navegación general.",
    links: [
      { label: "Taxco", to: "/aylin/taxco", icon: Map },
      { label: "Mapa del sitio", to: "/aylin/mapa-sitio", icon: Compass },
      { label: "Contacto", to: "/aylin/contacto", icon: Contact },
    ],
  },
];

export default function EnlacesRelacionadosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <div className="container-shell py-6 md:py-8">
          <section className="rounded-xl bg-surface-base px-6 py-10 md:px-12 md:py-14">
            <div className="max-w-3xl">
              <p className="chip mb-4 inline-flex items-center gap-2">
                <Compass size={16} />
                Explorar
              </p>

              <h1 className="mb-4">Enlaces relacionados</h1>

              <p className="max-w-2xl text-muted">
                Encuentra accesos rápidos a páginas útiles del sitio.
                Los enlaces están organizados por categoría para que la navegación sea más clara y directa.
              </p>
            </div>
          </section>

          <nav className="mt-6 flex items-center gap-2 text-sm text-muted">
            <Link to="/aylin" className="text-foreground">
              Inicio
            </Link>
            <span>›</span>
            <span>Enlaces relacionados</span>
          </nav>

          <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedSections.map((section) => (
              <article key={section.title} className="editorial-card p-6 md:p-7">
                <h2 className="mb-3 text-[1.45rem]">{section.title}</h2>
                <p className="mb-5 text-sm text-muted">{section.description}</p>

                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <li
                        key={link.to}
                        className="border-b border-line pb-3 last:border-b-0 last:pb-0"
                      >
                        <Link
                          to={link.to}
                          className="inline-flex items-center gap-3 text-[15px] font-medium underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-accent hover:decoration-accent"
                        >
                          <Icon size={16} />
                          <span>{link.label}</span>
                          <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-10 rounded-xl bg-surface-low p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-sans text-lg font-bold">¿No encuentras algo?</h3>
                <p className="mt-2 text-sm text-muted">
                  Usa el mapa del sitio o ve a la sección de contacto para recibir ayuda.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/aylin/mapa-sitio" className="btn-primary">
                  Ver mapa del sitio
                </Link>
                <Link to="/aylin/contacto" className="btn-ghost">
                  Ir a contacto
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}