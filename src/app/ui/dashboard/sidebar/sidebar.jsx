import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { auth, signOut } from '@/auth';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = async () => {
    const { user } = await auth();
    return (
        <div className="sticky top-10">
            <div className="flex items-center gap-5 mb-5">
                <Image className='rounded-full object-cover' src={user.avatar || "/noavatar.png"} alt='' height={50} width={50} />
                <div className="flex flex-col">
                    <span className='font-medium'>{user.username || "John Doe"}</span>
                    <span className='text-xs text-textSoft'>Administrator</span>
                </div>
            </div>
            <ul className="">
                {
                    menuItems.map(cat => (
                        <li key={cat.title} className='text-sm text-textSoft font-bold my-3'>
                            <span className="">{cat.title}</span>
                            {
                                cat.list.map(item => (
                                    <MenuLink item={item} key={item.title} />
                                ))
                            }
                        </li>
                    ))
                }
            </ul>
            <form action={async () => {
                "use server";
                await signOut();
            }}>
                <button type='submit' className='flex items-center border-none bg-none p-3 gap-3 hover:bg-bgSofter rounded-lg my-1 w-full text-sm text-textSoft font-bold'>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    )
}

export default Sidebar;