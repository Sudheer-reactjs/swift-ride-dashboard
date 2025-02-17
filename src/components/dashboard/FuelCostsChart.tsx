"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { date: "Sep '24", value: 0 },
  { date: "Oct '24", value: 0 },
  { date: "Nov '24", value: 0 },
  { date: "Dec '24", value: 0 },
  { date: "Jan '25", value: 2000 },
  { date: "Feb '25", value: 300 },
];

export default function FuelCosts() {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="#ffffff" vertical={false} />
          <XAxis dataKey="date" style={{ fontSize: "12px" }} axisLine={false} />
          <YAxis style={{ fontSize: "12px" }} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: "#09090b", color: "#fff", borderRadius: "6px", border: "none" }}
            formatter={(value) => `$${value}`}
          />
          <Bar 
            dataKey="value" 
            fill="#34D399" 
            radius={[5, 5, 0, 0]} 
            isAnimationActive={false} 
          />
          <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
