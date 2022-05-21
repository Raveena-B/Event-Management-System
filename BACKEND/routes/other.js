const router = require("express").Router();
const Other = require("../models/other"); //import model

router.route("/add").post((req, res) => {
  const forWhat = req.body.forWhat;
  const date = req.body.date;
  const amount = req.body.amount;

  const newOtherData = {
    forWhat,
    date,
    amount,
  };

  const newOther = new Other(newOtherData);

  newOther
    .save()
    .then(() => res.json("New Other Payment  Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Other.find()
    .then((others) => {
      res.json(others);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const OtherID = req.params.id;
  await Other.findById(OtherID)
    .then((Other) => res.json(Other))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let OtherID = req.params.id;
  const forWhat = req.body.forWhat;
  const date = req.body.date;
  const amount = req.body.amount;

  const updateOther = { forWhat, date, amount };

  await Other.findByIdAndUpdate(OtherID, updateOther)
    .then(() => {
      res.status(200).send({ status: "Other Payment Updated" });
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
  let OtherID = req.params.id;

  await Other.findByIdAndDelete(OtherID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Other Payment Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
