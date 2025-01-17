"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TotalDistance from "./total-distance";
import AverageDailyMileage from "./Avg-daily-mileage";

export default function Performance() {
  return (
    <div className="w-[40%] h-full flex flex-col">
      <div className="p-2 py-1.5 bg-[#3298D8] rounded-t font-bold flex h-auto text-white text-lg gap-1 ">
        <div className="flex items-center justify-center size-8 border rounded">
          <img
            src="/Performance Without Border.svg"
            alt="performance"
            className=" p-1  w-full h-full object-contain "
          />
        </div>
        <span>Performance</span>
      </div>
      <Card className="w-full flex flex-col justify-between h-full border-2 border-[#3298D8] rounded-b rounded-t-none">
        <Card className="w-full border-none h-[47%]">
          <CardHeader className="flex flex-row items-center px-4 gap-0.5 sm:px-6 lg:px-8 py-4 ">
            <CardTitle className="text-base text-white font-semibold py-2 pt-[2%] 2xl:text-xl">
              Total Distance Covered
            </CardTitle>
          </CardHeader>
          <CardContent className=" w-full flex items-center justify-end relative">
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
        <Card className="w-[100%] border-none h-[47%] ">
          <CardHeader className="flex flex-row items-center px-4  gap-0.5 sm:px-6 lg:px-8">
            <CardTitle className="text-base text-white font-semibold 2xl:text-xl">
              Average Daily Mileage
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-end gap-6 pt-4 sm:gap-8 w-full">
            <AverageDailyMileage />
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
