import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
  ChevronsUpDown,
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
import RightSideBar from "./RightSideBar";

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



const RenewalReminder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData] = useState(sampleData);

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
          
        </div>

        {/* Table */}
        <div className="overflow-auto border max-w-[99%] bg-[#171717] border-[#262626] rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead className="flex items-center gap-1 text-gray-400">
                  Status <ChevronsUpDown size={14} className="text-gray-500" />
                </TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Notifications Enabled</TableHead>
                <TableHead>Watchers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <Link
                  key={index}
                  href={`/vehicle-list/service-history/sff`}
                  passHref
                  legacyBehavior
                >
                  <TableRow
                    key={index}
                    className="cursor-pointer hover:bg-[#262626]"
                  >
                    <TableCell>Emission test</TableCell>
                    <TableCell><div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.status === "Due Soon" ? "bg-[#DC2626]" : "bg-gray-500"}`} />
                        {item.status}
                      </div></TableCell>
                    <TableCell>
                      <div>Feb 11, 2026</div>
                      <div className="text-[#EF4444]">1 hour ago</div>
                    </TableCell>
                    <TableCell>✓</TableCell>
                    <TableCell>-</TableCell>
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
      <RightSideBar />
    </>
  );
};

export default RenewalReminder;
