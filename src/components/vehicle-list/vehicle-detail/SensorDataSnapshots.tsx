import { Plus } from "lucide-react";

export default function Snapshots() {
  return (
    <div className="col-span-12 flex flex-col md:flex-row rounded-lg  md:h-screen bg-[#171717] text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/2 lg:w-1/3 h-full p-4 border-b md:border-b-0 md:border-r border-gray-700 flex flex-col min-h-52">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Snapshots</h2>
          <button className="p-1 rounded  hover:bg-gray-700">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-400">No Sensor Data Snapshots Found</p>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-4 min-h-52">
        <p className="text-gray-400 text-center">Select Service Data Snapshot to View</p>
      </div>
    </div>
  );
}
