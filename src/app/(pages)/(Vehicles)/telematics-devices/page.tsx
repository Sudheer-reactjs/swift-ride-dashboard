"use client";
import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import {
  ChevronDown,
  Filter,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import DropdownFilter from "../../../../components/vehicle-list/add-vehicle/DropdownFilter";
import VehicleTable from "../../../../components/vehicle-list/add-vehicle/VehicleTable";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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

const TelematicsDevice = [
    "ATV",
    "Boat",
    "Bus",
    "Car",
    "Forklift",
    "Generator",
    "Loader",
  ];
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
  { id: "active", label: "Active", color: "bg-green-500" },
  { id: "in-shop", label: "In Shop", color: "bg-orange-500" },
  { id: "inactive", label: "Inactive", color: "bg-blue-500" },
  { id: "out-of-service", label: "Out of Service", color: "bg-red-500" },
  { id: "sold", label: "Sold", color: "bg-gray-500" },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const [selectedStatuses, setSelectedStatuses] = useState<StatusItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");


  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClearSearch = () => {
    setQuery("");
    setSelectedGroups(null);
  };
  const filteredVehicles = vehicleGroups.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleSelectVehicle = (vehicle: { id: string; name: string }) => {
    setSelectedGroups(vehicle);
    setQuery(`${vehicle.id} [${vehicle.name}]`);
  };

  console.log("selectedGroups:", selectedGroups);
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
            Telematics Devices
            </BreadcrumbPage>
          </BreadcrumbItem> 
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
      Telematics Devices
      </h2>

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
            label="Telematics Device Integration"
            items={TelematicsDevice}
            selectedItems={selectedDevice}
            setSelectedItems={setSelectedDevice}
          />
          <DropdownFilter
            label="Vehicle"
            items={vehicleTypes}
            selectedItems={selectedTypes}
            setSelectedItems={setSelectedTypes}
          />
          <StatusDropdown
            label="Vehicle Status"
            items={vehicleStatuses}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-[#27272A]"
              >
                Vehicle group{" "}
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-80 p-2 bg-[#09090B] text-white rounded-lg shadow-lg">
              <div className="relative ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 mb-2 border border-gray-600 h-10 bg-[#09090B] text-white pr-8"
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
                <Button variant="ghost" size="sm" className="w-full h-10">
                  Cancel
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className={`w-full h-10 ${
                    query === "" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={query === ""}
                >
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
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
    </div>
  );
};

export default Page;


