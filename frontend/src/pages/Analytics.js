import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function Analytics() {

  const [aiData, setAiData] =
    useState("");

  useEffect(() => {

    fetchAI();

  }, []);

  const fetchAI = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/employees/ai"
        );

      setAiData(
        response.data.result
      );

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      <h1 className="text-5xl font-bold text-pink-400 mb-10">
        AI Analytics
      </h1>

      <div className="bg-[#1e293b] p-10 rounded-3xl shadow-lg">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          AI Recommendations
        </h2>

        <p className="text-xl leading-10 whitespace-pre-line text-gray-200">
          {aiData}
        </p>

      </div>

    </div>
  );
}

export default Analytics;