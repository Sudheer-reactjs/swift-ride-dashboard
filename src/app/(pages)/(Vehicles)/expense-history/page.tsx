"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Filter, ListFilter, Plus, Search, X } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import DropdownFilter from '@/components/vehicle-list/add-vehicle/DropdownFilter';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
  
const vehiclesdrop = [
    { id: 2100, name: "2016 Ford F-150" },
    { id: 2101, name: "2018 Toyota Tacoma" },
    { id: 2102, name: "2020 Chevrolet Silverado" },
    { id: 2103, name: "2017 Ram 1500" },
  ];

  const vehicleStatuses = [
    "Active",
    "Inactive",
    "In Service",
    "Out of Service",
    "Archived",
  ];
  const vehicleWatchers = ["Jacob Silva", "John Doe", "Jane Doe"];
  const rowsPerPageOptions = [10, 20, 30];

const Page = () => {
    const[selectedTab,setSelectedTab] = useState("Past")
    const[search,setSearch] = useState("")
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    const[query,setQuery] = useState("")
    const [selectedVehicle, setSelectedVehicle] = useState<{ id: number; name: string } | null>(null);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [selectedWatchers, setSelectedWatchers] = useState<string[]>([]);
    const[isOpen,setIsOpen] = useState(false)
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    
    const handleSelectVehicle = (vehicle: { id: number; name: string; }) => {
      setSelectedVehicle(vehicle);
      setQuery(`${vehicle.id} [${vehicle.name}]`);
    };
      
      const handleClearSearch = () => {
        setQuery("");
        setSelectedVehicle(null);
      };

      const filteredVehicles = vehiclesdrop.filter(vehicle => vehicle.name.toLowerCase().includes(search.toLowerCase()));
  
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
    
      const handleRowSelect = (index:number) => {
        setSelectedRows((prev) =>
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
      };
      console.log(selectedVehicle)
    
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
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Meter Entry
        </Button>
      </div>
      <div className="flex items-center justify-around h-11 p-1 border-[0.5px] gap-1 rounded-sm max-w-48 border-black-700">
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
        <div className="flex flex-wrap gap-2">
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

        <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" 
        className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-[#27272A]"
        >Vehicle <ChevronDown className="w-4 h-4 ml-2 text-gray-400" /></Button>
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
            <div key={vehicle.id} className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
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
                <span>{vehicle.id} [{vehicle.name}]</span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full" /> Active •  Car • Management
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex justify-between gap-2 mt-2">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="default" size="sm">Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
    
    
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
          {/* {meterDateLabel} */}
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 bg-black text-white border border-[#27272A] rounded-lg shadow-lg">
        {/* Calendar for Date Range */}
        {/* <Calendar
          mode="range"
          selected={filterDateRange}
          onSelect={setFilterDateRange}
          initialFocus
          className="bg-black text-white"
        /> */}
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


      </div>
    );
}

export default Page;
