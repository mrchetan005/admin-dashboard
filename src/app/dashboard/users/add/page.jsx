import { addUser } from "@/app/lib/controllers/user.controller";

const AddUser = () => {
    return (
        <div className="bg-bgSoft text-bgSofter p-5 rounded-lg mt-5">
            <form action={addUser} className="flex flex-wrap justify-between">
                <input className="input" type="text" name="username" placeholder="username" required />
                <input className="input" type="email" name="email" placeholder="email" required />
                <input className="input" type="password" name="password" placeholder="password" required />
                <input className="input" type="tel" name="phone" placeholder="phone" />
                <select className="input" name="isAdmin" id="isAdmin">
                    <option className="bg-bgSoft text-text" value={false}>is Admin?</option>
                    <option className="bg-bgSoft text-text" value={true}>Yes</option>
                    <option className="bg-bgSoft text-text" value={false}>No</option>
                </select>
                <select className="input" name="isActive" id="isActive">
                    <option className="bg-bgSoft text-text" value={true}>is Active?</option>
                    <option className="bg-bgSoft text-text" value={true}>Yes</option>
                    <option className="bg-bgSoft text-text" value={false}>No</option>
                </select>

                <textarea className="input w-full resize-none" name="address" id="address" rows="10" placeholder="Address"></textarea>
                <button className="submitBtn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser;