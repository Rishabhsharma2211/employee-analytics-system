import React, { useState } from "react";

import axios from "axios";

const Register = () => {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(

          "http://localhost:5000/api/auth/register",

          {
            name,
            email,
            password,
          }
        );

      console.log(response.data);

      alert("Registration Successful");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };


  return (

    <div className="flex justify-center items-center min-h-screen bg-[#020b2d]">

      <form
        onSubmit={handleRegister}
        className="bg-gray-900 p-12 rounded-3xl w-[500px]"
      >

        <h1 className="text-5xl font-bold text-green-400 mb-10">
          Register
        </h1>

        <div className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="p-5 rounded-xl bg-gray-800 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="p-5 rounded-xl bg-gray-800 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="p-5 rounded-xl bg-gray-800 text-white outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 p-5 rounded-xl text-xl font-bold"
          >
            Register
          </button>

        </div>

      </form>

    </div>
  );
};

export default Register;