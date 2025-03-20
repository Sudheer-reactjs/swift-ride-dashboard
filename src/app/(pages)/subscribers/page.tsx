"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Filter, Plus, X, Lock, Search, Users, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import VehicleGroup from "@/components/table-filter/VehicleGroup";
import VehicleStatus from "@/components/table-filter/VehicleStatusFilter";
import DropdownSingleFilter from "@/components/table-filter/DropdownSingleFilter";
import TableSubscribers from "@/components/subscribers/TableSubscribers";

const vehicles = Array.from({ length: 15 }, (_, index) => ({
  name: "Owayne Wallace",
  email: "owaynee@gmail.com",
  telephone: "+4708844002",
  status: index % 2 === 0 ? "Active" : "Deactivated",
  group: "Birmingham",
  vin: "KNAGM4AD5060558",
  operator: "Jacob Silva",
}));

const vehicleGroup = [
  { id: "V005", country: "USA", region: "Southeast Region", state: "Atlanta" },
  { id: "V006", country: "USA", region: "Southeast Region", state: "Miami" },
];

const vehicleStatuses = [
  { id: "no-access", label: "No Access", color: "bg-[#9a9998]" },
  { id: "needs-invite", label: "Needs Invite", color: "bg-[#27a2eb]" },
  { id: "invited", label: "Invited", color: "bg-blue-500" },
  { id: "active", label: "Active", color: "bg-[#28a466]" },
  { id: "dormant", label: "Dormant", color: "bg-[#9ee3b8]" },
  { id: "deactivated", label: "Deactivated", color: "bg-[#f65f54]" },
];
const userType = ["Administrator", "Regular User", "Account Owner"];
const classification = ["Employee", "Operator", "Technician"];

const Pages = () => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedTypesGroup, setSelectedTypesGroup] = useState<
    { id: string; country: string; region: string; state: string }[]
  >([]);
  const [selectedStatuses, setSelectedStatuses] = useState<
    { id: string; label: string; color: string }[]
  >([]);
  const [selectedUserType, setSelectedUserType] =
    useState<string | null>(null);
    const [selectedClassification, setSelectedClassification] =
    useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("private");

  const toggleFilterPanel = () => {
    setIsOpen((prev) => !prev);
  };

  const getIcon = () => {
    switch (selected) {
      case "private":
        return <Lock size={16} className="text-gray-400 mr-2" />;
      case "team":
        return <Users size={16} className="text-gray-400 mr-2" />;
      case "public":
        return <Globe size={16} className="text-gray-400 mr-2" />;
      default:
        return null;
    }
  };

  const router = useRouter();
  return (
    <>
      {/* Header Actions */}
      <div className="flex flex-wrap justify-between items-centre mb-4 gap-2">
        <h2 className="text-neutral-50 text-3xl font-semibold"> Subscribers</h2>
        <Button
          variant="outline"
          className="flex items-center h-10 bg "
          onClick={() => router.push("/subscribers/new")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Subscribers
        </Button>
      </div>

      <div className="flex gap-1 md:gap-5 mb-2 items-center">
        {/* Main tabs container - will wrap on small screens */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex items-center text-sm gap-1 border-[0.5px] p-[2px] rounded-sm border-black-700">
            {[
              "All",
              "Users",
              "No User Access User Accesssigned",
              "Archived",
            ].map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? "secondary" : "ghost"}
                onClick={() => setSelectedTab(tab)}
                className={cn(
                  "text-xs text-zinc-500 sm:text-sm flex items-center rounded-md px-2 sm:px-3 py-1 sm:py-2 transition-all",
                  selectedTab === tab
                    ? "bg-[#171717] text-white"
                    : "hover:bg-[#171717]"
                )}
              >
                <div className="flex justify-center items-center min-w-0 sm:min-w-16">
                  {tab}
                  {selectedTab === tab && <span className="ml-1">...</span>}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex space-x-2 mb-1 ">
        <div className="relative w-full md:w-1/2 lg:w-1/5 mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-black text-white border-[#27272A] w-full h-10"
          />
        </div>
        <div className="hidden xl:flex flex-wrap gap-2">
         
          <VehicleStatus
            label="User Status"
            items={vehicleStatuses}
            selectedItems={selectedStatuses}
            setSelectedItems={setSelectedStatuses}
          />
           <DropdownSingleFilter
            label="User Type"
            items={userType}
            selectedItem={selectedUserType}
            setSelectedItem={setSelectedUserType}
          />
           <DropdownSingleFilter
            label="Classification"
            items={classification}
            selectedItem={selectedClassification}
            setSelectedItem={setSelectedClassification}
          />
          <VehicleGroup
            label="Groups"
            items={vehicleGroup}
            selectedItems={selectedTypesGroup}
            setSelectedItems={setSelectedTypesGroup}
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 h-10 mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter />
          Filters
        </Button>
      </div>

      {/* Table Container */}
      <TableSubscribers
        vehicles={vehicles}
        isOpen={isOpen}
        toggleFilterPanel={toggleFilterPanel}
      />

      {/* Pagination */}

      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-screen-md bg-[#171717] text-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center py-4 border-b border-gray">
              <DialogTitle className="text-xl font-semibold">
                New Saved View
              </DialogTitle>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={25} />
              </button>
            </div>

            {/* Body */}
            <div className=" space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-[#FAFAFA]">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Please Select"
                  className="mt-1 bg-[#09090B] border-[#27272A] text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-sm font-medium text-[#FAFAFA]">
                  Description
                </label>
                <Textarea
                  placeholder="Help others understand the purpose of this view (Optional)"
                  className="mt-1 bg-[#09090B] border-[#27272A] text-[#FAFAFA]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Shared With */}
              <div>
                <label className="block text-sm font-medium text-[#FAFAFA]">
                  Shared with
                </label>
                <Select onValueChange={(value) => setSelected(value)}>
                  <SelectTrigger className="mt-1 bg-[#09090B] border-[#27272A] text-white flex items-center">
                    <div className="flex items-center">
                      {getIcon()}
                      <SelectValue placeholder="Private" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-black border-[#27272A] text-white">
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-[18px] text-[#A1A1AA] mt-1">
                  {selected === "private"
                    ? "Visible only to you"
                    : selected === "team"
                    ? "Visible to your team"
                    : "Visible to everyone"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-end space-x-3">
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="text-[#FAFAFA] h-10 w-[65px] hover:text-white"
              >
                Cancel
              </Button>
              <Button className="bg-[#065F46] text-white h-10 w-[65px] hover:bg-green-900">
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Pages;
