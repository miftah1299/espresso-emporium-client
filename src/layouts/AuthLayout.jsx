import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-pattern space-y-4">
            <header>
                <Navbar />
            </header>

            <Outlet />
        </div>
    );
};

export default AuthLayout;
