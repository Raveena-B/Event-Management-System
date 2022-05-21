const router = require("express").Router();
const Event = require("../models/event"); //import model

router.route("/add").post((req, res) => {
  const eventId = req.body.eventId;
  const eventName = req.body.eventName;
  const amount = req.body.amount;

  const newEventData = {
    eventId,
    eventName,
    amount,
  };

  const newEvent = new Event(newEventData);

  newEvent
    .save()
    .then(() => res.json("New Event Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Event.find()
    .then((Events) => {
      res.json(Events);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const EventID = req.params.id;
  await Event.findById(EventID)
    .then((Event) => res.json(Event))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let EventID = req.params.id;
  const eventId = req.body.eventId;
  const eventName = req.body.eventName;
  const amount = req.body.amount;

  const updateEvent = { eventId, eventName, amount };

  await Event.findByIdAndUpdate(EventID, updateEvent)
    .then(() => {
      res.status(200).send({ status: "Event Updated" });
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
  let EventID = req.params.id;

  await Event.findByIdAndDelete(EventID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Event Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
