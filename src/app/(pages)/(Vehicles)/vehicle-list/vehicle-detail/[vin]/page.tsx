"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Bell,
  ChevronDown,
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
import Overview from "@/components/vehicle-detail/overview";
import Specs from "@/components/vehicle-detail/specs";
import Financial from "@/components/vehicle-detail/Financial";
import ServiceHistory from "@/components/vehicle-detail/ServiceHistory";
import InspectionHistory from "@/components/vehicle-detail/InspectionHistory";
import WorkOrders from "@/components/vehicle-detail/WorkOrders";
import ServiceReminders from "@/components/vehicle-detail/ServiceReminders";
import SensorDataSnapshots from "@/components/vehicle-detail/SensorDataSnapshots";

const VehicleDetail = () => {
  const [activeTab, setActiveTab] = useState("specs");

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA] ">
              Vehicles
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
              Vehicle Detail
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between py-4  items-center max-h-24 m-4 rounded-lg">
        <div className="flex items-center justify-between  gap-4 ">
          <Image
            src="https://placehold.co/80x80"
            alt="Vehicle"
            width={80}
            height={70}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">1100 [2018 Toyota Prius]</h2>
            <p className="">
              Car • 2018 Toyota Prius • JTDKBRFU9J3059307 • 6TJR244
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="">• 20,811 mi</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full" />
                Active
              </div>
              <div className="flex items-center gap-2">
                <span className="">• Management</span>{" "}
                <GitBranch className="w-3 h-3" />
              </div>
              <Link
                href={"/fdsf"}
                className="text-[#047857] cursor-pointer hover:underline"
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
          <Button className="bg-[#047857] h-10 hover:bg-[#047857">
            <Plus className="w-4 h-4" /> Add
          </Button>
        </div>
      </div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[90%] border-b border-gray-700 "
      >
        <Tabs.List className="flex space-x-4 px-4">
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
                "px-4 py-2 text-sm font-medium transition-colors",
                "text-gray-400 hover:text-white",
                "data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Trigger
            value="more"
            className={cn(
              "px-4 py-2 text-sm font-medium flex items-center gap-1",
              "text-gray-400 hover:text-white",
              "data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400"
            )}
          >
            More <ChevronDown size={16} />
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div className="grid grid-cols-12 gap-4 w-full">
        {activeTab === "overview" && <Overview />}
        {activeTab === "specs" && <Specs />}
        {activeTab === "financial" && <Financial/>}
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
