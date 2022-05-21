const router = require("express").Router();
const Employee = require("../models/salary"); //import model

router.route("/add").post((req, res) => {
  const employeeId = req.body.employeeId;
  const employeeName = req.body.employeeName;
  const date = req.body.date;
  const amount = req.body.amount;

  const newEmployeeData = {
    employeeId,
    employeeName,
    date,
    amount,
  };

  const newEmployee = new Employee(newEmployeeData);

  newEmployee
    .save()
    .then(() => res.json("New Employee Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Employee.find()
    .then((Employees) => {
      res.json(Employees);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const EmployeeID = req.params.id;
  await Employee.findById(EmployeeID)
    .then((Employee) => res.json(Employee))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let EmployeeID = req.params.id;
  const employeeId = req.body.employeeId;
  const employeeName = req.body.employeeName;
  const date = req.body.date;
  const amount = req.body.amount;

  const updateEmployee = { employeeId, employeeName, date, amount };

  await Employee.findByIdAndUpdate(EmployeeID, updateEmployee)
    .then(() => {
      res.status(200).send({ status: "Employee Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  //delete data
  let EmployeeID = req.params.id;

  await Employee.findByIdAndDelete(EmployeeID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Employee Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
