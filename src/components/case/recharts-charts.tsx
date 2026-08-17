import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useChartTheme } from "@/lib/chart-theme";
import { useReducedMotionPreference } from "@/lib/motion";

/* ---------------------------------------------------------------- G1 */

const WAU = [1180, 1215, 1245, 1275, 1300, 1310, 1195, 1180];

export function ChartWau({
  seriesLabel,
  bandLabel,
  annotation,
  weekPrefix,
}: {
  seriesLabel: string;
  bandLabel: string;
  annotation: string;
  weekPrefix: string;
}) {
  const reduced = useReducedMotionPreference();
  const { colors: chartColors, ink: chartInk, axisProps, tooltipStyles } = useChartTheme();
  const data = WAU.map((value, i) => ({ week: `${weekPrefix}${i + 1}`, value }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 28, right: 16, bottom: 4, left: 4 }}>
        <CartesianGrid stroke={chartInk.grid} vertical={false} />
        <XAxis dataKey="week" {...axisProps} />
        <YAxis
          {...axisProps}
          width={46}
          domain={[1100, 1360]}
          tickFormatter={(v: number) => String(v)}
        />
        <ReferenceArea
          x1={`${weekPrefix}7`}
          x2={`${weekPrefix}8`}
          fill={chartInk.text}
          fillOpacity={0.09}
          label={{
            value: bandLabel,
            position: "insideTop",
            fill: chartInk.text,
            fontSize: 10,
          }}
        />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          {...tooltipStyles}
          formatter={(v: number) => [String(v), seriesLabel] as [string, string]}
        />
        <Line
          type="monotone"
          dataKey="value"
          name={seriesLabel}
          stroke={chartColors.emphasis}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: chartColors.emphasis, stroke: "transparent", strokeWidth: 16 }}
          isAnimationActive={!reduced}
          animationDuration={900}
        />
        <ReferenceDot
          x={`${weekPrefix}6`}
          y={1310}
          r={4}
          fill={chartColors.emphasis}
          stroke={chartInk.surface}
          strokeWidth={2}
          label={{
            value: annotation,
            position: "top",
            fill: chartInk.strongText,
            fontSize: 11,
            offset: 12,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ---------------------------------------------------------------- G2 */

export function ChartCohorts({
  cohortLabels,
  regionLabel,
  xLabels,
}: {
  cohortLabels: readonly string[];
  regionLabel: string;
  xLabels: readonly string[];
}) {
  const reduced = useReducedMotionPreference();
  const { colors: chartColors, ink: chartInk, axisProps, tooltipStyles } = useChartTheme();
  const values: number[][] = [
    [63, 38, 25],
    [62, 37, 23],
    [61, 36, 21],
  ];
  const data = xLabels.map((x, i) => ({
    x,
    c0: values[0]![i]!,
    c1: values[1]![i]!,
    c2: values[2]![i]!,
  }));


  const endLabel = (color: string, dy: number) => (props: {
    x?: number;
    y?: number;
    index?: number;
    value?: number;
  }) => {
    if (props.index !== data.length - 1) return <g />;
    return (
      <text
        x={(props.x ?? 0) + 8}
        y={(props.y ?? 0) + 4 + dy}
        fill={color}
        fontSize={11}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        {props.value}%
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 24, right: 48, bottom: 4, left: 4 }}>
        <CartesianGrid stroke={chartInk.grid} vertical={false} />
        <XAxis dataKey="x" {...axisProps} />
        <YAxis
          {...axisProps}
          width={40}
          domain={[0, 70]}
          tickFormatter={(v: number) => `${v}%`}
        />
        <ReferenceArea
          x1={xLabels[0]!}
          x2={xLabels[1]!}
          fill={chartColors.emphasis}
          fillOpacity={0.06}
          label={{
            value: regionLabel,
            position: "insideTop",
            fill: chartInk.text,
            fontSize: 10,
          }}
        />
        <Tooltip {...tooltipStyles} wrapperStyle={{ outline: "none" }} formatter={(v: number) => `${v}%`} />
        <Legend
          verticalAlign="bottom"
          height={28}
          wrapperStyle={{ fontSize: 11, color: chartInk.text }}
        />
        {(["c0", "c1", "c2"] as const).map((key, i) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={cohortLabels[i]!}
            stroke={chartColors.cohort[i]!}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 16, stroke: "transparent" }}
            isAnimationActive={!reduced}
            animationDuration={900}
            label={endLabel(chartColors.cohort[i]!, (i - 1) * 6)}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

/* -------------------------------------------------- G3 / G4 (h-bars) */

export function HorizontalBars({
  data,
  max = 100,
}: {
  data: readonly { label: string; value: number; emphasis?: boolean }[];
  max?: number;
}) {
  const reduced = useReducedMotionPreference();
  const { colors: chartColors, ink: chartInk, axisProps, tooltipStyles } = useChartTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={data as { label: string; value: number }[]}
        margin={{ top: 8, right: 48, bottom: 4, left: 8 }}
        barCategoryGap={28}
      >
        <CartesianGrid stroke={chartInk.grid} horizontal={false} />
        <XAxis
          type="number"
          domain={[0, max]}
          {...axisProps}
          tickFormatter={(v: number) => `${v}%`}
        />
        <YAxis type="category" dataKey="label" {...axisProps} width={150} />
        <Tooltip {...tooltipStyles} cursor={{ fill: chartInk.grid }} formatter={(v: number) => `${v}%`} />
        <Bar
          dataKey="value"
          barSize={14}
          radius={[4, 4, 4, 4]}
          isAnimationActive={!reduced}
          animationDuration={800}
          label={{
            position: "right",
            fill: chartInk.strongText,
            fontSize: 12,
            formatter: (v: number) => `${v}%`,
          }}
        >
          {data.map((d) => (
            <Cell
              key={d.label}
              fill={d.emphasis ? chartColors.emphasis : chartColors.neutral}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

