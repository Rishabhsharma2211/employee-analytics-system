const Employee = require("../models/Employee");

const axios = require("axios");


// ADD EMPLOYEE

exports.addEmployee = async (req, res) => {

  try {

    const employee = await Employee.create(
      req.body
    );

    res.status(201).json(employee);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET EMPLOYEES

exports.getEmployees = async (req, res) => {

  try {

    const employees =
      await Employee.find();

    res.json(employees);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE EMPLOYEE

exports.deleteEmployee = async (
  req,
  res
) => {

  try {

    await Employee.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Employee Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// AI RECOMMENDATION

exports.aiRecommendation = async (
  req,
  res
) => {

  try {

    const employees =
      await Employee.find();

    const employeeData =
      employees
        .map(
          (emp) => `
Name: ${emp.name}
Department: ${emp.department}
Performance: ${emp.performance}
Skills: ${emp.skills}
Salary: ${emp.salary}
`
        )
        .join("\n");


    const response =
      await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {

          model:
            "openai/gpt-3.5-turbo",

          messages: [

            {
              role: "system",

              content:
                "You are an HR analytics AI assistant.",
            },

            {
              role: "user",

              content: `
Analyze these employees and provide:
1. Promotion recommendations
2. Skill improvement suggestions
3. Best performers

${employeeData}
`,
            },
          ],
        },

        {

          headers: {

            Authorization:
              `Bearer ${process.env.OPENROUTER_API_KEY}`,

            "Content-Type":
              "application/json",
          },
        }
      );

    res.json({

      success: true,

      result:
        response.data.choices[0]
          .message.content,
    });

  } catch (error) {

    console.log(
      error.response?.data
    );

    res.status(500).json({

      message: error.message,
    });
  }
};