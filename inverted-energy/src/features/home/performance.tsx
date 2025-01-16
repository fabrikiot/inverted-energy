"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


// Distance chart data and config
const distanceChartData = [
  { vehicle: "2 W", kms: 6652.125 },
  { vehicle: "3 W", kms: 1178.49735 },
  { vehicle: "L5", kms: 20.53125 },
  { vehicle: "Tractors", kms: 12.31875 },
];
const distanceChartConfig = {
  kms: {
    label: "Km",
  },
};

// Mileage chart data and config
const mileageChartData = [
  { month: "2 W", desktop: 80 },
  { month: "3 W", desktop: 70 },
  { month: "L5", desktop: 100 },
  { month: "Tractors", desktop: 60 },
]
const chartConfig = {
  desktop: {
    label: "Kmpl",
  },
};

export default function Performance() {
  return (
    <div className="w-full h-[500px] flex flex-col">
      <div className="p-2 bg-[#3298D8] font-bold flex text-white text-lg gap-1 ">
        <img
          src="/public/performance.svg"
          alt=""
          className="size-8 border p-1 rounded"
        />
        Performance
      </div>
      <Card className="w-full flex flex-col border-2 border-[#3298D8] rounded-none">
        <Card className="w-full border-none">
          <CardHeader className="flex flex-row items-center px-4 py-4 pb-4 gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold">
              Total Distance Covered
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-4 sm:gap-8">
            <div className="text-white">In million Kms</div>
            <ChartContainer
              config={distanceChartConfig}
              className="aspect-auto w-full h-[150px]"
            >
              <BarChart
                data={distanceChartData}
                barGap={2}
                width={window.innerWidth <= 768 ? 320 : 480}
                height={250}
              >
                <CartesianGrid vertical={false} />
                <YAxis
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    style: { fill: "white" },
                  }}
                />
                <XAxis
                  dataKey="vehicle"
                  tickLine={false}
                  tickMargin={8}
                  tick={{
                    fontSize: 12,
                    style: { fill: "white" },
                  }}
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
                <Bar dataKey="kms" fill="#369fbc" radius={4} barSize={60} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="w-full border-none">
          <CardHeader className="flex flex-row items-center px-4 py-4 pb-4 gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold">
              Average Daily Mileage
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-4 sm:gap-8">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[150px]"
            >
              <BarChart
                data={mileageChartData}
                layout="vertical"
                barGap={2}
                width={window.innerWidth <= 768 ? 320 : 480}
                height={250}
              >
                <XAxis
                  type="number"
                  dataKey="desktop"
                  tick={{
                    fontSize: 12,
                    style: { fill: "white" },
                  }}
                />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tick={{
                    fontSize: 12,
                    style: { fill: "white" },
                  }}
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
                <Bar dataKey="desktop" fill="#369fbc" radius={4} barSize={40} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
