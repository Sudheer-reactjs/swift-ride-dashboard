"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";

export default function TimeResolveChart() {
  // Updated data with "Last Week" and "This Week" values
  const data = [
    {
      date: "Sep 24",
      lastWeek: 3, // Example data for "Last Week"
      thisWeek: 1, // Example data for "This Week"
    },
    {
      date: "Oct 24",
      lastWeek: 4,
      thisWeek: 2,
    },
    {
      date: "Nov 24",
      lastWeek: 2,
      thisWeek: 3,
    },
    {
      date: "Dec 24",
      lastWeek: 3,
      thisWeek: 1,
    },
    {
      date: "Jan 25",
      lastWeek: 4,
      thisWeek: 2,
    },
    {
      date: "Feb 25",
      lastWeek: 3,
      thisWeek: 4,
    },
  ];

  return (
    <div className="h-[130px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" style={{ fontSize: "12px" }} axisLine={false} />
          <YAxis
            yAxisId="left"
            domain={[0, 4]}
            ticks={[0, 4]}
            style={{ fontSize: "12px" }}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 4]}
            ticks={[0, 4]}
            style={{ fontSize: "12px" }}
            axisLine={false}
          />
          <Tooltip contentStyle={{ backgroundColor: "#09090b", color: "#fff", borderRadius: "6px", border: "none" }} />

          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ bottom: -10, fontSize: "12px" }}
          />

          {/* Line for Last Week */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="lastWeek" // Using 'lastWeek' data key
            stroke="#06B6D4"
            dot={{ fill: "#06B6D4", r: 4 }}
            name="Avg. Time to Resolve" // Updated to reflect the label for last week
          />

          {/* Line for This Week */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="thisWeek" // Using 'thisWeek' data key
            stroke="#F59E0B"
            dot={{ fill: "#F59E0B", r: 4 }}
            name="# of Issues" // Updated to reflect the label for this week
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
