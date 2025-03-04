import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

const FinancialDetail = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-6">
        <Card className="bg-[#171717] border-none text-white">
          <CardHeader className="p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">Lifecycle Details</CardTitle>
              <Button variant="ghost" className="text-emerald-500 text-xs font-medium  p-0 h-auto hover:bg-transparent hover:text-emerald-500 hover:underline">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">In-Service Date</div>
                <div className="col-span-6 text-white">0 mi</div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Estimated Service Life in Months
                </div>
                <div className="col-span-6 text-white space-y-1">
                  <div>60 months</div>
                  <Progress
                    value={33}
                    className="h-3 bg-zinc-800 [&>div]:bg-emerald-600"
                  />
                  <div className="flex gap-2 justify-between !mt-2 ">
                    <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                      Jul 23, 2020
                    </div>
                    <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                      Jul 23, 2020
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Estimated Service Life in Miles
                </div>
                <div className="col-span-6 text-white space-y-1">
                  <div>150 000 mi</div>
                  <Progress
                    value={33}
                    className="h-3 bg-zinc-800 [&>div]:bg-emerald-600"
                  />
                  <div className="flex gap-2 justify-between !mt-2 ">
                    <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                      0 mi
                    </div>
                    <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                      150 000 mi
                    </div>
                  </div>
                </div> 
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Estimated Resale Value{" "}
                </div>
                <div className="col-span-6 text-white">$4,000.00</div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Out-of-Service Date
                </div>
                <div className="col-span-6 text-white">-</div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Out-of-Service Odometr
                </div>
                <div className="col-span-6 text-white">-</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#171717] border-none text-white mt-4">
          <CardHeader className="p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">Purchase Details</CardTitle>
              <Button variant="ghost" className="text-emerald-500 text-xs font-medium p-0 h-auto hover:bg-transparent hover:text-emerald-500 hover:underline">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">Purchase Vendor</div>
                <div className="col-span-6 text-white">- </div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">Purchase Price</div>
                <div className="col-span-6 text-white">$10,000.00</div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">Purchase Date</div>
                <div className="col-span-6 text-white">01/01/2023</div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Purchase Odometr{" "}
                </div>
                <div className="col-span-6 text-white">10 000 mi</div>
              </div>
              <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4 items-center">
                <div className="col-span-6 text-gray-400">
                  Purchase Comments
                </div>
                <div className="col-span-6 text-white">-</div>
              </div>
            </div>
          </CardContent>
        </Card> 
      </div>

      <div className="col-span-12 lg:col-span-6">
        <Card className="bg-[#171717] border-none text-white">
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Loan/Lease Details</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
          <p className="text-center text-neutral-400 text-xs font-normal font-['Inter'] leading-3">Add a loan or lease for this vehicle to keep track of your monthly payments - these expenses will be included in your asset&apos;s total cost, cost per meter reporting, and dashboard metrics in the future</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FinancialDetail;
