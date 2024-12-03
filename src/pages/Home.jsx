import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
    const coffees = useLoaderData();

    return (
        <div className="text-center space-y-4">
            <h5>--- SIp & Savor ---</h5>
            <h2>Our Popular Products</h2>
            <button className="btn">Add Coffee</button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee._id} coffee={coffee} />
                ))}
            </div>
        </div>
    );
};

export default Home;
