"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus, Search, ChevronDown, Filter } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DropdownFilter from "../../../../components/table-filter/VehicleTypeFilter";
import VehicleFilter from "@/components/table-filter/VehicleFilter";
import VehicleGroup from "@/components/table-filter/VehicleGroup";
import InspectionHistoryTable from "@/components/inspection/InspectionHistoryTable";

const vehicles = Array(15).fill({
  vehicle: "2100 [2016 Ford F-150]",
  vehicleGroup: "Management",
  vehicleGroupTooltip: "USA / Midwest Region / Chicago / Management",
  submitted: "Fri, Feb 14, 2025 8:19am",
  duration: "10m",
  inspectionForm: "Driver Vehicle Inspection Report (Simple)",
  maintenanceTaskster:
    "Engine Oil & Filter Replacement; Brake Inspection; +2 more",
  user: "David Garcia",
  locationException: "19 of the inspection items were completed more than 100 meters away from the center of the inspection location.",
  failedItems: "Windshield and Wipers/Washers",
  commentstooltip:"Comments attached",
  imagetooltip:"Photos attached",
});
type Vehicle = {
  id: string;
  name: string;
  status: string;
};
const vehiclesdrop: Vehicle[] = [
  { id: "1", name: "2100 [2016 Ford F-150]", status: "Active" },
  { id: "2", name: "2100 [2016 SUV F-150]", status: "Inactive" },
];
const vehicleGroup = [
  { id: "V005", country: "USA", region: "Southeast Region", state: "Atlanta" },
  { id: "V006", country: "USA", region: "Southeast Region", state: "Miami" },
];
const intenanceTasks = [
  "Drive Vehicle Inspection Report (Simple)",
];
const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedIntenanceTasks, setSelectedIntenanceTasks] = useState<
    string[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle[]>([]);
  const [selectedTypesGroup, setSelectedTypesGroup] = useState<
    { id: string; country: string; region: string; state: string }[]
  >([]);

  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();
  return (
    <>
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
              Inspection History
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Header Actions */}
      <div className="flex flex-wrap justify-between items-centre mb-4 gap-2">
        <h2 className="text-neutral-50 text-3xl font-semibold">
          Inspection History
        </h2>
        <Button
          variant="outline"
          className="flex items-center h-10"
          onClick={() => router.push("/inspection-history/new")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Start Inspection
        </Button>
      </div>

      <div className="flex gap-1 md:gap-5 mb-2 items-center">
        {/* Main tabs container - will wrap on small screens */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex items-center text-sm gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
            {["All", "Submissions with Failed Items"].map((tab) => (
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

      {/* Filters & Search */}
      <div className="flex space-x-2 mb-1 ">
        <div className="relative w-full md:w-1/2 lg:w-1/5 mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-black text-white border-[#27272A] w-full h-10"
          />
        </div>
        <div className="hidden xl:flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-transparent text-white border-[#27272A] "
              >
                Inspection Submitted
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 bg-black text-white border border-[#27272A] rounded-lg shadow-lg">
              {/* Calendar for Date Range */}
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                initialFocus
                className="bg-black text-white"
              />
            </PopoverContent>
          </Popover>
          <DropdownFilter
            label="Inspection Form"
            items={intenanceTasks}
            selectedItems={selectedIntenanceTasks}
            setSelectedItems={setSelectedIntenanceTasks}
          />
          <VehicleFilter
            label="Vehicle"
            items={vehiclesdrop}
            selectedItems={selectedVehicle}
            setSelectedItems={setSelectedVehicle}
          />
          <VehicleGroup
            label="Vehicle Groups"
            items={vehicleGroup}
            selectedItems={selectedTypesGroup}
            setSelectedItems={setSelectedTypesGroup}
          />

          <Button
            variant="outline"
            className="flex items-center gap-2 h-10 mb-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Filter />
            Filters
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <InspectionHistoryTable
        vehicles={vehicles}
        isOpen={isOpen}
        toggleFilterPanel={toggleFilterPanel}
      />
    </>
  );
};

export default Pages;
