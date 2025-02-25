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
import { CornerUpLeft, Image, MessageSquareText, Printer, StickyNote } from "lucide-react";

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
              Service Entries
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between bg-black text-white p-3 rounded-lg">
      <h2 className="text-3xl font-semibold">Service Entry #52839203</h2>
      <Button variant="outline" className="border-[#27272A] bg-[#09090B] h-10 text-white">
        <Printer className="w-4 h-4 mr-2" /> Print
      </Button>
    </div>
      <div className="grid grid-cols-12 gap-4 relative max-w-[calc(100%-50px)]">
        {/* right side */}
        <div className="col-span-12 lg:col-span-4">
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
                    Repair Priority Class
                  </div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Start Date</div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Completion Date
                  </div>
                  <div className="col-span-6 text-white">
                    11/01/2024 3:54 PM
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6  text-gray-400">
                    Odometer
                  </div>
                  <div className="col-span-6 text-white">11,278 mi</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Created By</div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Vendor</div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Reference</div>
                  <div className="col-span-6 text-white">--</div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Notes</div>
                  <div className="col-span-6 text-white">--</div>
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

        <div className="col-span-12 lg:col-span-8">
          {/* centre  */}
          <Card className="bg-[#171717] text-white py-6 rounded-lg shadow-lg">
            <CardContent>
              <h3 className="text-lg text-gray-300 mb-3">Line Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-gray-700 rounded-lg text-center text-base">
                <div className="pr-3 md:border-r border-gray-700">
                  <p className="text-gray-400">Labor</p>
                  <p className="text-xl font-semibold">$45.50</p>
                </div>
                <div className="pr-3 md:border-r border-gray-700">
                  <p className="text-gray-400">Parts</p>
                  <p className="text-xl font-semibold">$49.38</p>
                </div>
                <div>
                  <p className="text-gray-400">Total</p>
                  <p className="text-xl font-semibold">$94.88</p>
                </div>
              </div>

              <div className="mt-4 text-base rounded-lg pt-4 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="text-[#A1A1AA] ">
                      <th className="text-left p-2">Item</th>
                      <th className="text-center p-2">Labor</th>
                      <th className="text-center p-2">Parts</th>
                      <th className="text-right p-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        item: "Engine Oil & Filter Replacement",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                      {
                        item: "Engine Air Filter Replacement",
                        labor: "$8.00",
                        parts: "$21.42",
                        subtotal: "$29.42",
                      },
                      {
                        item: "Tire Rotation",
                        labor: "$18.00",
                        parts: "$0.00",
                        subtotal: "$18.00",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-700">
                        <td className="border-gray-50 py-6 text-left font-medium">
                          <div className="flex w-full flex-col gap-2">
                            <div className="w-full flex items-center">
                              <div className="flex items-center">
                                <abbr
                                  className="break-words max-w-full text-md text-[#FAFAFA] text-left normal-case font-sans m-0"                                
                                >
                                  {row.item}
                                </abbr>
                              </div>
                            </div>
                            <div className="flex pt-4 gap-6">
                              <div>
                                <div className="text-[#A3A3A3] text-sm font-normal">
                                  Reason for Repair
                                </div>
                                <span className="text-[#A3A3A3] text-sm font-normal">
                                  —
                                </span>
                              </div>
                              <div>
                                <div className="text-[#A3A3A3] text-sm font-normal">
                                  Category / System / Assembly
                                </div>
                                <span className="text-gray-200 text-sm font-normal">
                                  —
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-white p-2">
                          {row.labor}
                        </td>
                        <td className="text-center text-white p-2">
                          {row.parts}
                        </td>
                        <td className="text-right text-white p-2">
                          {row.subtotal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-end gap-16 text-gray-400">
                  <span className="text-[#FAFAFA] text-xl">Subtotal</span>
                  <span className="text-white">$94.88</span>
                </div>
                <div className="flex justify-end gap-16 text-[#737373]">
                  <span>Labor</span>
                  <span>$45.50</span>
                </div>
                <div className="flex justify-end gap-16 text-[#737373]">
                  <span>Parts</span>
                  <span>$49.38</span>
                </div>

                <div className="flex justify-end gap-16 mt-2 text-[#FAFAFA]">
                  <span>Discount (0.0%)</span>
                  <span className="text-white">-$0.00</span>
                </div>
                <div className="flex justify-end gap-16 mt-2 text-[#FAFAFA]">
                  <span>Tax (0.0%)</span>
                  <span className="text-white">-$0.00</span>
                </div>
                <div className="flex justify-end gap-16 font-semibold text-lg mt-3">
                  <span>Total</span>
                  <span>$94.88</span>
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