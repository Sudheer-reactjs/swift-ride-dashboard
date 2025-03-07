"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, ChevronLeft, Ellipsis, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const invoices = [
  {
    maintenanceCategory: "-",
    system: "-",
    itemType: "PART",
    codeID: "194",
    codeName: "Battery",
    itemDescription: "Tax",
    cause: "Other",
    quantity: "1.0",
    unitPrice: "$94.88",
    totalPrice: "$94.88",
  },
  {
    maintenanceCategory: "-",
    system: "-",
    itemType: "PART",
    codeID: "199",
    codeName: "Battery",
    itemDescription: "OIL FILTER",
    cause: "Other",
    quantity: "1.0",
    unitPrice: "$94.88",
    totalPrice: "$94.88",
  },
];

const Page = () => {
  const [isWatching, setIsWatching] = useState(false);
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/maintenance-history"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Maintenance Entry
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
          Maintenance Entry #32534044
        </h2>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2"
            onClick={() => setIsWatching((prev) => !prev)}
          >
            {isWatching ? <BellOff /> : <Bell />}
            {isWatching ? "Unwatch" : "Watch"}
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2"
          >
            <Ellipsis />
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-zinc-950 rounded-md border border-zinc-800  flex items-center gap-2 text-neutral-50 opacity-50"
          >
            <Pen /> Edit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <Card className="bg-[#171717] border-none text-white">
            <CardHeader className="p-4">
              <CardTitle className="text-neutral-50 text-base font-normal">
                Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <h5 className="text-neutral-50 text-sm font-normal">
                All Fields
              </h5>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400 ">Vehicle</div>
                  <div className="col-span-6 text-white flex gap-2 items-center">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Operator"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <p className="text-emerald-500 text-xs font-normal underline">
                      2100 [2016 Ford F-150]
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Repair Priority Class
                  </div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Shop Authorization Number
                  </div>
                  <div className="col-span-6 text-white">1274661A9610</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Shop Reference Number
                  </div>
                  <div className="col-span-6 text-white">594479</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    RO Last Approved By
                  </div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Start Date</div>
                  <div className="col-span-6 text-white">01/04/2025</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Completion Date
                  </div>
                  <div className="col-span-6 text-white flex items-center justify-between">
                    <span>01/04/2025</span>
                    <span className="text-[#10b981] cursor-pointer text-sm">
                      RO History
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Invoice Date</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Billed Date</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">
                    Statement Period
                  </div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Odometr</div>
                  <div className="col-span-6 text-white">55,208 mi</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Created By</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Vendor</div>
                  <div className="col-span-6 text-white">
                    <Link href="#" className="text-emerald-500 underline">
                      Elite Tire & Serice Inc
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Reference</div>
                  <div className="col-span-6 text-white">1274661-594479</div>
                </div>
                <div className="grid grid-cols-12 border-b gap-2 border-[#262626] pb-4">
                  <div className="col-span-6 text-gray-400">Notes</div>
                  <div className="col-span-6 text-white">-</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#171717] border-none text-white">
            <CardHeader className="p-4">
              <CardTitle className="text-neutral-50 text-base font-normal">
                Resolved Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="text-center text-zinc-400 text-sm m-auto my-8 font-normal max-w-80 w-full leading-tight">
                No issues to show. If this maintenance entry resolves any
                issues, you can add them by editing the maintenance entry.
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <Card className="bg-[#171717] text-white border-0 shadow-none rounded-lg">
            <CardHeader className="p-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">Line Items</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border border-neutral-700 rounded-lg text-base">
                <div className="pr-3 md:border-r border-neutral-700 p-2">
                  <p className="text-neutral-50 text-xs font-normal">Labor</p>
                  <p className="text-neutral-50 text-lg font-medium">$45.50</p>
                </div>
                <div className="pr-3 md:border-r border-neutral-700 p-2">
                  <p className="text-neutral-50 text-xs font-normal">Parts</p>
                  <p className="text-neutral-50 text-lg font-medium">$49.38</p>
                </div>
                <div className="pr-3 md:border-r border-neutral-700 p-2">
                  <p className="text-neutral-50 text-xs font-normal">Total</p>
                  <p className="text-neutral-50 text-lg font-medium">$94.88</p>
                </div>
              </div>

              <div className="mt-4 text-base rounded-lg pt-4 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="text-neutral-50 text-sm font-medium ">
                      <th className="text-left p-2">Item</th>
                      <th className="text-center p-2"></th>
                      <th className="text-center p-2">Labor</th>
                      <th className="text-center p-2">Parts</th>
                      <th className="text-right p-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        item: "",
                        free: "(Fee)",
                        dis: "ALABAMA BATTERY TAX F.S. 403.7185 mandates a $1.50 fee for each new or remanufactured battery sold",
                        time: "0.00 hr x $0.00",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                      {
                        item: "Volt/Amp Test ",
                        free: "(Fee)",
                        dis: "FREE BATTERY CHECK",
                        time: "0.00 hr x $0.00",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                      {
                        item: "Volt/Amp Test ",
                        free: "(Fee)",
                        dis: "FREE BATTERY CHECK",
                        time: "0.00 hr x $0.00",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                      {
                        item: "Volt/Amp Test ",
                        free: "(Fee)",
                        dis: "FREE BATTERY CHECK",
                        time: "0.00 hr x $0.00",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                      {
                        item: "Volt/Amp Test ",
                        free: "(Fee)",
                        dis: "FREE BATTERY CHECK",
                        time: "0.00 hr x $0.00",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                      {
                        item: "Volt/Amp Test ",
                        free: "(Fee)",
                        dis: "FREE BATTERY CHECK",
                        time: "0.00 hr x $0.00",
                        labor: "$19.50",
                        parts: "$27.96",
                        subtotal: "$47.46",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-neutral-700 text-neutral-400 text-xs font-normal align-top "
                      >
                        <td className="border-gray-50 text-left font-medium px-2 py-4">
                          <div className="flex w-full flex-col gap-2  ">
                            <div className="w-full flex items-center">
                              <div className="flex items-center  text-[14px]">
                                <span className="break-words max-w-full text-neutral-50  text-left normal-case font-sans m-0 pr-2">
                                  {row.item}
                                </span>
                                {row.free}
                              </div>
                            </div>
                            <div className="flex gap-6 text-neutral-400 text-xs font-normal max-w-48">
                              {row.dis}
                            </div>
                          </div>
                        </td>
                        <td className="text-center px-2 py-4">{row.time}</td>
                        <td className="text-center px-2 py-4">{row.labor}</td>
                        <td className="text-center px-2 py-4">{row.parts}</td>
                        <td className="text-right  px-2 py-4">
                          {row.subtotal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <div className="space-y-1 max-w-80 ml-auto ">
                  <div className="justify-end grid grid-cols-12 gap-4 w-full">
                    <span className="text-neutral-50 text-sm  col-span-6">
                      Subtotal
                    </span>
                    <span className="text-neutral-50 text-xs col-span-6 text-right">
                      $94.88
                    </span>
                  </div>
                  <div className="justify-end text-[#737373] grid grid-cols-12 gap-4 w-full">
                    <span className="col-span-6 ">Labor</span>
                    <span className="col-span-6 text-right">$45.50</span>
                  </div>
                  <div className="justify-end text-[#737373] grid grid-cols-12 gap-4 w-full">
                    <span className="col-span-6">Parts</span>
                    <span className="col-span-6 text-right">$49.38</span>
                  </div>
                  <hr className="border-neutral-700 !my-4"></hr>
                  <div className="justify-end text-[#737373] grid grid-cols-12 gap-4 w-full">
                    <span className="text-neutral-50 text-sm  col-span-6">
                      Fees
                    </span>
                    <span className="text-neutral-50 text-xs col-span-6 text-right">
                      +$1.00
                    </span>
                  </div>
                  <div className="justify-end text-[#737373] grid grid-cols-12 gap-4 w-full">
                    <span className="col-span-6 ">Line Item Fees</span>
                    <span className="col-span-6 text-right">$45.50</span>
                  </div>
                  <div className=" text-neutral-50 text-sm grid grid-cols-12 gap-4 py-2 w-full">
                    <span className="text-neutral-50 text-sm  col-span-6">
                      Discount <span className="text-neutral-400">(0.0%)</span>
                    </span>
                    <span className="text-neutral-50 text-sm col-span-6 text-right">
                      -$0.00
                    </span>
                  </div>
                  <div className=" text-neutral-50 text-sm  grid grid-cols-12 gap-4 w-full">
                    <span className="text-neutral-50 text-sm  col-span-6">
                      Tax <span className="text-neutral-400">Fixed</span>
                    </span>
                    <span className="text-neutral-50 text-sm col-span-6 text-right">
                      -$0.00
                    </span>
                  </div>
                  <hr className="border-neutral-700 !my-4"></hr>
                  <div className=" text-neutral-50 text-sm  grid grid-cols-12 gap-4 w-full">
                    <span className="text-neutral-50 text-sm  col-span-6">
                      Total
                    </span>
                    <span className="text-neutral-50 text-sm  col-span-6 text-right">
                      $94.88
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-12">
          <Table className="bg-neutral-900 rounded-md min-w-[1000px]">
            <TableHeader>
              <TableRow className="text-zinc-500 text-sm font-medium">
                <TableHead className="w-[200px] py-4 px-3">Maintenance Category</TableHead>
                <TableHead className="py-4">System</TableHead>
                <TableHead className="py-4">Item Type</TableHead>
                <TableHead className="py-4">Code ID</TableHead>
                <TableHead className="py-4">Code Name</TableHead>
                <TableHead className="py-4">Item Description</TableHead>
                <TableHead className="py-4">Cause</TableHead>
                <TableHead className="py-4">Quantity</TableHead>
                <TableHead className="py-4">Unit Price</TableHead>
                <TableHead className="py-4">Total Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.codeID} className="text-neutral-50 text-xs font-normal">
                  <TableCell className="py-4 px-3"> {invoice.maintenanceCategory}</TableCell>
                  <TableCell className="py-4">{invoice.system}</TableCell>
                  <TableCell className="py-4">{invoice.itemType}</TableCell>
                  <TableCell className="py-4">{invoice.codeID}</TableCell>
                  <TableCell className="py-4">{invoice.codeName}</TableCell>
                  <TableCell className="py-4">{invoice.itemDescription}</TableCell>
                  <TableCell className="py-4">{invoice.cause}</TableCell>
                  <TableCell className="py-4">{invoice.quantity}</TableCell>
                  <TableCell className="py-4">{invoice.unitPrice}</TableCell>
                  <TableCell className="py-4">{invoice.totalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Page;
