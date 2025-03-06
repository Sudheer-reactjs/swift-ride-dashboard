import { useState } from "react";
import { Input } from "@/components/ui/input";
import DropdownFilter from "../../table-filter/VehicleTypeFilter";
import {  Search,  ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import SidebarWidget from "../SidebarWidget";

const sampleData = [
  {
    serviceTasks: ["Engine Oil & Filter Replacement", "Every 6 month(s) or 10,000 miles"],
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

const ServiceReminders = () => {
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
          label="Service Task"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Due Date"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Watchers"
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
              <TableHead>Service Tasks</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Next Due</TableHead>
              <TableHead>Active Work Order</TableHead>
              <TableHead>Service Program</TableHead>
              <TableHead>Last Completed</TableHead>           
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <Link key={index} href={`/vehicle-list/service-reminder/sff`} passHref legacyBehavior>
              <TableRow key={index} className="cursor-pointer hover:bg-[#262626] text-neutral-50 text-xs">
                <TableCell>
                  <div>Engine Oil & Filter Replacement</div>
                  <div className="text-gray-400">Every 6 month(s) or 10,000 miles</div>
                </TableCell>
                <TableCell>
                Due Soon
                </TableCell>
                <TableCell>
                  <div>3 months from now</div>
                  <div className="text-[#F59E0B] text-[10px]">467 miles remainig</div>
                </TableCell>
                <TableCell>
                  --
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <div>11/02/2025</div>
                  <div className="text-[#F59E0B] text-[10px]">11 278 mi</div>
                </TableCell>
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

export default ServiceReminders