"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Page = () => {
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/subscribers"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Subscribers
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 md:w-20 md:h-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="Operator" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-base-foreground text-lg leading-7 font-semibold">
              Owayne Wallace
            </h2>
            <div className="inline-flex justify-start flex-col md:flex-row items-center gap-3 md:gap-10">
              <div className="inline-flex flex-col justify-center items-start gap-2">
                <div className="justify-start text-neutral-500 text-xs font-normal  leading-3">
                  Email
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="w-[153px] justify-center text-neutral-50 text-xs font-normal  leading-none">
                    owaynee@gmail.com
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-center items-start gap-2">
                <div className="justify-start text-neutral-500 text-xs font-normal leading-3">
                  Group
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="w-[153px] justify-center text-neutral-50 text-xs font-normal  leading-none">
                    Birmingham
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2 text-neutral-50 "
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
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400 ">First Name</div>
                  <div className="col-span-6 text-white flex gap-2 items-center">
                    <p className="text-xs font-normal">
                    1100 [2018 Toyota Prius]
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Middle Name
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    20 811 mi
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Email
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    20 811 mi
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Group
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    Birmingham
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#171717] border-none text-white">
            <CardHeader className="p-4">
              <CardTitle className="text-neutral-50 text-base font-normal">
              License Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
            <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  License Number
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    43332225
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  License Class
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    A
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Email
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    20 811 mi
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  License Photo
                  </div>
                  <div className="col-span-6 text-white">
                  <div className="justify-start text-[#2eb88a] text-sm font-medium underline ">photo.png</div>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <Card className="bg-[#171717] text-white border-0 shadow-none rounded-lg">
            <CardHeader className="p-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
            <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Mobile Phone Number
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    1100 [2018 Toyota Prius]
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Address
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    20 811 mi
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  City
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    Birmingham
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  State/Province/Region
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    Colorado
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  ZIP/Postal Code
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    32311
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Country
                  </div>
                  <div className="col-span-6 text-white">
                    <div className="flex items-center min-w-0 sm:min-w-16">
                    USA
                    </div>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
