import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handeSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                // console.log(result);
                const createdAt = result?.user?.metadata?.creationTime;

                const newUser = { name, email, photo, createdAt };
                // save new user info to database
                fetch("https://espresso-server-gamma.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("user created to db", data);
                        if (data.insertedId) {
                            alert("User created successfully");
                        }
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 border border-primaryDark rounded-md p-10">
                <form onSubmit={handeSignup} className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Register for an account
                        </h3>
                        {/* name */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                        {/* {error.name && (
                            <label className="label text-red-500 text-sm">
                                {error.name}
                            </label>
                        )} */}

                        {/* photo */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URl
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                        {/* email */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <div className="absolute inset-y-14 right-0 pr-3 flex items-center cursor-pointer"></div>
                        {/* {error.password && (
                        <p className="text-red-500 text-sm mt-2">
                            {error.password}
                        </p>
                    )} */}
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn bg-primaryDark text-white px-6 py-2 rounded-full">
                            Sign Up
                        </button>

                        {/* sign up with google */}
                        <button
                            // onClick={handleGoogleSignIn}
                            className="btn btn-outline px-6 py-2 rounded-full"
                        >
                            <FcGoogle size={24} />
                            Sign Up with Google
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/signin"
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
