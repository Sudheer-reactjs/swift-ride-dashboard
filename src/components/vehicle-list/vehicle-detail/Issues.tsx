import { useState } from "react";
import { Input } from "@/components/ui/input";
import DropdownFilter from "../../table-filter/VehicleTypeFilter";
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
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import SidebarWidget from "../SidebarWidget";

const sampleData = [
  {
    serviceTasks: [
      "Engine Oil & Filter Replacement",
      "Every 6 month(s) or 10,000 miles",
    ],
    status: "Due Soon",
    completionDate: "02/01/2025 3:53 PM",
    meter: "11,276 mi",
    issues: "-",
    vendor: "-",
    labels: "-",
    total: "$582.48",
    watch: "-",
  },
];

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

const Issues = () => {
   const [searchTerm, setSearchTerm] = useState("");
    const [filteredData] = useState(sampleData);
    const [date, setDate] = useState<string[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage] = useState(1);
  
  return (
    <div className="flex w-full col-span-12 gap-1 relative h-screen">
    <div className="col-span-12 w-full flex flex-col  text-white max-w-[calc(100%-52px)]">
        {/* Header Filters */}
        <div className="flex space-x-2 mb-1 flex-wrap">
          <div className="relative w-full md:w-1/4 lg:w-1/5 mb-2">
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
            label="Issue Status"
            items={CompletionDate}
            selectedItems={date}
            setSelectedItems={setDate}
          />
          <DropdownFilter
            label="Issue Assigned To"
            items={CompletionDate}
            selectedItems={date}
            setSelectedItems={setDate}
          />
          <DropdownFilter
            label="Labels"
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
                <TableHead>Priority</TableHead>
                <TableHead className="flex items-center gap-1 text-gray-400">
                Issue 
                </TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Issue Status</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Reported Date</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead>Labels</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <Link
                  key={index}
                  href={`#`}
                  passHref
                  legacyBehavior
                >
                  <TableRow
                    key={index}
                   className="cursor-pointer hover:bg-[#262626] text-neutral-50 text-xs"
                  >
                     <TableCell className="flex items-center gap-2 text-gray-400">
      <RadioGroup defaultValue="priority">
        <RadioGroupItem value="no-priority" id="no-priority" />
      </RadioGroup>
      <label htmlFor="no-priority" className="cursor-pointer">
        No Priority
      </label>
    </TableCell>
                    <TableCell>
                        #5
                      </TableCell>
                    <TableCell>
                    Brake Light
                    </TableCell>
                    <TableCell><Badge className="bg-[#FACC15] text-white">Open</Badge></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>02/02/2025</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </Link>
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
  )
}

export default Issues