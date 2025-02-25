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
import {
  AtSign,
  CalendarIcon,
  Check,
  ChevronDown,
  CornerUpLeft,
  Image,
  MessageSquareText,
  Pencil,
  StickyNote,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const page = () => {
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
      <div className="flex flex-wrap items-center justify-between bg-black text-white p-3 rounded-lg">
        <h2 className="text-3xl font-semibold">
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
      <div className="grid grid-cols-12 gap-4 relative max-w-[calc(100%-50px)]">
        {/* left side */}
        <div className="col-span-12 lg:col-span-6">
          <Card className="bg-[#171717] mb-4 border-none text-white">
            <CardHeader className="pt-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Vehicle</div>
                  <div className="col-span-6 text-white">
                    1100 [2018 Toyota Prius]
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Operator
                  </div>
                  <div className="col-span-6 text-white"><div className="flex items-center gap-2">
                        <Avatar  >
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                        </Avatar>
                        Sani Abdullah
                      </div></div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Status</div>
                  <div className="col-span-6 text-white"><div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                        Due Soon
                      </div></div>
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
                  <div className="col-span-6  text-gray-400">Service Program</div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Next Due</div>
                  <div className="col-span-6 text-white">
                    <div>3 months from now</div>
                    <div className="text-[#F59E0B]">467 miles remainig</div>
                    </div>
                </div>
                <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Last Completed</div>
                  <div className="col-span-6 text-white">
                  <div>11/02/2025</div>
                  <div className="text-[#DC2626]">11 278 mi</div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Work Order</div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Time Interval</div>
                  <div className="col-span-6 text-white">
                  <div>Every 6 months</div>
                  <div className="text-[#A3A3A3]">Due soon threshold: 2 weeks</div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b items-center border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Meter Interval</div>
                  <div className="col-span-6 text-white">
                  <div>Every 100 000 miles</div>
                  <div className="text-[#A3A3A3]">Due soon threshold: 600 miles</div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Manually Set Next Day</div>
                  <div className="col-span-6 text-white">No</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Notifications</div>
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

        <div className="col-span-12 lg:col-span-6">
          {/* Next Due card */}
          <Card className="bg-[#171717] text-white border-none mb-4">
            <CardHeader className="pt-4">
              <CardTitle className="text-base font-medium">Next Due</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-6 justify-between">
                <div className="flex flex-col gap-2">
                  <p className="">Scheduled Date</p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-gray-400" />
                    <span>05/01/2025</span>
                  </div>
                  <p className="">3 months from now</p>
                  <p className="text-[#D4D4D4]">Upcoming</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="">Primary Meter</p>
                  <div className="flex items-center gap-2">
                    <AtSign className="w-5 h-5 text-gray-400" />
                    <span>21,243 mi</span>
                  </div>
                  <p className="text-yellow-400">487 miles remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* History card */}
          <Card className="bg-[#171717] text-white">
            <CardHeader className="pt-4 flex flex-row items-center justify-between">
              <CardTitle className="text-base font-medium">History</CardTitle>
              <Link href={"#"} className="text-xs text-green-500">
                View History
              </Link>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#262626] rounded-md gap-2 mb-4 divide-x divide-[#262626]">
                <div className="flex flex-col items-center p-2">
                  <p className="text-xs text-gray-400">Completed</p>
                  <p className="text-lg font-medium">1</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <p className="text-xs text-gray-400">Late</p>
                  <p className="text-lg font-medium text-red-500">1</p>
                </div>
                <div className="flex flex-col items-center p-2">
                  <p className="text-xs text-gray-400">On-Time Compliance</p>
                  <p className="text-lg font-medium">0%</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className=" grid-cols-3 gap-2 hidden sm:grid">
                  <p className="text-xs text-gray-400">Due</p>
                  <p className="text-xs text-gray-400">Completed</p>
                  <p className="text-xs text-gray-400">Compliance</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 space-y-2 sm:gap-2">
                  <div className="sm:hidden">
                    <p className="text-xs text-gray-400 mb-1">Due</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Aug 1, 2025</p>
                    <p className="text-xs text-gray-400">10,000 mi</p>
                  </div>

                  <div className="sm:hidden">
                    <p className="text-xs text-gray-400 mb-1">Completed</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">11/01/2024</p>
                    <p className="text-xs text-red-500">11,220 mi</p>
                  </div>

                  <div className="sm:hidden">
                    <p className="text-xs text-gray-400 mb-1">Compliance</p>
                  </div>
                  <div>
                    <div className="m-2 ml-0">
                      <Badge className="text-xs text-red-500">LATE</Badge>
                    </div>
                    <p className="text-xs text-gray-400">
                      8 months, 4 weeks ahead
                    </p>
                    <p className="text-xs text-red-500">1,220 miles behind</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#171717] p-4 h-screen border-l absolute right-[-60px] z-[1] rounded-lg border-[#262626] flex flex-col items-center space-y-2">
          <Button className="p-1" variant="ghost">
            <CornerUpLeft className="w-4 h-4" />
          </Button>
          <Button className="p-1" variant="ghost">
            <MessageSquareText className="w-4 h-4" />
          </Button>
          <Button className="p-1" variant="ghost">
            <Image className="w-4 h-4" aria-label="Image" />
          </Button>
          <Button className="p-1" variant="ghost">
            <StickyNote className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
