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
import SidebarWidget from "../SidebarWidget";
import { EmptyData } from "@/lib/svg";

interface PartHistoryData {
  partNumber: string;
  workOrder: string;
  date: string;
  serviceTask: string;
  partLocation: string;
  unitCost: string;
  quantity: number;
  subtotal: string;
  createdOn: string;
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

const sampleData: PartHistoryData[] = [
  
];

const PartsHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage] = useState(1);
  const [data] = useState<PartHistoryData[]>(sampleData);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex w-full col-span-12 gap-1 relative h-screen">
      <div className="col-span-12 w-full flex flex-col  text-white max-w-[calc(100%-52px)]">
      {/* Header Filters */}
      <div className="flex space-x-2 mb-1 flex-wrap">
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
          label="Service Task"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Part Location"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Work Order"
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
                <TableHead>Part Number</TableHead>
                <TableHead className="whitespace-nowrap">Work Order</TableHead>
                <TableHead className="whitespace-nowrap">Date</TableHead>
                <TableHead className="whitespace-nowrap">Service Task</TableHead>
                <TableHead className="whitespace-nowrap">Part Location</TableHead>
                <TableHead className="whitespace-nowrap">Unite Cost</TableHead>
                <TableHead className="whitespace-nowrap">Quantity</TableHead>
                <TableHead className="whitespace-nowrap">Subtotal</TableHead>
                <TableHead className="whitespace-nowrap">Created On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {filteredData.length > 0 ? (
    filteredData.map((item, index) => (
      <TableRow key={index} className="cursor-pointer hover:bg-[#262626] text-neutral-50 text-xs">
        <TableCell>{item.partNumber}</TableCell>
        <TableCell>{item.workOrder}</TableCell>
        <TableCell>{item.date}</TableCell>
        <TableCell>{item.serviceTask}</TableCell>
        <TableCell>{item.partLocation}</TableCell>
        <TableCell>{item.unitCost}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>{item.subtotal}</TableCell>
        <TableCell>{item.createdOn}</TableCell>
      </TableRow>
                ))
              ) : (
                <TableRow className="text-center text-neutral-50 text-xl font-medium ">
                                    <TableCell
                                      colSpan={9}
                                      className="text-center text-neutral-50 text-xl font-medium h-96"
                                    >
                                      <div className="flex items-center justify-center mb-3">
                                        <EmptyData />
                                      </div>
                                      No results to show
                                    </TableCell>
                                  </TableRow>
              )}
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

export default PartsHistory;