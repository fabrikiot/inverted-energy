"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TotalDistance from "./total-distance";
import AverageDailyMileage from "./Avg-daily-mileage";

export default function Performance() {
  return (
    <div className="w-[35%] h-full flex flex-col">
      <div className="p-2 py-2 bg-[#3298D8] font-bold flex h-auto text-white text-lg gap-1 relative">
        <div className="flex items-center justify-center size-20 absolute top-[-38.5%] left-[-2.5%]">
          <img
            src="/performance.png"
            alt="performance"
            className=" p-1  w-full h-full object-contain "
          />
        </div>
        <span className="pl-[6%]">Performance</span>
      </div>
      <Card className="w-full flex flex-col gap-5 h-[92.2%] border-2 border-[#3298D8] rounded-none">
        <Card className="w-full border-none ">
          <CardHeader className="flex flex-row items-center px-4 gap-0.5 sm:px-6 lg:px-8 py-4 ">
            <CardTitle className="text-base text-white font-semibold py-2 pt-5">
              Total Distance Covered
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-end relative">
            <div
              className="absolute left-10 top-[14%]  -translate-y-[30px] text-white text-md"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              In million Kms
            </div>
            <TotalDistance />
          </CardContent>
        </Card>
        <Card className="w-full border-none">
          <CardHeader className="flex flex-row items-center px-4  gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold py-2.5">
              Average Daily Mileage
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-end gap-6 pt-4 sm:gap-8 relative">
            <div
              className="absolute left-10 top-[24%]  -translate-y-[30px] text-white text-md"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              In million Kms
            </div>
            <AverageDailyMileage />
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
