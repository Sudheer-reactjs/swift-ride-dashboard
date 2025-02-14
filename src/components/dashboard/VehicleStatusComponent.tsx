"use client"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]
const chartConfig = {
  chrome: {
    label: "No Reason for Repair",
    color: "#B91C1C",
  },
  safari: {
    label: "Reason for Repair",
    color: "#0891B2",
  },
} satisfies ChartConfig

const VehicleStatusComponent = () => {
    return (
        <Card className="flex flex-col bg-transparent border-0 p-0">
        <CardHeader className="items-center pb-0">
          <CardDescription>Last 90 Days</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart>
              <Pie data={chartData} dataKey="visitors" />
              <ChartLegend
                content={<ChartLegendContent nameKey="browser" />}
                className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
}

export default VehicleStatusComponent;
