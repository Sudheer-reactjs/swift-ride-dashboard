import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
const Specifications = () => {
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Dimensions</h2>
        <hr className="my-5" />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Width
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Measurement of the widest part of the vehicle</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Height
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Measurement from the ground to the highest part of the
                      vehicle (not including accessories or optional equipment)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Length
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Total length of the vehicle (including bumpers)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Interior Volume
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Volume within the vehicle&apos;s main chamber (total
                      passenger volume + cargo volume, if the cargo is not
                      isolated from the passenger area)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">
                ft<sup>3</sup>
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Passenger Volume
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Volume of the area designated solely for passengers (not
                      including any interior volume designated for cargo)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">
                ft<sup>3</sup>
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Cargo Volume
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Volume of the area designated as cargo space</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">
                ft<sup>3</sup>
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Bed Length
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Measurement of the distance between the ground and the
                      lowest point of the vehicle
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Ground Clearance
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Length of the bed of a pickup truck (front to back)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Weight</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Curb Weight
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Total weight of the vehicle (including standard equipment
                      and consumables, but not including passengers or cargo)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Gross Vehicle Weight Rating
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Total weight of the vehicle (including standard equipment,
                      consumables, accessories, passengers and cargo)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Performance</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Towing Capacity
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Maximum weight the vehicle can pull, without optional
                      suspension, engine or transmission
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Max Payload
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>
                      Maximum weight the vehicle can hold (including cargo and
                      additional options, but excluding driver and fuel)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Fuel Economy</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              EPA City
            </Label>
            <Input
              type="number"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              EPA Highway
            </Label>
            <Input
              type="number"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              EPA Combined
            </Label>
            <Input
              type="number"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Engine</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Engine Summary
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Basic engine summary</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Engine Brand
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. HEMI, Cummins, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Aspiration
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Block Type
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. V, Inline, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type1"> Block Type 1</SelectItem>
                <SelectItem value="type2"> Block Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Bore
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Diameter of the engine cylinders</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Cam Type
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. DOHC, SOHC, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CamType1"> Cam Type 1</SelectItem>
                <SelectItem value="CamType2"> Cam Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Compression
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Compression ratio</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Cylinders
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Number of engine cylinders</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Displacement
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Total volume displaced during one firing cycle</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Fuel Induction
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Method of drawing fuel into the engine (e.g. throttle body, multiport, direct, etc.)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> 
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FuelInduction1"> Fuel Induction 1</SelectItem>
                <SelectItem value="FuelInduction2"> Fuel Induction 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Max HP
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Maximum power achieved (expressed in units of horsepower)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> 
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Max Torque
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Maximum torque delivered (expressed in units of foot-pounds)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Redline RPM
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Maximum speed at which engine can operate without risking damage</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Stroke
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Distance traveled by the piston during a combustion cycle</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-12 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Valves
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Total number of engine valves (not valves per cylinder)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
        </div>
        
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Transmission</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Transmission Summary
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Basic transmission summary</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Transmission Brand
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. Allison, Colotti, Shengrui, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Transmission Type
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CamType1"> Cam Type 1</SelectItem>
                <SelectItem value="CamType2"> Cam Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-12 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Transmission Gears
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Number of gears/speeds available</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
        </div>       
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Wheels & Tires</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Drive Type
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. Front Wheel Drive, Rear Wheel Drive, All Wheel Drive, or 4 Wheel Drive</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CamType1"> Cam Type 1</SelectItem>
                <SelectItem value="CamType2"> Cam Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Brake System
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. Hydraulic, Air, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CamType1"> Cam Type 1</SelectItem>
                <SelectItem value="CamType2"> Cam Type 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Front Track Width 
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Distance between the front tires, measured from the center of the tire width</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Rear Track Width  
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Distance between the rear tires, measured from the center of the tire width</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Wheelbase 
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Length from the center of the front wheel to the center of the rear wheel</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">in</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Front Wheel Diameter  
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Distance from one side of the front wheel to the other, through the center point</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Rear Wheel Diameter  
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Distance from one side of the rear wheel to the other, through the center point</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Rear Axle 
            
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Front Tire Type  
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. All-season, Snow, 4x4, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Front Tire PSI  
            
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Rear Tire Type  
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>e.g. All-season, Snow, 4x4, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Rear Tire PSI  
            </Label>
            <Input
              type="text"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>

        </div>       
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Fuel</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Fuel Quality 
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Recommended octane rating</p>
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </Label>
            <Input
              type="number"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Fuel Tank 1 Capacity
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Maximum volume of gas in the vehicle&apos;s primary gas tank</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">Gallon(US)</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Fuel Tank 2 Capacity
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Maximum volume of gas in the vehicle&apos;s secondary gas tank</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                type="number"
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">Gallon(US)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Oil</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-12 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            Oil Capacity 
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <HelpCircle className="h-4 w-4 text-zinc-400" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] w-full text-center">
                    <p>Maximum volume of oil in the vehicle&apos;s oil reservoir</p>
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </Label>
            <Input
              type="number"
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
