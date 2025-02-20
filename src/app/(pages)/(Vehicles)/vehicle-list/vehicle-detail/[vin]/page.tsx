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
} from "lucide-react";
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
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
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
          <Card className="bg-[#171717] text-white  border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Name</span>
                  <span className="text-white">1100 [2018 Toyota Prius]</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Meter</span>
                  <span className="text-white">20,811 mi</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Status</span>
                  <span className="flex items-center gap-2">
                    <Badge variant="secondary">Active</Badge>
                    <span className="text-green-400 cursor-pointer">
                      History
                    </span>
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Group</span>
                  <span className="text-white">Management</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Operator</span>
                  <span className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Operator"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    Jacob Silva
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Type</span>
                  <span className="text-white">Car</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Fuel Type</span>
                  <span className="text-white">--</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">VIN/SN</span>
                  <span className="text-white">
                    JTDKBRFU9J3059307{" "}
                    <Button
                      variant={"ghost"}
                      className="text-green-400  cursor-pointer"
                    >
                      Decode VIN
                    </Button>
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">License Plate</span>
                  <span className="text-white">6TJR244</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Year</span>
                  <span className="text-white">2018</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Make</span>
                  <span className="text-white">Toyota</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Model</span>
                  <span className="text-white">Prius</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Trim</span>
                  <span className="text-white">Two</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <div className="w-[190px] text-zinc-400 text-sm font-normal font-['Inter'] leading-tight">
                    Registration State/Province
                  </div>
                  <span className="text-white">--</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Color</span>
                  <span className="text-white">Silver</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Ownership</span>
                  <span className="text-white">Owned</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Body SubType</span>
                  <span className="text-white">--</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">MSRP</span>
                  <span className="text-white">$24,950.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-6 col-span-12">
        <div className="h-96 p-4 bg-neutral-900 rounded-md flex flex-col gap-8">
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
                    <span className="text-emerald-500 text-sm font-medium font-['Inter'] leading-[14px]">
                      #5
                    </span>
                    <span className="text-neutral-50 text-sm font-medium font-['Inter'] leading-[14px]">
                      {" "}
                      - Brake light
                    </span>
                  </div>
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9974 8.66634C8.36559 8.66634 8.66406 8.36786 8.66406 7.99967C8.66406 7.63148 8.36559 7.33301 7.9974 7.33301C7.62921 7.33301 7.33073 7.63148 7.33073 7.99967C7.33073 8.36786 7.62921 8.66634 7.9974 8.66634Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6641 8.66634C13.0323 8.66634 13.3307 8.36786 13.3307 7.99967C13.3307 7.63148 13.0323 7.33301 12.6641 7.33301C12.2959 7.33301 11.9974 7.63148 11.9974 7.99967C11.9974 8.36786 12.2959 8.66634 12.6641 8.66634Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33073 8.66634C3.69892 8.66634 3.9974 8.36786 3.9974 7.99967C3.9974 7.63148 3.69892 7.33301 3.33073 7.33301C2.96254 7.33301 2.66406 7.63148 2.66406 7.99967C2.66406 8.36786 2.96254 8.66634 3.33073 8.66634Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="self-stretch h-[30px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch">
                    <span className="text-neutral-400 text-xs font-normal font-['Inter'] leading-3">
                      Reported 1 week, 3 days ago by{" "}
                    </span>
                    <span className="text-emerald-500 text-xs font-normal font-['Inter'] leading-3">
                      Jacob Silva{" "}
                    </span>
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
                    <span className="text-emerald-500 text-sm font-medium font-['Inter'] leading-[14px]">
                      #6
                    </span>
                    <span className="text-neutral-50 text-sm font-medium font-['Inter'] leading-[14px]">
                      {" "}
                      - [Inspection] Wiper blades need to be replaced soon
                    </span>
                  </div>
                  <div className="h-7 flex-col justify-start items-center inline-flex">
                    <div className="px-3 py-1.5 bg-zinc-800 rounded-md justify-center items-center gap-2 inline-flex">
                      <div data-svg-wrapper className="relative">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 7.33333L8 9.33333L14.6667 2.66667M14 8V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.6667"
                            stroke="#FAFAFA"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-neutral-50 text-xs font-medium font-['Inter'] leading-3">
                        Resolve
                      </div>
                      <div data-svg-wrapper className="relative">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="#FAFAFA"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9974 8.66634C8.36559 8.66634 8.66406 8.36786 8.66406 7.99967C8.66406 7.63148 8.36559 7.33301 7.9974 7.33301C7.62921 7.33301 7.33073 7.63148 7.33073 7.99967C7.33073 8.36786 7.62921 8.66634 7.9974 8.66634Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6641 8.66634C13.0323 8.66634 13.3307 8.36786 13.3307 7.99967C13.3307 7.63148 13.0323 7.33301 12.6641 7.33301C12.2959 7.33301 11.9974 7.63148 11.9974 7.99967C11.9974 8.36786 12.2959 8.66634 12.6641 8.66634Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33073 8.66634C3.69892 8.66634 3.9974 8.36786 3.9974 7.99967C3.9974 7.63148 3.69892 7.33301 3.33073 7.33301C2.96254 7.33301 2.66406 7.63148 2.66406 7.99967C2.66406 8.36786 2.96254 8.66634 3.33073 8.66634Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                    Generated by the failed inspection item "Windshield and
                    Wipers/Washers" on the "Driver
                    <br />
                    Vehicle Inspection Report (Simple)" form submitted by Sani
                    Abdullah on Jan 30, 2025 at 11:32 AM EST
                  </div>
                </div>
                <div className="self-stretch text-emerald-500 text-sm font-medium font-['Inter'] leading-[14px]">
                  Inspection Submission #70723055
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
