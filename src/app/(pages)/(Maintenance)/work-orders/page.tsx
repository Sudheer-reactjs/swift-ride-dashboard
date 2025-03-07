"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
const Page = () => {
const [selectedTab, setSelectedTab] = useState("All");
  const router = useRouter();
  return (
    <>
      <div className="flex flex-wrap justify-between items-centre mb-4 gap-2">
        <h2 className="text-neutral-50 text-3xl font-semibold">Work Orders</h2>
        <Button
          variant="outline"
          className="flex items-center h-10 bg "
          onClick={() => router.push("/work-orders/new")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Work Order
        </Button>
      </div>
      <div className="flex gap-1 md:gap-5 mb-2 items-center">
        {/* Main tabs container - will wrap on small screens */}
                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <div className="inline-flex items-center text-sm gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
                    {["All", "Assigned", "Unassigned", "Archived"].map((tab) => (
                      <Button
                        key={tab}
                        variant={selectedTab === tab ? "secondary" : "ghost"}
                        onClick={() => setSelectedTab(tab)}
                        className={cn(
                          "text-xs text-zinc-500 sm:text-sm flex items-center rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-all",
                          selectedTab === tab
                            ? "bg-[#171717] text-white"
                            : "hover:bg-[#171717]"
                        )}
                      >
                        <div className="flex justify-center items-center min-w-0 sm:min-w-16">
                          {tab}
                          {selectedTab === tab && <span className="ml-1">...</span>}
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>


      </div>
    </>
  );
};

export default Page;
