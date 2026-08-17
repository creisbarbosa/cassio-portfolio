import { lazy } from "react";

/* Recharts lives in its own chunk; ChartFrame mounts these lazily, in view. */
export const ChartWau = lazy(() =>
  import("./recharts-charts").then((m) => ({ default: m.ChartWau })),
);
export const ChartCohorts = lazy(() =>
  import("./recharts-charts").then((m) => ({ default: m.ChartCohorts })),
);
export const HorizontalBars = lazy(() =>
  import("./recharts-charts").then((m) => ({ default: m.HorizontalBars })),
);

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Check, CircleDot, Loader2, X } from "lucide-react";
import { useChartTheme } from "@/lib/chart-theme";
import { useReducedMotionPreference } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------- G5 CI checks */

type CheckState = "ok" | "hold" | "fail";

const stateIcon: Record<CheckState, typeof Check> = {
  ok: Check,
  hold: CircleDot,
  fail: X,
};
function useStateColor(): Record<CheckState, string> {
  const { colors } = useChartTheme();
  return { ok: colors.ok, hold: colors.hold, fail: colors.fail };
}

export function StatusLegend({
  items,
}: {
  items: readonly { readonly state: CheckState; readonly label: string }[];
}) {
  const stateColor = useStateColor();
  return (
    <ul className="mb-4 flex flex-wrap gap-x-5 gap-y-2">
      {items.map((i) => {
        const Icon = stateIcon[i.state];
        return (
          <li key={i.label} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon className="size-3.5" style={{ color: stateColor[i.state] }} aria-hidden="true" />
            {i.label}
          </li>
        );
      })}
    </ul>
  );
}

export function CiChecksPanel({
  title,
  runningLabel,
  rows,
}: {
  title: string;
  runningLabel: string;
  rows: readonly {
    readonly name: string;
    readonly threshold: string;
    readonly state: CheckState;
  }[];
}) {
  const stateColor = useStateColor();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotionPreference();
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setResolved(true);
      return;
    }
    const timers = [window.setTimeout(() => setResolved(true), 900)];
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  return (
    <div ref={ref} className="my-8 overflow-hidden rounded-xl border border-border bg-card/40">
      <p className="border-b border-border px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </p>
      <ul>
        {rows.map((r) => {
          const Icon = stateIcon[r.state];
          return (
            <li
              key={r.name}
              className="flex flex-col gap-1 border-b border-border px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="flex items-center gap-2.5 sm:w-64 sm:shrink-0">
                {resolved ? (
                  <Icon
                    className="size-4 shrink-0"
                    style={{ color: stateColor[r.state] }}
                    aria-hidden="true"
                  />
                ) : (
                  <Loader2
                    className="size-4 shrink-0 animate-spin text-muted-foreground"
                    aria-hidden="true"
                  />
                )}
                <span className="text-sm text-foreground">{r.name}</span>
              </span>
              <span className="pl-6 font-mono text-[0.72rem] leading-relaxed text-muted-foreground sm:pl-0">
                {resolved ? r.threshold : runningLabel}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------ stage cards */

export function StageCards({
  labels,
  items,
}: {
  labels: { question: string; gate: string; reversal: string };
  items: readonly {
    readonly name: string;
    readonly question: string;
    readonly gate: string;
    readonly reversal: string;
  }[];
}) {
  return (
    <ol className="relative my-8 grid gap-4 lg:grid-cols-3">
      {items.map((s, i) => (
        <li
          key={s.name}
          className="relative rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/40"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-6 place-items-center rounded-full border border-primary/50 bg-background font-mono text-[0.65rem] text-primary">
              {i + 1}
            </span>
            <h4 className="text-sm font-medium text-foreground">{s.name}</h4>
          </div>
          <dl className="mt-4 space-y-3">
            {(
              [
                [labels.question, s.question],
                [labels.gate, s.gate],
                [labels.reversal, s.reversal],
              ] as const
            ).map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {k}
                </dt>
                <dd className={cn("mt-1 text-sm leading-relaxed text-muted-foreground")}>{v}</dd>
              </div>
            ))}
          </dl>
        </li>
      ))}
    </ol>
  );
}
