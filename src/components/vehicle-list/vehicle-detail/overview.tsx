// components/VehicleDetails.tsx
'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, CheckSquare, MoreHorizontal } from 'lucide-react';

interface VehicleDetailsProps {
  vehicleId?: string;
}

const Overview: FC<VehicleDetailsProps> = ({  }) => {
  return (
   <>
      <div className="lg:col-span-6 col-span-12">
        {/* Details Card */}
        <Card className="bg-[#171717] border-none text-white">
          <CardHeader>
            <CardTitle className="text-base">Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Name</div>
                <div className="col-span-6 text-white">1100 [2018 Toyota Prius]</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Meter</div>
                <div className="col-span-6 text-white">20,811 mi</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Status</div>
                <div className="col-span-6 text-white flex items-center gap-2">
                  <Badge variant="secondary">Active</Badge>
                  <span className="text-[#10b981] cursor-pointer">History</span>
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Group</div>
                <div className="col-span-6 text-white flex items-center justify-between">
                  <span>Management</span>
                  <span className="text-[#10b981] cursor-pointer">History</span>
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Operator</div>
                <div className="col-span-6 text-white flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Operator" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  Jacob Silva
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Type</div>
                <div className="col-span-6 text-white">Car</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Fuel Type</div>
                <div className="col-span-6 text-white">--</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">VIN/SN</div>
                <div className="col-span-6 text-white flex items-center gap-2">
                  JTDKBRFU9J3059307
                  <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                    Decode VIN
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">License Plate</div>
                <div className="col-span-6 text-white">6TJR244</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Year</div>
                <div className="col-span-6 text-white">2018</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Make</div>
                <div className="col-span-6 text-white">Toyota</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Model</div>
                <div className="col-span-6 text-white">Prius</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Trim</div>
                <div className="col-span-6 text-white">Two</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 w-[190px] text-zinc-400 text-sm font-normal font-['Inter'] leading-tight">
                  Registration State/Province
                </div>
                <div className="col-span-6 text-white">--</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Color</div>
                <div className="col-span-6 text-white">Silver</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Ownership</div>
                <div className="col-span-6 text-white">Owned</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Body Type</div>
                <div className="col-span-6 text-white">Hatchback</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Body SubType</div>
                <div className="col-span-6 text-white">--</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">MSRP</div>
                <div className="col-span-6 text-white">$24,950.00</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integrations Card */}
        <div className="bg-[#171717] mt-4 p-4 min-h-36 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Integrations</h2>
          </div>
          <div className="text-center text-zinc-400 text-sm mt-8 font-normal font-['Inter'] leading-tight">
            This vehicle has no Fuel Cards or Telematics Devices assigned
          </div>
        </div>

        {/* Linked Assets Card */}
        <div className="bg-[#171717] mt-4 p-4 min-h-36 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Linked Assets</h2>
            <div className="flex items-center gap-4 text-[#059669] text-sm">
              <button className="hover:underline">Link Asset</button>
            </div>
          </div>
          <div className="text-center text-zinc-400 text-sm mt-8 font-normal font-['Inter'] leading-tight">
            There are no linked Vehicles
          </div>
        </div>

        {/* Map Card */}
        <div className="bg-[#171717] mt-4 p-4 min-h-36 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Linked Assets</h2>
          </div>
          <div className="h-[400px] w-full">
            <iframe
              className="w-full h-full rounded-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.847435290057!2d-74.00601568459395!3d40.71277617933048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19d4f8b17d%3A0x4210909ec171fc9c!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1618075394601!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Left Side */}
      <div className="lg:col-span-6 col-span-12">
        {/* Open Issues Card */}
        <div className="p-4 bg-neutral-900 rounded-md flex flex-col gap-8">
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-neutral-50 text-base font-medium font-['Inter'] leading-none">
                  Open Issues
                </div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <Button variant="ghost" className="text-emerald-500 text-xs font-medium font-['Inter']">
                  + Add Issue
                </Button>
                <Button variant="ghost" className="text-emerald-500 text-xs font-medium">
                  View all
                </Button>
              </div>
            </div>
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="grow shrink basis-0 p-2 rounded-tl-lg rounded-bl-lg border border-[#262626] flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">
                    Overdue
                  </div>
                  <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
                </div>
                <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">
                  0
                </div>
              </div>
              <div className="grow shrink basis-0 p-2 rounded-tr-lg rounded-br-lg border border-[#262626] flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">
                    Open
                  </div>
                  <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
                </div>
                <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">
                  2
                </div>
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div>
                  <span className="text-emerald-500 text-sm">#5</span>
                  <span className="text-neutral-50 text-sm font-medium font-['Inter'] leading-[14px]">
                    {" "} - Brake light
                  </span>
                </div>
                <div className="relative">
                  <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
                </div>
              </div>
              <div className="self-stretch h-[30px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch">
                  <span className="text-neutral-400 text-xs font-normal font-['Inter'] leading-3">
                    Reported 1 week, 3 days ago by{" "}
                  </span>
                  <Link href="/fdf" className="text-emerald-500 text-xs hover:underline">
                    Jacob Silva
                  </Link>
                </div>
                <div className="self-stretch text-neutral-400 text-xs font-normal font-['Inter'] leading-3">
                  Driver side brake light is out
                </div>
              </div>
              <div className="self-stretch text-emerald-500 text-sm font-medium font-['Inter'] leading-[14px]">
                Work Order #1 C
              </div>
            </div>
            <div className="self-stretch h-[124px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0">
                  <Link href="/fdsf" className="text-emerald-500 hover:underline">
                    #6
                  </Link>
                  <span className="text-neutral-50 text-sm font-medium font-['Inter'] leading-[14px]">
                    {" "} - [Inspection] Wiper blades need to be replaced soon
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2 bg-[#27272a] text-white">
                        <CheckSquare size={16} />
                        Resolve
                        <ChevronDown size={14} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-black border border-gray-600 text-white">
                      <DropdownMenuItem className="hover:bg-gray-700">Mark as Resolved</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-gray-700">Snooze</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <MoreHorizontal size={18} />
                  </Button>
                </div>
              </div>
              <div className="self-stretch h-[66px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch">
                  <span className="text-neutral-400 text-xs font-normal font-['Inter'] leading-3">
                    Reported 1 week, 5 days ago by{" "}
                  </span>
                  <span className="text-emerald-500 text-xs font-normal font-['Inter'] leading-3">
                    Sani Abdullah
                  </span>
                </div>
                <div className="self-stretch text-neutral-400 text-xs font-normal font-['Inter'] leading-3">
                  Generated by the failed inspection item &quot;Windshield and Wipers/Washers&quot; on the &quot;Driver
                  <br />
                  Vehicle Inspection Report (Simple)&quot; form submitted by Sani Abdullah on Jan 30, 2025 at 11:32 AM EST
                </div>
              </div>
              <div className="self-stretch text-emerald-500 text-sm font-medium font-['Inter'] leading-[14px]">
                Inspection Submission #70723055
              </div>
            </div>
          </div>
        </div>

        {/* Service Reminders Card */}
        <Card className="bg-[#171717] text-white mt-4 border-none w-full">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-base">Service Reminders</CardTitle>
            <div className="flex items-center gap-4 text-[#10b981] text-sm">
              <button className="hover:underline">+ Add Service Reminder</button>
              <button className="hover:underline">View all</button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 divide-x divide-[#262626] border border-[#262626] rounded-md text-sm">
              <div className="grow shrink basis-0 p-2 rounded-tl-lg rounded-bl-lg flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Overdue</div>
                  <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
                </div>
                <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
              </div>
              <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Due Soon</div>
                  <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
                </div>
                <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">2</div>
              </div>
              <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Snoozed</div>
                  <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
                </div>
                <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
              </div>
            </div>
            <div>
              {[
                {
                  id: "#9144366",
                  title: "Engine Oil & Filter Replacement",
                  frequency: "Every 6 month(s) or 10,000 miles",
                  dueSoon: "3 months from now • 467 miles remaining",
                },
                {
                  id: "#9144377",
                  title: "Brake Pad Inspection",
                  frequency: "Every 12 month(s) or 15,000 miles",
                  dueSoon: "5 months from now • 2,000 miles remaining",
                },
              ].map((reminder, index) => (
                <div key={index} className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-semibold">{reminder.id} - {reminder.title}</p>
                    <p className="text-gray-400 text-sm">{reminder.frequency}</p>
                    <p className="text-gray-400 text-sm">Due Soon: {reminder.dueSoon}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2 bg-[#27272a] text-white">
                          <CheckSquare size={16} />
                          Resolve
                          <ChevronDown size={14} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-black border border-gray-600 text-white">
                        <DropdownMenuItem className="hover:bg-gray-700">Mark as Resolved</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700">Snooze</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <MoreHorizontal size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Renewal Reminders Card */}
        <div className="bg-[#171717] mt-4 p-4 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Renewal Reminders</h2>
            <div className="flex items-center gap-4 text-[#059669] text-sm">
              <button className="hover:underline">+ Add Renewal Reminder</button>
              <button className="hover:underline">View all</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 divide-x divide-[#262626] border border-[#262626] rounded-md text-sm mb-3">
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Overdue</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
            </div>
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Overdue</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
            </div>
          </div>
          <div className="pt-3">
            <div className="flex justify-between items-center">
              <p className="text-white font-medium">Emission Test</p>
              <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
            </div>
            <p className="text-[#ef4444] text-sm">Overdue: 57 minutes ago</p>
          </div>
        </div>

        {/* Incomplete Work Orders Card */}
        <div className="bg-[#171717] mt-4 p-4 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Incomplete Work Orders</h2>
            <div className="flex items-center gap-4 text-[#059669] text-sm">
              <button className="hover:underline">+ Add Work Order</button>
              <button className="hover:underline">View all</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 divide-x divide-[#262626] border border-[#262626] rounded-md text-sm mb-3">
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Unassigned</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
            </div>
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Assigned</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-grow">
              <span className="text-emerald-700">#1 - </span>
              <span>Assigned to </span>
              <span>
                <Link href="#" className="text-emerald-700 hover:underline"> Sarah Thomas </Link>
              </span>
            </div>
            <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
          </div>
          <div className="pt-3">
            <div className="flex gap-1 items-center">
              <p className="text-white font-medium">Issued 1 week, 3 days ago by</p>
              <span className="text-emerald-700">Sani</span>
            </div>
            <p className="text-[#a3a3a3] text-sm">No service tasks currently</p>
          </div>
        </div>

        {/* Inspection Card */}
        <div className="bg-[#171717] mt-4 p-4 min-h-36 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Inspection</h2>
            <div className="flex items-center gap-4 text-[#059669] text-sm">
              <button className="hover:underline">View all</button>
            </div>
          </div>
          <div className="text-center text-zinc-400 text-sm font-normal font-['Inter'] leading-tight">
            There are no Inspections due soon for this Vehicle
          </div>
        </div>

        {/* Critical Faults Card */}
        <div className="bg-[#171717] mt-4 p-4 min-h-36 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Critical Faults</h2>
            <div className="flex items-center gap-4 text-[#059669] text-sm">
              <button className="hover:underline">View all</button>
            </div>
          </div>
          <div className="text-center text-zinc-400 text-sm font-normal font-['Inter'] leading-tight">
            There are no Critical Faults for this Vehicle
          </div>
        </div>

        {/* Recalls Card */}
        <Card className="bg-[#171717] border-none mt-4 p-4 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Recalls</h2>
            <button className="text-[#059669] text-sm hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 divide-x divide-[#262626] border border-[#262626] rounded-md text-sm mb-3">
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Needs Action</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">2</div>
            </div>
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Open</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">0</div>
            </div>
          </div>
          {[1, 2].map((_, index) => (
            <div key={index} className="pt-3 pb-3">
              <div className="flex justify-between items-center">
                <p className="text-white font-medium">
                  NHTSA Campaign Number: <span className="font-semibold">18V579000</span>
                </p>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <p className="text-gray-400 text-sm">Issued 6 years, 5 months ago</p>
              <p className="text-gray-400 text-sm mt-1">
                Toyota motor engineering & manufacturing (Toyota) is recalling certain 2016-2018 Toyota Prius vehicles...
              </p>
              <button className="text-[#ef4444] bg-transparent mt-2">Needs Action</button>
              <p className="text-[#059669] text-sm mt-1">
                NHTSA VIN: <span className="font-semibold">JTDKBRFU9J3059307</span>
              </p>
            </div>
          ))}
        </Card>

        {/* Cost of Ownership Card */}
        <Card className="bg-[#171717] border-none mt-4 p-4 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Cost of Ownership</h2>
            <button className="text-[#059669] text-sm hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 divide-x divide-[#262626] border border-[#262626] rounded-md text-sm mb-3">
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Total Costs</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">$1,153.30</div>
            </div>
            <div className="grow shrink basis-0 p-2 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">Cost Per Meter</div>
                <Button variant="ghost" className="h-2 w-2 px-3 pb-3">...</Button>
              </div>
              <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">$0.12/mi</div>
            </div>
          </div>
          <div className="relative w-full h-[300px]">
            <Image src="https://surl.li/vxovnq" alt="Cost of Ownership" fill className="object-cover" />
          </div>
        </Card>

        {/* Utilization Card */}
        <Card className="bg-[#171717] border-none mt-4 p-4 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Utilization</h2>
            <div className="mr-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-[#059669] text-sm font-medium hover:opacity-80">
                  <Calendar className="w-4 h-4" />
                  All Time
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[#171717] mr-4 text-white">
                  <DropdownMenuItem>All Time</DropdownMenuItem>
                  <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                  <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                  <DropdownMenuItem>This Year</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="relative w-full h-[300px]">
            <Image src="https://surl.li/vxovnq" alt="Utilization" fill className="object-cover" />
          </div>
        </Card>

        {/* Fuel Efficiency Card */}
        <Card className="bg-[#171717] border-none mt-4 p-4 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Fuel Efficiency</h2>
            <div className="mr-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-[#059669] text-sm font-medium hover:opacity-80">
                  <Calendar className="w-4 h-4" />
                  All Time
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[#171717] mr-4 text-white">
                  <DropdownMenuItem>All Time</DropdownMenuItem>
                  <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                  <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                  <DropdownMenuItem>This Year</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="relative w-full h-[300px]">
            <Image src="https://surl.li/vxovnq" alt="Fuel Efficiency" fill className="object-cover" />
          </div>
        </Card>
      </div>
      </>
  );
};

export default Overview;