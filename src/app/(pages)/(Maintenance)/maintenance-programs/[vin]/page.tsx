"use client";
import { Button } from "@/components/ui/button";
import { Car, ChevronDown, ChevronLeft, Pen, Plus, Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Page = () => {
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/maintenance-history"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Maintenance
        Programs
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/images/dummy-image.png"
            alt="Logo"
            width={32}
            height={32}
            priority
            className="rounded-sm object-cover "
          />
          <h2 className="text-zinc-100 text-sm font-semibold">Swift Ride</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2 text-neutral-50 "
          >
            <Pen /> Edit
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-[#047857] hover:bg-[#047857] min-h-10 text-white flex items-center gap-1 focus:none outline-none border-0 shadow-none"
              >
                <Plus size={16} />
                <span>Add</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 mr-4">
              <DropdownMenuGroup>
                <DropdownMenuItem className="p-0">
                  <Link
                    className="flex gap-2 items-center  justify-between w-full p-[8px] "
                    href="#"
                  >
                    Add Maintenance Schedule
                    <Car size={16} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    className="flex gap-2 items-center justify-between w-full p-[8px]"
                    href="#"
                  >
                    Add Vehicles
                    <Wrench size={16}/>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
       
    </div>
  );
};

export default Page;
