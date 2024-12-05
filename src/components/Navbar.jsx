import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-primaryDark p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-rancho text-white text-3xl font-medium">
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
                    <NavLink
                        to="/users"
                        className="text-primayLight hover:text-white"
                        activeClassName="text-white"
                    >
                        Users
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
