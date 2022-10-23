/// <reference types="chart.js" />
import { ComponentProps } from "solid-js";
export declare type SolidChartProps = {
    canvasOptions?: ComponentProps<"canvas">;
} & Chart.ChartConfiguration;
export declare function SolidChart(props: SolidChartProps): JSX.Element;
