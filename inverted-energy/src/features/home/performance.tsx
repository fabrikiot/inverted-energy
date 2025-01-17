"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TotalDistance from "./total-distance";
import AverageDailyMileage from "./Avg-daily-mileage";


export default function Performance() {
  return (
    <div className="w-[35%] h-full flex flex-col">
      <div className="p-2 py-1.5 bg-[#3298D8] font-bold flex h-auto text-white text-lg gap-1 ">
        <img
          src="/public/performance.svg"
          alt=""
          className="size-8 border p-1 rounded"
        />
        Performance
      </div>
      <Card className="w-full flex flex-col gap-5 h-[92.2%] border-2 border-[#3298D8] rounded-none">
        <Card className="w-full border-none ">
          <CardHeader className="flex flex-row items-center px-4 gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold py-2">
              Total Distance Covered
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6  sm:gap-8">
            <div className="text-white">In million Kms</div>
            <TotalDistance />
          </CardContent>
        </Card>
        <Card className="w-full border-none">
          <CardHeader className="flex flex-row items-center px-4  gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold py-2.5">
              Average Daily Mileage
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center gap-6 pt-4 sm:gap-8">
            <AverageDailyMileage />
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
