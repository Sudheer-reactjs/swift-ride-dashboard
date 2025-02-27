import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Desktop Search Bar (Always Visible) */}
      <div className="hidden md:block relative w-full max-w-[340px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-8 text-[14px] text-[#A1A1AA] font-light pr-4 py-2 h-[42px] rounded-md border border-[#27272A] focus:border-[#27272A] focus:ring focus:ring-border-[#27272A] transition bg-bgBlack w-full"
        />
      </div>

      {/* Mobile Popover Search */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button 
            className="p-3 rounded-full bg-[#09090B] border-[#27272A] text-solid-zinc-400 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Search size={16} className="text-zinc-400" />
          </button>
        </PopoverTrigger>
        <PopoverContent 
          align="start" 
          className="w-[300px] mr-2 p-0 bg-gray-900 border border-none rounded-none shadow-none md:hidden"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <Input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder={placeholder}
              className="pl-8 text-[14px] text-[#A1A1AA] font-light pr-4 py-2 h-[42px] rounded-md border border-[#27272A] focus:border-[#27272A] focus:ring focus:ring-border-[#27272A] transition bg-bgBlack w-full"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
