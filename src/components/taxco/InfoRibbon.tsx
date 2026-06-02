import type { RibbonItem } from "./data";

export function InfoRibbon({
  items,
}: {
  items: RibbonItem[];
}) {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-4">
        {items.map((item) => {
          const content = (
            <div className="flex items-center gap-3">
              {item.icon && (
                <img src={item.icon} alt={item.label} className="h-8 w-8 rounded-full object-cover" />
              )}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );

          return item.href ? (
            <a key={item.label} href={item.href} className="transition-opacity hover:opacity-80">
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}