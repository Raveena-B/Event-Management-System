const router = require("express").Router();
const Inventory = require("../models/inventory"); //import model

router.route("/add").post((req, res) => {
  const storeName = req.body.storeName;
  const date = req.body.date;
  const amount = req.body.amount;

  const newInventoryData = {
    storeName,
    date,
    amount,
  };

  const newInventory = new Inventory(newInventoryData);

  newInventory
    .save()
    .then(() => res.json("New Inventory Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Inventory.find()
    .then((Inventories) => {
      res.json(Inventories);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  const InventoryID = req.params.id;
  await Inventory.findById(InventoryID)
    .then((Inventory) => res.json(Inventory))
    .catch((err) => res.status(500).json({ succes: false, err: err }));
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let InventoryID = req.params.id;
  const storeName = req.body.storeName;
  const date = req.body.date;
  const amount = req.body.amount;

  const updateInventory = { storeName, date, amount };

  await Inventory.findByIdAndUpdate(InventoryID, updateInventory)
    .then(() => {
      res.status(200).send({ status: "Inventory Updated" });
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
  let InventoryID = req.params.id;

  await Inventory.findByIdAndDelete(InventoryID)
    .then(() => {
      res
        .status(200)
        .send({ status: "Inventory Collection has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
