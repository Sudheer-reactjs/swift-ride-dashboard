import React from 'react';
import { Button } from "@/components/ui/button";
import { CornerUpLeft, Image, MessageSquareText, StickyNote } from "lucide-react";
const SidebarWidget = () => {
    return (
        <div className="w-12 bg-[#171717] p-4 h-full border-l z-[1] sticky  top-0 right-0 rounded-lg border-[#262626] flex flex-col items-center space-y-2">
    <Button className="p-1" variant="ghost">
      <CornerUpLeft className="w-4 h-4" />
    </Button>
    <Button className="p-1" variant="ghost">
      <MessageSquareText className="w-4 h-4" />
    </Button>
    <Button className="p-1" variant="ghost">
      <Image className="w-4 h-4" aria-label="Image" />
    </Button>
    <Button className="p-1" variant="ghost">
      <StickyNote className="w-4 h-4" />
    </Button>
  </div>
    );
}

export default SidebarWidget;
