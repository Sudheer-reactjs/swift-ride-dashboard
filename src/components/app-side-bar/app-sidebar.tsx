"use client";

import * as React from "react";
import LogoCard from "@/components/app-side-bar/logo-card";
import { NavMain } from "@/components/app-side-bar/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardIcon, VehiclesIcon } from "@/lib/svg";

// Sample data for the sidebar menu
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: DashboardIcon,
    },
    {
      title: "Vehicles",
      url: "#",
      icon: VehiclesIcon,
      items: [
        { title: "Vehicle List", url: "/vehicle-list" },
        { title: "Vehicle Assignments", url: "/vehicle-assignments" },
        { title: "Meter History", url: "/meter-history" },
        { title: "Expense History", url: "/expense-history" },
        { title: "Replacement Analysis", url: "/replacement-analysis" },
        { title: "Telematics Devices", url: "/telematics-devices" },
      ],
    },
    {
      title: "Inspections",
      url: "/inspections",
      icon: DashboardIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoCard />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
