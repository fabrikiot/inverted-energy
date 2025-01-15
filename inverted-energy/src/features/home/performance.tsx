"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const distanceChartData = [
  { vehicle: "2 W", kms: 6652.125 },
  { vehicle: "3 W", kms: 1178.49735 },
  { vehicle: "L5", kms: 20.53125 },
  { vehicle: "Tractors", kms: 12.31875 },
]
const distanceChartConfig = {
  kms: {
    label: "Km",
  },
} satisfies ChartConfig

const mileageChartData = [
  { month: "2 W", desktop: 186 },
  { month: "3 W", desktop: 305 },
  { month: "L5", desktop: 237 },
  { month: "Tractors", desktop: 73 },
]
const chartConfig = {
  desktop: {
    label: "Kmpl",
  },
} satisfies ChartConfig

export const Performance = () => {
  return (
    <div className="w-full flex flex-col p-3">
      <div className="bg-[#3298D8] text-lg text-white flex text-left font-bold p-2 gap-1 rounded-md">
        <img src="/public/performance.svg" alt="" className="size-8 border p-1 rounded " />
        Performance
      </div>
      <div className="flex-grow rounded-md border border-[#3298D8]">
        <div className="p-4">
          <h2 className="font-semibold">Total Distance Covered</h2>
        </div>
        <div className="flex-grow p-4">
          <div className="">
            In million Kms
          </div>
          <ChartContainer config={distanceChartConfig}>
            <BarChart
              accessibilityLayer
              data={distanceChartData}
              barGap={2}
            >
              <CartesianGrid vertical={false} />
              <YAxis
                tickLine={false}
                tick={{
                  style: { fill: "white", fontSize: "14px" },
                }}
              />
              <XAxis
                dataKey="vehicle"
                tickLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                tick={{
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
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Average Daily Mileage</h2>
        </div>
        <div className="flex-grow p-4">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={mileageChartData}
              layout="vertical"
              barGap={2}
            >
              <XAxis
                type="number"
                dataKey="desktop"
                tick={{
                  style: { fill: "white" },
                }} />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={{
                  style: { fill: "white" },
                }}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel className="bg-[#011826] border-[#3298D8]" />}
              />
              <Bar dataKey="desktop" fill="#369fbc" radius={4} barSize={40} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}
