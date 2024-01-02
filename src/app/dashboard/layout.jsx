import Footer from "../ui/dashboard/footer/page";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";


const Layout = ({ children }) => {
    return (
        <div className="flex">
            <div className="flex-1 bg-bgSoft p-5 min-h-screen">
                <Sidebar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout;