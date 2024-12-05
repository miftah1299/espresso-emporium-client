import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-primaryDark p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    Espresso Emporium
                </div>
                <div className="space-x-4">
                    <NavLink
                        to="/"
                        exact
                        className="text-primayLight hover:text-white"
                        activeClassName="text-white"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/auth/signin"
                        className="text-primayLight hover:text-white"
                        activeClassName="text-white"
                    >
                        Sign In
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
