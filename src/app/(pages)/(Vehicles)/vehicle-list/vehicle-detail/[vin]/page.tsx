"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Calendar,
  ChevronDown,
  ChevronLeft,
  CircleGauge,
  CreditCard,
  FileSpreadsheet,
  Fuel,
  GitBranch,
  MoreHorizontal,
  Pencil,
  Plus,
  TextSearch,
  TriangleAlert,
  UserPlus,
  Wrench,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Overview from "@/components/vehicle-list/vehicle-detail/overview";
import Specs from "@/components/vehicle-list/vehicle-detail/specs";
import ServiceHistory from "@/components/vehicle-list/vehicle-detail/ServiceHistory";
import InspectionHistory from "@/components/vehicle-list/vehicle-detail/InspectionHistory";
import WorkOrders from "@/components/vehicle-list/vehicle-detail/WorkOrders";
import ServiceReminders from "@/components/vehicle-list/vehicle-detail/ServiceReminders";
import SensorDataSnapshots from "@/components/vehicle-list/vehicle-detail/SensorDataSnapshots";
import FinancialDetail from "@/components/vehicle-list/vehicle-detail/FinancialDetail";
import { useParams } from "next/navigation";
import RenewalReminder from "@/components/vehicle-list/vehicle-detail/RenewalReminder";
import Issues from "@/components/vehicle-list/vehicle-detail/Issues";
import MeterHistory from "@/components/vehicle-list/vehicle-detail/MeterHistory";
import FuelHistory from "@/components/vehicle-list/vehicle-detail/FuelHistory";
import AssignmentHistory from "@/components/vehicle-list/vehicle-detail/AssignmentHistory";
import ExpenseHistory from "@/components/vehicle-list/vehicle-detail/ExpenseHistory";
import Recalls from "@/components/vehicle-list/vehicle-detail/Recalls";
import Faults from "@/components/vehicle-list/vehicle-detail/Faults";
import LocationHistory from "@/components/vehicle-list/vehicle-detail/LocationHistory";
import PartsHistory from "@/components/vehicle-list/vehicle-detail/PartsHistory";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import InspectionPopup from "@/components/inspection/InspectionPopup";

const allTabs = [
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specs" },
  { id: "financial", label: "Financial" },
  { id: "sensor-data", label: "Sensor Data Snapshots" },
  { id: "service-history", label: "Service History" },
  { id: "inspection-history", label: "Inspection History" },
  { id: "work-orders", label: "Work Orders" },
  { id: "service-reminders", label: "Service Reminders" },
  { id: "renewal-reminders", label: "Renewal Reminders" },
  { id: "issues", label: "Issues" },
  { id: "meter-history", label: "Meter History" },
  { id: "fuel-history", label: "Fuel History" },
  { id: "assignment-history", label: "Assignment History" },
  { id: "expense-history", label: "Expense History" },
  { id: "recalls", label: "Recalls" },
  { id: "faults", label: "Faults" },
  { id: "location-history", label: "Location History" },
  { id: "parts-history", label: "Parts History" },
];

const VehicleDetail = () => {
  const router = useRouter();
  // const [activeTab, setActiveTab] = useState("overview");
  const [submissionOpen, setSubmissionOpen] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const { vin } = useParams();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  console.log(vin);

  const [activeTab, setActiveTab] = useState(allTabs[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const [visibleTabs, setVisibleTabs] = useState<
    { id: string; label: string }[]
  >([]);
  const [moreTabs, setMoreTabs] = useState<{ id: string; label: string }[]>([]);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMoreDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateTabs = () => {
    const containerWidth = window.innerWidth; // Get the screen width
    const mobileBreakpoint = 768; // Define a breakpoint for mobile
    const tabWidth = containerWidth < mobileBreakpoint ? 120 : 140; // Adjust width based on screen size

    let totalWidth = 0;
    const tempVisibleTabs: { id: string; label: string }[] = [];
    const tempMoreTabs: { id: string; label: string }[] = [];

    allTabs.forEach((tab) => {
      totalWidth += tabWidth;

      if (totalWidth < containerWidth - 0) {
        tempVisibleTabs.push(tab);
      } else {
        tempMoreTabs.push(tab);
      }
    });

    setVisibleTabs(tempVisibleTabs);
    setMoreTabs(tempMoreTabs);
  };

  useEffect(() => {
    updateTabs();
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, []);

  return (
    <div className="flex w-full flex-col gap-6 size-span">
      <Link
        href="/vehicle-list"
        className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal"
      >
        <ChevronLeft className="text-[#A1A1AA]" /> Vehicles
      </Link>
      <div className="flex justify-between items-center flex-wrap gap-4 ">
        <div className="flex items-center justify-between  gap-4 ">
          <Image
            src="/images/profile.png"
            alt="Vehicle"
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-lg font-semibold">
                1100 [2018 Toyota Prius]
              </h2>
              <p className="text-neutral-50 text-xs ">
                Car • 2018 Toyota Prius • JTDKBRFU9J3059307 • 6TJR244
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 mt-2 text-neutral-50 text-xs font-normal flex-wrap">
              <span className="">20,811 mi</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full" />
                Active
              </div>
              <div className="flex items-center gap-2">
                <span className="">Management</span>{" "}
                <GitBranch className="w-3 h-3" />
              </div>
              <Link
                href={"/fdsf"}
                className="text-emerald-500 text-xs font-normal underline leading-3"
              >
                Jacob Silva
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mx-3 items-center flex-wrap">
          <Button variant="outline" className="h-10">
            <Bell />
            Watch
          </Button>
          <Button variant="outline" className="h-10">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <Button className="h-10" variant="outline">
            <Pencil className="w-4 h-4" /> Edit
          </Button>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                className="bg-[#047857] hover:bg-[#047857] min-h-10 text-white flex items-center gap-1 focus:none outline-none border-0 shadow-none"
              >
                <Plus size={16} />
                <span>Add</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#09090B] border-[#27272A] text-white w-56 mr-11 mt-1">
              <DropdownMenuItem
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
                onClick={() => router.push("/vehicle-list/vehicle-assignment")}
              >
                <UserPlus size={16} className="text-white" />
                <span>Add Vehicle Assignment</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
                onClick={() => router.push("/fuel-history/new")}
              >
                <Fuel size={16} className="text-white" />
                <span>Add Fuel Entry</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
                onClick={() => router.push("/expense-history/new")}
              >
                <CreditCard size={16} className="text-white" />
                <span>Add Expense Entry</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
                onClick={() => router.push("/maintenance-history/new")}
              >
                <Wrench size={16} className="text-white" />
                <span>Add Service Entry</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
                onClick={() => router.push("/issues/new")}
              >
                <TriangleAlert size={16} className="text-white" />
                <span>Add Issue</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
                onClick={() => setSubmissionOpen(true)}
              >
                <TextSearch size={16} className="text-white" />
                <span>Add Inspection Submission</span>
              </DropdownMenuItem>
              

              <DropdownMenuItem className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800"
              onClick={() => router.push("/work-orders/new")}>
                <FileSpreadsheet size={16} className="text-white" />
                <span>Add Work Order</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800">
                <Bell size={16} className="text-white" />
                <span>Add Service Reminder</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800">
                <Calendar size={16} className="text-white" />
                <span>Add Vehicle Renewal Reminder</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 py-2 cursor-pointer hover:bg-zinc-800 focus:bg-zinc-800">
                <CircleGauge size={16} className="text-white" />
                <span>Add Meter Entry</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="w-full  border-b border-[#262626]" ref={containerRef}>
        <div className="flex items-center">
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-2.5 py-2 transition-colors text-neutral-300 text-xs font-medium",
                "border-b-2 border-transparent hover:text-white",
                tab.id === activeTab
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "border-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}

          {moreTabs.length > 0 && (
            <div className="relative">
              <button
                ref={moreButtonRef}
                onClick={() => setShowMoreDropdown((prev) => !prev)}
                className={cn(
                  "px-2.5 py-2 flex items-center gap-1 text-xs font-medium ",
                  "text-neutral-300 border-b-2 border-transparent hover:text-white",
                  showMoreDropdown
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "border-transparent"
                )}
              >
                More <ChevronDown size={16} />
              </button>

              {showMoreDropdown && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-[#0A0A0A] border border-[#262626] rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                  {moreTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setShowMoreDropdown(false);
                      }}
                      className={cn(
                        "block w-full text-left px-4 py-2 text-xs",
                        "hover:bg-[#1A1A1A] transition-colors duration-150",
                        tab.id === activeTab
                          ? "text-emerald-500"
                          : "text-neutral-50"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full">
        {activeTab === "overview" && <Overview />}
        {activeTab === "specs" && <Specs />}
        {activeTab === "financial" && <FinancialDetail />}
        {activeTab === "sensor-data" && <SensorDataSnapshots />}
        {activeTab === "service-history" && <ServiceHistory />}
        {activeTab === "inspection-history" && <InspectionHistory />}
        {activeTab === "work-orders" && <WorkOrders />}
        {activeTab === "service-reminders" && <ServiceReminders />}
        {activeTab === "renewal-reminders" && <RenewalReminder />}
        {activeTab === "issues" && <Issues />}
        {activeTab === "meter-history" && <MeterHistory />}
        {activeTab === "fuel-history" && <FuelHistory />}
        {activeTab === "assignment-history" && <AssignmentHistory />}
        {activeTab === "expense-history" && <ExpenseHistory />}
        {activeTab === "recalls" && <Recalls />}
        {activeTab === "faults" && <Faults />}
        {activeTab === "location-history" && <LocationHistory />}
        {activeTab === "parts-history" && <PartsHistory />}
      </div>

      <InspectionPopup open={submissionOpen} setOpen={setSubmissionOpen} />
    </div>
  );
};

export default VehicleDetail;
