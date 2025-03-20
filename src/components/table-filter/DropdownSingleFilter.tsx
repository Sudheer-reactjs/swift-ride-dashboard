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

interface DropdownFilterProps {
  label: string;
  items: string[];
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const DropdownSingleFilter: React.FC<DropdownFilterProps> = ({
  label,
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const chipContainerRef = useRef<HTMLDivElement>(null);

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // Set the selected item (single selection)
  const handleSelection = (item: string) => {
    setSelectedItem(item);
  };

  // Remove selected item
  const removeSelection = () => {
    setSelectedItem(null);
  };

  const isApplyDisabled = selectedItem === null;

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
        {/* Search Input with Selected Item */}
        <div className="relative border-b border-[#27272A] pb-3">
          {selectedItem && (
            <div
              ref={chipContainerRef}
              className="absolute  top-2 flex flex-wrap gap-1 max-h-24 overflow-y-auto w-full"
            >
              <span className=" text-white text-xs px-2 py-1 w-full flex justify-between items-center">
                {selectedItem}
                <button onClick={removeSelection} className="ml-1 ">
                  <X className="text-white hover:text-gray-400" size={16} />
                </button>
              </span>
            </div>
          )}

          <Input
            placeholder={selectedItem ? "" : "Select an item"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#171717] text-white border min-h-10 border-gray-600 rounded-md focus:ring-0 focus:outline-none px-3"
            style={{
              paddingTop: selectedItem ? "0px" : "0px",
            }}
          />
        </div>

        {/* Scrollable List */}
        <ScrollArea className="max-h-52 mt-2 overflow-y-auto custom-scrollbar">
          {filteredItems.map((item) => (
            <div
              key={item}
              className={`p-2 text-white rounded-md cursor-pointer transition flex justify-between items-center ${
                selectedItem === item ? "bg-[#262626]" : "hover:bg-[#262626]"
              }`}
              onClick={() => handleSelection(item)}
            > 
              {item} 
             
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

export default DropdownSingleFilter;
