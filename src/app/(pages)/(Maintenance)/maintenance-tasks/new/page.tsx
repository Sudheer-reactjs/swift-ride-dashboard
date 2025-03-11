"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Search, Check, CopyIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFleetioRecommendations, setShowFleetioRecommendations] =
    useState(false); // New state

  const items = [
    "Oil Change",
    "Tire Rotation",
    "Brake Inspection",
    "Battery Check",
    "Engine Tune-Up",
  ];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

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
            onClick={() => setShowFleetioRecommendations(true)}
          >
            Continue
          </Button>
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white flex flex-col gap-4 md:gap-6">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch text-center justify-center text-neutral-50 text-xs font-normal font-['Inter'] leading-none">
                1
              </div>
            </div>
            <h2 className="text-base font-medium">Details</h2>
          </div>

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

            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Description
              </Label>
              <Textarea
                placeholder="Add notes or additional details"
                id="message"
                className="bg-zinc-950 text-white border-zinc-800 h-48"
              />
            </div>

            <div className="col-span-12 w-full space-y-1">
              <Label className="text-sm font-medium text-gray-100">
                Template
              </Label>
              <div className="relative w-full">
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-start bg-zinc-950 border-zinc-800 h-10 text-zinc-400 text-sm font-normal hover:bg-zinc-950 hover:text-zinc-400 "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Search className=" h-4 w-4 shrink-0 opacity-50" />
                  {selectedItems.length > 0
                    ? `${selectedItems.length} tasks selected`
                    : "Search..."}
                </Button>
                {isOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-zinc-950 rounded-md border border-zinc-800 shadow-lg">
                    <div className="p-2">
                      <Input
                        type="text"
                        placeholder="Search tasks..."
                        className="bg-zinc-900 text-white border-zinc-800 h-9 mb-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="max-h-60 overflow-y-auto py-1">
                        {filteredItems.length > 0 ? (
                          filteredItems.map((item) => (
                            <div
                              key={item}
                              className="flex items-center space-x-2 p-2 hover:bg-zinc-800 rounded cursor-pointer"
                              onClick={() => toggleSelection(item)}
                            >
                              <span className="text-white text-sm">{item}</span>
                              {selectedItems.includes(item) && (
                                <Check className="ml-auto h-4 w-4 text-emerald-500" />
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="p-2 text-center text-zinc-400 text-sm">
                            No tasks found
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-2">
                {selectedItems.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center bg-zinc-800 px-3 py-1 rounded-full text-xs"
                      >
                        {item}
                        <Button
                          variant="ghost"
                          onClick={() => toggleSelection(item)}
                          className="h-4 w-4 p-0 ml-2 text-zinc-400 hover:text-white hover:bg-transparent"
                        >
                          ✕
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-zinc-400 text-sm font-normal">
                Only Maintenance Tasks without Subtasks can be added.
              </p>
            </div>

            <div className="flex flex-row justify-end col-span-12 w-full gap-2">
              <Button
                variant="outline"
                className="border-0 h-10 text-xs md:text-sm bg-transparent"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button
                className="bg-emerald-800 text-white hover:bg-emerald-700 h-10 text-xs md:text-sm"
                disabled={!name.trim()}
                onClick={() => setShowFleetioRecommendations(true)}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white flex flex-col gap-4 md:gap-6">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch text-center justify-center text-neutral-50 text-xs font-normal font-['Inter'] leading-none">
                2
              </div>
            </div>
            <h2 className="text-base font-medium">Fleetio Recommendations</h2>
          </div>
          {showFleetioRecommendations && (
            <div className="px-7">
              <Card className="bg-zinc-950 border-0 border-t-2 border-zinc-800  text-white rounded-md ">
                <CardHeader className="p-4 pb-1">
                  <CardTitle className="text-neutral-50 text-xs font-medium flex flex-row gap-2">
                    <CopyIcon size={16} /> No Service Task Recommendation for
                    &quot;name&quot;
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-4 mt-2 text-neutral-50 text-xs">
                  <p>
                    Based on the unique name you&apos;ve given to your custom
                    Service Task, there are currently no Standard Service Task
                    recommendations. Your Fleetio account comes with a standard
                    list of Service Tasks that cover the most common maintenance
                    needs. Each comes preset with categorization so you&apos;ll
                    have better insights out of the box.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <div className="flex max-w-3xl w-full m-auto flex-col gap-6 size-span">
        <div className="bg-[#171717] p-4 rounded-lg text-white flex flex-col gap-4 md:gap-6">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-emerald-600 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch text-center justify-center text-neutral-50 text-xs font-normal font-['Inter'] leading-none">
                3
              </div>
            </div>
            <h2 className="text-base font-medium">
              Maintenance Categorization
            </h2>
          </div>
          {showFleetioRecommendations && (
            <div className="px-7">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 w-full space-y-1">
                  <Label className="text-sm font-medium text-gray-100">
                    Category Code
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ventilating">
                        1 Air Conditioning, Heating & Ventilating System
                      </SelectItem>
                      <SelectItem value="dhassis">2 Chassis</SelectItem>
                      <SelectItem value="electrical">3 Electrical</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-zinc-400 text-sm font-normal">
                    Category Code: a one-digit number that identifies the
                    category involved in the repair (chassis, for example).
                  </p>
                </div>
                <div className="col-span-12 w-full space-y-1">
                  <Label className="text-sm font-medium text-gray-100">
                    System Code
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instrumentation">
                        1 Cab, Climate Control, Instrumentation, & Aerodynamic
                        Devices
                      </SelectItem>
                      <SelectItem value="metal">2 Cab & Sheet Metal</SelectItem>
                      <SelectItem value="instruments">
                        3 Instruments, Gauges, Warning & Shutdown Devices, &
                        Meters
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-zinc-400 text-sm font-normal">
                    Code Key 31: System Level Codes -- a three-digit number that
                    identifies the system involved in the repair (brakes, for
                    example).
                  </p>
                </div>
                <div className="col-span-12 w-full space-y-1">
                  <Label className="text-sm font-medium text-gray-100">
                    Assembly Code
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instrumentation">
                        1 Cab, Climate Control, Instrumentation, & Aerodynamic
                        Devices
                      </SelectItem>
                      <SelectItem value="metal">2 Cab & Sheet Metal</SelectItem>
                      <SelectItem value="instruments">
                        3 Instruments, Gauges, Warning & Shutdown Devices, &
                        Meters
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-zinc-400 text-sm font-normal">
                    Code Key 32: Assembly Level Codes -- used to further define
                    the system (front brakes, for example).
                  </p>
                </div>
                <div className="col-span-12 w-full space-y-1">
                  <Label className="text-sm font-medium text-gray-100">
                    Reason for Repair Code
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-zinc-950 text-zinc-400 border-zinc-800 h-10">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instrumentation">
                        1 Cab, Climate Control, Instrumentation, & Aerodynamic
                        Devices
                      </SelectItem>
                      <SelectItem value="metal">2 Cab & Sheet Metal</SelectItem>
                      <SelectItem value="instruments">
                        3 Instruments, Gauges, Warning & Shutdown Devices, &
                        Meters
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-zinc-400 text-sm font-normal">
                    Code Key 14: Divided into the subcategories of maintenance,
                    management decision and outside influence, Reason for Repair
                    codes indicate why the asset has been sent to the shop
                    (breakdown, for example).
                  </p>
                </div>
              </div>
            </div>
          )}
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
