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

interface DropdownFilterProps {
  label: string;
  items: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
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
      item.toLowerCase().includes(search.toLowerCase()) &&
      !selectedItems.includes(item)
  );

  // Toggle item selection
  const toggleSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Remove selected item
  const removeSelection = (item: string) => {
    setSelectedItems((prev) => prev.filter((i) => i !== item));
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
          className="flex items-center gap-2 border-[#27272A] min-w-[150px] h-10"
        >
          {label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2 w-[300px] ml-36 bg-[#0f0f0f] border border-[#27272A] rounded-lg shadow-lg">
        {/* Search Input with Selected Items */}
        <div className="relative">
          <div
            ref={chipContainerRef}
            className="absolute left-3 top-2 flex flex-wrap gap-1 max-h-24 overflow-y-auto"
          >
            {selectedItems.map((item) => (
              <span
                key={item}
                className="bg-[#262626] text-white text-xs px-2 py-1 rounded-md flex items-center"
              >
                {item}
                <button onClick={() => removeSelection(item)} className="ml-1">
                  <X className="w-3 h-3 text-white hover:text-gray-400" />
                </button>
              </span>
            ))}
          </div>

          <Input
            placeholder={selectedItems.length > 0 ? "" : "Select item(s)"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full bg-[#171717] text-white border border-gray-600 rounded-md focus:ring-0 focus:outline-none px-3`}
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
              key={item}
              className="p-2 text-white rounded-md cursor-pointer transition hover:bg-[#262626]"
              onClick={() => toggleSelection(item)}
            >
              {item}
            </div>
          ))}
        </ScrollArea>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-3">
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
           
            className={`w-full h-10 ml-2 bg-[#FAFAFA] text-black hover:bg-[#E5E5E5]`}
          >
            Apply
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFilter;