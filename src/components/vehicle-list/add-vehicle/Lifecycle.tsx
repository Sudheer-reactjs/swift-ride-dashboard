import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const Lifecycle = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">In-Service</h2>
        <hr className="my-5" />
        <div className="flex-col justify-start items-start gap-4 md:gap-6 inline-flex w-full">
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              In-Service Odometer
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
            <p className="text-zinc-400 text-sm font-normal">  Date vehicle entered active fleet service</p>
          </div>
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
            In-Service Odometer
            </Label>
            <Input
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-zinc-400 text-sm font-normal">Odometer reading on in-service date</p>
          </div>
        </div>
      </div>

      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Classification</h2>
        <hr className="my-5" />
        <div className="flex-col justify-start items-start gap-4 md:gap-6 inline-flex w-full">
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
            Estimated Service Life in Months
            </Label>
            <Input
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-zinc-400 text-sm font-normal">Number of months vehicle is expected to be in active fleet service</p>
          </div>
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
            Estimated Service Life in Meter
            </Label>
            <Input
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-zinc-400 text-sm font-normal">Primary meter value vehicle is expected to use/run before retiring from fleet service</p>
          </div>
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
            Estimated Resale Value
            </Label>
            <Input
              placeholder="$"
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-zinc-400 text-sm font-normal">Amount expected to be recuperated after retirement and sale/disposal (less any associated costs)</p>
          </div>
        </div>
      </div> 

      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Out-of-Service</h2>
        <hr className="my-5" />
        <div className="flex-col justify-start items-start gap-4 md:gap-6 inline-flex w-full">
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
            Out-of-Service
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
            <p className="text-zinc-400 text-sm font-normal"> Date vehicle was retired from fleet service</p>
          </div>
          <div className="w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
            Out-of-Service Odometer
            </Label>
            <Input
              placeholder="Please Enter"
              className="bg-black text-white border-zinc-800 h-10"
            />
            <p className="text-zinc-400 text-sm font-normal">Final odometer reading on out-of-service date</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Lifecycle;
