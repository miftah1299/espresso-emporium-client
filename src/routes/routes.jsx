import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const routes = createBrowserRouter([
    {
        path: "/",
        component: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
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
