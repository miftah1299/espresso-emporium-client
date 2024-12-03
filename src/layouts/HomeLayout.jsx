import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <div>
            home
            <Header />

            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
