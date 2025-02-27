import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const Financial = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">In-Service</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Purchase Vendor
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
          <div className="col-span-12 lg:col-span-6 w-full space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Purchase Date
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
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Purchase Vendor
            </Label>
            <Input
              placeholder="$"
              className="bg-black text-white border-zinc-800 h-10"
            />
          </div>
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">
              Purchase Vendor
            </Label>
            <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
              <Input
                placeholder="Please Enter"
                className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
              />
              <span className="text-sm w-full max-w-max">mi</span>
            </div>
          </div>
          <div className="col-span-12 space-y-1">
            <Label className="text-sm font-medium text-gray-100">Notes</Label>
            <Textarea
              placeholder="Please enter"
              id="message"
              className="bg-black text-white border-zinc-800 h-[90px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#171717] p-4 rounded-lg text-white">
        <h2 className="text-lg font-semibold">Loan/Lease</h2>
        <hr className="my-5" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12  w-full space-y-1">
            <RadioGroup
              defaultValue={selectedOption}
              onValueChange={setSelectedOption}
              className="grid grid-cols-12 gap-4 md:gap-6"
            >
              {[
                {
                  value: "lease",
                  label: "Lease",
                  description: "This vehicle is being leased",
                },
                {
                  value: "loan",
                  label: "Loan",
                  description: "This vehicle is associated with a loan",
                },
                {
                  value: "none",
                  label: "None",
                  description: "This vehicle is not being financed",
                },
              ].map((item) => (
                <label
                  key={item.value}
                  htmlFor={item.value}
                  onClick={() => setSelectedOption(item.value)}
                  className={`flex flex-col border rounded-lg p-2 w-full text-left cursor-pointer transition-all col-span-12 md:col-span-4 ${
                    selectedOption === item.value
                      ? "border-green-500 bg-black/20" // Selected state
                      : "border-gray-700 bg-black/10 hover:border-gray-500" // Default state
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

          {/* Conditional Rendering */}
          {selectedOption === "lease" && (
            <>
              <div className="col-span-12  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Lender
                </Label>
                <Select>
                  <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lender1">Lender 1</SelectItem>
                    <SelectItem value="lender2">Lender 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Date of Lease
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
                <p className="text-sm mt-1 text-zinc-400">
                Day the lease agreement was signed
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Capitalized Cost
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                Total cost of vehicle including any taxes and fees
                </p>
              </div>
              <div className="col-span-12 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Down Payment
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                Amount of money due at signing or the trade-in amount from the last vehicle
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  First Payment Date
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
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Monthly Payment
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                  Total amount that will be paid each month including any taxes and fees
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Number of Payments
                </Label>
                <Input
                  placeholder="Please Enter"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                 Number of months for which the vehicle is leased (Does not include the down payment)
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Lease End Date
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
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Contract Mileage Cap
                </Label>
                <Input
                  placeholder="Please Enter"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                Number of miles this vehicle can travel before incurring additional charges
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Excess Mileage Charge
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                Amount charged for each mile over the mileage cap
                </p>
              </div>
              <div className="col-span-12  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Lease Number
                </Label>
                <Input
                  placeholder="Please Enter"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                Used to identify the lease in other systems
                </p>
              </div>
              <div className="col-span-12 space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Notes
                </Label>
                <Textarea
                  placeholder="Please enter"
                  id="message"
                  className="bg-black text-white border-zinc-800 h-[90px]"
                />
              </div>
              <div className="col-span-12 space-y-1">
                <label
                  htmlFor="terms"
                  className="flex items-start gap-3 cursor-pointer"
                >
                  <Checkbox id="terms" className="mt-1" />
                  <div>
                    <span className="text-white font-medium">
                      Generate Expenses
                    </span>
                    <p className="text-sm  text-zinc-400">
                      Automatically generate expense entries for payments for
                      this loan/lease.
                    </p>
                  </div>
                </label>
              </div>
            </>
          )}
          {selectedOption === "loan" && (
            <>
             <div className="col-span-12  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Lender
                </Label>
                <Select>
                  <SelectTrigger className="bg-black text-white border-zinc-800 h-10">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lender1">Lender 1</SelectItem>
                    <SelectItem value="lender2">Lender 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Date of Loan
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
                <p className="text-sm mt-1 text-zinc-400">
                  Date the loan agreement was signed
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Amount of Loan
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                  Total principal amount at the start of the loan
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Annual Percentage Rate (APR)
                </Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    placeholder="$"
                    className="bg-black border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">%</span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Down Payment
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                  Total principal amount at the start of the loan
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  First Payment Date
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
                <p className="text-sm mt-1 text-zinc-400">
                  Date the loan agreement was signed
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Monthly Payment
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                  Total amount that will be paid each month including any taxes
                  and fees
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Number of Payments
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                  Number of payments until the loan is paid off (Does not
                  include the down payment)
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Loan End Date
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
              </div>
              <div className="col-span-12  w-full space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                Account Number
                </Label>
                <Input
                  placeholder="$"
                  className="bg-black text-white border-zinc-800 h-10"
                />
                <p className="text-sm mt-1 text-zinc-400">
                  Used to identify the loan with the lender
                </p>
              </div>
              <div className="col-span-12 space-y-1">
                <Label className="text-sm font-medium text-gray-100">
                  Notes
                </Label>
                <Textarea
                  placeholder="Please enter"
                  id="message"
                  className="bg-black text-white border-zinc-800 h-[90px]"
                />
              </div>
              <div className="col-span-12 space-y-1">
                <label
                  htmlFor="terms"
                  className="flex items-start gap-3 cursor-pointer"
                >
                  <Checkbox id="terms" className="mt-1" />
                  <div>
                    <span className="text-white font-medium">
                      Generate Expenses
                    </span>
                    <p className="text-sm  text-zinc-400">
                      Automatically generate expense entries for payments for
                      this loan/lease.
                    </p>
                  </div>
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Financial;
