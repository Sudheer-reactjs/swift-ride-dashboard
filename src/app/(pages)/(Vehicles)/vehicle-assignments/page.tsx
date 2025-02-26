import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Page = () => {
    return (
        <div className="flex w-full flex-col gap-6 size-span">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#A1A1AA] ">
                Vehicles
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#FAFAFA] font-light">
              Vehicle Assignments
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='flex felxwrap justify-between'>
        <h2 className="text-neutral-50 font-sans text-[20px] md:text-[30px] font-bold leading-[36px] tracking-tight">
        Vehicle Assignments
        </h2>
        <Button variant="outline" className="h-10">
            <Plus />
            Add Vehicle
          </Button>
        </div>
    </div>
    );
}

export default Page;
