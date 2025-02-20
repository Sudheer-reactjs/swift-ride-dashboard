import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

const Setting = () => {
   const [selectedOption, setSelectedOption] = useState("Miles");
   const [fuelUnit, setFuelUnit] = useState("Gallons (US)");
    const [measurementUnit, setMeasurementUnit] = useState("Imperial");
  return (
    <div className="flex w-full flex-col gap-6  size-span">
      <Card className="bg-[#171717] p-4 rounded-lg border-none text-white">
        <h2 className="text-lg font-medium mb-4">Settings</h2>
        <hr className="my-5" />
        
        {/* Primary Meter */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Primary Meter</h3>
          <p className="text-gray-400 text-sm mb-2">Select how you measure utilization for this vehicle.</p>
        
                  <RadioGroup
                    defaultValue={selectedOption}
                    onValueChange={setSelectedOption}
                    className="flex flex-col gap-4 md:gap-4"
                  >
                    {[
                      {
                        value: "Miles",
                        label: "Miles",
                       
                      },
                      {
                        value: "Kilometers",
                        label : "Kilometers",
                      },
                      {
                        value: "Hours",
                        label : "Hours",                       
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

                      </label>
                    ))}
                  </RadioGroup>
                </div>
        

        {/* Current Reading */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Current Reading</h3>
          <Input placeholder="Please Enter" className="bg-[#09090B] h-10 text-white" />
        </div>

        {/* Average Usage per Day */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Average Usage per Day</h3>
          <Input placeholder="" className="bg-[#09090B] h-10 text-white" />
          <p className="text-gray-400 text-sm mb-2">
          Average Usage per Day is used to forecast Service Reminders. Normally, it is automatically calculated based on the Vehicle’s Meter Entries. If the Vehicle has few Meter Entries, you can override the automatic calculation to accurately forecast Service Reminders. <Link href={'#'} className="text-[#047857]"> Learn More</Link>
          </p>
          <div className="flex items-center mb-2">
          <Checkbox id="auto-calculate" defaultChecked />
          <label htmlFor="auto-calculate" className="ml-2">Automatically calculate</label>
          </div>
          <div className="flex items-center">
          <Checkbox id="auto-calculate"  />
          <label htmlFor="auto-calculate" className="ml-2">Secondary Meter</label>
          </div>
         
        </div>

        {/* Fuel Unit */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Fuel Unit</h3>
          <p className="text-gray-400 text-sm mb-2">Sets the volume units used when entering fuel entries for this vehicle.</p>
          <RadioGroup
                    defaultValue={fuelUnit}
                    onValueChange={setFuelUnit}
                    className="flex flex-col gap-4 md:gap-4"
                  >
                    {[
                      {
                        value: "Gallons (US)",
                        label: "Gallons (US)",
                       
                      },
                      {
                        value: "Gallons (UK)",
                        label : "Gallons (UK)",
                      },
                      {
                        value: "Liters",
                        label : "Liters",                       
                      },
                    ].map((item) => (
                      <label
                        key={item.value}
                        htmlFor={item.value}
                        onClick={() => setFuelUnit(item.value)}
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

                      </label>
                    ))}
                  </RadioGroup>
        </div>

        {/* Measurement Units */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Measurement Units</h3>
          <p className="text-gray-400 text-sm mb-2">Used for displaying the units on certain attributes like length, width, weight, etc.</p>
          <RadioGroup
                    defaultValue={measurementUnit}
                    onValueChange={setMeasurementUnit}
                    className="flex flex-col gap-4 md:gap-4"
                  >
                    {[
                      {
                        value: "Imperial",
                        label: "Imperial (inches, pounds, gallons, miles)",
                       
                      },
                      {
                        value: "Metric",
                        label : "Metric (centimeters, kilograms, liters, kilometers)",
                      },
                      
                    ].map((item) => (
                      <label
                        key={item.value}
                        htmlFor={item.value}
                        onClick={() => setMeasurementUnit(item.value)}
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

                      </label>
                    ))}
                  </RadioGroup>
        </div>

      </Card>
    </div>
  )
}
export default Setting;
