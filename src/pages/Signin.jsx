import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Login to your account
                        </h3>

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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />

                        {/* {error?.login && (
                            <label className="label text-red-500 text-sm">
                                {error.login}
                            </label>
                        )} */}

                        <label className="label">
                            <Link
                                to="/auth/forgot-password"
                                className="label-text-alt link link-hover text-Orange"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn bg-primaryDark text-white px-6 py-2 rounded-full">
                            Sign In
                        </button>

                        {/* Sign in with Google */}
                        <button
                            // onClick={handleGoogleSignIn}
                            className="btn btn-outline px-6 py-2 rounded-full hover:bg-primary"
                        >
                            <FcGoogle size={24} />
                            Sign In with Google
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/auth/signup"
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
