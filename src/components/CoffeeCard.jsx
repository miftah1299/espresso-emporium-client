import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, photo } = coffee || {}; // {} is a fallback in case coffee is undefined

    const handleDelete = (_id) => {
        // console.log(`Delete coffee with id: ${_id}`);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                            });
                            // Reload the page
                            // window.location.reload();
                        }
                    });
            }
        });
    };

    return (
        <div className="card card-side bg-background rounded-md w-full max-w-xl h-72 p-8">
            {/* Coffee Image */}
            <figure className="p-4">
                <img
                    src={photo}
                    alt="Coffee"
                    className="w-28 h-full object-cover"
                />
            </figure>

            {/* Coffee Details */}
            <div className="card-body p-4 flex-row justify-between items-center">
                <div className="text-center">
                    <p className="text-xl text-gray-600">
                        <span className="font-semibold">Name:</span> {name}
                    </p>
                    <p className="text-xl text-gray-600">
                        <span className="font-semibold">Chef:</span> {chef}
                    </p>
                    <p className="text-xl text-gray-600">
                        <span className="font-semibold">Price:</span> 800 Taka
                    </p>
                </div>

                {/* Actions */}
                <div className="card-actions justify-end flex flex-col">
                    {/* Info Icon */}
                    <button className="btn btn-circle btn-sm bg-primayLight">
                        <FaInfoCircle size={20} />
                    </button>

                    {/* Edit Icon */}
                    <Link
                        to={`/updatecoffee/${_id}`}
                        className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300"
                    >
                        <FaEdit size={20} />
                    </Link>

                    {/* Delete Icon */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-circle btn-sm bg-red-200 hover:bg-red-300"
                    >
                        <FaTrash size={20} />
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
