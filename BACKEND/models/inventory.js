const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  storeName: {
    type: String,
    required: true,
    trim: true,
  },

  date: {
    type: String,
    required: true,
    trim: true,
  },

  amount: {
    type: Number,
    required: true,
    trim: true,
  },
});

const inventory = mongoose.model("inventory", inventorySchema);

module.exports = inventory;
