"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";

export default function RepairPriorityChart() {
  const data = [
    {
      date: "Sep 24",
      noRepair: 0,
      emergency: 0,
      nonScheduled: 0,
      scheduled: 0,
    },
    {
      date: "Oct 24",
      noRepair: 100,
      emergency: 0,
      nonScheduled: 0,
      scheduled: 0,
    },
    {
      date: "Nov 24",
      noRepair: 100,
      emergency: 0,
      nonScheduled: 0,
      scheduled: 0,
    },
    {
      date: "Dec 24",
      noRepair: 100,
      emergency: 0,
      nonScheduled: 0,
      scheduled: 0,
    },
    {
      date: "Jan 25",
      noRepair: 100,
      emergency: 0,
      nonScheduled: 0,
      scheduled: 0,
    },
    {
      date: "Feb 25",
      noRepair: 100,
      emergency: 0,
      nonScheduled: 0,
      scheduled: 0,
    },
  ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" style={{ fontSize: "12px" }} axisLine={false} />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            style={{ fontSize: "12px" }}
            axisLine={false}
          />
          <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: "#09090b", color: "#fff", borderRadius: "6px", border: "none" }}/>
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ bottom: -10, fontSize: "12px" }}
          />
          <Area
            type="linear"
            dataKey="noRepair"
            stackId="1"
            stroke="none"
            fill="#E5E7EB"
            name="No Repair Priority Class"
          />
          <Area
            type="linear"
            dataKey="emergency"
            stackId="1"
            stroke="none"
            fill="#FCA5A5"
            name="Emergency"
          />
          <Area
            type="linear"
            dataKey="nonScheduled"
            stackId="1"
            stroke="none"
            fill="#FCD34D"
            name="Non-Scheduled"
          />
          <Area
            type="linear"
            dataKey="scheduled"
            stackId="1"
            stroke="none"
            fill="#6EE7B7"
            name="Scheduled"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
