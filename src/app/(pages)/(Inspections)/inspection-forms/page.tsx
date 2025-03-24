"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import AddRemark from "@/components/inspection/AddRemark";
import FileUpload from "@/components/ImageUpload";
import FileDropUpload from "@/components/FileDropUpload";
import { CustomRadioGroup } from "@/components/CustomRadioGroup";
const vehicles = [
  {
    id: "2100",
    name: "[2016 Ford F-150]",
    status: "Active",
    image: "https://github.com/shadcn.png",
  },
  {
    id: "2200",
    name: "[2017 Chevrolet Silverado]",
    status: "Inactive",
    image: "https://github.com/shadcn.png",
  },
];
const optioEnginens = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const transmission = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const clutch = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
  { label: "No Clutch", value: "No-clutch" },
];
const steeringMechanism = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
]; 
const horn = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const windshieldWashers = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const rearVisionMirrors = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const lightingReflectors = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const parkingBrake = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const serviceBrakes = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const airLines = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const couplingDevices = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const tires = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const wheelsRims = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const emergencyEquipment = [
  { label: "Pass", value: "pass" },
  { label: "Fail", value: "fail" },
];
const Page = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA] ">
              Inspections
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
              Forms
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
          New Vehicle Inspection
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-10 border-0">
            Cancel
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-[#065F46] hover:bg-[#065F46] border-0"
          >
            Save Inspection
          </Button>
        </div>
      </div>
      <div className="flex w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <h2 className="text-lg font-medium">Details</h2>
          <hr className="my-5" />
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Vehicle
              </Label>
              <Select onValueChange={(value) => setSelectedVehicle(value)}>
                <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10 flex items-center justify-between px-3">
                  {selectedVehicle ? (
                    <div className="flex items-center gap-2">
                      <span>{selectedVehicle}</span>
                    </div>
                  ) : (
                    <SelectValue placeholder="Please Select" />
                  )}
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map((vehicle) => (
                    <SelectItem
                      key={vehicle.id}
                      value={`${vehicle.id} ${vehicle.name}`}
                    >
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={vehicle.image} alt={vehicle.name} />
                          <AvatarFallback>V</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-neutral-50 text-sm font-normal">
                            {vehicle.id} {vehicle.name}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center gap-1">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                vehicle.status === "Active"
                                  ? "bg-green-700"
                                  : "bg-red-700"
                              }`}
                            />
                            {vehicle.status}
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3A3A3] text-[#18181B] ">
                              Sample
                            </span>
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      {/* {selectedVehicle && ( */}
      <div className="flex w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <h2 className="col-span-12 md:col-span-6 text-lg font-medium">
              Odometer Reading
            </h2>

            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 w-full space-y-1">
                  <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                    Primary Meter
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="w-full space-y-1">
                      <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4 space-y-1">
                        <Input
                          type="number"
                          placeholder="Please Enter"
                          className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                        />
                        <span className="text-sm w-full max-w-max">mi</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 max-w-max min-w-16 justify-end">
                      <Checkbox
                        className="border-solid-neutral-600 bg-zinc-950 h-4 w-4"
                        id="terms"
                      />
                      <label
                        htmlFor="terms"
                        className="text-neutral-50 text-base"
                      >
                        Void
                      </label>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm font-normal">
                    Lasr Updated: 20,871 mi (11 days ago)
                  </p>
                  <Label className="text-sm font-medium text-gray-100 flex items-center gap-2 !mt-3">
                    Meter Entry Photo Verification
                  </Label>
                  <FileUpload id="upload-1" />
                </div>

                <div className="col-span-12 w-full space-y-1">
                  <AddRemark showNotesOption={true} showPhotoOption={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#171717] p-4 rounded-lg text-white space-y-4">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-6">
              <h2 className=" text-lg font-medium">Item Checklist</h2>
              <h4 className="text-neutral-50 text-base font-medium pt-3 md:pt-9"> 
                Inspection Details
              </h4>
              <p className="text-neutral-500 text-sm font-normal">
                Take a photo of the interior
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 w-full space-y-1 md:pt-16">
              <FileDropUpload id="drop-1" />
            </div>
          </div>
          <hr className=""></hr>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Engine</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={optioEnginens} />
              <AddRemark showNotesOption={true} showPhotoOption={false} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Oil Life Left</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <Input
                type="number"
                placeholder=""
                className="bg-black text-white border-zinc-800 h-10"
              />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
   
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Fuel Level</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <Input
                type="number"
                placeholder=""
                className="bg-black text-white border-zinc-800 h-10"
              />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Transmission</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={transmission} />
              <AddRemark showNotesOption={true} showPhotoOption={false} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Clutch</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={clutch} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Steering Mechanism</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={steeringMechanism} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Horn</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={horn} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Windshield and Wipers/Washers</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={windshieldWashers} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Rear Vision Mirrors</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={rearVisionMirrors} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Lighting Devices and Reflectors</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={lightingReflectors} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Parking Brake</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={parkingBrake} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Service Brakes</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={serviceBrakes} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Air Lines/Light Lines</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={airLines} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Coupling Devices</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={couplingDevices} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Tires</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={tires} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Wheels and Rimsres</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={wheelsRims} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pt-4">
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-500 text-sm font-normal">Emergency Equipment</p>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-4">
              <CustomRadioGroup options={emergencyEquipment} />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div> 
        </div>
        <div className="bg-[#171717] p-4 rounded-lg text-white space-y-4">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-6">
              <h2 className=" text-lg font-medium">Item Checklist</h2>
              <h4 className="text-neutral-50 text-base font-medium pt-3 md:pt-9"> 
              Vehicle Condition OK
              </h4>
              <p className="text-neutral-500 text-sm font-normal">
              This must be checked if there are no defects.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 w-full space-y-1 md:pt-16">
            <Input
                type="number"
                placeholder=""
                className="bg-black text-white border-zinc-800 h-10"
              />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>
          <hr className=""></hr>
<div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-6">
            <h4 className="text-neutral-50 text-base font-medium"> 
            Vehicle Condition OK
              </h4>
              <p className="text-neutral-500 text-sm font-normal">
              This must be checked if there are no defects.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 w-full space-y-1">
            <Input
                type="text"
                placeholder="Type Your Name To Sign"
                className="bg-black text-white border-zinc-800 h-10"
              />
              <AddRemark showNotesOption={true} showPhotoOption={true} />
            </div>
          </div>

        </div>
         <div className="flex w-full flex-row justify-center justify-between">
                <Button variant="outline" className="border-0 h-10 text-xs md:text-sm">
                  Cancel
                </Button>
                <div className="space-x-2 m:dspace-x-4 flex justify-center ">

                  <Button className="bg-emerald-800 text-white hover:bg-emerald-700 h-10 text-xs md:text-sm">
                    Save 
                  </Button>
                </div>
              </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Page;
