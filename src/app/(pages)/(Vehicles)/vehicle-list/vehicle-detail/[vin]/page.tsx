"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Bell,
  ChevronDown,
  GitBranch,
  MoreHorizontal,
  Pencil,
  Plus,
  CheckSquare,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const VehicleDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA] ">
              Vehicles
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
              Vehicle Detail
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between py-4  items-center max-h-24 m-4 rounded-lg">
        <div className="flex items-center justify-between  gap-4 ">
          <Image
            src="https://placehold.co/80x80"
            alt="Vehicle"
            width={80}
            height={70}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">1100 [2018 Toyota Prius]</h2>
            <p className="">
              Car • 2018 Toyota Prius • JTDKBRFU9J3059307 • 6TJR244
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="">• 20,811 mi</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full" />
                Active
              </div>
              <div className="flex items-center gap-2">
                <span className="">• Management</span>{" "}
                <GitBranch className="w-3 h-3" />
              </div>
              <Link
                href={"/fdsf"}
                className="text-[#047857] cursor-pointer hover:underline"
              >
                Jacob Silva
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mx-3">
          <Button variant="outline" className="h-10">
            <Bell />
            Watch
          </Button>
          <Button variant="outline" className="h-10">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <Button className="h-10" variant="outline">
            <Pencil className="w-4 h-4" /> Edit
          </Button>
          <Button className="bg-[#047857] h-10 hover:bg-[#047857">
            <Plus className="w-4 h-4" /> Add
          </Button>
        </div>
      </div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[90%] border-b border-gray-700 "
      >
        <Tabs.List className="flex space-x-4 px-4">
          {[
            { id: "overview", label: "Overview" },
            { id: "specs", label: "Specs" },
            { id: "financial", label: "Financial" },
            { id: "sensor-data", label: "Sensor Data Snapshots" },
            { id: "service-history", label: "Service History" },
            { id: "inspection-history", label: "Inspection History" },
            { id: "work-orders", label: "Work Orders" },
            { id: "service-reminders", label: "Service Reminders" },
          ].map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                "text-gray-400 hover:text-white",
                "data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Trigger
            value="more"
            className={cn(
              "px-4 py-2 text-sm font-medium flex items-center gap-1",
              "text-gray-400 hover:text-white",
              "data-[state=active]:text-green-400 data-[state=active]:border-b-2 data-[state=active]:border-green-400"
            )}
          >
            More <ChevronDown size={16} />
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="lg:col-span-6 col-span-12">
          <Card className="bg-[#171717] text-white ">
            <CardHeader>
              <CardTitle className="text-lg">Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b border-gray pb-2">
                  <div className="col-span-6 text-gray-400">Name</div>
                  <div className="col-span-6 text-white">
                    1100 [2018 Toyota Prius]
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Meter</div>
                  <div className="col-span-6 text-white">20,811 mi</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Status</div>
                  <div className="col-span-6 text-white flex items-center gap-2">
                    <Badge variant="secondary">Active</Badge>
                    <span className="text-green-400 cursor-pointer">
                      History
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Group</div>
                  <div className="col-span-6 text-white flex items-center justify-between">
                    <span >
                    Management
                    </span>
                    <span className="text-green-400 cursor-pointer">
                      History
                    </span>
                    </div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Operator</div>
                  <div className="col-span-6 text-white flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Operator"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    Jacob Silva
                  </div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Type</div>
                  <div className="col-span-6 text-white">Car</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Fuel Type</div>
                  <div className="col-span-6 text-white">--</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">VIN/SN</div>
                  <div className="col-span-6 text-white flex items-center gap-2">
                    JTDKBRFU9J3059307
                    <Button
                      variant="ghost"
                      className="text-green-400 cursor-pointer"
                    >
                      Decode VIN
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">License Plate</div>
                  <div className="col-span-6 text-white">6TJR244</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Year</div>
                  <div className="col-span-6 text-white">2018</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Make</div>
                  <div className="col-span-6 text-white">Toyota</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Model</div>
                  <div className="col-span-6 text-white">Prius</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Trim</div>
                  <div className="col-span-6 text-white">Two</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 w-[190px] text-zinc-400 text-sm font-normal font-['Inter'] leading-tight">
                    Registration State/Province
                  </div>
                  <div className="col-span-6 text-white">--</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Color</div>
                  <div className="col-span-6 text-white">Silver</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Ownership</div>
                  <div className="col-span-6 text-white">Owned</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">Body SubType</div>
                  <div className="col-span-6 text-white">--</div>
                </div>

                <div className="grid grid-cols-12 border-b border-gray-800 pb-2">
                  <div className="col-span-6 text-gray-400">MSRP</div>
                  <div className="col-span-6 text-white">$24,950.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="h-[395px] p-4 bg-neutral-900 rounded-md flex flex-col gap-8">
            <div className="self-stretch h-[352px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-neutral-50 text-base font-medium font-['Inter'] leading-none">
                    Open Issues
                  </div>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <Button
                    variant={"ghost"}
                    className="text-emerald-500 text-xs font-medium font-['Inter']"
                  >
                    + Add Issue
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="text-emerald-500 text-xs font-medium "
                  >
                    View all
                  </Button>
                </div>
              </div>
              <div className="self-stretch justify-start items-center inline-flex">
                <div className="grow shrink basis-0 p-2 rounded-tl-lg rounded-bl-lg border border-neutral-700 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">
                      Overdue
                    </div>
                    <Button variant={"ghost"} className="h-2 w-2 px-3 pb-3">
                      ...
                    </Button>
                  </div>
                  <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">
                    0
                  </div>
                </div>
                <div className="grow shrink basis-0 p-2 rounded-tr-lg rounded-br-lg border border-neutral-700 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-neutral-50 text-xs font-normal font-['Inter'] leading-3">
                      Open
                    </div>
                    <Button variant={"ghost"} className="h-2 w-2 px-3 pb-3">
                      ...
                    </Button>
                  </div>
                  <div className="self-stretch h-6 text-neutral-50 text-lg font-medium font-['Inter'] leading-7">
                    2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div>
                    <span className="text-emerald-500 text-sm ">#5</span>
                    <span className="text-neutral-50 text-sm font-medium font-['Inter'] leading-[14px]">
                      {" "}
                      - Brake light
                    </span>
                  </div>
                  <div className="relative">
                    <Button variant={"ghost"} className="h-2 w-2 px-3 pb-3">
                      ...
                    </Button>
                  </div>
                </div>
                <div className="self-stretch h-[30px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch">
                    <span className="text-neutral-400 text-xs font-normal font-['Inter'] leading-3">
                      Reported 1 week, 3 days ago by{" "}
                    </span>
                    <Link
                      href={"/fdf"}
                      className="text-emerald-500 text-xs hover:underline "
                    >
                      Jacob Silva{" "}
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
                    <Link
                      href={"/fdsf"}
                      className="text-emerald-500 hover:underline"
                    >
                      #6
                    </Link>
                    <span className="text-neutral-50 text-sm font-medium font-['Inter'] leading-[14px]">
                      {" "}
                      - [Inspection] Wiper blades need to be replaced soon
                    </span>
                  </div>
                  <div className="h-7 flex-col justify-start items-center inline-flex">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 bg-black text-white border-gray-600 hover:bg-gray-800"
                        >
                          <CheckSquare size={18} />
                          Resolve
                          <ChevronDown size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-black border border-gray-600 text-white"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700">
                          Mark as Resolved
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700">
                          Reopen Issue
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div data-svg-wrapper className="relative">
                  <Button variant={"ghost"} className="h-2 w-2 px-3 pb-3">
                      ...
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
                    Generated by the failed inspection item &quot;Windshield and
                    Wipers/Washers&quot; on the &quot;Driver
                    <br />
                    Vehicle Inspection Report (Simple)&quot; form submitted by Sani
                    Abdullah on Jan 30, 2025 at 11:32 AM EST
                  </div>
                </div>
                <div className="self-stretch text-emerald-500 text-sm font-medium font-['Inter'] leading-[14px]">
                  Inspection Submission #70723055
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-black text-white border-gray-700 w-full ">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-lg">Service Reminders</CardTitle>
        <div className="flex items-center gap-4 text-green-400 text-sm">
          <button className="hover:underline">+ Add Service Reminder</button>
          <button className="hover:underline">View all</button>
        </div>
      </CardHeader>

      <CardContent>
        {/* Status Summary */}
        <div className="flex justify-between text-sm border-b border-gray-700 pb-3">
          <div className="text-center">
            <p className="text-gray-400">Overdue</p>
            <p className="text-white font-semibold">0</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Due Soon</p>
            <p className="text-white font-semibold">2</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Snoozed</p>
            <p className="text-white font-semibold">0</p>
          </div>
        </div>

        {/* Reminder 1 */}
        <div className="flex justify-between items-center border-b border-gray-700 py-3">
          <div>
            <p className="font-semibold">#9144366 - Engine Oil & Filter Replacement</p>
            <p className="text-gray-400 text-sm">Every 6 month(s) or 10,000 miles</p>
            <p className="text-gray-400 text-sm">Due Soon: 3 months from now • 467 miles remaining</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Resolve Button with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700">
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

            {/* More Options Button */}
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <MoreHorizontal size={18} />
            </Button>
          </div>
        </div>

        {/* Reminder 2 */}
        <div className="flex justify-between items-center border-b border-gray-700 py-3">
          <div>
            <p className="font-semibold">#9144366 - Engine Oil & Filter Replacement</p>
            <p className="text-gray-400 text-sm">Every 6 month(s) or 10,000 miles</p>
            <p className="text-gray-400 text-sm">Due Soon: 3 months from now • 467 miles remaining</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Resolve Button with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700">
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

            {/* More Options Button */}
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <MoreHorizontal size={18} />
            </Button>
          </div>
        </div>

      </CardContent>
    </Card>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
