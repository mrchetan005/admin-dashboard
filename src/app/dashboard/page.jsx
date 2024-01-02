import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";


const Dashboard = () => {
    return (
        <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-5 flex-[3]">
                <div className="flex gap-5 justify-between">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className="flex-1">
                <Rightbar />
            </div>
        </div>
    )
}

export default Dashboard;