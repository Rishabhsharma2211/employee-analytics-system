import React, { useState } from "react";

import API from "../services/api";

const AddEmployee = () => {

  const [name, setName] = useState("");

  const [department, setDepartment] = useState("");

  const [salary, setSalary] = useState("");

  const [performance, setPerformance] = useState("");

  const [skills, setSkills] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/employees",
        {
          name,
          department,
          salary,
          performance,
          skills: skills.split(","),
        }
      );

      console.log(response.data);

      alert("Employee Added Successfully");

      setName("");
      setDepartment("");
      setSalary("");
      setPerformance("");
      setSkills("");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      <h1
        style={{
          color: "#22c55e",
          fontSize: "45px",
          marginBottom: "30px",
        }}
      >
        Add Employee
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "500px",
        }}
      >

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) =>
            setSalary(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Performance Rating"
          value={performance}
          onChange={(e) =>
            setPerformance(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            background: "#22c55e",
            color: "white",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Add Employee
        </button>

      </form>

    </div>
  );
};


const inputStyle = {

  padding: "15px",

  borderRadius: "10px",

  border: "none",

  background: "#0f172a",

  color: "white",

  fontSize: "16px",
};

export default AddEmployee;