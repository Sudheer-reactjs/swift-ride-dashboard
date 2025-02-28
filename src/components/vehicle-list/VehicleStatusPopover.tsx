"use client";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from "react";

import { Search, X, ChevronDown } from "lucide-react";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Vehicle {
  id: string;
  name: string;
}

interface VehiclePopoverProps {
  vehicles: Vehicle[];
  onSelect: (vehicle: Vehicle) => void;
  label?: string;
}

export default function VehicleStatusPopover({ vehicles, onSelect, label = "Select Vehicle" }: VehiclePopoverProps) {
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null); // Selected vehicle

  const handleClearSearch = () => setSearchQuery("");

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSearchQuery(""); // Keep the search bar empty, but don't remove other values
    onSelect(vehicle);
  };

  const filteredVehicles = searchQuery
    ? vehicles.filter((vehicle) =>
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : vehicles;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-10 flex items-center justify-between px-3 py-2 border rounded-md text-sm bg-black text-white border-[#27272A]"
        >
          {selectedVehicle ? `${selectedVehicle.id} [${selectedVehicle.name}]` : label}
          <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-80 p-2 bg-[#09090B] text-white rounded-lg shadow-lg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 mb-2 border border-[#27272A] bg-black text-white pr-8"
          />
          {searchQuery && (
            <X
              className="absolute right-2 top-3 w-4 h-4 cursor-pointer text-gray-400 hover:text-white"
              onClick={handleClearSearch}
            />
          )}
        </div>
        <ScrollArea className="h-40 border-y border-[#27272A] my-4">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer"
              onClick={() => handleSelectVehicle(vehicle)}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>{vehicle.id} [{vehicle.name}]</span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-green-700 rounded-full" /> Active • Car • Management
                </span>
              </div>
            </div>
          ))}
          {filteredVehicles.length === 0 && (
            <p className="text-center text-gray-500 py-4">No vehicles found</p>
          )}
        </ScrollArea>
        <div className="flex justify-between gap-2 mt-2">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="default" size="sm">Apply</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
