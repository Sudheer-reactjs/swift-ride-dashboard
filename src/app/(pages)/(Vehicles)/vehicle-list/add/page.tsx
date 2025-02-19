"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ChevronRight, ExternalLinkIcon, Lock, Info } from "lucide-react";

const AddVehicle = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState("Details")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="ml-4 mt-4 flex items-center text-2xl justify-start">
        Vehicles
        <ChevronRight className="w-6 h-6" />
        New Vehicles
      </div>
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-black-900 p-6">
          <h2 className="text-xl font-semibold mb-4">New Vehicle</h2>
          <nav>
            {[
              "Details",
              "Maintenance",
              "Lifecycle",
              "Financial",
              "Specifications",
              "Settings",
            ].map((item) => (
              <div
                  key={item}
                  className={`py-2 px-4 rounded cursor-pointer transition-all ${
                    activeTab === item
                      ? "text-[#10B981] bg-[#171717]"
                      : "hover:text-[#10B981] hover:bg-[#171717]"
                  }`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-end mb-6">
            <div className="flex gap-4">
              <Button variant="outline">Cancel</Button>
              <Button variant="outline">Add Multiple Vehicles</Button>
              <Button className="bg-[#047857] text-white hover:bg-[#047857]">
                Save Vehicle
              </Button>
            </div>
          </div>

          {/* Form */}
        { activeTab === "Details" && (
          <>
         <div className="bg-[#171717] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">Identification</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Vehicle Name */}
              <div className="col-span-2">
                <Label className="text-sm font-medium text-gray-100">
                  Vehicle Name <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="Enter a nickname" className="mt-1 bg-black text-white border-gray-700" />
                <p className="text-sm text-gray-500 mt-1">
                  Enter a nickname to distinguish this vehicle in Fleetio.{" "}
                  <a href="#" className="text-[#047857] hover:underline">
                    Learn More <ExternalLinkIcon className="inline h-3 w-3" />
                  </a>
                </p>
              </div>
              {/* Telematics Device */}
              <div className="col-span-2">
                <Label className="text-sm text-gray-100">
                  Telematics Device
                </Label>

                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="device1">Device 1</SelectItem>
                    <SelectItem value="device2">Device 2</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm mt-1 text-gray-500">
                  Link this vehicle with one of your{" "}
                  <span className="font-medium">Telematics Devices</span>
                  to begin automatically collecting data.
                </p>
              </div>
              {/* VIN/SN */}
              <div className="col-span-2">
                <Label className="text-sm text-gray-100">VIN/SN</Label>
                <div className="flex gap-2 mt-1">
                  <Input placeholder="Enter VIN or Serial Number" className=" bg-black text-white border-gray-700" />
                  <Button variant="outline">
                    <span>
                      <Lock />
                    </span>
                    Decode VIN
                  </Button>
                </div>
                <p className="text-sm mt-1 text-gray-500">
                  Vehicle Identification Number or Serial Number.{" "}
                  <a href="#" className="text-[#047857] hover:underline">
                    Learn More <ExternalLinkIcon className="inline h-3 w-3" />
                  </a>
                </p>
              </div>
              {/* License Plate */}
              <div className="col-span-2">
                <Label className="text-sm text-gray-100">License Plate</Label>
                <Input placeholder="Enter license plate" className="mt-1 bg-black text-white border-gray-700" />
              </div>
              {/* Type & Fuel Type */}
              <div>
                <Label className="text-sm text-gray-100">Type</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm mt-1 text-gray-500">
                  Categories this vehicle
                </p>
              </div>
              <div>
                <Label className="text-sm text-gray-100">Fuel Type</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gas">Gas</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Year, Make, Model, Trim, Registration State/Province, Labels */}
              <div>
                <Label className="text-sm text-gray-100">Year</Label>
                <Input placeholder="e.g. 1999, 2012, etc." className="mt-1 bg-black text-white border-gray-700" />
                <p className="text-sm mt-1 text-gray-500">
                  e.g. 1999, 2012, etc.
                </p>
              </div>
              <div>
                <Label className="text-sm text-gray-100">Make</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="gmc">GMC</SelectItem>
                    <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm mt-1 text-gray-500">
                  e.g. Toyota, GMC, Chevrolet, etc.
                </p>
              </div>
              <div>
                <Label className="text-sm text-gray-100">Model</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4runner">4Runner</SelectItem>
                    <SelectItem value="sierra">Sierra</SelectItem>
                    <SelectItem value="silverado">Silverado</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm mt-1 text-gray-500">
                  e.g. 4Runner, Sierra, Silverado, etc.
                </p>
              </div>
              <div>
                <Label className="text-sm text-gray-400">Trim</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="se">SE</SelectItem>
                    <SelectItem value="le">LE</SelectItem>
                    <SelectItem value="xle">XLE</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm mt-1 text-gray-500">
                  e.g. SE, LE, XLE, etc.
                </p>
              </div>
              <div>
                <Label className="text-sm text-gray-400">
                  Registration State/Province
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alabama">Alabama</SelectItem>
                    <SelectItem value="alaska">Alaska</SelectItem>
                    <SelectItem value="arizona">Arizona</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="col-span-2 text-sm text-gray-400">
                  Labels
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
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
              <div className="col-span-2">
                <Label className="text-sm text-gray-400">Photo</Label>
                <div className="mt-1">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Label htmlFor="photo-upload">
                    <Button
                      variant="outline"
                      className="bg-[#047857] hover:bg-[#047857]"
                    >
                      Pick File
                    </Button>
                  </Label>
                  <span className="ml-2 text-gray-400">Or drop file here</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  {selectedFile ? selectedFile.name : "No file selected"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-[#171717] p-6 rounded-lg ">
            <h2 className="text-xl font-semibold ">Classification</h2>
            <hr className="my-5" />
            <div className="mt-2">
              <Label className="text-sm text-gray-400">Status</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm mt-1 text-gray-500">Vehical status</p>
            </div>
            <div className="mt-2">
              <Label className="text-sm text-gray-400">Group</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="group1">Group 1</SelectItem>
                  <SelectItem value="group2">Group 2</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm mt-1 text-gray-500">Vehicle group</p>
            </div>
            <div className="mt-2">
              <Label className="text-sm text-gray-400">Operator</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operator1">Operator 1</SelectItem>
                  <SelectItem value="operator2">Operator 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-2">
              <Label className="text-sm text-gray-400">Ownership</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Owned" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owned">Owned</SelectItem>
                  <SelectItem value="leased">Leased</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="p-4 border mt-3  bg-[#171717] rounded-lg space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Additional Details
            </h2>

            {/* Color */}
            <div>
              <Label className="text-gray-400">Color</Label>
              <Input
                placeholder="Please Enter"
                className="mt-1 bg-black text-white border-gray-700"
              />
            </div>

            {/* Body Type */}
            <div>
              <Label className="text-gray-400">Body Type</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white">
                  <SelectItem value="convertible">Convertible</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                  <SelectItem value="pickup">Pickup</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">
                e.g. Convertible, Coupe, Pickup, Sedan, etc.
              </p>
            </div>

            {/* Body Subtype */}
            <div>
              <Label className="text-gray-400">Body Subtype</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white">
                  <SelectItem value="extended-cab">Extended Cab</SelectItem>
                  <SelectItem value="crew-cab">Crew Cab</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">
                e.g. Extended Cab, Crew Cab, etc.
              </p>
            </div>

            {/* MSRP */}
            <div>
              <Label className="text-gray-400 flex items-center gap-1">
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
                className="mt-1 bg-black text-white border-gray-700"
              />
            </div>

            {/* Linked Vehicles */}
            <div>
              <Label className="text-gray-400">Linked Vehicles</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black text-white border-gray-700">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white">
                  <SelectItem value="vehicle1">Vehicle 1</SelectItem>
                  <SelectItem value="vehicle2">Vehicle 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          </>)}
          <div className="flex justify-between mt-5 mb-6">
              <Button variant="outline">Cancel</Button>
            <div className="flex gap-4">
              <Button variant="outline">Save & Add Another</Button>
              <Button className="bg-[#047857] text-white hover:bg-[#047857]">
                Save Vehicle
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AddVehicle;
