import { Button } from '@/components/ui/button'
import { CornerUpLeft, Image, MessageSquareText, StickyNote } from 'lucide-react'
import React from 'react'

const RightSideBar = () => {
  return (
    <div className="w-10 bg-[#171717] p-4 h-screen border-l z-20 fixed right-4 rounded-lg border-[#262626] flex flex-col items-center space-y-2">
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
  )
}

export default RightSideBar