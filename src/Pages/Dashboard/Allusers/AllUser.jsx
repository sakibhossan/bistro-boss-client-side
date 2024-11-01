import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })
    const handleDeleteUser =user =>{


    }

    return (
        <div>
           <div className="flex justify-evenly">
            <h2 className="text-3xl">All Users</h2>
            <h2 className="text-3xl">Total Users{users.length}</h2>
           </div>
           <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, index) =>
        <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-xs bg-orange-300"
                  >
                    <FaUser className="text-white text-2xl"></FaUser>
                  </button>
            </td>
            <td><button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt className="text-red-500"></FaTrashAlt>
                  </button></td>
          </tr>)
      }
     
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUser;