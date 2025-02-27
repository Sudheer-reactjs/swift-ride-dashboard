"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent, 
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Filter,
  Plus,
  X,
  Lock,
  Search,  
  Users,
  Globe,
  PlusIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DropdownFilter from "../../../../components/vehicle-list/add-vehicle/DropdownFilter";
import VehicleTable from "../../../../components/vehicle-list/add-vehicle/VehicleTable";

const vehicles = Array(15).fill({
  name: "1100 [2018 Toyota Prius]",
  operator: "Jacob Silva",
  year: 2018,
  make: "Toyota",
  model: "Prius",
  vin: "JTDKBRFU9J3059307",
  status: "Active",
  type: "Pickup Truck",
  group: "Management",
  currentmeter: "100,000",
  licenseplate: "8DZM123",
  watchers: "1",
});

const vehicleTypes = [
  "ATV",
  "Boat",
  "Bus",
  "Car",
  "Forklift",
  "Generator",
  "Loader",
];
const vehicleGroups = [
  "Management",
  "Logistics",
  "Operations",
  "Maintenance",
  "Security",
];
const vehicleStatuses = [
  "Active",
  "Inactive",
  "In Service",
  "Out of Service",
  "Archived",
];
const vehicleWatchers = ["Jacob Silva", "John Doe", "Jane Doe"];

const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [addTab, setAddTab] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
 
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("private");

  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAddTab(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <h2 className="text-2xl font-semibold">Vehicles</h2>
        <Button
          variant="outline"
          className="flex items-center h-10 w-[136px]"
          onClick={() => router.push("/vehicle-list/add")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-2 mb-2">
        {/* Main tabs container - will wrap on small screens */}
        <div className="inline-flex flex-wrap items-center gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
          {["All", "Assigned", "Unassigned", "Archived"].map((tab) => (
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
        
        {/* Add tab button */}
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setAddTab(!addTab)}
            className="text-xs sm:text-sm px-2 py-1 sm:py-2 bg-[#1C1917] lg:bg-none rounded-full"
          >
            <PlusIcon className="h-3 w-3 mr-1" /><span className="hidden lg:flex">Add Tab</span> 
          </Button>
          {addTab &&  (
            <Card
              ref={dropdownRef}
              className={cn(
                "absolute  mt-1 w-64 lg:w-96 bg-black text-white border-[2px] border-[#171717] rounded-md shadow-lg p-4 z-10"
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
        <DropdownFilter
          label="Vehicle Type"
          items={vehicleTypes}
          selectedItems={selectedTypes}
          setSelectedItems={setSelectedTypes}
        />
        <DropdownFilter
          label="Vehicle Group"
          items={vehicleGroups}
          selectedItems={selectedGroups}
          setSelectedItems={setSelectedGroups}
        />
        <DropdownFilter
          label="Vehicle Status"
          items={vehicleStatuses}
          selectedItems={selectedStatuses}
          setSelectedItems={setSelectedStatuses}
        />
        <DropdownFilter
          label="Watchers"
          items={vehicleWatchers}
          selectedItems={selectedWatchers}
          setSelectedItems={setSelectedWatchers}
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

      {/* Table Container */}
      <VehicleTable 
      vehicles={vehicles}
      isOpen={isOpen}
      toggleFilterPanel={toggleFilterPanel}
       />

      {/* Pagination */}
      
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

export default Pages;
