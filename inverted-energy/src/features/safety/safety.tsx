import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Bar chart data
const barChartData = [
  { value: 5000, fill: "#3298D8" }, // Green for the highest value
  { value: 3000, fill: "#FFC000" }, // Yellow for the second value
  { value: 4000, fill: "#ED7D31" }, // Red for the third value
  { value: 1500, fill: "#3298D8" }, // Blue for the fourth value
  { value: 500, fill: "#FFC000" }, // Orange for the fifth value
  { value: 1000, fill: "#ED7D31" }, // Grey for the sixth value
];
const pieChartData1 = [
  { status: "Healthy", vechiles: 500, fill: "#3298D8" },
  { status: "Full Checkup", vechiles: 50, fill: "#FFD700" }, // Yellow for idle
  { status: "Primary Checkup", vechiles: 57, fill: "#FF6347" }, // Red for discharging
];

// Chart config
const chartConfig = {
  value: {
    label: "Safety",
    color: "hsl(var(--chart-2))",
  },
};

export default function Safety() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="p-1 bg-[#08594A] font-bold text-white flex-1">
        Safety Alerts
      </div>
      <Card className="w-full flex flex-row gap-8 border-2 border-[#08594A] rounded-none">
        <Card className="w-1/2 border-none">
          <CardHeader className="flex flex-row items-center px-4 py-4 pb-4 gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold">
              Temperature Histogram
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-4 sm:gap-8">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[248px]"
            >
              <BarChart
                data={barChartData}
                margin={{ left: 20, top: 30 }}
                width={window.innerWidth <= 768 ? 320 : 480}
                barCategoryGap={0}
                barGap={0}
              >
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#28CD41" />
                    <stop offset="100%" stopColor="#146721" />
                  </linearGradient>
                </defs>
                <XAxis
                  axisLine={{ stroke: "white" }}
                  label={{ value: "Count", position: "middle", fill: "white" }}
                />
                <YAxis
                  domain={[0, 5000]}
                  ticks={[
                    0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500,
                    5000,
                  ]}
                  tick={{
                    fontSize: 12,
                    style: { fill: "white" },
                  }}
                  tickLine={false}
                  axisLine={{ stroke: "white" }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      hideLabel
                      className="bg-[#011826] border-[#08594A]"
                    />
                  }
                />
                <Bar dataKey="value" fill="url(#gradient1)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <div className="flex flex-col mt-20 gap-y-3 ">
          {pieChartData1.map((item, index) => (
            <div key={index} className="flex items-center w-48 space-x-3">
              <div
                className="w-4 h-4 rounded-[3px]"
                style={{ backgroundColor: item.fill }}
              ></div>
              <div className="text-white">{item.status}</div>
            </div>
          ))}
        </div>
        <Card className="w-1/2 border-none">
          <CardContent className="flex flex-1 flex-col items-center justify-center">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[248px] mt-9"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      hideLabel
                      className="bg-[#011826] border-[#08594A]"
                    />
                  }
                />
                <Pie
                  data={pieChartData1}
                  dataKey="vechiles"
                  nameKey="status"
                  innerRadius={60}
                  outerRadius={80}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
