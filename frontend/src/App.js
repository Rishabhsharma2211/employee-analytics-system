import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import AddEmployee from "./pages/AddEmployee";

import EmployeeList from "./pages/EmployeeList";

import Analytics from "./pages/Analytics";

import Login from "./pages/Login";

import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (

    <BrowserRouter>

      <div className="flex min-h-screen bg-[#020b2d] text-white">

        {/* SIDEBAR */}

        <div className="w-72 bg-black p-8">

          <h1 className="text-5xl font-bold text-cyan-400 mb-16 leading-tight">
            Employee
            <br />
            Analytics
          </h1>

          <div className="flex flex-col gap-8 text-2xl">

            <Link
              to="/"
              className="hover:text-cyan-400 transition-all"
            >
              Dashboard
            </Link>

            <Link
              to="/add-employee"
              className="hover:text-cyan-400 transition-all"
            >
              Add Employee
            </Link>

            <Link
              to="/employees"
              className="hover:text-cyan-400 transition-all"
            >
              Employee List
            </Link>

            <Link
              to="/analytics"
              className="hover:text-cyan-400 transition-all"
            >
              Analytics
            </Link>

            <Link
              to="/login"
              className="hover:text-cyan-400 transition-all"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-cyan-400 transition-all"
            >
              Register
            </Link>

          </div>

        </div>

        {/* MAIN CONTENT */}

        <div className="flex-1 p-20 overflow-y-auto">

          <Routes>

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/add-employee"
              element={
                <ProtectedRoute>
                  <AddEmployee />
                </ProtectedRoute>
              }
            />

            <Route
              path="/employees"
              element={
                <ProtectedRoute>
                  <EmployeeList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;