import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { AtSign, CalendarIcon, Check, ChevronDown, Pencil } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SidebarWidget from "@/components/vehicle-list/SidebarWidget";
const tabs = [
  { value: "overview", label: "Overview" },
  { value: "history", label: "History" },
];

const page = () => {
  return (
    <div className="flex w-full flex-col gap-6">
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
              1100 [2018 Toyota Prius]
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
              Service Reminder
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap items-center justify-between gap-2 text-white ">
        <h2 className="text-neutral-50 text-2xl md:text-3xl font-bold">
          Engine Oil & Filter Replacement
        </h2>

        <div className="flex flex-wrap gap-3 items-center">
          <Button className="h-10" variant="outline">
            <Pencil className="w-4 h-4" /> Edit
          </Button>
          <Button className="flex gap-2 bg-[#047857] text-neutral-50 text-sm font-medium h-10 hover:bg-[#047857">
            <Check className="w-4 h-4" /> Resolve <ChevronDown />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 w-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-2.5 py-2 transition-colors text-xs font-medium text-neutral-300 border-b-2 border-transparent hover:text-white rounded-none 
             data-[state=active]:text-emerald-600 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:bg-transparent"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="pt-6 m-0">
          <div className="flex w-full col-span-12 gap-1 relative min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative max-w-[calc(100%-52px)] w-full">
              {/* left side */}
              <div className="">
                <Card className="bg-[#171717] border-none text-white">
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base">Details</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-4 text-sm">
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">Vehicle</div>
                        <div className="col-span-6 text-white">
                          1100 [2018 Toyota Prius]
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">Operator</div>
                        <div className="col-span-6 text-white">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                                
                              />
                            </Avatar>
                            Sani Abdullah
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">Status</div>
                        <div className="col-span-6 text-white">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                            Due Soon
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Service Task
                        </div>
                        <div className="col-span-6 text-white">
                          Engine Oil & Filter Replacement
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6  text-gray-400">
                          Service Program
                        </div>
                        <div className="col-span-6 text-white">--</div>
                      </div>
                      <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">Next Due</div>
                        <div className="col-span-6 text-white">
                          <div>3 months from now</div>
                          <div className="text-amber-500 text-[10px]">
                            467 miles remainig
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Last Completed
                        </div>
                        <div className="col-span-6 text-white">
                          <div>11/02/2025</div>
                          <div className="text-red-600 text-[10px] ">11 278 mi</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Work Order
                        </div>
                        <div className="col-span-6 text-white">--</div>
                      </div>
                      <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Time Interval
                        </div>
                        <div className="col-span-6 text-white">
                          <div>Every 6 months</div>
                          <div className="text-neutral-400 text-[10px]">
                            Due soon threshold: 2 weeks
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Meter Interval
                        </div>
                        <div className="col-span-6 text-white">
                          <div>Every 100 000 miles</div>
                          <div className="text-neutral-400 text-[10px]">
                            Due soon threshold: 600 miles
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Manually Set Next Day
                        </div>
                        <div className="col-span-6 text-white">No</div>
                      </div>
                      <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                        <div className="col-span-6 text-gray-400">
                          Notifications
                        </div>
                        <div className="col-span-6 text-white">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                            Active
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="">
                {/* Next Due card */}
                <Card className="bg-[#171717] text-white border-none mb-4">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-medium">
                      Next Due
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-6 justify-between text-neutral-50 ">
                      <div className="flex flex-col gap-2 text-xs ">
                        <p className="pb-5">Scheduled Date</p>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-gray-400" />
                          <span>05/01/2025</span>
                        </div>
                        <p className="">3 months from now</p>
                        <p className="text-[#D4D4D4]">Upcoming</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="pb-5">Primary Meter</p>
                        <div className="flex items-center gap-2">
                          <AtSign className="w-5 h-5 text-gray-400" />
                          <span>21,243 mi</span>
                        </div>
                        <p className="text-yellow-400 text-xs">487 miles remaining</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* History card */}
                <Card className="bg-[#171717] text-white border-0 shadow-none">
                  <CardHeader className="p-4 flex flex-row items-center justify-between">
                    <CardTitle className="text-base font-medium">
                      History
                    </CardTitle>
                    <Link href={"#"} className="text-xs text-emerald-500">
                      View History
                    </Link>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3 border border-neutral-700 rounded-md gap-2 mb-4 divide-x divide-neutral-700 ">
                      <div className="flex flex-col p-2">
                        <p className="text-neutral-50 text-xs font-normal">Completed</p>
                        <p className="text-neutral-50 text-lg font-medium">1</p>
                      </div>
                      <div className="flex flex-col  p-2">
                        <p className="text-neutral-50 text-xs font-normal">Late</p>
                        <p className=" text-lg font-medium text-red-500">1</p>
                      </div>
                      <div className="flex flex-col  p-2">
                        <p className="text-neutral-50 text-xs font-normal">
                          On-Time Compliance
                        </p>
                        <p className="text-neutral-50 text-lg font-medium">0%</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-0 md:gap-3 pt-4">
                      <div className=" grid-cols-3 gap-2 hidden sm:grid">
                        <p className="text-xs text-gray-400">Due</p>
                        <p className="text-xs text-gray-400">Completed</p>
                        <p className="text-xs text-gray-400">Compliance</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-4 space-y-4  md:space-y-2 sm:gap-2">
                        <div className="sm:hidden">
                          <p className="text-xs text-gray-400 mb-2">Due</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium mb-2">Aug 1, 2025</p>
                          <p className="text-xs text-gray-400">10,000 mi</p>
                        </div>

                        <div className="sm:hidden">
                          <p className="text-xs text-gray-400 mb-2">
                            Completed
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-medium  mb-2">11/01/2024</p>
                          <p className="text-xs text-red-500">11,220 mi</p>
                        </div>

                        <div className="sm:hidden">
                          <p className="text-xs text-gray-400 mb-2">
                            Compliance
                          </p>
                        </div>
                        <div>
                          <div className="m-2 ml-0">
                            <Badge className="bg-red-300 rounded-full border text-red-700 text-xs">LATE</Badge>
                          </div>
                          <p className="text-xs text-gray-400  mb-2">
                            8 months, 4 weeks ahead
                          </p>
                          <p className="text-xs text-red-500">
                            1,220 miles behind
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <SidebarWidget />
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="w-full overflow-auto rounded-lg border bg-[#171717] border-[#27272A]">
        <div className="relative w-full overflow-auto">
                <table className="caption-bottom text-sm w-full overflow-auto hover:cursor-pointer min-w-[700px]">
                  <thead>
                    <tr className="text-zinc-500 text-sm font-medium text-left border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="px-2 py-4">Due</th>
                      <th className="px-2 py-4">Completed</th>
                      <th className=" px-2 py-4">Compliance</th>
                      <th className="px-2 py-4">Completed By</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      <tr className=" text-neutral-50 text-xs font-normal border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="px-2 py-4">
                          <div className="flex w-full flex-col gap-2">
                            <p className="text-neutral-50 text-sm font-normal">Aug 1, 2025</p>
                            <span className="text-neutral-400 text-xs">10 000 mi</span>
                          </div>
                        </td>
                        <td className=" text-white px-2 py-4">
                         <div className="flex w-full flex-col gap-2">
                            <p className="text-neutral-50 text-sm font-normal">11/01/2024</p>
                            <span className="text-red-500 text-xs">11 230 mi</span>
                          </div>
                        </td>
                        <td className=" text-white px-2 py-4">
                        <div className="flex w-full flex-col gap-2">
                        <Badge className="bg-red-300 rounded-full border text-red-700 text-xs max-w-max">LATE</Badge>
                            <span className="text-neutral-400 text-xs">8 months, 4 weeks ahead - <span className="text-red-700">1 278 miles behind</span></span>
                          </div>
                        </td>
                        <td className=" text-white px-2 py-4">
                        <p className="text-neutral-50 text-sm font-normal">-</p>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
              </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
