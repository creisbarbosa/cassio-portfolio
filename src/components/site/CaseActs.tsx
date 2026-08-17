import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EASE_OUT, useReducedMotionPreference } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type Act = {
  id: string;
  label: string;
  teaser: string;
  metric: string;
  metricLabel: string;
  href: string;
};

/** GitHub-style pill tab switcher: proper tablist, arrow-key navigation. */
export function CaseActs({ acts, label }: { acts: readonly Act[]; label: string }) {
  const [active, setActive] = useState(acts[0]?.id ?? "");
  const reduced = useReducedMotionPreference();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const act = acts.find((a) => a.id === active) ?? acts[0];

  if (!act) return null;

  const hash = act.href.split("#")[1] ?? "";

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = acts.findIndex((a) => a.id === active);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % acts.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + acts.length) % acts.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = acts.length - 1;
    if (next < 0) return;
    e.preventDefault();
    const id = acts[next]!.id;
    setActive(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <div>
      <div className="-mx-1 overflow-x-auto px-1 pb-1 edge-fade-x no-scrollbar sm:mx-0 sm:overflow-visible sm:px-0 sm:[mask-image:none]">
        <div
          role="tablist"
          aria-label={label}
          onKeyDown={onKeyDown}
          className="inline-flex w-max gap-1 rounded-full border border-border bg-card/40 p-1 sm:flex sm:w-auto sm:flex-wrap"
        >
          {acts.map((a) => (
            <button
              key={a.id}
              ref={(el) => {
                tabRefs.current[a.id] = el;
              }}
              role="tab"
              type="button"
              id={`act-tab-${a.id}`}
              aria-selected={a.id === active}
              aria-controls={`act-panel-${a.id}`}
              tabIndex={a.id === active ? 0 : -1}
              onClick={() => setActive(a.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                a.id === active
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 min-h-[3.5rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={act.id}
            role="tabpanel"
            id={`act-panel-${act.id}`}
            aria-labelledby={`act-tab-${act.id}`}
            initial={reduced ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{act.teaser}</p>
            <Link
              to="/case/retencao"
              hash={hash}
              className="group flex shrink-0 items-center gap-3 rounded-lg border border-border px-4 py-2 transition-colors hover:border-primary/50"
            >
              <span className="tabular font-display text-xl text-primary">{act.metric}</span>
              <span className="max-w-[13rem] text-[0.7rem] uppercase leading-snug tracking-[0.12em] text-muted-foreground">
                {act.metricLabel}
              </span>
              <ArrowRight
                className="size-4 text-primary transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
