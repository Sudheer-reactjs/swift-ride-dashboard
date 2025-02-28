"use client";
import {useState } from "react";
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
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DropdownFilter from "../../../../components/vehicle-list/add-vehicle/DropdownFilter";
import VehicleTable from "../../../../components/vehicle-list/add-vehicle/VehicleTable";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatusDropdown, { StatusItem } from "@/components/vehicle-list/add-vehicle/StatusDropdown";

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
  { id: "V001", name: "Tesla Model 3" },
  { id: "V002", name: "Ford Mustang" },
  { id: "V003", name: "BMW X5" },
];

const vehicleStatuses = [
  { id: 'active', label: 'Active', color: 'bg-green-500' },
  { id: 'in-shop', label: 'In Shop', color: 'bg-orange-500' },
  { id: 'inactive', label: 'Inactive', color: 'bg-blue-500' },
  { id: 'out-of-service', label: 'Out of Service', color: 'bg-red-500' },
  { id: 'sold', label: 'Sold', color: 'bg-gray-500' },
];
const vehicleWatchers = ["Jacob Silva", "John Doe", "Jane Doe"];

const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<{ id: string; name: string } | null>(null);
  console.log('selectedGroups:', selectedGroups);
  const [selectedStatuses, setSelectedStatuses] =  useState<StatusItem[]>([]);
  const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [addTab, setAddTab] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("private");

  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelectVehicle = (vehicle: { id: string; name: string; }) => {
    setSelectedGroups(vehicle);
    setQuery(`${vehicle.id} [${vehicle.name}]`);
  };

  
  const handleClearSearch = () => {
    setQuery("");
    setSelectedGroups(null);
  };
  const filteredVehicles = vehicleGroups.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(search.toLowerCase())
  );

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
        <h2 className="text-lg font-semibold">Vehicles</h2>
        <Button
          variant="outline"
          className="flex items-center h-10 "
          onClick={() => router.push("/vehicle-list/add")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      <div className="flex  gap-2 mb-2">
        {/* Main tabs container - will wrap on small screens */}
        <div className="inline-flex items-center text-sm gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
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
            className="text-xs sm:text-sm px-2 flex items-center justify-center py-1 sm:py-2 bg-[#1C1917] lg:bg-black rounded-full min-w-[32px] lg:min-w-[auto]"
          >
            <PlusIcon className="h-3 w-3" />
            <span className="hidden lg:flex ml-1">Add Tab</span>
          </Button>
          {addTab && (
            <Card
              // ref={dropdownRef}
              className={cn(
                "absolute right-[30px] mt-1 w-64 lg:w-96 bg-black text-white border-[2px] border-[#171717] rounded-md shadow-lg p-4 z-10"
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
          <DropdownFilter
            label="Vehicle Type"
            items={vehicleTypes}
            selectedItems={selectedTypes}
            setSelectedItems={setSelectedTypes}
          />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-[#27272A]"
              >
                Vehicle group <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-80 p-2 bg-[#09090B] text-white rounded-lg shadow-lg">
              <div className="relative ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 mb-2 border border-[#27272A] bg-black text-white pr-8"
                />
                {query && (
                  <X
                    className="absolute right-2 top-3 w-4 h-4 cursor-pointer text-gray-400 hover:text-white"
                    onClick={handleClearSearch}
                  />
                )}
              </div>
              <ScrollArea className="h-40 border-y border-[#27272A] my-4">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
                    onClick={() => handleSelectVehicle(vehicle)}
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span>
                        {vehicle.id} [{vehicle.name}]
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-green-700 rounded-full" />{" "}
                        Active • Car • Management
                      </span>
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex justify-between gap-2 mt-2">
                <Button variant="ghost" size="sm">
                  Cancel
                </Button>
                <Button variant="default" size="sm">
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* <DropdownFilter
            label="Vehicle Status"
            items={vehicleStatuses}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
          /> */}
          <StatusDropdown
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
