

import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";




function CreateUser() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-400 p-5">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add User</h2>
          
          <form onSubmit={Submit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            {/* Age Input */}
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-600 mb-2">
                Age
              </label>
              <input
                id="age"
                type="number"
                placeholder="Enter age"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default CreateUser;
  