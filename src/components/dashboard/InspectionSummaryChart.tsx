"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function RepairPriorityChart() {
  const data = [
    { name: "No Reason for Repair", count: 8, Cost: 555, fill: "#B91C1C" },
    { name: "Reason for Repair", count: 2, Cost: 22, fill: "#0891B2" },
  ];


  return (
    <div className="h-[165px] w-full">
   
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
        </PieChart>
      </ResponsiveContainer>
    
    </div>
  );
}
