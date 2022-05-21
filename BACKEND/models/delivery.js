const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  deliveryType: {
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

const delivery = mongoose.model("delivery", deliverySchema);

module.exports = delivery;
