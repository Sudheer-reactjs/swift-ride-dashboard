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
  const data = [
    {
      date: "Sep 24",
      timeToResolve: 4,
      issues: 0,
    },
    {
      date: "Oct 24",
      timeToResolve: 4,
      issues: 0,
    },
    {
      date: "Nov 24",
      timeToResolve: 4,
      issues: 0,
    },
    {
      date: "Dec 24",
      timeToResolve: 4,
      issues: 0,
    },
    {
      date: "Jan 25",
      timeToResolve: 4,
      issues: 0,
    },
    {
      date: "Feb 25",
      timeToResolve: 4,
      issues: 0,
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
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="timeToResolve"
            stroke="#06B6D4"
            dot={{ fill: "#06B6D4", r: 4 }}
            name="Avg. Time to Resolve"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="issues"
            stroke="#F59E0B"
            dot={{ fill: "#F59E0B", r: 4 }}
            name="# of Issues"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
