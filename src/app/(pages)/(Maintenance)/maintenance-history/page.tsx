/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Filter,
  Plus,
  Lock,
  Search,
  Users,
  Globe,
  PlusIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DropdownFilter from "../../../../components/table-filter/VehicleTypeFilter";
import MaintenanceHistoryTable from "@/components/maintenance/maintenance-history/MaintenanceHistoryTable";
import VehicleFilter from "@/components/table-filter/VehicleFilter";
import VehicleGroup from "@/components/table-filter/VehicleGroup";
import WatchersFilter from "@/components/table-filter/WatchersFilter";
import { ScrollArea } from "@/components/ui/scroll-area";

const vehicles = Array(15).fill({
  vehicle: "2100 [2016 Ford F-150]",
  actualCompletion: "01/19/2025 11:08am",
  watchers: "-",
  repairPriorityClass: "-",
  meter: "55,208 mi",
  maintenanceTaskster: "Engine Oil & Filter Replacement; Brake Inspection; +2 more",
  issues: "-",
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
const vehicleWatchers = ["Jacob Silva", "John Doe", "Jane Doe"];
const maintenanceTasks = [
  "ABS Control Module Replacement",
  "ABd Control Module Replacement",
  "ABf Control Module Replacement",
];
const filterOptions = [
  "Filter 1",
  "Filter 2",
  "Filter 3",
  "Filter 4",
  "Filter 5",
];
const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
  const [selectedMaintenanceTasks, setSelectedMaintenanceTasks] = useState<
    string[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);
  const [addTab, setAddTab] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("private");
  const [filterOpen, setFilterOpen] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle[]>([]);
  const [selectedTypesGroup, setSelectedTypesGroup] = useState<
    { id: string; country: string; region: string; state: string }[]
  >([]);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const getIcon = () => {
    switch (selected) {
      case "private":
        return <Lock size={16} className="text-gray-400 mr-2" />;
      case "team":
        return <Users size={16} className="text-gray-400 mr-2" />;
      case "public":
        return <Globe size={16} className="text-gray-400 mr-2" />;
      default:
        return null;
    }
  };

  const router = useRouter();
  return (
    <>
      {/* Header Actions */}
      <div className="flex flex-wrap justify-between items-centre mb-4 gap-2">
        <h2 className="text-neutral-50 text-3xl font-semibold">
          Maintenance History
        </h2>
        <Button
        variant="outline"
        className="flex items-center h-10"
        onClick={() => router.push("/maintenance-history/new")}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Vehicle
      </Button>
      </div>

      <div className="flex gap-1 md:gap-5 mb-2 items-center">
        {/* Main tabs container - will wrap on small screens */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex items-center text-sm gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
            {["All"].map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? "secondary" : "ghost"}
                onClick={() => setSelectedTab(tab)}
                className={cn(
                  "text-xs sm:text-sm flex items-center rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-all",
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

        {/* Add tab button */}
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setAddTab(!addTab)}
            className="text-xs sm:text-sm px-2 flex items-center min-w-9 min-h-9 justify-center py-1 sm:py-2 rounded-full  bg-zinc-800 lg:bg-transparent  lg:min-w-[auto]  hover:bg-transparent"
          >
            <PlusIcon className="h-3 w-3 " />
            <span className="hidden lg:flex ml-1">Add Tab</span>
          </Button>
          {addTab && (
            <Card
              // ref={dropdownRef}
              className={cn(
                "absolute left-0 mt-1 w-64 lg:w-96 bg-black text-white border-[2px] border-[#171717] rounded-md shadow-lg p-4 z-10"
              )}
            >
              {/* Search Input */}
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Search views"
                  className="w-full p-2 pl-8 bg-black h-10 text-white rounded-md border-[0.5px] border-[#171717]"
                />
              </div>

              {/* Saved Views Section */}
              <div className="mt-3 border-t border-[#171717]">
                <div className="flex items-center mt-3 justify-between text-sm text-white">
                  <div>
                    <span>MY SAVED VIEWS</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white box-border "
                    >
                      ...
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-sm"
                    onClick={() => setOpen(true)}
                  >
                    + Add Filter
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-white text-sm my-2">
                    You havent created any views
                  </p>
                </div>
              </div>

              {/* Standard Views Section */}
              <div className="mt-4">
                <span className="text-sm text-white">STANDARD VIEWS</span>
                <div className="flex flex-col mt-2 space-y-2 ">
                  {["All", "Assigned", "Unassigned", "Archived"].map((tab) => (
                    <Button
                      key={tab}
                      variant="ghost"
                      className="flex justify-start w-full text-sm  bg-black hover:bg-[#171717] p-2 rounded-md"
                    >
                      ✓ {tab}{" "}
                      <span className="border bg-white  text-black border-gray-600 px-1 box-border rounded-sm text-xs">
                        S
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          )}
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
          <DropdownFilter
            label="Maintenance Tasks"
            items={maintenanceTasks}
            selectedItems={selectedMaintenanceTasks}
            setSelectedItems={setSelectedMaintenanceTasks}
          />
          <WatchersFilter
            label="Watchers"
            items={vehicleWatchers}
            selectedItems={selectedWatchers}
            setSelectedItems={setSelectedWatchers}
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-10 mb-2"
            >
              <Filter />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4 bg-zinc-950 rounded-md shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06)] border-0">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <div className="text-neutral-50 text-sm font-medium leading-tight">
                Filters
              </div>
              <button
                className="text-zinc-400 text-sm font-medium leading-tight bg-transparent"
                onClick={() => setSelectedFilters([])}
              >
                Clear all filters
              </button>
            </div>

            {/* Scrollable Filter List */}
            <ScrollArea className="max-h-80 overflow-y-auto custom-scrollbar">
              <ul className="text-neutral-50 text-sm font-normal leading-tight">
                {filterOptions.map((filter, index) => (
                  <li
                    key={filter}
                    className={`cursor-pointer p-4 text-neutral-50 text-sm font-normal 
      ${
        selectedFilters.includes(filter) ? "bg-[#065f46]" : "hover:bg-[#262626]"
      } 
      ${index !== filterOptions.length - 1 ? "border-b border-zinc-800" : ""}`}
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            </ScrollArea>

            {/* Footer with Apply & Cancel Buttons */}
            <div className="flex justify-between pt-4 gap-2 border-t border-zinc-800 ">
              <Button
                variant="outline"
                className="text-sm min-w-28 bg-zinc-950 rounded-md h-10 px-4 py-2 border border-zinc-800  text-neutral-50"
                size="sm"
              >
                <PlusIcon /> Add Filter
              </Button>
              <Button
                variant="default"
                className="text-sm min-w-28 bg-neutral-50 rounded-md h-10 px-4 py-2  text-zinc-900"
                size="sm"
                disabled={selectedFilters.length === 0}
              >
                Apply
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Table Container */}
      <MaintenanceHistoryTable
        vehicles={vehicles}
        isOpen={isOpen}
        toggleFilterPanel={toggleFilterPanel}
      />
    </>
  );
};

export default Pages;
