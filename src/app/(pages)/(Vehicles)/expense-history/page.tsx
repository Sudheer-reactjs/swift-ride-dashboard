"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  ListFilter,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,

} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DropdownFilter from "@/components/table-filter/VehicleTypeFilter";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import VehicleFilter from "@/components/table-filter/VehicleFilter";

const vehicles = Array(15).fill({
  vehicle: "1100 [2018 Toyota Prius]",
  meterDate: "02/01/2025",
  meterValue: "56 491 mi",
  meterType: "Primary",
  void: "--",
  source: "Fuel Entry #173127197",
  voidStatus: "--",
  autoVoidReason: "--",
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
const vehicleType = [
  "Annual Inspection Fees",
  "Depreciation",
  "Down Payment",
  "Equipment",
  "Fines",
  "Insurance",
  "Lease",
  "Legal/Court Case",
];
const vehicleWatchers = ["Jacob Silva", "John Doe", "Jane Doe"];
const rowsPerPageOptions = [10, 20, 30];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("Past");
  const [search, setSearch] = useState("");
    //Vehicle
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle[]>([]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedVehicles = vehicles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSelectAll = () => {
    if (selectedRows.length === paginatedVehicles.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedVehicles.map((_, i) => i));
    }
  };

  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const totalPages = Math.ceil(vehicles.length / rowsPerPage);

  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-4 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA]">Vehicles</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
            Expense History
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap justify-between items-start md:items-center gap-2">
        <h2 className="text-2xl font-semibold">Expense History</h2>
        <Button variant="outline" className="flex items-center h-10 "
        onClick={() => router.push("/expense-history/add-expense-history")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Expense History
        </Button>
      </div>
      <div className="flex items-center justify-around  p-[2px] border-[0.5px] gap-[2px] rounded-sm max-w-48 border-black-700">
        {["Past", "Future"].map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "secondary" : "ghost"}
            onClick={() => setSelectedTab(tab)}
            className={cn(
              "text-sm flex items-center rounded-md h-10 w-24 px-3 py-2 transition-all",
              selectedTab === tab
                ? "bg-[#171717] text-white"
                : "hover:bg-[#171717] "
            )}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="flex space-x-2 mb-1 flex-wrap">
        <div className="relative w-full md:w-1/4 lg:w-1/5 mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-black text-white border-[#27272A] w-full h-10"
          />
        </div>
        <div className="hidden lg:flex flex-wrap gap-2">
        <VehicleFilter
          label="Vehicle" 
          items={vehiclesdrop} 
          selectedItems={selectedVehicle} 
          setSelectedItems={setSelectedVehicle} 
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-[#27272A]"
              >
                Date
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
            label="Type"
            items={vehicleType}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
          />
          <DropdownFilter
            label="Watcher"  
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
      <div className="w-full relative overflow-hidden">
              {/* Table Container */}
              <div className="w-full overflow-auto rounded-lg border bg-[#171717] border-[#27272A]">
                <Table className="w-full overflow-auto hover:cursor-pointer min-w-[1300px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="select-all"
                          className="bg-zinc-950 rounded-sm border border-neutral-600"
                        checked={
                          selectedRows.length === paginatedVehicles.length
                        }
                        onCheckedChange={handleSelectAll}
                      />
                      <span>Vehicle</span>
                    </div>
                  </TableHead>
                  <TableHead>Meter Date</TableHead>
                  <TableHead>Meter Value</TableHead>
                  <TableHead>Meter Type</TableHead>
                  <TableHead>Void</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Void Status</TableHead>
                  <TableHead>Auto-Void Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedVehicles.map((vehicle, index) => (
                  <TableRow key={index} className="bg-black-800 text-xs">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          className="bg-zinc-950 rounded-sm border border-neutral-600"
                          id={`checkbox-${index}`}
                          checked={selectedRows.includes(index)}
                          onCheckedChange={() => handleRowSelect(index)}
                        />
                        <Avatar className="w-6 h-6">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {vehicle.vehicle}
                      </div>
                    </TableCell>
                    <TableCell>{vehicle.meterDate}</TableCell>
                    <TableCell>{vehicle.meterValue}</TableCell>
                    <TableCell>{vehicle.meterType}</TableCell>
                    <TableCell>{vehicle.void}</TableCell>
                    <TableCell>{vehicle.source}</TableCell>
                    <TableCell>{vehicle.voidStatus}</TableCell>
                    <TableCell>{vehicle.autoVoidReason}</TableCell>
                    <TableCell className="hover:border border-[#262626]">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <MoreHorizontal className="w-4 h-4 " />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem className="flex items-center cursor-pointer justify-between">
                            View <ArrowRight />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center cursor-pointer justify-between">
                            Edit <Pencil  />
                          </DropdownMenuItem>                         
                          <DropdownMenuItem className="flex items-center cursor-pointer justify-between">
                            Delete <Trash2 />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      

          <div
  aria-hidden={!isOpen}
  className="absolute max-w-[400px] w-full top-0 bottom-0 right-0 border-l border-zinc-800 bg-neutral-900 flex flex-col"
  data-testid="index-filters-aside"
  style={{
    zIndex: 3,
    transition: "transform 300ms ease-in-out",
    transform: isOpen ? "translateX(0)" : "translateX(450px)",
  }}
>
  <div className="flex-shrink-0 w-full h-full overflow-auto bg-[#171717]">
    {/* Header */}
    <div className="flex px-4 py-3 items-center justify-between sticky top-0 bg-[#171717] z-10">
      <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
        <ListFilter className="w-5 h-5" /> Filters
      </h3>
      <Button variant="ghost" size="icon" onClick={toggleFilterPanel}>
        ✕
      </Button>
    </div>
    
    <hr className="border-[#27272A]" />

    {/* No Filters Applied */}
    <div className="p-4 text-sm text-gray-400">No filters applied.</div>

    {/* Add Filter Button */}
    <div className="flex px-4">
      <Button className="w-full bg-[#065F46] hover:bg-[#065F46] text-white">
        + Add Filter
      </Button>
    </div>

    {/* Filters List */}
    <div className="p-4 text-sm text-gray-400">
      <h4 className="font-semibold text-white mb-2">POPULAR FILTERS</h4>
      <ul className="space-y-1">
        {["Vehicle", "Vehicle Group", "Vendor", "Vendor Contact Name", "Vendor Contact Phone", "Vendor Labels"].map((filter) => (
          <li key={filter} className="cursor-pointer hover:text-white">
            {filter}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-sm">
          {selectedRows.length} of {vehicles.length} row(s) selected.
        </p>
        <div className="flex items-center gap-4 flex-col md:flex-row ">
          <div className="flex items-center gap-3">
            <span>Row Per Page</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 px-3">
                  {" "}
                  {rowsPerPage} <ChevronDown className="w-2 h-4" />{" "}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {rowsPerPageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setRowsPerPage(option)}
                  >
                    {" "}
                    {option}{" "}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>Page 1 of 10</div>
          <div className="gap-2 flex flex-wrap">
            <Button variant="outline" onClick={() => setCurrentPage(1)}
              className="px-3" 
              >
              {" "}
              <ChevronsLeft className="w-4 h-4" />{" "}
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
               className="px-3"
            >
              {" "}
              <ChevronLeft className="w-4 h-4" />{" "}
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
               className="px-3"
            >
              {" "}
              <ChevronRight className="w-4 h-4" />{" "}
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(totalPages)}
               className="px-3"
            >
              {" "}
              <ChevronsRight className="w-4 h-4" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
