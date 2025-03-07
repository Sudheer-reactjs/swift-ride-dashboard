"use client";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Filter, Globe, Lock, Plus, PlusIcon, Search, TableProperties, Users, X } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import WorkOrdersTable from "@/components/maintenance/work-oders/WorkOrdersTable";
import VehicleStatus from "@/components/table-filter/VehicleStatusFilter";
import VehicleFilter from "@/components/table-filter/VehicleFilter";
import VehicleGroup from "@/components/table-filter/VehicleGroup";
import DropdownFilter from "@/components/table-filter/VehicleTypeFilter";
const tabs = [
  { label: "All", color: "" },
  { label: "Open", color: "#06B6D4" },
  { label: "Pending", color: "#F59E0B" },
  { label: "Completed", color: "#15803D" },
];
const vehicleStatuses = [
    { id: "active", label: "Active", color: "bg-green-500" },
    { id: "in-shop", label: "In Shop", color: "bg-orange-500" },
    { id: "inactive", label: "Inactive", color: "bg-blue-500" },
    { id: "out-of-service", label: "Out of Service", color: "bg-red-500" },
    { id: "sold", label: "Sold", color: "bg-gray-500" },
  ];
  const vehicles = Array(15).fill({ 
    vehicle: "2100 [2016 Ford F-150]",
    number: "#1",
    status: "Open",
    repairPriorityClass:"Emergency",
    maintenanceTasks: "—",
    issueDate: "02.01.2025",
    expectedDate: "02.01.2025",
    assignedTo: "Jacob Silva",
    watchers: "1",
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
  const maintenanceTasks = [
    "ABS Control Module Replacement",
    "ABd Control Module Replacement",
    "ABf Control Module Replacement",
  ];
const Page = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [addTab, setAddTab] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("private");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState<
    { id: string; label: string; color: string }[]
  >([]); 
  const [selectedTypesGroup, setSelectedTypesGroup] = useState<
  { id: string; country: string; region: string; state: string }[]
>([]);
  const [selectedMaintenanceTasks, setSelectedMaintenanceTasks] = useState<
    string[]
  >([]);
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle[]>([]);
    const [activeView, setActiveView] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
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
                  {selectedTab === label && <span className="ml-1">...</span>}
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
      <div className="flex mb-1  flex-col md:flex-row gap-2 items-center">
      <div className="flex space-x-2 mb-1 w-full items-center">
        <div className="relative w-full md:w-1/2 lg:w-1/5">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-black text-white border-[#27272A] w-full h-10"
          />
        </div>
        <div className="hidden xl:flex flex-wrap gap-2">

          <VehicleStatus
            label="Status"
            items={vehicleStatuses}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
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
           <DropdownFilter
            label="Maintenance Tasks"
            items={maintenanceTasks}
            selectedItems={selectedMaintenanceTasks}
            setSelectedItems={setSelectedMaintenanceTasks}
          />

        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 h-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter />
          Filters
        </Button>
        </div>
        <div className="flex h-10 border gap-0.5 rounded-md p-0.5 items-center justify-center max-w-max">
        <Button
          variant="ghost"
          className={cn(
            "py-1 px-3.5 rounded-md transition-all text-zinc-500 h-8",
            activeView === "list" 
             ? "bg-neutral-800 text-white"
              : ""
          )}
          onClick={() => setActiveView("list")}
        >
          <TableProperties className="!w-5 !h-5" />
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "py-1 px-3.5 rounded-md transition-all text-zinc-500 h-8",
             activeView === "calendar"
             ? "bg-neutral-800 text-white"
              : ""
          )}
          onClick={() => setActiveView("calendar")}
        >
          <Calendar className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "py-1 px-3.5 rounded-md transition-all text-zinc-500 h-8",
            activeView === "history"
             ? "bg-neutral-800 text-white"
              : ""
          )}
          onClick={() => setActiveView("history")}
        >
          <Clock className="w-5 h-5" />
        </Button>
      </div>
      </div>
      <WorkOrdersTable
        vehicles={vehicles}
        isOpen={isOpen}
        toggleFilterPanel={toggleFilterPanel}
      />

      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-screen-md bg-[#171717] text-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center py-4 border-b border-gray">
              <DialogTitle className="text-xl font-semibold">
                New Saved View
              </DialogTitle>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={25} />
              </button>
            </div>

            {/* Body */}
            <div className=" space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-[#FAFAFA]">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Please Select"
                  className="mt-1 bg-[#09090B] border-[#27272A] text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-sm font-medium text-[#FAFAFA]">
                  Description
                </label>
                <Textarea
                  placeholder="Help others understand the purpose of this view (Optional)"
                  className="mt-1 bg-[#09090B] border-[#27272A] text-[#FAFAFA]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Shared With */}
              <div>
                <label className="block text-sm font-medium text-[#FAFAFA]">
                  Shared with
                </label>
                <Select onValueChange={(value) => setSelected(value)}>
                  <SelectTrigger className="mt-1 bg-[#09090B] border-[#27272A] text-white flex items-center">
                    <div className="flex items-center">
                      {getIcon()}
                      <SelectValue placeholder="Private" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-black border-[#27272A] text-white">
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-[18px] text-[#A1A1AA] mt-1">
                  {selected === "private"
                    ? "Visible only to you"
                    : selected === "team"
                    ? "Visible to your team"
                    : "Visible to everyone"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-end space-x-3">
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="text-[#FAFAFA] h-10 w-[65px] hover:text-white"
              >
                Cancel
              </Button>
              <Button className="bg-[#065F46] text-white h-10 w-[65px] hover:bg-green-900">
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Page;
