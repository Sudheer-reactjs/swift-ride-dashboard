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
                    src="/images/mobile-logo.png"
                    alt="Mobile Logo"
                    width={48}
                    height={48}
                    priority                     
                />
            </Link>
        </div>
    );
}

export default MobileTrigger;
