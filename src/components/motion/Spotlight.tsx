import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT, useReducedMotionPreference, viewportOnce } from "@/lib/motion";
import { useTheme } from "@/lib/theme";

/**
 * A blurred conic light cone that fades in from above a card as it scrolls
 * into view. Decorative only.
 */
export function Spotlight({
  className,
  opacity = 0.16,
}: {
  className?: string;
  opacity?: number;
}) {
  const reduced = useReducedMotionPreference();
  const { theme } = useTheme();
  const target = theme === "light" ? opacity * 0.42 : opacity;

  const style = {
    background:
      "conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(45,212,191,0.55) 12deg, rgba(96,165,250,0.4) 25deg, transparent 40deg)",
    maskImage: "linear-gradient(to bottom, black, transparent 75%)",
    WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
  } as const;

  const base = cn(
    "pointer-events-none absolute -top-32 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 blur-3xl",
    className,
  );

  if (reduced) {
    return (
      <div
        aria-hidden="true"
        className={base}
        style={{ ...style, opacity: target }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className={base}
      style={style}
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: target, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, ease: EASE_OUT }}
    />
  );
}
