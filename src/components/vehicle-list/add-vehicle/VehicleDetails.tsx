import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Lock, Info } from "lucide-react";
const Details = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  return (
    <div className="flex w-full flex-col gap-4 md:gap-6 size-span">
      <div className="bg-[#171717] p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Identification</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Vehicle Name */}
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Vehicle Name
            </Label>
            <Input
              placeholder=""
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-zinc-400 text-sm font-normal">
              Enter a nickname to distinguish this vehicle in Fleetio.{" "}
              <a href="#" className="text-[#047857] hover:underline">
                Learn More
              </a>
            </p>
          </div>
          {/* Telematics Device */}
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Telematics Device
            </Label>

            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="device1">Device 1</SelectItem>
                <SelectItem value="device2">Device 2</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-zinc-400 text-sm font-normal">
              Link this vehicle with one of your Telematics Devices to begin
              automatically collecting data.
            </p>
          </div>
          {/* VIN/SN */}
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">VIN/SN</Label>
            <div className="flex gap-4 items-center col-span-2 space-y-1">
              <Select>
                <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="device1">Device 1</SelectItem>
                  <SelectItem value="device2">Device 2</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="!text-[#838386] text-sm font-medium h-10 m-0 justify-start items-center inline-flex"
              >
                <Lock size={16} />
                Decode VIN
              </Button>
            </div>
            <p className="text-sm mt-1 text-gray-500">
              Vehicle Identification Number or Serial Number.{" "}
              <a href="#" className="text-[#047857] hover:underline">
                Learn More
              </a>
            </p>
          </div>
          {/* License Plate */}
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              License Plate
            </Label>
            <Input
              placeholder="Enter license plate"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          {/* Type & Fuel Type */}
          <div className="col-span-12 lg:col-span-6 space-y-1">
            <Label className="text-sm font-medium text-gray-100">Type</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm mt-1.5 text-gray-500">
              Categories this vehicle
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Fuel Type
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gas">Gas</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Year, Make, Model, Trim, Registration State/Province, Labels */}
          <div className="col-span-12 lg:col-span-4 space-y-1">
            <Label className="text-sm font-medium text-gray-100">Year</Label>
            <Input
              placeholder="e.g. 1999, 2012, etc."
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-sm mt-1.5 text-gray-500">
              e.g. 1999, 2012, etc.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-1">
            <Label className="text-sm font-medium text-gray-100">Make</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="gmc">GMC</SelectItem>
                <SelectItem value="chevrolet">Chevrolet</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm mt-1.5 text-gray-500">
              e.g. Toyota, GMC, Chevrolet, etc.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-1">
            <Label className="text-sm font-medium text-gray-100">Model</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4runner">4Runner</SelectItem>
                <SelectItem value="sierra">Sierra</SelectItem>
                <SelectItem value="silverado">Silverado</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm mt-1.5 text-gray-500">
              e.g. 4Runner, Sierra, Silverado, etc.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-1">
            <Label className="text-sm text-gray-400">Trim</Label>
            <Select>
              <SelectTrigger className="mt-1 bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="se">SE</SelectItem>
                <SelectItem value="le">LE</SelectItem>
                <SelectItem value="xle">XLE</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm mt-1 text-gray-500">e.g. SE, LE, XLE, etc.</p>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Registration State/Province
            </Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alabama">Alabama</SelectItem>
                <SelectItem value="alaska">Alaska</SelectItem>
                <SelectItem value="arizona">Arizona</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">Labels</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Label1">Label 1</SelectItem>
                <SelectItem value="Label2">Label 2</SelectItem>
                <SelectItem value="Label3">Label 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Photo Upload */}
          <div className="col-span-12 space-y-1">
            <Label className="text-sm text-gray-400 normal">Labels</Label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="photo-upload"
              />
              <Label htmlFor="photo-upload">
                <Button
                  variant="outline"
                  className="bg-[#047857] hover:bg-[#047857] h-10"
                >
                  Pick File
                </Button>
              </Label>
              <span className="ml-2 text-white h-10 border border-dotted border-neutral-700 flex items-center p-4 rounded-md">
                Or drop file here
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1 ">
              {selectedFile ? selectedFile.name : "No file selected"}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Classification</h2>
        <hr className="my-5" />
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="space-y-1">
            <Label className="text-sm font-medium text-gray-100">Status</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Active
                </SelectItem>
                <SelectItem value="inactive">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Inactive
                </SelectItem>
              </SelectContent>
            </Select>

            <p className="text-sm mt-1.5 text-gray-500">
              Vehicle&apos;s Status.{" "}
              <a href="#" className="text-[#047857] hover:underline">
                Learn More
              </a>
            </p>
          </div>
          <div className="space-y-1">
          <Label className="text-sm font-medium text-gray-100">Group</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group1">Group 1</SelectItem>
                <SelectItem value="group2">Group 2</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm mt-1.5 text-gray-500">Vehicle group</p>
          </div>
          <div className="space-y-1">
          <Label className="text-sm font-medium text-gray-100">Operator</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="operator1">Operator 1</SelectItem>
                <SelectItem value="operator2">Operator 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
           <Label className="text-sm font-medium text-gray-100">Ownership</Label>
            <Select>
              <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                <SelectValue placeholder="Owned" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owned">Owned</SelectItem>
                <SelectItem value="leased">Leased</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Additional</h2>
        <hr className="my-5" />
        <div className="flex flex-col gap-4 md:gap-6">
        <div className="space-y-1">
        <Label className="text-sm font-medium text-gray-100">Color</Label>
          <Input
            placeholder="Please Enter"
            className="bg-black text-white border-zinc-800 h-10"
          />
        </div>
        <div className="space-y-1">
        <Label className="text-sm font-medium text-gray-100">Body Type</Label>
          <Select>
            <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectItem value="convertible">Convertible</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="pickup">Pickup</SelectItem>
              <SelectItem value="sedan">Sedan</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm mt-1.5 text-gray-500">
            e.g. Convertible, Coupe, Pickup, Sedan, etc.
          </p>
        </div>
        <div className="space-y-1">
        <Label className="text-sm font-medium text-gray-100">Body Subtype</Label>
          <Select>
            <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectItem value="extended-cab">Extended Cab</SelectItem>
              <SelectItem value="crew-cab">Crew Cab</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm mt-1.5 text-gray-500">
            e.g. Extended Cab, Crew Cab, etc.
          </p>
        </div>
        <div className="space-y-1">
        <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
            MSRP
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="bg-[#171717] text-white p-2 rounded-md">
                Manufacturer Suggested Retail Price
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            placeholder="$"
            className="bg-black text-white border-zinc-800 h-10"
          />
        </div>
        <div className="space-y-1">
        <Label className="text-sm font-medium text-gray-100">Linked Vehicles</Label>
          <Select>
            <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectItem value="vehicle1">Vehicle 1</SelectItem>
              <SelectItem value="vehicle2">Vehicle 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
