const router = require("express").Router();
const Advertisement = require("../models/advertisement"); //import model

router.route("/add").post((req, res) => {
  const advertisementName = req.body.advertisementName;
  const date = req.body.date;
  const amount = req.body.amount;

  const newAdvertisementData = {
    advertisementName,
    date,
    amount,
  };

  const newAdvertisement = new Advertisement(newAdvertisementData);

  newAdvertisement
    .save()
    .then(() => res.json("New Advertisement Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Advertisement.find()
    .then((Advertisements) => {
      res.json(Advertisements);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const AdvertisementID = req.params.id;
  await Advertisement.findById(AdvertisementID)
    .then((Advertisement) => res.json(Advertisement))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let AdvertisementID = req.params.id;
  const advertisementName = req.body.advertisementName;
  const date = req.body.date;
  const amount = req.body.amount;

  const updateAdvertisement = { advertisementName, date, amount };

  await Advertisement.findByIdAndUpdate(AdvertisementID, updateAdvertisement)
    .then(() => {
      res.status(200).send({ status: "Advertisement Updated" });
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
  let AdvertisementID = req.params.id;

  await Advertisement.findByIdAndDelete(AdvertisementID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Advertisement Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
