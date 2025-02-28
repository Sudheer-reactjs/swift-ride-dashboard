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
  Filter,
  Search,
} from "lucide-react";
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

const Page = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);


  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
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
          <DropdownFilter
            label="Vehicle Status"
            items={vehicleStatuses}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
          />
          <DropdownFilter
            label="Vehicle Group"
            items={vehicleGroups}
            selectedItems={selectedGroups}
            setSelectedItems={setSelectedGroups}
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
    </div>
  );
};

export default Page;


