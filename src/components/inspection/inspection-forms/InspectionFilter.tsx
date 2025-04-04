import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Ellipsis,
  ListFilter,
  Plus,
  Search,
  Trash2,
  XIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingCard from "./SettingCard";
interface Vehicle {
  vehicle: string;
  inspectionForm: string;
  status: string;
  nextDue: string;
  lastInspected: string;
  schedule: string;
  frequency: string;
  manuallyOverridden: string;
  watchers: string;
  meter: string;
  vin: string;
}
interface VehicleTableProps {
  vehicles: Vehicle[];
  isOpen: boolean;
  toggleFilterPanel: () => void;
}
const stats = [
  { label: "Items", count: 23, link: "inspection-forms/current_inspection_items" },
  { label: "Workflows", count: 23, link: "/workflows" },
  { label: "Vehicles", count: 23, link: "/vehicles" },
  { label: "Submissions", count: 23, link: "/submissions" },
];

const InspectionSchedulesTable: React.FC<VehicleTableProps> = ({
  isOpen,
  toggleFilterPanel,
}) => {
  const [addFilter, setAddFilter] = useState(false);
  const [filters, setFilters] = useState([{ id: 1, field: "" }]);

  const addNewFilter = () => {
    setFilters([...filters, { id: filters.length + 1, field: "" }]);
  };
 
  return (
    <>
      <div className="w-full relative overflow-hidden min-h-screen">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 lg:col-span-4 md:max-w-[320px]">
            <div className="outline outline-1 outline-offset-[-1px] outline-neutral-800 border shadow bg-[#171717] border-none text-white rounded-md">
              <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
                <CardHeader className="p-4">
                  <CardTitle>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="text-base font-medium">Settings</div>
                      <Button
                        variant="outline"
                        className="flex items-center h-10 px-3"
                      >
                        <Ellipsis className="h-4 w-2" />
                      </Button>
                    </div>
                    <p className="text-neutral-500 text-sm font-normal leading-[18px] mt-2 truncate block w-full">
                      As required by the US Dept. of Transportation Federal
                      Motor Carrier Safety Regulations in FMCSA 396.11.a.1
                    </p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-3">
                  {stats.map((stat, index) => (
                    <SettingCard key={index} {...stat} />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Filter Panel - Positioned Absolutely */}
        <div
          aria-hidden={!isOpen}
          className="absolute max-w-[430px] w-full top-0 bottom-0 right-0 border-[1px]  bg-neutral-900 rounded  border-zinc-800 flex-col justify-start items-start gap-10 inline-flex"
          data-testid="index-filters-aside"
          style={{
            zIndex: 3,
            transition: "transform 300ms ease-in-out",
            transform: isOpen ? "translateX(0)" : "translateX(450px)",
          }}
        >
          <div className="flex-shrink-0 w-full h-full overflow-auto bg-[#171717] ">
            <div className="flex  px-4 py-2 items-center justify-between sticky top-0 bg-[#171717] z-10">
              <h3 className="text-neutral-50 text-xl font-semibold leading-7 justify-start items-center gap-2.5 inline-flex">
                <ListFilter className="w-6 h-6" /> Filters
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toggleFilterPanel();
                  setAddFilter(false);
                }}
              >
                <XIcon className="!h-7 !w-7" strokeWidth={1} />
              </Button>
            </div>
            <hr className="border-zinc-800" />
            <div className="p-4 pt-0">
              {addFilter ? (
                <div className="space-y-4 h-screen w-full">
                  {filters.map((filter) => (
                    <div
                      key={filter.id}
                      className="p-3 border mt-5 rounded-sm w-full border-[#27272A] relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-white">
                          New Filter
                        </span>
                        <button
                          onClick={() => setAddFilter(false)}
                          className="text-gray-400"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                        <Select>
                          <SelectTrigger className="pl-10 w-full">
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={addNewFilter}
                      className="text-[#047857] flex items-center space-x-1 text-sm"
                    >
                      <Plus size={18} /> <span>Add Filter</span>
                    </button>

                    <Button disabled className="bg-[#047857] text-white">
                      Apply
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mt-4 text-white">No filters applied.</div>
                  <Button
                    className="w-full mt-4 flex items-center gap-2 min-h-10"
                    onClick={() => setAddFilter(true)}
                  >
                    <Plus className="w-4 h-4" /> Add Filter
                  </Button>
                  <ScrollArea className="mt-6">
                    <div className="text-sm text-white">POPULAR FILTERS</div>
                    <div className="mt-2 flex flex-col space-y-2">
                      <a href="#" className="text-[#047857] hover:underline">
                        Vehicle
                      </a>
                      <a href="#" className="text-[#047857] hover:underline">
                        Vehicle Group
                      </a>
                    </div>
                  </ScrollArea>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspectionSchedulesTable;
