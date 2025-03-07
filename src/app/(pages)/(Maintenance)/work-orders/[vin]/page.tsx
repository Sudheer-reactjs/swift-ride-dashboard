"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, ChevronLeft, Ellipsis, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Page = () => {
  const [isWatching, setIsWatching] = useState(false);
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/work-orders"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Work Orders
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
        Work Order #1
        </h2>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2"
            onClick={() => setIsWatching((prev) => !prev)}
          >
            {isWatching ? <BellOff /> : <Bell />}
            {isWatching ? "Unwatch" : "Watch"}
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2"
          >
            <Ellipsis />
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2 text-neutral-50 opacity-50"
          >
            <Pen /> Edit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <Card className="bg-[#171717] border-none text-white">
            <CardHeader className="p-4">
              <CardTitle className="text-neutral-50 text-base font-normal">
                Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <h5 className="text-neutral-50 text-sm font-normal">
                All Fields
              </h5>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400 ">Vehicle</div>
                  <div className="col-span-6 text-white flex gap-2 items-center">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Operator"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <p className="text-emerald-500 text-xs font-normal underline">
                      2100 [2016 Ford F-150]
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Status
                  </div>
                  <div className="col-span-6 text-white"><div className="flex items-center min-w-0 sm:min-w-16">
                    <span  className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: "#06B6D4" }} /> 
                    Open
                    </div></div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Repair Priority Class
                  </div>
                  <div className="col-span-6 text-white">
                  <div className="flex items-center min-w-0 sm:min-w-16">
                       <span  className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: "#ff0000" }} /> 
                       Emergency
                      </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Issued By
                  </div>
                  <div className="col-span-6 text-white flex gap-2 items-center">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Operator"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <p className="text-xs font-normal ">
                    Jacob Sliva
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Assigned To
                  </div>
                  <div className="col-span-6 text-white flex gap-2 items-center">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Operator"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <p className=" text-xs font-normal ">
                    Jacob Sliva
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Issue Date
                  </div>
                  <div className="col-span-6 text-white">
                  01/04/2025 8:27pm
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Scheduled Start Date</div>
                  <div className="col-span-6 text-white">01/04/2025 8:27pm</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Expected Completion Date
                  </div>
                  <div className="col-span-6 text-white flex items-center justify-between">
                  01/04/2025 8:27pm
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Actual Completion Date</div>
                  <div className="col-span-6 text-white">01/04/2025 8:27pm</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Users to Noify</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Alert Time
                  </div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Duration</div>
                  <div className="col-span-6 text-white">0 seconds</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Description</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Vendor</div>
                  <div className="col-span-6 text-white">
                 -
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">PO Number</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#171717] border-none text-white">
            <CardHeader className="p-4">
              <CardTitle className="text-neutral-50 text-base font-normal">
              Resolved Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
             <Link href="#" className="text-emerald-500 text-xs font-normal underline">#5 - Brake light</Link>
             <p className=" text-gray-400">Driver side brake light is out</p> 
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <Card className="bg-[#171717] text-white border-0 shadow-none rounded-lg">
            <CardHeader className="p-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Line Items</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
            <div className="text-center text-zinc-400 text-sm m-auto my-8 font-normal w-full leading-tight">No issues to show. If this maintenance entry resolves any issues, you can add them by editing the maintenance entry.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
