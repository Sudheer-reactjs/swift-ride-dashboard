import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Maintenance = () => {
  const [selectedOption, setSelectedOption] = useState("double-declining");

  return (
    <div className="bg-[#171717] p-4 rounded-lg text-white">
      <h2 className="text-lg font-semibold">Maintenance Schedule</h2>
      <hr className="my-5" />
      <div className="flex-col justify-start items-start gap-3 inline-flex mb-6">
        <h3 className="text-neutral-50 text-base font-medium leading-none">
          Choose a Service Program
        </h3>
        <p className="text-neutral-400 text-sm font-normal leading-[14px]">
          Service Programs automatically manage Service Reminders for Vehicles
          that share common preventative maintenance needs.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <RadioGroup
          defaultValue={selectedOption}
          onValueChange={setSelectedOption}
          className="flex flex-col gap-4 md:gap-8"
        >
          {[
            {
              value: "None",
              label: "None",
              description: "No Service Reminders will be created",
            },
            {
              value: "sum-of-years",
              label: "Choose an existing Service Program",
              description: "",
            },
          ].map((item) => (
            <label
              key={item.value}
              htmlFor={item.value}
              onClick={() => setSelectedOption(item.value)}
              className="flex flex-col text-left cursor-pointer transition-all "
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

        {/* Show select dropdown only when 'Choose an existing Service Program' is selected */}
        {selectedOption === "sum-of-years" && (
          <div className="w-full max-w-[314px]">
            <select
              id="service-program"
              className="h-10 w-full px-3 py-2 bg-zinc-950 rounded-md border border-zinc-800 justify-between items-center inline-flex overflow-hidden"
            >
              <option value="program1">Please Select</option>
              <option value="program2">Service Program 1</option>
              <option value="program3">Service Program 2</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Maintenance;
