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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { format } from "date-fns";
import { FileIcon } from "@/lib/svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("singleexpense");
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
        <ChevronLeft size={24} className="text-[#A1A1AA]" /> Expense History
      </Link>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
          New Expense Entry
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
        <div className="bg-[#171717] p-4 pb-0 rounded-lg text-white">
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
                Fuel Entry Date
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
            <div className="col-span-12 space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Vendor
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
            <div className="col-span-12 space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Amount
              </Label>
              <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                <Input
                  placeholder="Please Enter"
                  className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                />
                <span className="text-sm w-full max-w-max">$</span>
              </div>
            </div>
          </div>
          <div className="bg-[#171717] pt-4 rounded-lg text-white">
            <h2 className="text-lg font-semibold">Frequency</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 w-full space-y-1">
                <RadioGroup
                  defaultValue={selectedOption}
                  onValueChange={setSelectedOption}
                  className="grid grid-cols-12 gap-4 md:gap-6"
                >
                  {[
                    {
                      value: "singleexpense",
                      label: "Single Expense",
                      description: "A single entry that does not repeat",
                    },
                    {
                      value: "recurringexpense",
                      label: "Recurring Expense",
                      description: "Repeats on a monthly or annual basis",
                    },
                  ].map((item) => (
                    <label
                      key={item.value}
                      htmlFor={item.value}
                      onClick={() => setSelectedOption(item.value)}
                      className={`flex flex-col border rounded-lg  w-full text-left cursor-pointer transition-all col-span-12 md:col-span-5 ${
                        selectedOption === item.value
                          ? "border-0 bg-transparent"
                          : "border-0 bg-transparent"
                      }`}
                    >
                      <div className="flex items-center">
                        <RadioGroupItem
                          value={item.value}
                          id={item.value}
                          className="hidden"
                        />
                        <span className="text-white font-medium custom-cricle m-0 pl-6">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1 pl-6">
                        {item.description}
                      </p>
                    </label>
                  ))}
                </RadioGroup>
              </div>
              {selectedOption === "singleexpense" && (
                <>
                  <div className="col-span-12 w-full space-y-1 ">
                    <Label className="text-sm font-medium text-gray-100">
                      Date
                    </Label>
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
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
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
                  </div>
                  <div className="col-span-12 space-y-1 ">
                    <Label className="text-sm font-medium text-gray-100">
                      Notes
                    </Label>
                    <Textarea
                      placeholder="Please enter"
                      id="message"
                      className="bg-black text-white border-zinc-800 h-[90px]"
                    />
                  </div>
                  <div className="col-span-12 mx-[-16px] bg-[#09090b] py-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>
                  <div className="col-span-12 mx-[-16px] bg-[#09090b] mt-[-24px]">
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
                </>
              )}
              {selectedOption === "recurringexpense" && (
                <>
                  <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                    <Label className="text-sm font-medium text-gray-100">
                      Start Date
                    </Label>
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
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
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
                  </div>
                  <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                    <Label className="text-sm font-medium text-gray-100">
                      End Date
                    </Label>
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
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
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
                  </div>
                  <div className="col-span-12 space-y-1">
                    <Label className="text-sm font-medium text-gray-100">
                      Frequency
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

                  <div className="col-span-12 space-y-1 mb-6">
                    <Label className="text-sm font-medium text-gray-100">
                      Notes
                    </Label>
                    <Textarea
                      placeholder="Please enter"
                      id="message"
                      className="bg-black text-white border-zinc-800 h-[90px] "
                    />
                  </div>
                </>
              )}
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
            Save Vehicle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
