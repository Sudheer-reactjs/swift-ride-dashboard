import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Financial = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup
        defaultValue={selectedOption}
        onValueChange={setSelectedOption}
        className="flex flex-row gap-4 md:gap-6 cursor-pointer"
      >
        {[
          { value: "lease", label: "Lease", description: "This vehicle is being leased" },
          { value: "loan", label: "Loan", description: "This vehicle is associated with a loan" },
          { value: "none", label: "None", description: "This vehicle is not being financed" },
        ].map((item) => (
          <label
            key={item.value}
            htmlFor={item.value}
            onClick={() => setSelectedOption(item.value)}
            className={`flex flex-col border rounded-lg p-4 w-40 text-left cursor-pointer transition-all ${
              selectedOption === item.value
                ? "border-green-500 bg-black/20" // Selected state
                : "border-gray-700 bg-black/10 hover:border-gray-500" // Default state
            }`}
          >
            <div className="flex items-center">
              <RadioGroupItem value={item.value} id={item.value} className="hidden" />
              <span className="text-white font-medium custom-cricle m-0 pl-6">{item.label}</span>
            </div>
            <p className="text-gray-400 text-sm mt-1 pl-6">{item.description}</p>
          </label>
        ))}
      </RadioGroup>

      {/* Conditional Rendering */}
      {selectedOption === "lease" && <div className="mt-4 p-4 border border-green-500 rounded-lg">Lease</div>}
      {selectedOption === "loan" && <div className="mt-4 p-4 border border-green-500 rounded-lg">Loan</div>}
    </div>
  );
};

export default Financial;
