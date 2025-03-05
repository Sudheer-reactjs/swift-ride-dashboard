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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MessageCircle, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showNotes, setShowNotes] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById(
      "file-upload"
    ) as HTMLInputElement;
    fileInput.click();
  };
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
          </div>
        </div>
      </div>

      <div className="flex w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <h2 className="col-span-12 md:col-span-6 text-base font-medium">
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
                      <p className="text-zinc-400 text-sm font-normal">
                        Lasr Updated: 20,871 mi (11 days ago)
                      </p>
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
                </div>

                <div className="col-span-12 w-full space-y-1">
                  <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                    Meter Entry Photo Verification
                  </Label>

                  <div className="relative">
                    <Input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button
                      variant="default"
                      className="bg-emerald-700 hover:bg-emerald-700 text-white h-10"
                      onClick={triggerFileInput}
                    >
                      Pick File
                    </Button>

                    <p className="text-neutral-500 text-xs mt-2 italic">
                      {selectedFile ? selectedFile.name : "No file selected"}
                    </p>
                  </div>
                </div>
                <div className="col-span-12 w-full space-y-1">
                  <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-0 bg-transparent hover:bg-transparent outline-none p-0 h-auto w-auto [&_svg]:size-10"
                      >
                        <Plus className="!w-4 !h-4 text-white" />
                        <span className="text-neutral-50 text-sm">
                          Add Remark
                        </span>
                        <ChevronDown className="!w-4 !h-4 text-white" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mr-4">
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          className="p-3 cursor-pointer"
                          onClick={() => setShowNotes(!showNotes)}
                        >
                          Add Comment{" "}
                          <MessageCircle className="!w-4 !h-4 text-white" />
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </div>

                  {showNotes && (
                    <div className="col-span-12 space-y-1 pt-4">
                      <Label className="text-sm font-medium text-gray-100">
                        Notes
                      </Label>
                      <Textarea
                        placeholder="Please enter"
                        id="message"
                        className="bg-black text-white border-zinc-800 h-[90px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
