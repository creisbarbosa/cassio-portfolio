import type { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainer,
  useReducedMotionPreference,
  viewportOnce,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Stagger children that are wrapped in <RevealItem>. */
  stagger?: number;
  delay?: number;
  id?: string;
};

/** whileInView fade-up (16px, ~400ms, once, easeOut). Static under reduced motion. */
export function Reveal({
  children,
  className,
  as = "div",
  stagger,
  delay = 0,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotionPreference();
  const Comp = motion.create(as as ElementType);

  if (reduced) {
    const Static = as as ElementType;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Comp
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger ? staggerContainer(stagger, delay) : fadeUp}
      {...(delay && !stagger ? { transition: { delay } } : {})}

      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Child of a <Reveal stagger>. */
export function RevealItem({
  children,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const reduced = useReducedMotionPreference();
  if (reduced) {
    const Static = as as ElementType;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }
  const Comp = motion.create(as as ElementType);
  return (
    <Comp className={className} variants={fadeUp} {...rest}>
      {children}
    </Comp>
  );
}
