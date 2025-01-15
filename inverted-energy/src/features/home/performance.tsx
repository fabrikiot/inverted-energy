"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { vehicle: "2 W", kms: 6652.125 },
  { vehicle: "3 W", kms: 1178.49735 },
  { vehicle: "L5", kms: 20.53125 },
  { vehicle: "Tractors", kms: 12.31875 },
]
const chartConfig = {
  kms: {
    label: "Km",
  },
} satisfies ChartConfig

export const Performance = () => {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="bg-[#3298D8] p-1">
        Performance
      </div>
      <Card className=" rounded-none border-[#3298D8]">
        <CardHeader>
          <CardTitle>Total distance covered </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <YAxis
                tickLine={false}
                tick={{
                  style: { fill: "white", fontSize: "14px" }
                }}
              />
              <XAxis
                dataKey="vehicle"
                tickLine={false}
                tickMargin={8}
                color="#fffff"
                tickFormatter={(value) => value.slice(0, 3)}
                tick={{
                  style: { fill: "white" }
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel className="bg-[#011826] border-[#3298D8]" />}
              />
              <Bar dataKey="kms" fill="#369fbc" radius={1} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}