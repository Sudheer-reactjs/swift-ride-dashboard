"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VehicleAssignmentPage() {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-6">
        <div>
      <Button 
        variant="outline" 
        className="flex items-center gap-2 border-0 p-0 bg-transparent hover:bg-transparent text-base-foreground text-sm font-normal leading-tight"
        onClick={() => router.back()}
      >
        <ChevronLeft size={16} className="text-[#A1A1AA]" />
        Vehicle Assignment
      </Button>
      </div>

      <h1 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">Add Vehicle Assignment</h1>
    </div>
  );
}
