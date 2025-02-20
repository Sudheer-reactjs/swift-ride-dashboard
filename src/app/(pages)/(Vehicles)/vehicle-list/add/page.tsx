"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import VehicleDetails from "@/components/vehicle-list/add-vehicle/VehicleDetails";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Maintenance from "@/components/vehicle-list/add-vehicle/Maintenance";
import Lifecycle from "@/components/vehicle-list/add-vehicle/Lifecycle";
import Financial from "@/components/vehicle-list/add-vehicle/Financial";
import Specifications from "@/components/vehicle-list/add-vehicle/Specifications";
import Setting from "@/components/vehicle-list/add-vehicle/Setting";
const AddVehicle = () => {
  const [activeTab, setActiveTab] = useState("Details");

  const tabs = [
    "Details",
    "Maintenance",
    "Lifecycle",
    "Financial",
    "Specifications",
    "Settings",
  ];

  const handleCancel = () => {
    // Add cancel logic here
    console.log("Cancel clicked");
  };

  const handleSave = () => {
    // Add save logic here
    console.log("Save clicked");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSaveAndAddAnother = () => {
    // Add save and add another logic here
    console.log("Save and add another clicked");
  };

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
              Vehicle Replacement Analysis
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
      New Vehicle
      </h2>        
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-14 size-span">
  {/* Sidebar */}
  <aside className="w-full lg:w-64 lg:sticky lg:top-20 self-start overflow-y-auto">
    <nav className="space-y-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`w-full text-left py-2 px-4 rounded transition-all ${
            activeTab === tab
              ? "text-emerald-500 bg-neutral-900"
              : "hover:text-emerald-500 hover:bg-neutral-900"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Buttons */}
          <div className="flex justify-end mb-6 space-x-2 m:dspace-x-4">
            <Button variant="outline" onClick={handleCancel} className="border-0 h-10">
              Cancel
            </Button>
            <Button variant="outline" className="h-10">Add Multiple Vehicles</Button>
            <Button
              className="bg-emerald-800 text-white hover:bg-emerald-700 h-10"
              onClick={handleSave}
            >
              Save Vehicle
            </Button>
          </div>

          {/* Content */}
          <div >
            {activeTab === "Details" && <VehicleDetails />}
            {activeTab === "Maintenance" && <Maintenance />} 
            {activeTab === "Lifecycle" && <Lifecycle />}  
            {activeTab === "Financial" && <Financial />}  
            {activeTab === "Specifications" && <Specifications />} 
            {activeTab === "Settings" && <Setting />} 
            {/* Add other tab components here */}
          </div>
              
          {/* Bottom Buttons */}
          <hr className="my-5" />
          <div className="flex justify-between">
          <Button variant="outline" onClick={handleCancel} className="border-0 h-10">
              Cancel
            </Button>
            <div className="space-x-2 m:dspace-x-4">
            <Button variant="outline" className="h-10">Add Multiple Vehicles</Button>
            <Button
              className="bg-emerald-800 text-white hover:bg-emerald-700 h-10"
              onClick={handleSave}
            >
              Save Vehicle
            </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddVehicle;
