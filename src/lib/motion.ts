import { useEffect, useState } from "react";
import type { Transition, Variants } from "framer-motion";

/** Shared easing + durations for the whole site. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const durations = {
  reveal: 0.4,
  count: 1,
  glowDrift: 34,
} as const;

export const revealTransition: Transition = {
  duration: durations.reveal,
  ease: EASE_OUT,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const viewportOnce = { once: true, amount: 0.2 } as const;

/** True when the user asked for reduced motion. SSR-safe (false until mounted). */
export function useReducedMotionPreference() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
