type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  brand?: string;
  description?: string;
};

const navigationLinks: FooterLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Temas principales", href: "/#temas" },
  { label: "Mapa del sitio", href: "/#mapa-del-sitio" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

const socialLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
];

export default function Footer({
  brand = "Yelena",
  description = "Un sitio personal para reunir recuerdos, identidad, lugares y proyectos.",
}: FooterProps) {
  return (
    <footer className="border-t border-line bg-surface-low py-14 md:py-20">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/" className="inline-block">
              <span className="font-display text-2xl text-foreground md:text-3xl">
                {brand}
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted md:text-base">
              {description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              Navegación
            </h3>

            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + credits */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              Redes
            </h3>

            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-line bg-white px-4 py-4">
              <p className="text-sm text-foreground">
                Diseñado y construido por {brand}.
              </p>
              <p className="mt-1 text-sm text-muted">
                Hecho con cuidado, memoria y código.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            © 2026 {brand}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/#mapa-del-sitio"
              className="text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              Mapa del sitio
            </a>
            <a
              href="/#contacto"
              className="text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}