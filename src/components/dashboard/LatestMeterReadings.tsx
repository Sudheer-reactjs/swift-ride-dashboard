"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", miles: 120000, hours: 50 },
  { month: "February", miles: 150000, hours: 55 },
  { month: "March", miles: 135000, hours: 60 },
  { month: "April", miles: 95000, hours: 45 },
  { month: "May", miles: 160000, hours: 65 },
  { month: "June", miles: 140000, hours: 60 },
];

const chartConfig = {
  miles: {
    label: "Miles",
    color: "#06B6D4",
  },
  hours: {
    label: "Hours",
    color: "#facc15",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          ticks={[100000, 200000, 300000]}
          tickFormatter={(value) => `${value / 1000}k`}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="miles"
          type="natural"
          stroke="none"
          dot={{
            fill: chartConfig.miles.color,
            r: 6,
          }}
          activeDot={{
            r: 8,
          }}
        />
        <Line
          dataKey="hours"
          type="natural"
          stroke="none"
          dot={{
            fill: chartConfig.hours.color,
            r: 6,
          }}
          activeDot={{
            r: 8,
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={50}
          wrapperStyle={{ paddingTop: 20, marginTop: "auto" }}
          formatter={(value: string) => {
            const key = value.toLowerCase() as keyof typeof chartConfig;
            const color = chartConfig[key]?.color || "#000";
            return (
              <span style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    marginRight: "8px",
                  }}
                />
                {chartConfig[key]?.label || value}
              </span>
            );
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
