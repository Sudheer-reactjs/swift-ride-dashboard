"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlayCircle } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AddMultipleVehicles() {
  const [step, setStep] = useState(1);
  const [vehicles, setVehicles] = useState("");
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const vehicleList = vehicles
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [name, vin, group] = line.split(",");
      return {
        name: name?.trim() || "-",
        vin: vin?.trim() || "-",
        group: group?.trim() || "-",
      };
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n");
    if (lines.length <= 200) {
      setVehicles(e.target.value);
    }
  };

  // Generate line numbers based on content
  const lineNumbers = Array.from({ length: Math.max(vehicles.split("\n").length, 1) }, (_, i) => i + 1);

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA]">Vehicles</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
            Add Multiple Vehicles
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="w-full border-none text-white shadow-lg">
        <CardContent>
          {/* Step Indicator */}
          <div className="grid grid-cols-2 rounded-lg mb-6">
            <div
              className={`py-4 text-center flex flex-col gap-1 cursor-pointer ring-1 ring-neutral-900 ${
                step === 1 ? "bg-[#171717] " : ""
              }`}
              onClick={() => setStep(1)}
            >
              <p className=" text-neutral-50 text-sm font-semibold">Step 1</p>
              <p className="text-neutral-400 text-sm font-normal ">Add Vehicle Data</p>
            </div>
            <div
              className={`py-4 text-center cursor-pointer flex flex-col gap-1  ring-1 ring-neutral-900 ${
                step === 2 ? "bg-[#171717]" : ""
              }`}
              onClick={() => setStep(2)}
            >
              <p className=" text-neutral-50 text-sm font-semibold">Step 2</p>
              <p className="text-neutral-400 text-sm font-normal ">Review & Save</p>
            </div>
          </div>

          {/* Info Box */}
          <div className="py-2 rounded-md mb-4">
            <div className="flex gap-2 items-center">
              <PlayCircle className="w-5 h-5 text-white" />
              <p className="text-neutral-50 text-sm font-normal">
                Watch the video to learn more
              </p>
            </div>
          </div>

          {/* Step 1: Vehicle Input */}
          {step === 1 && (
            <>
              <div className="w-full bg-[#171717] p-4 rounded-md text-neutral-400 text-xs font-normal">
                <p className="text-[#A3A3A3] text-sm mb-2">
                  Each vehicle should be on a new line. You can copy & paste
                  your vehicle data from a spreadsheet program like Excel or
                  Google Sheets. Be sure to follow the formatting guide below.
                </p>
                <p className="text-[#FAFAFA] text-sm font-bold mb-2">
                  NOTE: a maximum of 200 vehicles can be written/pasted into the
                  box below.
                </p>

                <div className="relative border border-[#27272A] rounded-md">
                  <div 
                    ref={lineNumbersRef}
                    className="absolute left-0 top-0 bottom-0 bg-[#171717] text-gray-500 text-sm py-3 px-2 font-mono overflow-hidden  border-r border-[#27272A]"
                    style={{
                      width: "3rem",
                      lineHeight: "1.5rem",
                      pointerEvents: "none",
                      display: "flex",
                      flexDirection: "column",
                      padding: "0.5rem 0"
                    }}
                  >
                    {lineNumbers.map(num => (
                      <div 
                        key={num} 
                        style={{
                          height: "1.5rem",
                          lineHeight: "1.5rem",
                          paddingRight: "1rem",
                          textAlign: "right"
                        }}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                  <textarea
                    className="w-[99%] h-40 bg-[#171717] text-[#A3A3A3] resize-none p-2 rounded-md  text-sm pl-10 ml-3 "
                    style={{ lineHeight: "1.5rem" }}
                    placeholder="004, 3FAHP06A2KR228819, Birmingham"
                    value={vehicles}
                    onChange={handleInputChange}
                    onScroll={handleScroll}
                  />
                </div>
              </div>

              <p className="text-neutral-400 text-xs font-normal mt-2">
             Format each line like: (Vehicle name), (VIN), (Group)
            </p>
             <div className="text-neutral-400 text-xs font-normal mt-2">
              <p className="font-semibold">(Vehicle name)</p>
               <p>The name that will be used for the vehicle in Fleetio.</p>
               <p>
                The default status (Active) will be applied to each vehicle.
                  The default status can be changed in account settings under <span className="underline"> vehicle statuses</span>.
                </p>
                 <p>
                   The default type (“Car”) will be applied unless the VIN lookup
                  finds the proper type.
                </p>
                 <br />
                 <p className="font-semibold">(VIN)</p>
                 <p>VIN number of vehicle.</p>
                 <p>
                   Fleetio will attempt to automatically decode each VIN,
                   importing vehicle type, details and specifications. If VIN
                   lookup does not include a type, the default from account
                   settings will be applied. <span className="underline">Learn more</span> about VIN
                   decoding in Fleetio.
                 </p>
                 <br />
                 <p className="font-semibold">(Group)</p>
                 <p>Group to associate vehicle with.</p>
                 <p>
                   Group hierarchy is supported. Groups with hierarchy should
                   follow the format “Parent 1|Parent 2|Group Name” with the |
                   character functioning as the delimiter. Any group (including
                   parents) that do not exist will be created.
                 </p>
                 <div>
                   <p>
                     (VIN) and (Group) are optional. To leave one of them blank,
                     leave a space like: (Vehicle name), , (Group)
                   </p>
                 </div>
              </div>
              
            </>
          )}

          {/* Step 2: Review Table */}
          {step === 2 && (
            <div className="overflow-x-auto bg-[#171717] rounded-md">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-[#171717] text-sm">
                    <TableHead className="text-white">Vehicle Name</TableHead>
                    <TableHead className="text-white">VIN</TableHead>
                    <TableHead className="text-white">Group</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vehicleList.length > 0 ? (
                    vehicleList.map((vehicle, index) => (
                      <TableRow key={index}>
                        <TableCell>{vehicle.name}</TableCell>
                        <TableCell>{vehicle.vin}</TableCell>
                        <TableCell>{vehicle.group}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-gray-500">
                        No data entered
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
       <hr className="mb-5 mt-10"></hr>
          {/* Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <Button
              variant="ghost"
              className="text-white h-10  hover:bg-gray-800"
              onClick={() => setStep(1)}
            >
              {step === 1 ? "Cancel" : "Back"}
            </Button>
            {step === 1 ? (
              <Button
                className="bg-[#047857] h-10 hover:bg-[#047857] text-[#FAFAFA]"
                onClick={() => setStep(2)}
                
              >
                Next
              </Button>
            ) : (
              <Button className="bg-[#047857] h-10 hover:bg-[#047857] text-[#FAFAFA]">
                Add Vehicles
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}