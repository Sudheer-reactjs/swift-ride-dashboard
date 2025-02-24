import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListFilter, Plus, Search, Trash2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface Vehicle {
  name: string;
  operator: string;
  year: string;
  make: string;
  model: string;
  vin: string;
  status: string;
  type: string;
  group: string;
  currentmeter: string;
  licenseplate: string;
  watchers: number;
}

interface VehicleTableProps {
  vehicles: Vehicle[];
  isOpen: boolean;
  toggleFilterPanel: () => void;
}

const VehicleTable: React.FC<VehicleTableProps> = ({ vehicles, isOpen, toggleFilterPanel }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPageOptions = [10, 20, 30];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addFilter, setAddFilter] = useState(false);
 
  const [filters, setFilters] = useState([{ id: 1, field: "" }]);

  const totalPages = Math.ceil(vehicles.length / rowsPerPage);

  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  
  const addNewFilter = () => {
    setFilters([...filters, { id: filters.length + 1, field: "" }]);
  };

  const handleSelectAll = () => {
    setSelectedRows(selectedRows.length === paginatedVehicles.length ? [] : paginatedVehicles.map((_, i) => i));
  };
  
  const paginatedVehicles = vehicles.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <>
    <div className="flex rounded-lg border bg-[#171717] border-[#27272A]">
      {/* Table Container */}
      <div className={`transition-all duration-300 ${isOpen ? "w-[70%]" : "w-full"}`}>
        <div className="overflow-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="flex items-center gap-2">
                  <Checkbox id="select-all" checked={selectedRows.length === vehicles.length} onChange={handleSelectAll} /> Name
                </TableHead>
                <TableHead>Operator</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>VIN</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Group</TableHead>
                <TableHead>Current Meter</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Watchers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedVehicles.map((vehicle, index) => (
                <Link key={index} href={`vehicle-list/vehicle-detail/${vehicle.vin}`} passHref legacyBehavior>
                  <TableRow key={index} className="bg-black-800">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Checkbox id={`checkbox-${index}`} checked={selectedRows.includes(index)} onChange={() => handleRowSelect(index)} />
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {vehicle.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {vehicle.operator}
                      </div>
                    </TableCell>
                    <TableCell>{vehicle.year}</TableCell>
                    <TableCell>{vehicle.make}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.vin}</TableCell>
                    <TableCell><Badge variant="secondary">{vehicle.status}</Badge></TableCell>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.group}</TableCell>
                    <TableCell>{vehicle.currentmeter} mi</TableCell>
                    <TableCell>{vehicle.licenseplate}</TableCell>
                    <TableCell>{vehicle.watchers} watchers</TableCell>
                  </TableRow>
                </Link>
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
          {addFilter ? (
            <div className="space-y-4 h-screen w-full">
              {filters.map((filter) => (
                <div
                  key={filter.id}
                  className="p-5 border mt-5 rounded-sm w-full border-[#27272A] relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">New Filter</span>
                    <button
                      onClick={() => setAddFilter(false)}
                      className="text-gray-400"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                    <Select>
                      <SelectTrigger className="pl-10 w-full">
                        <SelectValue placeholder="Select field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <button
                  onClick={addNewFilter}
                  className="text-[#047857] flex items-center space-x-1 text-lg"
                >
                  <Plus size={18} /> <span>Add Filter</span>
                </button>

                <Button disabled className=" bg-[#047857] text-white ">
                  Apply
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-4 text-white">No filters applied.</div>
              <Button className="w-full mt-4 flex items-center gap-2" onClick={() => setAddFilter(true)}>
                <Plus className="w-4 h-4" /> Add Filter
              </Button>
              <ScrollArea className="mt-6">
                <div className="text-sm text-white">POPULAR FILTERS</div>
                <div className="mt-2 flex flex-col space-y-2">
                  <a href="#" className="text-[#047857] hover:underline">
                    Vehicle
                  </a>
                  <a href="#" className="text-[#047857] hover:underline">
                    Vehicle Group
                  </a>
                </div>
              </ScrollArea>
            </>
          )}
        </div>
      )}
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center mt-4">
    <p className="text-sm">{selectedRows.length} of {vehicles.length} row(s) selected.</p>
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2"> {rowsPerPage} <ChevronDown className="w-2 h-4" /> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {rowsPerPageOptions.map((option) => (
            <DropdownMenuItem key={option} onClick={() => setRowsPerPage(option)}> {option} </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" onClick={() => setCurrentPage(1)}> <ChevronsLeft className="w-4 h-4" /> </Button>
      <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}> <ChevronLeft className="w-4 h-4" /> </Button>
      <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}> <ChevronRight className="w-4 h-4" /> </Button>
      <Button variant="outline" onClick={() => setCurrentPage(totalPages)}> <ChevronsRight className="w-4 h-4" /> </Button>
    </div>
  </div>
  </>
  );
};

export default VehicleTable;