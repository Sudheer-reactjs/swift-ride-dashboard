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
import {Printer} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
            Submitted Inspection Forms
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between bg-black text-white p-3 rounded-lg">
      <h2 className="text-3xl font-semibold">Submission #52839203</h2>
      <Button variant="outline" className="border-[#27272A] bg-[#09090B] h-10 text-white">
        <Printer className="w-4 h-4 mr-2" /> Print
      </Button>
    </div>
      <div className="grid grid-cols-12 gap-4 relative ">
        {/* left side */}
        <div className="col-span-12 lg:col-span-6">
          <Card className="bg-[#171717] mb-4 border-none text-white">
            <CardHeader className="pt-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Inspection Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Vehicle</div>
                  <div className="col-span-6 text-white">
                  <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        1100 [2018 Toyota Prius]
                      </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Inspection Form
                  </div>
                  <div className="col-span-6 text-white">Driver Vehicle Inspection Report</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Started</div>
                  <div className="col-span-6 text-white">Fri, Jan 31, 2024 3:54 PM</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Submitted
                  </div>
                  <div className="col-span-6 text-white">
                  Fri, Jan 31, 2024 3:54 PM
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                  Duration
                  </div>
                  <div className="col-span-6 text-white">9m</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Submission Source</div>
                  <div className="col-span-6 text-white">
                  <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        Sani Abdullah
                      </div>
                  </div>
                </div>                
              </div>
            </CardContent>
          </Card>
          <div className="bg-[#171717] mt-4 p-4 min-h-36 rounded-lg text-white w-full">
          <div className="flex flex-wrap justify-between items-center mb-3">
            <h2 className="text-base font-semibold">Integrations</h2>
          </div>
          <div className="text-center text-zinc-400 text-sm mt-8 font-normal font-['Inter'] leading-tight">
          No issues to show. If this service entry resolves any issues, you can add them by editing the service entry.
          </div>
        </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          {/* right side */}
          <Card className=" bg-[#181818] text-white ">
          <CardHeader className="pt-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Inspection Details</CardTitle>
              </div>
            </CardHeader>
      <CardContent>
        
        <div className="flex flex-row justify-between border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-white">
                  Odometer Reading
                  </div>
                  <div className="col-span-6 text-left text-white">20,713 mi</div>
                </div>

        <CardHeader className="pl-0">
        <CardTitle className="text-lg ">Item Checklist</CardTitle>
      </CardHeader>
        {/* Item Checklist Header */}
        <div className="grid grid-cols-12 border-b border-[#262626] ml-4 pb-4">
                  <div className="col-span-12 text-white">
                  Interior Cleanliness
                  </div>
                  <div className="col-span-12 text-gray-400">Take a photo of the interior</div>
                </div>
        {/* Checklist Items */}

        
        <div className="flex flex-col  pl-4 mt-2">
                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Engine
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Oil Life Left
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Fuel Level
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Transmission
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Clutch
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Steering Mechanism
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Horn
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Windshield and Wipers/Washers
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>
                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Rear Vision Mirrors
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Lightning Devices and Reflectors
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Parking Brake
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>
                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Service Brakes
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Air Lines/Light Issues
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Coupling Devices
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Tires
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Wheels and Rims
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>

                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Emergency Equipment
                  </div>
                  <div className="col-span-4 text-white ">✓  Pass</div>
                </div>
        </div>

        {/* Sign Off Section */}
        <div className="my-4">
          <h3 className="text-lg text-white">Sign Off</h3>
        </div>

        <div className="flex flex-col  ml-4 pb-4">
                  <div className="flex justify-between border-b border-[#262626] ">
                 <div>
                  <div className="col-span-12 text-white">
                  Interior Cleanliness
                  </div>
                  <div className="col-span-12 text-gray-400">Take a photo of the interior</div>
                  </div>
                  <div>
                  ✓  Excellent
                  </div>
                  </div>
               
                <div className="flex flex-row justify-between border-b border-[#262626] p-2 pl-0">
                  <div className="col-span-8 text-white">
                  Reviewing Driver&apos;s Signature
                  </div>
                  <div className="col-span-4 text-white ">✍🏻</div>
                </div>
                </div>
      </CardContent>
    </Card>
        </div>        

    
        </div>
      
    </div>
  )
}

export default page