import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const CoffeeCard = ({ coffee }) => {
    const { name, chef, photo } = coffee || {};

    return (
        <div className="card card-side bg-background w-full max-w-md p-8">
            {/* Coffee Image */}
            <figure className="p-4">
                <img
                    src={photo}
                    alt="Coffee"
                    className="rounded-xl w-28 h-28 object-cover"
                />
            </figure>

            {/* Coffee Details */}
            <div className="card-body p-4 flex-row justify-between items-center">
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Name:</span> {name}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Chef:</span> {chef}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Price:</span> 890 Taka
                    </p>
                </div>

                {/* Actions */}
                <div className="card-actions justify-end flex flex-col">
                    {/* Info Icon */}
                    <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300">
                        <FaInfoCircle className="w-5 h-5" />
                    </button>

                    {/* Edit Icon */}
                    <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300">
                        <FaEdit className="w-5 h-5" />
                    </button>

                    {/* Delete Icon */}
                    <button className="btn btn-circle btn-sm bg-red-200 hover:bg-red-300">
                        <FaTrash className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
};

export default CoffeeCard;
