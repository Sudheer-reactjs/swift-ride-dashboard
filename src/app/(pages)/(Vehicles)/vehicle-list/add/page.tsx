"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import VehicleDetails from "@/components/vehicle-list/add-vehicle/VehicleDetails";

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

  const handleSaveAndAddAnother = () => {
    // Add save and add another logic here
    console.log("Save and add another clicked");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-4 flex items-center text-2xl">
        <span>Vehicles</span>
        <ChevronRight className="w-6 h-6" />
        <span>New Vehicle</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-6">
          <h2 className="text-xl font-semibold mb-4">New Vehicle</h2>
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
        <main className="flex-1 p-6">
          {/* Top Buttons */}
          <div className="flex justify-end mb-6 space-x-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="outline">Add Multiple Vehicles</Button>
            <Button
              className="bg-emerald-800 text-white hover:bg-emerald-700"
              onClick={handleSave}
            >
              Save Vehicle
            </Button>
          </div>

          {/* Content */}
          <div className="min-h-[calc(100vh-300px)]">
            {activeTab === "Details" && <VehicleDetails />}
            {/* Add other tab components here */}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <div className="space-x-4">
              <Button variant="outline" onClick={handleSaveAndAddAnother}>
                Save & Add Another
              </Button>
              <Button
                className="bg-emerald-800 text-white hover:bg-emerald-700"
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
