import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } =
        coffee || {};

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedCoffee = {
            name: form.name.value,
            chef: form.chef.value,
            supplier: form.supplier.value,
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value,
        };
        // console.log(updatedCoffee);

        // send a PUT request to update the coffee
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Updated successfully!",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                }
            });

        // form.reset();
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-screen-lg w-full bg-background shadow-lg rounded-lg p-16">
                <h1 className="text-4xl font-rancho font-bold text-center mb-4">
                    Update Existing Coffee Details
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Update the details of the coffee you want to modify below
                </p>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Enter coffee name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Chef */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input
                                type="text"
                                name="chef"
                                defaultValue={chef}
                                placeholder="Enter coffee chef"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Supplier */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                defaultValue={supplier}
                                placeholder="Enter coffee supplier"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Taste */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input
                                type="text"
                                name="taste"
                                defaultValue={taste}
                                placeholder="Enter coffee taste"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={category}
                                placeholder="Enter coffee category"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input
                                type="text"
                                name="details"
                                defaultValue={details}
                                placeholder="Enter coffee details"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Photo */}
                        <div className="form-control col-span-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                defaultValue={photo}
                                placeholder="Enter photo URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn font-rancho text-xl bg-primayLight border-primaryDark text-primaryDark mt-6 w-full"
                    >
                        Update Coffee Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
