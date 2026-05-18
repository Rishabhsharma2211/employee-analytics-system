import React, { useEffect, useState } from "react";

import API from "../services/api";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {

    try {

      const response = await API.get(
        "/employees"
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {

    try {

      await API.delete(
        `/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {

      console.log(error);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen text-white">

      <h1 className="text-5xl font-bold mb-10 text-orange-400">
        Employee List
      </h1>

      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-gray-900 border border-gray-700 p-4 rounded-2xl mb-10 outline-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredEmployees.map((employee) => (

          <div
            key={employee._id}
            className="bg-gray-900 p-6 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
          >

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              {employee.name}
            </h2>

            <div className="space-y-2 text-gray-300">

              <p>
                <span className="font-bold text-white">
                  Department:
                </span>{" "}
                {employee.department}
              </p>

              <p>
                <span className="font-bold text-white">
                  Salary:
                </span>{" "}
                ₹{employee.salary}
              </p>

              <p>
                <span className="font-bold text-white">
                  Performance:
                </span>{" "}
                {employee.performance}
              </p>

              <p>
                <span className="font-bold text-white">
                  Skills:
                </span>{" "}
                {employee.skills}
              </p>

            </div>

            <div className="flex gap-4 mt-8">

              <button
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold transition-all"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmployee(employee._id)}
                className="flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold transition-all"
              >
                Delete
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default EmployeeList;