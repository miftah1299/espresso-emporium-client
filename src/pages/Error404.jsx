import { Link } from "react-router-dom";
import error from "../assets/404/404.gif";
const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center max-h-screen bg-gray-100 space-y-4">
            {/* Show gif */}
            <img src={error} alt="404" className="w-full" />

            {/* Show text */}
            <div className="absolute text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800">
                    Page not found
                </h2>
                <p className="text-gray-800 mb-10">
                    The page you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    className="btn text-lg bg-primayLight rounded-md text-primaryDark font-bold px-4 py-2"
                >
                    Go back to home page 🏠
                </Link>
            </div>
        </div>
    );
};

export default Error404;
