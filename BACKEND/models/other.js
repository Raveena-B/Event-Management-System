const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const otherSchema = new Schema({
  forWhat: {
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

const other = mongoose.model("other", otherSchema);

module.exports = other;
