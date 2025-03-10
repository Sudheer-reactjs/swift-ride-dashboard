import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function MaintenanceCostSummaryTable() {
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [discountValue, setDiscountValue] = useState(0);
  const [taxType, setTaxType] = useState<"percentage" | "fixed">("percentage");
  const [taxValue, setTaxValue] = useState(0);

  const subtotal = 19.5;
  const labor = 19.5;
  const parts = 19.5;
  const totalBeforeDiscount = subtotal + labor + parts;

  const discountAmount =
    discountType === "percentage"
      ? (totalBeforeDiscount * discountValue) / 100
      : discountValue;

  const taxAmount =
    taxType === "percentage"
      ? (totalBeforeDiscount - discountAmount) * (taxValue / 100)
      : taxValue;

  const total = totalBeforeDiscount - discountAmount + taxAmount;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between gap-2 text-neutral-50 text-sm">
        <p>Subtotal:</p> <p> ${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-2 text-neutral-50 text-sm">
        <p>Labor:</p> <p> ${labor.toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-2 text-neutral-50 text-sm">
        <p>Parts:</p>  <p>  ${parts.toFixed(2)}</p>
      </div>

      <div className="flex justify-between gap-2 text-neutral-50 text-sm items-center">
        <p>Discount:</p>
        <div className="flex gap-1 items-center">
          <Select 
            onValueChange={(value) => setDiscountType(value as "percentage" | "fixed")} 
            defaultValue="percentage"
            value={discountType}
          >
            <SelectTrigger className="min-w-10 border-0 focus:ring-0 focus:outline-none text-center">
              <SelectValue>{discountType === "percentage" ? "%" : "$"}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="percentage">Percentage %</SelectItem>
              <SelectItem value="fixed">Fixed $</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            className="bg-zinc-950 w-14 pr-1 rounded-md border border-zinc-800"
            value={discountValue}
            onChange={(e) => setDiscountValue(Number(e.target.value))}
          />
          <span className="min-w-20 text-right">${discountAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Tax Section */}
      <div className="flex justify-between gap-2 text-neutral-50 text-sm items-center">
        <p>Tax:</p>
        <div className="flex gap-1 items-center ">
        <Select 
          onValueChange={(value) => setTaxType(value as "percentage" | "fixed")} 
          defaultValue="percentage"
          value={taxType}
        >
           <SelectTrigger className="min-w-10 border-0 focus:ring-0 focus:outline-none text-center">
            <SelectValue>{taxType === "percentage" ? "%" : "$"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="percentage">Percentage %</SelectItem>
            <SelectItem value="fixed">Fixed $</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          className="bg-zinc-950 w-14 pr-1 rounded-md border border-zinc-800"
          value={taxValue}
          onChange={(e) => setTaxValue(Number(e.target.value))}
        />
        <span className="min-w-20 text-right">${taxAmount.toFixed(2)}</span>
        </div>
      </div>

      <hr className="!my-6 border-neutral-700" />
      <div className="flex justify-between gap-2 text-neutral-50 text-base font-medium !m-0">
        <p>Total:</p> <p>${total.toFixed(2)}</p>
      </div>
      <hr className="!mt-6 border-neutral-700" />
    </div>
  );
}