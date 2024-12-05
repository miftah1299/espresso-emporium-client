import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Toaster /> */}

        {/* Navbar */}
        <Navbar />
            

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
            
        </div>
    );
};

export default HomeLayout;
