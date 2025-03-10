import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { CircleDashed, InfoIcon, Plus } from 'lucide-react';

// Custom table components with proper props typing
const Table = ({ className = "", ...props }) => (
  <div className="w-full overflow-auto">
    <table className={`w-full caption-bottom text-sm ${className}`} {...props} />
  </div>
);

const TableHeader = ({ className = "", ...props }) => (
  <thead className={`bg-gray-50 ${className}`} {...props} />
);

const TableBody = ({ className = "", ...props }) => (
  <tbody className={className} {...props} />
);

const TableRow = ({ className = "", ...props }) => (
  <tr className={`border-b transition-colors hover:bg-gray-50 ${className}`} {...props} />
);

const TableHead = ({ className = "", ...props }) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 ${className}`} {...props} />
);

const TableCell = ({ className = "", ...props }) => (
  <td className={`p-4 align-middle ${className}`} {...props} />
);
  // Tab data for loop
  const tabs = [
    { value: 'open', label: 'Overview' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'closed', label: 'Closed' }
  ];
const WorkMaintenanceEntryTab = () => {
  const issues = [
    { id: '#5', priority: 'No Priority', summary: 'Brake light', status: 'Open', linked: '-', labels: '-', assigned: '-', work: '-' },
    { id: '#6', priority: 'No Priority', summary: 'replaced soon', status: 'Open', linked: '-', labels: '-', assigned: '-', work: '-' },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-50 text-base font-medium">Issues</h2>
        <Button className="text-emerald-500 text-xs font-medium bg-transparent p-0 hover:bg-transparent">
          <Plus className="mr-1 h-4 w-4" /> Add Issue
        </Button>
      </div>

      <Tabs defaultValue="open" className="w-full">
      <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.value}
              value={tab.value}
              className="px-2.5 py-2 transition-colors text-xs font-medium text-neutral-300 border-b-2 border-transparent hover:text-white rounded-none 
             data-[state=active]:text-emerald-600 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:bg-transparent"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="open" className="pt-4 m-0">
          <div className="text-zinc-400 text-sm font-normal flex pb-4">
            <span className="mr-2 text-zinc-400 w-6"><InfoIcon /></span>
            Select any issues that were resolved as part of this service
          </div>
          
          <div className="w-full overflow-auto rounded-lg border bg-[#171717] border-[#27272A]">
          <Table className="w-full overflow-auto hover:cursor-pointer min-w-[900px]">
            <TableHeader className="bg-transparent">
              <TableRow className="hover:bg-transparent text-zinc-400 text-sm font-medium" >
                <TableHead  className="pr-0">
                  <Checkbox className="border-neutral-600 bg-zinc-950"/>
                </TableHead>
                <TableHead className="w-32 pl-2">Priority</TableHead>
                <TableHead className="w-20">Issue</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Linked Line Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Labels</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead>Work Order</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.map((issue) => (
                <TableRow key={issue.id} className="bg-black-800 hover:bg-transparent text-neutral-50 text-xs">
                  <TableCell className="pr-0">
                    <Checkbox className="border-neutral-600 bg-zinc-950"/>
                  </TableCell>
                  <TableCell className="flex items-center space-x-2 pl-2">
                    <span className="text-gray-400"><CircleDashed size={20}/></span>
                    <span>{issue.priority}</span>
                  </TableCell>
                  <TableCell className="text-emerald-500">{issue.id}</TableCell>
                  <TableCell>{issue.summary}</TableCell>
                  <TableCell>{issue.linked}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-yellow-500 text-zinc-900 border-0 rounded-full">
                      {issue.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{issue.labels}</TableCell>
                  <TableCell>{issue.assigned}</TableCell>
                  <TableCell>{issue.work}</TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>
          </div>
          
        </TabsContent>

        <TabsContent value="resolved">
          <div className="flex justify-center items-center h-40 text-gray-400">
            No resolved issues
          </div>
        </TabsContent>

        <TabsContent value="closed">
          <div className="flex justify-center items-center h-40 text-gray-400">
            No closed issues
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkMaintenanceEntryTab;