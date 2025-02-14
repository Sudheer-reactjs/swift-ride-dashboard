import LocationSelect from "@/components/dashboard/LocationSelect";
import VehicleStatus from "@/components/dashboard/VehicleStatusComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshIcon } from "@/lib/svg";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="text-white min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between"> 
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-10">
          <span className="text-sm text-[#737373] flex items-center gap-2">
            <RefreshIcon /> 1 minutes ago
          </span>
          <LocationSelect />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Priority Trends */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Repair Priority Class Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/map.png"
                alt="map"
                width={418}
                height={100}
                priority
              />
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Service Reminders */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Service Reminders</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-around">
                  {[
                    { label: "Open", value: 0 },
                    { label: "Overdue", value: 0 },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`text-4xl font-medium ${
                          item.value > 0 ? "text-[#FACC15]" : "text-emerald-500"
                        }`}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time to Resolve */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Time to Resolve</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/map.png"
                  alt="map"
                  width={418}
                  height={100}
                  priority
                />
              </CardContent>
            </Card>

            {/* Open Issues */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Open Issues</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-around">
                  {[
                    { label: "Open", value: 1 },
                    { label: "Overdue", value: 0 },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`text-4xl font-medium ${
                          item.value > 0 ? "text-[#FACC15]" : "text-emerald-500"
                        }`}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Renewal Reminders*/}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Vehicle Renewal Reminders</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-around">
                  {[
                    { label: "Open", value: 1 },
                    { label: "Overdue", value: 0 },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`text-4xl font-medium ${
                          item.value > 0 ? "text-[#FACC15]" : "text-emerald-500"
                        }`}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Active Work Orders */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Active Work Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                {[
                  {
                    label: "Open",
                    value: 0,
                    bgColor: "#06B6D4",
                    textBg: "#083344",
                    textColor: "#06B6D4",
                  },
                  {
                    label: "Pending",
                    value: 1,
                    bgColor: "#F59E0B",
                    textBg: "#451A03",
                    textColor: "#F59E0B",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    {index !== 0 && <hr className="border-[#262626] my-2" />}{" "}
                    <div className="flex justify-between items-center ">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full`}
                          style={{ backgroundColor: item.bgColor }}
                        ></div>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <span
                        className="py-0 px-3 rounded-xl text-sm"
                        style={{
                          backgroundColor: item.textBg,
                          color: item.textColor,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Renewal Reminders */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Contact Renewal Reminders</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-around">
                {[
                  { label: "Open", value: 0 },
                  { label: "Overdue", value: 0 },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-4xl font-medium ${
                        item.value > 0 ? "text-[#FACC15]" : "text-emerald-500"
                      }`}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Assignments */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Vehicle Assignments</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-around">
                {[
                  { label: "Open", value: 0 },
                  { label: "Overdue", value: 1 },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-4xl font-medium ${
                        item.value > 0 ? "text-[#FACC15]" : "text-emerald-500"
                      }`}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Status */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Vehicle Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                {[
                  {
                    label: "Active",
                    value: 1,
                    bgColor: "#15803D",
                    textBg: "#052E16",
                    textColor: "#15803D",
                  },
                  {
                    label: "In Shop",
                    value: 1,
                    bgColor: "#F59E0B",
                    textBg: "#451A03",
                    textColor: "#F59E0B",
                  },
                  {
                    label: "Inactive",
                    value: 0,
                    bgColor: "#06B6D4",
                    textBg: "#083344",
                    textColor: "#06B6D4",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    {index !== 0 && <hr className="border-[#262626] my-2" />}{" "}
                    {/* Adds a separator except for the first item */}
                    <div className="flex justify-between items-center ">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full`}
                          style={{ backgroundColor: item.bgColor }}
                        ></div>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <span
                        className="py-0 px-3 rounded-xl text-sm"
                        style={{
                          backgroundColor: item.textBg,
                          color: item.textColor,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Vehicle Locations */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Vehicle Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around items-center min-h-[100px]">
                  <p>No Results</p>
                </div>
              </CardContent>
            </Card>

            {/* Critical Faults */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Critical Faults</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around items-center min-h-[100px]">
                  <p>No Results</p>
                </div>
              </CardContent>
            </Card>

            {/* Fuel Costs */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Fuel Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/map.png"
                  alt="map"
                  width={418}
                  height={100}
                  priority
                />
              </CardContent>
            </Card>

            {/* *Service Costs */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Service Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/map.png"
                  alt="map"
                  width={418}
                  height={100}
                  priority
                />
              </CardContent>
            </Card>
          </div>

          {/* Recent Comments */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Recent Comments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around items-center min-h-[200px]">
                <p>No comments to show</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Service Costs */}
          <Card className="col-span-12 lg:col-span-3 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>Service Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/map.png"
                alt="map"
                width={418}
                height={100}
                priority
              />
            </CardContent>
          </Card>

          {/* Vehicle Status */}
          <Card className="col-span-12 lg:col-span-6 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>Vehicle Status</CardTitle>
            </CardHeader>
            <CardContent>
              <VehicleStatus />
            </CardContent>
          </Card>

          {/* Total Costs */}
          <Card className="col-span-12 lg:col-span-3 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>Total Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/map.png"
                alt="map"
                width={418}
                height={100}
                priority
              />
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {/* Top System Codes by Usage */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Top System Codes by Usage</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>

            {/* Latest Meter Readings */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Latest Meter Readings</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/map.png"
                  alt="map"
                  width={418}
                  height={100}
                  priority
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            {/* Top System Codes by Usage */}
            <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
              <CardHeader className="p-4">
                <CardTitle>Top System Codes by Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/map.png"
                  alt="map"
                  width={418}
                  height={100}
                  priority
                />
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Cost Per Meter */}
              <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
                <CardHeader className="p-4">
                  <CardTitle>Cost Per Meter</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-around">
                    {[
                      { label: "Overdue", value: 0 },
                      { label: "of Total Due", value: 0 },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-4xl font-medium ${
                            item.value > 0
                              ? "text-emerald-500"
                              : "text-emerald-500"
                          }`}
                        >
                          {item.label === "of Total Due"
                            ? `${item.value * 100}%`
                            : item.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Overdue Inspections */}
              <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
                <CardHeader className="p-4">
                  <CardTitle>Overdue Inspections</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-around">
                    {[
                      { label: "Open", value: 0 },
                      { label: "Pending", value: 1 },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-4xl font-medium ${
                            item.value > 0
                              ? "text-emerald-500"
                              : "text-emerald-500"
                          }`}
                        >
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* ROs Needing Approval */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>ROs Needing Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-x-2">
                <span className="font-semibold text-[#34D399] text-[36px]">
                  0:17
                </span>
                <p className="text-xs text-center text-[#F9FAFB]">
                  Save an average of 17 minutes approving and recording each
                  external Repair Order after you
                  <span className="text-[#10B981]">
                    {" "}
                    set up online approval management.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
          {/* On-Time Service Compliance */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>On-Time Service Compliance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-around">
                {[
                  { label: "All Time", value: 40 },
                  { label: "Last 30 Days", value: 50 },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-medium text-[#DC2626]">
                      {item.value}%
                    </div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Inspection Submission */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Inspection Submission</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/map.png"
                alt="map"
                width={418}
                height={100}
                priority
              />
            </CardContent>
          </Card>
          {/* Inspection Item Failure Rate */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader className="p-4">
              <CardTitle>Inspection Item Failure Rate</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-around">
                {[
                  { label: "This Week", value: 0 },
                  { label: "Change From Last Week", value: 0 },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-medium text-[#34D399]">
                      {item.label === "Change From Last Week" ? "↑" : ""}{" "}
                      {item.value}%
                    </div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
         
                       
        <div className="grid grid-cols-12 gap-4">
          {/* Uncategorized Service Tasks */}
          <Card className="col-span-12 lg:col-span-3 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>Uncategorized Service Tasks</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center ">
              <p className="text-sm">All Service Tasks are categorized</p>
            </CardContent>
          </Card>

          {/* Vehicle Status */}
          <Card className="col-span-12 lg:col-span-6 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>Vehicle Status</CardTitle>
            </CardHeader>
            <CardContent>
              <VehicleStatus />
            </CardContent>
          </Card>

          {/* Total Costs */}
          <Card className="col-span-12 lg:col-span-3 bg-bgCard shadow-none border-0">
            <CardHeader className="p-4">
              <CardTitle>Total Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/map.png"
                alt="map"
                width={418}
                height={100}
                priority
              />
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
