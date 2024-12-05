import Swal from "sweetalert2";
const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const coffee = {
            name: form.name.value,
            chef: form.chef.value,
            supplier: form.supplier.value,
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value,
        };
        // console.log(coffee);
        fetch("https://espresso-server-gamma.vercel.app/coffee", {
            method: "POST",
            Navbars: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(coffee),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee added successfully!",
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
                    Add New Coffee
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Fill in the form below to add a new coffee
                </p>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
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
                                placeholder="Enter photo URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn font-rancho text-xl bg-primayLight border-primaryDark text-primaryDark mt-6 w-full"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
