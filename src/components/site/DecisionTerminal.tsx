import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useReducedMotionPreference } from "@/lib/motion";

type Line = { query: string; verdict: string; href: string };

const TYPE_MS = 42;
const ERASE_MS = 18;
const HOLD_MS = 2200;

/** Terminal-style looping typer of product questions and their verdicts. */
export function DecisionTerminal({
  label,
  hint,
  ariaLabel,
  lines,
}: {
  label: string;
  hint: string;
  ariaLabel: string;
  lines: readonly Line[];
}) {
  const reduced = useReducedMotionPreference();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");
  const paused = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const current = lines[index] ?? lines[0]!;
  const full = `${current.query} ${current.verdict}`;

  useEffect(() => {
    if (reduced) return;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (paused.current) {
        timer = setTimeout(step, 200);
        return;
      }
      if (phase === "typing") {
        if (typed.length < full.length) {
          setTyped(full.slice(0, typed.length + 1));
          timer = setTimeout(step, TYPE_MS);
        } else {
          setPhase("holding");
          timer = setTimeout(step, HOLD_MS);
        }
      } else if (phase === "holding") {
        setPhase("erasing");
        timer = setTimeout(step, ERASE_MS);
      } else {
        if (typed.length > 0) {
          setTyped(full.slice(0, typed.length - 1));
          timer = setTimeout(step, ERASE_MS);
        } else {
          setIndex((i) => (i + 1) % lines.length);
          setPhase("typing");
          timer = setTimeout(step, 320);
        }
      }
    };

    timer = setTimeout(step, TYPE_MS);
    return () => clearTimeout(timer);
  }, [typed, phase, full, lines.length, reduced]);

  const shown = reduced ? full : typed;

  return (
    <div
      className="group relative mt-10 w-full max-w-2xl"
      onMouseEnter={() => {
        paused.current = true;
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        paused.current = false;
        setIsPaused(false);
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-xl bg-primary/20 opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-70"
      />
      <div className="relative rounded-xl border border-border bg-card/60 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
            {label}
          </span>
          <span className="font-mono text-[0.65rem] text-muted-foreground">
            {isPaused ? "paused" : hint}
          </span>
        </div>
        <a
          href={current.href}
          aria-label={`${current.query} ${current.verdict}`}
          className="flex items-start gap-3 rounded-b-xl px-3 py-4 font-mono text-[0.78rem] leading-relaxed text-foreground sm:px-4 sm:text-sm outline-none transition-colors hover:bg-secondary/40 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span aria-live="polite" aria-label={ariaLabel} className="min-w-0 flex-1 break-words hyphens-auto">
            {shown}
            {!reduced && (
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-pulse bg-primary"
              />
            )}
          </span>
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
