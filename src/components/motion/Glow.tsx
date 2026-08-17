import { cn } from "@/lib/utils";

type Blob = {
  color: string;
  className: string;
  animation: string;
};

const BLOBS: Blob[] = [
  {
    color: "rgba(45,212,191,0.55)",
    className: "top-[18%] left-[2%] size-[34rem]",
    animation: "aurora-drift-a 34s ease-in-out infinite",
  },
  {
    color: "rgba(59,130,246,0.45)",
    className: "top-[32%] left-[30%] size-[38rem]",
    animation: "aurora-drift-b 40s ease-in-out infinite",
  },
  {
    color: "rgba(139,92,246,0.4)",
    className: "top-[12%] right-[2%] size-[30rem]",
    animation: "aurora-drift-c 46s ease-in-out infinite",
  },
];

/**
 * Slow-drifting radial gradient blobs. Pure CSS (no canvas, no JS ticking),
 * decorative, always behind content. The global prefers-reduced-motion rule
 * in styles.css freezes the drift.
 */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      style={{ opacity: "var(--glow-opacity, 1)" }}
    >
      {BLOBS.map((b, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full blur-[90px] will-change-transform", b.className)}
          style={{
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            animation: b.animation,
          }}
        />
      ))}
    </div>
  );
}
