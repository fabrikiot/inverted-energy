"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Customized,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Data types
interface DistanceChartData {
  vehicle: string;
  kms: number;
  img: string;
}

const distanceChartData: DistanceChartData[] = [
  { vehicle: "2 W", kms: 6652.125, img: "/2W.png" },
  { vehicle: "3 W", kms: 1178.49735, img: "/3W.png" },
  { vehicle: "L5", kms: 20.53125, img: "/L5.png" },
  { vehicle: "Tractors", kms: 12.31875, img: "/TRACTOR.png" },
];

const distanceChartConfig = {
  kms: {
    label: "Km",
  },
};

const CustomXAxisLabels: React.FC<{
  data: DistanceChartData[];
  xScale: any;
  yPosition: number;
}> = ({ data, xScale, yPosition }) => {
  return (
    <>
      {data.map((entry, index) => {
        const x = (xScale(entry.vehicle) || 0) + xScale.bandwidth() / 2 - 15; 
        return (
          <g key={`custom-label-${index}`} transform={`translate(${x}, ${yPosition})`}>
            <image
              href={entry.img}
              width="24"
              height="22"
              x={-10} 
              y={-10} 
            />
            <text
              x={15} 
              y={5} 
              fontSize="12"
              fill="white"
              textAnchor="start"
            >
              {entry.vehicle}
            </text>
          </g>
        );
      })}
    </>
  );
};

const TotalDistance: React.FC = () => {
  return (
    <div className="aspect-auto w-[93%] h-[200px]">
      <ChartContainer
        config={distanceChartConfig}
        className="aspect-auto w-[90%] h-full"
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
            tickMargin={35} 
            tick={false} 
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
          <Customized
            component={(props: any) => (
              <CustomXAxisLabels
                data={distanceChartData}
                xScale={props.xAxisMap[0].scale}
                yPosition={props.height - 20}
              />
            )}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default TotalDistance;
