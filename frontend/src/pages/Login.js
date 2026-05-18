import React, { useState } from "react";

import axios from "axios";

const Login = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(

          "http://localhost:5000/api/auth/login",

          {
            email,
            password,
          }
        );

      console.log(response.data);

      alert("Login Successful");

      localStorage.setItem(
        "token",
        response.data.token
      );

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };


  return (

    <div className="flex justify-center items-center min-h-screen bg-[#020b2d]">

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-12 rounded-3xl w-[500px]"
      >

        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          Login
        </h1>

        <div className="flex flex-col gap-6">

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
            className="bg-cyan-500 hover:bg-cyan-600 p-5 rounded-xl text-xl font-bold"
          >
            Login
          </button>

        </div>

      </form>

    </div>
  );
};

export default Login;