import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Option {
  label: string;
  value: string;
}

interface CustomRadioGroupProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function CustomRadioGroup({ options, defaultValue, onChange }: CustomRadioGroupProps) {
  return (
    <RadioGroup defaultValue={defaultValue} onValueChange={onChange} className="flex ">
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2 w-full">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
