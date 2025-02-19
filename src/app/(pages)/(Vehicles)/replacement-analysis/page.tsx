"use client";
import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import { TooltipProps } from "recharts";
interface DataPoint {
  year: number;
  fixedCosts: number;
  serviceCosts: number;
  fuelCosts: number;
  totalCosts: number;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: DataPoint;
  }>;
  label?: string;
}
const VehicleCostChart = () => {
  // Basic vehicle parameters
  const [estimatedLife, setEstimatedLife] = useState(96);
  const [annualUsage, setAnnualUsage] = useState(20000);
  const [fuelEfficiency, setFuelEfficiency] = useState(15);
  const [purchasePrice, setPurchasePrice] = useState(50000);
  const [disposalCost, setDisposalCost] = useState(1000);
  const [salvageValue, setSalvageValue] = useState(10); // percentage
  const [depreciationMethod, setDepreciationMethod] = useState("sum-of-years");

  // Service costs per year
  const [serviceCosts, setServiceCosts] = useState(Array(8).fill(1500));

  // Fuel costs per year
  const [fuelCosts, setFuelCosts] = useState(Array(8).fill(4));

  // Calculate depreciation based on method
  const calculateDepreciation = (year: number) => {
    const usefulLife = 8; // years
    const totalDepreciation =
      purchasePrice - purchasePrice * (salvageValue / 100);

    if (depreciationMethod === "double-declining") {
      const rate = 2 / usefulLife;
      return purchasePrice * Math.pow(1 - rate, year - 1) * rate;
    } else {
      // sum-of-years
      const sumOfYears = (usefulLife * (usefulLife + 1)) / 2;
      return totalDepreciation * ((usefulLife - year + 1) / sumOfYears);
    }
  };

  // Calculate total costs per mile for each year
  const calculateCostsPerMile = (): DataPoint[] => {
    return Array.from({ length: 8 }, (_, i) => {
      const year = i + 1;
      const depreciation = calculateDepreciation(year);
      const servicePerMile = serviceCosts[i] / annualUsage;
      const fuelPerMile =
        ((annualUsage / fuelEfficiency) * fuelCosts[i]) / annualUsage;

      return {
        year,
        fixedCosts: depreciation / annualUsage,
        serviceCosts: servicePerMile,
        fuelCosts: fuelPerMile,
        totalCosts: depreciation / annualUsage + servicePerMile + fuelPerMile,
      };
    });
  };

  const data = calculateCostsPerMile();

  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: number) => void
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setter(value);
  };

  const handleServiceCostChange = (year: number, value: number) => {
    const newCosts = [...serviceCosts];
    newCosts[year] = value;
    setServiceCosts(newCosts);
  };

  const handleFuelCostChange = (year: number, value: number) => {
    const newCosts = [...fuelCosts];
    newCosts[year] = value;
    setFuelCosts(newCosts);
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white p-2 rounded border border-zinc-800">
          <p className="text-sm">Year {label}</p>
          <p className="text-sm font-medium">
            ${Number(payload[0].value).toFixed(2)}/mi
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#A1A1AA] ">
              Vehicles
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#FAFAFA] font-light">
              Vehicle Replacement Analysis
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-neutral-50 font-sans text-[30px] font-bold leading-[36px] tracking-tight">
        Vehicle Replacement Analysis
      </h2>
      <div className="col-span-12 lg:col-span-4 flex flex-col bg-bgCard shadow-none border-0 p-4 rounded-lg">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
          >
            <XAxis
              dataKey="year"
              label={{ value: "Vehicle Age", position: "insideBottom", dy: 10 }}
            />
            <YAxis
              label={{
                value: "Annual Cost per Mile",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <RechartsTooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="totalCosts"
              stroke="#00bcd4"
              fill="#00bcd4"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 flex flex-col bg-bgCard shadow-none border-0 p-4 rounded-lg">
          <Card className="bg-transparent shadow-none border-0 p-0">
            <CardTitle className="text-base font-medium">
              Lifecycle Estimates
            </CardTitle>
            <hr className="border-zinc-800 my-6" />
            <CardContent className="p-0 space-y-5">
              <div className="space-y-2">
                <Label>Estimated VehicleLife</Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    type="number"
                    value={estimatedLife}
                    onChange={(e) => handleNumberInput(e, setEstimatedLife)}
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">months</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Estimated Annual Usage</Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    type="number"
                    value={annualUsage}
                    onChange={(e) => handleNumberInput(e, setAnnualUsage)}
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">miles</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Estimated Annual Usage</Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    type="number"
                    value={fuelEfficiency}
                    onChange={(e) => handleNumberInput(e, setFuelEfficiency)}
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">mpg (US)</span>
                </div>
              </div>
              <CardTitle className="!mt-8 text-[16px] font-medium ">
                Acquisition
              </CardTitle>
              <hr className="border-[#262626] !my-6" />
              <div className="space-y-2">
                <Label>Purchase Price</Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => handleNumberInput(e, setPurchasePrice)}
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">$</span>
                </div>
              </div>
              <CardTitle className="!mt-8 text-[16px] font-medium ">
                Disposal
              </CardTitle>
              <hr className="border-[#262626] !my-6" />
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  Estimated Disposal Cost
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <HelpCircle className="h-4 w-4 text-zinc-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Expected costs associated with disposal of the vehicle
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    type="number"
                    value={disposalCost}
                    onChange={(e) => handleNumberInput(e, setDisposalCost)}
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">$</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  Estimated Salvage Value
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <HelpCircle className="h-4 w-4 text-zinc-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Amount expected to be recuperated after retirement and
                          sale/disposal
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 pr-4">
                  <Input
                    type="number"
                    value={salvageValue}
                    onChange={(e) => handleNumberInput(e, setSalvageValue)}
                    className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                  />
                  <span className="text-sm w-full max-w-max">
                    % of purchase price
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <CardTitle className="!mt-8 !mb-6 text-[16px] font-medium ">
                  Method of Depreciation
                </CardTitle>
                <RadioGroup
                  value={depreciationMethod}
                  onValueChange={setDepreciationMethod}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="double-declining" id="r1" />
                    <Label htmlFor="r1">Double Declining</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sum-of-years" id="r2" />
                    <Label htmlFor="r2">Sum of Years</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6  bg-bgCard shadow-none rounded-xl p-4">
          <Card className="bg-transparent shadow-none border-0">
            <CardTitle className="text-base font-medium">
              Service Costs
            </CardTitle>
            <hr className="border-zinc-800 my-6" />
            <CardContent className="p-0 space-y-5">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="space-y-2">
                  <Label>Year {i + 1}</Label>
                  <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 px-3">
                    <span className="text-sm">$</span>
                    <Input
                      type="number"
                      value={serviceCosts[i]}
                      onChange={(e) =>
                        handleServiceCostChange(
                          i,
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-transparent shadow-none border-0">
            <CardTitle className="text-base font-medium">Fuel Costs</CardTitle>
            <hr className="border-zinc-800 my-6" />
            <CardContent className="p-0 space-y-5">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="space-y-2">
                  <Label>Year {i + 1}</Label>
                  <div className="flex items-center relative border border-zinc-800 rounded-lg bg-zinc-950 px-3">
                    <span className="text-sm">$</span>
                    <Input
                      type="number"
                      value={fuelCosts[i]}
                      onChange={(e) =>
                        handleFuelCostChange(i, parseFloat(e.target.value) || 0)
                      }
                      className="bg-transparent border-0 h-10 focus:ring-0 focus-visible:ring-0"
                    />
                    <span className="text-sm w-full max-w-max">/ gal (US)</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VehicleCostChart;
