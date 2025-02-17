"use client"

import { CartesianGrid, LineChart, XAxis, YAxis, Line, Legend, Tooltip } from "recharts"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

// Sample Data
const chartData = [
  { month: "Sep '24", costPerMile: 0 },
  { month: "Oct '24", costPerMile: 0.4 },
  { month: "Nov '24", costPerMile: 0 },
  { month: "Dec '24", costPerMile: 0.2 },
  { month: "Jan '25", costPerMile: 0.1 },
  { month: "Feb '25", costPerMile: 0 },
]

const chartConfig = {
  costPerMile: {
    label: "Cost/mi",
    color: "#06B6D4",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
          tickFormatter={(value) => value.toFixed(1)}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
          tickMargin={8}
        />
        {/* Custom Tooltip */}
        <Tooltip
          formatter={(value) => `${value}%`}
          contentStyle={{
            backgroundColor: "#09090b",
            color: "#fff",
            borderRadius: "6px",
            border: "none",
            padding: "8px",
          }}
        />
        {/* Solid Line */}
        <Line
          dataKey="costPerMile"
          type="monotone"
          stroke="#06B6D4"
          strokeWidth={2}
          dot={{ fill: "#06B6D4", r: 4 }}
          activeDot={{ r: 6 }}
        />
        {/* Legend */}
        <Legend verticalAlign="bottom" height={36} wrapperStyle={{ paddingTop: 20 }} />
      </LineChart>
    </ChartContainer>
  )
}
