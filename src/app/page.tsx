import LocationSelect from "@/components/dashboard/LocationSelect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshIcon } from "@/lib/svg";

export default function Dashboard() {
  return (
    <div className=" text-white min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-10">
          <span className="text-sm text-[#737373] flex items-center gap-2">
            <RefreshIcon /> 1 minutes ago
          </span>
          <LocationSelect />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Priority Trends */}
          <Card className="col-span-full lg:col-span-1 bg-bgCard shadow-none border-0 ">
            <CardHeader>
              <CardTitle>Repair Priority Class Trends</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Service Reminders */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Service Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">0</div>
                    <div className="text-sm text-gray-400">Open</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">0</div>
                    <div className="text-sm text-gray-400">Overdue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Time to Resolve */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Time to Resolve</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
            {/* Open Issues */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Open Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">0</div>
                    <div className="text-sm text-gray-400">Open</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">0</div>
                    <div className="text-sm text-gray-400">Overdue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Vehicle Renewal Reminders*/}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Vehicle Renewal Reminders</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        </div>

        {/* Active Work Orders */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Active Work Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Open</span>
                </div>
                <span>0</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Pending</span>
                </div>
                <span>0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Status */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Vehicle Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>Active</span>
                </div>
                <span>1</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>In Shop</span>
                </div>
                <span>0</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Inactive</span>
                </div>
                <span>0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fuel Costs */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Fuel Costs</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        {/* Service Costs */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Service Costs</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}
