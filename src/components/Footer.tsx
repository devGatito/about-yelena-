import footerSchema from "../schema-aylin/footer.json";

type FooterLink = {
  label: string;
  href: string;
};

type FooterContent = {
  brand: string;
  description: string;
  navigationTitle: string;
  socialTitle: string;
  navigationLinks: FooterLink[];
  socialLinks: FooterLink[];
  credit: {
    title: string;
    description: string;
  };
  bottomBar: {
    copyright: string;
    links: FooterLink[];
  };
};

export default function Footer() {
  const lang = "es";
  const content = footerSchema[lang] as FooterContent;

  return (
    <footer className="border-t border-line bg-surface-low py-14 md:py-20">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="/" className="inline-block">
              <span className="font-display text-2xl text-foreground md:text-3xl">
                {content.brand}
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted md:text-base">
              {content.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              {content.navigationTitle}
            </h3>

            <ul className="mt-4 space-y-3">
              {content.navigationLinks.map((link) => (
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

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              {content.socialTitle}
            </h3>

            <ul className="mt-4 space-y-3">
              {content.socialLinks.map((link) => (
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
              <p className="text-sm text-foreground">{content.credit.title}</p>
              <p className="mt-1 text-sm text-muted">
                {content.credit.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">{content.bottomBar.copyright}</p>

          <div className="flex flex-wrap items-center gap-4">
            {content.bottomBar.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}