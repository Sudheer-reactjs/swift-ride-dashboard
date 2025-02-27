import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoArrowIcon } from '@/lib/svg';

const Logo = () => {
    return (
        <div className="flex justify-between items-center gap-2 py-3">
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={111}
                    height={32}
                    priority                     
                />
            </Link>
            <LogoArrowIcon />
        </div>
    );
}

export default Logo;
