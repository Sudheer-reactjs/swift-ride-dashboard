import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Settings2 } from "lucide-react";
import { Input } from "@/components/ui/input";

// Tab data for loop
const tabs = [
  { value: "tasks", label: "Service Tasks" },
  { value: "labor", label: "Labor" },
  { value: "parts", label: "Parts" },
];
const MaintenanceLineItemsCard = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-50 text-base font-medium">Line Items</h2>
        <Button className="text-emerald-500 text-xs font-medium bg-transparent p-0 hover:bg-transparent">
          View Service Reminders
        </Button>
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 relative ">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-2.5 py-2 transition-colors text-xs font-medium text-neutral-300 border-b-2 border-transparent hover:text-white rounded-none 
             data-[state=active]:text-emerald-600 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:bg-transparent"
            >
              {tab.label}
            </TabsTrigger>
          ))}
          <Button className="text-zinc-400  text-xs font-medium bg-transparent p-0 hover:bg-transparent absolute right-0 z-10">
            <Settings2 size={20} className="text-zinc-400" />
            Customize
          </Button>
        </TabsList>

        <TabsContent value="tasks" className="py-6 m-0 space-y-4">
          <div className="hidden md:block relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 text-[14px] text-[#A1A1AA] font-light pr-4 py-2 h-10 rounded-md border border-[#27272A] focus:border-[#27272A] focus:ring focus:ring-border-[#27272A] transition bg-bgBlack w-full"
            />
          </div>
          <p className="text-zinc-400 text-sm text-center w-full">
            No Maintenance Task line items added
          </p>
          <div className="w-full text-center">
            <Button className="h-10 px-4 py-2 bg-zinc-950 hover:bg-zinc-950 rounded-md border border-zinc-800 justify-center items-center gap-2 inline-flex text-neutral-50 text-sm font-medium">
              Add Maintenance Task
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="labor" className="py-6 m-0 space-y-4">
          <div className="flex justify-center items-center h-40 text-gray-400">
            Labor
          </div>
        </TabsContent>

        <TabsContent value="parts" className="py-6 m-0 space-y-4">
          <div className="flex justify-center items-center h-40 text-gray-400">
            Parts
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MaintenanceLineItemsCard;
