import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Specs = () => {
  return (
    <>
    {/* right side cards */}
      <div className="lg:col-span-6 col-span-12">
        {/*Right side First card */}
      <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Details</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Width</div>
                <div className="col-span-6 text-white">69,3 in</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Height</div>
                <div className="col-span-6 text-white">20,811 in</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Length</div>
                <div className="col-span-6 text-white">20,811 in</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Interior Volume</div>
                <div className="col-span-6 text-white">117,7 ft</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Passenger Volume</div>
                <div className="col-span-6 text-white">93,1 ft</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Cargo Volume</div>
                <div className="col-span-6 text-white">24,6 ft</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Ground Clearance</div>
                <div className="col-span-6 text-white">5,1 in</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Bed length</div>
                <div className="col-span-6 text-white">--</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/*Right side second card  */}
        <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Weight</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Curb Weight</div>
                <div className="col-span-6 text-white">3 075 ib</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Gross Vehicle
                Weight Rating</div>
                <div className="col-span-6 text-white">58,1 in</div>
              </div>
              
            </div>
          </CardContent>
        </Card>
        {/*Right side 3rd card  */}
        <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Performance</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Towing Capacity</div>
                <div className="col-span-6 text-white">--</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Max Payload</div>
                <div className="col-span-6 text-white">825 ib</div>
              </div>
              
            </div>
          </CardContent>
        </Card>
        {/*Right side 4th card  */}
        <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Fuel Economy</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">EPA City</div>
                <div className="col-span-6 text-white">54</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">EPA Highway</div>
                <div className="col-span-6 text-white">50</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">EPA Combined</div>
                <div className="col-span-6 text-white">50</div>
              </div>
              
            </div>
          </CardContent>
        </Card>
        {/*Right side 5th card  */}
        <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Fuel</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Fuel Quality</div>
                <div className="col-span-6 text-white">54</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Fuel Tank 1 Capacity</div>
                <div className="col-span-6 text-white">11.3 gal</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Fuel Tank 2 Capacity</div>
                <div className="col-span-6 text-white">--</div>
              </div>              
            </div>
          </CardContent>
        </Card>
        {/*Right side 6th card  */}
        <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Oil</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Oil Capacity</div>
                <div className="col-span-6 text-white">42</div>
              </div>                          
            </div>
          </CardContent>
        </Card>
      </div>
      {/* left side cards */}
      <div className="lg:col-span-6 col-span-12">
        {/*Left side First card */}
      <Card className="bg-[#171717] mt-4 border-none text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Engine</CardTitle>
            <Button variant="ghost" className="text-[#10b981] cursor-pointer">
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Engine Summary</div>
                <div className="col-span-6 text-white">1.8L Hybrid I4 121hp</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Engine Band</div>
                <div className="col-span-6 text-white">--</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Aspiration</div>
                <div className="col-span-6 text-white">Naturally Aspirated</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Block Type</div>
                <div className="col-span-6 text-white">I</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Bore</div>
                <div className="col-span-6 text-white">3,17 in</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Cam Type</div>
                <div className="col-span-6 text-white">DOHC</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Compression</div>
                <div className="col-span-6 text-white">13.0</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Cylinders</div>
                <div className="col-span-6 text-white">4</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Displacement</div>
                <div className="col-span-6 text-white">1,8</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Fuel Induction</div>
                <div className="col-span-6 text-white">Sequential Multiport Fuel Injection</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Max HP</div>
                <div className="col-span-6 text-white">121</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Max Torque</div>
                <div className="col-span-6 text-white">--</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Redline RPM</div>
                <div className="col-span-6 text-white">4</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Stroke</div>
                <div className="col-span-6 text-white">3,48</div>
              </div>
              <div className="grid grid-cols-12 border-b border-[#262626] pb-2">
                <div className="col-span-6 text-gray-400">Valves</div>
                <div className="col-span-6 text-white">16</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Specs;
