"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Car, Check, ChevronDown, ChevronLeft, Pen, Plus, Wrench } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import SchedulesTable from "@/components/maintenance/maintenance-programs/SchedulesTable";

const vehicles = Array(3).fill({
  intervals: "Swift Ride",
  maintenanceTasks: "	Engine Oil & Filter Replacement Tire Rotation",
});

const Page = () => {
   const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Button
        className="justify-start items-center max-w-max gap-2.5 inline-flex text-neutral-50 text-sm font-normal bg-transparent hover:bg-transparent p-0 border-0"
        onClick={() => router.back()}
      >
        <ChevronLeft size={24} className="text-[#A1A1AA] !w-6 !h-6" /> Maintenance
        Programs
      </Button>

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
                    <Wrench size={16} />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 size-span">
        <Tabs defaultValue="schedules" className="w-full">
          <TabsList className="flex w-auto max-w-max border-b border-zinc-800 bg-transparent rounded-none justify-start p-0 mb-6">
            <TabsTrigger
              value="schedules"
              className={cn(
                "text-xs text-neutral-300 flex items-center gap-2 rounded-none px-2.5 relative top-[1px] py-2 transition-all border-b-2 border-transparent hover:bg-transparent hover:text-emerald-600",
                "data-[state=active]:text-emerald-600 data-[state=active]:bg-transparent data-[state=active]:border-emerald-600"
              )}
            >
              Maintenance Schedules
              <div className="min-w-5 min-h-5 aspect-square p-1 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
                <div className="self-stretch text-center justify-center text-neutral-50 text-xs font-normal leading-none">
                  {vehicles.length}
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="vehicles"
              className={cn(
                "text-xs text-neutral-300 flex items-center rounded-none px-2.5 py-2  relative top-[1px] transition-all border-b-2 border-transparent hover:bg-transparent hover:text-emerald-600",
                "data-[state=active]:text-emerald-600 data-[state=active]:bg-transparent data-[state=active]:border-emerald-600"
              )}
            >
              Vehicles
            </TabsTrigger>
          </TabsList>
          <TabsContent value="schedules">
            <SchedulesTable vehicles={vehicles} />
          </TabsContent>
          <TabsContent value="vehicles">
            <div className="flex max-w-3xl w-full m-auto flex-col gap-4 size-span">
              <h2 className="justify-start text-neutral-50 text-3xl font-bold leading-9 text-center">
                Add Vehicles to Maintenance Programs
              </h2>
              <p className="justify-start text-zinc-500 text-sm font-normal  leading-tight">
                Maintenance Reminders will automatically be applied to each
                Vehicle you add the Maintenance Program
              </p>
              <div className="p-4 bg-neutral-900 rounded-md inline-flex flex-col justify-start items-start gap-6">
                <div className="inline-flex flex-col justify-start items-start gap-2">
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="w-5 h-5 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
                      <Check  size={16}/>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch justify-start text-neutral-50 text-base font-medium  leading-normal">
                        Select Vehicles by different criteria
                      </div>
                    </div>
                  </div>
                  <div className="w-[662px] justify-start text-zinc-400 text-sm font-normal  leading-tight">
                    Add Vehicles to the program based on different criteria such
                    as Type, Group, or Year Make Model. making it easy to
                    quickly pull in the right assets.
                  </div>
                </div>
            
              <div className="inline-flex flex-col justify-start items-start gap-2">
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="w-5 h-5 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
                      <Check  size={16}/>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch justify-start text-neutral-50 text-base font-medium  leading-normal">
                      Streamline preventative maintenance managament
                      </div>
                    </div>
                  </div>
                  <div className="w-[662px] justify-start text-zinc-400 text-sm font-normal  leading-tight">
                  Vehicles within th program all receive the same schedules, making it easy to adjust intervals and tasks as needs change.
                  </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-2 ">
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="w-5 h-5 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
                      <Check  size={16}/>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch justify-start text-neutral-50 text-base font-medium  leading-normal">
                      Onboard new Vehicles quickly
                      </div>
                    </div>
                  </div>
                  <div className="w-[662px] justify-start text-zinc-400 text-sm font-normal  leading-tight">
                    When a new Vehicle is added to Fleetio, add it to an existing program in seconds.
                  </div>
              </div>
              </div>
              <div className="flex flex-col-reverse max-w-3xl m-auto w-full md:flex-row justify-center md:justify-between !mt-6">
        <Button variant="outline" className="border-0 h-10 text-xs md:text-sm"
         onClick={() => router.back()}
        >
          Cancel
        </Button>
        <div className="space-x-2 m:dspace-x-4 flex justify-center ">
          <Button className="bg-emerald-800 text-white hover:bg-emerald-700 h-10 text-xs md:text-sm">
          Add Vehicles to Maintenance Programs
          </Button>
        </div>
      </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
