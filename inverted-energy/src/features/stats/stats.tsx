import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { km: "0-10%", value: 5000 },
  { km: "10-30%", value: 10000 },
  { km: "30-90%", value: 15000 },
  { km: ">90%", value: 15000 },
];

const chartConfig = {
  value: {
    label: "Stats",
    color: "hsl(var(--chart-2))",
  },
};

export default function Stats() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="p-1 bg-[#08594A] font-bold text-white">Stats</div>
      <Card className="w-full border-2 border-[#08594A] rounded-none ">
        <CardHeader className="flex flex-row items-center px-4 py-4 pb-4 gap-0.5 sm:px-6 lg:px-8 ">
          <CardTitle className="text-base text-white font-semibold">
            Vehicle at different SoC
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 py-4 sm:gap-8 ">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto w-full h-[248px]"
          >
            <BarChart
              data={chartData}
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
              {/* <CartesianGrid
              vertical={false}
              strokeDasharray="18 18"
              stroke="#cccc"
            /> */}
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
              <Bar dataKey="value" fill="url(#gradient1)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
