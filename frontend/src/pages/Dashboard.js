import React from "react";

const Dashboard = () => {

  return (

    <div className="w-full">

      <h1 className="text-7xl font-bold text-cyan-400 mb-14">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-10">

        <div className="bg-gray-800 p-12 rounded-3xl shadow-2xl min-h-[220px] hover:scale-105 transition-all duration-300">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Total Employees
          </h2>

          <p className="text-6xl font-bold text-green-400">
            120
          </p>

        </div>

        <div className="bg-gray-800 p-12 rounded-3xl shadow-2xl min-h-[220px] hover:scale-105 transition-all duration-300">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Top Performers
          </h2>

          <p className="text-6xl font-bold text-cyan-400">
            15
          </p>

        </div>

        <div className="bg-gray-800 p-12 rounded-3xl shadow-2xl min-h-[220px] hover:scale-105 transition-all duration-300">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Average Rating
          </h2>

          <p className="text-6xl font-bold text-orange-400">
            4.5
          </p>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;