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
import RightSideBar from "./RightSideBar";
import { Checkbox } from "@/components/ui/checkbox";




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
    meterDate: "02/02/2025",
    meterValue: "20,811 mi",
    meterType: "Primary",
    voidStatus: "-",
    autoVoidReason: "-",
    voidStatusLabel: "--",
    source: "GPS Integration",
    image: "/mnt/data/image.png",
  },
  {
    meterDate: "02/02/2025",
    meterValue: "20,811 mi",
    meterType: "Primary",
    voidStatus: "-",
    autoVoidReason: "-",
    voidStatusLabel: "-",
    source: "GPS Integration",
    image: "/mnt/data/image.png",
  }
];

const MeterHistory = () => {
      const [searchTerm, setSearchTerm] = useState("");
      const [date, setDate] = useState<string[]>([]);
      const [rowsPerPage, setRowsPerPage] = useState(10);
      const [currentPage] = useState(1);
    
  return (
    <div className="col-span-12  relative flex flex-col  text-white p-4 pt-0">
      {/* Header Filters */}
      <div className="flex space-x-2 mb-1 flex-wrap ">
        <div className="relative w-full md:w-1/4 gap-2 lg:w-1/5 mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black text-white border-[#27272A] w-full h-10"
          />
        </div>
        <DropdownFilter
          label="Meter Date"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Meter Type"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Void Status"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Meter Entry Source"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
      </div>

      {/* Table */}
      <div className="w-full min-w-96 overflow-hidden border bg-[#171717] border-[#262626] rounded-lg">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex gap-2 items-center whitespace-nowrap">
                    <Checkbox className="border-[#525252]"/>
                    Meter Date
                  </div>
                </TableHead>
                <TableHead className="whitespace-nowrap">Meter Value</TableHead>
                <TableHead className="whitespace-nowrap">Meter Type</TableHead>
                <TableHead className="whitespace-nowrap">Void</TableHead>
                <TableHead className="whitespace-nowrap">Auto-void Reason</TableHead>
                <TableHead className="whitespace-nowrap">Void Status</TableHead>
                <TableHead className="whitespace-nowrap">Source</TableHead>
              </TableRow>
            </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="cursor-pointer hover:bg-[#262626]">
              <TableCell>
              <div className="flex gap-2 items-center">
              <Checkbox className="border-[#525252]"/>
                {item.meterDate}
                </div>
                </TableCell>
              <TableCell>
                {item.meterValue}
                <div className="text-[#A3A3A3]">Current mileage</div>
              </TableCell>
              <TableCell>{item.meterType}</TableCell>
              <TableCell>{item.voidStatus}</TableCell>
              <TableCell>{item.autoVoidReason}</TableCell>
              <TableCell>
                {item.voidStatusLabel}
              </TableCell>
              <TableCell>{item.source}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>

      {/* Pagination */}
      <div className="flex justify-between max-w-[97%] items-center text-gray-400 text-sm mt-2 p-3">
        <span>0 of 100 row(s) selected.</span>
        <div className="flex items-center space-x-2">
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
    <RightSideBar />
    </div>
  )
}

export default MeterHistory