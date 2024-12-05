import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Error404 from "../pages/Error404";

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
                path: "/updatecoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/coffee/${params.id}`),
            },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

export default routes;
