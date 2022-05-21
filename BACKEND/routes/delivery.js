const router = require("express").Router();
const Delivery = require("../models/delivery"); //import model

router.route("/add").post((req, res) => {
  const deliveryType = req.body.deliveryType;
  const date = req.body.date;
  const amount = req.body.amount;

  const newDeliveryData = {
    deliveryType,
    date,
    amount,
  };

  const newDelivery = new Delivery(newDeliveryData);

  newDelivery
    .save()
    .then(() => res.json("New Delivery Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Delivery.find()
    .then((Deliveries) => {
      res.json(Deliveries);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const DeliveryID = req.params.id;
  await Delivery.findById(DeliveryID)
    .then((Delivery) => res.json(Delivery))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let DeliveryID = req.params.id;
  const deliveryType = req.body.deliveryType;
  const date = req.body.date;
  const amount = req.body.amount;

  const updateDelivery = { deliveryType, date, amount };

  await Delivery.findByIdAndUpdate(DeliveryID, updateDelivery)
    .then(() => {
      res.status(200).send({ status: "Delivery Updated" });
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
  let DeliveryID = req.params.id;

  await Delivery.findByIdAndDelete(DeliveryID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Delivery Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
