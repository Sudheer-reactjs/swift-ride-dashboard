import { useState } from "react";
import { Input } from "@/components/ui/input";
import DropdownFilter from "../add-vehicle/DropdownFilter";
import { CornerUpLeft, Image, MessageSquareText, Search, StickyNote,  ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

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
    <>
    <div className="col-span-12 flex flex-col  text-white p-4 pt-0">
      {/* Header Filters */}
      <div className="flex space-x-2 mb-1 flex-wrap">
        <div className="relative w-full md:w-1/4 lg:w-1/5 mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black text-white border-[#27272A] w-full h-10"
          />
        </div>
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

      {/* Table */}
      <div className="overflow-auto border max-w-[99%] bg-[#171717] border-[#262626] rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
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
              <Link key={index} href={`#`} passHref legacyBehavior>
              <TableRow key={index} className="cursor-pointer hover:bg-[#262626]">
                <TableCell>
                  <div>Engine Oil & Filter Replacement</div>
                  <div className="text-gray-400">Every 6 month(s) or 10,000 miles</div>
                </TableCell>
                <TableCell>
                Due Soon
                </TableCell>
                <TableCell>
                  <div>3 months from now</div>
                  <div className="text-[#F59E0B]">467 miles remainig</div>
                </TableCell>
                <TableCell>
                  --
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <div>11/02/2025</div>
                  <div className="text-[#F59E0B]">11 278 mi</div>
                </TableCell>
              </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between w-[99%] items-center text-gray-400 text-sm mt-2 p-3">
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
          <Button variant="outline" > <ChevronsLeft className="w-4 h-4" /> </Button>
      <Button variant="outline" > <ChevronLeft className="w-4 h-4" /> </Button>
      <Button variant="outline" > <ChevronRight className="w-4 h-4" /> </Button>
      <Button variant="outline" > <ChevronsRight className="w-4 h-4" /> </Button>  
        </div>
      </div>

    </div>
    <div className="w-10 bg-[#171717] p-4 h-screen border-l z-20 fixed right-4 rounded-lg border-[#262626] flex flex-col items-center space-y-2">
    <Button className="p-1" variant="ghost">
      <CornerUpLeft className="w-4 h-4" />
    </Button>
    <Button className="p-1" variant="ghost">
      <MessageSquareText className="w-4 h-4" />
    </Button>
    <Button className="p-1" variant="ghost">
      <Image className="w-4 h-4" aria-label="Image" />
    </Button>
    <Button className="p-1" variant="ghost">
      <StickyNote className="w-4 h-4" />
    </Button>
  </div>
  </>
  )
}

export default ServiceReminders