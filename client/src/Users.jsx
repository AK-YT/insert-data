import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])



          return (
            <div className="flex items-center justify-center min-h-screen bg-blue-500">
              <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <Link
                  to="/create"
                  className="mb-4 inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
                >
                  Add User +
                </Link>
        
                <table className="w-full table-auto text-left border-separate border-spacing-0.5">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">Name</th>
                      <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">Email</th>
                      <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">Age</th>
                      <th className="py-2 px-4 bg-gray-100 text-gray-600 font-semibold">Action</th>
                    </tr>
                  </thead>
        
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-4 text-gray-700">{user.name}</td>
                        <td className="py-3 px-4 text-gray-700">{user.email}</td>
                        <td className="py-3 px-4 text-gray-700">{user.age}</td>
                        <td className="py-3 px-4">
                          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition duration-200">
                            Update
                          </button>
                          <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition duration-200">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }



export default Users



