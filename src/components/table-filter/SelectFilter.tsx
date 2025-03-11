import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { Label } from "../ui/label";

interface DropdownFilterProps {
  label: string;
  options: { value: string; label: string }[];
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectOptionFilter: React.FC<DropdownFilterProps> = ({
  label,
  options,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <DropdownMenu>
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
        <div className="col-span-12 w-full space-y-1">
          <Label className="text-sm font-medium text-gray-100 hidden">{label}</Label>
          <Select onValueChange={setSelectedItem} value={selectedItem || ""}>
            <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between border-t border-[#27272A] items-center mt-3 pt-3">
          <Button
            variant="outline"
            size="sm"
            className="w-full h-10 bg-[#171717] text-white border border-gray-600 hover:bg-[#262626]"
            onClick={() => setSelectedItem(null)}
          >
            Clear
          </Button>
          <Button
            size="sm"
            className={`w-full h-10 ml-2 bg-[#FAFAFA] text-black hover:bg-[#E5E5E5]`}
            onClick={() => console.log("Selected:", selectedItem)}
            disabled={!selectedItem}
          >
            Apply
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectOptionFilter;