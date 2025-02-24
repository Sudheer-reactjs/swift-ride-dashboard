"use client";
import { Button } from "@/components/ui/button";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  GitBranch,
  MoreHorizontal,
  Pencil,
  Plus,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Overview from "@/components/vehicle-list/vehicle-detail/overview";
import Specs from "@/components/vehicle-list/vehicle-detail/specs";
import ServiceHistory from "@/components/vehicle-list/vehicle-detail/ServiceHistory";
import InspectionHistory from "@/components/vehicle-list/vehicle-detail/InspectionHistory";
import WorkOrders from "@/components/vehicle-list/vehicle-detail/WorkOrders";
import ServiceReminders from "@/components/vehicle-list/vehicle-detail/ServiceReminders";
import SensorDataSnapshots from "@/components/vehicle-list/vehicle-detail/SensorDataSnapshots";
import FinancialDetail from "@/components/vehicle-list/vehicle-detail/FinancialDetail";
import { useParams } from "next/navigation";

const VehicleDetail = () => {
  const [activeTab, setActiveTab] = useState("service-history");
  const {vin} = useParams();
  console.log(vin);

  return (
    <div className="flex w-full flex-col gap-6 size-span">
     <Link href="/vehicle-list" className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal">
       <ChevronLeft  className="text-[#A1A1AA]"/> Vehicles</Link>
      <div className="flex justify-between items-center  rounded-lg">
        <div className="flex items-center justify-between  gap-4 ">
          <Image
            src="/images/profile.png"
            alt="Vehicle"
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <div>
            <h2 className="text-lg font-semibold">1100 [2018 Toyota Prius]</h2>
            <p className="text-neutral-50 text-xs ">
              Car • 2018 Toyota Prius • JTDKBRFU9J3059307 • 6TJR244
            </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 mt-2 text-neutral-50 text-xs font-normal">
              <span className="">20,811 mi</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full" />
                Active
              </div>
              <div className="flex items-center gap-2">
                <span className="">Management</span>{" "}
                <GitBranch className="w-3 h-3" />
              </div>
              <Link
                href={"/fdsf"}
                className="text-emerald-500 text-xs font-normal underline leading-3"
              >
                Jacob Silva
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mx-3">
          <Button variant="outline" className="h-10">
            <Bell />
            Watch
          </Button>
          <Button variant="outline" className="h-10">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <Button className="h-10" variant="outline">
            <Pencil className="w-4 h-4" /> Edit
          </Button>
          <Button className="flex gap-2 bg-[#047857] text-neutral-50 text-sm font-medium h-10 hover:bg-[#047857">
            <Plus className="w-4 h-4" /> Add <ChevronDown/>
          </Button>
        </div>
      </div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[90%] border-b  border-[#262626]  "
      >
        <Tabs.List className="flex">
          {[
            { id: "overview", label: "Overview" },
            { id: "specs", label: "Specs" },
            { id: "financial", label: "Financial" },
            { id: "sensor-data", label: "Sensor Data Snapshots" },
            { id: "service-history", label: "Service History" },
            { id: "inspection-history", label: "Inspection History" },
            { id: "work-orders", label: "Work Orders" },
            { id: "service-reminders", label: "Service Reminders" },
          ].map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              className={cn(
                " px-2.5 py-2 transition-colors text-neutral-300 text-xs font-medium",
                "text-neutral-300 border-b-2 border-transparent hover:text-white",
                "data-[state=active]:text-emerald-600 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Trigger
            value="more"
            className={cn(
              "px-2.5 py-2 flex items-center gap-1 text-xs font-normal",
              "text-neutral-300 border-b-2 border-transparent  hover:text-white",
              "data-[state=active]:text-emerald-600 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600"
            )}
          >
            More <ChevronDown size={16} />
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div className="grid grid-cols-12 gap-4 w-full">
        {activeTab === "overview" && <Overview />}
        {activeTab === "specs" && <Specs />}
        {activeTab === "financial" && <FinancialDetail/>}
        {activeTab === "sensor-data" && <SensorDataSnapshots />}  
        {activeTab === "service-history" && <ServiceHistory/>}
        {activeTab === "inspection-history" && <InspectionHistory/>}
        {activeTab === "work-orders" && <WorkOrders />}
        {activeTab === "service-reminders" && <ServiceReminders />}

        
      </div>
    </div>
  );
};

export default VehicleDetail;
