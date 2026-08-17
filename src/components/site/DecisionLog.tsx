import { useId, useState } from "react";
import { ChevronDown, GitMerge } from "lucide-react";
import { Collapse } from "@/components/site/Collapse";
import { cn } from "@/lib/utils";

export type LogItem = {
  tag: string;
  role: string;
  company: string;
  period: string;
  description: string;
  emphasis: boolean;
};

/** Experience rendered as a commit-history style decision log. */
export function DecisionLog({
  items,
  expandLabel,
  collapseLabel,
  promotedLabel,
}: {
  items: readonly LogItem[];
  expandLabel: string;
  collapseLabel: string;
  promotedLabel: string;
}) {
  return (
    <ol className="relative mt-14 border-l border-border">
      {items.map((item, i) => (
        <LogEntry
          key={`${item.role}-${item.period}`}
          item={item}
          expandLabel={expandLabel}
          collapseLabel={collapseLabel}
          {...(items[i + 1]?.emphasis && item.emphasis ? { mergeLabel: promotedLabel } : {})}
        />
      ))}
    </ol>
  );
}

function LogEntry({
  item,
  expandLabel,
  collapseLabel,
  mergeLabel,
}: {
  item: LogItem;
  expandLabel: string;
  collapseLabel: string;
  mergeLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="relative pb-10 pl-8 last:pb-0">
      <span
        aria-hidden="true"
        className={cn(
          "absolute -left-[5px] top-1.5 size-[9px] rounded-full",
          item.emphasis ? "bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_18%,transparent)]" : "bg-border",
        )}
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <code className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
          {item.tag}
        </code>
        <span className="tabular text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {item.period}
        </span>
      </div>
      <h3
        className={cn(
          "mt-3 text-base font-semibold tracking-tight",
          !item.emphasis && "text-muted-foreground",
        )}
      >
        {item.role} · {item.company}
      </h3>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-primary transition-colors hover:text-primary/80"
      >
        {open ? collapseLabel : expandLabel}
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <Collapse open={open} id={panelId}>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </Collapse>

      {mergeLabel && (
        <div className="mt-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] text-primary">
            <GitMerge className="size-3.5" aria-hidden="true" />
            {mergeLabel}
          </span>
        </div>
      )}
    </li>
  );
}
