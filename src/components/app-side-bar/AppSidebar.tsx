"use client";

import * as React from "react";
import LogoCard from "@/components/app-side-bar/LogoCard";
import { NavMain } from "@/components/app-side-bar/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChatIcon, DashboardIcon, DocumentsIcon, FuelHistoryIcon, HelpSupportIcon, InspectionsIcon, IssuesIcon, PartsIcon, RemindersIcon, ReportsIcon, ServiceIcon, SettingsIcon, SubscribersIcon, VehiclesIcon } from "@/lib/svg";

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
      url: "#",
      icon: InspectionsIcon,
      items: [
        { title: "Inspection History", url: "/inspection-history" },
        { title: "Items Failure", url: "/items-failure" },
        { title: "Schedules", url: "/schedules" },
        { title: "Forms", url: "/inspection-forms" },
      ],
    },
    {
      title: "Issues",
      url: "#",
      icon: IssuesIcon,
      items: [
        { title: "Issues", url: "/issues" },
      ],
    },
    {
      title: "Reminders",
      url: "/reminders",
      icon: RemindersIcon,
    },
    {
      title: "Maintenance",
      url: "#",
      icon: ServiceIcon,
      items: [
        { title: "Maintenance History", url: "/maintenance-history" },
        { title: "Work Orders", url: "/work-orders" },
        { title: "Maintenance Tasks", url: "/maintenance-tasks" },
        { title: "Maintenance Programs", url: "/maintenance-programs" },
      ],
    },
    {
      title: "Subscribers",
      url: "/subscribers",
      icon: SubscribersIcon,
    },
    {
      title: "Fuel History",
      url: "#",
      icon: FuelHistoryIcon,
      items: [
        { title: "Fuel History", url: "/fuel-history" },
      ],
    },
    {
      title: "Parts",
      url: "/parts",
      icon: PartsIcon,
    },
    {
      title: "Documents",
      url: "/documents",
      icon: DocumentsIcon,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ReportsIcon,
    },
    {
      title: "Help & Support",
      url: "/help-support",
      icon: HelpSupportIcon,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: ChatIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
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
