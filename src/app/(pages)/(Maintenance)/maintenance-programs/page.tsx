"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import VehicleFilter from "@/components/table-filter/VehicleFilter";
import VehicleGroup from "@/components/table-filter/VehicleGroup";
import Link from "next/link";
import SelectOptionFilter from "@/components/table-filter/SelectFilter";
import { Filter, Plus, Search } from "lucide-react";
import MaintenanceProgramsTable from "@/components/maintenance/maintenance-programs/MaintenanceProgramsTable";
const vehicles = Array(15).fill({
  program: "Swift Ride",
  vehicle: "-",
  schedules: "-",
  primaryMeter: "-",
  secondaryMeter: "-",
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

const Pages = () => {
  const [search, setSearch] = useState("");
  const [reminders, setReminders] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle[]>([]);
  const [selectedTypesGroup, setSelectedTypesGroup] = useState<
    { id: string; country: string; region: string; state: string }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();
  return (
    <>
      {/* Header Actions */}
      <div className="flex flex-wrap justify-between items-centre gap-2">
        <h2 className="text-neutral-50 text-3xl font-semibold">
          Maintenance Programs
        </h2>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="justify-center text-teal-500 text-sm font-medium leading-[14px]"
          >
            Learn More
          </Link>
          <Button
            variant="outline"
            className="flex items-center h-10"
            onClick={() => router.push("/maintenance-programs/new")}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Maintenance Entry
          </Button>
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
          <SelectOptionFilter
            label="OEM Maintenance Programs"
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
      <MaintenanceProgramsTable
        vehicles={vehicles}
        isOpen={isOpen}
        toggleFilterPanel={toggleFilterPanel}
      />
    </>
  );
};

export default Pages;
