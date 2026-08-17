/** Chart palette + shared axis/grid styling (see design knowledge: CHART RULES). */
import { useMemo } from "react";
import { useTheme, type Theme } from "@/lib/theme";

const dark = {
  colors: {
    emphasis: "#2dd4bf",
    neutral: "#8b949e",
    cohort: ["#99f6e4", "#14b8a6", "#0f766e"] as const,
    ok: "#3fb950",
    hold: "#d29922",
    fail: "#f85149",
  },
  ink: {
    text: "#8b949e",
    strongText: "#c9d1d9",
    grid: "rgba(201, 209, 217, 0.10)",
    surface: "rgba(17, 18, 20, 0.96)",
    border: "rgba(201, 209, 217, 0.16)",
  },
} as const;

/* Same hues, inverted: darker series so lines/bars clear 3:1 on off-white. */
const light = {
  colors: {
    emphasis: "#0d8f86",
    neutral: "#57606a",
    cohort: ["#5eead4", "#14b8a6", "#0f5c56"] as const,
    ok: "#1a7f37",
    hold: "#8a6100",
    fail: "#cf222e",
  },
  ink: {
    text: "#57606a",
    strongText: "#1f2328",
    grid: "rgba(31, 35, 40, 0.12)",
    surface: "rgba(255, 255, 255, 0.97)",
    border: "rgba(31, 35, 40, 0.16)",
  },
} as const;

export type ChartTheme = {
  colors: typeof dark.colors | typeof light.colors;
  ink: typeof dark.ink | typeof light.ink;
  axisProps: {
    stroke: string;
    tick: { fill: string; fontSize: number };
    tickLine: false;
    axisLine: { stroke: string };
  };
  tooltipStyles: Record<string, unknown>;
};

export function getChartTheme(theme: Theme): ChartTheme {
  const base = theme === "light" ? light : dark;
  return {
    colors: base.colors,
    ink: base.ink,
    axisProps: {
      stroke: base.ink.grid,
      tick: { fill: base.ink.text, fontSize: 11 },
      tickLine: false,
      axisLine: { stroke: base.ink.grid },
    },
    tooltipStyles: {
      contentStyle: {
        background: base.ink.surface,
        border: `1px solid ${base.ink.border}`,
        borderRadius: 8,
        fontSize: 12,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        color: base.ink.strongText,
        padding: "8px 10px",
      },
      labelStyle: { color: base.ink.text, marginBottom: 4 },
      itemStyle: { color: base.ink.strongText },
      cursor: { stroke: base.ink.grid, strokeWidth: 1 },
    },
  };
}

export function useChartTheme(): ChartTheme {
  const { theme } = useTheme();
  return useMemo(() => getChartTheme(theme), [theme]);
}
