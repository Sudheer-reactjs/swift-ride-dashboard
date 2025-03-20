import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
const MobileTrigger = () => {
    return (
        <div className=' items-center gap-2 flex md:hidden'>
            <SidebarTrigger />
            <Link href="/">
                <Image
                    src="/images/logo.png"  
                    alt="Logo"
                    width={111}
                    height={32}
                    priority                     
                />
            </Link>
        </div>
    );
}

export default MobileTrigger;
