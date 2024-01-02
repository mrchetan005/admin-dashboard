import { fetchUser, updateUser } from "@/app/lib/controllers/user.controller";
import Image from "next/image";

const User = async ({ params }) => {
    const { id } = params;
    const user = await fetchUser(id);
    return (
        <div className="flex gap-12 mt-5">
            <div className="flex-1 bg-bgSoft text-textSoft p-5 rounded-lg font-bold h-max">
                <div className="relative w-full h-72 rounded-lg overflow-hidden mb-5">
                    <Image className="object-cover" src={user.avatar || "/noavatar.png"} alt={user.username} fill />
                </div>
                {user.username}
            </div>
            <div className="flex-[3]">
                <form action={updateUser} className="flex flex-col">
                    <input type="hidden" name="id" value={user.id} />
                    <label className="mb-2 text-sm" htmlFor="">Username</label>
                    <input className="input w-full" type="text" name="username" placeholder={user.username} />
                    <label className="mb-2 text-sm" htmlFor="">Email</label>
                    <input className="input w-full" type="email" name="email" placeholder={user.email || "example@gmail.com"} />
                    <label className="mb-2 text-sm" htmlFor="">Password</label>
                    <input className="input w-full" type="password" name="password" placeholder="**********" />
                    <label className="mb-2 text-sm" htmlFor="">Phone</label>
                    <input className="input w-full" type="tel" name="phone" placeholder={user.phone || "1234567890"} />
                    <label className="mb-2 text-sm" htmlFor="">Address</label>
                    <textarea className="input w-full resize-none" name="address" id="address" placeholder={user.address || "Address"}></textarea>
                    <label className="mb-2 text-sm" htmlFor="">Is Admin?</label>
                    <select className="input w-full" name="isAdmin" id="isAdmin">
                        <option className="bg-bg text-text" value={true}>Yes</option>
                        <option className="bg-bg text-text" value={false}>No</option>
                    </select>
                    <label className="mb-2 text-sm" htmlFor="">Is Active?</label>
                    <select className="input w-full" name="isActive" id="isActive">
                        <option className="bg-bg text-text" value={true}>Yes</option>
                        <option className="bg-bg text-text" value={false}>No</option>
                    </select>
                    <button className="submitBtn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default User;