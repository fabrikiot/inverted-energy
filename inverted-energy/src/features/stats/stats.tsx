import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Bar chart data
const barChartData = [
  { km: "0-10%", value: 5000 },
  { km: "10-30%", value: 10000 },
  { km: "30-90%", value: 15000 },
  { km: ">90%", value: 15000 },
];

// Pie chart data with direct color values
const pieChartData = [
  { status: "charging", vechiles: 275, fill: "#70AD46" }, // Green for charging
  { status: "idle", vechiles: 200, fill: "#FFC000" }, // Yellow for idle
  { status: "discharging", vechiles: 187, fill: "#ED7D31" }, // Red for discharging
  { status: "other", vechiles: 90, fill: "#A8A8A8" }, // Grey for other
];

// Chart config
const chartConfig = {
  value: {
    label: "Stats",
    color: "hsl(var(--chart-2))",
  },
};

export default function Stats() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="p-2 bg-[#08594A] font-bold flex text-white text-lg gap-1 ">
        <img src="/public/stats.svg" alt="" className="size-8 border p-1 rounded " />
        Stats
      </div>
      <Card className="w-full flex flex-row gap-8 border-2 border-[#08594A] rounded-none">
        <Card className="w-1/2 border-none">
          <CardHeader className="flex flex-row items-center px-4 py-4 pb-4 gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold">
              Vehicle at different SoC
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
                barSize={20}
                width={window.innerWidth <= 768 ? 320 : 480}
              >
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#28CD41" />
                    <stop offset="100%" stopColor="#146721" />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="km"
                  type="category"
                  tickLine={false}
                  axisLine={{ stroke: "white" }}
                  tick={{
                    fontSize: 12,
                    style: { fill: "white" },
                  }}
                />
                <YAxis
                  domain={[0, 40000]}
                  ticks={[
                    0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000,
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
        <Card className="w-1/2 border-none">
          <CardContent className="flex flex-1 flex-col items-center justify-center">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[248px]"
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
                  data={pieChartData}
                  dataKey="vechiles"
                  nameKey="status"
                  innerRadius={60}
                  outerRadius={80}
                />
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-y-4 gap-x-16 ml-5">
              {pieChartData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-[3px]"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <div className="text-white">{item.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
