import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const routes = createBrowserRouter([
    {
        path: "/",
        component: <HomeLayout />,
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
                path: "/updatecoffee",
                element: <UpdateCoffee />,
            },
        ],
    },
]);

export default routes;
