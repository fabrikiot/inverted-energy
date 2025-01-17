import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Initial Bar chart data
const initialBarChartData = [
  { value: 118800, fill: "#3298D8" },
  { value: 2700, fill: "#FFC000" },
  { value: 13500, fill: "#ED7D31" },
];

// Initial Pie chart data
const initialPieChartData1 = [
  { status: "Healthy", vechiles: 88, fill: "#3298D8" },
  { status: "Full Check-up", vechiles: 2, fill: "#FFD700" },
  { status: "Primary Check-up ", vechiles: 10, fill: "#ED7D31" },
];

// Chart config
const chartConfig = {
  value: {
    label: "Safety",
    color: "hsl(var(--chart-2))",
  },
};

export default function Safety() {
  const [barChartData, setBarChartData] = useState(initialBarChartData);
  const [pieChartData1, setPieChartData1] = useState(initialPieChartData1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Bar chart data
      setBarChartData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: fluctuate(item.value, 2, 3),
        }))
      );

      // Update Pie chart data
      setPieChartData1((prevData) =>
        prevData.map((item) => ({
          ...item,
          vechiles: fluctuate(item.vechiles, 2, 3),
        }))
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Function to fluctuate numbers by a percentage range
  const fluctuate = (value: number, minPercent: number, maxPercent: number) => {
    const percentage = Math.random() * (maxPercent - minPercent) + minPercent;
    const fluctuation = value * (percentage / 100);
    return Math.max(
      0,
      Math.random() > 0.5 ? value + fluctuation : value - fluctuation
    );
  };

  return (
    <div className="w-[59.7%] h-full flex flex-col bg-[#C9891B]  rounded">
      <div className="px-2 py-1.5 bg-[#C9891B] font-bold flex rounded h-auto text-white text-lg gap-1 ">
        <img src="/public/Safety Alerts.svg" alt="" className="size-8 " />
        Safety Alerts
      </div>
      <Card className="w-full h-full flex flex-row items-center gap-10 px-10 border-2 border-[#C9891B] bg-[#011826] rounded">
        <Card className="w-[45%] h-full border-none flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center px-4 pb-1 pt-[5%]  gap-0.5 sm:px-3 lg:px-4">
            <CardTitle className="text-base text-white font-semibold">
              Temperature Histogram
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-[2.15%] sm:gap-8">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto w-full h-[145px]"
            >
              <BarChart data={barChartData} margin={{ left: 20, top: 30 }}>
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#28CD41" />
                    <stop offset="100%" stopColor="#146721" />
                  </linearGradient>
                </defs>
                <XAxis
                  axisLine={{ stroke: "white" }}
                  tick={false}
                  label={{ value: "Count", position: "middle", fill: "white" }}
                  interval={0}
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
                      className="bg-[#011826] border-[#c9891b] w-[2rem]"
                    />
                  }
                />
                <Bar dataKey="value" fill="url(#gradient1)" barSize={60} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <div className="flex w-[50%] items-center">
          <div className="flex flex-col h-auto gap-y-3 ml-24 ">
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
          <Card className="w-[40%] border-none">
            <CardContent className="flex  items-center justify-center">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto w-full h-[150px] "
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        hideLabel
                        className="bg-[#011826] border-[#c9891b] w-[10rem]"
                      />
                    }
                  />
                  <Pie
                    data={pieChartData1}
                    dataKey="vechiles"
                    nameKey="status"
                    innerRadius={50}
                    outerRadius={70}
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </Card>
    </div>
  );
}
