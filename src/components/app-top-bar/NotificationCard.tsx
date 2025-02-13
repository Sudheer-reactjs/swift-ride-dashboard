import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BellIcon, CrossIcon, ThreeDotIcon } from '@/lib/svg';

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
}

interface Notification extends NotificationItemProps {
  id: number;
  type: 'comment' | 'mention';
}

type FilterType = 'all' | 'comments' | 'mentions';

const NotificationItem: React.FC<NotificationItemProps> = ({ title, description, time }) => (
  <div className="py-4 px-4 hover:bg-gray-800/50 transition-colors">
    <div className="flex justify-between items-start">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <span className="text-xs text-[#737373]">{time}</span>
    </div>
    <p className="text-sm text-[#737373] mt-2 line-clamp-2">{description}</p>
  </div>
);

const NotificationsPanel: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Notification Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag...",
      time: "3:11 PM",
      type: "comment"
    },
    {
      id: 2,
      title: "Notification Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag...",
      time: "Yesterday",
      type: "mention"
    },
    {
      id: 3,
      title: "Notification Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag...",
      time: "04/03/21",
      type: "comment"
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'comments') return notification.type === 'comment';
    if (filter === 'mentions') return notification.type === 'mention';
    return true;
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="border-0 bg-transparent hover:bg-transparent outline-none p-0 h-auto w-auto [&_svg]:size-10 relative">
           <BellIcon />
          <span className="absolute -top-1 -right-1 bg-[#09090B] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {notifications.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md p-0 bg-bgCard text-white border-0 sm:max-w-md crosshide ">
        <SheetHeader className="px-4 py-2">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold text-white">Notifications</SheetTitle>
            <div className="flex items-center gap-[24px]">
              <Button variant="ghost" size="icon" className="border-0 bg-transparent hover:bg-transparent outline-none p-0 h-auto w-auto [&_svg]:size-8 relative focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0">
                <ThreeDotIcon />
              </Button>
              <SheetClose className="ring-offset-background transition-opacity focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <CrossIcon />
              </SheetClose>
            </div>
          </div>
        </SheetHeader>

        <Tabs defaultValue="inbox" className="flex-1">
          <div className=" px-4 pt-[14px]">
            <TabsList className="p-0 h-12 bg-transparent">
              <TabsTrigger 
                value="inbox"
                className="flex-1 h-full border-b-2 border-transparent data-[state=active]:text-[#059669] data-[state=active]:border-b-2 data-[state=active]:border-[#059669] rounded-none bg-transparent data-[state=active]:bg-transparent"
              >
                Inbox
              </TabsTrigger>
              <TabsTrigger 
                value="archived"
                className="flex-1 h-full border-b-2 border-transparent data-[state=active]:text-[#059669] data-[state=active]:border-b-2 data-[state=active]:border-[#059669] rounded-none bg-transparent data-[state=active]:bg-transparent"
              >
                Archived
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex gap-2 p-2 py-[24px] border-t border-[#262626] overflow-x-auto">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full px-4 text-[12px] bg-transparent border-[1px] border-[##525252] border-solid ${
                filter === 'all' 
                  ? 'bg-transparent text-[#10B981] border-[#10B981] hover:bg-[#10B981]' 
                  : ' hover:bg-[#10B981]'
              }`}
              onClick={() => setFilter('all')}
            >
              All Activity
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full px-4 text-[12px] bg-transparent border-[1px] border-[##525252] border-solid ${
                filter === 'comments' 
                   ? 'bg-transparent text-[#10B981] border-[#10B981] hover:bg-[#10B981]' 
                  : ' hover:bg-[#10B981]'
              }`}
              onClick={() => setFilter('comments')}
            >
              Comments Only
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full px-4 text-[12px] bg-transparent border-[1px] border-[##525252] border-solid ${
                filter === 'mentions' 
                  ? 'bg-transparent text-[#10B981] border-[#10B981] hover:bg-[#10B981]' 
                  : ' hover:bg-[#10B981]'
              }`}
              onClick={() => setFilter('mentions')}
            >
              @ Mentions
            </Button>
          </div>

          <TabsContent value="inbox" className="flex-1 m-0">
            <ScrollArea className="h-[calc(100vh-200px)]">
              {filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  title={notification.title}
                  description={notification.description}
                  time={notification.time}
                />
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="archived" className="flex-1 m-0">
            <div className="p-4 text-center">
              No archived notifications
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
 
export default NotificationsPanel;