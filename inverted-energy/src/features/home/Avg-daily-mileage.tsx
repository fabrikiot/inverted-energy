"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface MileageChartData {
  month: string;
  desktop: number;
  img: string;
}

const mileageChartData: MileageChartData[] = [
  { month: "2 W", desktop: 80, img: "/2W.svg" },
  { month: "3 W", desktop: 70, img: "/3W.svg" },
  { month: "L5", desktop: 100, img: "/L5.svg" },
  { month: "Tractors", desktop: 60, img: "/Tractor.svg" },
];

const chartConfig = {
  desktop: {
    label: "Kmpl",
  },
};


const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const entry = mileageChartData.find((data) => data.month === payload.value);

  if (!entry) return null;

  return (
    <g transform={`translate(${x - 5},${y})`}>
      <rect x={-40} y={-17} width="98" height="33" fill="#369fbc" />
      <image
        href={entry.img}
        x={-16} 
        y={-10} 
        width="20"
        height="20"
      />
      <text
        x={7} 
        y={5} 
        fontSize="12"
        fill="white" 
        textAnchor="start"
        style={{ fill: "white" }}
      >
        {entry.month}
      </text>
    </g>
  );
};

const AverageDailyMileage = () => {
  return (
    <div className="aspect-auto w-[93.5%] h-[200px]">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto w-[90%] h-[200px]"
      >
        <BarChart
          data={mileageChartData}
          layout="vertical"
          barGap={2}
          width={window.innerWidth <= 768 ? 320 : 480}
          height={250}
          className="flex gap-5"
        >
          <XAxis
            type="number"
            dataKey="desktop"
            tick={{
              fontSize: 12,
              style: { fill: "white" },
            }}
            className="mr-10"
          />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            tickMargin={60}
            tick={<CustomYAxisTick />}
            width={88}
            height={60}
            enableBackground={"#369fbc"}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                className="bg-[#011826] border-[#3298D8]"
              />
            }
          />
          <Bar dataKey="desktop" fill="#369fbc" barSize={33} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AverageDailyMileage;
