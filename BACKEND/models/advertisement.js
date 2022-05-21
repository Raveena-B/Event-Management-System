const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advertisementSchema = new Schema({
  advertisementName: {
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

const advertisement = mongoose.model("advertisement", advertisementSchema);

module.exports = advertisement;
