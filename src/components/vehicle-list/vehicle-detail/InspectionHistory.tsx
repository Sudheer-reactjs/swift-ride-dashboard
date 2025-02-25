import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react'
import React, { useState } from 'react'
import DropdownFilter from '../add-vehicle/DropdownFilter'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const sampleData = [
  {
    submmitted: "Fri, Jan 30, 2025 5:54 PM",
    duration: "9m",
    inspectionForm: "Driver Vehicle Inspection Report (Simple)",
    user:"Jacob Sliva",
    location: "-",
    failedItems: "Windshield and Wipers/Washers",

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
const InspectionHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
    const [filteredData] = useState(sampleData);
    const [date, setDate] = useState<string[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage] = useState(1);
  return (
    <div className="col-span-12 flex flex-col  text-white p-4 pt-0">
      {/* Header Filters */}
      <div>
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
          label="Completion Date"
          items={CompletionDate}
          selectedItems={date}
          setSelectedItems={setDate}
        />
        <DropdownFilter
          label="Service Tasks"
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

      {/* Table */}
      <div className="overflow-auto border max-w-[98%] bg-[#171717] border-[#262626] rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Submitted</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Inspection Form</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Location Exception</TableHead>
              <TableHead>Failed Items</TableHead>
              
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <Link key={index} href={`/vehicle-list/inspection-form/ffd`} passHref legacyBehavior>
              <TableRow key={index} className="cursor-pointer hover:bg-[#262626]">
                <TableCell>{item.submmitted}</TableCell>
                <TableCell>{item.duration}</TableCell>
                <TableCell>{item.inspectionForm}</TableCell>
                <TableCell>
                <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {item.user}
                      </div>
                </TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.failedItems}</TableCell>                
              </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-between w-[99%]  items-center text-gray-400 text-sm mt-2 p-3">
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
  )
}

export default InspectionHistory