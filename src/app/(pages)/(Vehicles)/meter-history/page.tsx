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
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DropdownFilter from "../../../../components/vehicle-list/add-vehicle/DropdownFilter";
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
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState("");
  const [meterReading, setMeterReading] = useState("");
  const [meterDate, setMeterDate] = useState(new Date());
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPageOptions = [10, 20, 30];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addFilter, setAddFilter] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [filterDateRange, setFilterDateRange] = useState<DateRange | undefined>(undefined);

  // Format selected date range or show "Meter Date"
  const meterDateLabel =
  filterDateRange && filterDateRange.from && filterDateRange.to
    ? `${format(filterDateRange.from, "MM/dd/yyyy")} - ${format(filterDateRange.to, "MM/dd/yyyy")}`
    : "filter Date";

  // Create paginated vehicles data
  const paginatedVehicles = vehicles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const totalPages = Math.ceil(vehicles.length / rowsPerPage);

  const handleRowSelect = (index:number) => {
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

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
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
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-gray-700"
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

        <DropdownFilter
          label="Vehicle"
          items={vehicleGroups}
          selectedItems={selectedGroups}
          setSelectedItems={setSelectedGroups}
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
      <div className="flex rounded-lg border min-w-[500px] overflow-auto bg-[#171717] border-[#27272A]">
        <div
          className={`transition-all duration-300 ${
            isOpen ? "w-[70%]" : "w-full"
          }`}
        >
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="select-all"
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
                  <TableRow key={index} className="bg-black-800">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`checkbox-${index}`}
                          checked={selectedRows.includes(index)}
                          onCheckedChange={() => handleRowSelect(index)}
                        />
                        <Avatar>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {isOpen && (
          <div className="w-[30%] p-4 bg-[#171717] border-l border-gray-800 h-full">
            <div className="flex my-2 items-center justify-between">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <ListFilter className="w-6 h-6" /> Filters
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toggleFilterPanel();
                  setAddFilter(false);
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
          <Button className="bg-[#065F46] text-white hover:bg-[#065F46]">Apply</Button>
        </div>
     
    </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-sm">
          {selectedRows.length} of {vehicles.length} row(s) selected.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span>Row Per Page</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
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
            <Button variant="outline" onClick={() => setCurrentPage(1)}>
              {" "}
              <ChevronsLeft className="w-4 h-4" />{" "}
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              {" "}
              <ChevronLeft className="w-4 h-4" />{" "}
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              {" "}
              <ChevronRight className="w-4 h-4" />{" "}
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(totalPages)}
            >
              {" "}
              <ChevronsRight className="w-4 h-4" />{" "}
            </Button>
          </div>
        </div>
      </div>

      {/* Dialog for new saved view */}
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-screen-md">
            <DialogHeader>
              <div className="flex justify-between items-center pb-4 border-b border-gray">
                <DialogTitle className="text-xl font-semibold">
                  Add Meter Entry
                </DialogTitle>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={25} />
                </button>
              </div>
            </DialogHeader>

            {/* Vehicle Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Vehicle</label>
              <Select onValueChange={setVehicle}>
                <SelectTrigger className="w-full">
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
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Meter</label>
                  <div className="grid grid-flow-col gap-2 items-center">
                    <div className="flex relative items-center col-span-12">
                      <Input
                        type="text"
                        placeholder="Enter Meter Reading"
                        value={meterReading}
                        onChange={(e) => setMeterReading(e.target.value)}
                        className="w-full bg-white"
                      />
                      <span className="text-sm absolute right-2  text-gray-500">
                        mi
                      </span>
                    </div>
                    <div className="items-center ">
                      <Checkbox /> Void
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Last updated: 20,811 mi (13 days ago)
                </p>

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
                          className="pl-10 cursor-pointer"
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
              </>
            )}

            <DialogFooter className="flex justify-end gap-2">
              {/* Cancel Button */}
              <Button
                variant="outline"
                onClick={() => {
                  setVehicle("");
                  setOpen(false);
                }}
              >
                Cancel
              </Button>

              {/* Save and Add Another Button */}
              <Button disabled={!vehicle || !meterReading || !meterDate}>
                Save and Add Another
              </Button>

              {/* Save Button */}
              <Button disabled={!vehicle || !meterReading || !meterDate}>
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
