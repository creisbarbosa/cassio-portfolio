import { Suspense, useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export type DataTable = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly (string | number)[])[];
};

/**
 * Shared chart card: 1px border, dark surface, caption slot.
 * Children only mount once the frame scrolls into view (lazy below-the-fold
 * chart code + a single draw-in animation). The box reserves its height, so
 * nothing shifts when the chart appears.
 */
export function ChartFrame({
  id,
  label,
  title,
  caption,
  subCaption,
  ariaLabel,
  dataTable,
  children,
  className,
  height = 280,
}: {
  id?: string;
  label?: string;
  title: string;
  caption?: string;
  subCaption?: string;
  /** One sentence describing the takeaway, for screen readers. */
  ariaLabel?: string;
  dataTable?: DataTable;
  children: ReactNode;
  className?: string;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <figure
      id={id}
      ref={ref}
      className={cn("my-8 rounded-xl border border-border bg-card/40 p-4 sm:p-6", className)}
    >
      <figcaption className="mb-4">
        {label && (
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">
            {label}
          </span>
        )}
        <h3 className="mt-1 text-base font-medium text-foreground">{title}</h3>
      </figcaption>

      <div
        style={{ height }}
        className="w-full"
        role="img"
        aria-label={ariaLabel ?? caption ?? title}
      >
        {inView ? <Suspense fallback={null}>{children}</Suspense> : null}
      </div>

      {dataTable && (
        <table className="sr-only">
          <caption>{dataTable.caption}</caption>
          <thead>
            <tr>
              {dataTable.headers.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTable.rows.map((row) => (
              <tr key={String(row[0])}>
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={i}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {(caption || subCaption) && (
        <div className="mt-4 space-y-1 border-t border-border pt-3">
          {caption && <p className="text-xs leading-relaxed text-muted-foreground">{caption}</p>}
          {subCaption && (
            <p className="font-mono text-[0.68rem] leading-relaxed text-muted-foreground">
              {subCaption}
            </p>
          )}
        </div>
      )}
    </figure>
  );
}
