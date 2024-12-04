import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, photo } = coffee || {};

    return (
        <div>
            <h2>Update Coffee: {name}</h2>
        </div>
    );
};

export default UpdateCoffee;
