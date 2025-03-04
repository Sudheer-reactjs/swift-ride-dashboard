import { useState } from "react";
import { Input } from "@/components/ui/input";
import DropdownFilter from "../add-vehicle/DropdownFilter";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import SidebarWidget from "../SidebarWidget";

const CompletionDate = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "This Year",
  "Last Year",
];
const data = [
  {
    date: "Wed, Jan 29, 2025 6:40pm",
    vendor: "--",
    alert: "--",
    meterentry: "20 811 mi",
    usage: "425,0",
    volume: "7,010",
    total: "$17,26",
    fueleconomy: "--",
    costpermeter: "--",
  },
  {
    date: "Wed, Jan 29, 2025 6:40pm",
    vendor: "--",
    alert: "--",
    meterentry: "20 811 mi",
    usage: "425,0",
    volume: "7,010",
    total: "$17,26",
    fueleconomy: "--",
    costpermeter: "--",
  },
  {
    date: "Wed, Jan 29, 2025 6:40pm",
    vendor: "--",
    alert: "--",
    meterentry: "20 811 mi",
    usage: "425,0",
    volume: "7,010",
    total: "$17,26",
    fueleconomy: "--",
    costpermeter: "--",
  },
];
const FuelHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage] = useState(1);
  return (
    <div className="flex w-full col-span-12 gap-1 relative h-screen">
      <div className="col-span-12 w-full flex flex-col  text-white max-w-[calc(100%-52px)]">
        {/* Header Filters */}
        <div className="flex space-x-2 mb-1 flex-wrap ">
          <div className="relative w-full md:w-1/4 gap-2 lg:w-1/5 mb-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="!pl-10 bg-black text-white border-[#27272A] w-full h-10"
            />
          </div>
          <div className="hidden space-x-2 flex-wrap  md:flex">
            <DropdownFilter
              label="Date"
              items={CompletionDate}
              selectedItems={date}
              setSelectedItems={setDate}
            />
            <DropdownFilter
              label="Vendor"
              items={CompletionDate}
              selectedItems={date}
              setSelectedItems={setDate}
            />
            <DropdownFilter
              label="Fuel Entry Fuel Transaction"
              items={CompletionDate}
              selectedItems={date}
              setSelectedItems={setDate}
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-auto rounded-lg border bg-[#171717] border-[#27272A]">
          <div className="relative w-full overflow-auto">
            <Table className="caption-bottom text-sm w-full overflow-auto hover:cursor-pointer min-w-[1000px]">
              <TableHeader>
                <TableRow className="text-zinc-500  text-xs">
                  <TableHead>
                    <div className="flex gap-2 items-center whitespace-nowrap">
                      <Checkbox className="border-[#525252]" />
                      Date
                    </div>
                  </TableHead>
                  <TableHead className="whitespace-nowrap">Vendors</TableHead>
                  <TableHead className="whitespace-nowrap">Alerts</TableHead>
                  <TableHead className="whitespace-nowrap">
                    Meter Entry
                  </TableHead>
                  <TableHead className="whitespace-nowrap">Usage</TableHead>
                  <TableHead className="whitespace-nowrap">Volume</TableHead>
                  <TableHead className="whitespace-nowrap">Total</TableHead>
                  <TableHead className="whitespace-nowrap">
                    Fuel Economy
                  </TableHead>
                  <TableHead className="whitespace-nowrap">
                    Cost Per Meter
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow
                    key={index}
                    className="cursor-pointer hover:bg-[#262626] text-neutral-50 text-xs"
                  >
                    <TableCell>
                      <div className="flex gap-2 items-center">
                        <Checkbox className="border-[#525252]" />
                        {item.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      {item.vendor}
                      <div className="text-[#A3A3A3]">Current mileage</div>
                    </TableCell>
                    <TableCell>{item.alert}</TableCell>
                    <TableCell>{item.meterentry}</TableCell>
                    <TableCell>{item.usage}</TableCell>
                    <TableCell>{item.volume}</TableCell>
                    <TableCell>{item.total}</TableCell>
                    <TableCell>{item.fueleconomy}</TableCell>
                    <TableCell>{item.costpermeter}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className=" w-[100%]  text-gray-400 text-sm  flex flex-wrap gap-2 justify-between items-center mt-4">
          <span>0 of 100 row(s) selected.</span>
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
      <SidebarWidget />
    </div>
  );
};

export default FuelHistory;
