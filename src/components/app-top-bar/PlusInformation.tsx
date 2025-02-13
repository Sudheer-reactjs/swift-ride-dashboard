import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ContactIcon, EnteyCardIcon, FuelCardIcon, GrenePlusIcon, ImportIcon, IssueCardIcon, VehicleCarIcon, WorkOrderIcon } from "@/lib/svg";
import Link from "next/link"; // Import the Link component

const PlusInformation = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-0 bg-transparent hover:bg-transparent outline-none p-0 h-auto w-auto [&_svg]:size-10"
        >
          <GrenePlusIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuGroup >
          <DropdownMenuItem className="p-0">
            <Link
              className="flex gap-2 items-center w-full p-[8px] "
              href="/vehicle-list"
            >
              <VehicleCarIcon />
              Vehicle
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem  className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/Service">
              <EnteyCardIcon />
              Service Entry
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/issue">
              <FuelCardIcon />
              Fuel Entry
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/issue">
              <IssueCardIcon />
              Issue
            </Link>
          </DropdownMenuItem >
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/">
              <WorkOrderIcon />
              Work Order
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/chat">
              <ContactIcon />
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/Fuel History">
              <VehicleCarIcon />
              Meter Entry
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <Link  className="flex gap-2 items-center w-full p-[8px]" href="/">
              < ImportIcon/>
              Import Data
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PlusInformation;
