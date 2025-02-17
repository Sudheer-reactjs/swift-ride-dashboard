"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function RepairPriorityChart() {
  const data = [
    { name: "No Reason for Repair", count: 8, Cost: 555, fill: "#B91C1C" },
  ];

  // Add count to the legend label text
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customizedLegend = (value: string, entry: any) => {
    const { color } = entry;
    const count = entry.payload.count;
    return (
      <span style={{ color }}>
        {value} ({count})
      </span>
    );
  };

  return (
    <div className="h-[200px] w-full">
   
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count" 
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            fill="#8884d8"
            label={false}  
            stroke="none"  
          />
          <Tooltip
            formatter={(value, name, props) => {
              const cost = props.payload.Cost;
              return [`Count: ${value}`, `Cost: $${cost}`];
            }}
            contentStyle={{
              backgroundColor: "#09090b",
              borderRadius: "6px",
              border: "none",
              color: "#fff", 
            }}
            itemStyle={{
              color: "#fff",
            }}
            labelStyle={{
              color: "#fff", 
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ bottom: 0, fontSize: "12px" }}
            formatter={customizedLegend} 
          />
        </PieChart>
      </ResponsiveContainer>
    
    </div>
  );
}
