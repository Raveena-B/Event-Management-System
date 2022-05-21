const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  appointmentType: {
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

const appointment = mongoose.model("appointment", appointmentSchema);

module.exports = appointment;
