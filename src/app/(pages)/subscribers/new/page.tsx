"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  ChevronLeft } from "lucide-react";
import React, { useRef, useState } from "react";
import { FileIcon } from "@/lib/svg";
import { useRouter } from "next/navigation";

const locations = [
  {
    id: "1",
    country: "USA",
    region: "California",
    state: "Los Angeles",
  },
  {
    id: "2",
    country: "Canada",
    region: "Ontario",
    state: "Toronto",
  },
];
const Page = () => {
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

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
        Subscribers
      </Button>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
          New Subscriber
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-10 border-0">
            Cancel
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-[#065F46] hover:bg-[#065F46] border-0"
          >
            Save Subscriber Entry
          </Button>
        </div>
      </div>
      {/* Add Expense Form */}
      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
          <h2 className="text-base font-medium">Basic Details</h2>
          <hr className="my-5" />
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                First Name
              </Label>
              <Input
                type="text"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Middle Name
              </Label>
              <Input
                type="text"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                Email
              </Label>
              <Input
                type="email"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">Group</Label>
              <Select onValueChange={(value) => setSelectedLocation(value)}>
                <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10 flex items-center justify-between px-3 focus:ring-0">
                  {selectedLocation ? (
                    <div className="flex items-center gap-2">
                      <span>{selectedLocation}</span>
                    </div>
                  ) : (
                    <SelectValue placeholder="Please Select" />
                  )}
                </SelectTrigger>
                <SelectContent>
                  {locations.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={`${item.country} / ${item.region} / ${item.state}`}
                    >
                      <div className="flex flex-col">
                        <span className="opacity-60 text-neutral-50 text-xs font-normal">
                          {item.country} / {item.region}
                        </span>
                        <span className="text-neutral-50 text-sm font-normal">
                          {item.state}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Profile Photo
              </Label>
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
          

          </div>
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-base font-medium">Contact Information</h2>
          <hr className="my-5" />
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Mobile Phone Number
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Address
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Address
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              City
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              State/Province/Region
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              ZIP/Postal Code
              </Label>
              <Input
                type="text"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              Country
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            </div>
        </div>
      </div>
      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-base font-medium">License Information</h2>
          <hr className="my-5" />
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              License Number
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              License Class
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              License State
              </Label>
              <Input
                type="tel"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800"
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100 flex items-center gap-2">
              License Photo
              </Label>

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
            Save Subscriber Entry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
