"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChevronLeft, Clock4 } from "lucide-react";
import React, { useRef, useState } from "react";
import { format } from "date-fns";
import { FileIcon } from "@/lib/svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";
import MaintenanceCostSummaryTable from "@/components/maintenance/maintenance-history/MaintenanceCostSummaryTable";
import MaintenanceMaintenanceEntryTab from "@/components/maintenance/maintenance-history/MaintenanceMaintenanceEntryTab";
import MaintenanceLineItemsCard from "@/components/maintenance/maintenance-history/MaintenanceLineItemsCard";
const generateTimeOptions = () => {
  const times = [];
  let hour = 0;
  let minute = 0;

  while (hour < 24) {
    const ampm = hour < 12 ? "am" : "pm";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const timeString = `${displayHour}:${minute === 0 ? "00" : "30"}${ampm}`;
    times.push(timeString);
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour += 1;
    }
  }

  return times;
};
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
const status = [
  { value: "PriorityClass1", label: "Scheduled", color: "bg-[#008000]" },
  { value: "PriorityClass2", label: "Non-Scheduled", color: "bg-[#ffa500]" },
  { value: "PriorityClass3", label: "Emergency", color: "bg-[#ff0000]" },
];
const Page = () => {
  const timeOptions = generateTimeOptions();
  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = React.useState<Date>();
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [selected, setSelected] = useState(status[0]);

  const handlePhotoDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handlePhotoFiles(files);
    }
  };

  const handleDocumentDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleDocumentFiles(files);
    }
  };

  const handlePhotoFiles = (files: FileList) => {
    const newFiles = Array.from(files);
    setPhotoFiles([...photoFiles, ...newFiles]);
  };

  const handleDocumentFiles = (files: FileList) => {
    const newFiles = Array.from(files);
    setDocumentFiles([...documentFiles, ...newFiles]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handlePhotoClick = () => {
    photoInputRef.current?.click();
  };

  const handleDocumentClick = () => {
    documentInputRef.current?.click();
  };

  const handlePhotoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handlePhotoFiles(e.target.files);
    }
  };

  const handleDocumentInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      handleDocumentFiles(e.target.files);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getPhotoURL = (file: File) => {
    return URL.createObjectURL(file);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const removePhotoFile = (index: number) => {
    setPhotoFiles(photoFiles.filter((_, i) => i !== index));
  };

  const removeDocumentFile = (index: number) => {
    setDocumentFiles(documentFiles.filter((_, i) => i !== index));
  };
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Button
        variant="ghost"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal max-w-max hover:bg-transparent px-0"
        onClick={() => router.back()}
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" />
        Maintenance Entries
      </Button>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
          New Maintenance Entry
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-10 border-0">
            Cancel
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-[#065F46] hover:bg-[#065F46] border-0"
          >
            Save Maintenance Entry
          </Button>
        </div>
      </div>
      {/* Add Expense Form */}
      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <h2 className="text-base font-medium">Details</h2>
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
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Repair Priority Class
              </Label>
              <Select
                onValueChange={(value) =>
                  setSelected(
                    status.find((opt) => opt.value === value) || selected
                  )
                }
              >
                <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10 flex items-center">
                  <div className="flex items-center gap-2">
                    <SelectValue placeholder="Please Select" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {status.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${status.color}`}
                        ></span>
                        {status.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-zinc-400 text-sm font-normal">
                Repair Priority Class (VMRS Code Key 16) is a simple way to
                classify whether a service or repair was scheduled,
                non-scheduled, or an emergency.
              </p>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Completion Date
              </Label>
              <div className="flex items-center gap-4">
                {/* Date Picker */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zinc-950 text-white border-zinc-800 h-10",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 ">
                  <span className="text-sm w-full max-w-max pointer-events-none absolute left-4 top-3">
                    <Clock4 size={16} className="text-zinc-400" />
                  </span>
                  <div className="relative">
                    {/* Editable Input Field */}
                    <input
                      type="text"
                      className="w-full bg-transparent text-white border-0 h-10 min-w-3 px-3 outline-none focus:ring-0 focus:border-0 pl-10"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      placeholder="Pick time"
                    />

                    {/* Dropdown Time Picker */}
                    <Select onValueChange={setSelectedTime}>
                      <SelectTrigger className="absolute inset-0 w-full h-full opacity-0" />
                      <SelectContent>
                        {timeOptions.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  className="border-solid-neutral-600 bg-zinc-950 h-4 w-4"
                  id="terms"
                />
                <label htmlFor="terms" className="text-neutral-50 text-base">
                  Set Start Date
                </label>
              </div>
            </div>
            <hr className=" col-span-12 w-full"></hr>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Reference
              </Label>
              <Input
                type="text"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>

            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Vendor
              </Label>
              <Select>
                <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="device1">Vendor 1</SelectItem>
                  <SelectItem value="device2">Vendor 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Labels
              </Label>
              <Select>
                <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="device1">Labels 1</SelectItem>
                  <SelectItem value="device2">Labels 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <MaintenanceMaintenanceEntryTab />
        </div>
      </div>
      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <MaintenanceLineItemsCard />
        </div>
      </div>
      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <div className="grid grid-cols-12 gap-4 md:gap-6 py-8">
            <div className="col-span-12 md:col-span-6 w-full ">
              <h3 className="text-neutral-50 text-sm font-medium mb-5 ">
                General Notes
              </h3>
              <Textarea
                placeholder="Add notes or additional details"
                id="message"
                className="bg-zinc-950 text-white border-zinc-800 h-[328px]"
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full ">
              <h3 className="text-neutral-50 text-sm font-medium ">
                Cost Summary
              </h3>
              <hr className="my-5"></hr>
              <MaintenanceCostSummaryTable />
            </div>
          </div>
        </div>
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Photo Upload */}
            <div className="bg-[#171717] md:p-4 rounded-lg text-white">
              <h3>Photos</h3>
              <hr className="my-5"></hr>
              <div
                className="px-6 py-4 bg-base-background border-dashed rounded-lg border bor border-tailwind-colors-neutral-700 justify-start items-end gap-[7px] cursor-pointer inline-flex bg-zinc-950 w-full"
                onDrop={handlePhotoDrop}
                onDragOver={handleDragOver}
                onClick={handlePhotoClick}
              >
                <input
                  type="file"
                  ref={photoInputRef}
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoInputChange}
                />
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <FileIcon />
                  </div>
                </div>
                <div>
                  <p className="text-base-foreground text-base font-semibold leading-normal mb-2">
                    Drag and drop files to upload
                  </p>
                  <p className="text-[#a1a1aa] text-sm font-light leading-tight">
                    or click to pick files
                  </p>
                </div>
              </div>
              {photoFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {photoFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-zinc-950 p-2 rounded-md"
                    >
                      <div className="flex items-center">
                        <span className="ml-2 text-sm truncate w-full">
                          {file.name}
                        </span>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-400"
                        onClick={() => removePhotoFile(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Document Upload */}
            <div className="bg-[#171717] md:p-4 rounded-lg text-white">
              <h3>Documents</h3>
              <hr className="my-5"></hr>
              <div
                className="px-6 py-4 bg-base-background border-dashed rounded-lg border bor border-tailwind-colors-neutral-700 justify-start items-end gap-[7px] cursor-pointer inline-flex bg-zinc-950 w-full"
                onDrop={handleDocumentDrop}
                onDragOver={handleDragOver}
                onClick={handleDocumentClick}
              >
                <input
                  type="file"
                  ref={documentInputRef}
                  className="hidden"
                  multiple
                  onChange={handleDocumentInputChange}
                />
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <FileIcon />
                  </div>
                </div>
                <div>
                  <p className="text-base-foreground text-base font-semibold leading-normal mb-2">
                    Drag and drop files to upload
                  </p>
                  <p className="text-[#a1a1aa] text-sm font-light leading-tight">
                    or click to pick files
                  </p>
                </div>
              </div>
              {documentFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {documentFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-zinc-950 p-2 rounded-md"
                    >
                      <div className="flex items-center">
                        <span className="ml-2 text-sm truncate max-w-[180px]">
                          {file.name}
                        </span>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-400"
                        onClick={() => removeDocumentFile(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
          <div className="bg-[#171717] p-4 rounded-lg text-white">
            <h3>Comments</h3>
            <hr className="my-5"></hr>
            <div className="col-span-12 space-y-1 flex gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Textarea
                placeholder="Please add your comment (optional)"
                id="message"
                className="bg-zinc-950 text-white border-zinc-800 h-[90px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse max-w-3xl m-auto w-full md:flex-row justify-center md:justify-between">
        <Button variant="outline" className="border-0 h-10 text-xs md:text-sm">
          Cancel
        </Button>
        <div className="space-x-2 m:dspace-x-4 flex justify-center ">
          <Button variant="outline" className="h-10 text-xs md:text-sm">
            Save & Add Another
          </Button>
          <Button className="bg-emerald-800 text-white hover:bg-emerald-700 h-10 text-xs md:text-sm">
            Save Maintenance Entry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
