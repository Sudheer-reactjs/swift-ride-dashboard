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

interface RecallData {
  date: string;
  vendor: string;
  alert: string;
  meterentry: string;
  usage: string;
  volume: string;
  total: string;
  fueleconomy: string;
  costpermeter: string;
  mileage?: string;
}

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

const sampleData: RecallData[] = [
  
];

const Recalls = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage] = useState(1);
  const [data] = useState<RecallData[]>(sampleData);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="col-span-12 relative flex flex-col text-white p-4 pt-0">
      {/* Header Filters */}
      <div className="flex space-x-2 mb-1 flex-wrap">
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
          label="Recall Status"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Recall Issued Date"
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

      {/* Table */}
      <div className="max-w-[98%] overflow-hidden border  bg-[#171717] border-[#262626] rounded-lg">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Issued At              
                </TableHead>
                <TableHead className="whitespace-nowrap">Summary</TableHead>
                <TableHead className="whitespace-nowrap">Status</TableHead>
                <TableHead className="whitespace-nowrap">Issue</TableHead>
                <TableHead className="whitespace-nowrap">Manufacturer Campaign Number</TableHead>
                <TableHead className="whitespace-nowrap">NHTSA Campaign Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <TableRow key={index} className="cursor-pointer hover:bg-[#262626]">
                    <TableCell>
                      <div className="flex gap-2 items-center">
                        {item.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      {item.vendor}
                      <div className="text-[#A3A3A3]">{item.mileage}</div>
                    </TableCell>
                    <TableCell>{item.alert}</TableCell>
                    <TableCell>{item.meterentry}</TableCell>
                    <TableCell>{item.usage}</TableCell>
                    <TableCell>{item.volume}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-6 text-gray-400">
                    No results to show
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between w-full items-center text-gray-400 text-sm mt-2 p-3">
        <span>{filteredData.length} of {data.length} row(s) selected.</span>
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
          <span>Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}</span>
          <Button variant="outline">
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default Recalls;