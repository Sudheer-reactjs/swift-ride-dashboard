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

interface code {
  id: string;
  name: string;
}

interface VehicleGroupProps {
  label: string;
  items: code[];
  selectedItems: code[];
  setSelectedItems: React.Dispatch<React.SetStateAction<code[]>>;
}

const DropdownListFilter: React.FC<VehicleGroupProps> = ({
  label,
  items,
  selectedItems,
  setSelectedItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const chipContainerRef = useRef<HTMLDivElement>(null);;

  // Filter items based on search input
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      !selectedItems.some((selected) => selected.id === item.id)
  );

  // Toggle item selection
  const toggleSelection = (item: code) => {
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
        <Button
          variant="outline"
          className="flex items-center gap-2 border-[#27272A] h-10"
        >
          {label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2 w-[300px] ml-36 bg-[#0f0f0f] border border-[#27272A] rounded-lg shadow-lg">
        <div className="relative bg-[#171717] border border-gray-600 rounded-md">
        
        {selectedItems.length > 0 && (  
            <div
            ref={chipContainerRef}
            className="flex p-2 pb-0 flex-wrap gap-1 max-h-24 overflow-y-auto" 
          >
            {selectedItems.map((item) => {
              const originalIndex = items.findIndex((i) => i.id === item.id);

              return (
                <span
                  key={item.id}
                  className="bg-[#262626] text-white text-xs px-2 py-1 rounded-md flex items-center"
                >
                  <span className="text-gray-400 mr-1">
                    {originalIndex + 1}
                  </span>{" "}
                  {item.name}
                  <button
                    onClick={() => removeSelection(item.id)}
                    className="ml-1"
                  >
                    <X className="w-3 h-3 text-white hover:text-gray-400" />
                  </button>
                </span>
              );
            })}
          </div>
          )}

          <Input
            placeholder={selectedItems.length > 0 ? "" : "Select item(s)"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#171717] text-white border-0 h-10  focus:ring-0 focus:outline-none"
          />
        </div>

        <ScrollArea className="max-h-52 mt-3 overflow-y-auto custom-scrollbar border-t border-[#27272A] items-center pt-3">
          {filteredItems.map((code, index) => (
            <div
              key={code.id}
              className={`p-2 text-white rounded-md cursor-pointer transition flex gap-2 ${
                selectedItems.some((selected) => selected.id === code.id)
                  ? "bg-[#262626]"
                  : "hover:bg-[#262626]"
              }`}
              onClick={() => toggleSelection(code)}
            >
              <span className="text-gray-400 text-sm ">{index + 1}</span>
              <div className="flex flex-col">
                <span className="text-neutral-50 text-sm font-normal">
                  {code.name}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
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

export default DropdownListFilter;
