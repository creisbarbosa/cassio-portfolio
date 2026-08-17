import { useId, useState, type ReactNode } from "react";
import { ChevronDown, X } from "lucide-react";
import { Collapse } from "@/components/site/Collapse";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("max-w-[68ch]", className)}>{children}</div>;
}

export function CaseSection({
  id,
  overline,
  title,
  children,
}: {
  id: string;
  overline?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal
      as="section"
      id={id}
      className="scroll-mt-28 border-t border-border py-16 sm:py-20"
    >
      {overline && (
        <p className="text-xs uppercase tracking-[0.22em] text-primary">{overline}</p>
      )}
      <h2 className="mt-3 max-w-[24ch] font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="deferred-paint mt-8">{children}</div>
    </Reveal>
  );
}

export function MetricCallout({
  metrics,
}: {
  metrics: readonly { readonly value: string; readonly label: string }[];
}) {
  return (
    <dl className="my-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-background px-5 py-6">
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span className="block font-display text-3xl tabular-nums tracking-tight text-primary sm:text-4xl">
              {m.value}
            </span>
            <span className="mt-2 block text-xs uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
              {m.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function DecisionBox({
  overline,
  title,
  body,
}: {
  overline: string;
  title: string;
  body: string;
}) {
  return (
    <aside className="my-10 max-w-[72ch] border border-primary/40 bg-primary/[0.04] p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-primary">{overline}</p>
      <h3 className="mt-3 font-display text-xl leading-snug tracking-tight sm:text-2xl">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{body}</p>
    </aside>
  );
}

export function CodingTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="my-10">
      {/* Desktop table */}
      <table className="hidden w-full border-collapse text-left text-sm md:table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-b border-border pb-3 pr-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="align-top transition-colors hover:bg-secondary/40">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={cn(
                    "border-b border-border py-4 pr-6 leading-relaxed",
                    i === 0 ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <ul className="space-y-4 md:hidden">
        {rows.map((row) => (
          <li key={row[0]} className="border border-border p-5">
            {row.map((cell, i) => (
              <div key={i} className={cn(i > 0 && "mt-4")}>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">{headers[i]}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cell}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-2 border-primary pl-6">
      <p className="font-display text-2xl italic leading-snug tracking-tight sm:text-3xl">
        {children}
      </p>
    </blockquote>
  );
}

export function DiscardList({
  title,
  items,
}: {
  title: string;
  items: readonly { readonly item: string; readonly reason: string }[];
}) {
  return (
    <div className="my-10 max-w-[72ch]">
      <h3 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((d) => (
          <li key={d.item} className="flex gap-3 border-b border-border pb-3">
            <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-primary/70" />
            <p className="text-base leading-relaxed text-muted-foreground">
              <span className="text-foreground line-through decoration-muted-foreground">
                {d.item}
              </span>{" "}
              — {d.reason}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AiTrace({
  labels,
  trace,
}: {
  labels: { asked: string; review: string; instead: string };
  trace: { readonly asked: string; readonly review: string; readonly instead: string };
}) {
  const rows = [
    { label: labels.asked, text: trace.asked, mono: true },
    { label: labels.review, text: trace.review, mono: false },
    { label: labels.instead, text: trace.instead, mono: false },
  ];
  return (
    <div className="border border-border">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={cn(
            "grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6",
            i > 0 && "border-t border-border",
            i === 0 && "bg-secondary/40",
          )}
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
            {r.label}
          </p>
          <p
            className={cn(
              "text-sm leading-relaxed",
              r.mono ? "font-mono text-foreground" : "text-muted-foreground",
            )}
          >
            {r.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------- chart-first parts */

export function Takeaway({ lines }: { lines: readonly string[] }) {
  return (
    <div className="max-w-[68ch] space-y-2 border-l-2 border-primary/50 pl-5">
      {lines.map((l) => (
        <p key={l.slice(0, 24)} className="text-base leading-[1.7] text-foreground">
          {l}
        </p>
      ))}
    </div>
  );
}

/** Prose demoted behind an accordion. Decisions never go inside this. */
export function ExpandReasoning({
  expandLabel,
  collapseLabel,
  children,
}: {
  expandLabel: string;
  collapseLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className="my-8 max-w-[72ch]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[0.72rem] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
      >
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
        {open ? collapseLabel : expandLabel}
      </button>
      <Collapse open={open} id={panelId}>
        <div className="pt-6">{children}</div>
      </Collapse>
    </div>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-6">
      <p className="font-display text-4xl tabular-nums tracking-tight text-primary">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

/** GitHub-PR style review card for a vetoed idea. */
export function ChangesRequested({
  overline,
  state,
  idea,
  reason,
  footnote,
}: {
  overline: string;
  state: string;
  idea: string;
  reason: string;
  footnote: string;
}) {
  return (
    <aside
      className="my-10 max-w-[72ch] rounded-xl border p-6 sm:p-7"
      style={{ borderColor: "var(--status-fail-border)", background: "var(--status-fail-bg)" }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
          {overline}
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs"
          style={{ color: "var(--status-fail)", border: "1px solid var(--status-fail-border)" }}
        >
          <X className="size-3.5" aria-hidden="true" />
          {state}
        </span>
      </div>
      <p className="mt-4 font-mono text-sm text-foreground line-through decoration-muted-foreground/70">
        {idea}
      </p>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{reason}</p>
      <p className="mt-5 border-t border-border pt-3 font-mono text-[0.7rem] text-muted-foreground">
        {footnote}
      </p>
    </aside>
  );
}

/** Message-styled card for the executive reply. */
export function MessageCard({
  header,
  highlight,
  paragraphs,
}: {
  header: string;
  highlight: string;
  paragraphs: readonly string[];
}) {
  return (
    <div className="my-8 max-w-[72ch] overflow-hidden rounded-xl border border-border bg-card/40">
      <p className="border-b border-border px-5 py-3 font-mono text-[0.7rem] tracking-[0.08em] text-muted-foreground">
        {header}
      </p>
      <div className="space-y-4 px-5 py-6 sm:px-7">
        <p className="border-l-2 border-primary pl-4 font-display text-xl leading-snug tracking-tight text-foreground">
          {highlight}
        </p>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="text-base leading-[1.8] text-muted-foreground">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Diff-style AI trace: rejected line (−, red) vs. replacement (+, green). */
export function AiDiff({
  labels,
  diffLabels,
  trace,
}: {
  labels: { asked: string; review: string; instead: string };
  diffLabels: { removed: string; added: string };
  trace: { readonly asked: string; readonly review: string; readonly instead: string };
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/40">
      <div className="border-b border-border px-5 py-3">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          {labels.asked}
        </p>
        <p className="mt-1 font-mono text-sm leading-relaxed text-foreground">{trace.asked}</p>
      </div>

      <div className="border-l-2 border-muted-foreground/50 bg-secondary/30 px-5 py-4">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          {diffLabels.removed} · {labels.review}
        </p>
        <p className="mt-1 flex gap-2 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden="true" className="font-mono text-muted-foreground">
            −
          </span>
          <span>{trace.review}</span>
        </p>
      </div>

      <div className="border-l-2 border-primary bg-primary/[0.06] px-5 py-4">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
          {diffLabels.added} · {labels.instead}
        </p>
        <p className="mt-1 flex gap-2 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden="true" className="font-mono text-primary">
            +
          </span>
          <span>{trace.instead}</span>
        </p>
      </div>
    </div>
  );
}
