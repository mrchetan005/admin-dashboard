import Image from "next/image";

const Transactions = () => {
    return (
        <div className="bg-bgSoft p-5 rounded-lg">
            <h2 className="mb-5 text-textSoft font-extralight">Latest Transactions</h2>
            <table className="w-full overflow-x-auto">
                <thead>
                    <tr>
                        <td className="p-3">Name</td>
                        <td className="p-3">Status</td>
                        <td className="p-3">Date</td>
                        <td className="p-3">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-3">
                            <div className="flex items-center italic gap-3">
                                <Image src={"/noavatar.png"} alt="" height={40} width={40} className="rounded-full object-cover" />
                                John Doe
                            </div>
                        </td>
                        <td className="p-3">
                            <span className="rounded-md p-1 text-sm text-white" style={{ backgroundColor: getColor('pending') }}>Pending</span>
                        </td>
                        <td className="p-3">14.02.2024</td>
                        <td className="p-3">$2.200</td>
                    </tr>
                    <tr>
                        <td className="p-3">
                            <div className="flex items-center italic gap-3">
                                <Image src={"/noavatar.png"} alt="" height={40} width={40} className="rounded-full object-cover" />
                                John Doe
                            </div>
                        </td>
                        <td className="p-3">
                            <span className="rounded-md p-1 text-sm text-white" style={{ backgroundColor: getColor('pending') }}>Pending</span>
                        </td>
                        <td className="p-3">14.02.2024</td>
                        <td className="p-3">$2.200</td>
                    </tr>
                    <tr>
                        <td className="p-3">
                            <div className="flex items-center italic gap-3">
                                <Image src={"/noavatar.png"} alt="" height={40} width={40} className="rounded-full object-cover" />
                                John Doe
                            </div>
                        </td>
                        <td className="p-3">
                            <span className="rounded-md p-1 text-sm text-white" style={{ backgroundColor: getColor('pending') }}>Pending</span>
                        </td>
                        <td className="p-3">14.02.2024</td>
                        <td className="p-3">$2.200</td>
                    </tr>
                    <tr>
                        <td className="p-3">
                            <div className="flex items-center italic gap-3">
                                <Image src={"/noavatar.png"} alt="" height={40} width={40} className="rounded-full object-cover" />
                                John Doe
                            </div>
                        </td>
                        <td className="p-3">
                            <span className="rounded-md p-1 text-sm text-white" style={{ backgroundColor: getColor('pending') }}>Pending</span>
                        </td>
                        <td className="p-3">14.02.2024</td>
                        <td className="p-3">$2.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;

const getColor = (status) => {
    switch (status) {
        case "pending":
            return "#f7cb7375";
        case "done":
            return "#afd6ee75";
        case "cancelled":
            return "#f7737375";
        default:
            return "";
    }
}