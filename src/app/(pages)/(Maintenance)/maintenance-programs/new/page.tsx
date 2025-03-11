"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
    useState(false); // New state

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Button
        variant="ghost"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal max-w-max hover:bg-transparent px-0"
        onClick={() => router.back()}
      >
        <ChevronLeft size={24} className="text-[#A1A1AA]" />
        Maintenance Programs
      </Button>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
        New Maintenance Program
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-10 border-0"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            className="h-10 bg-[#065F46] hover:bg-[#065F46] border-0"
          >
           Save Maintenance Program
          </Button>
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white flex flex-col gap-4 md:gap-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">Name</Label>
              <Input
                type="text"
                placeholder="Please Enter"
                className="bg-zinc-950 text-white border-zinc-800 h-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-zinc-400 text-sm font-normal">
                A brief title for your unique task...
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col-reverse max-w-3xl m-auto w-full md:flex-row justify-center md:justify-between">
        <Button
          variant="outline"
          className="border-0 h-10 text-xs md:text-sm"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <div className="space-x-2 m:dspace-x-4 flex justify-center ">
          <Button className="bg-emerald-800 text-white hover:bg-emerald-700 h-10 text-xs md:text-sm">
          Save Maintenance Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
