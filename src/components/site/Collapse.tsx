import { cn } from "@/lib/utils";

/**
 * Height animation via grid-template-rows (0fr → 1fr): no JS measuring, no
 * layout thrash, and the closed state occupies zero height so nothing shifts.
 * Under prefers-reduced-motion the global rule collapses the transition to 0.
 */
export function Collapse({
  open,
  id,
  children,
}: {
  open: boolean;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      {...(id ? { id } : {})}
      className={cn("collapse-grid", open && "collapse-grid-open")}
      aria-hidden={open ? undefined : true}
    >
      <div className={cn("overflow-hidden", !open && "invisible")}>{children}</div>
    </div>
  );
}
