import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const initialBarChartData = [
  { km: "0-10%", value: 4000 },
  { km: "10-30%", value: 17550 },
  { km: "30-90%", value: 81000 },
  { km: ">90%", value: 32400 },
];

const initialPieChartData = [
  { status: "Charging", vechiles: 10, fill: "#70AD46" },
  { status: "Idle", vechiles: 20, fill: "#FFC000" },
  { status: "Discharging", vechiles: 70, fill: "#ED7D31" },
  { status: "other", vechiles: 20, fill: "#A8A8A8" },
];

const chartConfig = {
  value: {
    label: "Stats",
  },
};

export default function Stats() {
  const [barChartData, setBarChartData] = useState(initialBarChartData);
  const [pieChartData, setPieChartData] = useState(initialPieChartData);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update bar chart data
      setBarChartData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: fluctuate(item.value, 2, 3),
        }))
      );

      // Update pie chart data
      setPieChartData((prevData) =>
        prevData.map((item) => ({
          ...item,
          vechiles: fluctuate(item.vechiles, 2, 3),
        }))
      );
    }, 60000); // Update every 1 minute

    return () => clearInterval(interval);
  }, []);

  // Function to fluctuate numbers by a percentage range
  const fluctuate = (value: number, minPercent: number, maxPercent: number) => {
    const percentage = Math.random() * (maxPercent - minPercent) + minPercent;
    const fluctuation = value * (percentage / 100);
    return Math.random() > 0.5 ? value + fluctuation : value - fluctuation;
  };

  return (
    <div className="w-[35%] h-full flex flex-col">
      <div className="px-2 py-1.5 bg-[#08594A] font-bold flex text-white h-auto text-lg gap-1 ">
        <img
          src="/public/Stats.svg"
          alt=""
          className="size-8"
        />
        Stats
      </div>
      <Card className="w-full flex flex-row border-2 border-[#08594A] rounded-none">
        <Card className="w-1/2 border-none">
          <CardHeader className="flex flex-row items-center px-4 pb-1 pt-2.5 gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold">
              Vehicle at different SoC
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-[3.5%] sm:gap-8">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[145px]"
            >
              <BarChart
                data={barChartData}
                margin={{ left: 20, top: 30 }}
                barSize={45}
              >
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#70AD46" />
                    <stop offset="100%" stopColor="#70AD46" />
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
                      className="bg-[#011826] border-[#08594A] w-[2rem]"
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
              className="aspect-auto w-full h-[145px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      hideLabel
                      className="bg-[#011826] border-[#08594A] w-[3rem]"
                    />
                  }
                />
                <Pie
                  data={pieChartData}
                  dataKey="vechiles"
                  nameKey="status"
                  innerRadius={40}
                  outerRadius={60}
                />
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-y-2 gap-x-16 ml-5">
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
