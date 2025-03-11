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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ListFilter,
  Plus,
  Search,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  XIcon,
  MoreHorizontal,
  ArrowRight,
  Pencil,
  Archive,
  ArrowUpDown,
} from "lucide-react";
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
import Link from "next/link";

interface Vehicle {
    name: string,
    description: string,
    entries: string,
    reminders: string,
    programsnanceTasks: string,
    orders: string,
    repairCode: string,
    categoryCode: string,
    systemCode: string,
    assemblyCode: string,
      vin: string,
}

interface VehicleTableProps {
  vehicles: Vehicle[];
  isOpen: boolean;
  toggleFilterPanel: () => void;
}

const MaintenanceTasksTable: React.FC<VehicleTableProps> = ({
  vehicles,
  isOpen,
  toggleFilterPanel,
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPageOptions = [10, 20, 30];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addFilter, setAddFilter] = useState(false);

  const [filters, setFilters] = useState([{ id: 1, field: "" }]);

const totalPages = Math.max(1, Math.ceil(vehicles.length / rowsPerPage));


  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const addNewFilter = () => {
    setFilters([...filters, { id: filters.length + 1, field: "" }]);
  };

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
      <div className="w-full relative overflow-hidden">
        {/* Table Container */}
        <div className="w-full overflow-auto rounded-lg border bg-[#171717] border-[#27272A]">
          <Table className="w-full overflow-auto hover:cursor-pointer min-w-[1500px]">
            <TableHeader>
              <TableRow>
              <TableHead className="flex items-center gap-2 text-xs ">
        <Checkbox
          id="select-all"
          className="bg-zinc-950 rounded-sm border border-neutral-600"
          checked={
            selectedRows.length === paginatedVehicles.length &&
            paginatedVehicles.length > 0
          }
          onCheckedChange={handleSelectAll}
        />
        <Button variant="ghost">
          Name
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      </TableHead>
                <TableHead className="">Description</TableHead>
                <TableHead className="">Maintenance Entries</TableHead>
                <TableHead className="">Maintenance Reminders</TableHead>
                <TableHead className="">Maintenance Programs</TableHead>
                <TableHead className="">Work Orders</TableHead>
                <TableHead className="">Default Reason For Repair Code</TableHead>
                <TableHead className="">Default Category Code</TableHead>
                <TableHead className="">Default System Code</TableHead>
                <TableHead className="">Default Assembly Code</TableHead>
                <TableHead className="">{"  "} </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedVehicles.map((vehicle, index) => (
                <Link
                  key={index}
                  href={`/maintenance-tasks/${vehicle.vin}`}
                  passHref
                  legacyBehavior 
                >
                  <TableRow key={index} className="bg-black-800 text-xs">
                    <TableCell className="">
                      <div className="flex items-center gap-2 ">
                        <Checkbox
                          id={`checkbox-${index}`}
                          checked={selectedRows.includes(index)}
                          className="bg-zinc-950 rounded-sm border border-neutral-600"
                          onCheckedChange={(checked) => {
                            if (checked !== "indeterminate") {
                              handleRowSelect(index);
                            }
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span >{vehicle.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="">{vehicle.description}</TableCell>
                    <TableCell className="">{vehicle.entries}</TableCell>
                    <TableCell className="">{vehicle.reminders} </TableCell>
                    <TableCell className="">{vehicle.programsnanceTasks}</TableCell>
                    <TableCell className="">{vehicle.orders}</TableCell>
                    <TableCell className="">{vehicle.repairCode}</TableCell>
                    <TableCell className="">{vehicle.categoryCode}</TableCell>
                    <TableCell className="">{vehicle.systemCode}</TableCell>
                    <TableCell className="">{vehicle.assemblyCode}</TableCell>
                  

                    <TableCell className="hover:border border-[#262626]">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <MoreHorizontal className="w-4 h-4 " />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem className="flex items-center justify-between">
                            View <ArrowRight />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center justify-between">
                            Edit <Pencil />
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center justify-between">
                            Archive <Archive />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
               </Link>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Filter Panel - Positioned Absolutely */}
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
              <h3 className="text-neutral-50 text-xl font-semibold leading-7 justify-start items-center gap-2.5 inline-flex">
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
                <XIcon className="!h-7 !w-7" strokeWidth={1} />
              </Button>
            </div>
            <hr className="border-zinc-800" />
            <div className="p-4 pt-0">
              {addFilter ? (
                <div className="space-y-4 h-screen w-full">
                  {filters.map((filter) => (
                    <div
                      key={filter.id}
                      className="p-3 border mt-5 rounded-sm w-full border-[#27272A] relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-white">
                          New Filter
                        </span>
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
                      className="text-[#047857] flex items-center space-x-1 text-sm"
                    >
                      <Plus size={18} /> <span>Add Filter</span>
                    </button>

                    <Button disabled className="bg-[#047857] text-white">
                      Apply
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mt-4 text-white">No filters applied.</div>
                  <Button
                    className="w-full mt-4 flex items-center gap-2 min-h-10"
                    onClick={() => setAddFilter(true)}
                  >
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
          </div>
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

export default MaintenanceTasksTable;
