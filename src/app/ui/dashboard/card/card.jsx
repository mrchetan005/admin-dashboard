import { MdSupervisedUserCircle } from "react-icons/md";


const Card = ({ sales = 'positive' }) => {
    return (
        <div className="bg-bgSoft p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-bgSofter ">
            <MdSupervisedUserCircle size={24} />
            <div className=" flex flex-col gap-5">
                <span className="">Total Users</span>
                <span className="font-medium text-2xl">10,273</span>
                <span className="text-sm font-light">
                    <span><span style={{ color: sales === 'positive' ? "lime" : "red" }}>12%</span> more than previous weak</span>
                </span>
            </div>
        </div>
    )
}

export default Card;