"use client";
import { Button } from "@/components/ui/button";
import {
  Filter,
  Globe,
  Lock,
  Plus,
  Search,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
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
import DropdownSingleFilter from "@/components/table-filter/DropdownSingleFilter";
import DropdownListFilter from "@/components/table-filter/DropdownListFilter";
import SelectOptionFilter from "@/components/table-filter/SelectFilter";
import MaintenanceTasksTable from "@/components/maintenance/maintenance-tasks/MaintenanceTasksTable";

const tabs = [{ label: "Active" }, { label: "Archived" }];
const vehicles = Array(15).fill({
  name: "A/c System Test",
  description: "-",
  entries: "0",
  reminders: "0",

  programsnanceTasks: "0",
  orders: "02.01.0",
  repairCode: "-",
  categoryCode: "Chassis 1",
  systemCode: "Brakes 013",
  assemblyCode:"ABS, Anti-Lock System 011",
});
type code = {
  id: string;
  name: string;
};
const categoryCode: code[] = [
  {
    id: "1",
    name: "Air Conditioning, Heating & Ventilating System",
  },
  { id: "2", name: "Chassis" },
  { id: "3", name: "Electrical" },
];
const systemCode: code[] = [
  {
    id: "1",
    name: "Cab, Climate Control, Instrumentation, & Aerodynamic Devices",
  },
  { id: "2", name: "Cab & Sheet Metal" },
  {
    id: "3",
    name: "Instruments, Gauges, Warning & Shutdown Devices, & Meters",
  },
];

const maintenanceTasksType = ["Standard Tasks", "Custom Tasks"];
const Page = () => {
  const [selectedTab, setSelectedTab] = useState("Active");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("private");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaintenanceTasksType, setSelectedMaintenanceTasksType] =
    useState<string | null>(null);
  const [selectedWorkCategoryCode, setSelectedWorkCategoryCode] = useState<
    code[]
  >([]);
  useState<string | null>(null);
  const [selectedWorkSystemCode, setSelectedWorkSystemCode] = useState<code[]>(
    []
  );
  const [reminders, setReminders] = useState<string | null>(null);
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
        <h2 className="text-neutral-50 text-3xl font-semibold">
          Maintenance Tasks
        </h2>
        <Button
          variant="outline"
          className="flex items-center h-10 bg "
          onClick={() => router.push("/work-orders/new")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Maintenance Tasks
        </Button>
      </div>
      <div className="flex gap-1 md:gap-5 mb-2 items-center">
        {/* Main tabs container - will wrap on small screens */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
          <div className="inline-flex items-center text-sm gap-1 border-b border-neutral-800 w-full">
            {tabs.map(({ label }) => (
              <Button
                key={label}
                variant={selectedTab === label ? "secondary" : "ghost"}
                onClick={() => setSelectedTab(label)}
                className={cn(
                  "text-xs text-neutral-300 flex items-center rounded-none px-2.5 py-2 transition-all border-b  border-transparent hover:bg-transparent hover:text-emerald-600",
                  selectedTab === label
                    ? "text-emerald-600 bg-transparent border-emerald-600"
                    : ""
                )}
              >
                <div className="flex justify-center items-center min-w-0 sm:min-w-16">
                  {label}
                </div>
              </Button>
            ))}
          </div>
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
            <DropdownSingleFilter
              label="Maintenance Task Type"
              items={maintenanceTasksType}
              selectedItem={selectedMaintenanceTasksType}
              setSelectedItem={setSelectedMaintenanceTasksType}
            />
            <DropdownListFilter
              label="Default Category Code"
              items={categoryCode}
              selectedItems={selectedWorkCategoryCode}
              setSelectedItems={setSelectedWorkCategoryCode}
            />
            <DropdownListFilter
              label="Default System Code"
              items={systemCode}
              selectedItems={selectedWorkSystemCode}
              setSelectedItems={setSelectedWorkSystemCode}
            />

            <SelectOptionFilter
              label="Gas Service Reminders"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              selectedItem={reminders}
              setSelectedItem={setReminders}
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
      </div>
      <MaintenanceTasksTable
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
