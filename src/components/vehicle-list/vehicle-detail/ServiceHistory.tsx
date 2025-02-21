import { useState } from "react";
import { Input } from "@/components/ui/input";
import DropdownFilter from "../add-vehicle/DropdownFilter";
import { ArrowLeft, Clipboard, FileText, Image, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleData = [
  {
    workOrder: "-",
    completionDate: "02/01/2025 3:53 PM",
    meter: "11,276 mi",
    serviceTasks: ["Engine Oil & Filter Replacement", "Engine Air Filter Replacement"],
    issues: "-",
    vendor: "-",
    labels: "-",
    total: "$582.48",
    watch: "-",
  },
  // Add more sample data here if needed
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

const ServiceHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData] = useState(sampleData);
  const [date, setDate] = useState<string[]>([]);

  return (
    <div className="col-span-12 flex flex-col text-white p-4 pt-0">
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
        <table className="w-full text-left">
          <thead className="text-[#71717A]">
            <tr>
              <th className="p-3">Work Order</th>
              <th className="p-3">Actual Completion Date</th>
              <th className="p-3">Meter</th>
              <th className="p-3">Service Tasks</th>
              <th className="p-3">Issues</th>
              <th className="p-3">Vendor</th>
              <th className="p-3">Labels</th>
              <th className="p-3">Total</th>
              <th className="p-3">Watch</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-t border-[#262626] text-[#FAFAFA]">
                <td className="p-3">{item.workOrder}</td>
                <td className="p-3">{item.completionDate}</td>
                <td className="p-3">{item.meter}</td>
                <td className="p-3">
                  {item.serviceTasks.map((task, i) => (
                    <div key={i}>{task}</div>
                  ))}
                </td>
                <td className="p-3">{item.issues}</td>
                <td className="p-3">{item.vendor}</td>
                <td className="p-3">{item.labels}</td>
                <td className="p-3">{item.total}</td>
                <td className="p-3">{item.watch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-10 bg-[#171717] p-4 h-screen border-l z-20 fixed right-4 rounded-lg border-[#262626] flex flex-col items-center space-y-4">
        <Button className="p-1" variant="ghost">
          <ArrowLeft className="w-15 h-15" />
        </Button>
        <Button className="p-1" variant="ghost">
          <FileText className="w-15 h-15" />
        </Button>
        <Button className="p-1" variant="ghost">
          <Image className="w-15 h-15" aria-label="Image" />
        </Button>
        <Button className="p-1" variant="ghost">
          <Clipboard className="w-15 h-15" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceHistory;