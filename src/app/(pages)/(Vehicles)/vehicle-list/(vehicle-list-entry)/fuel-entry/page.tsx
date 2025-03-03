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
import Link from "next/link";
import React, { useRef, useState } from "react";
import { format } from "date-fns";
import { FileIcon } from "@/lib/svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Page = () => {
  const [date, setDate] = React.useState<Date>();
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/vehicle-list"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Fuel Entry
      </Link>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
          New Fuel Entry
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-10 border-0">
            Cancel
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-[#065F46] hover:bg-[#065F46] border-0"
          >
            Save Expense Entry
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
              <Select>
                <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="device1">Device 1</SelectItem>
                  <SelectItem value="device2">Device 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Fuel Entry Date & Time
              </Label>
              <div className="flex items-center gap-4">
                {/* Date Picker */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-black text-white border-zinc-800 h-10",
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
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pl-4">
                  <span className="text-sm w-full max-w-max">
                    <Clock4 size={16} className="text-zinc-400" />
                  </span>
                  <Input
                    type="time"
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Odometr
              </Label>
              <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                <Input
                  type="number"
                  placeholder="Please Enter"
                  className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                />
                <span className="text-sm w-full max-w-max">mi</span>
              </div>
              <p className="text-zinc-400 text-sm font-normal">
                {" "}
                Last updated 20,7922 mi (11 days ago)
              </p>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Gallons (US)
              </Label>
              <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                <Input
                  type="number"
                  placeholder="Please Enter"
                  className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                />
                <span className="text-sm w-full max-w-max">gal (US)</span>
              </div>
              <p className="text-zinc-400 text-sm font-normal">e.g. 5.299</p>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Price/Gallon (US)
              </Label>
              <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                <Input
                  type="number"
                  placeholder="Please Enter"
                  className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                />
                <span className="text-sm w-full max-w-max">$</span>
              </div>
              <p className="text-zinc-400 text-sm font-normal">e.g. 51.299</p>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Vendor Name
              </Label>
              <Select>
                <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="device1">Vendor Name 1</SelectItem>
                  <SelectItem value="device2">Vendor Name 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Reference
              </Label>
              <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                <Input
                  type="number"
                  placeholder="Please Enter"
                  className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                />
                <span className="text-sm w-full max-w-max">$</span>
              </div>
              <p className="text-zinc-400 text-sm font-normal">
                e.g. invoice number, transaction ID, etc.
              </p>
            </div>
            <div className="col-span-12 w-full space-y-1">
              <h6 className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Flags
              </h6>
              <p className="text-zinc-400 text-sm font-normal">
                Enable the options below to flag transactions for personal use,
                to ensure accurate metrics for partial fill-ups, or to reset
                usage after a missed entry.
                <button className="text-[#10B981] text-sm font-normal hover:underline ml-1">
                  Learn More
                </button>
              </p>
            </div>
            <div className="col-span-12 w-full space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="personal" />
                <label htmlFor="personal" className="text-neutral-50 text-sm ">
                  Personal
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fuel-up" />
                <label htmlFor="fuel-up" className="text-neutral-50 text-sm ">
                  Partial fuel-up
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="reset-usage" />
                <label
                  htmlFor="reset-usage"
                  className="text-neutral-50 text-sm "
                >
                  Reset usage
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Photo Upload */}
          <div className="bg-[#171717] p-4 rounded-lg text-white">
            <h3>Photos</h3>
            <hr className="my-5"></hr>
            <div
              className="px-6 py-4 bg-base-background border-dashed rounded-lg border bor border-tailwind-colors-neutral-700 justify-start items-end gap-[7px] cursor-pointer inline-flex bg-black w-full"
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
                 className="flex items-center justify-between bg-black p-2 rounded-md"
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
          <div className="bg-[#171717] p-4 rounded-lg text-white">
            <h3>Documents</h3>
            <hr className="my-5"></hr>
            <div
              className="px-6 py-4 bg-base-background border-dashed rounded-lg border bor border-tailwind-colors-neutral-700 justify-start items-end gap-[7px] cursor-pointer inline-flex bg-black w-full"
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
                    className="flex items-center justify-between bg-black p-2 rounded-md"
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
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <h3>Comments</h3>
          <hr className="my-5"></hr>
          <div className="col-span-12 space-y-1 flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Please add your comment (optional)"
              id="message"
              className="bg-black text-white border-zinc-800 h-[90px]"
            />
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
            Save Vehicle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
