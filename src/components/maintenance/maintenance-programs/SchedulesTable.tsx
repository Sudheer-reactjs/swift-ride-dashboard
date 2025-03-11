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
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight, 
  ChevronDown,
  ArrowUpDown,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface Vehicle {
    intervals: string;
    maintenanceTasks: string;
}

interface VehicleTableProps {
  vehicles: Vehicle[];
}

const SchedulesTable: React.FC<VehicleTableProps> = ({
  vehicles
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPageOptions = [10, 20, 30];
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const totalPages = Math.max(1, Math.ceil(vehicles.length / rowsPerPage));
  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
    const [search, setSearch] = useState("");

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    if (checked === "indeterminate") return;
    setSelectedRows(checked ? paginatedVehicles.map((_, i) => i) : []);
  };

  const paginatedVehicles = vehicles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
     <div className="relative w-full mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-zinc-950 rounded-md outline-1 outline-offset-[-1px] outline-zinc-800 h-10"
              />
            </div>
      <div className="w-full relative overflow-hidden">
        {/* Table Container */}
        <div className="w-full overflow-auto rounded-lg border bg-[#171717] border-[#27272A]">
          <Table className="w-full overflow-auto hover:cursor-pointer min-w-[500px]">
            <TableHeader>
              <TableRow>
                <TableHead className="flex items-center gap-2 text-xs  ">
                  <Checkbox
                    id="select-all"
                    className="bg-zinc-950 rounded-sm border border-neutral-600 hidden"
                    checked={
                      selectedRows.length === paginatedVehicles.length &&
                      paginatedVehicles.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                  <Button variant="ghost" className="p-0">
                    Intervals
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="">Maintenance Tasks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedVehicles.map((vehicle, index) => (
                  <TableRow key={index} className="bg-black-800 text-xs">
                    <TableCell className="">
                      <div className="flex items-center gap-2 ">
                        <Checkbox
                          id={`checkbox-${index}`}
                          checked={selectedRows.includes(index)}
                          className="bg-zinc-950 rounded-sm border border-neutral-600 hidden    "
                          onCheckedChange={(checked) => {
                            if (checked !== "indeterminate") {
                              handleRowSelect(index);
                            }
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                        {vehicle.intervals}
                      </div>
                    </TableCell>
                    <TableCell className="">{vehicle.maintenanceTasks}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 px-3"
                  >
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
              <Button
                variant="outline"
                onClick={() => setCurrentPage(1)}
                className="px-3"
              >
                {" "}
                <ChevronsLeft className="w-3 h-4" />{" "}
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3"
              >
                {" "}
                <ChevronLeft className="w-3 h-4" />{" "}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-3"
              >
                {" "}
                <ChevronRight className="w-3 h-4" />{" "}
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(totalPages)}
                className="px-3"
              >
                {" "}
                <ChevronsRight className="w-3 h-4" />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulesTable;
