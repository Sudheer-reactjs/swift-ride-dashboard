"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/maintenance-history"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Maintenance Tasks
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
        Accelerator Pedal Inspect
        </h2>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2 text-neutral-50 "
          >
            <Pen /> Edit
          </Button>
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <Card className="bg-[#171717] border-none text-white rounded-md ">
            <CardHeader className="p-4">
              <CardTitle className="text-neutral-50 text-base font-medium">
                Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4 mt-2"> 
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Vehicle</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-medium ">Accelerator Pedal Inspect </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Alias</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Description</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Maintenance Task Groups</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Subtasks</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Maintenance Entries</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">0</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Maintenance Programs</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-menormaldium ">0</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Maintenance Reminders</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">0</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Work Orders</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">0</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Default Category Code</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">4 - Engine/Motor Systems</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Default System Code</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">044 - Fuel System</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Default Assembly Code</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">007 - Throttle Controls</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-4 text-zinc-400 text-sm font-normal ">Default Reason For Repair Code</div>
                  <div className="col-span-8 text-neutral-50 text-sm font-normal ">-</div>
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
