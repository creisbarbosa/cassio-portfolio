import { useId, useState } from "react";
import { Collapse } from "@/components/site/Collapse";

const MAX_VISIBLE = 8;

/** Compact card whose list items render as mono chips, with +N overflow. */
export function ChipCard({
  title,
  items,
  showMore,
  showLess,
}: {
  title: string;
  items: readonly string[];
  showMore: string;
  showLess: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const visible = items.slice(0, MAX_VISIBLE);
  const hidden = items.slice(MAX_VISIBLE);

  return (
    <div className="rounded-xl border border-border bg-card/30 p-6 transition-colors hover:border-primary/40">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {visible.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
        {hidden.length > 0 && !open && (
          <li>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={false}
              aria-controls={panelId}
              className="rounded-full border border-primary/40 px-3 py-1 font-mono text-[0.7rem] text-primary transition-colors hover:bg-primary/10"
            >
              +{hidden.length} {showMore}
            </button>
          </li>
        )}
      </ul>
      <Collapse open={open} id={panelId}>
        <ul className="mt-2 flex flex-wrap gap-2">
          {hidden.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-expanded
          aria-controls={panelId}
          className="mt-4 font-mono text-[0.7rem] text-primary transition-colors hover:text-primary/80"
        >
          {showLess}
        </button>
      </Collapse>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
      {children}
    </li>
  );
}
