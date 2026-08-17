type Series = { label: string; points: number[] };

const COLORS = ["#2dd4bf", "#8b949e"];

/** Axis-less sparkline preview of the case's cohort retention chart (G1). */
export function Sparkline({
  series,
  title,
  caption,
}: {
  series: readonly Series[];
  title: string;
  caption: string;
}) {
  const w = 260;
  const h = 96;
  const all = series.flatMap((s) => s.points);
  const max = Math.max(...all);
  const min = Math.min(...all);
  const span = max - min || 1;

  const path = (points: number[]) =>
    points
      .map((p, i) => {
        const x = (i / (points.length - 1)) * w;
        const y = h - ((p - min) / span) * h;
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  return (
    <figure className="w-full">
      <figcaption className="tabular text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </figcaption>
      <svg
        viewBox={`0 -4 ${w} ${h + 8}`}
        className="mt-3 h-24 w-full"
        role="img"
        aria-label={`${title} — ${series.map((s) => s.label).join(", ")}`}
      >
        {series.map((s, i) => (
          <path
            key={s.label}
            d={path(s.points)}
            fill="none"
            stroke={COLORS[i % COLORS.length]}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {series.map((s, i) => (
          <li key={s.label} className="flex items-center gap-2 text-[0.7rem] text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-0.5 w-4 rounded-full"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            />
            {s.label}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[0.7rem] text-muted-foreground">{caption}</p>
    </figure>
  );
}
