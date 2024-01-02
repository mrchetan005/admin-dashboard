import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className="fixed">
            <div className="relative bg-gradient-to-t from-bgSoft to-bgSofter py-5 px-6 mb-5 rounded-lg">
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2">
                    <Image src="/astronaut.png" className="object-contain opacity-20" alt="" fill />
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-semibold">🔥 Available Now</span>
                    <h3 className="font-bold">How to use the new version of admin dashboard?</h3>
                    <span className="font-medium text-xs text-textSoft">Takes 4 minutes to learn</span>
                    <p className="text-textSoft text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto? Officiis.</p>
                    <button className="p-2 flex items-center gap-2 w-max bg-[#5d57c9] text-white border-none rounded-md">
                        <MdPlayCircleFilled /> Watch
                    </button>
                </div>
            </div>
            <div className="relative bg-gradient-to-t from-[#182237] to-bgSofter py-5 px-6 mb-5 rounded-lg">
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2">
                    <Image src="/astronaut.png" className="object-contain opacity-20" alt="" fill />
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-semibold">🚀 Coming Soon</span>
                    <h3 className="font-bold">New server actions are available, partial pre-rendering is coming up!</h3>
                    <span className="font-medium text-xs text-textSoft">Boost your productivity</span>
                    <p className="text-textSoft text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto? Officiis.</p>
                    <button className="p-2 flex items-center gap-2 w-max bg-[#5d57c9] text-white border-none rounded-md">
                        <MdReadMore /> Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;