import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogiIcon,
  LogOutIcon,
  NotificationSettingsIcon,
  UseProfilIcon,
} from "@/lib/svg";
import Link from "next/link";

const User = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-0 bg-transparent hover:bg-transparent outline-none p-0 h-auto w-auto [&_svg]:size-10 focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuGroup>
          <div className="flex items-center p-[8px]">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-sm font-medium">Stephanie Sharkey</p>
              <p className="text-[12px] text-[#A1A1AA]">steph56@gmail.com</p>
            </div>
          </div>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px] " href="#">
              <UseProfilIcon />
              User Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="#">
              <NotificationSettingsIcon />
              Notification Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="#">
              <LogiIcon />
              Login & Password
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <Link className="flex gap-2 items-center w-full p-[8px]" href="/">
              <LogOutIcon />
              Log Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
