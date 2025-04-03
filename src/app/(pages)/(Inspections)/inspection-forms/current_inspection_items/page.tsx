"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";



const tabs = [
  { label: "Active", color: "" },
  { label: "Archived", color: "" },
];
;
const Pages = () => {
  const [selectedTab, setSelectedTab] = useState("Active");

  return (
    <div className="flex w-full flex-col gap-5 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA]">
            Inspections
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA]">
            Inspection Forms
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
            Driver Vehicle Inspection Report (Simple)
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col items-start gap-5">
        <h2 className="text-2xl font-semibold">Driver Vehicle Inspection Report (Simple)</h2>
        <div className="inline-flex flex-wrap justify-start items-start gap-4">
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch opacity-60 justify-start text-neutral-50 text-xs leading-none">Description</div>
        <div className="justify-start text-neutral-50 text-sm  leading-tight">As required by the US Dept. of Transport</div>
    </div>
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch opacity-60 justify-start text-neutral-50 text-xs  leading-none">Location Exception Tracking</div>
        <div className="self-stretch justify-start text-neutral-50 text-sm  leading-tight">Enabled</div>
    </div>
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch opacity-60 justify-start text-neutral-50 text-xs leading-none">Prevent Use of Stored Photos</div>
        <div className="self-stretch justify-start text-neutral-50 text-sm   leading-tight">Disabled</div>
    </div>
</div>
      </div>
      <div className="flex gap-1 md:gap-5 mb-2 items-center">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex items-center text-sm gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
            {tabs.map(({ label, color }) => (
              <Button
                key={label}
                variant={selectedTab === label ? "secondary" : "ghost"}
                onClick={() => setSelectedTab(label)}
                className={cn(
                  "text-xs text-zinc-500 sm:text-sm flex items-center rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-all",
                  selectedTab === label
                    ? "bg-[#171717] text-white"
                    : "hover:bg-[#171717]"
                )}
              >
                <div className="flex justify-center items-center min-w-0 sm:min-w-16">
                  {color && (
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: color }}
                    ></span>
                  )}
                  {label}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Pages;
