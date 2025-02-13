"use client";
import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Plus,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

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

const rowsPerPage = 10;

const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

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
  const router = useRouter()
  return (
    <div className="container w-full max-h-full p-6 bg-black text-white rounded-lg shadow-lg overflow-auto">
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

      {/* Tabs */}
      <div className="flex flex-wrap mb-4">
        {["All", "Assigned", "Unassigned", "Archived"].map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "secondary" : "ghost"}
            onClick={() => setSelectedTab(tab)}
            className="text-sm"
          >
            {tab}
          </Button>
        ))}
        <Button variant="ghost" className="text-sm">
          + Add Tab
        </Button>
      </div>

      {/* Filters & Search */}
      <div className="flex items-center space-x-4 mb-4 flex-wrap">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/4 bg-black text-white border-black-700 mb-2"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 mb-2">
              Vehicle Type
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>SUV</DropdownMenuItem>
            <DropdownMenuItem>Truck</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 mb-2">
              Vehicle Group
              <ChevronDown className="w-2 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Management</DropdownMenuItem>
            <DropdownMenuItem>Logistics</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 mb-2">
              Vehicle Status <ChevronDown className="w-2 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          <Filter />
          Filters
        </Button>
      </div>

      {/* Table Container */}
      <div className="md:overflow-visible rounded-lg border border-gray-800">
        <Table className="w-full overflow-visible">
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
              <TableRow key={index} className="bg-black-800 hover:bg-gray-700">
                <TableCell className="flex items-center gap-2">
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
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>{vehicle.operator}</div>
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
    </div>
  );
};

export default Pages;
