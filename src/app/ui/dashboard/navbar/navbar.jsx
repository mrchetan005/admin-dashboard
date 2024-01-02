"use client";

import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
import Search from "../search/search";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="flex items-center justify-between p-3 bg-bgSoft rounded-lg">
            <div className="capitalize font-bold text-textSoft">{pathname.split('/').at(-1)}</div>
            <div className="flex items-center gap-5">
                <Search placeholder="Search..." />
                <div className="flex gap-5">
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;