import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { deleteUser, fetchUsers } from "@/app/lib/controllers/user.controller";


const Users = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { users, count } = await fetchUsers(q, page);

    return (
        <div className="bg-bgSoft p-5 rounded-lg mt-5">
            <div className="flex items-center justify-between">
                <Search placeholder="Search for users..." />
                <Link href={'/dashboard/users/add'}>
                    <button className="p-2 flex items-center gap-2 w-max bg-[#5d57c9] text-white border-none rounded-md">Add New</button>
                </Link>
            </div>
            <table className="w-full overflow-x-auto divide-y divide-yellow-50/10 mt-5">
                <thead>
                    <tr>
                        <td className="p-2">Name</td>
                        <td className="p-2">Email</td>
                        <td className="p-2">Created At</td>
                        <td className="p-2">Role</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Action</td>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        users?.map((user) => (

                            <tr key={user.id} className="">
                                <td className="p-2">
                                    <div className="flex items-center italic gap-2">
                                        <Image src={user.avatar || "/noavatar.png"} alt={user.username} height={40} width={40} className="rounded-full object-cover h-10 w-10" />
                                        {user.username}
                                    </div>
                                </td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{new Date(user.createdAt).toString()?.split(" ")?.slice(1, 4)?.join(" ")}</td>
                                <td className="p-2">{user.isAdmin ? "admin" : "client"}</td>
                                <td className="p-2">{user.isActive ? "active" : "passive"}</td>
                                <td className="p-2">
                                    <div className="flex items-center gap-2">
                                        <Link href={`/dashboard/users/${user.id}`}><button className="bg-teal-500 px-2 py-1 border-none rounded">View</button></Link>
                                        <form action={deleteUser}>
                                            <input type="hidden" name="id" value={user.id} />
                                            <button type="submit" className="bg-[#dc143c] px-2 py-1 border-none rounded">Delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default Users;