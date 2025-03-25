"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Filter,
  Plus,
  Search,
  ChevronDownIcon,
  EllipsisVertical,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DropdownFilter from "../../../../components/table-filter/VehicleTypeFilter";
import { cn } from "@/lib/utils";
import VehicleGroup from "@/components/table-filter/VehicleGroup";
import InspectionFilter from "@/components/inspection/inspection-forms/InspectionFilter";

const vehicleType = ["ATV", "Boat", "Bus", "Car", "SUV", "Van"];

const form = ["Driver Vehicle Inspection Report (Simple)"];

const tabs = [
  { label: "Active", color: "" },
  { label: "Archived", color: "" },
];
const vehicleGroup = [
  { id: "V005", country: "USA", region: "Southeast Region", state: "Atlanta" },
  { id: "V006", country: "USA", region: "Southeast Region", state: "Miami" },
];
const vehicles = Array(0).fill({ 
    vehicle: "",
    inspectionForm: "",
    status: "",
    nextDue:"",
    lastInspected: "",
    schedule: "",
    frequency: "",
    manuallyOverridden: "",
  });
const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedForm, setSelectedForm] = useState<string[]>([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Active");
  const [selectedTypesGroup, setSelectedTypesGroup] = useState<
    { id: string; country: string; region: string; state: string }[]
  >([]);
  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-4 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA]">
            Inspections
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
            Inspection Forms
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap justify-between items-start md:items-center gap-2">
        <h2 className="text-2xl font-semibold">Inspection Forms</h2>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center h-10 ">
            <EllipsisVertical className="h-4 w-2" />
            Start Inspcetion
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
          <Button
          variant="outline"
          className="flex items-center h-10"
        >
          <Plus className="mr-2 h-4 w-4" />
          Start Inspection
        </Button>
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

      {/* Filters & Search */}
      <div className="flex space-x-2 mb-1 flex-wrap">
        <div className="relative w-full md:w-1/4 lg:w-1/5 mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-transparent text-white border-[#27272A] w-full h-10"
          />
        </div>
        <div className="hidden lg:flex flex-wrap gap-2">
          <DropdownFilter
            label="Inspection Form"
            items={form}
            selectedItems={selectedForm}
            setSelectedItems={setSelectedForm}
          />
            <VehicleGroup
            label="Vehicle Groups"
            items={vehicleGroup}
            selectedItems={selectedTypesGroup}
            setSelectedItems={setSelectedTypesGroup}
          />
          <DropdownFilter
            label="Vehicle Type"
            items={vehicleType}
            selectedItems={selectedVehicleType}
            setSelectedItems={setSelectedVehicleType}
          />
        
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 h-10 mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter />
          Filters
        </Button>
      </div>
      <InspectionFilter
        vehicles={vehicles}
        isOpen={isOpen}
        toggleFilterPanel={toggleFilterPanel}
      />
    </div>
  );
};

export default Pages;
