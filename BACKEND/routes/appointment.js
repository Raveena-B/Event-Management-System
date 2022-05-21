const router = require("express").Router();
const Appointment = require("../models/appointment"); //import model

router.route("/add").post((req, res) => {
  const appointmentType = req.body.appointmentType;
  const date = req.body.date;
  const amount = req.body.amount;

  const newAppointmentData = {
    appointmentType,
    date,
    amount,
  };

  const newAppointment = new Appointment(newAppointmentData);

  newAppointment
    .save()
    .then(() => res.json("New Appointment Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Appointment.find()
    .then((Appointments) => {
      res.json(Appointments);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const AppointmentID = req.params.id;
  await Appointment.findById(AppointmentID)
    .then((Appointment) => res.json(Appointment))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let AppointmentID = req.params.id;
  const appointmentType = req.body.appointmentType;
  const date = req.body.date;
  const amount = req.body.amount;

  const updateAppointment = { appointmentType, date, amount };

  await Appointment.findByIdAndUpdate(AppointmentID, updateAppointment)
    .then(() => {
      res.status(200).send({ status: "Appointment Updated" });
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
  let AppointmentID = req.params.id;

  await Appointment.findByIdAndDelete(AppointmentID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Appointment Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
