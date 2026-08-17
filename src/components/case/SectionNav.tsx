import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky rail with scroll-spy: the section currently in view is highlighted
 * in the accent color. No vertical rule — the state is carried by the text.
 */
export function SectionNav({
  label,
  items,
}: {
  label: string;
  items: readonly { readonly id: string; readonly label: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (els.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = items.find((i) => visible.has(i.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label={label}
      className="sticky top-24 hidden h-fit w-48 shrink-0 self-start py-20 lg:block"
    >
      <ul className="space-y-3">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block text-sm transition-colors hover:text-foreground",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
