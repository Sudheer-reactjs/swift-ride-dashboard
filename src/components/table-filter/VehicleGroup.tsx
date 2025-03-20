import React, { useState, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, X } from "lucide-react";

interface VehicleGroupProps {
  label: string;
  items: { id: string; country: string; region: string; state: string }[];
  selectedItems: { id: string; country: string; region: string; state: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<
      { id: string; country: string; region: string; state: string }[]
    >
  >;
}

const VehicleGroup: React.FC<VehicleGroupProps> = ({
  label,
  items,
  selectedItems,
  setSelectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const chipContainerRef = useRef<HTMLDivElement>(null);

  // Filter items based on search input
  const filteredItems = items.filter(
    (item) =>
      (item.state.toLowerCase().includes(search.toLowerCase()) ||
        item.region.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase())) &&
      !selectedItems.some((selected) => selected.id === item.id)
  );

  // Toggle item selection
  const toggleSelection = (item: {
    id: string;
    country: string;
    region: string;
    state: string;
  }) => {
    setSelectedItems((prev) =>
      prev.some((selected) => selected.id === item.id)
        ? prev.filter((selected) => selected.id !== item.id)
        : [...prev, item]
    );
  };

  // Remove selected item
  const removeSelection = (id: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };


  const isApplyDisabled = selectedItems.length === 0;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 border-[#27272A] h-10">
          {label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2 w-[300px] ml-36 bg-[#0f0f0f] border border-[#27272A] rounded-lg shadow-lg">
        {/* Search Input with Selected Items */}
        <div className="relative bg-[#171717] border border-gray-600 rounded-md">
        
        {selectedItems.length > 0 && (  
          <div ref={chipContainerRef} className="flex p-2 pb-0 flex-wrap gap-1 max-h-24 overflow-y-auto" >
            {selectedItems.map((item) => (
              <span key={item.id} className="bg-[#262626] text-white text-xs px-2 py-1 rounded-md flex items-center">
                {item.country} / {item.region} / {item.state}
                <button onClick={() => removeSelection(item.id)} className="ml-1">
                  <X className="w-3 h-3 text-white hover:text-gray-400" />
                </button>
              </span>
            ))}
          </div>
            )}

          <Input
            placeholder={selectedItems.length > 0 ? "" : "Select item(s)"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#171717] text-white border-0 h-10  focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Scrollable List */}
        <ScrollArea className="max-h-52 mt-3 overflow-y-auto custom-scrollbar border-t border-[#27272A] items-center pt-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-2 text-white rounded-md cursor-pointer transition flex justify-between items-center ${
                selectedItems.some((selected) => selected.id === item.id)
                  ? "bg-[#262626]"
                  : "hover:bg-[#262626]"
              }`}
              onClick={() => toggleSelection(item)}
            >
              <div className="flex flex-col">
                <span className="opacity-60 text-neutral-50 text-xs font-normal">
                  {item.country} / {item.region}
                </span>
                <span className="flex items-center gap-2 text-[#fff] font-medium">{item.state} 
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3A3A3] text-[#18181B] ">Sample</span></span> 
              </div>
              {selectedItems.some((selected) => selected.id === item.id) && (
                <X className="w-4 h-4 text-gray-400" />
              )}
            </div>
          ))}
        </ScrollArea>

        {/* Action Buttons */}
        <div className="flex justify-between border-t border-[#27272A] items-center mt-3 pt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="w-full h-10 bg-[#171717] text-white border border-gray-600 hover:bg-[#262626]"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={() => setIsOpen(false)}
            className={`w-full h-10 ml-2 ${
              isApplyDisabled
                ? "bg-[#FAFAFA] text-black opacity-50 cursor-not-allowed"
                : "bg-[#FAFAFA] text-black hover:bg-[#E5E5E5]"
            }`}
            disabled={isApplyDisabled}
          >
            Apply
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VehicleGroup;
