import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Error404 from "../pages/Error404";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Users from "../components/Users";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/coffee"),
            },
            {
                path: "/addcoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updatecoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/coffee/${params.id}`),
            },
            {
                path: "users",
                element: <Users />,
                loader: () => fetch("http://localhost:5000/users"),
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/signin",
                element: <Signin />,
            },
            {
                path: "/auth/signup",
                element: <Signup />,
            },
            {
                path: "forgot-password",
                element: <div>Forgot password</div>,
            },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

export default routes;
