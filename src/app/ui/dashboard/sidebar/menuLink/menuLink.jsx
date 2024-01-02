"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const MenuLink = ({ item }) => {
    const pathname = usePathname();
    return (
        <Link href={item.path} style={{ backgroundColor: item.path === pathname ? "#2e374a" : "", color: item.path === pathname ? "white" : "" }} className='flex items-center p-3 gap-3 hover:bg-bgSofter rounded-lg my-1'>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink;