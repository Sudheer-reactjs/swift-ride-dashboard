import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-[340px] ]">
      {/* Search Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="pl-8 text-[14px] text-[#A1A1AA] font-light pr-4 py-2 h-[42px] rounded-md border border-[#27272A] focus:border-[#27272A] focus:ring focus:ring-border-[#27272A] transition bg-bgBlack"
      />
    </div>
  ); 
}
