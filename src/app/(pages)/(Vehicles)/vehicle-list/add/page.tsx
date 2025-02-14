"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ChevronRight } from "lucide-react";

const AddVehicle = () => {
  return (
<>
    <div className="ml-4 mt-4 flex items-center text-2xl justify-start  ">
        Vehicles 
        <ChevronRight className="w-4 h-4" />
        New Vehicles
      </div>
    <div className="flex min-h-screen bg-black text-white">

      
      {/* Sidebar */}
      <aside className="w-64 bg-black-900 p-6">
        <h2 className="text-xl font-semibold mb-4">New Vehicle</h2>
        <nav>
          {["Details", "Maintenance", "Lifecycle", "Financial", "Specifications", "Settings"].map((item) => (
            <div key={item} className="py-2 px-4 rounded hover:text-[#10B981] hover:bg-[#171717] cursor-pointer">
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">Identification</h2>
          <div className="flex gap-4">
            <Button variant="outline">Cancel</Button>
            <Button variant="outline">Add Multiple Vehicles</Button>
            <Button className="bg-[#047857] hover:bg-[#047857] ">Save Vehicle</Button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#171717]  p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vehicle Name */}
            <div>
              <label className="text-sm text-gray-400">Vehicle Name</label>
              <Input placeholder="Enter a nickname" className="mt-1" />
            </div>
            {/* Telematics Device */}
            <div>
              <label className="text-sm text-gray-400">Telematics Device</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="device1">Device 1</SelectItem>
                  <SelectItem value="device2">Device 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* VIN/SN */}
            <div className="col-span-2">
              <label className="text-sm text-gray-400">VIN/SN</label>
              <div className="flex gap-2 mt-1">
                <Input placeholder="Enter VIN or Serial Number" />
                <Button variant="outline">Decode VIN</Button>
              </div>
            </div>
            {/* License Plate */}
            <div className="col-span-2">
              <label className="text-sm text-gray-400">License Plate</label>
              <Input placeholder="Enter license plate" className="mt-1" />
            </div>
            {/* Type & Fuel Type */}
            <div>
              <label className="text-sm text-gray-400">Type</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-400">Fuel Type</label>
              <Select>
                <SelectTrigger className="mt-1">
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
              <label className="text-sm text-gray-400">Year</label>
              <Input placeholder="e.g. 1999, 2012, etc." className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-gray-400">Make</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="gmc">GMC</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-400">Model</label>
              <Input placeholder="e.g. 4Runner, Yukon, Silverado, etc." className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-gray-400">Trim</label>
              <Input placeholder="e.g. SE, LE, XLE, etc." className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-gray-400">Registration State/Province</label>
              <Input placeholder="Enter state/province" className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-gray-400">Labels</label>
              <Input placeholder="Enter labels" className="mt-1" />
            </div>
            {/* Photo Upload */}
            <div className="col-span-2">
              <label className="text-sm text-gray-400">Photo</label>
              <div className="mt-1">
                <Button variant="outline">Pick File</Button>
                <span className="ml-2 text-gray-400">Or drop file here</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">No file selected</p>
            </div>
            {/* Classification Section */}
            <div className="col-span-2 ">
              <h2 className="text-xl font-semibold mt-6">Classification</h2>
              <div className="mt-2">
              <label className="text-sm text-gray-400">Status</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Active" />
                </SelectTrigger>
              </Select>
              </div>
              <div className="mt-2">
              <label className="text-sm text-gray-400">Group</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
              </Select>
              </div>
              <div className="mt-2">
              <label className="text-sm text-gray-400">Operator</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
              </Select>
              </div>
              <div className="mt-2">
              <label className="text-sm text-gray-400">Ownership</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Owned" />
                </SelectTrigger>
              </Select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default AddVehicle;
