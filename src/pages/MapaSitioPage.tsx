import { Link } from "react-router";
import {
  Compass,
  Home,
  Images,
  GraduationCap,
  Map,
  User,
  Users,
  Phone,
  Link2,
} from "lucide-react";
import Navbar from "../components/Navbar";

const sitemapSections = [
  {
    title: "Principal",
    links: [
      { label: "Portada", to: "/", icon: Home },
      { label: "Inicio", to: "/aylin", icon: Compass },
      { label: "Sobre mí", to: "/aylin/sobre-mi", icon: User },
      { label: "Mi carrera", to: "/aylin/mi-carrera", icon: GraduationCap },
    ],
  },
  {
    title: "Vida personal",
    links: [
      { label: "Mi familia", to: "/aylin/familia", icon: Users },
      { label: "Bachilleres", to: "/aylin/bacho", icon: GraduationCap },
      { label: "Galería", to: "/aylin/galeria", icon: Images },
    ],
  },
  {
    title: "Lugares y recursos",
    links: [
      { label: "Taxco", to: "/aylin/taxco", icon: Map },
      { label: "Mapa del sitio", to: "/aylin/mapa-sitio", icon: Compass },
      { label: "Enlaces relacionados", to: "/aylin/enlaces-relacionados", icon: Link2 },
      { label: "Contacto", to: "/aylin/contacto", icon: Phone },
    ],
  },
];

export default function MapaSitioPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <div className="container-shell py-6 md:py-8">
          <section className="rounded-xl bg-surface-base px-6 py-10 md:px-12 md:py-14">
            <div className="max-w-3xl">
              <p className="chip mb-4 inline-flex items-center gap-2">
                <Compass size={16} />
                Navegación
              </p>

              <h1 className="mb-4">Mapa del sitio</h1>

              <p className="max-w-2xl text-muted">
                Explora todas las secciones disponibles del sitio en una sola vista.
                Esta página funciona como índice general para encontrar cada apartado.
              </p>
            </div>
          </section>

          <nav className="mt-6 flex items-center gap-2 text-sm text-muted">
            <Link to="/aylin" className="text-foreground">
              Inicio
            </Link>
            <span>›</span>
            <span>Mapa del sitio</span>
          </nav>

          <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sitemapSections.map((section) => (
              <article
                key={section.title}
                className="editorial-card rounded-xl p-6"
              >
                <h2 className="mb-5 text-[1.35rem] font-display">
                  {section.title}
                </h2>

                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="flex items-center gap-3 rounded-lg px-2 py-2 text-[15px] text-foreground transition-colors duration-200 hover:bg-surface-low hover:text-accent"
                        >
                          <Icon size={16} className="shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-10 rounded-xl bg-surface-low p-6 md:p-8">
            <h3 className="mb-3 font-sans text-lg font-bold">Estructura general</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-5">
                <p className="mb-2 font-bold">Secciones principales</p>
                <p className="text-sm text-muted">
                  Portada, inicio, sobre mí, mi carrera y contacto.
                </p>
              </div>

              <div className="rounded-lg bg-white p-5">
                <p className="mb-2 font-bold">Secciones complementarias</p>
                <p className="text-sm text-muted">
                  Familia, bachilleres, Taxco, galería, enlaces y mapa del sitio.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}