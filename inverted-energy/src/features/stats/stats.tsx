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
    <div className="w-[40%] h-full flex flex-col bg-[#08594A] rounded">
      <div className="px-2 py-1.5 bg-[#08594A] rounded font-bold flex text-white h-auto text-lg gap-1 ">
        <img src="/public/Stats.svg" alt="" className="size-8" />
        Stats
      </div>
      <Card className="w-full h-full justify-between flex border-2 bg-[#011826] border-[#08594A] rounded">
        <Card className="2xl:w-[45%] w-[59%] border-none flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center px-4 pb-1 pt-[5%] gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold">
              Vehicle at different SoC
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-[2.8%] sm:gap-8">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[150px]"
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
        <Card className="2xl:w-[45%] w-[39%] border-none flex flex-col justify-between 2xl:py-[3%] lg:py-[5%]">
          <CardContent className="h-full flex flex-1 flex-col items-center justify-around ">
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
                  innerRadius={50}
                  outerRadius={70}
                />
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-y-2 md:gap-x-2 2xl:gap-x-12 ">
              {pieChartData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="lg:w-4 lg:h-4 md:w-3 md:h-3 rounded-[3px]"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <div className="text-white xl:text-base">{item.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
