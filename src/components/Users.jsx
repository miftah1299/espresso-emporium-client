import { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleUserDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            // if user confirms delete
            if (result.isConfirmed) {
                fetch(`https://espresso-server-gamma.vercel.app/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            // remove user from users state
                            const remainingUsers = users.filter(
                                (user) => user._id !== id
                            );
                            setUsers(remainingUsers);
                        }
                    });
            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">
                Users: {users.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Photo</th> */}
                            <th>Created At</th>
                            <th>Last Signin At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display users */}
                        {users.map((user) => (
                            <tr key={user._id} className="hover">
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/* <td>
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src={user.photo}
                                        alt="user"
                                    />
                                </td> */}
                                <td>{user.lastSigninTime}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button className="btn bg-primayLight">
                                        <FaRegEdit size={20} />
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleUserDelete(user._id)
                                        }
                                        className="btn bg-red-500"
                                    >
                                        <FaRegTrashAlt size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
