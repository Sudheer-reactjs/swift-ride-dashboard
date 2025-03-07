"use client";
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter();
    return (
        <div>
             <Button
                     variant="ghost"
                     className="justify-start items-center gap-2.5 inline-flex text-neutral-50 text-sm font-normal max-w-max hover:bg-transparent px-0"
                     onClick={() => router.back()}
                   >
                     <ChevronLeft size={24} className="text-[#A1A1AA]" />
                     Maintenance Entries
                   </Button>
            new
        </div>
    );
}

export default Page;
