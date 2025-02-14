// components/LocationSelect.tsxs
"use client"
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LocationSelect() {
  const [value, setValue] = useState("atlanta") // Set default value to "atlanta"

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[200px] bg-zinc-950 border-zinc-800 text-white hide-value">
        <SelectValue  defaultValue="atlanta" placeholder="USA / ... / Atlanta"  />
      </SelectTrigger>
      <SelectContent className="bg-zinc-950 border-zinc-800">
        <SelectGroup>
          <SelectItem value="atlanta" className="text-white hover:bg-zinc-800 focus:bg-zinc-800">
            <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252]">USA / Southeast Region</span>
            <span className="flex items-center gap-2 text-[#fff] font-medium">
                Atlanta
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3A3A3] text-[#18181B] ">Sample</span>
              </span>
            </div>
          </SelectItem>
          <SelectItem value="birmingham" className="text-white hover:bg-zinc-800 focus:bg-zinc-800">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#525252]">USA / Southeast Region</span>
              <span className="flex items-center gap-2 text-[#fff] font-medium">
                Birmingham
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3A3A3] text-[#18181B] ">Sample</span>
              </span>
            </div>
          </SelectItem>
        </SelectGroup>
        
        <SelectGroup>
          <SelectItem value="chicago" className="text-white hover:bg-zinc-800 focus:bg-zinc-800">
            <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252]">USA / Midwest Region</span>
            <span className="flex items-center gap-2 text-[#fff] font-medium">
                Chicago
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3A3A3] text-[#18181B] ">Sample</span>
              </span>
            </div>
          </SelectItem>
        </SelectGroup>
        
        <SelectGroup>
          <SelectItem value="london" className="text-white hover:bg-zinc-800 focus:bg-zinc-800">
            <div className="flex flex-col gap-1">
            <span className="text-xs text-[#525252]">UK</span>
            <span className="flex items-center gap-2 text-[#fff] font-medium">
                London
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3A3A3] text-[#18181B] ">Sample</span>
              </span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}