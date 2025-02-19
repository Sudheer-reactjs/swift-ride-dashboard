"use client";
import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Plus,
  X,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

const rowsPerPage = 10;

const DropdownFilter = ({
  label,
  items,
  selectedItems,
  setSelectedItems,
}: {
  label: string;
  items: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const removeSelection = (item: string) => {
    setSelectedItems((prev) => prev.filter((i) => i !== item));
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 min-w-[150px]"
        >
          {label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-[25%] p-2 w-[400px]">
        <div className="relative">
          <div className="flex flex-wrap items-center gap-1 absolute left-2 top-1 z-10">
            {selectedItems.map((item) => (
              <Badge
                key={item}
                className="flex items-center gap-1 bg-blue-100 text-[#047857]"
              >
                {item}
                <button onClick={() => removeSelection(item)}>
                  <X className="w-3 h-3 text-[#047857] hover:text-[#047857]" />
                </button>
              </Badge>
            ))}
          </div>
          <Input
            placeholder={selectedItems.length === 0 ? "Select item(s)" : ""}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`pr-8 ${selectedItems.length > 0 ? "pl-20" : "pl-2"}`}
          />
        </div>
        <ScrollArea className="max-h-40 mt-2 overflow-y-auto">
          {filteredItems.map((item) => (
            <div
              key={item}
              className="flex items-center p-2 hover:bg-[#171717] rounded-md cursor-pointer"
              onClick={() => toggleSelection(item)}
            >
              <Checkbox checked={selectedItems.includes(item)} />
              <span className="ml-2">{item}</span>
            </div>
          ))}
        </ScrollArea>
        <div className="flex justify-end items-center mt-2">
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={() => setIsOpen(false)}
            disabled={selectedItems.length === 0}
          >
            Apply
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [addTab, setAddTab] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(vehicles.length / rowsPerPage);
  const displayedVehicles = vehicles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleRowSelect = (index: number) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index)
        ? prevSelectedRows.filter((i) => i !== index)
        : [...prevSelectedRows, index]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAddTab(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const router = useRouter();
  return (
    <>
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <h2 className="text-2xl font-semibold">Vehicles</h2>
        <Button
          variant="outline"
          className="flex items-center"
          onClick={() => router.push("/vehicle-list/add")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4 ">
        <div className="flex items-center border-[0.5px] p-[2px] rounded-sm border-black-700">
          {["All", "Assigned", "Unassigned", "Archived"].map((tab) => (
            <Button
              key={tab}
              variant={selectedTab === tab ? "secondary" : "ghost"}
              onClick={() => setSelectedTab(tab)}
              className={cn(
                "text-sm flex items-center rounded-md px-3 py-2 transition-all",
                selectedTab === tab
                  ? "bg-[#171717] text-white"
                  : "hover:bg-[#171717] "
              )}
            >
              <div className="flex justify-center items-center min-w-16">
                {tab}
                {selectedTab === tab && <span className="ml-1">...</span>}
              </div>
            </Button>
          ))}
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setAddTab(!addTab)}
            className="text-sm"
          >
            + Add Tab
          </Button>
          {addTab && (
            <Card
              ref={dropdownRef}
              className={cn(
                "absolute left-0 mt-2 w-80 bg-black text-white border border-[#171717] rounded-md shadow-lg p-4 z-50"
              )}
            >
              {/* Search Input */}
              <Input
                type="text"
                placeholder="Search views"
                className="w-full p-2 bg-black text-white rounded-md border-[0.5px] border-[#171717]"
              />

              {/* Saved Views Section */}
              <div className="mt-3 border-t border-gray">
                <div className="flex items-center justify-between text-sm text-white">
                  <span>MY SAVED VIEWS</span>
                  <Button variant="ghost" size="icon" className="text-white">
                    ...
                  </Button>
                  <Button variant="ghost" className="text-white text-sm">
                    + Add Filter
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  You havent created any views
                </p>
              </div>

              {/* Standard Views Section */}
              <div className="mt-4">
                <span className="text-sm text-gray-400">STANDARD VIEWS</span>
                <div className="flex flex-col mt-2 space-y-2">
                  {["All", "Assigned", "Unassigned", "Archived"].map((tab) => (
                    <Button
                      key={tab}
                      variant="ghost"
                      className="flex justify-start w-full text-sm bg-black hover:bg-[#171717] p-2 rounded-md"
                    >
                      ✓ {tab}{" "}
                      <span className="border bg-white  text-black border-gray-600 px-1 box-border rounded-sm text-xs">
                        S
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex space-x-4 mb-4 flex-wrap">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/4 lg:w-1/5 bg-black text-white border-black-700 mb-2"
        />
        <DropdownFilter
          label="Vehicle Type"
          items={vehicleTypes}
          selectedItems={selectedTypes}
          setSelectedItems={setSelectedTypes}
        />
        <DropdownFilter
          label="Vehicle Group"
          items={vehicleGroups}
          selectedItems={selectedGroups}
          setSelectedItems={setSelectedGroups}
        />
        <DropdownFilter
          label="Vehicle Status"
          items={vehicleStatuses}
          selectedItems={selectedStatuses}
          setSelectedItems={setSelectedStatuses}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 mb-2">
              Watcher <ChevronDown className="w-2 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          className="flex items-center gap-2 mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter />
          Filters
        </Button>
      </div>

      {/* Table Container */}
      <div className="flex rounded-lg border  bg-[#171717] border-gray-800">
        {/* Table Container */}
        <div
          className={`transition-all duration-300 ${
            isOpen ? "w-[70%]" : "w-full"
          }  `}
        >
          <div className="">
            {" "}
            {/* Enables scrolling */}
            <Table className="w-full ">
              <TableHeader>
                <TableRow>
                  <TableHead className="flex items-center gap-2">
                    <Checkbox id="select-all" /> Name
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
                {displayedVehicles.map((vehicle, index) => (
                  <TableRow
                    key={index}
                    className="bg-black-800 hover:bg-gray-700"
                  >
                    <TableCell >
                      <div className="flex items-center gap-2">
                      <Checkbox
                        id={`checkbox-${index}`}
                        checked={selectedRows.includes(index)}
                        onChange={() => handleRowSelect(index)}
                      />
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      {vehicle.name}
                      </div>
                    </TableCell>
                    <TableCell  >
                      <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>{vehicle.operator}
                      </div>
                      </TableCell>
                    <TableCell>{vehicle.year}</TableCell>
                    <TableCell>{vehicle.make}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.vin}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{vehicle.status}</Badge>
                    </TableCell>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.group}</TableCell>
                    <TableCell>{vehicle.currentmeter} mi</TableCell>
                    <TableCell>{vehicle.licenseplate}</TableCell>
                    <TableCell>{vehicle.watchers} watchers</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Filter Panel */}
        {isOpen && (
          <div className="w-[30%] p-4 bg-[[#171717] border-l border-gray-800 h-full ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filters
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </Button>
            </div>
            <div className="mt-4 text-gray-500">No filters applied.</div>
            <Button className="w-full mt-4 flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Filter
            </Button>
            <ScrollArea className="mt-6">
              <div className="text-sm text-gray-500">POPULAR FILTERS</div>
              <div className="mt-2 flex flex-col space-y-2">
                <Link href="#" className="text-blue-600 hover:underline">
                  Vehicle
                </Link>
                <Link href="#" className="text-blue-600 hover:underline">
                  Vehicle Group
                </Link>
              </div>
            </ScrollArea>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-sm">
          {selectedRows.length} of {vehicles.length} row(s) selected.
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-evenly gap-2">
            <p>Rows per page</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 mb-2"
                >
                  10 <ChevronDown className="w-2 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>1</DropdownMenuItem>
                <DropdownMenuItem>2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center justify-evenly gap-2">
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <Button variant="outline">
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline">
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
