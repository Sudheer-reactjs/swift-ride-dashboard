import React, { useState, useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, X } from "lucide-react";

// Updated interface for status items with id, label, and color
export interface StatusItem {
  id: string;
  label: string;
  color: string;
}

interface DropdownFilterProps {
  label: string;
  items: StatusItem[];
  selectedItems: StatusItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<StatusItem[]>>;
}

const StatusDropdown: React.FC<DropdownFilterProps> = ({
  label,
  items,
  selectedItems,
  setSelectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const chipContainerRef = useRef<HTMLDivElement>(null);
  const [inputHeight, setInputHeight] = useState(40); // Default input height

  // Filter items based on search input
  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) &&
      !selectedItems.some(selected => selected.id === item.id)
  );

  // Toggle item selection
  const toggleSelection = (item: StatusItem) => {
    setSelectedItems((prev) =>
      prev.some(i => i.id === item.id) 
        ? prev.filter((i) => i.id !== item.id) 
        : [...prev, item]
    );
  };

  // Remove selected item
  const removeSelection = (itemId: string) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  // Adjust input height dynamically based on selected items
  useEffect(() => {
    if (chipContainerRef.current) {
      setInputHeight(chipContainerRef.current.clientHeight + 20); // Add some padding
    }
  }, [selectedItems]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-[#27272A] h-10"
        >
          {label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2 w-[300px] ml-36 bg-[#0f0f0f] border border-[#27272A] rounded-lg shadow-lg">
        {/* Search Input with Selected Items */}
        <div className="relative border-b border-[#27272A] pb-3">
          <div
            ref={chipContainerRef}
            className="absolute left-3 top-2 flex flex-wrap gap-1 max-h-24 overflow-y-auto"
          >
            {selectedItems.map((item) => (
              <span
                key={item.id}
                className="bg-[#262626] text-white text-xs px-2 py-1 rounded-md flex items-center"
              >
                <div className={`w-2 h-2 rounded-full mr-1 ${item.color}`}></div>
                {item.label}
                <button onClick={() => removeSelection(item.id)} className="ml-1">
                  <X className="w-3 h-3 text-white hover:text-gray-400" />
                </button>
              </span>
            ))}
          </div>

          <Input
            placeholder={selectedItems.length > 0 ? "" : "Select status(es)"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#171717] text-white border min-h-10 border-gray-600 rounded-md focus:ring-0 focus:outline-none px-3"
            style={{
              height: `${inputHeight}px`,
              paddingTop: selectedItems.length > 0 ? "40px" : "0px",
            }}
          />
        </div>

        {/* Scrollable List */}
        <ScrollArea className="max-h-52 mt-2 overflow-y-auto custom-scrollbar">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-2 text-white rounded-md cursor-pointer transition hover:bg-[#262626] flex items-center"
              onClick={() => toggleSelection(item)}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${item.color}`}></div>
              {item.label}
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
            className="w-full h-10 ml-2 bg-[#FAFAFA] text-black hover:bg-[#E5E5E5]"
          >
            Apply
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;
