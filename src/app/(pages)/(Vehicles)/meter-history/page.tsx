"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import {
  Filter,
  Plus,
  Search,
  ListFilter,
  ChevronsLeft,
  ChevronDown,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
  CalendarIcon,
  X,
  MoreHorizontal,
  ArrowRight,
  Pencil,
  History,
  Lock,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DropdownFilter from "../../../../components/table-filter/VehicleTypeFilter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import VehicleFilter from "@/components/table-filter/VehicleFilter";
// import { ScrollArea } from "@/components/ui/scroll-area";
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
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  //Vehicle
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle[]>([]);
  const [vehicle, setVehicle] = useState("");
  const [meterReading, setMeterReading] = useState("");
  const [meterDate, setMeterDate] = useState(new Date());
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [filterDateRange, setFilterDateRange] = useState<DateRange | undefined>(
    undefined
  );

  const meterDateLabel =
    filterDateRange && filterDateRange.from && filterDateRange.to
      ? `${format(filterDateRange.from, "MM/dd/yyyy")} - ${format(
          filterDateRange.to,
          "MM/dd/yyyy"
        )}`
      : "filter Date";

  const paginatedVehicles = vehicles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalPages = Math.ceil(vehicles.length / rowsPerPage);

  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === paginatedVehicles.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedVehicles.map((_, i) => i));
    }
  };

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
              Meter History
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap justify-between items-start md:items-center gap-2">
        <h2 className="text-2xl font-semibold">Meter History</h2>
        <Button
          variant="outline"
          className="flex items-center h-10 "
          onClick={() => setOpen(!open)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Meter Entry
        </Button>
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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-[#27272A]"
              >
                Meter Date
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

          <VehicleFilter 
          label="Vehicle" 
          items={vehiclesdrop} 
          selectedItems={selectedVehicle} 
          setSelectedItems={setSelectedVehicle} 
          />

          <DropdownFilter
            label="Meter Type"
            items={vehicleStatuses}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
          />
          <DropdownFilter
            label="Void Status"
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
                  <TableHead>
                    <div className="flex items-center gap-2 text-xs">
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
                          id={`checkbox-${index}`}
                            className="bg-zinc-950 rounded-sm border border-neutral-600"
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
                            View Record History<History  />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center cursor-pointer justify-between">
                            Delete <Lock />
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
          className="absolute max-w-[430px] w-full top-0 bottom-0 right-0 border-[1px]  bg-neutral-900 rounded  border-zinc-800 flex-col justify-start items-start gap-10 inline-flex"
          data-testid="index-filters-aside"
          style={{
            zIndex: 3,
            transition: "transform 300ms ease-in-out",
            transform: isOpen ? "translateX(0)" : "translateX(450px)",
          }}
        >
          <div className="flex-shrink-0 w-full h-full overflow-auto bg-[#171717] ">
            <div className="flex  px-4 py-2 items-center justify-between sticky top-0 bg-[#171717] z-10">
               <h3 className="text-2xl font-semibold flex items-center gap-2">
                <ListFilter className="w-6 h-6" /> Filters
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toggleFilterPanel();
                }}
              >
                ✕
              </Button>
            </div>
            <hr />
            <div className="p-4 gap-4  text-white">
              <div className="flex flex-col border border-[#27272A] p-4 rounded-sm space-y-2">
                <label className="text-sm font-medium">Meter date</label>
                <Select>
                  <SelectTrigger className="bg-[#09090B] border-[#27272A] text-white">
                    <SelectValue placeholder="Is between" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#09090B] border-[#27272A] text-white">
                    <SelectItem value="between">Is between</SelectItem>
                    <SelectItem value="before">Is before</SelectItem>
                    <SelectItem value="after">Is after</SelectItem>
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm  text-white border-[#27272A]"
                    >
                      {meterDateLabel}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-2 bg-black text-white border border-[#27272A] rounded-lg shadow-lg">
                    {/* Calendar for Date Range */}
                    <Calendar
                      mode="range"
                      selected={filterDateRange}
                      onSelect={setFilterDateRange}
                      initialFocus
                      className="bg-black text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-between flex-wrap items-center pt-2">
                <Button variant="ghost" className="text-white">
                  <Plus className="w-4 h-4 mr-1" /> Add Filter
                </Button>
                <Button className="bg-[#065F46] text-white hover:bg-[#065F46]">
                  Apply
                </Button>
              </div>
            </div> 
          </div>
      </div>
       {/* Pagination */}
      <div className=" w-[100%]  text-gray-400 text-sm  flex flex-wrap gap-2 justify-between items-center mt-4">
      <p className="text-sm">
          {selectedRows.length} of {vehicles.length} row(s) selected.
        </p>
              <div className="flex items-start gap-2 space-x-2 flex-col md:flex-row">
                <div className="flex items-center justify-normal gap-2 space-x-2 flex-wrap">
                  <span>Rows per page</span>
                  <Select onValueChange={(value) => setRowsPerPage(Number(value))}>
                    <SelectTrigger className="w-20 h-10 bg-black border border-[#27272A] text-white">
                      {rowsPerPage}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 space-x-2 flex-wrap">
                  <span>Page {currentPage} of 1</span>
                  <Button variant="outline">
                    {" "}
                    <ChevronsLeft className="w-4 h-4" />{" "}
                  </Button>
                  <Button variant="outline">
                    {" "}
                    <ChevronLeft className="w-4 h-4" />{" "}
                  </Button>
                  <Button variant="outline">
                    {" "}
                    <ChevronRight className="w-4 h-4" />{" "}
                  </Button>
                  <Button variant="outline">
                    {" "}
                    <ChevronsRight className="w-4 h-4" />{" "}
                  </Button>
                </div>
              </div>
            </div>

      </div>

      {/* Dialog for new saved view */}
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent className=" bg-[#171717] text-white rounded-lg shadow-none border-none max-w-2xl w-[96%] p-0 gap-0">
            <DialogHeader className="p-4 flex justify-between items-center gap-2 flex-row border-b-[1px] border-neutral-800">
            <DialogTitle className="text-neutral-50 text-lg font-semibold">
                  Add Meter Entry 
                </DialogTitle>
                <button
                  onClick={() => setOpen(false)}
                 className="bg-transparent hover:bg-transparent text-neutral-400 p-0 !mt-0 w-6 h-6 !border-0"
                >
                  <X size={25} />
                </button>
            </DialogHeader>

            {/* Vehicle Selection */}
            <div className=" py-6 px-5">
              <label className="block text-sm font-medium mb-2">Vehicle</label>
              <Select onValueChange={setVehicle}>
                <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">2008 Toyota Prius</SelectItem>
                  <SelectItem value="1100">2018 Toyota Prius</SelectItem>
                  <SelectItem value="1200">2020 Honda Civic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Render additional fields only if vehicle is selected */}
            {vehicle && (
              <div className="py-6 px-5 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Meter</label>
                  <div className="grid grid-flow-col gap-2 items-center">
                    <div className="flex relative items-center col-span-12">
                      <Input
                        type="text"
                        placeholder="Enter Meter Reading"
                        value={meterReading}
                        onChange={(e) => setMeterReading(e.target.value)}
                        className="w-full bg-white min-h-10 border-0 text-zinc-400"
                      />
                    </div>
                    <div className="items-center ">
                      <Checkbox /> Void
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                  Last updated: 20,811 mi (13 days ago)
                </p>
                </div>

               

                <div className="flex flex-col space-y-2">
                  <label htmlFor="meter-date" className="text-sm font-medium ">
                    Meter Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="relative w-full">
                        <Input
                          id="meter-date"
                          type="text"
                          readOnly
                          value={
                            meterDate ? format(meterDate, "MM/dd/yyyy") : ""
                          }
                          placeholder="MM/DD/YYYY"
                          className="pl-10 cursor-pointer bg-black text-white border-zinc-800 h-10"
                          
                        />
                        <CalendarIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={meterDate}
                        onSelect={(day) => {
                          if (day) {
                            setMeterDate(day);
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            )}

       <DialogFooter className="p-4 flex  space-x-3 py-6 gap-2 md:gap-0">
              {/* Cancel Button */}
              <Button
                variant="outline"
                className="bg-transparent border-0 min-h-10"
                onClick={() => {
                  setVehicle("");
                  setOpen(false);
                }}
              >
                Cancel
              </Button>

              {/* Save and Add Another Button */}
              <Button 
               className="bg-zinc-950 rounded-md border border-zinc-800 text-neutral-50 text-sm min-h-10"
              disabled={!vehicle || !meterReading || !meterDate}>
                Save and Add Another
              </Button>

              {/* Save Button */}
              <Button 
              className="bg-emerald-800 rounded-md text-neutral-50 min-h-10"
              disabled={!vehicle || !meterReading || !meterDate}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Pages;
